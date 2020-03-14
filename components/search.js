import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idSearch: null
    };
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      idSearch: event.target.value
    });
  };

  grabID = artistLink => {
    if (artistLink[0] === "h" && artistLink.length === 80) {
      return artistLink.slice(32, -26);
    }

    if (artistLink[0] === "o" && artistLink.length === 72) {
      return artistLink.slice(24, -26);
    }

    if (artistLink.length === 22) {
      return artistLink;
    }
    //  https://open.spotify.com/artist/5Z3IWpvwOvoaWodujHw7xh?si=VzZo4ckGSQi0Mj1Oa1EBJw
  };

  render() {
    const { idSearch } = this.state;
    return (
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2 style={{ fontSize: "23px" }}>Search Input: {idSearch}</h2>
          <br></br>
          <div class="input-group">
            <input
              type="text"
              name="idSearch"
              id="search_top"
              class="form-control"
              placeholder="Enter Spotify Artist ID"
              onChange={this.handleInputChange}
            />
            <span class="input-group-btn" style={{ marginLeft: "10px" }}>
              <button
                type="submit"
                class="btn btn-warning"
                onClick={event =>
                  (window.location.href = `/artist/${this.grabID(idSearch)}`)
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
}

export default Search;
