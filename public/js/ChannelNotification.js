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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelNotification.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChannelNotification.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      notificationData: [],
      channelId: "",
      notificationForm: {
        notify: ""
      },
      serverError: {
        notify: ""
      }
    };
  },
  props: {
    notification: {
      type: Array,
      "default": null
    },
    channelid: {
      type: Number,
      "default": null
    }
  },
  created: function created() {
    this.notificationData = this.notification;
    console.log(this.notificationData);
    this.channelId = this.channelid;
  },
  mounted: function mounted() {
    console.log("Notification");
  },
  methods: {
    addNewNotification: function addNewNotification() {
      $("#notificationModal").modal("show");
    },
    submitForm: function submitForm() {
      var _this = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          axios.post("/api/channel/add/notification/" + _this.channelId, _this.notificationForm).then(function (response) {
            if (response.data.message === true) {
              _this.notificationForm.notify = "";
              Vue.toasted.success("New Notification is been added", {
                position: "top-center",
                duration: 5000
              });
              _this.notificationData = [];
              _this.notificationData = response.data.data;
              $("#notificationModal").modal("hide");
            }
          })["catch"](function (errors) {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000
            });

            if (errors.response.data.errors.notify) {
              _this.serverError.notify = errors.response.data.errors.notify[0];
            }
          });
        }
      });
    },
    deleteNotification: function deleteNotification(notification, index) {
      var _this2 = this;

      axios.post("/api/channel/delete/notification/" + notification.id).then(function (response) {
        if (response.data.message === true) {
          Vue.toasted.success("New Notification is been added", {
            position: "top-center",
            duration: 5000
          });

          _this2.notificationData.splice(index, 1);
        }
      })["catch"](function (errors) {
        Vue.toasted.error("Something went wrong", {
          position: "top-center",
          duration: 5000
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelNotification.vue?vue&type=template&id=1da9d473&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChannelNotification.vue?vue&type=template&id=1da9d473& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "notification-section" }, [
    _c(
      "button",
      {
        staticClass: "btn add-notifications mb-5",
        on: {
          click: function($event) {
            return _vm.addNewNotification()
          }
        }
      },
      [_vm._v("\n    Add New Notification\n  ")]
    ),
    _vm._v(" "),
    _c("h3", { staticClass: "text-uppercase mb-n2" }, [
      _vm._v("News and Notifications")
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c(
      "ul",
      _vm._l(_vm.notificationData, function(notification, index) {
        return _c("li", { key: index, staticClass: "mb-1" }, [
          _vm._v("\n      " + _vm._s(notification.notify) + "\n      "),
          _c(
            "button",
            {
              staticClass: "btn btn-danger",
              on: {
                click: function($event) {
                  return _vm.deleteNotification(notification, index)
                }
              }
            },
            [_vm._v("\n        Remove\n      ")]
          )
        ])
      }),
      0
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "notificationModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.submitForm()
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "form-group",
                        class: {
                          "has-error":
                            _vm.errors.has("serverError.notify") ||
                            _vm.serverError.notify != ""
                        }
                      },
                      [
                        _c("label", [_vm._v("Add News and Notification")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.notificationForm.notify,
                              expression: "notificationForm.notify"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          class: {
                            "form-control": true,
                            "is-invalid": _vm.errors.has("notify")
                          },
                          attrs: {
                            id: "notify",
                            "data-vv-delay": "20",
                            name: "notify",
                            type: "text",
                            placeholder: "Notify anything to your student"
                          },
                          domProps: { value: _vm.notificationForm.notify },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.notificationForm,
                                "notify",
                                $event.target.value
                              )
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
                                value: _vm.errors.has("notify"),
                                expression: "errors.has('notify')"
                              }
                            ],
                            staticClass: "text-danger text-center"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("notify")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.serverError.notify != "",
                                expression: "serverError.notify != ''"
                              }
                            ],
                            staticClass: "help is-danger"
                          },
                          [_vm._v(_vm._s(_vm.serverError.notify))]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Publish")]
                    )
                  ]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close ml-auto mr-2",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
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

/***/ "./resources/js/ChannelNotification.js":
/*!*********************************************!*\
  !*** ./resources/js/ChannelNotification.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component("channel-notification", __webpack_require__(/*! ./components/ChannelNotification.vue */ "./resources/js/components/ChannelNotification.vue")["default"]);
var element = document.getElementById("channel-notification");

if (typeof element != "undefined" && element != null) {
  var cart = new Vue({
    el: "#channel-notification"
  });
}

/***/ }),

/***/ "./resources/js/components/ChannelNotification.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/ChannelNotification.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelNotification_vue_vue_type_template_id_1da9d473___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelNotification.vue?vue&type=template&id=1da9d473& */ "./resources/js/components/ChannelNotification.vue?vue&type=template&id=1da9d473&");
/* harmony import */ var _ChannelNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelNotification.vue?vue&type=script&lang=js& */ "./resources/js/components/ChannelNotification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChannelNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChannelNotification_vue_vue_type_template_id_1da9d473___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChannelNotification_vue_vue_type_template_id_1da9d473___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ChannelNotification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ChannelNotification.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/ChannelNotification.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelNotification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelNotification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ChannelNotification.vue?vue&type=template&id=1da9d473&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/ChannelNotification.vue?vue&type=template&id=1da9d473& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelNotification_vue_vue_type_template_id_1da9d473___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelNotification.vue?vue&type=template&id=1da9d473& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelNotification.vue?vue&type=template&id=1da9d473&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelNotification_vue_vue_type_template_id_1da9d473___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelNotification_vue_vue_type_template_id_1da9d473___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 17:
/*!***************************************************!*\
  !*** multi ./resources/js/ChannelNotification.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\bridyc\resources\js\ChannelNotification.js */"./resources/js/ChannelNotification.js");


/***/ })

/******/ });