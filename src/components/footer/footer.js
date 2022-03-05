import React from "react";
import FooterNav from "./footerNav";
import "./footer.css";

const footer = () => {
  const handleUnderConstruction = function () {
    alert("This Section is Currently under construction, will update soon.");
  };

  return (
    <div className=".footerDiv" onClick={handleUnderConstruction}>
      <FooterNav />
    </div>
  );
};

export default footer;
