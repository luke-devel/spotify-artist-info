import Link from "next/link";
import Header from "../components/header";
import Search from "../components/search";
import Header2 from "../components/header2";
export default function Index() {
  let styles = {
    backgroundColor: "#595959"
  };

  return (
    <>
      <div style={styles}>
        <div class="container">
          <Header />
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
