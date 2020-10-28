<<<<<<< HEAD
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelTeacher.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChannelTeacher.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      teachersData: {},
      teachersRequestData: {},
      channelId: "",
      formData: {
        name: "",
        email: "",
        password: ""
      },
      serverErrors: {
        name: "",
        email: "",
        password: ""
      },
      additionUrl: "",
      url: location.origin + "/api/"
    };
  },
  props: {
    teacher: {
      type: Object,
      "default": null
    }
  },
  created: function created() {
    this.teachersData = this.teacher.teacher;
    this.teachersRequestData = this.teacher.userchannelrequest;
    this.channelId = this.teacher.id;
    console.log(this.teachersRequestData);
  },
  mounted: function mounted() {},
  methods: {
    deleteFromChannel: function deleteFromChannel(id, index) {
      var _this = this;

      if (confirm("Are you sure?")) {
        axios.post("/api/delete/teacher/" + id).then(function (response) {
          if (response.data.message === true) {
            Vue.toasted.success("Teacher account from your school is destroyed", {
              position: "top-center",
              duration: 5000
            });

            _this.teachersData.splice(index, 1);
          }

          if (response.data.error === true) {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000
            });
          }
        })["catch"](function (errors) {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000
          });
        });
      }
    },
    acceptTheTeacher: function acceptTheTeacher(teacher, index) {
      var _this2 = this;

      if (confirm("Are you sure? ")) {
        axios.post("/api/accept/request/of/teacher/" + teacher.id).then(function (response) {
          if (response.data.message === true) {
            Vue.toasted.success("You have successfully accepted the request", {
              position: "top-center",
              duration: 5000
            });

            _this2.teachersRequestData.splice(index, 1);

            window.location.reload();
          }

          if (response.data.error === true) {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000
            });
          }
        })["catch"](function (errors) {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000
          });
        });
      }
    },
    deleteTheTeacher: function deleteTheTeacher(teacher, index) {
      var _this3 = this;

      if (confirm("Are you sure you want to teacher ")) {
        axios.post("/api/delete/request/of/teacher/" + teacher.id).then(function (response) {
          if (response.data.message === true) {
            Vue.toasted.success("You have successfully deleted the request", {
              position: "top-center",
              duration: 5000
            });

            _this3.teachersRequestData.splice(index, 1);
          }
        })["catch"](function (errors) {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelTeacher.vue?vue&type=template&id=30e0710a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChannelTeacher.vue?vue&type=template&id=30e0710a& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "teacher-section" }, [
    _vm.teachersRequestData != ""
      ? _c(
          "div",
          { staticClass: "mb-5" },
          [
            _vm._m(0),
            _vm._v(" "),
            _vm._l(_vm.teachersRequestData, function(teacher, index) {
              return _c("div", { key: index }, [
                _c("h3", { staticClass: "text-capitalized" }, [
                  _vm._v("Faculty name: " + _vm._s(teacher.user.name))
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    on: {
                      click: function($event) {
                        return _vm.acceptTheTeacher(teacher, index)
                      }
                    }
                  },
                  [_vm._v("\n        Accept\n      ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    on: {
                      click: function($event) {
                        return _vm.deleteTheTeacher(teacher, index)
                      }
                    }
                  },
                  [_vm._v("\n        Delete\n      ")]
                )
              ])
            })
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _c("h3", { staticClass: "text-uppercase" }, [_vm._v("Faculty Members")]),
    _vm._v(" "),
    _c("p", { staticClass: "mb-n2 text-secondary" }, [
      _vm._v(
        "\n    (If someone from the faculty left the institute, you may remove them from\n    this section.)\n  "
      )
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row mx-0 my-5" },
      _vm._l(_vm.teachersData, function(teacher, index) {
        return _c(
          "div",
          {
            key: index,
            staticClass: "card shadow mx-auto sidebar-facard mb-4"
          },
          [
            _c("img", {
              attrs: {
                src:
                  teacher.user.avatar === "default.jpg"
                    ? "/images/" + teacher.user.avatar
                    : "/media/teacher/" +
                      teacher.user.id +
                      "/profile/s-" +
                      teacher.user.avatar,
                alt: "faculty member image"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-body mt-n1" }, [
              _c(
                "h6",
                {
                  staticClass: "card-title my-n1 text-capitalized text-center"
                },
                [
                  _vm._v(
                    "\n          " + _vm._s(teacher.user.name) + "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "card-text mx-n3 text-center" }, [
                _vm._v(
                  "\n          " + _vm._s(teacher.user.email) + "\n        "
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-danger mt-5",
                on: {
                  click: function($event) {
                    return _vm.deleteFromChannel(teacher.id, index)
                  }
                }
              },
              [_vm._v("\n        Remove\n      ")]
            )
          ]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", [
      _vm._v("\n      You have a\n      "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("pending")]),
      _vm._v(" request, please act!\n    ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/channelteacher.js":
/*!****************************************!*\
  !*** ./resources/js/channelteacher.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component("channel-teacher", __webpack_require__(/*! ./components/ChannelTeacher.vue */ "./resources/js/components/ChannelTeacher.vue")["default"]);
var element = document.getElementById("channelTeacher");

if (typeof element != "undefined" && element != null) {
  var cart = new Vue({
    el: "#channelTeacher"
  });
}

/***/ }),

/***/ "./resources/js/components/ChannelTeacher.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/ChannelTeacher.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelTeacher_vue_vue_type_template_id_30e0710a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelTeacher.vue?vue&type=template&id=30e0710a& */ "./resources/js/components/ChannelTeacher.vue?vue&type=template&id=30e0710a&");
/* harmony import */ var _ChannelTeacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelTeacher.vue?vue&type=script&lang=js& */ "./resources/js/components/ChannelTeacher.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChannelTeacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChannelTeacher_vue_vue_type_template_id_30e0710a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChannelTeacher_vue_vue_type_template_id_30e0710a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ChannelTeacher.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ChannelTeacher.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/ChannelTeacher.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelTeacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelTeacher.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelTeacher.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelTeacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ChannelTeacher.vue?vue&type=template&id=30e0710a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ChannelTeacher.vue?vue&type=template&id=30e0710a& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelTeacher_vue_vue_type_template_id_30e0710a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelTeacher.vue?vue&type=template&id=30e0710a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelTeacher.vue?vue&type=template&id=30e0710a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelTeacher_vue_vue_type_template_id_30e0710a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelTeacher_vue_vue_type_template_id_30e0710a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 15:
/*!**********************************************!*\
  !*** multi ./resources/js/channelteacher.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\bridyc\resources\js\channelteacher.js */"./resources/js/channelteacher.js");


/***/ })

/******/ });
=======
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=15)}({15:function(e,t,n){e.exports=n("uQHc")},G86r:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{teachersData:{},teachersRequestData:{},channelId:"",formData:{name:"",email:"",password:""},serverErrors:{name:"",email:"",password:""},additionUrl:"",url:location.origin+"/api/"}},props:{teacher:{type:Object,default:null}},created:function(){this.teachersData=this.teacher.teacher,this.teachersRequestData=this.teacher.userchannelrequest,this.channelId=this.teacher.id,console.log(this.teachersRequestData)},mounted:function(){},methods:{deleteFromChannel:function(e,t){var n=this;confirm("Are you sure?")&&axios.post("/api/delete/teacher/"+e).then((function(e){!0===e.data.message&&(Vue.toasted.success("Teacher account from your school is destroyed",{position:"top-center",duration:5e3}),n.teachersData.splice(t,1)),!0===e.data.error&&Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})})).catch((function(e){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})}))},acceptTheTeacher:function(e,t){var n=this;confirm("Are you sure? ")&&axios.post("/api/accept/request/of/teacher/"+e.id).then((function(e){!0===e.data.message&&(Vue.toasted.success("You have successfully accepted the request",{position:"top-center",duration:5e3}),n.teachersRequestData.splice(t,1),window.location.reload()),!0===e.data.error&&Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})})).catch((function(e){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})}))},deleteTheTeacher:function(e,t){var n=this;confirm("Are you sure you want to teacher ")&&axios.post("/api/delete/request/of/teacher/"+e.id).then((function(e){!0===e.data.message&&(Vue.toasted.success("You have successfully deleted the request",{position:"top-center",duration:5e3}),n.teachersRequestData.splice(t,1))})).catch((function(e){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})}))}}},a=n("KHd+"),o=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"teacher-section"},[""!=e.teachersRequestData?n("div",{staticClass:"mb-5"},[e._m(0),e._v(" "),e._l(e.teachersRequestData,(function(t,r){return n("div",{key:r},[n("h3",{staticClass:"text-capitalized"},[e._v("Faculty name: "+e._s(t.user.name))]),e._v(" "),n("button",{staticClass:"btn btn-success",on:{click:function(n){return e.acceptTheTeacher(t,r)}}},[e._v("\n        Accept\n      ")]),e._v(" "),n("button",{staticClass:"btn btn-danger",on:{click:function(n){return e.deleteTheTeacher(t,r)}}},[e._v("\n        Delete\n      ")])])}))],2):e._e(),e._v(" "),n("h3",{staticClass:"text-uppercase"},[e._v("Faculty Members")]),e._v(" "),n("p",{staticClass:"mb-n2 text-secondary"},[e._v("\n    (If someone from the faculty left the institute, you may remove them from\n    this section.)\n  ")]),e._v(" "),n("hr"),e._v(" "),n("div",{staticClass:"row mx-0 my-5"},e._l(e.teachersData,(function(t,r){return n("div",{key:r,staticClass:"card shadow mx-auto sidebar-facard mb-4"},[n("img",{attrs:{src:"default.jpg"===t.user.avatar?"/images/"+t.user.avatar:"/media/teacher/"+t.user.id+"/profile/s-"+t.user.avatar,alt:"faculty member image"}}),e._v(" "),n("div",{staticClass:"card-body mt-n1"},[n("h6",{staticClass:"card-title my-n1 text-capitalized text-center"},[e._v("\n          "+e._s(t.user.name)+"\n        ")]),e._v(" "),n("p",{staticClass:"card-text mx-n3 text-center"},[e._v("\n          "+e._s(t.user.email)+"\n        ")])]),e._v(" "),n("button",{staticClass:"btn btn-danger mt-5",on:{click:function(n){return e.deleteFromChannel(t.id,r)}}},[e._v("\n        Remove\n      ")])])})),0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h5",[this._v("\n      You have a\n      "),t("span",{staticClass:"text-danger"},[this._v("pending")]),this._v(" request, please act!\n    ")])}],!1,null,null,null);t.default=o.exports},"KHd+":function(e,t,n){"use strict";function r(e,t,n,r,a,o,s,c){var i,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(i=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=i):a&&(i=c?function(){a.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:a),i)if(u.functional){u._injectStyles=i;var l=u.render;u.render=function(e,t){return i.call(t),l(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,i):[i]}return{exports:e,options:u}}n.d(t,"a",(function(){return r}))},uQHc:function(e,t,n){Vue.component("channel-teacher",n("G86r").default);var r=document.getElementById("channelTeacher");if(void 0!==r&&null!=r)new Vue({el:"#channelTeacher"})}});
>>>>>>> 499710a687753338cb3a7a47de2288e27cdd0116
