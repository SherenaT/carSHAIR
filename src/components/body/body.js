import React from "react";
import ImageSlider from "./ImageSlider";
import "./body.css";
import { SliderData } from "./SliderData";

const body = () => {
  return (
    <div className="bodyDiv">
      <ImageSlider slides={SliderData} />
    </div>
  );
};

export default body;
