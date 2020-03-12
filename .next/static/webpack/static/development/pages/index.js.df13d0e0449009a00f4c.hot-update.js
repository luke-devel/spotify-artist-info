webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/search.js":
/*!******************************!*\
  !*** ./components/search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\luke\\Development\\nextjs1\\components\\search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Search() {
  var _this = this;

  //   state = {
  //     searchID: ""
  //   };
  //   handleFormSubmit = event => {
  //     event.preventDefault();
  //   };
  return __jsx("div", {
    "class": "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    "class": "col-md-6 offset-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    "class": "input-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    name: "idSearch",
    id: "search_top",
    "class": "form-control",
    placeholder: "Enter Spotify Artist ID",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("span", {
    "class": "input-group-btn",
    style: {
      marginLeft: "10px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("button", {
    type: "submit",
    "class": "btn btn-warning",
    onClick: function onClick(event) {
      return window.location.href = "/artist-id/".concat(_this.idSearch);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Search!")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=index.js.df13d0e0449009a00f4c.hot-update.js.map