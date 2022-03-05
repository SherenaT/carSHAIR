import React from "react";
import "./footerNav.css";

const footerNav = () => {
  return (
    <div className="footerDivNav">
      <div className="navSection">
        <div className="navDiv">
          <ul>
            <h3>Company</h3>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className="navDiv">
          <ul>
            <h3>Explore</h3>
            <li>List a Car</li>
            <li>Rent a Car</li>
            <li>E-Bikes</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="navDiv">
          <ul>
            <h3>Experience</h3>
            <li>Orange County</li>
            <li>Los Angeles</li>
            <li>Las Vegas</li>
            <li>Dallas</li>
            <li>Miami</li>
            <li>San Diego</li>
          </ul>
        </div>
        <div className="navDiv">
          <ul>
            <h3>Help</h3>
            <li>FAQ</li>
            <li>Live Chat</li>
          </ul>
        </div>
        <div className="navDiv">
          <ul>
            <h3>Resources</h3>
            <li>How-to Guides</li>
            <li>Video Tutorials</li>
          </ul>
        </div>
      </div>
      <img
        src="https://www.carshair.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCarSHAiR-Logo-Wht.265c09ce.png&w=1920&q=75"
        alt="carShair logo"
        className="carShairLogo"
        style={{ padding: "2rem" }}
      />
    </div>
  );
};

export default footerNav;
