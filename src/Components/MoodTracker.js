import React, { useState } from "react";

const MoodTracker = () => {
  const [date, setDate] = useState("");
  const [mood, setMood] = useState("");
  const [stress, setStress] = useState("");

  const submitMood = () => {
    if (date && mood && stress) {
      alert(`Mood for ${date}: ${mood}\nStress Level: ${stress}`);
      setDate("");
      setMood("");
      setStress("");
    }
  };

  return (
    <div className="mood-tracker-container">
      <h2>Mood Tracker</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      >
        <option value="">Select Mood</option>
        <option value="Happy">Happy</option>
        <option value="Neutral">Neutral</option>
        <option value="Sad">Sad</option>
      </select>
      <input
        type="number"
        value={stress}
        onChange={(e) => setStress(e.target.value)}
        placeholder="Stress Level (1-10)"
        min="1"
        max="10"
      />
      <button onClick={submitMood}>Log Mood</button>
    </div>
  );
};

export default MoodTracker;