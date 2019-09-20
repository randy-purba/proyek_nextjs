module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/actions/BannerApi.js":
/*!*****************************************!*\
  !*** ./components/actions/BannerApi.js ***!
  \*****************************************/
/*! exports provided: getListBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListBanner", function() { return getListBanner; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/types */ "./components/types.js");



 // const API_URL = process.env.API_URL

var API_DUMMY_URL = "http://localhost:3000/api";
var getListBanner = function getListBanner() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var url, responses, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "".concat(API_DUMMY_URL, "/banners");
                _context.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

              case 3:
                responses = _context.sent;
                _context.next = 6;
                return responses.json();

              case 6:
                data = _context.sent;
                return _context.abrupt("return", dispatch({
                  type: _components_types__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].LIST_BANNER,
                  payload: data
                }));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./components/actions/BrushBarChartApi.js":
/*!************************************************!*\
  !*** ./components/actions/BrushBarChartApi.js ***!
  \************************************************/
/*! exports provided: getBrushBarChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrushBarChart", function() { return getBrushBarChart; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./components/types.js");



 // const API_URL = process.env.API_URL

var API_DUMMY_URL = "http://localhost:3000/api";
var getBrushBarChart = function getBrushBarChart() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var url, responses, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "".concat(API_DUMMY_URL, "/brushBarChart");
                _context.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

              case 3:
                responses = _context.sent;
                _context.next = 6;
                return responses.json();

              case 6:
                data = _context.sent;
                return _context.abrupt("return", dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].BRUSH_BAR_CHART,
                  payload: data
                }));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./components/actions/DashboardApi.js":
/*!********************************************!*\
  !*** ./components/actions/DashboardApi.js ***!
  \********************************************/
/*! exports provided: getPointCollectionToday, getTotalSalesToday, getItemsSoldToday */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPointCollectionToday", function() { return getPointCollectionToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalSalesToday", function() { return getTotalSalesToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemsSoldToday", function() { return getItemsSoldToday; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./components/types.js");



 // const API_URL = process.env.API_URL

var API_DUMMY_URL = "http://localhost:3000/api";
var getPointCollectionToday = function getPointCollectionToday() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var url, responses, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "".concat(API_DUMMY_URL, "/pointCollectionToday");
                _context.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

              case 3:
                responses = _context.sent;
                _context.next = 6;
                return responses.json();

              case 6:
                data = _context.sent;
                return _context.abrupt("return", dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].POINTS_COLLECTED_TODAY,
                  payload: data
                }));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var getTotalSalesToday = function getTotalSalesToday() {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        var url, responses, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = "".concat(API_DUMMY_URL, "/totalSalesToday");
                _context2.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

              case 3:
                responses = _context2.sent;
                _context2.next = 6;
                return responses.json();

              case 6:
                data = _context2.sent;
                return _context2.abrupt("return", dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].TOTAL_SALES_TODAY,
                  payload: data
                }));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var getItemsSoldToday = function getItemsSoldToday() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        var url, responses, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = "".concat(API_DUMMY_URL, "/itemSoldToday");
                _context3.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

              case 3:
                responses = _context3.sent;
                _context3.next = 6;
                return responses.json();

              case 6:
                data = _context3.sent;
                return _context3.abrupt("return", dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].ITEMS_SOLD_TODAY,
                  payload: data
                }));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./components/actions/GlobalChartApi.js":
/*!**********************************************!*\
  !*** ./components/actions/GlobalChartApi.js ***!
  \**********************************************/
/*! exports provided: getGlobalChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalChart", function() { return getGlobalChart; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./components/types.js");



 // const API_URL = process.env.API_URL

var API_DUMMY_URL = "http://localhost:3000/api";
var getGlobalChart = function getGlobalChart() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var url, responses, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "".concat(API_DUMMY_URL, "/globalChart");
                _context.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

              case 3:
                responses = _context.sent;
                _context.next = 6;
                return responses.json();

              case 6:
                data = _context.sent;
                return _context.abrupt("return", dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].GLOBAL_CHART,
                  payload: data
                }));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./components/actions/LineChartApi.js":
/*!********************************************!*\
  !*** ./components/actions/LineChartApi.js ***!
  \********************************************/
/*! exports provided: getLineChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLineChart", function() { return getLineChart; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./components/types.js");



 // const API_URL = process.env.API_URL

var API_DUMMY_URL = "http://localhost:3000/api";
var getLineChart = function getLineChart() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var url, responses, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "".concat(API_DUMMY_URL, "/lineChart");
                _context.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

              case 3:
                responses = _context.sent;
                _context.next = 6;
                return responses.json();

              case 6:
                data = _context.sent;
                return _context.abrupt("return", dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].LINE_CHART,
                  payload: data
                }));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./components/actions/ListCityApi.js":
/*!*******************************************!*\
  !*** ./components/actions/ListCityApi.js ***!
  \*******************************************/
/*! exports provided: getListCities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListCities", function() { return getListCities; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./components/types.js");



 // const API_URL = process.env.API_URL

var API_DUMMY_URL = "http://localhost:3000/api";
var getListCities = function getListCities() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var url, responses, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "".concat(API_DUMMY_URL, "/listKota");
                _context.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

              case 3:
                responses = _context.sent;
                _context.next = 6;
                return responses.json();

              case 6:
                data = _context.sent;
                return _context.abrupt("return", dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].LIST_CITY,
                  payload: data
                }));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./components/actions/ListTransactionApi.js":
/*!**************************************************!*\
  !*** ./components/actions/ListTransactionApi.js ***!
  \**************************************************/
/*! exports provided: getListTransaction, getAllExportedTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListTransaction", function() { return getListTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllExportedTransaction", function() { return getAllExportedTransaction; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./components/types.js");



 // const API_URL = process.env.API_URL

var API_DUMMY_URL = "http://localhost:3000/api";
var getListTransaction = function getListTransaction(page, len, dateFrom, dateTo, sortBy, nameVal) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var from, to, keywords, params, url, responses, headers, total, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                from = dateFrom ? "&date_gte=".concat(dateFrom) : '';
                to = dateTo ? "&date_lte=".concat(dateTo) : '';
                keywords = nameVal ? "name_like=".concat(nameVal, "&") : '';
                params = "".concat(keywords, "_start=").concat(page * len, "&_limit=").concat(len).concat(from).concat(to, "&_sort=").concat(sortBy, "&_order=desc");
                url = "".concat(API_DUMMY_URL, "/listTransaction?").concat(params);
                _context.next = 7;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

              case 7:
                responses = _context.sent;
                _context.next = 10;
                return responses.headers;

              case 10:
                headers = _context.sent;
                _context.next = 13;
                return headers.get('x-total-count');

              case 13:
                total = _context.sent;
                dispatch(getTotalTransaction(total));
                _context.next = 17;
                return responses.json();

              case 17:
                data = _context.sent;
                return _context.abrupt("return", dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].LIST_TRANSACTION,
                  payload: data
                }));

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var getAllExportedTransaction =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dateFrom, dateTo, sortBy, nameVal) {
    var keywords, params, url, responses, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            keywords = nameVal ? "name_like=".concat(nameVal, "&") : '';
            params = "".concat(keywords, "date_gte=").concat(dateFrom, "&date_lte=").concat(dateTo, "&_sort=").concat(sortBy, "&_order=desc");
            url = "".concat(API_DUMMY_URL, "/listTransaction?").concat(params);
            _context2.next = 5;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 5:
            responses = _context2.sent;
            _context2.next = 8;
            return responses.json();

          case 8:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAllExportedTransaction(_x2, _x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

var getTotalTransaction = function getTotalTransaction(data) {
  return function (dispatch) {
    return dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].TOTAL_TRANSACTION,
      payload: data
    });
  };
};

/***/ }),

/***/ "./components/actions/PieDoubleChartApi.js":
/*!*************************************************!*\
  !*** ./components/actions/PieDoubleChartApi.js ***!
  \*************************************************/
/*! exports provided: getPieDoubleChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPieDoubleChart", function() { return getPieDoubleChart; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./components/types.js");



 // const API_URL = process.env.API_URL

var API_DUMMY_URL = "http://localhost:3000/api";
var getPieDoubleChart = function getPieDoubleChart() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var url, responses, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "".concat(API_DUMMY_URL, "/pieDoubleChart");
                _context.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

              case 3:
                responses = _context.sent;
                _context.next = 6;
                return responses.json();

              case 6:
                data = _context.sent;
                return _context.abrupt("return", dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].PIE_DOUBLE_CHART,
                  payload: data
                }));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./components/actions/UserApi.js":
/*!***************************************!*\
  !*** ./components/actions/UserApi.js ***!
  \***************************************/
/*! exports provided: userLogin, userLogout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogin", function() { return userLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogout", function() { return userLogout; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);





 // import { actionTypes } from '../../components/types'

var API_URL = "http://172.20.1.106:8124/api";
var CLIENT_ID = "my-client-id";
var CLIENT_SECRET = "password";
var token = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('token');
console.log(token);

var getUserProfile =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(access_token) {
    var url, res, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "".concat(API_URL, "/v1/user/profile");
            _context.next = 3;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(url, {
              headers: {
                Authorization: 'Bearer ' + access_token
              }
            });

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;
            return _context.abrupt("return", data.object);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUserProfile(_x) {
    return _ref.apply(this, arguments);
  };
}();

var userLogin =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(token) {
    var access_token, user;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(token);
            access_token = token.access_token; // const access_token = JSON.parse(token).access_token

            _context2.next = 4;
            return getUserProfile(token.access_token);

          case 4:
            user = _context2.sent;
            console.log(user);
            token.user = user;
            js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set('token', token, {
              expires: 1
            });
            next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/dashboard');

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function userLogin(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var userLogout =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log(js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('token'));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function userLogout() {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./components/actions/index.js":
/*!*************************************!*\
  !*** ./components/actions/index.js ***!
  \*************************************/
/*! exports provided: userLogin, userLogout, getListBanner, getListCities, getListTransaction, getAllExportedTransaction, getLineChart, getGlobalChart, getPieDoubleChart, getPointCollectionToday, getTotalSalesToday, getItemsSoldToday, getBrushBarChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserApi */ "./components/actions/UserApi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userLogin", function() { return _UserApi__WEBPACK_IMPORTED_MODULE_0__["userLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userLogout", function() { return _UserApi__WEBPACK_IMPORTED_MODULE_0__["userLogout"]; });

/* harmony import */ var _BannerApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BannerApi */ "./components/actions/BannerApi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getListBanner", function() { return _BannerApi__WEBPACK_IMPORTED_MODULE_1__["getListBanner"]; });

/* harmony import */ var _ListCityApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListCityApi */ "./components/actions/ListCityApi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getListCities", function() { return _ListCityApi__WEBPACK_IMPORTED_MODULE_2__["getListCities"]; });

/* harmony import */ var _ListTransactionApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListTransactionApi */ "./components/actions/ListTransactionApi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getListTransaction", function() { return _ListTransactionApi__WEBPACK_IMPORTED_MODULE_3__["getListTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllExportedTransaction", function() { return _ListTransactionApi__WEBPACK_IMPORTED_MODULE_3__["getAllExportedTransaction"]; });

/* harmony import */ var _LineChartApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LineChartApi */ "./components/actions/LineChartApi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLineChart", function() { return _LineChartApi__WEBPACK_IMPORTED_MODULE_4__["getLineChart"]; });

/* harmony import */ var _GlobalChartApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GlobalChartApi */ "./components/actions/GlobalChartApi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalChart", function() { return _GlobalChartApi__WEBPACK_IMPORTED_MODULE_5__["getGlobalChart"]; });

/* harmony import */ var _PieDoubleChartApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PieDoubleChartApi */ "./components/actions/PieDoubleChartApi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPieDoubleChart", function() { return _PieDoubleChartApi__WEBPACK_IMPORTED_MODULE_6__["getPieDoubleChart"]; });

/* harmony import */ var _DashboardApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DashboardApi */ "./components/actions/DashboardApi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPointCollectionToday", function() { return _DashboardApi__WEBPACK_IMPORTED_MODULE_7__["getPointCollectionToday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTotalSalesToday", function() { return _DashboardApi__WEBPACK_IMPORTED_MODULE_7__["getTotalSalesToday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getItemsSoldToday", function() { return _DashboardApi__WEBPACK_IMPORTED_MODULE_7__["getItemsSoldToday"]; });

/* harmony import */ var _BrushBarChartApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BrushBarChartApi */ "./components/actions/BrushBarChartApi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBrushBarChart", function() { return _BrushBarChartApi__WEBPACK_IMPORTED_MODULE_8__["getBrushBarChart"]; });











/***/ }),

/***/ "./components/cards/PaginationCard.js":
/*!********************************************!*\
  !*** ./components/cards/PaginationCard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/tog-randy/Source/BCA/Project/components/cards/PaginationCard.js";


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var size = props.size,
      ariaLabel = props.ariaLabel,
      totalContent = props.totalContent,
      currentPage = props.currentPage,
      contentMaxLength = props.contentMaxLength,
      _onClick = props.onClick;
  var totalPage = Math.ceil(totalContent / contentMaxLength);

  var generatePagination = function generatePagination() {
    var lists = [],
        current = currentPage + 1,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

    for (var i = 1; i <= totalPage; i++) {
      if (i == 1 || i == totalPage || i >= left && i < right) {
        range.push(i);
      }
    }

    for (var _i = 0, _range = range; _i < _range.length; _i++) {
      var _i3 = _range[_i];

      if (l) {
        if (_i3 - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (_i3 - l !== 1) {
          rangeWithDots.push('...');
        }
      }

      rangeWithDots.push(_i3);
      l = _i3;
    }

    var _loop = function _loop() {
      var i = _rangeWithDots[_i2];
      var btn = i == '...' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationItem"], {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationLink"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, i)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationItem"], {
        key: i,
        onClick: function onClick() {
          return _onClick(i - 1);
        },
        className: i === current ? 'active' : '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationLink"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, i));
      lists.push(btn);
    };

    for (var _i2 = 0, _rangeWithDots = rangeWithDots; _i2 < _rangeWithDots.length; _i2++) {
      _loop();
    }

    return lists;
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true,
    className: "w-100 d-inline-block p-0 mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
    size: size,
    "aria-label": ariaLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, currentPage > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationLink"], {
    onClick: function onClick() {
      return _onClick(0);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "font-12 icon-chevron-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }))) : "", generatePagination(), currentPage + 1 < totalPage ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationLink"], {
    onClick: function onClick() {
      return _onClick(totalPage - 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "font-12 icon-chevron-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))) : ""));
});

/***/ }),

/***/ "./components/form/inputForm.js":
/*!**************************************!*\
  !*** ./components/form/inputForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/tog-randy/Source/BCA/Project/components/form/inputForm.js";


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "mb-3 position-relative ".concat(props.containerClassName ? props.containerClassName : '')
  }, props.containerStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), props.withLabel ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    for: props.formId,
    className: props.labelClassName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.labelName) : "", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    className: props.formClassName,
    id: props.formId,
    type: props.formType,
    name: props.formName,
    placeholder: props.formPlaceholder,
    onChange: props.onChange,
    related: props.formRelation,
    value: props.formValue,
    bsSize: props.formSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
});

/***/ }),

/***/ "./components/form/selectForm.js":
/*!***************************************!*\
  !*** ./components/form/selectForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/tog-randy/Source/BCA/Project/components/form/selectForm.js";


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "mb-3 position-relative ".concat(props.containerClassName ? props.containerClassName : '')
  }, props.containerStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), props.withLabel ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    for: props.formId,
    className: props.labelClassName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.labelName) : "", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "select",
    className: props.formClassName,
    name: props.formName,
    id: props.formId,
    value: props.formValue,
    onChange: props.onChange,
    related: props.formRelation,
    bsSize: props.formSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.formPlaceholder ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    key: "",
    value: "",
    readOnly: true,
    hidden: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, props.formPlaceholder) : "", props.formOptionData.map(function (data, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      key: key,
      value: data.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, data.name);
  })));
});

/***/ }),

/***/ "./components/functions/addDays.js":
/*!*****************************************!*\
  !*** ./components/functions/addDays.js ***!
  \*****************************************/
/*! exports provided: addDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDays", function() { return addDays; });
var addDays = function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

/***/ }),

/***/ "./components/functions/capitalizeString.js":
/*!**************************************************!*\
  !*** ./components/functions/capitalizeString.js ***!
  \**************************************************/
/*! exports provided: capitalizeString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeString", function() { return capitalizeString; });
var capitalizeString = function capitalizeString(text) {
  return text.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};

/***/ }),

/***/ "./components/functions/index.js":
/*!***************************************!*\
  !*** ./components/functions/index.js ***!
  \***************************************/
/*! exports provided: slugifyUrl, timestampToDate, timestampToDateTime, splitPosition, capitalizeString, regexHtmlTag, numberToCurrency, numberWithDot, addDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slugifyUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slugifyUrl */ "./components/functions/slugifyUrl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slugifyUrl", function() { return _slugifyUrl__WEBPACK_IMPORTED_MODULE_0__["slugifyUrl"]; });

/* harmony import */ var _timestampToDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timestampToDate */ "./components/functions/timestampToDate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestampToDate", function() { return _timestampToDate__WEBPACK_IMPORTED_MODULE_1__["timestampToDate"]; });

/* harmony import */ var _timestampToDateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timestampToDateTime */ "./components/functions/timestampToDateTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestampToDateTime", function() { return _timestampToDateTime__WEBPACK_IMPORTED_MODULE_2__["timestampToDateTime"]; });

/* harmony import */ var _splitPosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splitPosition */ "./components/functions/splitPosition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitPosition", function() { return _splitPosition__WEBPACK_IMPORTED_MODULE_3__["splitPosition"]; });

/* harmony import */ var _capitalizeString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./capitalizeString */ "./components/functions/capitalizeString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalizeString", function() { return _capitalizeString__WEBPACK_IMPORTED_MODULE_4__["capitalizeString"]; });

/* harmony import */ var _regexHtmlTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./regexHtmlTag */ "./components/functions/regexHtmlTag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "regexHtmlTag", function() { return _regexHtmlTag__WEBPACK_IMPORTED_MODULE_5__["regexHtmlTag"]; });

/* harmony import */ var _numberToCurrency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./numberToCurrency */ "./components/functions/numberToCurrency.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberToCurrency", function() { return _numberToCurrency__WEBPACK_IMPORTED_MODULE_6__["numberToCurrency"]; });

/* harmony import */ var _numberWithDot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./numberWithDot */ "./components/functions/numberWithDot.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberWithDot", function() { return _numberWithDot__WEBPACK_IMPORTED_MODULE_7__["numberWithDot"]; });

/* harmony import */ var _addDays__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addDays */ "./components/functions/addDays.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addDays", function() { return _addDays__WEBPACK_IMPORTED_MODULE_8__["addDays"]; });











/***/ }),

/***/ "./components/functions/numberToCurrency.js":
/*!**************************************************!*\
  !*** ./components/functions/numberToCurrency.js ***!
  \**************************************************/
/*! exports provided: numberToCurrency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberToCurrency", function() { return numberToCurrency; });
var numberToCurrency = function numberToCurrency(str, symbol, withDecimal) {
  var withSymbol = symbol ? "".concat(symbol, " ") : '';
  return withDecimal ? "".concat(withSymbol + str.toFixed(2) // always two decimal digits
  .replace('.', ',') // replace decimal point character with ,
  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')) : "".concat(withSymbol + str.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'));
};

/***/ }),

/***/ "./components/functions/numberWithDot.js":
/*!***********************************************!*\
  !*** ./components/functions/numberWithDot.js ***!
  \***********************************************/
/*! exports provided: numberWithDot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberWithDot", function() { return numberWithDot; });
var numberWithDot = function numberWithDot(str) {
  return "".concat(str.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'));
};

/***/ }),

/***/ "./components/functions/regexHtmlTag.js":
/*!**********************************************!*\
  !*** ./components/functions/regexHtmlTag.js ***!
  \**********************************************/
/*! exports provided: regexHtmlTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexHtmlTag", function() { return regexHtmlTag; });
var regexHtmlTag = function regexHtmlTag(text) {
  return text.replace(/(<([^>]+)>)/ig, '');
};

/***/ }),

/***/ "./components/functions/slugifyUrl.js":
/*!********************************************!*\
  !*** ./components/functions/slugifyUrl.js ***!
  \********************************************/
/*! exports provided: slugifyUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slugifyUrl", function() { return slugifyUrl; });
var slugifyUrl = function slugifyUrl(text) {
  return text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
  .replace(/[^\w\-]+/g, '') // Remove all non-word chars
  .replace(/\-\-+/g, '-') // Replace multiple - with single -
  .replace(/^-+/, '') // Trim - from start of text
  .replace(/-+$/, '');
};

/***/ }),

/***/ "./components/functions/splitPosition.js":
/*!***********************************************!*\
  !*** ./components/functions/splitPosition.js ***!
  \***********************************************/
/*! exports provided: splitPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitPosition", function() { return splitPosition; });
var splitPosition = function splitPosition(props) {
  return props.split(",");
};

/***/ }),

/***/ "./components/functions/timestampToDate.js":
/*!*************************************************!*\
  !*** ./components/functions/timestampToDate.js ***!
  \*************************************************/
/*! exports provided: timestampToDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestampToDate", function() { return timestampToDate; });
var timestampToDate = function timestampToDate(props) {
  var isUnix = props.toString().length === 13;
  var newValue = isUnix ? props : props * 1000;
  var newDate = new Date(newValue);
  var dates = newDate.getDate() > 9 ? newDate.getDate() : '0' + newDate.getDate();
  var months = newDate.getMonth() > 9 ? newDate.getMonth() : '0' + newDate.getMonth();
  return dates + "-" + months + "-" + newDate.getFullYear();
};

/***/ }),

/***/ "./components/functions/timestampToDateTime.js":
/*!*****************************************************!*\
  !*** ./components/functions/timestampToDateTime.js ***!
  \*****************************************************/
/*! exports provided: timestampToDateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestampToDateTime", function() { return timestampToDateTime; });
var timestampToDateTime = function timestampToDateTime(props, withDay) {
  var isUnix = props.toString().length === 13;
  var newValue = isUnix ? props : props * 1000;
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var newDate = new Date(newValue);
  var dates = newDate.getDate() > 9 ? newDate.getDate() : '0' + newDate.getDate();
  var months = newDate.getMonth() > 9 ? newDate.getMonth() : '0' + newDate.getMonth();
  var hours = newDate.getHours() > 9 ? newDate.getHours() : '0' + newDate.getHours();
  var minutes = newDate.getMinutes() > 9 ? newDate.getMinutes() : '0' + newDate.getMinutes();
  var data = (withDay ? days[newDate.getDay()] + ", " : "") + dates + "-" + months + "-" + newDate.getFullYear() + " " + hours + ":" + minutes;
  return data;
};

/***/ }),

/***/ "./components/tables.js":
/*!******************************!*\
  !*** ./components/tables.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _form_selectForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/selectForm */ "./components/form/selectForm.js");
/* harmony import */ var _form_inputForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/inputForm */ "./components/form/inputForm.js");
/* harmony import */ var react_excel_workbook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-excel-workbook */ "react-excel-workbook");
/* harmony import */ var react_excel_workbook__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_excel_workbook__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functions */ "./components/functions/index.js");



var _jsxFileName = "/home/tog-randy/Source/BCA/Project/components/tables.js";








/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var title = props.title,
      tHead = props.tHead,
      children = props.children,
      pagination = props.pagination,
      noResult = props.noResult,
      deepSearch = props.deepSearch,
      onFilterClick = props.onFilterClick,
      onKeySearch = props.onKeySearch,
      exportToFile = props.exportToFile,
      exportData = props.exportData,
      exportFileName = props.exportFileName,
      sortItems = props.sortItems,
      sortValue = props.sortValue,
      onSortClick = props.onSortClick,
      maxRangeDateFilter = props.maxRangeDateFilter;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Date()),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      startDate = _useState2[0],
      setStartDate = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Date(startDate)),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      endDate = _useState4[0],
      setEndDate = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    keywords: ""
  }),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      inputs = _useState6[0],
      setInputs = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    typeFile: undefined
  }),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      saveType = _useState8[0],
      setSaveType = _useState8[1];

  var saveTypeOption = [{
    id: 1,
    name: "EXCEL"
  }, {
    id: 2,
    name: "PDF"
  }];

  var handleExportSelect = function handleExportSelect(e) {
    e.persist();
    setSaveType(function () {
      return {
        typeFile: e.target.value
      };
    });
  };

  var handleSearchKeyword = function handleSearchKeyword(e) {
    e.persist();
    setInputs(function (inputs) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, inputs, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "bg-white rounded shadow-sm p-3 mb-3 overflow-visible",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, title ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h5", {
    className: "font-16 text-primary mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, title) : "", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, onKeySearch ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "12",
    md: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "d-flex justify-content-start w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_form_inputForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    containerClassName: "w-100",
    formClassName: "px-2 bg-white mb-0",
    formId: "yourFormFilterKeywords",
    formType: "text",
    formName: "keywords",
    formPlaceholder: "Search Keywords",
    formValue: inputs.keywords,
    formSize: "sm",
    onChange: handleSearchKeyword,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "sm",
    color: "primary",
    onClick: function onClick() {
      return onKeySearch(inputs.keywords);
    },
    className: "mb-3 ml-2 px-2 font-12 text-uppercase",
    style: {
      marginTop: "5px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Search"))) : "", deepSearch && onFilterClick ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "12",
    md: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "d-flex justify-content-start w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "mr-2 w-50",
    style: {
      paddingTop: "5px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
    selected: startDate,
    onChange: function onChange(date) {
      setStartDate(date);
      setEndDate(Object(_functions__WEBPACK_IMPORTED_MODULE_9__["addDays"])(new Date(date), maxRangeDateFilter));
    },
    selectsStart: true,
    startDate: startDate,
    endDate: endDate,
    dateFormat: "dd/MM/yyyy",
    className: "px-2 bg-white mb-0 form-control-sm form-control text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "mr-2 w-50",
    style: {
      paddingTop: "5px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
    selected: endDate,
    onChange: function onChange(date) {
      return setEndDate(date);
    },
    minDate: startDate,
    maxDate: Object(_functions__WEBPACK_IMPORTED_MODULE_9__["addDays"])(new Date(startDate), maxRangeDateFilter),
    selectsEnd: true,
    startDate: startDate,
    endDate: endDate,
    dateFormat: "dd/MM/yyyy",
    className: "px-2 bg-white mb-0 form-control-sm form-control text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "sm",
    color: "primary",
    onClick: function onClick() {
      return onFilterClick(startDate.getTime(), endDate.getTime());
    },
    className: "mb-3 px-2 font-12 text-uppercase",
    style: {
      marginTop: "5px",
      height: "31px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Filter"))) : "", exportToFile ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "12",
    md: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "d-flex justify-content-end w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "mr-2 text-left font-14",
    style: {
      paddingTop: "10px",
      minWidth: "60px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Save As :"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_form_selectForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    containerClassName: "w-100",
    formId: "yourExportToFile",
    formName: "ExportToFile",
    formSize: "sm",
    formPlaceholder: "Select Format",
    formOptionData: saveTypeOption,
    formValue: saveType.typeFile,
    onChange: handleExportSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), Number(saveType.typeFile) === 1 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_excel_workbook__WEBPACK_IMPORTED_MODULE_8___default.a, {
    filename: "".concat(exportFileName, ".xlsx"),
    element: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      size: "sm",
      color: "primary",
      className: "mb-3 ml-2 px-2 font-12 text-uppercase",
      style: {
        marginTop: "5px",
        height: "31px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "icon-arrow-down font-14",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_excel_workbook__WEBPACK_IMPORTED_MODULE_8___default.a.Sheet, {
    data: exportData,
    name: exportFileName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, sortItems.map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_excel_workbook__WEBPACK_IMPORTED_MODULE_8___default.a.Column, {
      key: key,
      label: item.name,
      value: item.name.toLowerCase().indexOf('date') > -1 ? function (row) {
        return Object(_functions__WEBPACK_IMPORTED_MODULE_9__["timestampToDateTime"])(row.date, false);
      } : item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    });
  }))) : Number(saveType.typeFile) === 2 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "this is pdf") : "")) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "12",
    md: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "12",
    md: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), sortItems && sortValue && onSortClick ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "12",
    md: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "d-flex justify-content-end w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "mr-2 text-left font-14",
    style: {
      paddingTop: "10px",
      minWidth: "60px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Sort By :"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_form_selectForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    containerClassName: "w-100",
    withLabel: false,
    formId: "yourFormSortBy",
    formName: "FormSortBy",
    formSize: "sm",
    formPlaceholder: "Sort By",
    formOptionData: sortItems,
    formValue: sortValue,
    onChange: onSortClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }))) : ""), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Table"], {
    size: "sm",
    responsive: props.isResponsive ? props.isResponsive : true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, tHead ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, tHead.map(function (data, key) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", {
      key: key,
      scope: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, data);
  }))) : "", noResult ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
    className: "pt-5 pb-2 text-center text-secondary",
    colSpan: tHead.length,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "No Result Found"))) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, children)), pagination ? pagination : "");
});

/***/ }),

/***/ "./components/types.js":
/*!*****************************!*\
  !*** ./components/types.js ***!
  \*****************************/
/*! exports provided: actionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
var actionTypes = {
  // Action Types List
  LIST_BANNER: "LIST_BANNER",
  LIST_CITY: "LIST_CITY",
  LIST_TRANSACTION: "LIST_TRANSACTION",
  TOTAL_TRANSACTION: "TOTAL_TRANSACTION",
  LINE_CHART: "LINE_CHART",
  GLOBAL_CHART: "GLOBAL_CHART",
  PIE_DOUBLE_CHART: "PIE_DOUBLE_CHART",
  TOTAL_SALES_TODAY: "TOTAL_SALES_TODAY",
  POINTS_COLLECTED_TODAY: "POINTS_COLLECTED_TODAY",
  ITEMS_SOLD_TODAY: "ITEMS_SOLD_TODAY",
  BRUSH_BAR_CHART: "BRUSH_BAR_CHART"
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/bankQuestion.js":
/*!*******************************!*\
  !*** ./pages/bankQuestion.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_tables__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/tables */ "./components/tables.js");
/* harmony import */ var _components_cards_PaginationCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/cards/PaginationCard */ "./components/cards/PaginationCard.js");
/* harmony import */ var _components_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/actions */ "./components/actions/index.js");
/* harmony import */ var _components_functions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/functions */ "./components/functions/index.js");









var _jsxFileName = "/home/tog-randy/Source/BCA/Project/pages/bankQuestion.js";









var Dashboard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Dashboard, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Dashboard, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var store, props, stores;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref.store;
                props = {
                  showHeader: true,
                  showFooter: true,
                  transanctionPage: 0,
                  transactionMaxLen: 10
                };
                _context.next = 4;
                return store.getState();

              case 4:
                stores = _context.sent;
                _context.prev = 5;

                if (stores.listTransaction) {
                  _context.next = 9;
                  break;
                }

                _context.next = 9;
                return store.dispatch(Object(_components_actions__WEBPACK_IMPORTED_MODULE_15__["getListTransaction"])(props.transanctionPage, props.transactionMaxLen));

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](5);
                props.error = 'Unable to fetch AsyncData on server';

              case 14:
                return _context.abrupt("return", props);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 11]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Dashboard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Dashboard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Dashboard).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onPaginationClick", function (page) {
      var _this$state = _this.state,
          transactionFetchLen = _this$state.transactionFetchLen,
          transactionDateFrom = _this$state.transactionDateFrom,
          transactionDateTo = _this$state.transactionDateTo,
          transactionSortBy = _this$state.transactionSortBy,
          transactionSearchKey = _this$state.transactionSearchKey;

      _this.props.getListTransaction(page, transactionFetchLen, transactionDateFrom, transactionDateTo, transactionSortBy, transactionSearchKey);

      _this.setState({
        transactionPage: page
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onFilterInit", function (dateFrom, dateTo) {
      var _this$state2 = _this.state,
          transactionFetchLen = _this$state2.transactionFetchLen,
          transactionSortBy = _this$state2.transactionSortBy,
          transactionSearchKey = _this$state2.transactionSearchKey;

      _this.props.getListTransaction(0, transactionFetchLen, dateFrom, dateTo, transactionSortBy, transactionSearchKey);

      _this.setState({
        transactionPage: 0,
        transactionDateFrom: dateFrom,
        transactionDateTo: dateTo
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSortInit", function (e) {
      var target = e.target,
          value = target.value;
      var _this$state3 = _this.state,
          transactionFetchLen = _this$state3.transactionFetchLen,
          transactionDateFrom = _this$state3.transactionDateFrom,
          transactionDateTo = _this$state3.transactionDateTo,
          transactionSearchKey = _this$state3.transactionSearchKey;

      _this.props.getListTransaction(0, transactionFetchLen, transactionDateFrom, transactionDateTo, value, transactionSearchKey);

      _this.setState({
        transactionPage: 0,
        transactionSortBy: value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSearchKeyword", function (keywords) {
      var _this$state4 = _this.state,
          transactionPage = _this$state4.transactionPage,
          transactionFetchLen = _this$state4.transactionFetchLen,
          transactionDateFrom = _this$state4.transactionDateFrom,
          transactionDateTo = _this$state4.transactionDateTo,
          transactionSortBy = _this$state4.transactionSortBy;

      _this.props.getListTransaction(transactionPage, transactionFetchLen, transactionDateFrom, transactionDateTo, transactionSortBy, keywords);

      _this.setState({
        transactionSearchKey: keywords
      });
    });

    _this.state = {
      title: props.companyName,
      subTitle: "Content Management System",
      showHeader: props.showHeader,
      headerHeight: props.headerHeight,
      navIsOpen: props.navIsOpen,
      navMaxWidth: props.showHeader ? props.navMaxWidth : "0px",
      navMinWidth: props.showHeader ? props.navMinWidth : "0px",
      transactionPage: props.transanctionPage,
      transactionFetchLen: props.transactionMaxLen,
      transactionDateFrom: undefined,
      transactionDateTo: undefined,
      transactionSortBy: "date",
      transactionSearchKey: "",
      listTransaction: props.listTransaction,
      totalTransaction: props.totalTransaction
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Dashboard, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState({
        navIsOpen: nextProps.navIsOpen,
        listTransaction: nextProps.listTransaction,
        totalTransaction: nextProps.totalTransaction,
        lineChart: nextProps.lineChart
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state5 = this.state,
          showHeader = _this$state5.showHeader,
          headerHeight = _this$state5.headerHeight,
          navIsOpen = _this$state5.navIsOpen,
          navMinWidth = _this$state5.navMinWidth,
          navMaxWidth = _this$state5.navMaxWidth,
          listTransaction = _this$state5.listTransaction,
          totalTransaction = _this$state5.totalTransaction,
          transactionPage = _this$state5.transactionPage,
          transactionFetchLen = _this$state5.transactionFetchLen,
          transactionSortBy = _this$state5.transactionSortBy;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        role: "main",
        className: "animate-all fast bg-light",
        style: {
          paddingTop: showHeader ? headerHeight : 0,
          paddingLeft: navMinWidth,
          overflowX: "hidden"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Container"], {
        fluid: true,
        className: "contentContainer px-4 pt-4 pb-2",
        style: {
          marginLeft: navIsOpen ? navMaxWidth - navMinWidth : 0,
          width: navIsOpen ? "calc(100% - ".concat(navMaxWidth - navMinWidth, "px)") : '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        xs: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_tables__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "Today's Item Sales",
        isResponsive: true,
        tHead: ["#", "Item Name", "QTY", "Item Price", "Total Price", "Buy Date"],
        sortItems: [{
          id: "name",
          name: "Item Name"
        }, {
          id: "qty",
          name: "Quantity"
        }, {
          id: "price",
          name: "Item Price"
        }, {
          id: "total",
          name: "Total Price"
        }, {
          id: "date",
          name: "Buy Date"
        }],
        onSortClick: this.onSortInit,
        sortValue: transactionSortBy,
        deepSearch: true,
        maxRangeDateFilter: 5,
        exportToFile: true,
        exportData: listTransaction,
        exportFileName: "Transaction".concat(new Date().getTime()),
        onFilterClick: this.onFilterInit,
        onKeySearch: this.onSearchKeyword,
        noResult: listTransaction.length === 0,
        pagination: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_cards_PaginationCard__WEBPACK_IMPORTED_MODULE_14__["default"], {
          ariaLabel: "Page navigation",
          size: "sm",
          totalContent: totalTransaction,
          currentPage: transactionPage,
          contentMaxLength: transactionFetchLen,
          onClick: this.onPaginationClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, listTransaction.map(function (data, key) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
          scope: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, key + 1 + transactionPage * transactionFetchLen), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, data.name), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, data.qty), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, Object(_components_functions__WEBPACK_IMPORTED_MODULE_16__["numberToCurrency"])(data.price, data.currency, false)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, Object(_components_functions__WEBPACK_IMPORTED_MODULE_16__["numberToCurrency"])(data.qty * data.price, data.currency, false)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, Object(_components_functions__WEBPACK_IMPORTED_MODULE_16__["timestampToDateTime"])(data.date, false)));
      }))))));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getListTransaction: Object(redux__WEBPACK_IMPORTED_MODULE_11__["bindActionCreators"])(_components_actions__WEBPACK_IMPORTED_MODULE_15__["getListTransaction"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(function (state) {
  return state;
}, mapDispatchToProps)(Dashboard));

/***/ }),

/***/ 3:
/*!*************************************!*\
  !*** multi ./pages/bankQuestion.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tog-randy/Source/BCA/Project/pages/bankQuestion.js */"./pages/bankQuestion.js");


/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "react-excel-workbook":
/*!***************************************!*\
  !*** external "react-excel-workbook" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-excel-workbook");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=bankQuestion.js.map