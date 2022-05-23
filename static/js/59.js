(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/other/clipboard.vue?vue&type=script&lang=ts":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/other/clipboard.vue?vue&type=script&lang=ts ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/types */ "./src/components/types.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (Object(vue__WEBPACK_IMPORTED_MODULE_1__["defineComponent"])({
  name: "Clipboard",
  setup: function setup() {
    var content = Object(vue__WEBPACK_IMPORTED_MODULE_1__["ref"])("");

    var onCopy = function onCopy() {
      var clipboard = new clipboard__WEBPACK_IMPORTED_MODULE_2___default.a(".copy");
      clipboard.on("success", function (e) {
        Object(_components_types__WEBPACK_IMPORTED_MODULE_0__["showSuccessMessage"])("复制成功，内容为：" + e.text);
      });
    };

    return {
      content: content,
      onCopy: onCopy
    };
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/other/clipboard.vue?vue&type=template&id=139acaa6&ts=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/other/clipboard.vue?vue&type=template&id=139acaa6&ts=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", null, "请输入内容", -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])("复制");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_input = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("el-input");

  var _component_el_col = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("el-col");

  var _component_el_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("el-button");

  var _component_el_row = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("el-row");

  var _component_el_card = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("el-card");

  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_el_card, {
    "body-style": {
      padding: '10px'
    }
  }, {
    header: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(function () {
      return [_hoisted_1];
    }),
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_el_row, {
        gutter: 20
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(function () {
          return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_el_col, {
            span: 20
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_el_input, {
                modelValue: _ctx.content,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                  return _ctx.content = $event;
                }),
                size: "small",
                placeholder: "请输入内容"
              }, null, 8
              /* PROPS */
              , ["modelValue"])];
            }),
            _: 1
            /* STABLE */

          }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_el_col, {
            span: 4
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_el_button, {
                size: "small",
                type: "primary",
                class: "copy",
                "data-clipboard-text": _ctx.content,
                onClick: _ctx.onCopy
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(function () {
                  return [_hoisted_2];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["data-clipboard-text", "onClick"])];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./src/views/other/clipboard.vue":
/*!***************************************!*\
  !*** ./src/views/other/clipboard.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clipboard_vue_vue_type_template_id_139acaa6_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clipboard.vue?vue&type=template&id=139acaa6&ts=true */ "./src/views/other/clipboard.vue?vue&type=template&id=139acaa6&ts=true");
/* harmony import */ var _clipboard_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clipboard.vue?vue&type=script&lang=ts */ "./src/views/other/clipboard.vue?vue&type=script&lang=ts");
/* empty/unused harmony star reexport *//* harmony import */ var C_Users_yt_Desktop_yt_exam_system_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var C_Users_yt_Desktop_yt_exam_system_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_yt_Desktop_yt_exam_system_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);





const __exports__ = /*#__PURE__*/C_Users_yt_Desktop_yt_exam_system_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_clipboard_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_clipboard_vue_vue_type_template_id_139acaa6_ts_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__file',"src/views/other/clipboard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/other/clipboard.vue?vue&type=script&lang=ts":
/*!***************************************************************!*\
  !*** ./src/views/other/clipboard.vue?vue&type=script&lang=ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_clipboard_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--14-0!../../../node_modules/babel-loader/lib!../../../node_modules/ts-loader??ref--14-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader-v16/dist??ref--0-1!./clipboard.vue?vue&type=script&lang=ts */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/other/clipboard.vue?vue&type=script&lang=ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_clipboard_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/other/clipboard.vue?vue&type=template&id=139acaa6&ts=true":
/*!*****************************************************************************!*\
  !*** ./src/views/other/clipboard.vue?vue&type=template&id=139acaa6&ts=true ***!
  \*****************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_clipboard_vue_vue_type_template_id_139acaa6_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--14-0!../../../node_modules/babel-loader/lib!../../../node_modules/ts-loader??ref--14-2!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader-v16/dist??ref--0-1!./clipboard.vue?vue&type=template&id=139acaa6&ts=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/other/clipboard.vue?vue&type=template&id=139acaa6&ts=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_clipboard_vue_vue_type_template_id_139acaa6_ts_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);
//# sourceMappingURL=59.js.map