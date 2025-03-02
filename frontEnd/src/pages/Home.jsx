import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">Crime Sentinel</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Crime Reports</li>
          <li>Crime HeatMap</li>
          <li>Contact Us</li>
        </ul>
        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="register">Register</button>
        </div>
      </nav>
      
      <header className="hero-section">
        <h1>Report, Track, Prevent – For a Safer Tomorrow</h1>
        <p>Safeguarding Together: Your Bridge to a Secure Environment</p>
        <div className="search-bar">
          <input type="text" placeholder="Crime Title" />
          <select>
            <option>Select Location</option>
          </select>
          <select>
            <option>Select Category</option>
          </select>
          <button className="search-button">Search Crime</button>
        </div>
      </header>

      <div className="stats-section">
        <div className="stat-box">
          <span className="stat-number">25,850</span>
          <span className="stat-label">Cases</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">10,250</span>
          <span className="stat-label">People</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">18,400</span>
          <span className="stat-label">Areas Located</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
