import pandas as pd
import numpy as np
import joblib
from sklearn.neighbors import NearestNeighbors
import random

csv_file = "nearby_hospitals.csv"
df = pd.read_csv(csv_file)


def generate_random_phone():
    return f"+91-{random.randint(6000000000, 9999999999)}"
df["Phone"].fillna(df["Phone"].apply(lambda x: generate_random_phone() if pd.isna(x) else x), inplace=True)

locations = df[["Latitude", "Longitude"]].dropna()

model = NearestNeighbors(n_neighbors=1, algorithm='ball_tree')
model.fit(locations)
joblib.dump(model, "nearest_hospital_model.pkl")
df.to_csv("processed_hospitals.csv", index=False)

print("✅ Model trained and saved successfully!")
