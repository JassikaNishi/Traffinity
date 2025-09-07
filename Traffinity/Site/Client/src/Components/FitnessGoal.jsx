import React, { useState } from 'react';
import axios from 'axios';
const useFadeIn = () => {
  return {
    animation: 'fadeIn 1s ease-in-out',
  };
};
const FitnessGoal = () => {
  const fadeIn = useFadeIn();
  const [stepsGoal, setStepsGoal] = useState('');
  const [waterGoal, setWaterGoal] = useState('');
  const [sleepGoal, setSleepGoal] = useState('');
  const [activeHoursGoal, setActiveHoursGoal] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/set-goals', {
        stepsGoal,
        waterGoal,
        sleepGoal,
        activeHoursGoal,
      });
      console.log('Goals set:', response.data);
    } catch (error) {
      console.error('Error setting goals:', error);
    }
  };

  return (
    <div className="fitness-goal">
      <h2>Set Your Fitness Goals</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="stepsGoal">Steps Goal</label>
          <input
            type="number"
            id="stepsGoal"
            value={stepsGoal}
            onChange={(e) => setStepsGoal(e.target.value)}
            placeholder="Enter your steps goal"
          />
        </div>
        <div>
          <label htmlFor="waterGoal">Water Goal (in liters)</label>
          <input
            type="number"
            id="waterGoal"
            value={waterGoal}
            onChange={(e) => setWaterGoal(e.target.value)}
            placeholder="Enter your water intake goal"
          />
        </div>
        <div>
          <label htmlFor="sleepGoal">Sleep Goal (in hours)</label>
          <input
            type="number"
            id="sleepGoal"
            value={sleepGoal}
            onChange={(e) => setSleepGoal(e.target.value)}
            placeholder="Enter your sleep goal"
          />
        </div>
        <div>
          <label htmlFor="activeHoursGoal">Active Hours Goal</label>
          <input
            type="number"
            id="activeHoursGoal"
            value={activeHoursGoal}
            onChange={(e) => setActiveHoursGoal(e.target.value)}
            placeholder="Enter your active hours goal"
          />
        </div>
        <button type="submit">Set Goals</button>
      </form>
    </div>
  );
};

export default FitnessGoal;
