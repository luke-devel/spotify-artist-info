const puppeteerScrapeScriptTag = require("./puppeteerScrapeScriptTag.js");

export default async function(req, res) {
  console.log(`hello there`);
  const initialScriptTag = await puppeteerScrapeScriptTag(
    `5Z3IWpvwOvoaWodujHw7xh`
  );
  const spotifyObject = JSON.parse(initialScriptTag.slice(36, -5));
  // console.log(spotifyObject);
  console.log(req.body); // The request body
  console.log(req.query); // The url query string
  console.log(req.cookies); // The passed cookies
  res.end(JSON.stringify(spotifyObject));
}
