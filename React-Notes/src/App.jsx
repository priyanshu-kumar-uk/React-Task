import React from "react";
import "./index.css";
import Createform from "./Component/Createform";
import { useState } from "react";

const App = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <div className="main">
      <div className="left">
        <div className="left-top">
          <div className="left-top1">
            <div className="img">
              <img
                src="https://plus.unsplash.com/premium_photo-1664299319654-5978d9ce7e40?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="jdbfhgv"
              />
            </div>
            <h3>Notes App</h3>
          </div>
          <button>Notes Data</button>
        </div>
        <button className="btn" onClick={() => settoggle(true)}>
          Create Notes
        </button>
      </div>
      {toggle && (
        <div className="right ">
          <Createform />
        </div>
      )}
    </div>
  );
};

export default App;
