import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Analytics = () => {
  const [topCategory, setTopCategory] = useState(null);
  const [dangerousLocations, setDangerousLocations] = useState([]);
  const [fugitives, setFugitives] = useState([]);
  const [regionWiseStats, setRegionWiseStats] = useState([]);
  const [frequentCrimeLocations, setFrequentCrimeLocations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/analytics/top-crime-category")
      .then((res) => setTopCategory(res.data[0]))
      .catch((err) => console.error("Error fetching top crime category", err));

    axios
      .get("http://localhost:4000/api/analytics/dangerous-locations")
      .then((res) => setDangerousLocations(res.data))
      .catch((err) => console.error("Error fetching dangerous locations", err));

    axios.get("http://localhost:4000/api/analytics/region-wise-stats").then((res) => setRegionWiseStats(res.data));
    axios.get("http://localhost:4000/api/analytics/frequent-crime-locations").then((res) => setFrequentCrimeLocations(res.data));

    axios
      .get("http://localhost:4000/api/analytics/fugitives")
      .then((res) => setFugitives(res.data))
      .catch((err) => console.error("Error fetching fugitives", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Crime Analytics Dashboard</h2>

      {topCategory && (
        <div className="mb-4">
          <h3>Most Common Crime Category</h3>
          <p className="fw-bold">
            {topCategory.category_name} - {topCategory.total_offenders} offenders
          </p>
        </div>
      )}

      <div className="mb-4">
        <h3>Most Dangerous Locations</h3>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Region</th>
              <th>Total Crimes</th>
            </tr>
          </thead>
          <tbody>
            {dangerousLocations.map((location, index) => (
              <tr key={index}>
                <td>{location.region_name}</td>
                <td>{location.total_crimes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-4">
        <h3>Fugitive Offenders</h3>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {fugitives.map((offender, index) => (
              <tr key={index}>
                <td>{offender.name}</td>
                <td>{offender.age}</td>
                <td>{offender.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-4">
        <h3>Region-Wise Crime Statistics</h3>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Region</th>
              <th>Crime Type</th>
              <th>Total Crimes</th>
            </tr>
          </thead>
          <tbody>
            {regionWiseStats.map((stat, index) => (
              <tr key={index}>
                <td>{stat.region_name}</td>
                <td>{stat.crime_type}</td>
                <td>{stat.crime_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-4">
        <h3>Most Frequent Crime Locations</h3>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Location</th>
              <th>Total Crimes</th>
            </tr>
          </thead>
          <tbody>
            {frequentCrimeLocations.map((location, index) => (
              <tr key={index}>
                <td>{location.location_name}</td>
                <td>{location.crime_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analytics;
