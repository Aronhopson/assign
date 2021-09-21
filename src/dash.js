import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <p>Dash</p>
      <Link to="/ma">Main</Link>
      <Link to="/det">Detail</Link>
    </div>
  );
}
export default App;
