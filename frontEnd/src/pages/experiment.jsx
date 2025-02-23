import React, { useEffect, useState } from "react";

const Experiment = () => {
  const [crimeData, setCrimeData] = useState([]);
  const [sqlQuery, setSqlQuery] = useState("");

  useEffect(() => {
    console.log("useEffect triggered: Fetching data...");

    fetch("http://localhost:4000/api/experiment")
      .then((response) => {
        console.log("Response received:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Parsed JSON data:", data);

        if (data && Array.isArray(data.data)) {
          console.log("Valid data format, updating state...");
          setCrimeData(data.data);
          setSqlQuery(data.sql || "No SQL query returned");
        } else {
          console.error("Unexpected API response format:", data);
        }
      })
      .catch((error) => console.error("🚨 Error fetching crime data:", error));
  }, []);

  console.log("Render triggered. Current crimeData:", crimeData);
  console.log("SQL Query:", sqlQuery);

  return (
    <div>
      <h2>Crime Data</h2>
      <h4>Executed SQL Query:</h4>
      <pre>{sqlQuery}</pre>

      <table border="1">
        <thead>
          <tr>
            <th>Category ID</th>
            <th>Category Name</th>
            <th>Type ID</th>
            <th>Type Name</th>
          </tr>
        </thead>
        <tbody>
          {crimeData.length > 0 ? (
            crimeData.map((row, index) => {
              console.log(`📌 Rendering row ${index}:`, row);
              return (
                <tr key={index}>
                  <td>{row.category_id}</td>
                  <td>{row.category_name}</td>
                  <td>{row.type_id || "N/A"}</td>
                  <td>{row.type_name || "N/A"}</td>
                </tr>
              );
            })
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
