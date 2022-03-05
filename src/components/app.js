import React from "react";
import Header from "./header";
import Body from "./body/body";
import Footer from "./footer/footer";

const App = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
