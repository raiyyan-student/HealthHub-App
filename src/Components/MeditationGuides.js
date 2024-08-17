import React from "react";

const MeditationGuides = () => {
  const exercises = [
    { title: "Deep Breathing", description: "A simple deep breathing exercise to help you relax." },
    { title: "Guided Meditation", description: "A 10-minute guided meditation session to calm your mind." },
    { title: "Body Scan", description: "A body scan exercise to increase awareness of physical sensations." }
  ];

  return (
    <div className="meditation-guides-container">
      <h2>Meditation Guides</h2>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            <h3>{exercise.title}</h3>
            <p>{exercise.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeditationGuides;