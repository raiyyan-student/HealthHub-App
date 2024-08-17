import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>HealthHub</h1>
      <div className="links">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/fitnesstracking">FitnessTracking</Link>
        <Link to="/nutritiontracking">NutritionTracking</Link>
        <Link to="/sleepmonitoring">SleepMonitoring</Link>
        <Link to={'/mentalwellness'}>MentalWellness</Link>
        <Link to={'/healthinsights'}>HealthInsights</Link>
        <Link to={'/communitysupport'}>CommunitySupport</Link>
        <Link to={'/settings'}>Settings</Link>
      </div>
    </nav>
  );
};

export default Navbar;