import React from "react";
import "./CommunitySafety.css";
import safetyImage from "../assets/images/community_safety.jpg";
import bannerImage from "../assets/images/safety-banner.jpg";

const CommunitySafety = () => {
  return (
    <div className="community-safety">
      <div className="safety-container">
        <div className="safety-content">
          <h2>Enhancing Community Safety Together</h2>
          <p>
            In our shared mission to enhance community safety, collaboration is key.
            By working together, residents, law enforcement, and local organizations
            can create a proactive approach to crime prevention. Our platform encourages
            open communication and reporting, empowering everyone to contribute.
          </p>
          <div className="safety-buttons">
            <button className="search-crime">Search Crime</button>
            <button className="learn-more">Learn more</button>
          </div>
        </div>
        <div className="safety-image">
          <img src={safetyImage} alt="Community Safety" />
        </div>
      </div>

      <div className="safety-stats">
        <div className="stat-item">
          <h3>12+</h3>
          <p>Crime Reporting</p>
        </div>
        <div className="stat-item">
          <h3>200+</h3>
          <p>Active Cases</p>
        </div>
        <div className="stat-item">
          <h3>18+</h3>
          <p>Crime Areas</p>
        </div>
      </div>

      <div className="safety-banner">
        <div className="banner-content">
          <h2>Uniting for Safety: Your Portal to Crime-Free Living</h2>
          <p>Insight into Neighborhood Security</p>
          <button className="search-crime">Search Crime</button>
        </div>
        <div className="banner-image">
          <img src={bannerImage} alt="Safety Team" />
        </div>
      </div>
    </div>
  );
};

export default CommunitySafety;
