import React from "react";
import Overview from "./Overview";
import GoalsProgress from "./GoalsProgress";
import DailyReminders from "./DailyReminders";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>HealthHub Dashboard</h1>
      <Overview />
      <GoalsProgress />
      <DailyReminders />
    </div>
  );
};

export default Dashboard;