import React from "react";

const PersonalizedTips = () => {
  // Sample personalized tips based on user data
  const tips = [
    "Drink at least 8 glasses of water a day.",
    "Incorporate more fruits and vegetables into your diet.",
    "Aim for 30 minutes of exercise most days of the week.",
    "Get at least 7-8 hours of sleep each night.",
    "Practice mindfulness and stress-relief techniques daily."
  ];

  return (
    <div className="personalized-tips-container">
      <h2>Personalized Tips</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalizedTips;