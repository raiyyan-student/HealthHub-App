import React from "react";

const Reports = () => {
  // Sample report data
  const reports = [
    { period: "Weekly", fitness: "5 hours", nutrition: "1500 calories/day", sleep: "7 hours/day", wellness: "Good" },
    { period: "Monthly", fitness: "20 hours", nutrition: "1500 calories/day", sleep: "7 hours/day", wellness: "Excellent" }
  ];

  return (
    <div className="reports-container">
      <h2>Weekly/Monthly Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Period</th>
            <th>Fitness</th>
            <th>Nutrition</th>
            <th>Sleep</th>
            <th>Wellness</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index}>
              <td>{report.period}</td>
              <td>{report.fitness}</td>
              <td>{report.nutrition}</td>
              <td>{report.sleep}</td>
              <td>{report.wellness}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;