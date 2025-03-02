import React from "react";
import "./RecentCrimes.css";

const crimeReports = [
  { year: "2025", time: "24 mins ago", icon: "🌈" },
  { year: "2024", time: "updated", icon: "🌀" },
  { year: "2023", time: "updated", icon: "🎯" },
  { year: "2022", time: "updated", icon: "🌀" },
  { year: "2021", time: "updated", icon: "📌" },
];

const RecentCrimes = () => {
  return (
    <div className="recent-crimes">
      <h2>Recent Crimes Happened</h2>
      <p>Stay informed and vigilant with our comprehensive data...</p>
      <a href="#" className="view-all">View all</a>
      <div className="crime-list">
        {crimeReports.map((report, index) => (
          <div key={index} className="crime-card">
            <span className="crime-time">{report.time}</span>
            <div className="crime-info">
              <span className="crime-icon">{report.icon}</span>
              <div>
                <h3>Crime Reports Of {report.year}</h3>
                <p>Dhaka, Chittagong, Barishal, Sylhet, Rangpur</p>
              </div>
            </div>
            <button className="see-more">See More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentCrimes;
