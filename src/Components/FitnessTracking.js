import React from "react";
import ActivityLog from "./ActivityLog";
import StepCounter from "./StepCounter";
import WorkoutRoutines from "./WorkoutRoutines";

const FitnessTracking = () => {
  return (
    <div className="fitness-tracking-container">
      <h1>Fitness Tracking</h1>
      <ActivityLog />
      <StepCounter />
      <WorkoutRoutines />
    </div>
  );
};

export default FitnessTracking;