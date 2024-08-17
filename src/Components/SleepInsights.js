import React from "react";

const SleepInsights = () => {
  const insights = [
    "Maintain a consistent sleep schedule.",
    "Create a relaxing bedtime routine.",
    "Avoid screens and stimulants before bed.",
    "Ensure your sleep environment is comfortable.",
    "Regular exercise can improve sleep quality."
  ];

  return (
    <div className="sleep-insights-container">
      <h2>Sleep Insights</h2>
      <ul>
        {insights.map((insight, index) => (
          <li key={index}>{insight}</li>
        ))}
      </ul>
    </div>
  );
};

export default SleepInsights;