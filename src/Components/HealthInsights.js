import React from "react";
import PersonalizedTips from "./PersonalizedTips";
import Reports from "./Reports";
import TrendsAnalysis from "./TrendsAnalysis";

const HealthInsights = () => {
  return (
    <div className="health-insights-container">
      <h1>Health Insights</h1>
      <PersonalizedTips />
      <Reports />
      <TrendsAnalysis />
    </div>
  );
};

export default HealthInsights;