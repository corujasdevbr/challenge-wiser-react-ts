module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/call-text/index.tsx":
/*!********************************************!*\
  !*** ./src/components/call-text/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\github\\nextjs\\challenge-wiser-react-ts\\src\\components\\call-text\\index.tsx";



const CallText = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledCallText, {
    children: props.text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CallText);
const StyledCallText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h4.withConfig({
  displayName: "call-text__StyledCallText",
  componentId: "sc-1t7vkcd-0"
})(["color:#989FDB;text-align:center;margin-top:20px;margin-bottom:20px;"]);

/***/ }),

/***/ "./src/components/error/index.tsx":
/*!****************************************!*\
  !*** ./src/components/error/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\github\\nextjs\\challenge-wiser-react-ts\\src\\components\\error\\index.tsx";


const Error = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledLabel, {
    children: props.text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Error);
const StyledLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label.withConfig({
  displayName: "error__StyledLabel",
  componentId: "sc-1f1jhvw-0"
})(["color:red;"]);

/***/ }),

/***/ "./src/components/label/index.tsx":
/*!****************************************!*\
  !*** ./src/components/label/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\github\\nextjs\\challenge-wiser-react-ts\\src\\components\\label\\index.tsx";


const Label = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledLabel, {
    children: props.text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Label);
const StyledLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label.withConfig({
  displayName: "label__StyledLabel",
  componentId: "sc-1yhatc3-0"
})(["color:#383E71;"]);

/***/ }),

/***/ "./src/components/title/index.tsx":
/*!****************************************!*\
  !*** ./src/components/title/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\github\\nextjs\\challenge-wiser-react-ts\\src\\components\\title\\index.tsx";


function Title(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledTitle, {
    children: props.text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Title);
const StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "title__StyledTitle",
  componentId: "z33hzd-0"
})(["color:#383E71;margin-top:20px;margin-bottom:20px;text-align:center;"]);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux-toastr */ "react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin */ "./src/pages/signin/index.tsx");
/* harmony import */ var _store_ducks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/ducks */ "./src/store/ducks/index.ts");


var _jsxFileName = "F:\\github\\nextjs\\challenge-wiser-react-ts\\src\\pages\\index.tsx";





function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _store_ducks__WEBPACK_IMPORTED_MODULE_5__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_signin__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux_toastr__WEBPACK_IMPORTED_MODULE_3___default.a, {
        timeOut: 4000,
        newestOnTop: false,
        preventDuplicates: true,
        position: "top-right",
        getState: state => state.toastr // This is the default
        ,
        transitionIn: "fadeIn",
        transitionOut: "fadeOut",
        progressBar: true,
        closeOnToastrClick: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/pages/signin/index.tsx":
/*!************************************!*\
  !*** ./src/pages/signin/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_pages_SignIn_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/pages/SignIn.module.scss */ "./src/styles/pages/SignIn.module.scss");
/* harmony import */ var _styles_pages_SignIn_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_SignIn_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/title */ "./src/components/title/index.tsx");
/* harmony import */ var _components_call_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/call-text */ "./src/components/call-text/index.tsx");
/* harmony import */ var _components_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/label */ "./src/components/label/index.tsx");
/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/error */ "./src/components/error/index.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store_actions_account__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/account */ "./src/store/actions/account/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "F:\\github\\nextjs\\challenge-wiser-react-ts\\src\\pages\\signin\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var WiserLogo = function WiserLogo(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      clipPath: "url(#a)",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M170.864 0a61.392 61.392 0 0 1-.528 1.59 55.947 55.947 0 0 1-2.347 5.627c-1.217 2.496-2.642 4.979-4.965 6.606-2.667 1.859-6.095 2.532-9.143 3.523-2.47.807-4.94 1.553-7.398 2.275-1.892.563-3.785 1.113-5.665 1.663-4.289 1.26-8.529 2.533-12.67 4.025l-.11.037c-4.179 1.504-8.259 3.241-12.093 5.419-.479.28-.946.55-1.425.844-.455.269-.91.575-1.34.88-.086.062-.159.123-.245.184a23.194 23.194 0 0 0-2.249 1.871 23.033 23.033 0 0 0-4.031 5.114c-.885 1.504-1.647 3.106-2.138 4.795-.222.758-.381 1.529-.529 2.3 0 .024.013-.013.025-.05.455-1.737 1.118-3.45 2.027-5.04a22.498 22.498 0 0 1 3.638-4.758c1.413-1.431 3.011-2.679 4.694-3.78 2.839-1.859 5.911-3.29 9.045-4.464.59-.22 1.192-.44 1.794-.649 3.773-1.284 7.595-2.336 11.453-3.095 12.904-2.52 21.26-5.639 22.305-5.883-1.414 1.7-3.601 4.575-5.076 6.055-1.179 1.186-3.613 3.376-5.136 4.11-2.372 1.15-6.71.575-19.405 2.397-1.007.147-1.99.343-2.986.55-3.146.661-6.255 1.542-9.18 2.802-.466.208-.921.416-1.376.636-1.659.807-3.244 1.762-4.694 2.9-1.45 1.137-2.765 2.446-3.871 3.938-1.094 1.456-1.819 2.96-2.47 4.685-.013.037.024.012.049-.049.75-1.578 1.966-3.45 3.084-4.734.123-.134.246-.281.369-.416.246-.257.492-.514.75-.758a18.351 18.351 0 0 1 3.035-2.373c1.548-.991 3.22-1.762 4.94-2.386 1.93-.697 3.896-1.198 5.899-1.59a62.545 62.545 0 0 1 4.743-.721c3.269-.38 6.538-.551 9.782-.673l.959-.037 3.662-.11a149.414 149.414 0 0 1-2.9 2.092c-3.38 2.336-7.411 1.59-11.294 1.676-2.224.049-4.436.195-6.611.526a21.654 21.654 0 0 0-8.332 2.47c-.025.013-.061.025-.086.05a17.422 17.422 0 0 0-4.178 2.947c-.394.38-.762.771-1.119 1.175-2.027 2.226-3.502 4.88-4.239 7.804-.074.098-.123 0-.135-.098a3.691 3.691 0 0 1-.05-.416c-.061-.721 0-1.994.05-2.887l.036-.55c.025-.294.037-.477.037-.477a26.498 26.498 0 0 1 2.249-8.526 24.43 24.43 0 0 1 3.761-5.86 23.962 23.962 0 0 1 2.494-2.495c.443-.391.91-.758 1.389-1.113.455-.343.934-.685 1.401-1.015a69.297 69.297 0 0 1 2.544-1.7c3.035-1.921 6.218-3.597 9.45-5.126 2.961-1.394 5.96-2.679 8.958-3.902 1.205-.49 2.421-.979 3.626-1.468 4.202-1.676 8.393-3.315 12.46-5.089 4.068-1.773 8.013-3.67 11.687-5.871 2.728-1.615 5.309-3.413 7.619-5.407zM34.052 0c.172.538.345 1.064.529 1.59a55.878 55.878 0 0 0 2.347 5.627c1.217 2.496 2.642 4.979 4.965 6.606 2.666 1.859 6.095 2.532 9.143 3.523 2.47.807 4.94 1.553 7.398 2.275 1.892.563 3.784 1.113 5.665 1.663 4.288 1.26 8.528 2.533 12.67 4.025l.11.037c4.178 1.504 8.258 3.241 12.092 5.419.48.28.947.55 1.426.844.454.269.91.575 1.34.88.085.062.159.123.245.184a23.35 23.35 0 0 1 2.249 1.871 23.032 23.032 0 0 1 4.03 5.114c.885 1.504 1.647 3.106 2.139 4.795.221.782.393 1.565.541 2.36 0 .013 0 .013-.013 0a21.048 21.048 0 0 0-2.052-5.15 22.459 22.459 0 0 0-3.637-4.758c-1.414-1.431-3.011-2.679-4.695-3.78-2.838-1.859-5.91-3.29-9.044-4.464-.59-.22-1.192-.44-1.794-.649-3.773-1.284-7.595-2.336-11.454-3.095-12.903-2.52-21.26-5.639-22.304-5.883 1.413 1.7 3.6 4.575 5.075 6.055 1.18 1.186 3.613 3.376 5.137 4.11 2.372 1.15 6.71.575 19.404 2.397 1.008.147 1.99.343 2.986.55 3.146.661 6.255 1.542 9.18 2.802.467.208.922.416 1.376.636 1.66.807 3.245 1.762 4.695 2.9 1.45 1.137 2.765 2.446 3.87 3.938 1.107 1.492 1.844 3.021 2.508 4.795.012.012 0 .025-.013.012-.737-1.602-2.003-3.56-3.158-4.893-.123-.134-.246-.281-.368-.416-.246-.256-.492-.513-.75-.758a18.387 18.387 0 0 0-3.035-2.373c-1.549-.99-3.22-1.761-4.94-2.385-1.93-.698-3.896-1.2-5.9-1.59a62.493 62.493 0 0 0-4.743-.722c-3.269-.38-6.537-.55-9.782-.673l-.958-.037-3.662-.11c1.007.746 1.978 1.444 2.9 2.092 3.38 2.336 7.41 1.59 11.293 1.676 2.225.049 4.437.196 6.612.526 3.023.269 5.85 1.137 8.332 2.47.024.013.061.025.086.05a17.43 17.43 0 0 1 4.178 2.948c.393.379.762.77 1.118 1.174 2.028 2.226 3.502 4.88 4.24 7.804.074.098.123 0 .135-.098.012-.073.049-.318.049-.416.062-.721 0-1.993-.049-2.886l-.037-.55c-.024-.294-.037-.478-.037-.478a26.477 26.477 0 0 0-2.249-8.526 24.442 24.442 0 0 0-3.76-5.86 23.96 23.96 0 0 0-2.495-2.495c-.442-.391-.909-.758-1.388-1.113a58.365 58.365 0 0 0-1.401-1.015 70.862 70.862 0 0 0-2.544-1.7c-3.035-1.92-6.218-3.597-9.45-5.126-2.962-1.394-5.96-2.679-8.959-3.902-1.204-.49-2.42-.979-3.625-1.468-4.203-1.676-8.393-3.315-12.46-5.089C49.29 9.518 45.345 7.62 41.67 5.42 38.931 3.792 36.364 1.994 34.053 0z",
        fill: "url(#b)"
      }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M11.97 85.468C9.584 79.902 7.63 75.18 6.094 71.303c-1.536-3.878-2.752-7.083-3.65-9.627C1.548 59.132.91 57.174.553 55.792.184 54.41 0 53.432 0 52.844c0-1.015.344-1.908 1.02-2.691.676-.77 1.72-1.162 3.134-1.162 1.069 0 1.904.098 2.519.293.602.196 1.008.343 1.204.44a302.41 302.41 0 0 0 1.966 6.79 361.855 361.855 0 0 0 4.56 13.945c.75 2.153 1.425 4.085 2.003 5.773a142.09 142.09 0 0 0 1.72-5.162c.602-1.932 1.241-3.938 1.892-5.993a374.871 374.871 0 0 0 1.93-6.251c.627-2.104 1.216-4.11 1.757-5.994.393-1.26.934-2.214 1.647-2.875.7-.66 1.83-.978 3.392-.978.97 0 1.843.134 2.63.403.774.27 1.265.453 1.462.55a542.887 542.887 0 0 0 2.04 6.863c.725 2.398 1.462 4.759 2.187 7.083.725 2.324 1.45 4.55 2.15 6.679.701 2.128 1.352 4.024 1.93 5.663a313.523 313.523 0 0 0 3.908-10.972 245.393 245.393 0 0 0 3.687-11.915c.442-1.504 1.007-2.605 1.72-3.302.7-.698 1.794-1.052 3.244-1.052 1.315 0 2.384.22 3.208.648.823.44 1.29.697 1.388.795-.393 1.603-1.069 3.804-2.04 6.606a400.58 400.58 0 0 1-3.28 9.113 479.963 479.963 0 0 1-3.872 10.03 282.28 282.28 0 0 1-3.87 9.26H36.62c-.394-1.015-.91-2.507-1.573-4.465-.651-1.957-1.377-4.11-2.15-6.434a309.596 309.596 0 0 1-2.299-7.156c-.75-2.446-1.45-4.685-2.077-6.715-.639 2.03-1.327 4.28-2.076 6.715a509.43 509.43 0 0 1-2.262 7.156c-.75 2.324-1.45 4.465-2.076 6.434-.64 1.958-1.143 3.45-1.537 4.465H11.97v.037zM65.18 76.391c.344.245.946.563 1.819.942.872.392 1.954.783 3.244 1.2 1.29.415 2.765.757 4.412 1.051 1.659.294 3.453.44 5.407.44 2.531 0 4.596-.33 6.206-.978 1.61-.649 2.408-1.786 2.408-3.376 0-1.358-.516-2.386-1.536-3.083-1.02-.697-2.85-1.199-5.468-1.492l-5.69-.648c-1.942-.196-3.736-.551-5.37-1.053-1.635-.513-3.023-1.198-4.203-2.067a9.275 9.275 0 0 1-2.74-3.23c-.652-1.284-.984-2.825-.984-4.61 0-1.554.308-3.01.91-4.392.602-1.383 1.573-2.606 2.888-3.67s3.023-1.896 5.149-2.508c2.113-.599 4.682-.905 7.705-.905 5.063 0 8.983.563 11.785 1.676 2.802 1.113 4.203 2.569 4.203 4.355 0 .587-.11 1.089-.332 1.529a7.53 7.53 0 0 1-.725 1.162 4.87 4.87 0 0 1-.836.832c-.295.22-.516.354-.651.403-.197-.195-.615-.501-1.278-.905-.651-.416-1.549-.82-2.667-1.235-1.118-.416-2.458-.77-4.018-1.089-1.561-.318-3.355-.477-5.395-.477-5.64 0-8.467 1.48-8.467 4.428 0 1.26.54 2.214 1.61 2.875 1.069.648 2.605 1.1 4.596 1.345l7.447.942c4.043.538 7.177 1.64 9.413 3.303 2.237 1.676 3.355 4.134 3.355 7.376 0 3.633-1.45 6.544-4.338 8.722-2.9 2.177-7.066 3.266-12.522 3.266-2.63 0-5.014-.196-7.152-.575-2.139-.391-4.007-.832-5.58-1.346-1.585-.513-2.863-1.003-3.834-1.492-.97-.49-1.61-.844-1.892-1.089l3.121-5.627zM104.885 68.905c0-3.388.492-6.385 1.463-8.966.971-2.593 2.335-4.77 4.092-6.544 1.757-1.762 3.871-3.108 6.353-4.037 2.483-.918 5.235-1.383 8.246-1.383 2.777 0 5.333.49 7.668 1.456 2.335.967 4.363 2.3 6.096 4 1.72 1.7 3.072 3.731 4.055 6.104.971 2.373 1.462 4.942 1.462 7.707 0 2.813-.479 5.394-1.425 7.743-.946 2.348-2.261 4.367-3.945 6.067-1.683 1.7-3.65 3.01-5.911 3.963-2.261.942-4.731 1.42-7.41 1.42-2.777 0-5.235-.539-7.373-1.603-2.139-1.064-3.822-2.373-5.039-3.927v19.107h-8.319V68.905h-.013zm19.552 10.165c1.659 0 3.17-.305 4.559-.905a10.592 10.592 0 0 0 3.576-2.508c.996-1.064 1.757-2.324 2.298-3.78.541-1.455.799-3.02.799-4.721 0-1.651-.27-3.18-.799-4.612-.541-1.43-1.302-2.666-2.298-3.706-.995-1.04-2.187-1.86-3.576-2.471-1.389-.612-2.912-.905-4.559-.905-1.659 0-3.171.293-4.559.868-1.389.587-2.581 1.383-3.576 2.398-.996 1.015-1.782 2.238-2.335 3.67-.565 1.43-.836 3.009-.836 4.758 0 1.7.283 3.266.836 4.722a11.738 11.738 0 0 0 2.298 3.78c.971 1.064 2.15 1.895 3.539 2.507 1.389.612 2.937.905 4.633.905zM201.599 57.945a109.363 109.363 0 0 1-1.34-3.242 54.844 54.844 0 0 1-.835-2.202c-.209-.587-.357-1.027-.431-1.345-.086-.318-.122-.538-.122-.673 0-.232.073-.44.233-.611.16-.172.393-.27.713-.27.246 0 .442.025.577.062.136.048.234.073.271.097.135.49.282 1.003.454 1.554.173.55.345 1.089.517 1.64.172.537.356 1.063.528 1.553.172.489.32.93.455 1.32.123-.342.258-.733.393-1.174.135-.44.283-.905.43-1.37.148-.464.295-.941.442-1.43.148-.49.283-.943.406-1.37.086-.294.209-.502.381-.661.16-.147.418-.22.774-.22.221 0 .418.036.602.097.172.061.295.098.332.123.148.501.295 1.027.467 1.565.172.55.332 1.09.504 1.615.172.538.332 1.04.491 1.53.16.488.308.916.443 1.296.295-.77.59-1.603.897-2.508.307-.905.59-1.822.848-2.728.098-.342.233-.6.393-.758.16-.16.406-.245.737-.245.295 0 .541.05.738.147.184.098.295.159.319.183-.086.367-.245.869-.467 1.517A80.867 80.867 0 0 1 211 53.53c-.283.746-.578 1.517-.885 2.3a44.583 44.583 0 0 1-.885 2.116h-1.966a26.605 26.605 0 0 1-.356-1.028c-.148-.452-.32-.942-.492-1.468s-.356-1.076-.528-1.639c-.173-.562-.332-1.076-.48-1.54-.147.464-.307.978-.479 1.54-.172.563-.344 1.101-.516 1.64-.172.538-.332 1.027-.479 1.467-.148.453-.258.795-.357 1.028h-1.978zM214.33 45.86c.319 0 .59.11.823.33.222.22.332.489.332.82 0 .33-.11.586-.332.819-.221.22-.491.33-.823.33-.32 0-.59-.11-.823-.33a1.1 1.1 0 0 1-.332-.82c0-.33.11-.587.332-.82.233-.22.503-.33.823-.33zm-.946 4.623c0-.306.086-.538.27-.673.172-.134.43-.208.75-.208.196 0 .381.025.553.074.172.049.282.085.331.11v8.159h-1.904v-7.462zM217.537 55.865c.074.062.222.123.418.22.197.086.443.184.738.27.294.098.626.171 1.007.244a7.75 7.75 0 0 0 1.241.098c.578 0 1.057-.073 1.426-.22.369-.147.553-.404.553-.77 0-.306-.111-.551-.356-.71-.234-.16-.652-.27-1.254-.343l-1.303-.146a6.055 6.055 0 0 1-1.228-.245 2.925 2.925 0 0 1-.959-.477 2.017 2.017 0 0 1-.627-.734c-.147-.294-.221-.648-.221-1.052 0-.355.074-.685.209-1.003.135-.318.356-.6.664-.844.295-.245.688-.44 1.179-.575.48-.135 1.069-.208 1.758-.208 1.155 0 2.052.122 2.691.38.639.256.958.586.958.99a.836.836 0 0 1-.073.355c-.049.098-.111.183-.172.269-.062.073-.123.147-.197.196a.61.61 0 0 1-.147.097c-.05-.048-.148-.11-.295-.207-.148-.098-.357-.184-.615-.282a6.177 6.177 0 0 0-.921-.245 6.157 6.157 0 0 0-1.242-.11c-1.29 0-1.941.343-1.941 1.016 0 .293.123.501.368.66.246.147.59.257 1.057.306l1.708.22c.922.123 1.647.38 2.151.759.504.379.762.942.762 1.688 0 .831-.332 1.492-.996 1.994-.663.501-1.622.746-2.863.746a9.476 9.476 0 0 1-1.634-.135 10.332 10.332 0 0 1-1.278-.306 5.85 5.85 0 0 1-.873-.342 2.946 2.946 0 0 1-.43-.245l.737-1.309zM233.955 57.333c-.086.062-.233.135-.418.233-.184.098-.43.195-.712.281a7.837 7.837 0 0 1-.983.233 7.584 7.584 0 0 1-1.229.097 5.374 5.374 0 0 1-1.745-.281 3.855 3.855 0 0 1-1.414-.844 4.007 4.007 0 0 1-.958-1.358c-.234-.538-.356-1.162-.356-1.86 0-.66.11-1.271.344-1.822.233-.55.54-1.015.946-1.419a4.37 4.37 0 0 1 1.438-.917c.553-.22 1.155-.318 1.806-.318.578 0 1.094.073 1.536.22.443.147.824.355 1.131.6.307.244.541.538.688.868.16.33.233.685.233 1.064 0 .392-.073.734-.221 1.052-.147.318-.405.587-.774.82-.369.232-.86.403-1.487.538-.627.122-1.413.196-2.372.196-.221 0-.43 0-.626-.013-.197 0-.406-.012-.627-.024.086.563.369 1.027.823 1.37.467.355 1.119.526 1.979.526.295 0 .553-.025.799-.061.245-.05.467-.098.663-.172.197-.06.356-.134.504-.195.135-.061.246-.11.307-.147l.725 1.333zm-5.862-3.938c.259.012.504.012.738.012h.7c.615 0 1.106-.037 1.487-.11.381-.074.676-.184.885-.294.209-.122.356-.257.418-.416.061-.159.098-.318.098-.477 0-.416-.172-.734-.504-.942-.344-.208-.762-.318-1.265-.318-.418 0-.775.073-1.082.22-.307.147-.577.33-.786.575a2.658 2.658 0 0 0-.492.82c-.123.293-.184.6-.197.93zM235.688 52.575c0-1.015.32-1.81.946-2.373.627-.563 1.499-.844 2.618-.844.7 0 1.278.098 1.708.293.442.196.664.49.664.893 0 .184-.05.367-.16.55-.111.172-.197.294-.258.331a4.16 4.16 0 0 0-.701-.245 3.717 3.717 0 0 0-.946-.11c-1.303 0-1.954.685-1.954 2.055v4.82H235.7v-5.37h-.012zM199.891 69.664c.073.06.221.122.417.22.197.085.443.183.738.269.295.098.626.171 1.007.245.381.06.787.097 1.242.097.577 0 1.056-.073 1.425-.22.369-.147.553-.403.553-.77 0-.306-.111-.55-.356-.71-.234-.159-.652-.269-1.254-.342l-1.302-.147a6.05 6.05 0 0 1-1.229-.245c-.369-.122-.688-.269-.959-.477a2.016 2.016 0 0 1-.627-.734c-.147-.293-.221-.648-.221-1.052 0-.355.074-.685.209-1.003.135-.318.357-.6.664-.844.295-.245.688-.44 1.179-.575.48-.134 1.07-.208 1.758-.208 1.155 0 2.052.123 2.691.38.639.256.959.587.959 1.002a.836.836 0 0 1-.074.355c-.049.098-.111.184-.172.27-.062.073-.123.146-.197.195-.061.049-.11.086-.147.086-.049-.05-.148-.11-.295-.208-.148-.098-.357-.184-.615-.282a4.981 4.981 0 0 0-.921-.244 6.157 6.157 0 0 0-1.242-.11c-1.29 0-1.941.342-1.941 1.015 0 .294.123.502.369.66.245.147.589.257 1.056.306l1.709.22c.921.123 1.646.38 2.15.759.516.38.762.942.762 1.688 0 .832-.332 1.492-.995 1.994-.664.501-1.623.746-2.864.746a9.486 9.486 0 0 1-1.634-.135 10.368 10.368 0 0 1-1.278-.305 7.665 7.665 0 0 1-.873-.343 2.995 2.995 0 0 1-.43-.245l.738-1.308zM216.394 71.706c-.11.025-.282.05-.528.074-.246.024-.516.061-.848.085-.319.025-.688.05-1.081.074-.406.024-.824.037-1.254.037-.872 0-1.573-.074-2.126-.22-.553-.147-.983-.355-1.302-.6a1.919 1.919 0 0 1-.652-.869 2.823 2.823 0 0 1-.172-1.003c0-.452.074-.856.209-1.198.135-.343.369-.636.688-.869.32-.232.738-.403 1.242-.526.516-.122 1.13-.171 1.867-.171a18.908 18.908 0 0 1 2.053.11c0-.391-.062-.71-.197-.966a1.48 1.48 0 0 0-.528-.6 2.012 2.012 0 0 0-.799-.293 5.326 5.326 0 0 0-1.032-.086c-.639 0-1.143.073-1.524.22-.381.147-.639.27-.762.367a2.096 2.096 0 0 1-.27-.318.877.877 0 0 1-.173-.563c0-.159.037-.305.123-.452.086-.147.234-.282.443-.404a2.87 2.87 0 0 1 .848-.269 8.16 8.16 0 0 1 1.351-.098c.652 0 1.254.061 1.795.196.54.122 1.007.33 1.388.612.394.28.688.648.91 1.1.221.453.331 1.004.331 1.652v4.978zm-1.892-3.694a7.042 7.042 0 0 0-.627-.098c-.307-.049-.762-.06-1.376-.06-.762 0-1.303.11-1.647.342-.344.232-.516.587-.516 1.076 0 .196.037.38.111.55a.962.962 0 0 0 .381.429c.172.122.417.208.725.269.307.061.688.098 1.143.098.516 0 .921-.025 1.216-.061.295-.037.504-.074.602-.098v-2.447h-.012zM218.422 60.367c0-.294.086-.526.27-.66.173-.147.431-.22.75-.22.197 0 .381.024.553.073.172.048.283.085.332.11v12.06h-1.905V60.368zM229.826 71.12c-.086.06-.233.134-.418.232-.184.098-.43.195-.712.281a7.818 7.818 0 0 1-.983.233 7.596 7.596 0 0 1-1.229.097 5.374 5.374 0 0 1-1.745-.281 3.855 3.855 0 0 1-1.414-.844 3.89 3.89 0 0 1-.958-1.358c-.234-.538-.357-1.15-.357-1.86 0-.66.111-1.271.345-1.822.233-.55.54-1.015.946-1.407a4.372 4.372 0 0 1 1.438-.917 4.838 4.838 0 0 1 1.806-.33c.578 0 1.094.073 1.536.22a3.66 3.66 0 0 1 1.131.6c.307.244.54.537.688.868.16.33.233.685.233 1.064 0 .391-.073.734-.221 1.052-.147.318-.405.587-.774.82-.369.232-.86.403-1.487.538-.627.122-1.413.195-2.372.195-.221 0-.43 0-.626-.012-.197-.012-.406-.012-.627-.024.086.563.369 1.027.823 1.37.455.342 1.119.526 1.979.526.295 0 .553-.025.798-.061.246-.05.467-.098.664-.171.197-.062.356-.135.504-.196.135-.061.246-.123.307-.147l.725 1.333zm-5.862-3.94c.258.013.504.013.738.013h.7c.615 0 1.106-.037 1.487-.123.381-.073.676-.17.885-.293.209-.123.356-.257.418-.416.061-.16.098-.318.098-.477 0-.416-.172-.734-.504-.942-.344-.208-.762-.318-1.265-.318-.418 0-.775.073-1.082.22-.307.147-.577.33-.786.575a2.658 2.658 0 0 0-.492.82 2.823 2.823 0 0 0-.197.941zM231.78 69.664c.074.06.221.122.418.22.197.085.442.183.737.269.295.098.627.171 1.008.245a7.75 7.75 0 0 0 1.241.097c.578 0 1.057-.073 1.426-.22.368-.147.553-.403.553-.77 0-.306-.111-.55-.357-.71-.233-.159-.651-.269-1.253-.342l-1.303-.147a6.079 6.079 0 0 1-1.229-.245c-.368-.122-.688-.269-.958-.477a2.006 2.006 0 0 1-.627-.734c-.147-.293-.221-.648-.221-1.052 0-.355.074-.685.209-1.003.135-.318.356-.6.663-.844.295-.245.689-.44 1.18-.575.479-.134 1.069-.208 1.757-.208 1.156 0 2.053.123 2.692.38.639.256.958.587.958 1.002a.821.821 0 0 1-.074.355c-.049.098-.11.184-.172.27-.061.073-.122.146-.196.195-.062.049-.111.086-.148.086-.049-.05-.147-.11-.295-.208-.147-.098-.356-.184-.614-.282a4.972 4.972 0 0 0-.922-.244 6.147 6.147 0 0 0-1.241-.11c-1.29 0-1.941.342-1.941 1.015 0 .294.122.502.368.66.246.147.59.257 1.057.306l1.708.22c.922.123 1.647.38 2.151.759.516.38.762.942.762 1.688 0 .832-.332 1.492-.996 1.994-.663.501-1.622.746-2.863.746a9.486 9.486 0 0 1-1.634-.135 10.432 10.432 0 0 1-1.279-.305 7.64 7.64 0 0 1-.872-.343 2.936 2.936 0 0 1-.43-.245l.737-1.308zM199.473 81.737c0-.77.11-1.456.332-2.055.221-.587.528-1.089.934-1.492a3.95 3.95 0 0 1 1.45-.918 5.43 5.43 0 0 1 1.892-.318c.639 0 1.217.11 1.757.33.529.22.996.526 1.389.918.393.391.701.856.922 1.394.221.538.331 1.126.331 1.762 0 .648-.11 1.235-.319 1.773a4.139 4.139 0 0 1-.897 1.383 4.097 4.097 0 0 1-1.352.905c-.516.22-1.081.33-1.696.33-.639 0-1.192-.122-1.683-.367-.492-.244-.873-.538-1.155-.893v4.367h-1.905v-7.119zm4.473 2.336c.381 0 .725-.073 1.044-.208a2.438 2.438 0 0 0 1.352-1.443c.123-.33.185-.697.185-1.076 0-.38-.062-.734-.185-1.052a2.303 2.303 0 0 0-.528-.844 2.408 2.408 0 0 0-.824-.563 2.648 2.648 0 0 0-1.044-.208 2.65 2.65 0 0 0-1.045.196c-.319.134-.59.318-.823.55a2.29 2.29 0 0 0-.528.844c-.123.33-.197.685-.197 1.089 0 .391.061.746.197 1.076.122.33.307.624.528.869.221.244.492.44.811.575.32.122.676.195 1.057.195zM210.189 74.165c0-.293.086-.526.27-.66.172-.147.43-.22.75-.22.196 0 .381.024.553.073.172.049.282.085.331.11v12.061h-1.904V74.165zM221.679 85.492a4.954 4.954 0 0 1-.529.074c-.245.024-.516.06-.848.085-.319.025-.688.05-1.081.074-.406.024-.823.037-1.253.037-.873 0-1.573-.074-2.126-.22-.553-.148-.984-.356-1.303-.6a1.916 1.916 0 0 1-.651-.869 2.823 2.823 0 0 1-.172-1.003c0-.452.073-.856.208-1.198.136-.343.369-.636.689-.869.319-.232.737-.404 1.241-.526.516-.11 1.13-.171 1.868-.171a18.876 18.876 0 0 1 2.052.11c0-.391-.061-.71-.197-.966a1.481 1.481 0 0 0-.528-.6 2.008 2.008 0 0 0-.799-.293 5.326 5.326 0 0 0-1.032-.086c-.639 0-1.143.073-1.524.22-.381.147-.639.27-.762.367-.061-.061-.16-.159-.27-.318a.877.877 0 0 1-.172-.563c0-.159.037-.305.123-.452.086-.147.233-.282.442-.404.209-.122.492-.208.848-.281a8.165 8.165 0 0 1 1.352-.098 7.47 7.47 0 0 1 1.794.196 3.69 3.69 0 0 1 1.389.611c.393.282.688.648.909 1.101.221.453.332 1.003.332 1.64v5.002zm-1.88-3.682a6.992 6.992 0 0 0-.627-.097c-.307-.05-.762-.062-1.377-.062-.761 0-1.302.11-1.646.343-.344.232-.516.587-.516 1.076 0 .196.036.38.11.55a.974.974 0 0 0 .381.429c.172.11.418.208.725.269.307.061.688.086 1.143.086.516 0 .922-.013 1.217-.061.295-.05.504-.074.602-.098V81.81h-.012zM223.682 75.706c0-.305.086-.538.27-.672.172-.135.418-.208.737-.208.197 0 .381.024.566.073.172.049.282.086.344.11v2.177h2.421c.368 0 .626.074.774.22.147.147.221.368.221.661 0 .184-.024.367-.086.526-.061.16-.098.27-.135.343h-3.207v3.706c0 .294.036.526.122.71.074.183.185.33.32.44.135.11.295.183.479.233.185.048.381.06.578.06.319 0 .626-.048.897-.146.282-.098.479-.196.602-.281l.762 1.26a4.284 4.284 0 0 1-.381.244 3.772 3.772 0 0 1-.59.281 5.516 5.516 0 0 1-.786.22 4.591 4.591 0 0 1-.947.099c-.983 0-1.72-.257-2.224-.759-.504-.502-.75-1.162-.75-1.982v-7.315h.013zM230.06 76.673c0-.6.086-1.113.246-1.541.172-.429.405-.783.712-1.053.307-.269.664-.464 1.082-.599a4.848 4.848 0 0 1 1.376-.196c.909 0 1.561.11 1.942.319.381.22.565.489.565.819a.812.812 0 0 1-.16.502 1.23 1.23 0 0 1-.344.33c-.184-.147-.418-.257-.725-.355a3.602 3.602 0 0 0-.983-.135c-.651 0-1.131.172-1.401.502-.283.33-.418.807-.418 1.419v.502h2.507c.369 0 .627.073.774.22.148.147.222.367.222.66 0 .184-.025.367-.086.526-.062.16-.099.27-.136.343h-3.293v6.593h-1.905v-8.856h.025zM240.284 76.954c.651 0 1.253.11 1.806.33.566.22 1.045.526 1.463.918.405.391.737.856.971 1.394.233.538.356 1.126.356 1.75 0 .623-.123 1.198-.356 1.736a4.14 4.14 0 0 1-.971 1.395 4.726 4.726 0 0 1-1.463.93 4.697 4.697 0 0 1-1.806.342c-.651 0-1.253-.11-1.806-.342a4.726 4.726 0 0 1-1.463-.93 4.14 4.14 0 0 1-.971-1.395 4.314 4.314 0 0 1-.356-1.736c0-.636.123-1.212.356-1.75a4.142 4.142 0 0 1 .971-1.394 4.485 4.485 0 0 1 1.463-.918 4.838 4.838 0 0 1 1.806-.33zm0 7.132c.381 0 .725-.074 1.057-.208.319-.135.602-.33.823-.588.234-.244.406-.538.541-.868.123-.33.197-.685.197-1.076 0-.392-.062-.747-.197-1.09a2.416 2.416 0 0 0-.541-.868 2.434 2.434 0 0 0-.823-.575 2.717 2.717 0 0 0-1.057-.207c-.393 0-.737.073-1.057.207-.319.135-.59.33-.823.575a2.499 2.499 0 0 0-.529.869 3.191 3.191 0 0 0-.196 1.088c0 .392.061.747.196 1.077.123.33.308.612.529.868.221.257.504.44.823.588.307.134.664.208 1.057.208zM246.478 80.159c0-1.015.319-1.81.946-2.373.627-.563 1.499-.844 2.617-.844.701 0 1.278.098 1.709.294.442.195.663.489.663.892 0 .184-.049.367-.16.55-.11.172-.196.294-.258.331a4.114 4.114 0 0 0-.7-.245 3.723 3.723 0 0 0-.946-.11c-1.303 0-1.954.686-1.954 2.056v4.819h-1.905v-5.37h-.012zM253.421 80.159c0-.526.098-.99.282-1.395.185-.403.443-.733.775-.99.331-.27.712-.465 1.155-.612a5 5 0 0 1 1.45-.208c.688 0 1.303.122 1.856.38.54.256.983.635 1.302 1.125.32-.502.75-.881 1.29-1.126.529-.257 1.143-.379 1.819-.379.516 0 .996.061 1.438.196.442.134.823.33 1.155.6.32.268.578.599.762 1.002.184.404.283.869.283 1.395v5.382h-1.905v-4.734c0-.758-.172-1.309-.516-1.64-.344-.33-.811-.488-1.401-.488-.565 0-1.045.183-1.426.55-.381.367-.577.954-.577 1.774v4.538h-1.905v-4.538c0-.82-.197-1.42-.578-1.774-.38-.367-.86-.55-1.425-.55-.578 0-1.045.17-1.401.501-.356.33-.541.88-.541 1.651v4.722h-1.904V80.16h.012z",
        fill: "#fff"
      }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M170.864 47.67v38.776",
        stroke: "#fff",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, void 0, false, void 0, this)]
    }, void 0, true, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("linearGradient", {
        id: "b",
        x1: "34.048",
        y1: "26.034",
        x2: "170.867",
        y2: "26.034",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          stopColor: "#0659ED"
        }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          offset: "1",
          stopColor: "#DD0B97"
        }, void 0, false, void 0, this)]
      }, void 0, true, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("clipPath", {
        id: "a",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          fill: "#fff",
          d: "M0 0h267v100H0z"
        }, void 0, false, void 0, this)
      }, void 0, false, void 0, this)]
    }, void 0, true, void 0, this)]
  }), void 0, true, void 0, this);
};

WiserLogo.defaultProps = {
  width: "267",
  height: "100",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};











const SignIn = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useDispatch"])();
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_8__["useFormik"])({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values, {
      setSubmitting
    }) => {
      setSubmitting(true);
      dispatch(Object(_store_actions_account__WEBPACK_IMPORTED_MODULE_11__["AccountSignIn"])(values));
      setSubmitting(false);
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_10__["object"]().shape({
      email: yup__WEBPACK_IMPORTED_MODULE_10__["string"]().required('É obrigatório informar seu e-mail.').email('Informe um e-mail válido'),
      password: yup__WEBPACK_IMPORTED_MODULE_10__["string"]().required('É obrigatório informar sua senha.').min(6, 'A senha deve ter no minimo 6 caracteres')
    })
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    fluid: true,
    className: _styles_pages_SignIn_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.formheight,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "SignIn - Wiser"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "robots",
        content: "index/folow"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Bem-vindo \xE0 plataforma de vendas da Wiser Educa\xE7\xE3o."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
      className: _styles_pages_SignIn_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.formsignin,
      onSubmit: formik.handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WiserLogo, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
        text: "Ola, seja bem-vindo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_call_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
        text: "Para acessar a plataforma, fa\xE7a seu SignIn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        controlId: "formBasicEmail",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_label__WEBPACK_IMPORTED_MODULE_6__["default"], {
            text: "E-mail"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 33
          }, undefined), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
          type: "email",
          placeholder: "Informe o email",
          name: "email",
          onChange: formik.handleChange,
          value: formik.values.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, undefined), formik.errors.email && formik.touched.email ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_error__WEBPACK_IMPORTED_MODULE_7__["default"], {
          text: formik.errors.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 69
        }, undefined) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        controlId: "formBasicPassword",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_label__WEBPACK_IMPORTED_MODULE_6__["default"], {
            text: "Senha"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 33
          }, undefined), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
          type: "password",
          placeholder: "Senha",
          name: "password",
          onChange: formik.handleChange,
          value: formik.values.password
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, undefined), formik.errors.password && formik.touched.password ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_error__WEBPACK_IMPORTED_MODULE_7__["default"], {
          text: formik.errors.password
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 75
        }, undefined) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        variant: "primary",
        type: "submit",
        disabled: !formik.isValid || formik.isSubmitting,
        children: [formik.isSubmitting ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Spinner"], {
          animation: "border",
          size: "sm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 40
        }, undefined) : null, " Enviar"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");


/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: _utils_constants__WEBPACK_IMPORTED_MODULE_1__["urlApi"]
}));

/***/ }),

/***/ "./src/store/actions/account/index.ts":
/*!********************************************!*\
  !*** ./src/store/actions/account/index.ts ***!
  \********************************************/
/*! exports provided: AccountSignIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSignIn", function() { return AccountSignIn; });
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api */ "./src/services/api.ts");
/* harmony import */ var _ducks_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ducks/account */ "./src/store/ducks/account/index.ts");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux-toastr */ "react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);





const AccountSignIn = user => {
  return dispatch => {
    return _services_api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/account/signin', user).then(res => {
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["token"], res.data.token, {
        expires: 7
      });
      dispatch(Object(_ducks_account__WEBPACK_IMPORTED_MODULE_1__["signin"])());
      window.location.pathname = '/dashboard';
    }).catch(error => {
      react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__["toastr"].error('Conta', error.response.data.message);
    });
  };
};

/***/ }),

/***/ "./src/store/ducks/account/index.ts":
/*!******************************************!*\
  !*** ./src/store/ducks/account/index.ts ***!
  \******************************************/
/*! exports provided: signin, signout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signout", function() { return signout; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INITIAL_STATE = {
  isAuthenticated: false
};
const signin = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SIGNIN');
const signout = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SIGNOUT');
/* harmony default export */ __webpack_exports__["default"] = (Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(INITIAL_STATE, {
  [signin.type]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    isAuthenticated: true
  }),
  [signout.type]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    isAuthenticated: false
  })
}));

/***/ }),

/***/ "./src/store/ducks/index.ts":
/*!**********************************!*\
  !*** ./src/store/ducks/index.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux-toastr */ "react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account */ "./src/store/ducks/account/index.ts");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);




const reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  account: _account__WEBPACK_IMPORTED_MODULE_2__["default"],
  toastr: react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["reducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a)));

/***/ }),

/***/ "./src/styles/pages/SignIn.module.scss":
/*!*********************************************!*\
  !*** ./src/styles/pages/SignIn.module.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"formheight": "SignIn_formheight__3XAzh",
	"formsignin": "SignIn_formsignin__THK9W",
	"checkbox": "SignIn_checkbox__16Vjg",
	"formcontrol": "SignIn_formcontrol__1eeBx"
};


/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/*! exports provided: token, urlApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "token", function() { return token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlApi", function() { return urlApi; });
const token = 'wiser-token';
const urlApi = 'https://challenge-wiser-api.herokuapp.com';

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-redux-toastr":
/*!*************************************!*\
  !*** external "react-redux-toastr" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux-toastr");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FsbC10ZXh0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lcnJvci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGFiZWwvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpdGxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9zaWduaW4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMvYWNjb3VudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvZHVja3MvYWNjb3VudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvZHVja3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9wYWdlcy9TaWduSW4ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXgtdG9hc3RyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieXVwXCIiXSwibmFtZXMiOlsiQ2FsbFRleHQiLCJwcm9wcyIsInRleHQiLCJTdHlsZWRDYWxsVGV4dCIsInN0eWxlZCIsImg0IiwiRXJyb3IiLCJTdHlsZWRMYWJlbCIsImxhYmVsIiwiTGFiZWwiLCJUaXRsZSIsIlN0eWxlZFRpdGxlIiwiaDIiLCJIb21lIiwic3RvcmUiLCJzdGF0ZSIsInRvYXN0ciIsIldpc2VyTG9nbyIsIlNpZ25JbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwiZW1haWwiLCJwYXNzd29yZCIsIm9uU3VibWl0IiwidmFsdWVzIiwic2V0U3VibWl0dGluZyIsIkFjY291bnRTaWduSW4iLCJ2YWxpZGF0aW9uU2NoZW1hIiwiWXVwIiwic2hhcGUiLCJyZXF1aXJlZCIsIm1pbiIsInN0eWxlcyIsImZvcm1oZWlnaHQiLCJmb3Jtc2lnbmluIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3JzIiwidG91Y2hlZCIsImlzVmFsaWQiLCJpc1N1Ym1pdHRpbmciLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJ1cmxBcGkiLCJ1c2VyIiwiYXBpIiwicG9zdCIsInRoZW4iLCJyZXMiLCJDb29raWVzIiwic2V0IiwidG9rZW4iLCJkYXRhIiwiZXhwaXJlcyIsInNpZ25pbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjYXRjaCIsImVycm9yIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiSU5JVElBTF9TVEFURSIsImlzQXV0aGVudGljYXRlZCIsImNyZWF0ZUFjdGlvbiIsInNpZ25vdXQiLCJjcmVhdGVSZWR1Y2VyIiwidHlwZSIsImFjdGlvbiIsInJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJhY2NvdW50IiwidG9hc3RyUmVkdWNlciIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTs7QUFNQSxNQUFNQSxRQUFrQyxHQUFJQyxLQUFELElBQTBCO0FBQ25FLHNCQUNFLHFFQUFDLGNBQUQ7QUFBQSxjQUFpQkEsS0FBSyxDQUFDQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFHRCxDQUpEOztBQU1lRix1RUFBZjtBQUVBLE1BQU1HLGNBQWMsR0FBR0Msd0RBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FB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LE1BQU14QixLQUFLLEdBQUcsYUFBZDtBQUNBLE1BQU1SLE1BQU0sR0FBRywyQ0FBZixDOzs7Ozs7Ozs7OztBQ0RQLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbnRlcmZhY2UgQ2FsbFRleHRQcm9wcyB7XHJcbiAgdGV4dCA6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBDYWxsVGV4dCA6IFJlYWN0LkZDPENhbGxUZXh0UHJvcHM+ID0gKHByb3BzOiBDYWxsVGV4dFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRDYWxsVGV4dD57cHJvcHMudGV4dH08L1N0eWxlZENhbGxUZXh0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGxUZXh0O1xyXG5cclxuY29uc3QgU3R5bGVkQ2FsbFRleHQgPSBzdHlsZWQuaDRgXHJcbiAgY29sb3I6ICM5ODlGREI7XHJcbiAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wIDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tIDogMjBweDtcclxuYDsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmludGVyZmFjZSBMYWJlbFByb3BzIHtcclxuICB0ZXh0IDogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IEVycm9yID0gKHByb3BzIDogTGFiZWxQcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkTGFiZWw+e3Byb3BzLnRleHR9PC9TdHlsZWRMYWJlbD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3I7XHJcblxyXG5jb25zdCBTdHlsZWRMYWJlbCA9IHN0eWxlZC5sYWJlbGBcclxuICBjb2xvcjogcmVkO1xyXG5gOyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW50ZXJmYWNlIExhYmVsUHJvcHMge1xyXG4gIHRleHQgOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgTGFiZWwgPSAocHJvcHMgOiBMYWJlbFByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRMYWJlbD57cHJvcHMudGV4dH08L1N0eWxlZExhYmVsPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYWJlbDtcclxuXHJcbmNvbnN0IFN0eWxlZExhYmVsID0gc3R5bGVkLmxhYmVsYFxyXG4gIGNvbG9yOiAjMzgzRTcxO1xyXG5gOyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5pbnRlcmZhY2UgVGl0bGVQcm9wcyB7XHJcbiAgdGV4dCA6IHN0cmluZ1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaXRsZShwcm9wczogVGl0bGVQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkVGl0bGU+e3Byb3BzLnRleHR9PC9TdHlsZWRUaXRsZT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcclxuXHJcbmNvbnN0IFN0eWxlZFRpdGxlID0gc3R5bGVkLmgyYFxyXG4gIGNvbG9yOiAjMzgzRTcxO1xyXG4gIG1hcmdpbi10b3AgOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b20gOiAyMHB4O1xyXG4gIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbmA7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJlZHV4VG9hc3RyIGZyb20gJ3JlYWN0LXJlZHV4LXRvYXN0cidcblxuaW1wb3J0IExvZ2luIGZyb20gJy4vc2lnbmluJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlL2R1Y2tzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8PlxuICAgICAgICA8TG9naW4gLz5cbiAgICAgICAgPFJlZHV4VG9hc3RyXG4gICAgICAgICAgdGltZU91dD17NDAwMH1cbiAgICAgICAgICBuZXdlc3RPblRvcD17ZmFsc2V9XG4gICAgICAgICAgcHJldmVudER1cGxpY2F0ZXNcbiAgICAgICAgICBwb3NpdGlvbj1cInRvcC1yaWdodFwiXG4gICAgICAgICAgZ2V0U3RhdGU9eyhzdGF0ZSkgPT4gc3RhdGUudG9hc3RyfSAvLyBUaGlzIGlzIHRoZSBkZWZhdWx0XG4gICAgICAgICAgdHJhbnNpdGlvbkluPVwiZmFkZUluXCJcbiAgICAgICAgICB0cmFuc2l0aW9uT3V0PVwiZmFkZU91dFwiXG4gICAgICAgICAgcHJvZ3Jlc3NCYXJcbiAgICAgICAgICBjbG9zZU9uVG9hc3RyQ2xpY2sgLz5cbiAgICAgIDwvPlxuICAgIDwvUHJvdmlkZXI+XG4gIClcbn1cbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFdpc2VyTG9nbyBmcm9tICcuLi8uLi9hc3NldHMvd3NwLWxvZ28uc3ZnJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9wYWdlcy9TaWduSW4ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RpdGxlJ1xyXG5pbXBvcnQgQ2FsbFRleHQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jYWxsLXRleHQnXHJcbmltcG9ydCBMYWJlbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xhYmVsJ1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9lcnJvcidcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEZvcm0sIEJ1dHRvbiwgU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCB7IEFjY291bnRTaWduSW4gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2FjY291bnQnO1xyXG5cclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5cclxuY29uc3QgU2lnbkluOiBSZWFjdC5GQzxhbnk+ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdWJtaXQ6ICh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZyB9KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaChBY2NvdW50U2lnbkluKHZhbHVlcykpO1xyXG5cclxuICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBlbWFpbDogWXVwLnN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ8OJIG9icmlnYXTDs3JpbyBpbmZvcm1hciBzZXUgZS1tYWlsLicpXHJcbiAgICAgICAgICAgICAgICAuZW1haWwoJ0luZm9ybWUgdW0gZS1tYWlsIHbDoWxpZG8nKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKCfDiSBvYnJpZ2F0w7NyaW8gaW5mb3JtYXIgc3VhIHNlbmhhLicpXHJcbiAgICAgICAgICAgICAgICAubWluKDYsICdBIHNlbmhhIGRldmUgdGVyIG5vIG1pbmltbyA2IGNhcmFjdGVyZXMnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybWhlaWdodH0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlNpZ25JbiAtIFdpc2VyPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIHsvKiBJbmRleCBvIGNvbnRlw7pkbyBlIHNlZ3VlIG9zIGxpbmtzICovfVxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0ncm9ib3RzJyBjb250ZW50PSdpbmRleC9mb2xvdycgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJCZW0tdmluZG8gw6AgcGxhdGFmb3JtYSBkZSB2ZW5kYXMgZGEgV2lzZXIgRWR1Y2HDp8Ojby5cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3Jtc2lnbmlufSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8V2lzZXJMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGUgdGV4dD0nT2xhLCBzZWphIGJlbS12aW5kbycgLz5cclxuICAgICAgICAgICAgICAgIDxDYWxsVGV4dCB0ZXh0PSdQYXJhIGFjZXNzYXIgYSBwbGF0YWZvcm1hLCBmYcOnYSBzZXUgU2lnbkluJyAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUJhc2ljRW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD48TGFiZWwgdGV4dD1cIkUtbWFpbFwiIC8+IDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiSW5mb3JtZSBvIGVtYWlsXCIgbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9IHZhbHVlPXtmb3JtaWsudmFsdWVzLmVtYWlsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLmVtYWlsICYmIGZvcm1pay50b3VjaGVkLmVtYWlsID8gKDxFcnJvciB0ZXh0PXtmb3JtaWsuZXJyb3JzLmVtYWlsfSAvPikgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY1Bhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+PExhYmVsIHRleHQ9XCJTZW5oYVwiIC8+IDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiU2VuaGFcIiBuYW1lPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX0gdmFsdWU9e2Zvcm1pay52YWx1ZXMucGFzc3dvcmR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMucGFzc3dvcmQgJiYgZm9ybWlrLnRvdWNoZWQucGFzc3dvcmQgPyAoPEVycm9yIHRleHQ9e2Zvcm1pay5lcnJvcnMucGFzc3dvcmR9IC8+KSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXshZm9ybWlrLmlzVmFsaWQgfHwgZm9ybWlrLmlzU3VibWl0dGluZ30+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmlzU3VibWl0dGluZyA/IDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHNpemU9XCJzbVwiIC8+IDogbnVsbH0gRW52aWFyXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1cmxBcGkgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXhpb3MuY3JlYXRlKHtcclxuXHRiYXNlVVJMOiB1cmxBcGlcclxufSk7IiwiaW1wb3J0IGFwaSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hcGknO1xyXG5pbXBvcnQgeyBzaWduaW4gfSBmcm9tICcuLi8uLi9kdWNrcy9hY2NvdW50JztcclxuaW1wb3J0IHt0b2FzdHJ9IGZyb20gJ3JlYWN0LXJlZHV4LXRvYXN0cidcclxuaW1wb3J0IHt0b2tlbn0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29uc3RhbnRzJ1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3VudFNpZ25JbiA9ICh1c2VyKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhcGlcclxuICAgICAgICAgICAgLnBvc3QoJy9hY2NvdW50L3NpZ25pbicsIHVzZXIpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KHRva2VuLCByZXMuZGF0YS50b2tlbiwgeyBleHBpcmVzOiA3IH0pO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNpZ25pbigpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPSAnL2Rhc2hib2FyZCc7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcignQ29udGEnLCBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxufTsiLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24sIGNyZWF0ZVJlZHVjZXIgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcblxyXG5pbnRlcmZhY2UgSUFjY291bnQge1xyXG4gICAgaXNBdXRoZW50aWNhdGVkIDogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFIDogSUFjY291bnQgPSB7XHJcblx0aXNBdXRoZW50aWNhdGVkOiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25pbiA9IGNyZWF0ZUFjdGlvbignU0lHTklOJyk7XHJcbmV4cG9ydCBjb25zdCBzaWdub3V0ID0gY3JlYXRlQWN0aW9uKCdTSUdOT1VUJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyKElOSVRJQUxfU1RBVEUsIHtcclxuXHRbc2lnbmluLnR5cGVdOiAoc3RhdGUsIGFjdGlvbikgPT4gKHsgLi4uc3RhdGUsIGlzQXV0aGVudGljYXRlZDogdHJ1ZSB9KSxcclxuXHRbc2lnbm91dC50eXBlXTogKHN0YXRlLCBhY3Rpb24pID0+ICh7IC4uLnN0YXRlLCBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlIH0pXHJcbn0pO1xyXG4iLCIgaW1wb3J0IHtjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQge3JlZHVjZXIgYXMgdG9hc3RyUmVkdWNlcn0gZnJvbSAncmVhY3QtcmVkdXgtdG9hc3RyJ1xyXG5cclxuaW1wb3J0IGFjY291bnQgZnJvbSAnLi9hY2NvdW50J1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXHJcblxyXG4gY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBhY2NvdW50LFxyXG4gICAgdG9hc3RyOiB0b2FzdHJSZWR1Y2VyXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZShyZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUodGh1bmspKSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvcm1oZWlnaHRcIjogXCJTaWduSW5fZm9ybWhlaWdodF9fM1hBemhcIixcblx0XCJmb3Jtc2lnbmluXCI6IFwiU2lnbkluX2Zvcm1zaWduaW5fX1RISzlXXCIsXG5cdFwiY2hlY2tib3hcIjogXCJTaWduSW5fY2hlY2tib3hfXzE2VmpnXCIsXG5cdFwiZm9ybWNvbnRyb2xcIjogXCJTaWduSW5fZm9ybWNvbnRyb2xfXzFlZUJ4XCJcbn07XG4iLCJleHBvcnQgY29uc3QgdG9rZW4gPSAnd2lzZXItdG9rZW4nO1xyXG5leHBvcnQgY29uc3QgdXJsQXBpID0gJ2h0dHBzOi8vY2hhbGxlbmdlLXdpc2VyLWFwaS5oZXJva3VhcHAuY29tJyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4LXRvYXN0clwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieXVwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=