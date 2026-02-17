import React from "react";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import "./index.css";
const App = () => {
  return (
    <div className="main">
      <div className="nav">
        <Navbar />
      </div>

      <div className="pro">
        <Products />
      </div>
    </div>
  );
};

export default App;
