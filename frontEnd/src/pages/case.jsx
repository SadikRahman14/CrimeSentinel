import React, { useEffect, useState } from "react";

const Case = () => {
  const [crimeData, setCrimeData] = useState({ firstTable: [], secondTable: [] });
  const [firstQuery, setFirstQuery] = useState("");
  const [secondQuery, setSecondQuery] = useState("");

  useEffect(() => {
    console.log("Fetching crime case data...");

    fetch("http://localhost:4000/api/case") // assuming the endpoint is '/api/cases'
      .then((response) => response.json())
      .then((data) => {
        console.log("Crime case data received:", data);
        if (data && data.data) {
          setCrimeData(data.data);
          setFirstQuery(data.sql.firstQuery || "No first query returned");
          setSecondQuery(data.sql.secondQuery || "No second query returned");
        } else {
          console.error("Unexpected API response format:", data);
        }
      })
      .catch((error) => console.error("Error fetching crime case data:", error));
  }, []);

  return (
    <div>
      <h2>Crime Case Data</h2>

      <h3>Crime Case Statistics</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Crime Type</th>
            <th>Solved Cases</th>
            <th>Unsolved Cases</th>
            <th>Under Investigation Cases</th>
            <th>Pending Cases</th>
            <th>Total Cases</th>
            <th>Locations Involved</th>
          </tr>
        </thead>
        <tbody>
          {crimeData.firstTable.length > 0 ? (
            crimeData.firstTable.map((row, index) => (
              <tr key={index}>
                <td>{row.crime_type}</td>
                <td>{row.solved_cases}</td>
                <td>{row.unsolved_cases}</td>
                <td>{row.under_investigation_cases}</td>
                <td>{row.pending_cases}</td>
                <td>{row.total_cases}</td>
                <td>{row.locations_involved}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      <h3>Region Data</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Crime Type</th>
            <th>Solved Cases</th>
            <th>Unsolved Cases</th>
            <th>Under Investigation Cases</th>
            <th>Pending Cases</th>
            <th>Total Cases</th>
            <th> Regions Involved</th>
          </tr>
        </thead>
        <tbody>
          {crimeData.secondTable.length > 0 ? (
            crimeData.secondTable.map((row, index) => (
              <tr key={index}>
                <td>{row.crime_type}</td>
                <td>{row.solved_cases}</td>
                <td>{row.unsolved_cases}</td>
                <td>{row.under_investigation_cases}</td>
                <td>{row.pending_cases}</td>
                <td>{row.total_cases}</td>
                <td>{row.regions_involved}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Case;
