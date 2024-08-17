import React, { useState } from "react";

const StepCounter = () => {
  const [steps, setSteps] = useState(0);

  const handleStepsChange = (e) => {
    setSteps(e.target.value);
  };

  return (
    <div className="step-counter-container">
      <h2>Step Counter</h2>
      <input
        type="number"
        value={steps}
        onChange={handleStepsChange}
        placeholder="Enter steps"
      />
      <p>Total Steps: {steps}</p>
    </div>
  );
};

export default StepCounter;