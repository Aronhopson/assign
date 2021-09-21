import logo from "./logo.svg";
import "./App.css";
import moment from "moment";
import axios from "axios";

import React, { useState, useEffect } from "react";

function App() {
  const [avDetails, setAvengerDet] = useState("");

  useEffect(() => {
    const tt = window.location.pathname.split("/")[2];
    // console.log(tt, "tttt");
    DetailsApi(tt);
  }, []);

  const DetailsApi = (id) => {
    const url = `https://api.tvmaze.com/shows/${id}`;
    axios.get(url).then((response) => {
      console.log(response.data, "fghujikol");
      setAvengerDet(response.data);
    });
  };

  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center" }}>Details</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "20px 60px",
        }}
      >
        <div>
          <h3>Run Time</h3>
          <p>{avDetails.runtime}</p>
        </div>

        <div>
          <h3>Name</h3>
          <p>{avDetails.name}</p>
        </div>

        <div>
          <h3>Rating</h3>
          <p>
            {avDetails && avDetails.rating && avDetails.rating.average
              ? avDetails.rating.average
              : ""}
          </p>
        </div>
        <div>
          <h3>Language</h3>
          <p>{avDetails.language}</p>
        </div>
        <div>
          <h3>Date</h3>
          <p>{moment(avDetails.premiered).format("LL")}</p>
        </div>
      </div>
    </div>
  );
}
export default App;
