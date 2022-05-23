(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/other/print.vue?vue&type=script&lang=ts&setup=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/other/print.vue?vue&type=script&lang=ts&setup=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! print-js */ "./node_modules/print-js/dist/print.js");
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks */ "./src/hooks/index.ts");





/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["defineComponent"])({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();

    var _useDataTable = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useDataTable"])(),
        tableConfig = _useDataTable.tableConfig;

    var dataList = Object(vue__WEBPACK_IMPORTED_MODULE_0__["shallowReactive"])([{
      name: "张三",
      age: 10,
      gender: "男"
    }, {
      name: "李四",
      age: 40,
      gender: "男"
    }, {
      name: "王五",
      age: 30,
      gender: "女"
    }]);

    function printImage() {
      print_js__WEBPACK_IMPORTED_MODULE_1___default()({
        printable: _assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        type: "image",
        showModal: false
      });
    }

    function printHtml() {
      print_js__WEBPACK_IMPORTED_MODULE_1___default()({
        printable: "htmlWrapper",
        type: "html",
        targetStyles: ["*"]
      });
    }

    var __returned__ = {
      tableConfig: tableConfig,
      dataList: dataList,
      printImage: printImage,
      printHtml: printHtml,
      imagePath: _assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/other/print.vue?vue&type=template&id=434ca3c4&scoped=true&ts=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/other/print.vue?vue&type=template&id=434ca3c4&scoped=true&ts=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-434ca3c4"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n;
};

var _hoisted_1 = {
  class: "main-container"
};
var _hoisted_2 = {
  class: "flex justify-between"
};

var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
    underline: false
  }, "打印图片", -1
  /* HOISTED */
  );
});

var _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])("打印");

var _hoisted_5 = {
  class: "image-wrapper"
};
var _hoisted_6 = ["src"];
var _hoisted_7 = {
  class: "flex justify-between"
};

var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
    underline: false
  }, "打印HTML", -1
  /* HOISTED */
  );
});

var _hoisted_9 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])("打印");

var _hoisted_10 = {
  id: "htmlWrapper",
  class: "html-wrapper flex justify-center align-center flex-direction"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("el-button");

  var _component_el_card = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("el-card");

  var _component_el_table_column = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("el-table-column");

  var _component_el_table = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("el-table");

  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_el_card, {
    "body-style": {
      padding: '0px'
    }
  }, {
    header: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [_hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_el_button, {
        type: "primary",
        size: "small",
        onClick: $setup.printImage
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(function () {
          return [_hoisted_4];
        }),
        _: 1
        /* STABLE */

      })])];
    }),
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
        src: $setup.imagePath
      }, null, 8
      /* PROPS */
      , _hoisted_6)])];
    }),
    _: 1
    /* STABLE */

  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_el_card, {
    "body-style": {
      padding: '5px'
    },
    class: "margin-top-xs"
  }, {
    header: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_7, [_hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_el_button, {
        type: "primary",
        size: "small",
        onClick: $setup.printHtml
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(function () {
          return [_hoisted_9];
        }),
        _: 1
        /* STABLE */

      })])];
    }),
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_10, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_el_table, {
        data: $setup.dataList,
        "header-cell-style": $setup.tableConfig.headerCellStyle,
        size: $setup.tableConfig.size,
        stripe: $setup.tableConfig.stripe,
        border: $setup.tableConfig.border
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(function () {
          return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_el_table_column, {
            align: "center",
            label: "姓名",
            prop: "name"
          }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_el_table_column, {
            align: "center",
            label: "年龄",
            prop: "age"
          }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_el_table_column, {
            align: "center",
            label: "性别",
            prop: "gender"
          })];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["data", "header-cell-style", "size", "stripe", "border"])])];
    }),
    _: 1
    /* STABLE */

  })]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/other/print.vue?vue&type=style&index=0&id=434ca3c4&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/other/print.vue?vue&type=style&index=0&id=434ca3c4&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".image-wrapper[data-v-434ca3c4] {\n  width: 30%;\n  margin: 0 auto;\n}\n.image-wrapper > img[data-v-434ca3c4] {\n  width: 100%;\n}\n.html-wrapper[data-v-434ca3c4] {\n  width: 80%;\n  margin: 0 auto;\n}\n.html-wrapper > h1[data-v-434ca3c4] {\n  color: red;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/print-js/dist/print.js":
/*!*********************************************!*\
  !*** ./node_modules/print-js/dist/print.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index.scss */ "./src/sass/index.scss");
/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/init */ "./src/js/init.js");


var printJS = _js_init__WEBPACK_IMPORTED_MODULE_1__["default"].init;

if (typeof window !== 'undefined') {
  window.printJS = printJS;
}

/* harmony default export */ __webpack_exports__["default"] = (printJS);

/***/ }),

/***/ "./src/js/browser.js":
/*!***************************!*\
  !*** ./src/js/browser.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Browser = {
  // Firefox 1.0+
  isFirefox: function isFirefox() {
    return typeof InstallTrigger !== 'undefined';
  },
  // Internet Explorer 6-11
  isIE: function isIE() {
    return navigator.userAgent.indexOf('MSIE') !== -1 || !!document.documentMode;
  },
  // Edge 20+
  isEdge: function isEdge() {
    return !Browser.isIE() && !!window.StyleMedia;
  },
  // Chrome 1+
  isChrome: function isChrome() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    return !!context.chrome;
  },
  // At least Safari 3+: "[object HTMLElementConstructor]"
  isSafari: function isSafari() {
    return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || navigator.userAgent.toLowerCase().indexOf('safari') !== -1;
  },
  // IOS Chrome
  isIOSChrome: function isIOSChrome() {
    return navigator.userAgent.toLowerCase().indexOf('crios') !== -1;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Browser);

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/*! exports provided: addWrapper, capitalizePrint, collectStyles, addHeader, cleanUp, isRawHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWrapper", function() { return addWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizePrint", function() { return capitalizePrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectStyles", function() { return collectStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHeader", function() { return addHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanUp", function() { return cleanUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRawHTML", function() { return isRawHTML; });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./src/js/browser.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function addWrapper(htmlData, params) {
  var bodyStyle = 'font-family:' + params.font + ' !important; font-size: ' + params.font_size + ' !important; width:100%;';
  return '<div style="' + bodyStyle + '">' + htmlData + '</div>';
}
function capitalizePrint(obj) {
  return obj.charAt(0).toUpperCase() + obj.slice(1);
}
function collectStyles(element, params) {
  var win = document.defaultView || window; // String variable to hold styling for each element

  var elementStyle = ''; // Loop over computed styles

  var styles = win.getComputedStyle(element, '');

  for (var key = 0; key < styles.length; key++) {
    // Check if style should be processed
    if (params.targetStyles.indexOf('*') !== -1 || params.targetStyle.indexOf(styles[key]) !== -1 || targetStylesMatch(params.targetStyles, styles[key])) {
      if (styles.getPropertyValue(styles[key])) elementStyle += styles[key] + ':' + styles.getPropertyValue(styles[key]) + ';';
    }
  } // Print friendly defaults (deprecated)


  elementStyle += 'max-width: ' + params.maxWidth + 'px !important; font-size: ' + params.font_size + ' !important;';
  return elementStyle;
}

function targetStylesMatch(styles, value) {
  for (var i = 0; i < styles.length; i++) {
    if (_typeof(value) === 'object' && value.indexOf(styles[i]) !== -1) return true;
  }

  return false;
}

function addHeader(printElement, params) {
  // Create the header container div
  var headerContainer = document.createElement('div'); // Check if the header is text or raw html

  if (isRawHTML(params.header)) {
    headerContainer.innerHTML = params.header;
  } else {
    // Create header element
    var headerElement = document.createElement('h1'); // Create header text node

    var headerNode = document.createTextNode(params.header); // Build and style

    headerElement.appendChild(headerNode);
    headerElement.setAttribute('style', params.headerStyle);
    headerContainer.appendChild(headerElement);
  }

  printElement.insertBefore(headerContainer, printElement.childNodes[0]);
}
function cleanUp(params) {
  // If we are showing a feedback message to user, remove it
  if (params.showModal) _modal__WEBPACK_IMPORTED_MODULE_0__["default"].close(); // Check for a finished loading hook function

  if (params.onLoadingEnd) params.onLoadingEnd(); // If preloading pdf files, clean blob url

  if (params.showModal || params.onLoadingStart) window.URL.revokeObjectURL(params.printable); // Run onPrintDialogClose callback

  var event = 'mouseover';

  if (_browser__WEBPACK_IMPORTED_MODULE_1__["default"].isChrome() || _browser__WEBPACK_IMPORTED_MODULE_1__["default"].isFirefox()) {
    // Ps.: Firefox will require an extra click in the document to fire the focus event.
    event = 'focus';
  }

  var handler = function handler() {
    // Make sure the event only happens once.
    window.removeEventListener(event, handler);
    params.onPrintDialogClose(); // Remove iframe from the DOM

    var iframe = document.getElementById(params.frameId);

    if (iframe) {
      iframe.remove();
    }
  };

  window.addEventListener(event, handler);
}
function isRawHTML(raw) {
  var regexHtml = new RegExp('<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>');
  return regexHtml.test(raw);
}

/***/ }),

/***/ "./src/js/html.js":
/*!************************!*\
  !*** ./src/js/html.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/js/print.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/* harmony default export */ __webpack_exports__["default"] = ({
  print: function print(params, printFrame) {
    // Get the DOM printable element
    var printElement = isHtmlElement(params.printable) ? params.printable : document.getElementById(params.printable); // Check if the element exists

    if (!printElement) {
      window.console.error('Invalid HTML element id: ' + params.printable);
      return;
    } // Clone the target element including its children (if available)


    params.printableElement = cloneElement(printElement, params); // Add header

    if (params.header) {
      Object(_functions__WEBPACK_IMPORTED_MODULE_0__["addHeader"])(params.printableElement, params);
    } // Print html element contents


    _print__WEBPACK_IMPORTED_MODULE_1__["default"].send(params, printFrame);
  }
});

function cloneElement(element, params) {
  // Clone the main node (if not already inside the recursion process)
  var clone = element.cloneNode(); // Loop over and process the children elements / nodes (including text nodes)

  var childNodesArray = Array.prototype.slice.call(element.childNodes);

  for (var i = 0; i < childNodesArray.length; i++) {
    // Check if we are skipping the current element
    if (params.ignoreElements.indexOf(childNodesArray[i].id) !== -1) {
      continue;
    } // Clone the child element


    var clonedChild = cloneElement(childNodesArray[i], params); // Attach the cloned child to the cloned parent node

    clone.appendChild(clonedChild);
  } // Get all styling for print element (for nodes of type element only)


  if (params.scanStyles && element.nodeType === 1) {
    clone.setAttribute('style', Object(_functions__WEBPACK_IMPORTED_MODULE_0__["collectStyles"])(element, params));
  } // Check if the element needs any state processing (copy user input data)


  switch (element.tagName) {
    case 'SELECT':
      // Copy the current selection value to its clone
      clone.value = element.value;
      break;

    case 'CANVAS':
      // Copy the canvas content to its clone
      clone.getContext('2d').drawImage(element, 0, 0);
      break;
  }

  return clone;
}

function isHtmlElement(printable) {
  // Check if element is instance of HTMLElement or has nodeType === 1 (for elements in iframe)
  return _typeof(printable) === 'object' && printable && (printable instanceof HTMLElement || printable.nodeType === 1);
}

/***/ }),

/***/ "./src/js/image.js":
/*!*************************!*\
  !*** ./src/js/image.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/js/print.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser */ "./src/js/browser.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  print: function print(params, printFrame) {
    // Check if we are printing one image or multiple images
    if (params.printable.constructor !== Array) {
      // Create array with one image
      params.printable = [params.printable];
    } // Create printable element (container)


    params.printableElement = document.createElement('div'); // Create all image elements and append them to the printable container

    params.printable.forEach(function (src) {
      // Create the image element
      var img = document.createElement('img');
      img.setAttribute('style', params.imageStyle); // Set image src with the file url

      img.src = src; // The following block is for Firefox, which for some reason requires the image's src to be fully qualified in
      // order to print it

      if (_browser__WEBPACK_IMPORTED_MODULE_2__["default"].isFirefox()) {
        var fullyQualifiedSrc = img.src;
        img.src = fullyQualifiedSrc;
      } // Create the image wrapper


      var imageWrapper = document.createElement('div'); // Append image to the wrapper element

      imageWrapper.appendChild(img); // Append wrapper to the printable element

      params.printableElement.appendChild(imageWrapper);
    }); // Check if we are adding a print header

    if (params.header) Object(_functions__WEBPACK_IMPORTED_MODULE_0__["addHeader"])(params.printableElement, params); // Print image

    _print__WEBPACK_IMPORTED_MODULE_1__["default"].send(params, printFrame);
  }
});

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser */ "./src/js/browser.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");
/* harmony import */ var _pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdf */ "./src/js/pdf.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html */ "./src/js/html.js");
/* harmony import */ var _raw_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./raw-html */ "./src/js/raw-html.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image */ "./src/js/image.js");
/* harmony import */ var _json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./json */ "./src/js/json.js");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








var printTypes = ['pdf', 'html', 'image', 'json', 'raw-html'];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    var params = {
      printable: null,
      fallbackPrintable: null,
      type: 'pdf',
      header: null,
      headerStyle: 'font-weight: 300;',
      maxWidth: 800,
      properties: null,
      gridHeaderStyle: 'font-weight: bold; padding: 5px; border: 1px solid #dddddd;',
      gridStyle: 'border: 1px solid lightgray; margin-bottom: -1px;',
      showModal: false,
      onError: function onError(error) {
        throw error;
      },
      onLoadingStart: null,
      onLoadingEnd: null,
      onPrintDialogClose: function onPrintDialogClose() {},
      onIncompatibleBrowser: function onIncompatibleBrowser() {},
      modalMessage: 'Retrieving Document...',
      frameId: 'printJS',
      printableElement: null,
      documentTitle: 'Document',
      targetStyle: ['clear', 'display', 'width', 'min-width', 'height', 'min-height', 'max-height'],
      targetStyles: ['border', 'box', 'break', 'text-decoration'],
      ignoreElements: [],
      repeatTableHeader: true,
      css: null,
      style: null,
      scanStyles: true,
      base64: false,
      // Deprecated
      onPdfOpen: null,
      font: 'TimesNewRoman',
      font_size: '12pt',
      honorMarginPadding: true,
      honorColor: false,
      imageStyle: 'max-width: 100%;'
    }; // Check if a printable document or object was supplied

    var args = arguments[0];

    if (args === undefined) {
      throw new Error('printJS expects at least 1 attribute.');
    } // Process parameters


    switch (_typeof(args)) {
      case 'string':
        params.printable = encodeURI(args);
        params.fallbackPrintable = params.printable;
        params.type = arguments[1] || params.type;
        break;

      case 'object':
        params.printable = args.printable;
        params.fallbackPrintable = typeof args.fallbackPrintable !== 'undefined' ? args.fallbackPrintable : params.printable;
        params.fallbackPrintable = params.base64 ? "data:application/pdf;base64,".concat(params.fallbackPrintable) : params.fallbackPrintable;

        for (var k in params) {
          if (k === 'printable' || k === 'fallbackPrintable') continue;
          params[k] = typeof args[k] !== 'undefined' ? args[k] : params[k];
        }

        break;

      default:
        throw new Error('Unexpected argument type! Expected "string" or "object", got ' + _typeof(args));
    } // Validate printable


    if (!params.printable) throw new Error('Missing printable information.'); // Validate type

    if (!params.type || typeof params.type !== 'string' || printTypes.indexOf(params.type.toLowerCase()) === -1) {
      throw new Error('Invalid print type. Available types are: pdf, html, image and json.');
    } // Check if we are showing a feedback message to the user (useful for large files)


    if (params.showModal) _modal__WEBPACK_IMPORTED_MODULE_1__["default"].show(params); // Check for a print start hook function

    if (params.onLoadingStart) params.onLoadingStart(); // To prevent duplication and issues, remove any used printFrame from the DOM

    var usedFrame = document.getElementById(params.frameId);
    if (usedFrame) usedFrame.parentNode.removeChild(usedFrame); // Create a new iframe for the print job

    var printFrame = document.createElement('iframe');

    if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isFirefox()) {
      // Set the iframe to be is visible on the page (guaranteed by fixed position) but hidden using opacity 0, because
      // this works in Firefox. The height needs to be sufficient for some part of the document other than the PDF
      // viewer's toolbar to be visible in the page
      printFrame.setAttribute('style', 'width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0');
    } else {
      // Hide the iframe in other browsers
      printFrame.setAttribute('style', 'visibility: hidden; height: 0; width: 0; position: absolute; border: 0');
    } // Set iframe element id


    printFrame.setAttribute('id', params.frameId); // For non pdf printing, pass an html document string to srcdoc (force onload callback)

    if (params.type !== 'pdf') {
      printFrame.srcdoc = '<html><head><title>' + params.documentTitle + '</title>'; // Attach css files

      if (params.css) {
        // Add support for single file
        if (!Array.isArray(params.css)) params.css = [params.css]; // Create link tags for each css file

        params.css.forEach(function (file) {
          printFrame.srcdoc += '<link rel="stylesheet" href="' + file + '">';
        });
      }

      printFrame.srcdoc += '</head><body></body></html>';
    } // Check printable type


    switch (params.type) {
      case 'pdf':
        // Check browser support for pdf and if not supported we will just open the pdf file instead
        if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isIE()) {
          try {
            console.info('Print.js doesn\'t support PDF printing in Internet Explorer.');
            var win = window.open(params.fallbackPrintable, '_blank');
            win.focus();
            params.onIncompatibleBrowser();
          } catch (error) {
            params.onError(error);
          } finally {
            // Make sure there is no loading modal opened
            if (params.showModal) _modal__WEBPACK_IMPORTED_MODULE_1__["default"].close();
            if (params.onLoadingEnd) params.onLoadingEnd();
          }
        } else {
          _pdf__WEBPACK_IMPORTED_MODULE_2__["default"].print(params, printFrame);
        }

        break;

      case 'image':
        _image__WEBPACK_IMPORTED_MODULE_5__["default"].print(params, printFrame);
        break;

      case 'html':
        _html__WEBPACK_IMPORTED_MODULE_3__["default"].print(params, printFrame);
        break;

      case 'raw-html':
        _raw_html__WEBPACK_IMPORTED_MODULE_4__["default"].print(params, printFrame);
        break;

      case 'json':
        _json__WEBPACK_IMPORTED_MODULE_6__["default"].print(params, printFrame);
        break;
    }
  }
});

/***/ }),

/***/ "./src/js/json.js":
/*!************************!*\
  !*** ./src/js/json.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/js/print.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/* harmony default export */ __webpack_exports__["default"] = ({
  print: function print(params, printFrame) {
    // Check if we received proper data
    if (_typeof(params.printable) !== 'object') {
      throw new Error('Invalid javascript data object (JSON).');
    } // Validate repeatTableHeader


    if (typeof params.repeatTableHeader !== 'boolean') {
      throw new Error('Invalid value for repeatTableHeader attribute (JSON).');
    } // Validate properties


    if (!params.properties || !Array.isArray(params.properties)) {
      throw new Error('Invalid properties array for your JSON data.');
    } // We will format the property objects to keep the JSON api compatible with older releases


    params.properties = params.properties.map(function (property) {
      return {
        field: _typeof(property) === 'object' ? property.field : property,
        displayName: _typeof(property) === 'object' ? property.displayName : property,
        columnSize: _typeof(property) === 'object' && property.columnSize ? property.columnSize + ';' : 100 / params.properties.length + '%;'
      };
    }); // Create a print container element

    params.printableElement = document.createElement('div'); // Check if we are adding a print header

    if (params.header) {
      Object(_functions__WEBPACK_IMPORTED_MODULE_0__["addHeader"])(params.printableElement, params);
    } // Build the printable html data


    params.printableElement.innerHTML += jsonToHTML(params); // Print the json data

    _print__WEBPACK_IMPORTED_MODULE_1__["default"].send(params, printFrame);
  }
});

function jsonToHTML(params) {
  // Get the row and column data
  var data = params.printable;
  var properties = params.properties; // Create a html table

  var htmlData = '<table style="border-collapse: collapse; width: 100%;">'; // Check if the header should be repeated

  if (params.repeatTableHeader) {
    htmlData += '<thead>';
  } // Add the table header row


  htmlData += '<tr>'; // Add the table header columns

  for (var a = 0; a < properties.length; a++) {
    htmlData += '<th style="width:' + properties[a].columnSize + ';' + params.gridHeaderStyle + '">' + Object(_functions__WEBPACK_IMPORTED_MODULE_0__["capitalizePrint"])(properties[a].displayName) + '</th>';
  } // Add the closing tag for the table header row


  htmlData += '</tr>'; // If the table header is marked as repeated, add the closing tag

  if (params.repeatTableHeader) {
    htmlData += '</thead>';
  } // Create the table body


  htmlData += '<tbody>'; // Add the table data rows

  for (var i = 0; i < data.length; i++) {
    // Add the row starting tag
    htmlData += '<tr>'; // Print selected properties only

    for (var n = 0; n < properties.length; n++) {
      var stringData = data[i]; // Support nested objects

      var property = properties[n].field.split('.');

      if (property.length > 1) {
        for (var p = 0; p < property.length; p++) {
          stringData = stringData[property[p]];
        }
      } else {
        stringData = stringData[properties[n].field];
      } // Add the row contents and styles


      htmlData += '<td style="width:' + properties[n].columnSize + params.gridStyle + '">' + stringData + '</td>';
    } // Add the row closing tag


    htmlData += '</tr>';
  } // Add the table and body closing tags


  htmlData += '</tbody></table>';
  return htmlData;
}

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Modal = {
  show: function show(params) {
    // Build modal
    var modalStyle = 'font-family:sans-serif; ' + 'display:table; ' + 'text-align:center; ' + 'font-weight:300; ' + 'font-size:30px; ' + 'left:0; top:0;' + 'position:fixed; ' + 'z-index: 9990;' + 'color: #0460B5; ' + 'width: 100%; ' + 'height: 100%; ' + 'background-color:rgba(255,255,255,.9);' + 'transition: opacity .3s ease;'; // Create wrapper

    var printModal = document.createElement('div');
    printModal.setAttribute('style', modalStyle);
    printModal.setAttribute('id', 'printJS-Modal'); // Create content div

    var contentDiv = document.createElement('div');
    contentDiv.setAttribute('style', 'display:table-cell; vertical-align:middle; padding-bottom:100px;'); // Add close button (requires print.css)

    var closeButton = document.createElement('div');
    closeButton.setAttribute('class', 'printClose');
    closeButton.setAttribute('id', 'printClose');
    contentDiv.appendChild(closeButton); // Add spinner (requires print.css)

    var spinner = document.createElement('span');
    spinner.setAttribute('class', 'printSpinner');
    contentDiv.appendChild(spinner); // Add message

    var messageNode = document.createTextNode(params.modalMessage);
    contentDiv.appendChild(messageNode); // Add contentDiv to printModal

    printModal.appendChild(contentDiv); // Append print modal element to document body

    document.getElementsByTagName('body')[0].appendChild(printModal); // Add event listener to close button

    document.getElementById('printClose').addEventListener('click', function () {
      Modal.close();
    });
  },
  close: function close() {
    var printModal = document.getElementById('printJS-Modal');

    if (printModal) {
      printModal.parentNode.removeChild(printModal);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/js/pdf.js":
/*!***********************!*\
  !*** ./src/js/pdf.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ "./src/js/print.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  print: function print(params, printFrame) {
    // Check if we have base64 data
    if (params.base64) {
      var bytesArray = Uint8Array.from(atob(params.printable), function (c) {
        return c.charCodeAt(0);
      });
      createBlobAndPrint(params, printFrame, bytesArray);
      return;
    } // Format pdf url


    params.printable = /^(blob|http|\/\/)/i.test(params.printable) ? params.printable : window.location.origin + (params.printable.charAt(0) !== '/' ? '/' + params.printable : params.printable); // Get the file through a http request (Preload)

    var req = new window.XMLHttpRequest();
    req.responseType = 'arraybuffer';
    req.addEventListener('error', function () {
      Object(_functions__WEBPACK_IMPORTED_MODULE_1__["cleanUp"])(params);
      params.onError(req.statusText, req); // Since we don't have a pdf document available, we will stop the print job
    });
    req.addEventListener('load', function () {
      // Check for errors
      if ([200, 201].indexOf(req.status) === -1) {
        Object(_functions__WEBPACK_IMPORTED_MODULE_1__["cleanUp"])(params);
        params.onError(req.statusText, req); // Since we don't have a pdf document available, we will stop the print job

        return;
      } // Print requested document


      createBlobAndPrint(params, printFrame, req.response);
    });
    req.open('GET', params.printable, true);
    req.send();
  }
});

function createBlobAndPrint(params, printFrame, data) {
  // Pass response or base64 data to a blob and create a local object url
  var localPdf = new window.Blob([data], {
    type: 'application/pdf'
  });
  localPdf = window.URL.createObjectURL(localPdf); // Set iframe src with pdf document url

  printFrame.setAttribute('src', localPdf);
  _print__WEBPACK_IMPORTED_MODULE_0__["default"].send(params, printFrame);
}

/***/ }),

/***/ "./src/js/print.js":
/*!*************************!*\
  !*** ./src/js/print.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser */ "./src/js/browser.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");


var Print = {
  send: function send(params, printFrame) {
    // Append iframe element to document body
    document.getElementsByTagName('body')[0].appendChild(printFrame); // Get iframe element

    var iframeElement = document.getElementById(params.frameId); // Wait for iframe to load all content

    iframeElement.onload = function () {
      if (params.type === 'pdf') {
        // Add a delay for Firefox. In my tests, 1000ms was sufficient but 100ms was not
        if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isFirefox()) {
          setTimeout(function () {
            return performPrint(iframeElement, params);
          }, 1000);
        } else {
          performPrint(iframeElement, params);
        }

        return;
      } // Get iframe element document


      var printDocument = iframeElement.contentWindow || iframeElement.contentDocument;
      if (printDocument.document) printDocument = printDocument.document; // Append printable element to the iframe body

      printDocument.body.appendChild(params.printableElement); // Add custom style

      if (params.type !== 'pdf' && params.style) {
        // Create style element
        var style = document.createElement('style');
        style.innerHTML = params.style; // Append style element to iframe's head

        printDocument.head.appendChild(style);
      } // If printing images, wait for them to load inside the iframe


      var images = printDocument.getElementsByTagName('img');

      if (images.length > 0) {
        loadIframeImages(Array.from(images)).then(function () {
          return performPrint(iframeElement, params);
        });
      } else {
        performPrint(iframeElement, params);
      }
    };
  }
};

function performPrint(iframeElement, params) {
  try {
    iframeElement.focus(); // If Edge or IE, try catch with execCommand

    if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isEdge() || _browser__WEBPACK_IMPORTED_MODULE_0__["default"].isIE()) {
      try {
        iframeElement.contentWindow.document.execCommand('print', false, null);
      } catch (e) {
        iframeElement.contentWindow.print();
      }
    } else {
      // Other browsers
      iframeElement.contentWindow.print();
    }
  } catch (error) {
    params.onError(error);
  } finally {
    if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isFirefox()) {
      // Move the iframe element off-screen and make it invisible
      iframeElement.style.visibility = 'hidden';
      iframeElement.style.left = '-1px';
    }

    Object(_functions__WEBPACK_IMPORTED_MODULE_1__["cleanUp"])(params);
  }
}

function loadIframeImages(images) {
  var promises = images.map(function (image) {
    if (image.src && image.src !== window.location.href) {
      return loadIframeImage(image);
    }
  });
  return Promise.all(promises);
}

function loadIframeImage(image) {
  return new Promise(function (resolve) {
    var pollImage = function pollImage() {
      !image || typeof image.naturalWidth === 'undefined' || image.naturalWidth === 0 || !image.complete ? setTimeout(pollImage, 500) : resolve();
    };

    pollImage();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Print);

/***/ }),

/***/ "./src/js/raw-html.js":
/*!****************************!*\
  !*** ./src/js/raw-html.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ "./src/js/print.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  print: function print(params, printFrame) {
    // Create printable element (container)
    params.printableElement = document.createElement('div');
    params.printableElement.setAttribute('style', 'width:100%'); // Set our raw html as the printable element inner html content

    params.printableElement.innerHTML = params.printable; // Print html contents

    _print__WEBPACK_IMPORTED_MODULE_0__["default"].send(params, printFrame);
  }
});

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=print.map

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/other/print.vue?vue&type=style&index=0&id=434ca3c4&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/other/print.vue?vue&type=style&index=0&id=434ca3c4&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader-v16/dist??ref--0-1!./print.vue?vue&type=style&index=0&id=434ca3c4&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/other/print.vue?vue&type=style&index=0&id=434ca3c4&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("07501038", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/other/print.vue":
/*!***********************************!*\
  !*** ./src/views/other/print.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print_vue_vue_type_template_id_434ca3c4_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print.vue?vue&type=template&id=434ca3c4&scoped=true&ts=true */ "./src/views/other/print.vue?vue&type=template&id=434ca3c4&scoped=true&ts=true");
/* harmony import */ var _print_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.vue?vue&type=script&lang=ts&setup=true */ "./src/views/other/print.vue?vue&type=script&lang=ts&setup=true");
/* empty/unused harmony star reexport *//* harmony import */ var _print_vue_vue_type_style_index_0_id_434ca3c4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./print.vue?vue&type=style&index=0&id=434ca3c4&lang=scss&scoped=true */ "./src/views/other/print.vue?vue&type=style&index=0&id=434ca3c4&lang=scss&scoped=true");
/* harmony import */ var C_Users_yt_Desktop_yt_exam_system_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var C_Users_yt_Desktop_yt_exam_system_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_yt_Desktop_yt_exam_system_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/C_Users_yt_Desktop_yt_exam_system_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_print_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_print_vue_vue_type_template_id_434ca3c4_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-434ca3c4"],['__file',"src/views/other/print.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/other/print.vue?vue&type=script&lang=ts&setup=true":
/*!**********************************************************************!*\
  !*** ./src/views/other/print.vue?vue&type=script&lang=ts&setup=true ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_print_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--14-0!../../../node_modules/babel-loader/lib!../../../node_modules/ts-loader??ref--14-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader-v16/dist??ref--0-1!./print.vue?vue&type=script&lang=ts&setup=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/other/print.vue?vue&type=script&lang=ts&setup=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_print_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/other/print.vue?vue&type=style&index=0&id=434ca3c4&lang=scss&scoped=true":
/*!********************************************************************************************!*\
  !*** ./src/views/other/print.vue?vue&type=style&index=0&id=434ca3c4&lang=scss&scoped=true ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_print_vue_vue_type_style_index_0_id_434ca3c4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader-v16/dist??ref--0-1!./print.vue?vue&type=style&index=0&id=434ca3c4&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/other/print.vue?vue&type=style&index=0&id=434ca3c4&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_print_vue_vue_type_style_index_0_id_434ca3c4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_print_vue_vue_type_style_index_0_id_434ca3c4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_print_vue_vue_type_style_index_0_id_434ca3c4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_print_vue_vue_type_style_index_0_id_434ca3c4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/other/print.vue?vue&type=template&id=434ca3c4&scoped=true&ts=true":
/*!*************************************************************************************!*\
  !*** ./src/views/other/print.vue?vue&type=template&id=434ca3c4&scoped=true&ts=true ***!
  \*************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_print_vue_vue_type_template_id_434ca3c4_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--14-0!../../../node_modules/babel-loader/lib!../../../node_modules/ts-loader??ref--14-2!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader-v16/dist??ref--0-1!./print.vue?vue&type=template&id=434ca3c4&scoped=true&ts=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/other/print.vue?vue&type=template&id=434ca3c4&scoped=true&ts=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_print_vue_vue_type_template_id_434ca3c4_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);
//# sourceMappingURL=28.js.map