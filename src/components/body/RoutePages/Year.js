import React, { useState } from "react";
import "./routePage.css";
import { vehiclesData } from "./vehiclesData";

const Year = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="routePage">
      <br></br>
      <h4>
        Welcome to carSHAiR vehicle year search, please enter year of vehicle
        you are intested in.
      </h4>
      <input
        className="input"
        type="text"
        placeholder="Search Vehicle Year..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <div>
        {vehiclesData
          .filter((val) => {
            if (searchTerm == "") {
            } else if (
              val.Year.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => {
            return (
              <div className="model" key={val.Model_ID}>
                <p className="value">
                  {val.Year}, {val.Make_Name}, {val.Model_Name}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Year;
