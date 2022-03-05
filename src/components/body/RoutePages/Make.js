import React from "react";
import "./routePage.css";
import { vehiclesData } from "./vehiclesData";

const Make = () => {
  return (
    <div className="routePage">
      <h1>make page</h1>
      <div>
        {vehiclesData.map((val, index) => {
          return (
            <div className="model" key={val.Make_ID}>
              <p className="value">{val.Make_Name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Make;
