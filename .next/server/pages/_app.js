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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/locales/en/translation.json":
/*!********************************************!*\
  !*** ./public/locales/en/translation.json ***!
  \********************************************/
/*! exports provided: WELCOME_POKEDEX, GO_TO_POKEDEX, GO_TO_HOME, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"WELCOME_POKEDEX\":\"Welcome to Pokedex\",\"GO_TO_POKEDEX\":\"Go to Pokedex\",\"GO_TO_HOME\":\"Back to Home\"}");

/***/ }),

/***/ "./public/locales/pt/translation.json":
/*!********************************************!*\
  !*** ./public/locales/pt/translation.json ***!
  \********************************************/
/*! exports provided: WELCOME_POKEDEX, GO_TO_POKEDEX, GO_TO_HOME, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"WELCOME_POKEDEX\":\"Bem vindo a Pokedex\",\"GO_TO_POKEDEX\":\"Ir para a Pokedex\",\"GO_TO_HOME\":\"Ir para o Início\"}");

/***/ }),

/***/ "./src/context/themes/ThemeContext.tsx":
/*!*********************************************!*\
  !*** ./src/context/themes/ThemeContext.tsx ***!
  \*********************************************/
/*! exports provided: ThemeContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./src/styles/theme.ts");

var _jsxFileName = "E:\\estudos\\next\\nextjs-pokedex\\src\\context\\themes\\ThemeContext.tsx";


const ThemeContext = ({
  children
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
  theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__["customTheme"],
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["CSSReset"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), children]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/i18n.ts":
/*!*********************!*\
  !*** ./src/i18n.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "i18next");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_locales_en_translation_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/locales/en/translation.json */ "./public/locales/en/translation.json");
var _public_locales_en_translation_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/locales/en/translation.json */ "./public/locales/en/translation.json", 1);
/* harmony import */ var _public_locales_pt_translation_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/locales/pt/translation.json */ "./public/locales/pt/translation.json");
var _public_locales_pt_translation_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/locales/pt/translation.json */ "./public/locales/pt/translation.json", 1);



 // const router = useRouter()
// const { locale, defaultLocale } = router

const resources = {
  en: {
    translation: _public_locales_en_translation_json__WEBPACK_IMPORTED_MODULE_2__
  },
  pt: {
    translation: _public_locales_pt_translation_json__WEBPACK_IMPORTED_MODULE_3__
  }
};
i18next__WEBPACK_IMPORTED_MODULE_0___default.a.use(react_i18next__WEBPACK_IMPORTED_MODULE_1__["initReactI18next"]) // passes i18n down to react-i18next
.init({
  resources,
  lng: "pt",
  fallbackLng: "pt",
  keySeparator: false,
  // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false // react already safes from xss

  }
});
/* harmony default export */ __webpack_exports__["default"] = (i18next__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../i18n */ "./src/i18n.ts");
/* harmony import */ var _context_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/themes/ThemeContext */ "./src/context/themes/ThemeContext.tsx");

var _jsxFileName = "E:\\estudos\\next\\nextjs-pokedex\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/*! exports provided: customTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customTheme", function() { return customTheme; });
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__);
 // const customTheme: DefaultTheme = {
//   ...theme,
// }

const customTheme = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["extendTheme"])({
  colors: {
    pokemons: {
      red: {
        basic: "#FF0000",
        strong: "#CC0000"
      },
      blue: {
        basic: "#3B4CCA",
        strong: "#3b4c55"
      },
      yellow: {
        basic: "#FFDE00",
        strong: "#B3A125"
      }
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "semi-bold",
        fontFamily: "Lilita One"
      },
      variants: {
        "blue-with-shadow": {
          bg: "#3b4cca",
          boxShadow: "-3px 3px 0px #3b4c55",
          borderWidth: "2px",
          borderColor: "#3b4c55",
          color: "#e1e1e1",
          _hover: {
            bg: "#3b4caa"
          },
          _focus: {
            boxShadow: "-3px 3px 0px #3b4c55"
          }
        }
      }
    },
    Heading: {
      baseStyle: {
        fontFamily: "Luckiest Guy"
      },
      variants: {
        "red-with-shadow": {
          letterSpacing: " 3px",
          textShadow: "-3px 3px 0px #880000",
          color: "#ff0000"
        }
      }
    },
    RotatablePokeball: {
      baseStyle: {
        _hover: {
          transform: "rotate(-30deg)"
        }
      }
    }
  }
});


/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/core");

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHQvdGhlbWVzL1RoZW1lQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2kxOG4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJUaGVtZUNvbnRleHQiLCJjaGlsZHJlbiIsImN1c3RvbVRoZW1lIiwicmVzb3VyY2VzIiwiZW4iLCJ0cmFuc2xhdGlvbiIsInRyYW5zbGF0aW9uRU4iLCJwdCIsInRyYW5zbGF0aW9uUFQiLCJpMThuIiwidXNlIiwiaW5pdFJlYWN0STE4bmV4dCIsImluaXQiLCJsbmciLCJmYWxsYmFja0xuZyIsImtleVNlcGFyYXRvciIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZXh0ZW5kVGhlbWUiLCJjb2xvcnMiLCJwb2tlbW9ucyIsInJlZCIsImJhc2ljIiwic3Ryb25nIiwiYmx1ZSIsInllbGxvdyIsImNvbXBvbmVudHMiLCJCdXR0b24iLCJiYXNlU3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsInZhcmlhbnRzIiwiYmciLCJib3hTaGFkb3ciLCJib3JkZXJXaWR0aCIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJfaG92ZXIiLCJfZm9jdXMiLCJIZWFkaW5nIiwibGV0dGVyU3BhY2luZyIsInRleHRTaGFkb3ciLCJSb3RhdGFibGVQb2tlYmFsbCIsInRyYW5z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QUU7QUFGSCxPQURMO0FBS05DLGNBQVEsRUFBRTtBQUNSLDRCQUFvQjtBQUNsQkMsWUFBRSxFQUFFLFNBRGM7QUFFbEJDLG1CQUFTLEVBQUUsc0JBRk87QUFHbEJDLHFCQUFXLEVBQUUsS0FISztBQUlsQkMscUJBQVcsRUFBRSxTQUpLO0FBS2xCQyxlQUFLLEVBQUUsU0FMVztBQU1sQkMsZ0JBQU0sRUFBRTtBQUNOTCxjQUFFLEVBQUU7QUFERSxXQU5VO0FBU2xCTSxnQkFBTSxFQUFFO0FBQ05MLHFCQUFTLEVBQUU7QUFETDtBQVRVO0FBRFo7QUFMSixLQURFO0FBc0JWTSxXQUFPLEVBQUU7QUFDUFgsZUFBUyxFQUFFO0FBQ1RFLGtCQUFVLEVBQUU7QUFESCxPQURKO0FBSVBDLGNBQVEsRUFBRTtBQUNSLDJCQUFtQjtBQUNqQlMsdUJBQWEsRUFBRSxNQURFO0FBRWpCQyxvQkFBVSxFQUFFLHNCQUZLO0FBR2pCTCxlQUFLLEVBQUU7QUFIVTtBQURYO0FBSkgsS0F0QkM7QUFrQ1ZNLHFCQUFpQixFQUFFO0FBQ2pCZCxlQUFTLEVBQUU7QUFDVFMsY0FBTSxFQUFFO0FBQ05NLG1CQUFTLEVBQUU7QUFETDtBQURDO0FBRE07QUFsQ1Q7QUFsQmtCLENBQUQsQ0FBL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLDRDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQge1xyXG4gIENvbG9yTW9kZVByb3ZpZGVyLFxyXG4gIENTU1Jlc2V0LFxyXG4gIFRoZW1lUHJvdmlkZXIgYXMgQ2hha3JhVGhlbWVQcm92aWRlcixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCJcclxuaW1wb3J0IHsgY3VzdG9tVGhlbWUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCJcclxuXHJcbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQ6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxDaGFrcmFUaGVtZVByb3ZpZGVyIHRoZW1lPXtjdXN0b21UaGVtZX0+XHJcbiAgICA8Q1NTUmVzZXQgLz5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L0NoYWtyYVRoZW1lUHJvdmlkZXI+XHJcbilcclxuIiwiaW1wb3J0IGkxOG4gZnJvbSBcImkxOG5leHRcIlxyXG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIlxyXG5cclxuaW1wb3J0IHRyYW5zbGF0aW9uRU4gZnJvbSBcIi4uL3B1YmxpYy9sb2NhbGVzL2VuL3RyYW5zbGF0aW9uLmpzb25cIlxyXG5pbXBvcnQgdHJhbnNsYXRpb25QVCBmcm9tIFwiLi4vcHVibGljL2xvY2FsZXMvcHQvdHJhbnNsYXRpb24uanNvblwiXHJcblxyXG4vLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4vLyBjb25zdCB7IGxvY2FsZSwgZGVmYXVsdExvY2FsZSB9ID0gcm91dGVyXHJcblxyXG5jb25zdCByZXNvdXJjZXMgPSB7XHJcbiAgZW46IHtcclxuICAgIHRyYW5zbGF0aW9uOiB0cmFuc2xhdGlvbkVOLFxyXG4gIH0sXHJcbiAgcHQ6IHtcclxuICAgIHRyYW5zbGF0aW9uOiB0cmFuc2xhdGlvblBULFxyXG4gIH0sXHJcbn1cclxuXHJcbmkxOG5cclxuICAudXNlKGluaXRSZWFjdEkxOG5leHQpIC8vIHBhc3NlcyBpMThuIGRvd24gdG8gcmVhY3QtaTE4bmV4dFxyXG4gIC5pbml0KHtcclxuICAgIHJlc291cmNlcyxcclxuICAgIGxuZzogXCJwdFwiLFxyXG4gICAgZmFsbGJhY2tMbmc6IFwicHRcIixcclxuXHJcbiAgICBrZXlTZXBhcmF0b3I6IGZhbHNlLCAvLyB3ZSBkbyBub3QgdXNlIGtleXMgaW4gZm9ybSBtZXNzYWdlcy53ZWxjb21lXHJcblxyXG4gICAgaW50ZXJwb2xhdGlvbjoge1xyXG4gICAgICBlc2NhcGVWYWx1ZTogZmFsc2UsIC8vIHJlYWN0IGFscmVhZHkgc2FmZXMgZnJvbSB4c3NcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGkxOG5cclxuIiwiaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXMvZ2xvYmFsXCJcclxuaW1wb3J0IFwiLi4vaTE4blwiXHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L3RoZW1lcy9UaGVtZUNvbnRleHRcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZUNvbnRleHQ+XHJcbiAgICAgIHsvKiA8R2xvYmFsU3R5bGUgLz4gKi99XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvVGhlbWVDb250ZXh0PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgeyB0aGVtZSwgRGVmYXVsdFRoZW1lLCBleHRlbmRUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIlxyXG5cclxuLy8gY29uc3QgY3VzdG9tVGhlbWU6IERlZmF1bHRUaGVtZSA9IHtcclxuLy8gICAuLi50aGVtZSxcclxuLy8gfVxyXG5cclxuY29uc3QgY3VzdG9tVGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcbiAgY29sb3JzOiB7XHJcbiAgICBwb2tlbW9uczoge1xyXG4gICAgICByZWQ6IHtcclxuICAgICAgICBiYXNpYzogXCIjRkYwMDAwXCIsXHJcbiAgICAgICAgc3Ryb25nOiBcIiNDQzAwMDBcIixcclxuICAgICAgfSxcclxuICAgICAgYmx1ZToge1xyXG4gICAgICAgIGJhc2ljOiBcIiMzQjRDQ0FcIixcclxuICAgICAgICBzdHJvbmc6IFwiIzNiNGM1NVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB5ZWxsb3c6IHtcclxuICAgICAgICBiYXNpYzogXCIjRkZERTAwXCIsXHJcbiAgICAgICAgc3Ryb25nOiBcIiNCM0ExMjVcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgQnV0dG9uOiB7XHJcbiAgICAgIGJhc2VTdHlsZToge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwic2VtaS1ib2xkXCIsXHJcbiAgICAgICAgZm9udEZhbWlseTogXCJMaWxpdGEgT25lXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgXCJibHVlLXdpdGgtc2hhZG93XCI6IHtcclxuICAgICAgICAgIGJnOiBcIiMzYjRjY2FcIixcclxuICAgICAgICAgIGJveFNoYWRvdzogXCItM3B4IDNweCAwcHggIzNiNGM1NVwiLFxyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IFwiMnB4XCIsXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogXCIjM2I0YzU1XCIsXHJcbiAgICAgICAgICBjb2xvcjogXCIjZTFlMWUxXCIsXHJcbiAgICAgICAgICBfaG92ZXI6IHtcclxuICAgICAgICAgICAgYmc6IFwiIzNiNGNhYVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIF9mb2N1czoge1xyXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwiLTNweCAzcHggMHB4ICMzYjRjNTVcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBIZWFkaW5nOiB7XHJcbiAgICAgIGJhc2VTdHlsZToge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiTHVja2llc3QgR3V5XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgXCJyZWQtd2l0aC1zaGFkb3dcIjoge1xyXG4gICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIgM3B4XCIsXHJcbiAgICAgICAgICB0ZXh0U2hhZG93OiBcIi0zcHggM3B4IDBweCAjODgwMDAwXCIsXHJcbiAgICAgICAgICBjb2xvcjogXCIjZmYwMDAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBSb3RhdGFibGVQb2tlYmFsbDoge1xyXG4gICAgICBiYXNlU3R5bGU6IHtcclxuICAgICAgICBfaG92ZXI6IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoLTMwZGVnKVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgeyBjdXN0b21UaGVtZSB9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=