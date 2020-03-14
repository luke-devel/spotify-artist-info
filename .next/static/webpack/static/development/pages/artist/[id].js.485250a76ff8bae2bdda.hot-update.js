webpackHotUpdate("static\\development\\pages\\artist\\[id].js",{

/***/ "./components/cities.js":
/*!******************************!*\
  !*** ./components/cities.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\luke\\Development\\nextjs1\\components\\cities.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Cities(_ref) {
  var cities = _ref.cities;
  var citiesList = cities.list.map(function (_ref2) {
    var city = _ref2.city,
        country = _ref2.country,
        listeners = _ref2.listeners;
    console.log(city);
    count++;
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, count, ": ", city, ", ", country, " - Monthly Listeners: ", listeners);
  });
  console.log(citiesList[0]);
  return __jsx("div", {
    style: {
      textAlign: "center",
      fontSize: "18px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, citiesList);
}

/* harmony default export */ __webpack_exports__["default"] = (Cities);

/***/ })

})
//# sourceMappingURL=[id].js.485250a76ff8bae2bdda.hot-update.js.map