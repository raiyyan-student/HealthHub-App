import React from "react";

const workoutRoutines = [
  { name: "Beginner Full Body", duration: "30 mins", progress: "80%" },
  { name: "Advanced Cardio", duration: "45 mins", progress: "60%" },
  { name: "Yoga and Flexibility", duration: "40 mins", progress: "90%" }
];

const WorkoutRoutines = () => {
  return (
    <div className="workout-routines-container">
      <h2>Workout Routines</h2>
      <ul className="workout-list">
        {workoutRoutines.map((routine, index) => (
          <li key={index}>
            <h3>{routine.name}</h3>
            <p>Duration: {routine.duration}</p>
            <p>Progress: {routine.progress}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutRoutines;