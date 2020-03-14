import React from "react";
import Formats from "../components/formats";

function Header2() {
  return (
    <div className="row">
      <div
        className="col-md-6 offset-md-3"
        style={{
          textAlign: "center",
          color: "black"
        }}
      >
        <h2 style={{ fontSize: "25px" }}>
          Enter a Spotify Artist URL, ID, or URI to Begin
        </h2>
        <br></br>
        <Formats />
      </div>
    </div>
  );
}

export default Header2;
