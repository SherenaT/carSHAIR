import React, { useState } from "react";
import "./routePage.css";
import { vehiclesData } from "./vehiclesData";

const Model = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="routePage">
      <br></br>
      <h4>Welcome to carSHAiR model search, please search for a model.</h4>
      <input
        className="input"
        type="text"
        placeholder="Search Model..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <div>
        {vehiclesData
          .filter((val) => {
            if (searchTerm == "") {
            } else if (
              val.Model_Name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => {
            return (
              <div className="model" key={val.Model_ID}>
                <p className="value">
                  {val.Make_Name}, {val.Model_Name}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Model;
