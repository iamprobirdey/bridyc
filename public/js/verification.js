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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Verification.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Verification.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      verificationStatus: false,
      placesData: [],
      userData: 0,
      languagesData: [],
      districtData: [],
      villageData: [],
      authData: {},
      formData: {
        state_id: "",
        district_id: "",
        village_id: "",
        language_id: "",
        title: "",
        udise: "",
        location: "",
        ownership: "",
        founded: "",
        pin: "",
        gender: ""
      },
      serverErrors: {
        state_id: "",
        district_id: "",
        village_id: "",
        language_id: "",
        title: "",
        udise: "",
        location: "",
        ownership: "",
        founded: "",
        pin: "",
        gender: ""
      },
      wait: false,
      todaysDate: ""
    };
  },
  props: {
    places: {
      type: Array,
      "default": null
    },
    user: {
      type: Object,
      "default": null
    },
    languages: {
      type: Array,
      "default": null
    },
    auth: {
      type: Object,
      "default": null
    },
    date: {
      type: String,
      "default": null
    }
  },
  computed: {
    districtStatusComputed: function districtStatusComputed() {
      var _this = this;

      if (this.formData.state_id != "") {
        this.districtData = [];
        this.placesData.filter(function (item) {
          if (item.id === _this.formData.state_id) {
            _this.districtData.push(item.district);
          }
        });
        return true;
      }

      return false;
    },
    villageStatusComputed: function villageStatusComputed() {
      var _this2 = this;

      if (this.formData.state_id != "" && this.formData.district_id != "") {
        this.villageData = [];
        this.districtData[0].filter(function (item) {
          if (item.id === _this2.formData.district_id) {
            _this2.villageData.push(item.village);
          }
        });
        return true;
      }

      return false;
    }
  },
  created: function created() {
    this.placesData = this.places;
    if (this.user != null) this.userData = this.user.status;
    if (this.userData === 1 || this.userData === 3) this.verificationStatus = true;
    this.languagesData = this.languages;
    this.authData = this.auth;
    this.getDate();
  },
  methods: {
    getDate: function getDate() {
      this.todaysDate = this.date;
    },
    validateForm: function validateForm() {
      var _this3 = this;

      this.wait = true;
      this.$validator.validate().then(function (result) {
        if (result) {
          axios.post("/api/verification", _this3.formData).then(function (response) {
            if (response.status === 200) {
              if (response.data.message === "Successful") {
                _this3.verificationStatus = true;
                _this3.userData = 1;
                Vue.toasted.success("Data is successfully submited", {
                  position: "top-center",
                  duration: 5000
                });
              }

              if (response.data.message === "failed") {
                _this3.wait = false;
                Vue.toasted.error("Something went wrong", {
                  position: "top-center",
                  duration: 5000
                });
              }
            }
          })["catch"](function (errors) {
            _this3.wait = false;
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000
            });

            if (errors.response.data.errors.state_id) {
              _this3.serverErrors.state_id = errors.response.data.errors.state_id[0];
            }

            if (errors.response.data.errors.district_id) {
              _this3.serverErrors.district_id = errors.response.data.errors.district_id[0];
            }

            if (errors.response.data.errors.village) {
              _this3.serverErrors.village = errors.response.data.errors.village[0];
            }

            if (errors.response.data.errors.language_id) {
              _this3.serverErrors.language_id = errors.response.data.errors.language_id[0];
            }

            if (errors.response.data.errors.title) {
              _this3.serverErrors.title = errors.response.data.errors.title[0];
            }

            if (errors.response.data.errors.udies) {
              _this3.serverErrors.udies = errors.response.data.errors.udies[0];
            }

            if (errors.response.data.errors.location) {
              _this3.serverErrors.location = errors.response.data.errors.location[0];
            }

            if (errors.response.data.errors.ownership) {
              _this3.serverErrors.ownership = errors.response.data.errors.ownership[0];
            }

            if (errors.response.data.errors.founded) {
              _this3.serverErrors.founded = errors.response.data.errors.founded[0];
            }

            if (errors.response.data.errors.pin) {
              _this3.serverErrors.pin = errors.response.data.errors.pin[0];
            }

            if (errors.response.data.errors.gender) {
              _this3.serverErrors.gender = errors.response.data.errors.gender[0];
            }
          });
        } else {
          _this3.wait = false;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Verification.vue?vue&type=template&id=ddca76f4&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Verification.vue?vue&type=template&id=ddca76f4& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    _vm.verificationStatus === true && _vm.userData === 1
      ? _c("div", [
          _c("h4", { staticClass: "text-center text-danger" }, [
            _vm._v("Your data is under verification")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-center text-success" }, [
            _vm._v(
              "\n      Once verified, you will have full access to your channel\n    "
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.userData === 3 && _vm.verificationStatus === true
      ? _c("div", [
          _c("h4", { staticClass: "text-center text-danger" }, [
            _vm._v(
              "\n      You are temporarily restricted from accessing the channel\n    "
            )
          ]),
          _vm._v(" "),
          _c("h6", { staticClass: "text-center text-success" }, [
            _vm._v("Please contact the admin")
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.verificationStatus === false
      ? _c("div", [
          _c("div", [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.validateForm()
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
                        _vm.errors.has("state") ||
                        _vm.serverErrors.state_id != ""
                    }
                  },
                  [
                    _c("label", [_vm._v("State")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formData.state_id,
                            expression: "formData.state_id"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "state" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.formData,
                              "state_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select State")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.placesData, function(state) {
                          return _c(
                            "option",
                            { key: state.id, domProps: { value: state.id } },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(state.name) +
                                  "\n            "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("i", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("state"),
                          expression: "errors.has('state')"
                        }
                      ],
                      staticClass: "is-invalid"
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("state"),
                            expression: "errors.has('state')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("state")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.state_id != "",
                            expression: "serverErrors.state_id != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.state_id))]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm.districtStatusComputed
                  ? _c(
                      "div",
                      {
                        staticClass: "form-group",
                        class: {
                          "has-error":
                            _vm.errors.has("district") ||
                            _vm.serverErrors.district_id != ""
                        }
                      },
                      [
                        _c("label", [_vm._v("District")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formData.district_id,
                                expression: "formData.district_id"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "district" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.formData,
                                  "district_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select district")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.districtData[0], function(district) {
                              return _c(
                                "option",
                                {
                                  key: district.id,
                                  domProps: { value: district.id }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(district.name) +
                                      "\n            "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("i", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("district"),
                              expression: "errors.has('district')"
                            }
                          ],
                          staticClass: "is-invalid"
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("district"),
                                expression: "errors.has('district')"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("district")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.serverErrors.district_id != "",
                                expression: "serverErrors.district_id != ''"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [_vm._v(_vm._s(_vm.serverErrors.district_id))]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.villageStatusComputed
                  ? _c(
                      "div",
                      {
                        staticClass: "form-group",
                        class: {
                          "has-error":
                            _vm.errors.has("village") ||
                            _vm.serverErrors.village_id != ""
                        }
                      },
                      [
                        _c("label", [_vm._v("Village")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formData.village_id,
                                expression: "formData.village_id"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "village" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.formData,
                                  "village_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select village")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.villageData[0], function(village) {
                              return _c(
                                "option",
                                {
                                  key: village.id,
                                  domProps: { value: village.id }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(village.name) +
                                      "\n            "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("i", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("village"),
                              expression: "errors.has('village')"
                            }
                          ],
                          staticClass: "is-invalid"
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("village"),
                                expression: "errors.has('village')"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("village")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.serverErrors.village_id != "",
                                expression: "serverErrors.village_id != ''"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [_vm._v(_vm._s(_vm.serverErrors.village_id))]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    class: {
                      "has-error":
                        _vm.errors.has("title") || _vm.serverErrors.title != ""
                    }
                  },
                  [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Institute Name")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formData.title,
                          expression: "formData.title"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|alpha_spaces",
                          expression: "'required|alpha_spaces'"
                        }
                      ],
                      class: {
                        "form-control": true,
                        "is-invalid": _vm.errors.has("title")
                      },
                      attrs: {
                        id: "title",
                        "data-vv-delay": "20",
                        name: "title",
                        type: "text",
                        placeholder: "Insert your institute name"
                      },
                      domProps: { value: _vm.formData.title },
                      on: {
                        focus: function($event) {
                          _vm.serverErrors.title = ""
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.formData, "title", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("i", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("title"),
                          expression: "errors.has('title')"
                        }
                      ],
                      staticClass: "is-invalid"
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("title"),
                            expression: "errors.has('title')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("title")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.title != "",
                            expression: "serverErrors.title != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.title))]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    class: {
                      "has-error":
                        _vm.errors.has("udise") || _vm.serverErrors.udise != ""
                    }
                  },
                  [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Udise Code")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formData.udise,
                          expression: "formData.udise"
                        }
                      ],
                      class: {
                        "form-control": true,
                        "is-invalid": _vm.errors.has("udise")
                      },
                      attrs: {
                        id: "udise",
                        "data-vv-delay": "20",
                        name: "udise",
                        type: "text",
                        placeholder: "Enter your institute udise code Optinal"
                      },
                      domProps: { value: _vm.formData.udise },
                      on: {
                        focus: function($event) {
                          _vm.serverErrors.udise = ""
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.formData, "udise", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("i", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("udise"),
                          expression: "errors.has('udise')"
                        }
                      ],
                      staticClass: "is-invalid"
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("udise"),
                            expression: "errors.has('udise')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("udise")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.udise != "",
                            expression: "serverErrors.udise != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.udise))]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    class: {
                      "has-error":
                        _vm.errors.has("location") ||
                        _vm.serverErrors.location != ""
                    }
                  },
                  [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Institute Location")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formData.location,
                          expression: "formData.location"
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
                        "is-invalid": _vm.errors.has("location")
                      },
                      attrs: {
                        id: "location",
                        "data-vv-delay": "20",
                        name: "location",
                        type: "text",
                        placeholder: "Insert your institute location"
                      },
                      domProps: { value: _vm.formData.location },
                      on: {
                        focus: function($event) {
                          _vm.serverErrors.location = ""
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formData,
                            "location",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("i", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("location"),
                          expression: "errors.has('location')"
                        }
                      ],
                      staticClass: "is-invalid"
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("location"),
                            expression: "errors.has('location')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("location")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.location != "",
                            expression: "serverErrors.location != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.location))]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    class: {
                      "has-error":
                        _vm.errors.has("ownership") ||
                        _vm.serverErrors.ownership != ""
                    }
                  },
                  [
                    _c("label", [_vm._v("Ownership")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formData.ownership,
                            expression: "formData.ownership"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "ownership" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.formData,
                              "ownership",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select ownership")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "private" } }, [
                          _vm._v("Private")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "government" } }, [
                          _vm._v("Government")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("i", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("ownership"),
                          expression: "errors.has('ownership')"
                        }
                      ],
                      staticClass: "is-invalid"
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("ownership"),
                            expression: "errors.has('ownership')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("ownership")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.ownership != "",
                            expression: "serverErrors.ownership != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.ownership))]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    class: {
                      "has-error":
                        _vm.errors.has("founded") ||
                        _vm.serverErrors.founded != ""
                    }
                  },
                  [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Institue Founded on")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formData.founded,
                          expression: "formData.founded"
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
                        "is-invalid": _vm.errors.has("founded")
                      },
                      attrs: {
                        id: "founded",
                        "data-vv-delay": "20",
                        name: "founded",
                        type: "date",
                        max: _vm.todaysDate,
                        placeholder: "founded"
                      },
                      domProps: { value: _vm.formData.founded },
                      on: {
                        focus: function($event) {
                          _vm.serverErrors.founded = ""
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.formData, "founded", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("i", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("founded"),
                          expression: "errors.has('founded')"
                        }
                      ],
                      staticClass: "is-invalid"
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("founded"),
                            expression: "errors.has('founded')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("founded")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.founded != "",
                            expression: "serverErrors.founded != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.founded))]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    class: {
                      "has-error":
                        _vm.errors.has("pin") || _vm.serverErrors.pin != ""
                    }
                  },
                  [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Pin Code")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formData.pin,
                          expression: "formData.pin"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric|min:6|max:6",
                          expression: "'required|numeric|min:6|max:6'"
                        }
                      ],
                      class: {
                        "form-control": true,
                        "is-invalid": _vm.errors.has("pin")
                      },
                      attrs: {
                        id: "text",
                        "data-vv-delay": "20",
                        name: "pin",
                        type: "text",
                        placeholder: "Insert your area pin code"
                      },
                      domProps: { value: _vm.formData.pin },
                      on: {
                        focus: function($event) {
                          _vm.serverErrors.pin = ""
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.formData, "pin", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("i", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("pin"),
                          expression: "errors.has('pin')"
                        }
                      ],
                      staticClass: "is-invalid"
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("pin"),
                            expression: "errors.has('pin')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("pin")))]
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
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    class: {
                      "has-error":
                        _vm.errors.has("gender") ||
                        _vm.serverErrors.gender != ""
                    }
                  },
                  [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Gender")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formData.gender,
                            expression: "formData.gender"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "gender" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.formData,
                              "gender",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select Gender")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "only_boys" } }, [
                          _vm._v("Only Boys")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "only_girls" } }, [
                          _vm._v("Only Girls")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "both" } }, [
                          _vm._v("Both Girls and boys")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("i", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("gender"),
                          expression: "errors.has('gender')"
                        }
                      ],
                      staticClass: "is-invalid"
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("gender"),
                            expression: "errors.has('gender')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("gender")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.gender != "",
                            expression: "serverErrors.gender != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.gender))]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    class: {
                      "has-error":
                        _vm.errors.has("language") ||
                        _vm.serverErrors.language_id != ""
                    }
                  },
                  [
                    _c("label", [_vm._v("Medium")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formData.language_id,
                            expression: "formData.language_id"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "language" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.formData,
                              "language_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select language")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.languages, function(language) {
                          return _c(
                            "option",
                            {
                              key: language.id,
                              domProps: { value: language.id }
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(language.name) +
                                  "\n            "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("i", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("language"),
                          expression: "errors.has('language')"
                        }
                      ],
                      staticClass: "is-invalid"
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("language"),
                            expression: "errors.has('language')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("language")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.language_id != "",
                            expression: "serverErrors.language_id != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.language_id))]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm.wait
                  ? _c(
                      "div",
                      {
                        staticClass: "spinner-border text-primary",
                        attrs: { role: "status" }
                      },
                      [
                        _c("span", { staticClass: "sr-only" }, [
                          _vm._v("Loading...")
                        ])
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.wait === false
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btnveri mt-3",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("\n          Submit\n        ")]
                    )
                  : _vm._e()
              ]
            )
          ])
        ])
      : _vm._e()
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

/***/ "./resources/js/components/Verification.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Verification.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Verification_vue_vue_type_template_id_ddca76f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Verification.vue?vue&type=template&id=ddca76f4& */ "./resources/js/components/Verification.vue?vue&type=template&id=ddca76f4&");
/* harmony import */ var _Verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Verification.vue?vue&type=script&lang=js& */ "./resources/js/components/Verification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Verification_vue_vue_type_template_id_ddca76f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Verification_vue_vue_type_template_id_ddca76f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Verification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Verification.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Verification.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Verification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Verification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Verification.vue?vue&type=template&id=ddca76f4&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Verification.vue?vue&type=template&id=ddca76f4& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Verification_vue_vue_type_template_id_ddca76f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Verification.vue?vue&type=template&id=ddca76f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Verification.vue?vue&type=template&id=ddca76f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Verification_vue_vue_type_template_id_ddca76f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Verification_vue_vue_type_template_id_ddca76f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/verification.js":
/*!**************************************!*\
  !*** ./resources/js/verification.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component("verification", __webpack_require__(/*! ./components/Verification.vue */ "./resources/js/components/Verification.vue")["default"]);
var element = document.getElementById("verification");

if (typeof element != "undefined" && element != null) {
  var cart = new Vue({
    el: "#verification"
  });
}

/***/ }),

/***/ 1:
/*!********************************************!*\
  !*** multi ./resources/js/verification.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\bridyc\resources\js\verification.js */"./resources/js/verification.js");


/***/ })

/******/ });