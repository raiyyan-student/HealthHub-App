import React, { useState } from "react";

const SleepQuality = () => {
  const [quality, setQuality] = useState("");
  const [disturbances, setDisturbances] = useState("");

  const submitQuality = () => {
    if (quality) {
      alert(`Sleep Quality Rated: ${quality}\nDisturbances: ${disturbances}`);
      setQuality("");
      setDisturbances("");
    }
  };

  return (
    <div className="sleep-quality-container">
      <h2>Sleep Quality</h2>
      <select
        value={quality}
        onChange={(e) => setQuality(e.target.value)}
      >
        <option value="">Rate Sleep Quality</option>
        <option value="Excellent">Excellent</option>
        <option value="Good">Good</option>
        <option value="Fair">Fair</option>
        <option value="Poor">Poor</option>
      </select>
      <textarea
        value={disturbances}
        onChange={(e) => setDisturbances(e.target.value)}
        placeholder="Note any disturbances or reasons for poor sleep"
      />
      <button onClick={submitQuality}>Submit</button>
    </div>
  );
};

export default SleepQuality;