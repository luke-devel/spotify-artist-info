var fs = require("fs");
const puppeteerScrapeScriptTag = require("./puppeteerScrapeScriptTag.js");

export default async function(req, res) {
  console.log(`within api, requested id is ${req.query.id}`);
  const initialScriptTag = await puppeteerScrapeScriptTag(req.query.id);
  // slice now (40, -5), Spotify Developers keep changing the format of the html,
  // so this needs to be updated occationally
  const spotifyObject = JSON.parse(initialScriptTag.slice(40, -5));
  console.log(spotifyObject.name);

  res.end(JSON.stringify(spotifyObject));
}
