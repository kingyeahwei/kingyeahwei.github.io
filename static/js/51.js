(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/map/gaode.vue?vue&type=script&lang=ts":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/map/gaode.vue?vue&type=script&lang=ts ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks */ "./src/hooks/index.ts");


var SCRIPT_URL = 'https://webapi.amap.com/maps?v=1.4.15&key=9f2d3fcc4b12a7c915fded4b55902e21';
/* harmony default export */ __webpack_exports__["default"] = (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["defineComponent"])({
  setup: function setup() {
    var container = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    var height = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);

    var _useCreateScript = Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useCreateScript"])(SCRIPT_URL),
        createScriptPromise = _useCreateScript.createScriptPromise;

    var initMap = function initMap() {
      var _container$value, _container$value$pare;

      height.value = ((_container$value = container.value) === null || _container$value === void 0 ? void 0 : (_container$value$pare = _container$value.parentElement) === null || _container$value$pare === void 0 ? void 0 : _container$value$pare.getBoundingClientRect().height) || 0;
      createScriptPromise.then(function () {
        var aMap = window.AMap;
        new aMap.Map(container.value, {
          zoom: 22,
          center: [116.397428, 39.90923],
          viewMode: '3D',
          pitch: 75
        });
      });
    };

    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__["onMounted"])(initMap);
    return {
      container: container,
      height: height
    };
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/map/gaode.vue?vue&type=template&id=36753d79&ts=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/map/gaode.vue?vue&type=template&id=36753d79&ts=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
    ref: "container",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
      'height': _ctx.height + 'px',
      'width': '100%'
    })
  }, null, 4
  /* STYLE */
  );
}

/***/ }),

/***/ "./src/views/map/gaode.vue":
/*!*********************************!*\
  !*** ./src/views/map/gaode.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gaode_vue_vue_type_template_id_36753d79_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gaode.vue?vue&type=template&id=36753d79&ts=true */ "./src/views/map/gaode.vue?vue&type=template&id=36753d79&ts=true");
/* harmony import */ var _gaode_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gaode.vue?vue&type=script&lang=ts */ "./src/views/map/gaode.vue?vue&type=script&lang=ts");
/* empty/unused harmony star reexport *//* harmony import */ var C_Users_yt_Desktop_yt_exam_system_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var C_Users_yt_Desktop_yt_exam_system_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_yt_Desktop_yt_exam_system_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);





const __exports__ = /*#__PURE__*/C_Users_yt_Desktop_yt_exam_system_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_gaode_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_gaode_vue_vue_type_template_id_36753d79_ts_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__file',"src/views/map/gaode.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/map/gaode.vue?vue&type=script&lang=ts":
/*!*********************************************************!*\
  !*** ./src/views/map/gaode.vue?vue&type=script&lang=ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_gaode_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--14-0!../../../node_modules/babel-loader/lib!../../../node_modules/ts-loader??ref--14-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader-v16/dist??ref--0-1!./gaode.vue?vue&type=script&lang=ts */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/map/gaode.vue?vue&type=script&lang=ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_gaode_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/map/gaode.vue?vue&type=template&id=36753d79&ts=true":
/*!***********************************************************************!*\
  !*** ./src/views/map/gaode.vue?vue&type=template&id=36753d79&ts=true ***!
  \***********************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_gaode_vue_vue_type_template_id_36753d79_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--14-0!../../../node_modules/babel-loader/lib!../../../node_modules/ts-loader??ref--14-2!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader-v16/dist??ref--0-1!./gaode.vue?vue&type=template&id=36753d79&ts=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/map/gaode.vue?vue&type=template&id=36753d79&ts=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_gaode_vue_vue_type_template_id_36753d79_ts_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);
//# sourceMappingURL=51.js.map