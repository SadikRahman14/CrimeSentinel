import React, { useState } from "react";

const Query = () => {
  const [crimeData, setCrimeData] = useState([]);
  const [selectedCrimeTypes, setSelectedCrimeTypes] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSeverityLevels, setSelectedSeverityLevels] = useState([]);

  const crimeTypes = [
    "Assault",
    "Homicide",
    "Kidnapping",
    "Manslaughter",
    "Robbery",
    "Burglary",
    "Arson",
    "Vandalism",
    "Trespassing",
    "Car Theft",
    "Identity Theft",
  ];

  const categories = [
    "Violent Crimes",
    "Property Crimes",
    "General Crimes",
  ];

  const severityLevels = ["Low", "Moderate", "High", "Critical"];

  const applyFilters = () => {
    const filters = {
      crimeTypes: selectedCrimeTypes,
      categories: selectedCategories,
      severityLevels: selectedSeverityLevels,
    };
  
    fetch("http://localhost:4000/api/query", {
      method: "POST", // Change from GET to POST
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filters),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data: ", data);
        setCrimeData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  
  

  return (
    <div>
      <h2>Crime Reports</h2>

      <div>
        <h4>Filters</h4>
        <div>
          <label>Crime Type</label>
          <select multiple onChange={(e) => setSelectedCrimeTypes([...e.target.selectedOptions].map(option => option.value))}>
            {crimeTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <br /><br />

        <div>
          <label>Category</label>
          <select multiple onChange={(e) => setSelectedCategories([...e.target.selectedOptions].map(option => option.value))}>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <br /><br />

        <div>
          <label>Severity Level</label>
          <select multiple onChange={(e) => setSelectedSeverityLevels([...e.target.selectedOptions].map(option => option.value))}>
            {severityLevels.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        <br />

        <button onClick={applyFilters}>Apply Filters</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Crime ID</th>
            <th>Crime Date</th>
            <th>Crime Status</th>
            <th>Type</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {crimeData.map((crime) => (
            <tr key={crime.crime_id}>
              <td>{crime.crime_id}</td>
              <td>{crime.crime_date}</td>
              <td>{crime.crime_status}</td>
              <td>{crime.type_name}</td>
              <td>{crime.category_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Query;
