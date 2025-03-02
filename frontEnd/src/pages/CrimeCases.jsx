import React, { useEffect, useState } from "react";
import "./CrimeCases.css";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const CrimeCases = () => {
  const [crimeData, setCrimeData] = useState({ cases: [] });
  const [formData, setFormData] = useState({ crime_id: "", date_opened: "", status: "under investigation" });

  useEffect(() => {
    console.log("Fetching crime cases data...");

    fetch("http://localhost:4000/api/case")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data received:", data);
        if (Array.isArray(data)) {
          setCrimeData({ cases: data });
        } else {
          console.error("Unexpected API response format:", data);
          setCrimeData({ cases: [] }); // Prevents TypeError if data is incorrect
        }
      })
      .catch((error) => {
        console.error("Error fetching crime data:", error);
        setCrimeData({ cases: [] }); // Prevents crash in case of an API failure
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/api/case", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newCase) => {
        setCrimeData((prevData) => ({ ...prevData, cases: [...prevData.cases, newCase] }));
      })
      .catch((error) => console.error("Error adding case:", error));
  };

  // Ensure crimeData.cases is an array before filtering
  const casesArray = Array.isArray(crimeData.cases) ? crimeData.cases : [];

  // Count crimes by status dynamically
  const caseCounts = {
    solved: casesArray.filter((c) => c.status === "solved").length,
    unsolved: casesArray.filter((c) => c.status === "unsolved").length,
    underInvestigation: casesArray.filter((c) => c.status === "under investigation").length,
    pending: casesArray.filter((c) => c.status === "pending").length,
  };

  // Pie chart data (if API data is empty, fallback to hardcoded data)
  const dynamicData =
    casesArray.length > 0
      ? [
          { name: "Solved", value: caseCounts.solved, color: "#28a745" },
          { name: "Unsolved", value: caseCounts.unsolved, color: "#dc3545" },
          { name: "Under Investigation", value: caseCounts.underInvestigation, color: "#ffc107" },
          { name: "Pending", value: caseCounts.pending, color: "#007bff" },
        ]
      : [
          { name: "Solved", value: 50, color: "#28a745" },
          { name: "Unsolved", value: 30, color: "#dc3545" },
          { name: "Under Investigation", value: 15, color: "#ffc107" },
          { name: "Pending", value: 5, color: "#007bff" },
        ];

  return (
    <div className="crime-page">
      <h1>Crime Case Management</h1>

      <div className="chart-container">
        <h2>Crime Case Statistics</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie data={dynamicData} dataKey="value" nameKey="name" outerRadius={120} fill="#8884d8">
              {dynamicData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="form-container">
        <h2>Add New Case</h2>
        <form onSubmit={handleSubmit}>
          <input type="number" name="crime_id" placeholder="Crime ID" onChange={handleChange} required />
          <input type="date" name="date_opened" onChange={handleChange} required />
          <select name="status" onChange={handleChange}>
            <option value="under investigation">Under Investigation</option>
            <option value="solved">Solved</option>
            <option value="unsolved">Unsolved</option>
            <option value="pending">Pending</option>
          </select>
          <button type="submit">Add Case</button>
        </form>
      </div>
    </div>
  );
};

export default CrimeCases;
