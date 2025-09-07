import requests
import csv
import json

def get_nearby_hospitals(latitude, longitude, radius=10000):
    overpass_url = "http://overpass-api.de/api/interpreter"
    query = f"""
    [out:json];
    (
      node["amenity"="hospital"](around:{radius},{latitude},{longitude});
      way["amenity"="hospital"](around:{radius},{latitude},{longitude});
      relation["amenity"="hospital"](around:{radius},{latitude},{longitude});
    );
    out center;
    """

    response = requests.get(overpass_url, params={"data": query})

    if response.status_code != 200:
        print(f"Error: Unable to fetch data (Status Code: {response.status_code})")
        return []
    
    data = response.json()
    print("Raw API Response:")
    print(json.dumps(data, indent=2))

    hospitals = []

    for element in data.get("elements", []):
        if "tags" in element:
            tags = element["tags"]
            hospital_info = {
                "Name": tags.get("name", "Unknown Hospital"),
                "City": tags.get("addr:city", "N/A"),
                "Street": tags.get("addr:street", "N/A"),
                "Housenumber": tags.get("addr:housenumber", "N/A"),
                "State": tags.get("addr:state", "N/A"),
                "Postcode": tags.get("addr:postcode", "N/A"),
                "Latitude": element.get("lat", element.get("center", {}).get("lat", "N/A")),
                "Longitude": element.get("lon", element.get("center", {}).get("lon", "N/A")),
                "Emergency": tags.get("emergency", "N/A"),
                "Speciality": tags.get("healthcare:speciality", "N/A"),
                "Phone": tags.get("phone", "N/A"),
                "Website": tags.get("website", "N/A")
            }
            hospitals.append(hospital_info)

    return hospitals

def save_hospitals_to_csv(hospitals, filename="nearby_hospitals.csv"):
    if not hospitals:
        print("No hospital data available to save.")
        return

    try:
        with open(filename, "w", newline="", encoding="utf-8") as csvfile:
            fieldnames = hospitals[0].keys()
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(hospitals)
        
        print(f"✅ CSV file '{filename}' has been created successfully!")
    except Exception as e:
        print(f"❌ Error saving CSV: {e}")

latitude, longitude = 12.9716, 77.5946  #  Bangalore, India

hospitals_data = get_nearby_hospitals(latitude, longitude)

if hospitals_data:
    print(f"🏥 Found {len(hospitals_data)} hospitals")
else:
    print("⚠️ No hospitals found.")

save_hospitals_to_csv(hospitals_data)
