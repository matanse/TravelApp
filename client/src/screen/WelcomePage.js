import React from "react";
import rightClick from "../img/circled-right-2.png";

export default function WelcomePage() {
  return (
    <div style={{ textAlign: "center", margin: "0 20px" }}>
      <h2>
        Find your perfect trip, designed by insiders who know and love their
        cities
      </h2>
      <img
        style={{ margin: "80px 0 40px 0", height: "80px", width: "80px" }}
        src={rightClick}
        alt=""
      />
    </div>
  );
}
