import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";

const puppeteerScrapeScriptTag = require("./puppeteerScrapeScriptTag.js");

function Books(props) {
  console.log("goodbye");
  const router = useRouter();
  const { data } = useSWR("/api/test", fetcher);
  return (
    <>
      <h1>Osei</h1>
      <div>{JSON.stringify(props)}</div>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

Books.getInitialProps = async function(context) {
  console.log(context);
  const response = await puppeteerScrapeScriptTag("2xvtxDNInKDV4AvGmjw6d1");
  console.log("hello");
  return {
    data: response
  };
};

export default Books;
