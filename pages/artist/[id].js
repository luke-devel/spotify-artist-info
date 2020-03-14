import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import Header from "../../components/header";
import Genres from "../../components/genres";
import Cities from "../../components/cities";

import Axios from "axios";

function Artist(props) {
  let headingStyle = {
    textAlign: "center",
    textDecoration: "underline",
    marginTop: "10px",
    fontSize: "25px"
  };
  //   console.log(props.data.insights.cities);

  return (
    <>
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
      <h1 style={headingStyle}>Popularity Rating: {props.data.popularity}</h1>
      <h1 style={headingStyle}>
        Global Chart Position: {props.data.insights.global_chart_position}
      </h1>
      <h1 style={headingStyle}>
        Monthly Listeners: {props.data.insights.monthly_listeners}
      </h1>
      <h1 style={headingStyle}>
        Follower Count: {props.data.insights.follower_count}
      </h1>
    </>
  );
}

Artist.getInitialProps = async function(context) {
  const { data } = await Axios.get(
    `http://localhost:3000/api/${context.query.id}`
  );
  console.log(`got props`);

  return {
    data
  };
};

export default Artist;
