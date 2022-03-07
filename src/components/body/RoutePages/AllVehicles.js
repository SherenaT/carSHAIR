import React from "react";
import "./routePage.css";
import { vehiclesData } from "./vehiclesData";

const AllVehicles = () => {
  return (
    <div style={{ padding: "20px 10px" }}>
      {vehiclesData.map((val) => {
        return (
          <div className="model" key={val.Model_ID}>
            <p className="value">
              {val.Year}, {val.Make_Name}, {val.Model_Name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AllVehicles;
