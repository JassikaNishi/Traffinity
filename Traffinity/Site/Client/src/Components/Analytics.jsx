import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

// Helper function to generate random data
const generateRandomData = (numDays = 7) => {
  const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const data = [];
  const today = new Date();

  for (let i = 0; i < numDays; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i); // Create past dates
    data.unshift({
      date: date.toISOString().split("T")[0], // Format date as YYYY-MM-DD
      workout: randomBetween(0, 5), // Random number of workouts
      mood: randomBetween(1, 10), // Mood rating between 1 and 10
      sleep: randomBetween(4, 10), // Hours of sleep between 4 and 10
    });
  }
  return data;
};

const Analytics = ({ dashboardData }) => {
  const [progressData, setProgressData] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState("Weekly");

  useEffect(() => {
    if (dashboardData && dashboardData.length > 0) {
      setProgressData(dashboardData);
    } else {
      // Generate random data if no dashboardData is provided
      setProgressData(generateRandomData());
    }
  }, [dashboardData]);

  const data = {
    labels: progressData.map((entry) => entry.date),
    datasets: [
      {
        label: "Workouts Completed",
        data: progressData.map((entry) => entry.workout),
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Average Mood Rating",
        data: progressData.map((entry) => entry.mood),
        borderColor: "#FF5722",
        backgroundColor: "rgba(255, 87, 34, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Hours of Sleep",
        data: progressData.map((entry) => entry.sleep),
        borderColor: "#2196F3",
        backgroundColor: "rgba(33, 150, 243, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const calculateSum = (key) => {
    return progressData.reduce((acc, entry) => acc + entry[key], 0);
  };

  const calculateAverage = (key) => {
    return progressData.length > 0
      ? (calculateSum(key) / progressData.length).toFixed(1)
      : 0;
  };

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 min-h-screen py-10">
      <div className="container mx-auto p-6 sm:p-8 rounded-lg shadow-xl bg-white">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Health Analytics</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-xl font-semibold text-white">Workouts Completed</h3>
            <p className="text-3xl font-bold text-white">
              {progressData.length > 0 ? calculateSum("workout") : 0}
            </p>
          </div>
          <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-xl font-semibold text-white">Average Mood Rating</h3>
            <p className="text-3xl font-bold text-white">
              {calculateAverage("mood")}
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-xl font-semibold text-white">Average Hours of Sleep</h3>
            <p className="text-3xl font-bold text-white">
              {calculateAverage("sleep")}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Your Progress Over Time</h3>
          <div style={{ position: "relative", height: "400px" }}>
            <Line
              data={data}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: {
                    beginAtZero: true,
                    grid: { color: "#E5E7EB" },
                  },
                  y: {
                    beginAtZero: true,
                    grid: { color: "#E5E7EB" },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
