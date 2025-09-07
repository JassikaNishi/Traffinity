import React, { useState } from 'react';
import axios from 'axios';

const WaterLog = () => {
  const [waterIntake, setWaterIntake] = useState('');

  const handleWaterChange = (e) => {
    setWaterIntake(e.target.value);
  };

  const handleWaterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/log-water', { waterIntake });
      console.log('Water intake logged:', response.data);
    } catch (error) {
      console.error('Error logging water intake:', error);
    }
  };

  return (
    <div className="water-log">
      <h2>Log Your Daily Water Intake</h2>
      <form onSubmit={handleWaterSubmit}>
        <div>
          <label htmlFor="water">Water (in liters)</label>
          <input
            type="number"
            id="water"
            value={waterIntake}
            onChange={handleWaterChange}
            placeholder="Enter your water intake"
          />
        </div>
        <button type="submit">Log Water</button>
      </form>
    </div>
  );
};

export default WaterLog;
