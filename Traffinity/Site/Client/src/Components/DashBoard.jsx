import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "./Dashboard.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const useFadeIn = () => {
  return {
    animation: 'fadeIn 1s ease-in-out',
  };
};

const Dashboard = () => {
  const fadeIn = useFadeIn();
  const [steps, setSteps] = useState("");
  const [water, setWater] = useState("");
  const [sleep, setSleep] = useState("");
  const [workout, setWorkout] = useState("");
  const [calories, setCalories] = useState("");
  const [progressData, setProgressData] = useState([]);
  const goalSteps = 10000;
  const goalWater = 3;
  const goalSleep = 8;
  const goalWorkout = 2;
  const goalCalories = 500;

  const handleSubmit = () => {
    const currentDate = new Date().toLocaleDateString();
    const newData = {
      date: currentDate,
      steps: Number(steps),
      water: Number(water),
      sleep: Number(sleep),
      workout: Number(workout),
      calories: Number(calories),
    };

    setProgressData((prevData) => [...prevData, newData]);
    setSteps("");
    setWater("");
    setSleep("");
    setWorkout("");
    setCalories("");
  };

  const data = {
    labels: progressData.map((entry) => entry.date),
    datasets: [
      {
        label: "Steps",
        data: progressData.map((entry) => entry.steps),
        borderColor: "#1E88E5",
        backgroundColor: "#1E88E5",
        fill: false,
        pointRadius: 5,
        borderWidth: 2,
      },
      {
        label: "Water Intake (L)",
        data: progressData.map((entry) => entry.water),
        borderColor: "#4CAF50",
        backgroundColor: "#4CAF50",
        fill: false,
        pointRadius: 5,
        borderWidth: 2,
      },
      {
        label: "Sleep (hrs)",
        data: progressData.map((entry) => entry.sleep),
        borderColor: "#FFC107",
        backgroundColor: "#FFC107",
        fill: false,
        pointRadius: 5,
        borderWidth: 2,
      },
      {
        label: "Workout (hrs)",
        data: progressData.map((entry) => entry.workout),
        borderColor: "#FF5722",
        backgroundColor: "#FF5722",
        fill: false,
        pointRadius: 5,
        borderWidth: 2,
      },
      {
        label: "Calories Burned",
        data: progressData.map((entry) => entry.calories),
        borderColor: "#9C27B0",
        backgroundColor: "#9C27B0",
        fill: false,
        pointRadius: 5,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="header-title">Your Daily Health Tracker</h1>
      </div>
      <div className="dashboard-content">
        <div className="summary-left">
          <h2 className="summary-title">Today's Health Overview</h2>
          <div className="summary-item">
            <h3>Steps</h3>
            <p>{steps || 0}/{goalSteps} steps</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${(steps / goalSteps) * 100}%`,
                  backgroundColor: "#1E88E5",
                }}
              ></div>
            </div>
          </div>
          <div className="summary-item">
            <h3>Water Intake</h3>
            <p>{water || 0}/{goalWater} L</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${(water / goalWater) * 100}%`,
                  backgroundColor: "#4CAF50",
                }}
              ></div>
            </div>
          </div>
          <div className="summary-item">
            <h3>Sleep</h3>
            <p>{sleep || 0}/{goalSleep} hours</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${(sleep / goalSleep) * 100}%`,
                  backgroundColor: "#FFC107",
                }}
              ></div>
            </div>
          </div>
          <div className="summary-item">
            <h3>Workout</h3>
            <p>{workout || 0}/{goalWorkout} hours</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${(workout / goalWorkout) * 100}%`,
                  backgroundColor: "#FF5722",
                }}
              ></div>
            </div>
          </div>
          <div className="summary-item">
            <h3>Calories Burned</h3>
            <p>{calories || 0}/{goalCalories} kcal</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${(calories / goalCalories) * 100}%`,
                  backgroundColor: "#9C27B0",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="input-right">
          <h2 className="input-title">Enter Your Daily Stats</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-item">
              <label>Steps</label>
              <input
                type="number"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                placeholder="How many steps today?"
                className="input-field"
              />
            </div>
            <div className="input-item">
              <label>Water Intake (L)</label>
              <input
                type="number"
                value={water}
                onChange={(e) => setWater(e.target.value)}
                placeholder="How much water?"
                className="input-field"
              />
            </div>
            <div className="input-item">
              <label>Sleep (hrs)</label>
              <input
                type="number"
                value={sleep}
                onChange={(e) => setSleep(e.target.value)}
                placeholder="Hours of sleep?"
                className="input-field"
              />
            </div>
            <div className="input-item">
              <label>Workout (hrs)</label>
              <input
                type="number"
                value={workout}
                onChange={(e) => setWorkout(e.target.value)}
                placeholder="Workout hours?"
                className="input-field"
              />
            </div>
            <div className="input-item">
              <label>Calories Burned</label>
              <input
                type="number"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                placeholder="Calories burned?"
                className="input-field"
              />
            </div>
            <button type="submit" className="submit-btn" onClick={handleSubmit}>
              Add Stats
            </button>
          </form>
        </div>
      </div>
      <div className="chart-section">
        <h3>Progress Tracker</h3>
        <Line data={data} />
        <ul className="progress-list">
          {progressData.map((entry, index) => (
            <li key={index} className="progress-item">
              {entry.date} - Steps: {entry.steps}, Water: {entry.water}, Sleep: {entry.sleep}, Workout: {entry.workout}, Calories: {entry.calories}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
