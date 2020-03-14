module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/[id].js":
/*!***************************!*\
  !*** ./pages/api/[id].js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const puppeteerScrapeScriptTag = __webpack_require__(/*! ./puppeteerScrapeScriptTag.js */ "./pages/api/puppeteerScrapeScriptTag.js"); // let artistID = `5Z3IWpvwOvoaWodujHw7xh`;


/* harmony default export */ __webpack_exports__["default"] = (async function (req, res) {
  console.log(`within api, requested id is ${req.query.id}`);
  const initialScriptTag = await puppeteerScrapeScriptTag(req.query.id);
  const spotifyObject = JSON.parse(initialScriptTag.slice(36, -5)); // console.log(spotifyObject.name);

  res.end(JSON.stringify(spotifyObject));
});

/***/ }),

/***/ "./pages/api/puppeteerScrapeScriptTag.js":
/*!***********************************************!*\
  !*** ./pages/api/puppeteerScrapeScriptTag.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const puppeteer = __webpack_require__(/*! puppeteer */ "puppeteer");

const cheerio = __webpack_require__(/*! cheerio */ "cheerio");

async function puppeteerScrapeScriptTag(artistID) {
  try {
    console.log(`in puppeteerScrapeScriptTag, doing ${artistID}`);
    var url = "https://open.spotify.com/artist/" + artistID + "/about";
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0); // sets user agent to internet explorer 11

    await page.setUserAgent("Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko");
    await page.goto(url);
    let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    const $ = cheerio.load(bodyHTML);
    let rawSpotifyData = $("script");
    var scriptData = rawSpotifyData[3].children[0].data;
    await browser.close(); // returns scriptData

    console.log(`returning scriptData`);
    return scriptData;
  } catch (err) {
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~ err caught in puppeteerScrapeScriptTag ~~~~~~~~~~~~~~~~~~~~~~~~`);
    console.log(err);
  }
}

module.exports = puppeteerScrapeScriptTag;

/***/ }),

/***/ 6:
/*!*********************************!*\
  !*** multi ./pages/api/[id].js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\luke\Development\nextjs1\pages\api\[id].js */"./pages/api/[id].js");


/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("puppeteer");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map