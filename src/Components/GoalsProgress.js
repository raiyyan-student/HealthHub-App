import React from "react";

const GoalsProgress = () => {
  return (
    <div className="goals-progress-container">
      <h2>Goals & Progress</h2>
      <div className="goals-grid">
        <div className="goal-item">
          <h3>Steps</h3>
          <p>Goal: 10,000 steps</p>
          <p>Progress: 7,500 steps</p>
        </div>
        <div className="goal-item">
          <h3>Calorie Intake</h3>
          <p>Goal: 2,000 kcal</p>
          <p>Progress: 1,800 kcal</p>
        </div>
        <div className="goal-item">
          <h3>Sleep</h3>
          <p>Goal: 8 hrs</p>
          <p>Progress: 7 hrs</p>
        </div>
      </div>
    </div>
  );
};

export default GoalsProgress;