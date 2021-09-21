import logo from "./logo.svg";
import "./App.css";
import moment from "moment";
import axios from "axios";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";

function App() {
  const [avenger, setAvengers] = useState("");
  const [avDetails, setAvengerDet] = useState("");

  useEffect(() => {
    const url = "https://api.tvmaze.com/search/shows?q=avengers";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setAvengers(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Main</h1>
      {avenger.length !== 0
        ? avenger.map((x) => {
            if (x && x.show && x.show.image && x.show.image.medium) {
              console.log(x.show.image.medium, "jjhhb");
            }

            return (
              <div
                style={{
                  display: "flex",

                  padding: "20px 60px",
                }}
              >
                <Link
                  to={"/ma/" + x.show.id}
                  style={{ justifyContent: "center", width: "35%" }}
                >
                  <p>{x.show.name}</p>
                </Link>
                <p style={{ justifyContent: "center", width: "20%" }}>
                  {x.show.language}
                </p>
                <p style={{ justifyContent: "center", width: "40%" }}>
                  {x.show.genres}
                </p>
                <p style={{ justifyContent: "center", width: "20%" }}>
                  {x.show.runtime}
                </p>
                <p style={{ justifyContent: "center", width: "30%" }}>
                  {moment(x.show.premiered).format("LL")}
                </p>
                <p style={{ justifyContent: "center", width: "20%" }}>
                  {x.show.rating.average}
                </p>
                {x && x.show && x.show.image && x.show.image.medium ? (
                  <p style={{ justifyContent: "center", width: "20%" }}>
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={x.show.image.medium}
                    />
                  </p>
                ) : (
                  ""
                )}
              </div>
            );
          })
        : ""}
    </div>
  );
}
export default App;
