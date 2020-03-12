import Link from "next/link";

export default function Index() {
  let styles = {
    backgroundColor: "#595959"
  };

  let stylesCourseHeading = {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#000000",
    border: "5px solid #000000",
    marginTop: "10px",
    padding: "10px"
  };
  return (
    <>
      <div style={styles}>
        <div class="container">
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <h3 class="course-heading" style={stylesCourseHeading}>
                Spotify Artist Listener Info
              </h3>
            </div>
          </div>
          <br></br>

          <div class="row">
            <div
              class="col-md-6 offset-md-3"
              style={{
                textAlign: "center",
                color: "black"
              }}
            >
              <h2 style={{ fontSize: "25px" }}>Enter a Spotify Artist ID:</h2>
            </div>
          </div>

          <br></br>

          <div class="row">
            <div class="col-md-6 offset-md-3">
              <div class="input-group">
                <input
                  type="text"
                  name="IdSearch"
                  id="search_top"
                  class="form-control"
                  placeholder="Enter Spotify Artist ID"
                />
                <span class="input-group-btn" style={{ marginLeft: "10px" }}>
                  <button
                    type="submit"
                    class="btn btn-warning"
                    onClick={event => (window.location.href = "/123")}
                  >
                    Search!
                  </button>
                </span>
              </div>
            </div>
          </div>

          <br></br>
        </div>
      </div>
    </>
  );
}
