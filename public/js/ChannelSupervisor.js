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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelSupervisor.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChannelSupervisor.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      steps: 1,
      max_steps: 5,
      step1: {
        institute_name: "",
        //id => number
        city: "",
        post_office: "",
        district: "",
        pin: "",
        date: "",
        bibhag: "",
        songkul: "",
        number: "",
        niketan: "",
        email: "",
        webiste: "",
        whatsapp: ""
      },
      serverErrors: {
        //step 1
        institute_name: "",
        //id => number
        city: "",
        post_office: "",
        district: "",
        pin: "",
        date: "",
        bibhag: "",
        songkul: "",
        number: "",
        niketan: "",
        email: "",
        webiste: "",
        whatsapp: "" //step 2

      }
    };
  },
  mounted: function mounted() {},
  methods: {
    validateStepForm: function validateStepForm(scope) {
      var _this = this;

      //this.$validator.validateAll(scope).then((result) => {
      this.$validator.validate().then(function (result) {
        if (result) {
          console.log("hit");
          if (_this.steps != _this.max_steps) _this.steps = _this.steps + 1; //   const el = this.$el.querySelector(".steps");
          //   console.log(el);
          //   el.scrollIntoView();
        } else {
          Vue.toasted.error("Please fill the required fields!", {
            position: "top-center",
            duration: 3000
          }); //   const el = this.$el.querySelector(
          //     "[data-vv-id=" + this.$validator.errors.items[1].id + "]"
          //   );
          //   el.scrollIntoView();
          //   el.focus();
        }
      });
    },
    submitForm: function submitForm() {
      console.log("Probir");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelSupervisor.vue?vue&type=template&id=6c60f470&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChannelSupervisor.vue?vue&type=template&id=6c60f470& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    _c("ul", { staticClass: "list-inline steps" }, [
      _vm.steps == 1
        ? _c("li", { class: { active: _vm.steps > 0 } }, [
            _vm._v("Basic Details")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.steps == 2
        ? _c("li", { class: { active: _vm.steps > 1 } }, [
            _vm._v("\n        Lower Class Details\n      ")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.steps == 3
        ? _c("li", { class: { active: _vm.steps > 2 } }, [
            _vm._v("\n        Middle Class Details\n      ")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.steps == 4
        ? _c("li", { class: { active: _vm.steps > 3 } }, [
            _vm._v("\n        Higher Class Details\n      ")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.steps == 5
        ? _c("li", { class: { active: _vm.steps > 4 } }, [
            _vm._v("\n        Higher Class Details\n      ")
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _vm.steps === 1
      ? _c(
          "form",
          {
            staticClass: "form-horizontal container-lg",
            attrs: { "data-vv-scope": "step1" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.validateStepForm("step1")
              }
            }
          },
          [
            _c("h1", [_vm._v("Step 1")]),
            _vm._v(" "),
            _c("div", { staticClass: "form-row" }, [
              _c(
                "div",
                {
                  staticClass: "form-group col-md-12",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.institute_name") ||
                      _vm.serverErrors.institute_name != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "inputEmail4" } }, [
                    _vm._v("নিকেতনৰ নাম")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.institute_name,
                        expression: "step1.institute_name"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|max:100",
                        expression: "'required|max:100'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "institute_name",
                      placeholder: "নিকেতনৰ নাম"
                    },
                    domProps: { value: _vm.step1.institute_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.step1,
                          "institute_name",
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
                          value: _vm.errors.has("step1.institute_name"),
                          expression: "errors.has('step1.institute_name')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.institute_name")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.institute_name != "",
                          expression: "serverErrors.institute_name != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.institute_name))]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-row" }, [
              _c(
                "div",
                {
                  staticClass: "form-group col-md-3 col-sm-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.city") ||
                      _vm.serverErrors.city != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "inputCity" } }, [
                    _vm._v("স্থান")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.city,
                        expression: "step1.city"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "city" },
                    domProps: { value: _vm.step1.city },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "city", $event.target.value)
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
                          value: _vm.errors.has("step1.city"),
                          expression: "errors.has('step1.city')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.city")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.city != "",
                          expression: "serverErrors.city != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.city))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group col-md-3 col-sm-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.post_office") ||
                      _vm.serverErrors.post_office != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "text" } }, [_vm._v("ডাকঘৰ")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.post_office,
                        expression: "step1.post_office"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "post_office", type: "text" },
                    domProps: { value: _vm.step1.post_office },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "post_office", $event.target.value)
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
                          value: _vm.errors.has("step1.post_office"),
                          expression: "errors.has('step1.post_office')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.post_office")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.post_office != "",
                          expression: "serverErrors.post_office != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.post_office))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group col-md-3 col-sm-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.district") ||
                      _vm.serverErrors.district != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "inputZip" } }, [_vm._v("জিলা")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.district,
                        expression: "step1.district"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "district" },
                    domProps: { value: _vm.step1.district },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "district", $event.target.value)
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
                          value: _vm.errors.has("step1.district"),
                          expression: "errors.has('step1.district')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.district")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.district != "",
                          expression: "serverErrors.district != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.district))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group col-md-3 col-sm-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.pin") ||
                      _vm.serverErrors.pin != ""
                  }
                },
                [
                  _c("label", [_vm._v("পিন")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.pin,
                        expression: "step1.pin"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "pin" },
                    domProps: { value: _vm.step1.pin },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "pin", $event.target.value)
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
                          value: _vm.errors.has("step1.pin"),
                          expression: "errors.has('step1.pin')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.pin")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.pin != "",
                          expression: "serverErrors.pin != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.pin))]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-row" }, [
              _c(
                "div",
                {
                  staticClass: "form-group col-md-4 col-sm-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.date") ||
                      _vm.serverErrors.date != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "inputCity" } }, [
                    _vm._v("নিকেতন স্থাপনৰ তাৰিখ")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.date,
                        expression: "step1.date"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "date" },
                    domProps: { value: _vm.step1.date },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "date", $event.target.value)
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
                          value: _vm.errors.has("step1.date"),
                          expression: "errors.has('step1.date')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.date")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.date != "",
                          expression: "serverErrors.date != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.date))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group col-md-4 col-sm-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.bibhag") ||
                      _vm.serverErrors.bibhag != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "text" } }, [_vm._v("বিভাগ")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.bibhag,
                        expression: "step1.bibhag"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "bibhag" },
                    domProps: { value: _vm.step1.bibhag },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "bibhag", $event.target.value)
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
                          value: _vm.errors.has("step1.bibhag"),
                          expression: "errors.has('step1.bibhag')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.bibhag")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.bibhag != "",
                          expression: "serverErrors.bibhag != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.bibhag))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group col-md-4",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.songkul") ||
                      _vm.serverErrors.songkul != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "inputZip" } }, [
                    _vm._v("সংকুল")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.songkul,
                        expression: "step1.songkul"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "songkul" },
                    domProps: { value: _vm.step1.songkul },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "songkul", $event.target.value)
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
                          value: _vm.errors.has("step1.songkul"),
                          expression: "errors.has('step1.songkul')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.songkul")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.songkul != "",
                          expression: "serverErrors.songkul != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.songkul))]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-row" }, [
              _c(
                "div",
                {
                  staticClass: "form-group col-md-6 col-sm-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.number") ||
                      _vm.serverErrors.number != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "inputCity" } }, [
                    _vm._v("প্ৰধানাচাৰ্যৰ মোবাইল নং :")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.number,
                        expression: "step1.number"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "number" },
                    domProps: { value: _vm.step1.number },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "number", $event.target.value)
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
                          value: _vm.errors.has("step1.number"),
                          expression: "errors.has('step1.number')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.number")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.number != "",
                          expression: "serverErrors.number != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.number))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group col-md-6 col-sm-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.niketan") ||
                      _vm.serverErrors.niketan != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "text" } }, [
                    _vm._v("নিকেতনৰ দুৰাভাষ")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.niketan,
                        expression: "step1.niketan"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "niketan" },
                    domProps: { value: _vm.step1.niketan },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "niketan", $event.target.value)
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
                          value: _vm.errors.has("step1.niketan"),
                          expression: "errors.has('step1.niketan')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.niketan")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.niketan != "",
                          expression: "serverErrors.niketan != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.niketan))]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-row" }, [
              _c(
                "div",
                {
                  staticClass: "form-group col-md-4 col-sm-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.email") ||
                      _vm.serverErrors.email != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "inputCity" } }, [
                    _vm._v("E-mail")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.email,
                        expression: "step1.email"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "email", name: "email" },
                    domProps: { value: _vm.step1.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "email", $event.target.value)
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
                          value: _vm.errors.has("step1.email"),
                          expression: "errors.has('step1.email')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.email")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.email != "",
                          expression: "serverErrors.email != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.email))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group col-md-4 col-sm-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.website") ||
                      _vm.serverErrors.website != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "text" } }, [_vm._v("Website")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.website,
                        expression: "step1.website"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "website" },
                    domProps: { value: _vm.step1.website },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "website", $event.target.value)
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
                          value: _vm.errors.has("step1.website"),
                          expression: "errors.has('step1.website')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.website")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.website != "",
                          expression: "serverErrors.website != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.website))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group col-md-4",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.whatsapp") ||
                      _vm.serverErrors.whatsapp != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "text" } }, [_vm._v("WhatApp")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step1.whatsapp,
                          expression: "step1.whatsapp"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Username",
                        name: "whatsapp"
                      },
                      domProps: { value: _vm.step1.whatsapp },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step1, "whatsapp", $event.target.value)
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
                            value: _vm.errors.has("step1.whatsapp"),
                            expression: "errors.has('step1.whatsapp')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("step1.whatsapp")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.whatsapp != "",
                            expression: "serverErrors.whatsapp != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.whatsapp))]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("link", {
              attrs: { rel: "stylesheet", href: "afterdelete.css" }
            }),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _vm._m(5),
            _vm._v(" "),
            _vm._m(6),
            _vm._v(" "),
            _vm._m(7),
            _vm._v(" "),
            _vm._m(8),
            _vm._v(" "),
            _vm._m(9),
            _vm._v(" "),
            _vm._m(10),
            _vm._v(" "),
            _vm._m(11),
            _vm._v(" "),
            _vm._m(12),
            _vm._v(" "),
            _vm._m(13),
            _vm._v(" "),
            _vm._m(14),
            _vm._v(" "),
            _vm._m(15),
            _vm._v(" "),
            _vm._m(16),
            _vm._v(" "),
            _vm._m(17),
            _vm._v(" "),
            _vm._m(18),
            _vm._v(" "),
            _vm._m(19),
            _vm._v(" "),
            _vm._m(20),
            _vm._v(" "),
            _vm._m(21),
            _vm._v(" "),
            _vm._m(22),
            _vm._v(" "),
            _vm._m(23),
            _vm._v(" "),
            _vm._m(24),
            _vm._v(" "),
            _vm._m(25),
            _vm._v(" "),
            _vm._m(26),
            _vm._v(" "),
            _vm._m(27),
            _vm._v(" "),
            _vm._m(28),
            _vm._v(" "),
            _vm._m(29),
            _vm._v(" "),
            _vm._m(30),
            _vm._v(" "),
            _vm._m(31),
            _vm._v(" "),
            _vm._m(32),
            _vm._v(" "),
            _vm._m(33),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-row-reverse" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-secondary",
                  attrs: { disabled: _vm.steps === 1, type: "submit" }
                },
                [_vm._v("\n          Back\n        ")]
              )
            ]),
            _vm._v(" "),
            _vm._m(34)
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.steps === 2
      ? _c(
          "form",
          {
            staticClass: "form-horizontal",
            attrs: { "data-vv-scope": "step1" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.validateStepForm("step1")
              }
            }
          },
          [
            _c("h1", [_vm._v("Step 2")]),
            _vm._v(" "),
            _vm._m(35),
            _vm._v(" "),
            _vm._m(36),
            _vm._v(" "),
            _vm._m(37),
            _vm._v(" "),
            _vm._m(38)
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.steps === 3
      ? _c(
          "form",
          {
            staticClass: "form-horizontal",
            attrs: { "data-vv-scope": "step1" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.validateStepForm("step1")
              }
            }
          },
          [
            _c("h1", [_vm._v("Step 3")]),
            _vm._v(" "),
            _vm._m(39),
            _vm._v(" "),
            _vm._m(40),
            _vm._v(" "),
            _vm._m(41),
            _vm._v(" "),
            _vm._m(42)
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.steps === 4
      ? _c(
          "form",
          {
            staticClass: "form-horizontal",
            attrs: { "data-vv-scope": "step1" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.validateStepForm("step1")
              }
            }
          },
          [
            _c("h1", [_vm._v("Step 4")]),
            _vm._v(" "),
            _vm._m(43),
            _vm._v(" "),
            _vm._m(44),
            _vm._v(" "),
            _vm._m(45)
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.steps === 5
      ? _c(
          "form",
          {
            staticClass: "form-horizontal",
            attrs: { "data-vv-scope": "step1" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submitForm("step1")
              }
            }
          },
          [
            _c("h1", [_vm._v("Step 5")]),
            _vm._v(" "),
            _vm._m(46),
            _vm._v(" "),
            _vm._m(47),
            _vm._v(" "),
            _vm._m(48)
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [_vm._v("+91")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("(ক)")]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "\n        নিকেতনখন কত অৱস্থিত -- চহৰত/গাঁৱত/বনাঞ্চলত (✓ চিন দিব ) | নিকেতনলৈ\n        ছাত্র-ছাত্ৰী অহা গাঁৱৰ সংখ্যা\n    "
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-1 mr-2",
        attrs: { type: "text", placeholder: "নিকেতনখন ....." }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("নগৰীয়া বস্তিৰ সংখ্যা")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-1 mr-2",
        attrs: { type: "text", placeholder: "নগৰীয়া বস্তিৰ সংখ্যা" }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("ৱাৰ্ডৰ সংখ্যা")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-1 mr-2",
        attrs: { type: "text", placeholder: "ৱাৰ্ডৰ সংখ্যা" }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "\n        গাঁৱৰ তালিকা বেলেগে সংলগ্ন কৰি গাঁৱৰ পৰা অহা ছাত্র-ছাত্ৰী সংখ্যা দিব |\n    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col" }, [_vm._v("(খ) মাহিলী শিক্ষণ শুল্ক :")]),
      _vm._v(" "),
      _c(
        "table",
        { staticClass: "table col-8 table-responsive table-borderless" },
        [
          _c("tbody", [
            _c("tr", [
              _c("td", [_vm._v("অংকুৰ, মুকুল")]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "  " }
                })
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("১মৰ পৰা ৫ ম")]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "  " }
                })
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("৬ষ্টৰ পৰা ৮ ম")]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "  " }
                })
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("৯ ম আৰু ১০ ম")]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "  " }
                })
              ])
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("(গ)")]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(১) আচাৰ্য/আচাৰ্জাৰ নুন্যতম মানধন")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: "নুন্যতম মানধন.." }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(২) আচাৰ্য/আচাৰ্জাৰ অধিকতম মানধন")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: "অধিকতম মানধন" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("(ঘ)")]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "\n        নিকেতনৰ হিচাব পৰীক্ষকৰ প্ৰতিবেদন ২০১৯ বৰ্ষৰ ৩১ মাৰ্চলৈ সম্পূৰ্ণ কৰি\n        প্ৰদেশ কাৰ্যালয়লৈ প্ৰেৰণ কৰিছে/কৰা নাই (✓ চিন দিব ) ।\n    "
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("যদি কৰা নাই কোন চনলৈ পঠাইছে লিখিব")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(
        "নিকেতনৰ তথ্য আৰু হিচাব-নিকাচ চাৰ্টাড\n    অকাউন্টটেণ্টৰ (C/A) দ্বাৰা আৰু\n    কম্পিউটাৰৰ যোগেদি কৰা হয়/নহয় (✓ চিন দিব )\n"
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "\n        (ঙ) নিকেতনৰ বেংক একাউণ্ট নম্বৰ আৰু বেংকৰ নাম (যিমানটা থাকে)\n    "
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-1 mr-2",
        attrs: { type: "text", placeholder: " " }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "\n        (চ) ভবিষ্য নিধি - E. P. F. আছে/নাই । যদি আছে নম্বৰ দিব :\n    "
        )
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("আছে")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("নাই")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "\n        (জ) নিকেতনৰ আচাৰ্যসকল প্ৰান্তীয় আচাৰ্য কল্যান নিধিৰ সদস্য হয়নে ?\n    "
        )
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("হয়")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("নহয়")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "\n        (ঝ) নিকেতনৰ আচাৰ্য/ আৰু কৰ্মচাৰীসকল কোনো স্থ্য স্বা বীমা/অটল অমৃত\n        কাৰ্ড / আয়ুষ্মান ভাৰত কাৰ্ড লৈছেনে নাই, যদি লোৱা নাই উপৰোক্ত আঁচনিৰ\n        আওতালৈ আনিব লাগে ।\n    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }),
      _vm._v("\n    ৫। (ক) প্রধানাচাৰ্য/ভাৰপ্ৰাপ্ত প্রধানাচাৰ্যৰ নাম "),
      _c("p"),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("\n        স্থানীয় সমিতিৰ পৰা পোৱা নিযুক্তিৰ তাৰিখ ")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("\n        শিশু শিক্ষা সমিতি, অসমৰ পৰা পোৱা নিযুক্তিৰ তাৰিখ")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "প্রধানাচাৰ্য স্থায়ী/অস্থায়ী/ভাৰপ্ৰাপ্ত (✓ চিন দিব )। উপ-প্ৰধানাচাৰ্যৰ নাম (যদি আছে) : "
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("প্রধানাচাৰ্য প্ৰশিক্ষণ লোৱা চন ")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("নিযুক্তি স্থায়ী/অস্থায়ী (✓ চিন দিব )।")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(৬) (ক) নিকেতনৰ মাটিৰ পৰিমাণ")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "মাটি নিজৰ হয় / নহয় । (ম্যাদী/চৰকাৰী/দখল) নিকেতনৰ ভৱন পকা/অৰ্দ্ধ পকা/ অস্থায়ী (✓ চিন দিব )।"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("(খ) নিকেতনখন")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("পঞ্চায়ত,")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("উন্নয়ন খণ্ড (ব্লক)ত")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("মহকুমাত অৱস্থিত ।")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(গ) পুথিভঁৰাল ব্যৱস্থা : অধ্যয়ন কক্ষ")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("টা /আলমাৰী সংখ্যা")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("টা/কিতাবৰ সংখ্যা")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "খন । পঞ্জীয়ন বহীত কিতাব কিতাবসমূহ পঞ্জীয়ন কৰা হয়/নহয় । (✓ চিন দিব )"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(ঘ) বিজ্ঞানাগাৰৰ ব্যবস্থা আছে/নাই আৰু নিয়মিত ব্যৱহাৰ হয়/নহয় । (✓ চিন দিব )"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(ঙ) খেলপথাৰ আছে/নাই । (✓ চিন দিব ) যদি নাই, কি ধৰণৰ ব্যবস্থা আছে"
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(চ) উপযুক্ত প্ৰাৰ্থনা গৃহ আছে/নাই (✓ চিন দিব ) (যদি নাই সোনকালে ব্যবস্থা কৰিব) । প্ৰথনা বিদ্যা\n        ভাৰতীয় ক্ৰম অনুসৰি হয়/নহয় (✓ চিন দিব )\n        । বহি প্ৰাৰ্থনা হয়নে ?"
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: " d-flex justify-content-center " }, [
      _c("h5", { staticClass: "mb-0 h4 titleCentre" }, [
        _vm._v(
          "\n        নিম্নলিখিত কাৰ্যব্যবস্থা সমূহৰ আপোনাৰ নিকেতনৰ\n        ক্ষেত্ৰত যিটো প্ৰযোজ্য হয়\n        তাত (✓) চীন দিব ।\n    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("৭ । (ক) পঞ্জীয়নৰ বাবে চৰকাৰৰ সৈতে হোৱা যোগাযোগ")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(ক) আবেদন কৰিছে (খ) নিকেতন খোলাৰ অনুমতি হৈছে (গ) যদি চৰকাৰী পঞ্জীভূক্ত হৈছে, পঞ্জীয়ন নম্বৰ দিব\n    "
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(ঘ) কোনো ধৰণৰ যোগাযোগ হোৱা নাই । সেৱাৰ কড নম্বৰ দিব")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("৭ । (ক) পঞ্জীয়নৰ বাবে চৰকাৰৰ সৈতে হোৱা যোগাযোগ")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(ক) আবেদন কৰিছে (খ) নিকেতন খোলাৰ অনুমতি হৈছে (গ) যদি চৰকাৰী পঞ্জীভূক্ত হৈছে, পঞ্জীয়ন নম্বৰ দিব\n    "
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(ঘ) কোনো ধৰণৰ যোগাযোগ হোৱা নাই । সেৱাৰ কড নম্বৰ দিব")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(খ) শিশু শিক্ষা সমিতি, অসমৰ অন্তৰ্ভুক্তৰ পঞ্জীয়ন নম্বৰ দিব")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(যদি নাই অতি সোনকালে মূল প্ৰমাণ পত্ৰ সহ পঞ্জীয়ন নম্বৰ লব )")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(গ) ষষ্ঠ শ্ৰেণীৰ‍ পৰা অষ্টম শ্ৰেণীলৈ সমিতিৰ উচ্চ মাধ্যমিক বিদ্যালয় উপ-সমিতিৰ পৰা অনুমোদন পোৱা\n        চন"
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(ঘ) নৱম আৰু দশম শ্ৰেণীৰ‍ বাবে সমিতিৰ উচ্চ মাধ্যমিক বিদ্যালয় উপ-সমিতিৰ পৰা অনুমোদন পোৱা চন"
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("৮ । (ক) বালিকা শিক্ষাৰ কালাংখ নিমনীয়া ভাবে হৈ আছে/নাই ।")
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("আছে")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("নাই")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(খ) পঞ্চপদী শিক্ষণ পদ্ধতিৰ আধাৰত সকলো আচাৰ্যই পাঠ যোজনা\n        বনাই পাঠ দান কৰে/নকৰে । যদি নকৰে কিয় নকৰে জনাব :"
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(গ) Spoken English অথবা Class ত English to English কোন কোন শ্ৰেণীত কেইটাকৈ Class"
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("হয় । ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(ঘ) স্মাৰ্ট ক্লাছৰ ব্যবস্থা আছে/নাই ।")
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("আছে")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("নাই")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(ঙ) নিকেতনত শিশু বাটিকাৰ সুকীয়া ব্যবস্থা হৈছে/হোৱা নাই ।")
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("হৈছে")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("হোৱা নাই")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(" শিশু বাটিকা প্ৰমুখ নিযুক্তি দিছে/দিয়া নাই ।")
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("দিছে")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("দিয়া নাই")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "নিকেতন শিশু বাটিকা কোনটো ৰূপত আছে --- নমুনা ৰূপ/ প্ৰভাৱীৰূপ/পযত্নশীল ৰূপ "
        )
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("নমুনা ৰূপ")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("প্ৰভাৱীৰূপ")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("পযত্নশীল ৰূপ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(চ) কম্পিউটাৰ শিক্ষা ব্যবস্থা আছে/নাই ।")
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("আছে")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("নাই")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(" শিশু বাটিকা প্ৰমুখ নিযুক্তি দিছে/দিয়া নাই ")
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("দিছে ।")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("দিয়া নাই ।")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("যদি আছে কম্পিউটাৰ /লেপটপ (Laptop) কিমানতা")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("কম্পিউটাৰ বিষয়ৰ আচাৰ্য আছে/নাই ।")
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("আছে ।")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("নাই ।")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(ছ) অটল টিংকাৰিং প্ৰয়োগ শালাৰ (Atal Tinkering Labortory)\n        বাবে Atal Inovation Mission, Niti Ayogত আবেদন কৰিছেনে নাই?\n        ( ষষ্ঠ শ্ৰেণীৰ‍ পৰা দশম শ্ৰেণীলৈ মুঠ ৪০০\n        ছাত্ৰ-ছাত্ৰী থকা, ১৫০০বৰ্গ ফুট স্থানৰ নিকেতনৰ ক্ষেত্ৰত প্ৰযোজ্য )"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: " d-flex justify-content-center " }, [
      _c("h5", { staticClass: "mb-0 h5  " }, [
        _vm._v(
          "\n        বিদ্যা ভাৰতী অখিল ভাৰতীয় শিক্ষা সংস্থানৰ সংবদ্ধ\n    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-2 d-flex justify-content-center " }, [
      _c("h2", { staticClass: "mb-0  tit leCentre" }, [
        _vm._v("\n        শিশু শিক্ষা সমিতি, অসম\n    ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "mb-2 mt-2 d-flex justify-content-center " },
      [
        _c("h5", { staticClass: "mb-0 h5  " }, [
          _vm._v(
            "\n        ৰাধাগোবিন্দ বৰুৱা পথ, প্ৰশান্ত পথ, গুৱাহাটী - ৭৮১০২৮\n    "
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row justify-content-between" }, [
      _c("div", { staticClass: "col-4 mt-3" }, [
        _c("p", {}, [_vm._v(" আচাৰ্য/আচাৰ্যাৰ বিৱৰণ - ২০২০")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-2 col-4 row" }, [
        _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v(" নিকেতনৰ নাম")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control col  mr-2",
          attrs: { type: "text", placeholder: " " }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "table table-bordered" }, [
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("ক্ৰ: নং.")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "প্ৰধানাচাৰ্য, শিশু বাটিকা প্ৰমুখ আৰু বালিকা শিক্ষা প্ৰমুখৰ নাম ক্ৰমে লিখিব ।"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("জন্মৰ তাৰিখ আৰু ব্লাড গ্ৰুপ")]),
          _vm._v(" "),
          _c("td", [_vm._v("নিকেতনৰ যোগদানৰ তাৰিখ আৰু মোবাইল নং ")]),
          _vm._v(" "),
          _c("td", [_vm._v("ই-মেইল আই ডি")]),
          _vm._v(" "),
          _c("td", [_vm._v("হুৱাটছআপ নম্বৰ")]),
          _vm._v(" "),
          _c("td", [_vm._v("শিক্ষাগত অৰ্হতা ")]),
          _vm._v(" "),
          _c("td", [_vm._v("পাঠদান কৰা মূল বিষয় ")]),
          _vm._v(" "),
          _c("td", [_vm._v("৭ দিনীয়া")]),
          _vm._v(" "),
          _c("td", [_vm._v("১৫ দিনীয়া")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("১")]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(" ২")]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(" ৩")]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", { attrs: { colspan: "2" } }, [
            _vm._v("আধাৰভূত বিষয়ৰ আচৰ্য/আচাৰ্যাৰ নাম লিখিব")
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(" ৪")]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(" ৫")]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(" ৬")]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(" ৭ ")]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("৮")]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", { attrs: { colspan: "2" } }, [
            _vm._v("বিজ্ঞান বিষয়ৰ আচৰ্য/আচাৰ্যাৰ নাম লিখিব")
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("৯ ")]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("১০")]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(" ১১")]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(" ১২")]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", { attrs: { colspan: "2" } }, [
            _vm._v("আচৰ্য/আচাৰ্যাৰ আৰু অন্য কৰ্মচাৰীৰ নাম লিখিব")
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("১৩")]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(" ১৪")]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-row-reverse" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-primary", attrs: { type: "submit" } },
        [_vm._v("Next")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "table",
      { staticClass: "table table-responsive-md table-bordered" },
      [
        _c("tr", [
          _c("th", { staticClass: "mx-auto", attrs: { rowspan: "4" } }, [
            _vm._v(
              "\n            শিশু বাটিকাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা - ২০২০ বৰ্ষ ।\n          "
            )
          ]),
          _vm._v(" "),
          _c("th", [_vm._v("শিশু বাটিকা")]),
          _vm._v(" "),
          _c("th", [_vm._v(" অংকুৰ ")]),
          _vm._v(" "),
          _c("th", [_vm._v("মুকুল ")]),
          _vm._v(" "),
          _c("th", [_vm._v("মুঠ ")]),
          _vm._v(" "),
          _c("th", [_vm._v(" আচাৰ্য")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", [_vm._v("ছাত্র")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [_vm._v("আচাৰ্যা")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", [_vm._v("ছাত্ৰী")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [_vm._v("মুঠ")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", [_vm._v("মুঠ")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [_vm._v("অন্য কৰ্মচাৰী")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "table",
      { staticClass: "table table-responsive-md table-bordered" },
      [
        _c("tr", [
          _c("th", { attrs: { colspan: "3", rowspan: "4" } }, [
            _vm._v(
              "\n            নিম্ন প্ৰাথমিক শাখাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা, ২০২০ বৰ্ষ ।\n          "
            )
          ]),
          _vm._v(" "),
          _c("th", [_vm._v("শ্ৰেণী")]),
          _vm._v(" "),
          _c("th", [_vm._v(" ১ম")]),
          _vm._v(" "),
          _c("th", [_vm._v(" ২য় ")]),
          _vm._v(" "),
          _c("th", [_vm._v("৩য়")]),
          _vm._v(" "),
          _c("th", [_vm._v("৪ৰ্থ ")]),
          _vm._v(" "),
          _c("th", [_vm._v("৫ম")]),
          _vm._v(" "),
          _c("th", [_vm._v(" মুঠ")]),
          _vm._v(" "),
          _c("th", [_vm._v("আচাৰ্য")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", [_vm._v("ছাত্র")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [_vm._v("আচাৰ্যা")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", [_vm._v("ছাত্ৰী")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [_vm._v("মুঠ")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", [_vm._v("মুঠ")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [_vm._v("অন্য কৰ্মচাৰী")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-row-reverse" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-secondary", attrs: { type: "submit" } },
        [_vm._v("Back")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-row-reverse" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-primary", attrs: { type: "submit" } },
        [_vm._v("Next")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "table",
      { staticClass: "table table-responsive-md table-bordered" },
      [
        _c("tr", [
          _c("th", { attrs: { colspan: "3", rowspan: "4" } }, [
            _vm._v(
              "\n            উচ্চ প্ৰাথমিক শাখাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা, ২০২০ বৰ্ষ ।\n          "
            )
          ]),
          _vm._v(" "),
          _c("th", [_vm._v("শ্ৰেণী")]),
          _vm._v(" "),
          _c("th", [_vm._v("৬ষ্ঠ")]),
          _vm._v(" "),
          _c("th", [_vm._v("৭ম")]),
          _vm._v(" "),
          _c("th", [_vm._v("৮ম")]),
          _vm._v(" "),
          _c("th", [_vm._v("মুঠ")]),
          _vm._v(" "),
          _c("th", [_vm._v("আচাৰ্য")]),
          _vm._v(" "),
          _c("th")
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", [_vm._v("ছাত্র")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [_vm._v("আচাৰ্যা")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", [_vm._v("ছাত্ৰী")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [_vm._v(" মুঠ")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", [_vm._v(" মুঠ")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [_vm._v("অন্য কৰ্মচাৰী")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "table",
      { staticClass: "table table-responsive-md table-bordered" },
      [
        _c("tr", [
          _c("th", { staticClass: "mx-auto", attrs: { rowspan: "4" } }, [
            _vm._v(
              "\n            উচ্চ মাধ্যমিক শাখাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা, ২০২০ বৰ্ষ ।\n          "
            )
          ]),
          _vm._v(" "),
          _c("th", [_vm._v("শ্ৰেণী")]),
          _vm._v(" "),
          _c("th", [_vm._v("৯ম")]),
          _vm._v(" "),
          _c("th", [_vm._v("১০ম")]),
          _vm._v(" "),
          _c("th", [_vm._v("মুঠ")]),
          _vm._v(" "),
          _c("th", [_vm._v("আচাৰ্য")]),
          _vm._v(" "),
          _c("th")
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", [_vm._v(" ছাত্র ")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [_vm._v("আচাৰ্যা")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", [_vm._v("ছাত্ৰী")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [_vm._v(" মুঠ")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", [_vm._v(" মুঠ")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [_vm._v("অন্য কৰ্মচাৰী")]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-row-reverse" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-secondary", attrs: { type: "submit" } },
        [_vm._v("Back")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-row-reverse" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-primary", attrs: { type: "submit" } },
        [_vm._v("Next")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-bordered" }, [
      _c("div", { staticClass: "row mt-2" }, [
        _c("div", { staticClass: "form-group row col-md-4" }, [
          _c("label", { staticClass: "d-flex align-items-end" }, [
            _vm._v("চাৰিওটা শাখাৰ সৰ্বমুঠ :")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "ছাত্র " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group col-md-4" }, [
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "ছাত্ৰী" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group col-md-4" }, [
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "মুঠ" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex justify-content-end" }, [
        _c("div", { staticClass: "form-group col-md-3" }, [
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "আচাৰ্য" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group col-md-3" }, [
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "আচৰ্যা" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group col-md-3" }, [
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "মুঠ" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-2" }, [
        _c("div", { staticClass: "form-group row col-md-4" }, [
          _c("label", { staticClass: "d-flex align-items-end" }, [
            _vm._v("মুঠ অন্য কৰ্মচাৰী :")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", placeholder: " " }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row col-md-4" }, [
          _c("label", { staticClass: "d-flex align-items-end" }, [
            _vm._v("প্ৰতিটো শ্ৰেণীত ..:")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", placeholder: " " }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-2 row" }, [
        _c("div", { staticClass: "form-group row col-md-8" }, [
          _c("label", { staticClass: "d-flex align-items-end" }, [
            _vm._v(
              "প্ৰতিটো শ্ৰেণীত থকা বিশেষভাবে সক্ষম ছাত্র-ছাত্ৰীৰ মুঠ\n              সংখ্যা"
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", id: "inputPassword", placeholder: "ছাত্র" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group col-md-2" }, [
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "ছাত্ৰী" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group col-md-2" }, [
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "মুঠ" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("table", { staticClass: "table table-responsive-md mb0" }, [
        _c("tr", [
          _c("th", { attrs: { colspan: "3", rowspan: "4" } }, [
            _vm._v(
              "\n               নিকেতনৰ দ্বাৰা পৰিচালিত সংস্কাৰ কেন্দ্ৰ\n            "
            )
          ]),
          _vm._v(" "),
          _c("th", [_vm._v("সংখ্যা")]),
          _vm._v(" "),
          _c("th", [_vm._v("ছাত্র")]),
          _vm._v(" "),
          _c("th", [_vm._v("ছাত্ৰী")]),
          _vm._v(" "),
          _c("th", [_vm._v("মুঠ")]),
          _vm._v(" "),
          _c("th", [_vm._v("আচাৰ্য")]),
          _vm._v(" "),
          _c("th", [_vm._v("আচাৰ্যা")]),
          _vm._v(" "),
          _c("th", [_vm._v("মুঠ")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ]),
          _vm._v(" "),
          _c("th", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", value: " " }
            })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-row-reverse" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-secondary", attrs: { type: "submit" } },
        [_vm._v("Back")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-row-reverse" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-primary", attrs: { type: "submit" } },
        [_vm._v("Next")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "table",
      { staticClass: "table table-bordered table-responsive" },
      [
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v("মুঠ ছাত্র-ছাত্ৰীৰ ভিতৰত কিমান জন  ")]),
            _vm._v(" "),
            _c("td", [_vm._v("ছাত্র ")]),
            _vm._v(" "),
            _c("td", [_vm._v("ছাত্ৰী")]),
            _vm._v(" "),
            _c("td", [_vm._v("মুঠ")]),
            _vm._v(" "),
            _c("td", { attrs: { colspan: "4" } }, [
              _vm._v("অন্য ধর্মাবলম্বী ছাত্র-ছাত্ৰী কিমান জন")
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("(ক) অনুসূচীত জাতি (SC)")]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", value: " " }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", value: " " }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", value: " " }
              })
            ]),
            _vm._v(" "),
            _c("td", { attrs: { rowspan: "2" } }, [_vm._v("(ক) (মুছলমান)")]),
            _vm._v(" "),
            _c("td", [_c("p", [_vm._v("ছাত্র")])]),
            _vm._v(" "),
            _c("td", [_c("p", [_vm._v("ছাত্ৰী")])]),
            _vm._v(" "),
            _c("td", [_vm._v("মুঠ")])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("(খ) অনুসূচীত জনজাতি (ST) \n                ")]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", value: " " }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", value: " " }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", value: " " }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", value: " " }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", value: " " }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", value: " " }
              })
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("(গ) অন্যান্য পিছপৰা জাতি (OBC)")]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", value: " " }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", value: " " }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", value: " " }
              })
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("(খ) খ্ৰীষ্টান")]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", value: " " }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", value: " " }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", value: " " }
              })
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-row-reverse" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-secondary", attrs: { type: "submit" } },
        [_vm._v("Back")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-row-reverse" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-primary", attrs: { type: "submit" } },
        [_vm._v("Submit")]
      )
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

/***/ "./resources/js/ChannelSupervisor.js":
/*!*******************************************!*\
  !*** ./resources/js/ChannelSupervisor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component("channel-supervisor", __webpack_require__(/*! ./components/ChannelSupervisor.vue */ "./resources/js/components/ChannelSupervisor.vue")["default"]);
var element = document.getElementById("channel-supervisor");

if (typeof element != "undefined" && element != null) {
  var cart = new Vue({
    el: "#channel-supervisor"
  });
}

/***/ }),

/***/ "./resources/js/components/ChannelSupervisor.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/ChannelSupervisor.vue ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelSupervisor_vue_vue_type_template_id_6c60f470___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelSupervisor.vue?vue&type=template&id=6c60f470& */ "./resources/js/components/ChannelSupervisor.vue?vue&type=template&id=6c60f470&");
/* harmony import */ var _ChannelSupervisor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelSupervisor.vue?vue&type=script&lang=js& */ "./resources/js/components/ChannelSupervisor.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ChannelSupervisor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ChannelSupervisor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChannelSupervisor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChannelSupervisor_vue_vue_type_template_id_6c60f470___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChannelSupervisor_vue_vue_type_template_id_6c60f470___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ChannelSupervisor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ChannelSupervisor.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ChannelSupervisor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelSupervisor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelSupervisor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelSupervisor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelSupervisor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ChannelSupervisor.vue?vue&type=template&id=6c60f470&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/ChannelSupervisor.vue?vue&type=template&id=6c60f470& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelSupervisor_vue_vue_type_template_id_6c60f470___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelSupervisor.vue?vue&type=template&id=6c60f470& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelSupervisor.vue?vue&type=template&id=6c60f470&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelSupervisor_vue_vue_type_template_id_6c60f470___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelSupervisor_vue_vue_type_template_id_6c60f470___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 20:
/*!*************************************************!*\
  !*** multi ./resources/js/ChannelSupervisor.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\bridyc\resources\js\ChannelSupervisor.js */"./resources/js/ChannelSupervisor.js");


/***/ })

/******/ });