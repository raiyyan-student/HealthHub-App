import React from "react";

const Overview = () => {
  return (
    <div className="overview-container">
      <h2>Daily Overview</h2>
      <div className="overview-grid">
        <div className="overview-item">
          <h3>Activity</h3>
          <p>Steps: 7,500</p>
          <p>Calories Burned: 500 kcal</p>
        </div>
        <div className="overview-item">
          <h3>Nutrition</h3>
          <p>Calories Consumed: 1,800 kcal</p>
          <p>Protein: 75g</p>
        </div>
        <div className="overview-item">
          <h3>Sleep</h3>
          <p>Hours Slept: 7 hrs</p>
          <p>Quality: Good</p>
        </div>
        <div className="overview-item">
          <h3>Mental Health</h3>
          <p>Check-ins: 2</p>
          <p>Mood: Positive</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;