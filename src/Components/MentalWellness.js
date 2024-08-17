import React from "react";
import MoodTracker from "./MoodTracker";
import Journal from "./Journal";
import MeditationGuides from "./MeditationGuides";

const MentalWellness = () => {
  return (
    <div className="mental-wellness-container">
      <h1>Mental Wellness</h1>
      <MoodTracker />
      <Journal />
      <MeditationGuides />
    </div>
  );
};

export default MentalWellness;