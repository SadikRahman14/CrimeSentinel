import React, { useEffect, useState } from "react";

const Graph = () => {
  const [crimeData, setCrimeData] = useState({ firstTable: [], secondTable: [], thirdTable: [] });
  const [firstQuery, setFirstQuery] = useState("");
  const [secondQuery, setSecondQuery] = useState("");
  const [thirdQuery, setThirdQuery] = useState("");

  useEffect(() => {
    console.log("Fetching data...");

    fetch("http://localhost:4000/api/graph")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data received:", data);
        if (data && data.data) {
          setCrimeData(data.data);
          setFirstQuery(data.sql.firstQuery || "No first query returned");
          setSecondQuery(data.sql.secondQuery || "No second query returned");
          setThirdQuery(data.sql.thirdQuery || "No third query returned");
        } else {
          console.error("Unexpected API response format:", data);
        }
      })
      .catch((error) => console.error("Error fetching crime data:", error));
  }, []);

  return (
    <div>
      <h2>Crime Statistics</h2>

      <h3>Crimes by Location</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Location Name</th>
            <th>Total Crimes</th>
          </tr>
        </thead>
        <tbody>
          {crimeData.firstTable.length > 0 ? (
            crimeData.firstTable.map((row, index) => (
              <tr key={index}>
                <td>{row.location_name}</td>
                <td>{row.total_crimes}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      <h3>Crimes by Region</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Region Name</th>
            <th>Total Crimes</th>
          </tr>
        </thead>
        <tbody>
          {crimeData.secondTable.length > 0 ? (
            crimeData.secondTable.map((row, index) => (
              <tr key={index}>
                <td>{row.region_name}</td>
                <td>{row.total_crimes}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      <h3>Stations with Highest Crime reports</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Station Name</th>
            <th>Total Crimes</th>
          </tr>
        </thead>
        <tbody>
          {crimeData.thirdTable.length > 0 ? (
            crimeData.thirdTable.map((row, index) => (
              <tr key={index}>
                <td>{row.station_name}</td>
                <td>{row.total_crimes}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Graph;