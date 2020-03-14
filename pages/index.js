import Link from "next/link";
import Header from "../components/header";
import Search from "../components/search";
import Header2 from "../components/header2";
export default function Index() {
  let styles = {
    backgroundColor: "#cccccc"
  };

  return (
    <>
      <div style={styles}>
        <div className="container">
          <Header header={{ title: "Spotify Artist Info" }} />
          <br></br>
          <Header2 />
          <Search />
          <br></br>
        </div>
      </div>
    </>
  );
}
