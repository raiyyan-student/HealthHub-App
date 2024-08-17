import React, { useState } from "react";

const SupportGroups = () => {
  const [groups, setGroups] = useState([
    "Weight Loss Support",
    "Fitness Enthusiasts",
    "Mental Wellness Warriors",
    "Healthy Eating"
  ]);

  return (
    <div className="support-groups-container">
      <h2>Support Groups</h2>
      <p>Join or create groups to connect with others:</p>
      <ul>
        {groups.map((group, index) => (
          <li key={index}>
            <button className="join-button">Join: {group}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupportGroups;