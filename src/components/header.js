import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/vehicles/GetModelsForMake">
            <li>MAKE</li>
          </Link>
          <Link to="/vehicles/GetModelsForModel">
            <li>MODEL</li>
          </Link>
          <Link to="/vehicles/GetModelsForYear">
            <li>YEAR</li>
          </Link>
          <Link to="/vehicles/AllVehicles">
            <li>INSTOCK VEHICLES</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default header;
