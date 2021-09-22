import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "100px 100px",
      }}
    >
      <Link to="/det">Go to Main Page</Link>
    </div>
  );
}
export default App;
