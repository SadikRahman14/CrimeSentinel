import React, { useEffect, useState } from "react";

const Experiment = () => {
  const [crimeData, setCrimeData] = useState({ firstTable: [], secondTable: [] });
  const [firstQuery, setFirstQuery] = useState("");
  const [secondQuery, setSecondQuery] = useState("");

  useEffect(() => {
    console.log("Fetching data...");

    fetch("http://localhost:4000/api/experiment")
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

      <h4>Executed First SQL Query:</h4>
      <pre>{firstQuery}</pre>

      <h4>Executed Second SQL Query:</h4>
      <pre>{secondQuery}</pre>

      <h3>Crime Details</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Crime ID</th>
            <th>Crime Date</th>
            <th>Crime Status</th>
            <th>Category ID</th>
            <th>Category Name</th>
            <th>Type ID</th>
            <th>Type Name</th>
            
          </tr>
        </thead>
        <tbody>
          {crimeData.firstTable.length > 0 ? (
            crimeData.firstTable.map((row, index) => (
              <tr key={index}>
                <td>{row.crime_id || "N/A"}</td>
                <td>{row.crime_date || "N/A"}</td>
                <td>{row.crime_status || "N/A"}</td>
                <td>{row.category_id}</td>
                <td>{row.category_name}</td>
                <td>{row.type_id || "N/A"}</td>
                <td>{row.type_name || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      <h3>Crime Type and Category</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Type ID</th>
            <th>Type Name</th>
            <th>Category ID</th>
            <th>Category Name</th>
          </tr>
        </thead>
        <tbody>
          {crimeData.secondTable.length > 0 ? (
            crimeData.secondTable.map((row, index) => (
              <tr key={index}>
                <td>{row.type_id}</td>
                <td>{row.type_name}</td>
                <td>{row.category_id}</td>
                <td>{row.category_name}</td>
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
