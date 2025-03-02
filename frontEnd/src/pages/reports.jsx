import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./reports.css";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const navigate = useNavigate();

  const crimeTypes = [
    "Assault",
    "Robbery",
    "Homicide",
    "Burglary",
    "Vandalism",
    "Car Theft",
    "Hacking",
    "Online Fraud",
    "Identity Theft",
  ];

  const crimeCategories = [
    "Violent Crimes",
    "Property Crimes",
    "Cyber Crimes",
  ];

  const locations = [
    "Shekhertek",
    "Mohammadi Housing Society",
    "Block-E",
    "Merul Badda",
    "Sattarkul",
    "North Badda",
    "Cantonment",
    "Mohakhali DOHS",
    "Banani",
    "Dhanmondi 32",
    "Road No 27",
    "Star Kabab Area",
    "Gulshan-1",
    "Gulshan-2",
    "Niketan",
    "Hatirjheel Lake",
    "Begunbari",
    "Rampura Bridge Area",
    "Kutubkhali",
    "Dhalpur",
    "Sayedabad",
    "Shyampur",
    "Kadamtali",
    "Goalbari",
  ];

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = () => {
    const params = new URLSearchParams();
    if (selectedType) params.append("crimeType", selectedType);
    if (selectedCategory) params.append("crimeCategory", selectedCategory);
    if (selectedLocation) params.append("location", selectedLocation);

    fetch(`http://localhost:4000/api/reports?${params.toString()}`)
      .then((response) => response.json())
      .then((data) => setReports(data))
      .catch((error) => console.error("Error fetching reports:", error));
  };

  // Handle filter button click
  const handleFilter = () => {
    fetchReports();
  };

  // Clear filters and reset reports
  const clearFilters = () => {
    setSelectedType("");
    setSelectedCategory("");
    setSelectedLocation("");
    fetchReports();
  };

  return (
    <div className="reports-page">
    <div className="reports-container">
      <h1 className="all-reports-title">Crime Reports</h1>

      {/* Filter Section */}
      <div className="filter-section">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Select Crime Type</option>
          {crimeTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Crime Category</option>
          {crimeCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">Select Location</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>

        <button onClick={handleFilter}>Filter</button>
        <button onClick={clearFilters}>Clear Filters</button>
      </div>

      {/* Reports List */}
      <ul className="reports-list">
        {reports.map((report) => (
          <li key={report.id} className="report-item">
            <h3>{report.crimeTitle}</h3>
            <p>{report.date}</p>
            <button
              className="view-button"
              onClick={() => navigate(`/reports/${report.id}`)}
            >
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Reports;