const puppeteerScrapeScriptTag = require("./puppeteerScrapeScriptTag.js");
// let artistID = `5Z3IWpvwOvoaWodujHw7xh`;
export default async function(req, res) {
  console.log(`within api, requested id is ${req.query.id}`);
  const initialScriptTag = await puppeteerScrapeScriptTag(req.query.id);
  const spotifyObject = JSON.parse(initialScriptTag.slice(36, -5));
  // console.log(spotifyObject.name);

  res.end(JSON.stringify(spotifyObject));
}
