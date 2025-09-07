from flask import Flask, request, render_template
import pandas as pd
import folium
import pickle
from geopy.distance import geodesic
from geopy.geocoders import Nominatim

app = Flask(__name__)

df = pd.read_csv("../ML_model/processed_hospitals.csv")

with open("../ML_model/nearest_hospital_model.pkl", "rb") as model_file:
    knn_model = pickle.load(model_file)

def find_nearest_hospitals(user_lat, user_lon, n=5):
    user_location = (user_lat, user_lon)
    df["Distance"] = df.apply(lambda row: geodesic(user_location, (row["Latitude"], row["Longitude"])).km, axis=1)
    nearest_hospitals = df.nsmallest(n, "Distance")
    return nearest_hospitals

def get_address_from_coordinates(lat, lon):
    geolocator = Nominatim(user_agent="geoapiExercises")
    try:
        location = geolocator.reverse((lat, lon), exactly_one=True)
        return location.address if location else "Address not found"
    except Exception as e:
        return "Error fetching address"

@app.route("/", methods=["GET", "POST"])
def index():
    map_html = None
    nearest_hospitals = pd.DataFrame()
    user_address = None

    if request.method == "POST":
        try:
            user_lat = float(request.form["latitude"])
            user_lon = float(request.form["longitude"])

            nearest_hospitals = find_nearest_hospitals(user_lat, user_lon)
            user_address = get_address_from_coordinates(user_lat, user_lon)
            m = folium.Map(location=[user_lat, user_lon], zoom_start=12)
            folium.Marker(
                [user_lat, user_lon], 
                popup=f"You are here: {user_address}", 
                icon=folium.Icon(color="red", icon="user")
            ).add_to(m)
            for _, row in nearest_hospitals.iterrows():
                folium.Marker(
                    [row["Latitude"], row["Longitude"]],
                    popup=f"{row['Name']} - {row['Phone']}",
                    icon=folium.Icon(color="blue")
                ).add_to(m)

            map_html = m._repr_html_()

        except Exception as e:
            return f"Error: {e}"

    return render_template(
        "index.html", 
        map_html=map_html, 
        hospitals=nearest_hospitals.to_dict(orient="records") if not nearest_hospitals.empty else None,
        user_address=user_address
    )

if __name__ == "__main__":
    app.run(debug=True)
