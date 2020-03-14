import Axios from "axios";
import Header from "../../components/header";
import Genres from "../../components/genres";
import Cities from "../../components/cities";
import Search from "../../components/search";
import Formats from "../../components/formats";

function Artist(props) {
  let headingStyle = {
    textAlign: "center",
    textDecoration: "underline",
    marginTop: "10px",
    fontSize: "25px"
  };

  let styles = {
    backgroundColor: "#cccccc"
  };

  if (props.test !== "undefined") {
    return (
      <>
        <div style={styles}>
          <Header header={{ title: props.data.name }} />
          <div style={{ textAlign: "center" }}>
            <img
              src={props.data.images[2].url}
              alt={props.data.name}
              style={{ textAlign: "center", float: "middle" }}
            />
          </div>
          <h1 style={headingStyle}>Spotify Genres</h1>
          <Genres genres={{ list: props.data.genres }} />
          <h1 style={headingStyle}>Monthly Listener Info </h1>
          <Cities cities={{ list: props.data.insights.cities }} />
          <h1 style={headingStyle}>
            Popularity Rating: {props.data.popularity}
          </h1>
          <h1 style={headingStyle}>
            Global Chart Position: {props.data.insights.global_chart_position}
          </h1>
          <h1 style={headingStyle}>
            Monthly Listeners: {props.data.insights.monthly_listeners}
          </h1>
          <h1 style={headingStyle}>
            Follower Count: {props.data.insights.follower_count}
          </h1>
          <br></br>
          <h1 style={headingStyle}>Make Another Search</h1>
          <Search />
          <br></br>
          <br></br>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div style={styles}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 style={{ textAlign: "center", fontSize: "30px" }}>
            There was an error with your search. Please make another one.
          </h1>
          <br></br>
          <Formats />
          <Search />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </>
    );
  }
}

Artist.getInitialProps = async function(context) {
  if (context.query.id !== "undefined") {
    const { data } = await Axios.get(
      `http://localhost:3000/api/${context.query.id}`
    );
    console.log(`got props`);

    return {
      data
    };
  } else {
    return { test: "undefined" };
  }
};

export default Artist;
