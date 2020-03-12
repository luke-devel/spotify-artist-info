import React from "react";

function Search() {
  state = {
    searchID: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  return (
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="input-group">
          <input
            type="text"
            name="idSearch"
            id="search_top"
            class="form-control"
            placeholder="Enter Spotify Artist ID"
          />
          <span class="input-group-btn" style={{ marginLeft: "10px" }}>
            <button
              type="submit"
              class="btn btn-warning"
              onClick={event =>
                (window.location.href = `/artist-id/${this.idSearch}`)
              }
            >
              Search!
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Search;
