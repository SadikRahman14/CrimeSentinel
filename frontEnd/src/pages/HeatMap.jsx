import React, { useEffect, useState } from "react";
import "./HeatMap.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const HeatMap = () => {
  const [crimeData, setCrimeData] = useState([]); // Define state to store data
  const [crimeData1, setCrimeData1] = useState([]);
  const [crimeData2, setCrimeData2] = useState([]);

  useEffect(() => {
    console.log("Fetching data...");

    fetch("http://localhost:4000/api/graph")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data received:", data);
        if (data && data.data) {
          // Transform the data to match the chart's expected format
          const transformedData = data.data.firstTable.map(item => ({
            name: item.location_name,   // Change 'location_name' to 'name'
            visits: item.total_crimes,  // Change 'total_crimes' to 'visits'
          }));
          const transformed1Data = data.data.secondTable.map(item => ({
            name: item.region_name,   // Change 'location_name' to 'name'
            visits: item.total_crimes,  // Change 'total_crimes' to 'visits'
          }));
          const transformed2Data = data.data.thirdTable.map(item => ({
            name: item.station_name,   // Change 'location_name' to 'name'
            visits: item.total_crimes,  // Change 'total_crimes' to 'visits'
          }));
          setCrimeData(transformedData);
          setCrimeData1(transformed1Data);
          setCrimeData2(transformed2Data);
        } else {
          console.error("Unexpected API response format:", data);
        }
      })
      .catch((error) => console.error("Error fetching crime data:", error));
  }, []);

  return (
    <div className="container">
      <header className="navbar">
        <h2 className="logo">Crime Portal</h2>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/crime-reports">Crime Reports</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="register">Register</button>
        </div>
      </header>

      <main>
        <h1 className="title">Crime Heat Map</h1>
        
        <div className="stats-container">
          <div className="stat-box">
            <h3>Location</h3>
            <select>
              <option value="">Select Location</option>
              <option value="Shekhertek">Shekhertek</option>
              <option value="Mohammadi Housing Society">Mohammadi Housing Society</option>
              <option value="Block-E">Block-E</option>
              <option value="Merul Badda">Merul Badda</option>
              <option value="Sattarkul">Sattarkul</option>
              <option value="North Badda">North Badda</option>
              <option value="Cantonment">Cantonment</option>
              <option value="Mohakhali DOHS">Mohakhali DOHS</option>
              <option value="Banani">Banani</option>
              <option value="Dhanmondi 32">Dhanmondi 32</option>
              <option value="Road No 27">Road No 27</option>
              <option value="Star Kabab Area">Star Kabab Area</option>
              <option value="Gulshan-1">Gulshan-1</option>
              <option value="Gulshan-2">Gulshan-2</option>
              <option value="Niketan">Niketan</option>
              <option value="Hatirjheel Lake">Hatirjheel Lake</option>
              <option value="Begunbari">Begunbari</option>
              <option value="Rampura Bridge Area">Rampura Bridge Area</option>
              <option value="Kutubkhali">Kutubkhali</option>
              <option value="Dhalpur">Dhalpur</option>
              <option value="Sayedabad">Sayedabad</option>
              <option value="Shyampur">Dhalpur</option>
              <option value="Kadamtali">Kadamtali</option>
              <option value="Goalbari">Goalbari</option>
              <option value="Tilpapara">Tilpapara</option>
              <option value="Khilgaon Chowdhurypara">Khilgaon Chowdhurypara</option>
              <option value="Shahjahanpur">Shahjahanpur</option>
              <option value="Azimpur">Azimpur</option>
              <option value="New Paltan Line">New Paltan Line</option>
              <option value="Lalbagh Fort Area">Lalbagh Fort Area</option>
              <option value="Japan Garden City">Japan Garden City</option>
              <option value="Shia Mosque Area">Shia Mosque Area</option>
              <option value="Taj Mahal Road">Taj Mahal Road</option>       
            </select>
          </div>
          <div className="stat-box">
            <h3>Region</h3>
            <select>
              <option value="">Select Region</option>
              <option value="Adabar Thana">Adabar Thana</option>
              <option value="Badda Thana">Badda Thana</option>
              <option value="Cantonment Thana">Cantonment Thana</option>
              <option value="Dhanmondi Thana">Dhanmondi Thana</option>
              <option value="Gulshan Thana">Gulshan Thana</option>
              <option value="Hatirjheel Thana">Hatirjheel Thana</option>
              <option value="Jatrabari Thanat">Jatrabari Thana</option>
              <option value="Kadamtali Thana">Kadamtali Thana</option>
              <option value="Khilgaon Thana">Khilgaon Thana</option>
              <option value="Lalbagh Thana">Lalbagh Thana</option>
              <option value="Mohammadpur Thana">Mohammadpur Thana</option>
            </select>
          </div>
          <div className="stat-box">
            <h3>Station</h3>
            <select>
              <option value="">Select Station</option>
              <option value="Adabar Police Station">Adabar Police Station</option>
              <option value="Badda Police Station">Badda Police Station</option>
              <option value="Cantonment Police Station">Cantonment Police Station</option>
              <option value="Dhanmondi Police Station">Dhanmondi Police Station</option>
              <option value="Gulshan Police Station">Gulshan Police Station</option>
              <option value="Hatirjheel Police Station">Hatirjheel Police Station</option>
              <option value="Jatrabari Police Station">Jatrabari Police Station</option>
              <option value="Kadamtali Police Station">Kadamtali Police Station</option>
              <option value="Khilgaon Police Station">Khilgaon Police Station</option>
              <option value="Lalbagh Police Station">Lalbagh Police Station</option>
              <option value="Mohammadpur Police Station">Mohammadpur Police Station</option>
            </select>
          </div>
        </div>

        <div className="chart-section">
          <h2 className="chart-title">Crime Statistics</h2>
          <p className="chart-subtitle">Our portal delivers dynamic crime statistics,maximum crime in locations.</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={crimeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="visits" stroke="#00796b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-section">
          <h2 className="chart-title">Crime Statistics</h2>
          <p className="chart-subtitle">Our portal delivers dynamic crime statistics,maximum crime in regions.</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={crimeData1}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="visits" stroke="#00796b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-section">
          <h2 className="chart-title">Crime Statistics</h2>
          <p className="chart-subtitle">Our portal delivers dynamic crime statistics, maximum crime reports in stations.</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={crimeData2}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="visits" stroke="#00796b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
};

export default HeatMap;
