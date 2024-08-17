import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TrendsAnalysis = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Steps",
        data: [5000, 6000, 7000, 8000, 9000, 10000, 11000],
        borderColor: "#42A5F5",
        backgroundColor: "rgba(66, 165, 245, 0.2)",
        fill: true
      },
      {
        label: "Calories",
        data: [2000, 1800, 1700, 1600, 1500, 1400, 1300],
        borderColor: "#FFA726",
        backgroundColor: "rgba(255, 167, 38, 0.2)",
        fill: true
      }
    ]
  };

  return (
    <div className="trends-analysis-container">
      <h2>Trends & Analysis</h2>
      <Line data={data} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Health Trends' } } }} />
    </div>
  );
};

export default TrendsAnalysis;