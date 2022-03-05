import React from "react";
import "./header.css";

const header = () => {
  return (
    <div className="headerDiv">
      <img
        src="https://www.carshair.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCarSHAiR-Logo-Wht.265c09ce.png&w=1920&q=75"
        alt="carShair logo"
        className="carShairLogo"
      />
      <div className="navigation">
        <ul className="headerUl">
          <li>HOME</li>

          <li>MAKE</li>

          <li>MODEL</li>

          <li>YEAR</li>

          <li>
            <i class="search icon"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default header;
