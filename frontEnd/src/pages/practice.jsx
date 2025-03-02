import React, { useEffect, useState } from "react";

const Experiment = () => {
  const [crimeData, setCrimeData] = useState({ firstTable: [], secondTable: [] });
  const [firstQuery, setFirstQuery] = useState("");
  const [secondQuery, setSecondQuery] = useState("");

  useEffect(() => {
    console.log("Fetching data...");

    fetch("http://localhost:4000/api/practice")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data received:", data);
        if (data && data.data) {
          setCrimeData(data.data);
          setFirstQuery(data.sql.firstQuery || "No first query returned");
          setSecondQuery(data.sql.secondQuery || "No second query returned");
        } else {
          console.error("Unexpected API response format:", data);
        }
      })
      .catch((error) => console.error("Error fetching crime data:", error));
  }, []);

  return (
    <div>
      <h2>Crime Data</h2>

      <h3>Location</h3>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Longitude</th>
            <th>Latitude</th>
          </tr>
        </thead>
        <tbody>
          {crimeData.secondTable.length > 0 ? (
            crimeData.secondTable.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.longitude}</td>
                <td>{row.latitude}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    

      <h3>Region</h3>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {crimeData.secondTable.length > 0 ? (
            crimeData.secondTable.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Experiment;
