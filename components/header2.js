import React from "react";

function Header2() {
  return (
    <div class="row">
      <div
        class="col-md-6 offset-md-3"
        style={{
          textAlign: "center",
          color: "black"
        }}
      >
        <h2 style={{ fontSize: "25px" }}>
          Enter a Spotify Artist URL or ID to Begin
        </h2>

        <h2 style={{ fontSize: "20px", textDecoration: "underline" }}>
          Acceptable Formats
        </h2>

        <p style={{ fontSize: "20px" }}>
          https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2?si=Ie1FaVNxSdSwK-qzGo_9wA
        </p>

        <p style={{ fontSize: "20px" }}>
          open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2?si=Ie1FaVNxSdSwK-qzGo_9wA
        </p>

        <p style={{ fontSize: "20px" }}>3WrFJ7ztbogyGnTHbHJFl2</p>
      </div>
    </div>
  );
}

export default Header2;
