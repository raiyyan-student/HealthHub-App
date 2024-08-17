import React from "react";

const SocialSharing = () => {
  // Sample achievements
  const achievements = [
    "Completed 10,000 steps today!",
    "Lost 5 pounds this month!",
    "Meditated for 30 minutes daily this week!"
  ];

  return (
    <div className="social-sharing-container">
      <h2>Social Sharing</h2>
      <p>Share your achievements with friends and the community:</p>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>
            <button className="share-button">Share: {achievement}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialSharing;