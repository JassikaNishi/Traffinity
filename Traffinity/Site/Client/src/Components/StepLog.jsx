import React, { useState } from 'react';
import axios from 'axios';

const StepLog = () => {
  const [steps, setSteps] = useState('');

  const handleStepChange = (e) => {
    setSteps(e.target.value);
  };

  const handleStepSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/log-steps', { steps });
      console.log('Steps logged:', response.data);
    } catch (error) {
      console.error('Error logging steps:', error);
    }
  };

  return (
    <div className="step-log">
      <h2>Log Your Daily Steps</h2>
      <form onSubmit={handleStepSubmit}>
        <div>
          <label htmlFor="steps">Steps</label>
          <input
            type="number"
            id="steps"
            value={steps}
            onChange={handleStepChange}
            placeholder="Enter your steps"
          />
        </div>
        <button type="submit">Log Steps</button>
      </form>
    </div>
  );
};

export default StepLog;
