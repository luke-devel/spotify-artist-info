import React from "react";

function Header() {
  let stylesCourseHeading = {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#000000",
    border: "5px solid #000000",
    marginTop: "10px",
    padding: "10px"
  };
  return (
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h3 class="course-heading" style={stylesCourseHeading}>
          Spotify Artist Listener Info
        </h3>
      </div>
    </div>
  );
}

export default Header;
