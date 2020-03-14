import Link from "next/link";
import Header from "../components/header";
import Search from "../components/search";
import Header2 from "../components/header2";
export default function Index() {
  let styles = {
    backgroundColor: "white"
  };

  return (
    <>
      <div style={styles}>
        <div className="container">
          <Header header={{ title: "Spotify Artist Info Tool" }} />
          <br></br>
          <Header2 />
          <br></br>
          <Search />
          <br></br>
        </div>
      </div>
    </>
  );
}
