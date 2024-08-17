import React from "react";
import SleepLog from "./SleepLog";
import SleepQuality from "./SleepQuality";
import SleepInsights from "./SleepInsights";

const SleepMonitoring = () => {
  return (
    <div className="sleep-monitoring-container">
      <h1>Sleep Monitoring</h1>
      <SleepLog />
      <SleepQuality />
      <SleepInsights />
    </div>
  );
};

export default SleepMonitoring;