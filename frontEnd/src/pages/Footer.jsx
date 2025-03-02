import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="logo">Crime Sentinel</h2>
          <p className="description">
            Our Crime Monitoring Portal provides real-time crime data and empowers citizens to report incidents. Together, we enhance public safety and foster community collaboration.
          </p>
          <p className="copyright">© Copyright Crime Portal 2025.</p>
        </div>

        {/* Middle Section: Pages & Crime Categories */}
        <div className="footer-middle">
          <div className="footer-links">
            <h3>Pages</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Crime Reports</a></li>
              <li><a href="#">Crime Responses</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Crime Categories</h3>
            <ul>
              <li><a href="#">Murder</a></li>
              <li><a href="#">Target Killing</a></li>
              <li><a href="#">Bomb Blast</a></li>
              <li><a href="#">High Way & Bank Robbery</a></li>
              <li><a href="#">Snatching</a></li>
              <li><a href="#">Gang Rape</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section: Newsletter */}
        <div className="footer-right">
          <h3>Newsletter</h3>
          <p>Get Updates Of Latest Crimes</p>
          <input type="email" placeholder="Email Address" className="email-input" />
          <button className="subscribe-btn">Subscribe now</button>
          <div className="footer-links-inline">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
