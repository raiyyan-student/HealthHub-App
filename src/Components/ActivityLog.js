import React, { useState } from "react";

const ActivityLog = () => {
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("");

  const addActivity = () => {
    if (activity && duration && intensity) {
      setActivities([...activities, { activity, duration, intensity }]);
      setActivity("");
      setDuration("");
      setIntensity("");
    }
  };

  return (
    <div className="activity-log-container">
      <h2>Activity Log</h2>
      <input
        type="text"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        placeholder="Type of Exercise"
      />
      <input
        type="text"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Duration (mins)"
      />
      <input
        type="text"
        value={intensity}
        onChange={(e) => setIntensity(e.target.value)}
        placeholder="Intensity (low/medium/high)"
      />
      <button onClick={addActivity}>Add Activity</button>
      <ul className="activity-list">
        {activities.map((act, index) => (
          <li key={index}>
            {act.activity} - {act.duration} mins - {act.intensity} intensity
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;