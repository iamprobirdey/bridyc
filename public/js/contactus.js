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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactUs.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ContactUs.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      contactData: {
        'name': '',
        'email': '',
        'phone': '',
        'message': ''
      },
      contactError: {
        'name': '',
        'email': '',
        'phone': '',
        'message': ''
      }
    };
  },
  methods: {
    contactForm: function contactForm() {
      var _this = this;

      this.$validator.resume();
      this.$validator.validate().then(function (result) {
        if (result) {
          axios.post('contact', _this.contactData).then(function (response) {
            if (response.data.message === true) {
              Vue.toasted.success("We will contact you soon", {
                position: "top-center",
                duration: 5000
              });

              _this.emptyTheForm();
            }
          })["catch"](function (errors) {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000
            });

            if (errors.response.data.errors.name) {
              _this.contactError.name = errors.response.data.errors.name[0];
            }

            if (errors.response.data.errors.email) {
              _this.contactError.email = errors.response.data.errors.email[0];
            }

            if (errors.response.data.errors.phone) {
              _this.contactError.phone = errors.response.data.errors.phone[0];
            }

            if (errors.response.data.errors.message) {
              _this.contactError.message = errors.response.data.errors.message[0];
            }
          });
        }
      });
    },
    emptyTheForm: function emptyTheForm() {
      this.$validator.pause();
      this.contactData.name = '';
      this.contactData.email = '';
      this.contactData.phone = '';
      this.contactData.message = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactUs.vue?vue&type=template&id=55d6b203&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ContactUs.vue?vue&type=template&id=55d6b203& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.contactForm()
          }
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "form-group row",
            class: {
              "has-error":
                _vm.errors.has("contactError.name") ||
                _vm.contactError.name != ""
            }
          },
          [
            _c("label", { staticClass: "col-sm-3 col-form-label" }, [
              _vm._v("Name :")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.contactData.name,
                  expression: "contactData.name"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                }
              ],
              staticClass: "col-sm-9",
              class: {
                "form-control": true,
                "is-invalid": _vm.errors.has("name")
              },
              attrs: {
                "data-vv-delay": "20",
                name: "name",
                type: "text",
                placeholder: "Enter your full name"
              },
              domProps: { value: _vm.contactData.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.contactData, "name", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("name"),
                    expression: "errors.has('name')"
                  }
                ],
                staticClass: "text-danger text-center"
              },
              [_vm._v(_vm._s(_vm.errors.first("name")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.contactError.name != "",
                    expression: "contactError.name != ''"
                  }
                ],
                staticClass: "help is-danger"
              },
              [_vm._v(_vm._s(_vm.contactError.name))]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "form-group row",
            class: {
              "has-error":
                _vm.errors.has("contactError.email") ||
                _vm.contactError.email != ""
            }
          },
          [
            _c("label", { staticClass: "col-sm-3 col-form-label" }, [
              _vm._v("E-mail :")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.contactData.email,
                  expression: "contactData.email"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|email",
                  expression: "'required|email'"
                }
              ],
              staticClass: "col-sm-9",
              class: {
                "form-control": true,
                "is-invalid": _vm.errors.has("email")
              },
              attrs: {
                "data-vv-delay": "20",
                name: "email",
                type: "text",
                placeholder: "Enter your email"
              },
              domProps: { value: _vm.contactData.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.contactData, "email", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("email"),
                    expression: "errors.has('email')"
                  }
                ],
                staticClass: "text-danger text-center"
              },
              [_vm._v(_vm._s(_vm.errors.first("email")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.contactError.email != "",
                    expression: "contactError.email != ''"
                  }
                ],
                staticClass: "help is-danger"
              },
              [_vm._v(_vm._s(_vm.contactError.email))]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "form-group row",
            class: {
              "has-error":
                _vm.errors.has("contactError.phone") ||
                _vm.contactError.phone != ""
            }
          },
          [
            _c("label", { staticClass: "col-sm-6 col-form-label" }, [
              _vm._v("Phone Number :")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.contactData.phone,
                  expression: "contactData.phone"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|numeric|min:10|max:10",
                  expression: "'required|numeric|min:10|max:10'"
                }
              ],
              staticClass: "col-sm-6",
              class: {
                "form-control": true,
                "is-invalid": _vm.errors.has("phone")
              },
              attrs: {
                "data-vv-delay": "20",
                name: "phone",
                type: "text",
                placeholder: "Enter your phone number"
              },
              domProps: { value: _vm.contactData.phone },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.contactData, "phone", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("phone"),
                    expression: "errors.has('phone')"
                  }
                ],
                staticClass: "text-danger text-center"
              },
              [_vm._v(_vm._s(_vm.errors.first("phone")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.contactError.phone != "",
                    expression: "contactError.phone != ''"
                  }
                ],
                staticClass: "help is-danger"
              },
              [_vm._v(_vm._s(_vm.contactError.phone))]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "form-group row",
            class: {
              "has-error":
                _vm.errors.has("contactError.message") ||
                _vm.contactError.message != ""
            }
          },
          [
            _c("label", { staticClass: "col-sm-4 col-form-label" }, [
              _vm._v("Message :")
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.contactData.message,
                  expression: "contactData.message"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                }
              ],
              staticClass: "col-sm-8",
              class: {
                "form-control": true,
                "is-invalid": _vm.errors.has("message")
              },
              attrs: {
                "data-vv-delay": "20",
                name: "message",
                type: "text",
                placeholder: "Message text"
              },
              domProps: { value: _vm.contactData.message },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.contactData, "message", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("message"),
                    expression: "errors.has('message')"
                  }
                ],
                staticClass: "text-danger text-center"
              },
              [_vm._v(_vm._s(_vm.errors.first("message")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.contactError.message != "",
                    expression: "contactError.message != ''"
                  }
                ],
                staticClass: "help is-danger"
              },
              [_vm._v(_vm._s(_vm.contactError.message))]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btncontact", attrs: { type: "submit" } },
          [_vm._v("Submit")]
        )
      ]
    )
  ])
}
var staticRenderFns = []
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

/***/ "./resources/js/components/ContactUs.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/ContactUs.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactUs_vue_vue_type_template_id_55d6b203___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=template&id=55d6b203& */ "./resources/js/components/ContactUs.vue?vue&type=template&id=55d6b203&");
/* harmony import */ var _ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=script&lang=js& */ "./resources/js/components/ContactUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactUs_vue_vue_type_template_id_55d6b203___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactUs_vue_vue_type_template_id_55d6b203___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ContactUs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ContactUs.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/ContactUs.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ContactUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ContactUs.vue?vue&type=template&id=55d6b203&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/ContactUs.vue?vue&type=template&id=55d6b203& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_55d6b203___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ContactUs.vue?vue&type=template&id=55d6b203& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactUs.vue?vue&type=template&id=55d6b203&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_55d6b203___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_55d6b203___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/contactus.js":
/*!***********************************!*\
  !*** ./resources/js/contactus.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component("contact-us", __webpack_require__(/*! ./components/ContactUs.vue */ "./resources/js/components/ContactUs.vue")["default"]);
var element = document.getElementById("contact-us");

if (typeof element != "undefined" && element != null) {
  var cart = new Vue({
    el: "#contact-us"
  });
}

/***/ }),

/***/ 12:
/*!*****************************************!*\
  !*** multi ./resources/js/contactus.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\bridyc\resources\js\contactus.js */"./resources/js/contactus.js");


/***/ })

/******/ });
=======
!function(e){var a={};function t(r){if(a[r])return a[r].exports;var o=a[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)t.d(r,o,function(a){return e[a]}.bind(null,o));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="/",t(t.s=12)}({12:function(e,a,t){e.exports=t("5oG/")},"5oG/":function(e,a,t){Vue.component("contact-us",t("Y88G").default);var r=document.getElementById("contact-us");if(void 0!==r&&null!=r)new Vue({el:"#contact-us"})},"KHd+":function(e,a,t){"use strict";function r(e,a,t,r,o,s,n,c){var i,l="function"==typeof e?e.options:e;if(a&&(l.render=a,l.staticRenderFns=t,l._compiled=!0),r&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),n?(i=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},l._ssrRegister=i):o&&(i=c?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),i)if(l.functional){l._injectStyles=i;var m=l.render;l.render=function(e,a){return i.call(a),m(e,a)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,i):[i]}return{exports:e,options:l}}t.d(a,"a",(function(){return r}))},Y88G:function(e,a,t){"use strict";t.r(a);var r={data:function(){return{contactData:{name:"",email:"",phone:"",message:""},contactError:{name:"",email:"",phone:"",message:""}}},methods:{contactForm:function(){var e=this;this.$validator.resume(),this.$validator.validate().then((function(a){a&&axios.post("contact",e.contactData).then((function(a){!0===a.data.message&&(Vue.toasted.success("We will contact you soon",{position:"top-center",duration:5e3}),e.emptyTheForm())})).catch((function(a){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3}),a.response.data.errors.name&&(e.contactError.name=a.response.data.errors.name[0]),a.response.data.errors.email&&(e.contactError.email=a.response.data.errors.email[0]),a.response.data.errors.phone&&(e.contactError.phone=a.response.data.errors.phone[0]),a.response.data.errors.message&&(e.contactError.message=a.response.data.errors.message[0])}))}))},emptyTheForm:function(){this.$validator.pause(),this.contactData.name="",this.contactData.email="",this.contactData.phone="",this.contactData.message=""}}},o=t("KHd+"),s=Object(o.a)(r,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("form",{on:{submit:function(a){return a.preventDefault(),e.contactForm()}}},[t("div",{staticClass:"form-group row",class:{"has-error":e.errors.has("contactError.name")||""!=e.contactError.name}},[t("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Name :")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.contactData.name,expression:"contactData.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"col-sm-9",class:{"form-control":!0,"is-invalid":e.errors.has("name")},attrs:{"data-vv-delay":"20",name:"name",type:"text",placeholder:"Enter your full name"},domProps:{value:e.contactData.name},on:{input:function(a){a.target.composing||e.$set(e.contactData,"name",a.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"text-danger text-center"},[e._v(e._s(e.errors.first("name")))]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.contactError.name,expression:"contactError.name != ''"}],staticClass:"help is-danger"},[e._v(e._s(e.contactError.name))])]),e._v(" "),t("div",{staticClass:"form-group row",class:{"has-error":e.errors.has("contactError.email")||""!=e.contactError.email}},[t("label",{staticClass:"col-sm-3 col-form-label"},[e._v("E-mail :")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.contactData.email,expression:"contactData.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"col-sm-9",class:{"form-control":!0,"is-invalid":e.errors.has("email")},attrs:{"data-vv-delay":"20",name:"email",type:"text",placeholder:"Enter your email"},domProps:{value:e.contactData.email},on:{input:function(a){a.target.composing||e.$set(e.contactData,"email",a.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"text-danger text-center"},[e._v(e._s(e.errors.first("email")))]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.contactError.email,expression:"contactError.email != ''"}],staticClass:"help is-danger"},[e._v(e._s(e.contactError.email))])]),e._v(" "),t("div",{staticClass:"form-group row",class:{"has-error":e.errors.has("contactError.phone")||""!=e.contactError.phone}},[t("label",{staticClass:"col-sm-6 col-form-label"},[e._v("Phone Number :")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.contactData.phone,expression:"contactData.phone"},{name:"validate",rawName:"v-validate",value:"required|numeric|min:10|max:10",expression:"'required|numeric|min:10|max:10'"}],staticClass:"col-sm-6",class:{"form-control":!0,"is-invalid":e.errors.has("phone")},attrs:{"data-vv-delay":"20",name:"phone",type:"text",placeholder:"Enter your phone number"},domProps:{value:e.contactData.phone},on:{input:function(a){a.target.composing||e.$set(e.contactData,"phone",a.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("phone"),expression:"errors.has('phone')"}],staticClass:"text-danger text-center"},[e._v(e._s(e.errors.first("phone")))]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.contactError.phone,expression:"contactError.phone != ''"}],staticClass:"help is-danger"},[e._v(e._s(e.contactError.phone))])]),e._v(" "),t("div",{staticClass:"form-group row",class:{"has-error":e.errors.has("contactError.message")||""!=e.contactError.message}},[t("label",{staticClass:"col-sm-4 col-form-label"},[e._v("Message :")]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.contactData.message,expression:"contactData.message"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"col-sm-8",class:{"form-control":!0,"is-invalid":e.errors.has("message")},attrs:{"data-vv-delay":"20",name:"message",type:"text",placeholder:"Message text"},domProps:{value:e.contactData.message},on:{input:function(a){a.target.composing||e.$set(e.contactData,"message",a.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("message"),expression:"errors.has('message')"}],staticClass:"text-danger text-center"},[e._v(e._s(e.errors.first("message")))]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.contactError.message,expression:"contactError.message != ''"}],staticClass:"help is-danger"},[e._v(e._s(e.contactError.message))])]),e._v(" "),t("button",{staticClass:"btn btncontact",attrs:{type:"submit"}},[e._v("Submit")])])])}),[],!1,null,null,null);a.default=s.exports}});
>>>>>>> 499710a687753338cb3a7a47de2288e27cdd0116
