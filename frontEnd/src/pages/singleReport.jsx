import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import "./singleReport.css"; 

const ReportDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/api/reports/${id}`) 
      .then((response) => response.json())
      .then((data) => setReport(data))
      .catch((error) => console.error("Error fetching report details:", error));
  }, [id]);

  if (!report) return <p className="loading-message">Loading...</p>;

  return (
    <div className="report-details-page">
      <div className="report-details-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          &larr; Back
        </button>

        <h1 className="report-title">{report.crimeTitle}</h1>
        <div className="report-details">
          <p><strong>Date:</strong> {report.date}</p>
          <p><strong>Crime Type:</strong> {report.crimeType}</p>
          <p><strong>Location:</strong> {report.location}</p>
          <p><strong></strong> {report.crimeDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportDetails;