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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      wait: false,
      formData: {
        new_or_present: "",
        name: "",
        date: "",
        age: "",
        gender: "",
        blood: "",
        father_name: "",
        father_occupation: "",
        father_phone: "",
        mother_name: "",
        mother_occupation: "",
        mother_phone: "",
        permanent_address: "",
        present_address: "",
        mother_tongue: "",
        community: "",
        religion: "",
        social_category: "",
        nationality: "",
        previous_school: "",
        bus_facility: "",
        hostel_facility: "",
        previous_percentage: "",
        class_sought_of: ""
      },
      serverErrors: {
        new_or_present: "",
        name: "",
        age: "",
        date: "",
        gender: "",
        blood: "",
        father_name: "",
        father_occupation: "",
        father_phone: "",
        mother_name: "",
        mother_occupation: "",
        mother_phone: "",
        permanent_address: "",
        present_address: "",
        mother_tongue: "",
        community: "",
        religion: "",
        social_category: "",
        nationality: "",
        previous_school: "",
        bus_facility: "",
        hostel_facility: "",
        previous_percentage: "",
        class_sought_of: ""
      }
    };
  },
  mounted: function mounted() {
    console.log("Application");
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application.vue?vue&type=template&id=bf784f96&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application.vue?vue&type=template&id=bf784f96& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    _c("h1", [_vm._v("Application")]),
    _vm._v(" "),
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
                _vm.errors.has("new_or_present") ||
                _vm.serverErrors.new_or_present != ""
            }
          },
          [
            _c("label", [_vm._v("Bus Facility")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formData.new_or_present,
                    expression: "formData.new_or_present"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control",
                attrs: { name: "new_or_present" },
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
                      "new_or_present",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [
                  _vm._v("Select your choice")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "new_adminssion" } }, [
                  _vm._v("New Admission")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "present" } }, [
                  _vm._v("Present Re-Admission")
                ])
              ]
            ),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("new_or_present"),
                  expression: "errors.has('new_or_present')"
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
                    value: _vm.errors.has("new_or_present"),
                    expression: "errors.has('new_or_present')"
                  }
                ],
                staticClass: "text-danger"
              },
              [
                _vm._v(
                  "\n        " + _vm._s(_vm.errors.first("new_or_present"))
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.new_or_present != "",
                    expression: "serverErrors.new_or_present != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.serverErrors.new_or_present) +
                    "\n      "
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "form-group",
            class: {
              "has-error": _vm.errors.has("name") || _vm.serverErrors.name != ""
            }
          },
          [
            _c("label", [_vm._v("Student Name")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.name,
                  expression: "formData.name"
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
                "is-invalid": _vm.errors.has("name")
              },
              attrs: {
                id: "name",
                "data-vv-delay": "20",
                name: "name",
                type: "text",
                placeholder: "Student Name"
              },
              domProps: { value: _vm.formData.name },
              on: {
                focus: function($event) {
                  _vm.serverErrors.name = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "name", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("name"),
                  expression: "errors.has('name')"
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
                    value: _vm.errors.has("name"),
                    expression: "errors.has('name')"
                  }
                ],
                staticClass: "text-danger"
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
                    value: _vm.serverErrors.name != "",
                    expression: "serverErrors.name != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.name))]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "form-group",
            class: {
              "has-error": _vm.errors.has("date") || _vm.serverErrors.date != ""
            }
          },
          [
            _c("label", [_vm._v("Date of Birth")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.date,
                  expression: "formData.date"
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
                "is-invalid": _vm.errors.has("date")
              },
              attrs: {
                id: "date",
                "data-vv-delay": "20",
                name: "date",
                type: "date",
                placeholder: "date"
              },
              domProps: { value: _vm.formData.date },
              on: {
                focus: function($event) {
                  _vm.serverErrors.date = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "date", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("date"),
                  expression: "errors.has('date')"
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
                    value: _vm.errors.has("date"),
                    expression: "errors.has('date')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("date")))]
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
            staticClass: "form-group",
            class: {
              "has-error": _vm.errors.has("age") || _vm.serverErrors.age != ""
            }
          },
          [
            _c("label", [_vm._v("Student Age")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.age,
                  expression: "formData.age"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|numeric",
                  expression: "'required|numeric'"
                }
              ],
              class: {
                "form-control": true,
                "is-invalid": _vm.errors.has("age")
              },
              attrs: {
                id: "age",
                "data-vv-delay": "20",
                name: "age",
                type: "number",
                placeholder: "Student Age"
              },
              domProps: { value: _vm.formData.age },
              on: {
                focus: function($event) {
                  _vm.serverErrors.age = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "age", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("age"),
                  expression: "errors.has('age')"
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
                    value: _vm.errors.has("age"),
                    expression: "errors.has('age')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("age")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.age != "",
                    expression: "serverErrors.age != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.age))]
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
                _vm.errors.has("blood") || _vm.serverErrors.blood != ""
            }
          },
          [
            _c("label", [_vm._v("Student Blood Group")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.blood,
                  expression: "formData.blood"
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
                "is-invalid": _vm.errors.has("blood")
              },
              attrs: {
                id: "blood",
                "data-vv-delay": "20",
                name: "blood",
                type: "text",
                placeholder: "Student Name"
              },
              domProps: { value: _vm.formData.blood },
              on: {
                focus: function($event) {
                  _vm.serverErrors.blood = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "blood", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("blood"),
                  expression: "errors.has('blood')"
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
                    value: _vm.errors.has("blood"),
                    expression: "errors.has('blood')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("blood")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.blood != "",
                    expression: "serverErrors.blood != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.blood))]
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
                _vm.errors.has("father_name") ||
                _vm.serverErrors.father_name != ""
            }
          },
          [
            _c("label", [_vm._v("Father Name")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.father_name,
                  expression: "formData.father_name"
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
                "is-invalid": _vm.errors.has("father_name")
              },
              attrs: {
                id: "father_name",
                "data-vv-delay": "20",
                name: "father_name",
                type: "text",
                placeholder: "Father Name"
              },
              domProps: { value: _vm.formData.father_name },
              on: {
                focus: function($event) {
                  _vm.serverErrors.father_name = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "father_name", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("father_name"),
                  expression: "errors.has('father_name')"
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
                    value: _vm.errors.has("father_name"),
                    expression: "errors.has('father_name')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("father_name")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.father_name != "",
                    expression: "serverErrors.father_name != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.father_name))]
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
                _vm.errors.has("father_occupation") ||
                _vm.serverErrors.father_occupation != ""
            }
          },
          [
            _c("label", [_vm._v("Father Occupation")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.father_occupation,
                  expression: "formData.father_occupation"
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
                "is-invalid": _vm.errors.has("father_occupation")
              },
              attrs: {
                id: "father_occupation",
                "data-vv-delay": "20",
                name: "father_occupation",
                type: "text",
                placeholder: "Father Occupation"
              },
              domProps: { value: _vm.formData.father_occupation },
              on: {
                focus: function($event) {
                  _vm.serverErrors.father_occupation = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.formData,
                    "father_occupation",
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
                  value: _vm.errors.has("father_occupation"),
                  expression: "errors.has('father_occupation')"
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
                    value: _vm.errors.has("father_occupation"),
                    expression: "errors.has('father_occupation')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("father_occupation")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.father_occupation != "",
                    expression: "serverErrors.father_occupation != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.father_occupation))]
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
                _vm.errors.has("father_phone") ||
                _vm.serverErrors.father_phone != ""
            }
          },
          [
            _c("label", [_vm._v("Father Phone Number")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.father_phone,
                  expression: "formData.father_phone"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|numeric|min:10|max:10",
                  expression: "'required|numeric|min:10|max:10'"
                }
              ],
              class: {
                "form-control": true,
                "is-invalid": _vm.errors.has("father_phone")
              },
              attrs: {
                id: "father_phone",
                "data-vv-delay": "20",
                name: "father_phone",
                type: "number",
                placeholder: "Father Phone Number"
              },
              domProps: { value: _vm.formData.father_phone },
              on: {
                focus: function($event) {
                  _vm.serverErrors.father_phone = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "father_phone", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("father_phone"),
                  expression: "errors.has('father_phone')"
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
                    value: _vm.errors.has("father_phone"),
                    expression: "errors.has('father_phone')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("father_phone")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.father_phone != "",
                    expression: "serverErrors.father_phone != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.father_phone))]
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
                _vm.errors.has("mother_name") ||
                _vm.serverErrors.mother_name != ""
            }
          },
          [
            _c("label", [_vm._v("Mother Name")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.mother_name,
                  expression: "formData.mother_name"
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
                "is-invalid": _vm.errors.has("mother_name")
              },
              attrs: {
                id: "mother_name",
                "data-vv-delay": "20",
                name: "mother_name",
                type: "text",
                placeholder: "Mother Name"
              },
              domProps: { value: _vm.formData.mother_name },
              on: {
                focus: function($event) {
                  _vm.serverErrors.mother_name = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "mother_name", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("mother_name"),
                  expression: "errors.has('mother_name')"
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
                    value: _vm.errors.has("mother_name"),
                    expression: "errors.has('mother_name')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("mother_name")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.mother_name != "",
                    expression: "serverErrors.mother_name != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.mother_name))]
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
                _vm.errors.has("mother_occupation") ||
                _vm.serverErrors.mother_occupation != ""
            }
          },
          [
            _c("label", [_vm._v("Mother Occupation")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.mother_occupation,
                  expression: "formData.mother_occupation"
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
                "is-invalid": _vm.errors.has("mother_occupation")
              },
              attrs: {
                id: "mother_occupation",
                "data-vv-delay": "20",
                name: "mother_occupation",
                type: "text",
                placeholder: "Mother Occupation"
              },
              domProps: { value: _vm.formData.mother_occupation },
              on: {
                focus: function($event) {
                  _vm.serverErrors.mother_occupation = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.formData,
                    "mother_occupation",
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
                  value: _vm.errors.has("mother_occupation"),
                  expression: "errors.has('mother_occupation')"
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
                    value: _vm.errors.has("mother_occupation"),
                    expression: "errors.has('mother_occupation')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("mother_occupation")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.mother_occupation != "",
                    expression: "serverErrors.mother_occupation != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.mother_occupation))]
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
                _vm.errors.has("mother_phone") ||
                _vm.serverErrors.mother_phone != ""
            }
          },
          [
            _c("label", [_vm._v("Mother Phone Number")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.mother_phone,
                  expression: "formData.mother_phone"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|numeric|min:10|max:10",
                  expression: "'required|numeric|min:10|max:10'"
                }
              ],
              class: {
                "form-control": true,
                "is-invalid": _vm.errors.has("mother_phone")
              },
              attrs: {
                id: "mother_phone",
                "data-vv-delay": "20",
                name: "mother_phone",
                type: "number",
                placeholder: "Mother Phone Number"
              },
              domProps: { value: _vm.formData.mother_phone },
              on: {
                focus: function($event) {
                  _vm.serverErrors.mother_phone = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "mother_phone", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("mother_phone"),
                  expression: "errors.has('mother_phone')"
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
                    value: _vm.errors.has("mother_phone"),
                    expression: "errors.has('mother_phone')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("mother_phone")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.mother_phone != "",
                    expression: "serverErrors.mother_phone != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.mother_phone))]
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
                _vm.errors.has("permanent_address") ||
                _vm.serverErrors.permanent_address != ""
            }
          },
          [
            _c("label", [_vm._v("Permanent Address")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.permanent_address,
                  expression: "formData.permanent_address"
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
                "is-invalid": _vm.errors.has("permanent_address")
              },
              attrs: {
                id: "permanent_address",
                "data-vv-delay": "20",
                name: "permanent_address",
                type: "text",
                placeholder: "Permanent Address"
              },
              domProps: { value: _vm.formData.permanent_address },
              on: {
                focus: function($event) {
                  _vm.serverErrors.permanent_address = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.formData,
                    "permanent_address",
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
                  value: _vm.errors.has("permanent_address"),
                  expression: "errors.has('permanent_address')"
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
                    value: _vm.errors.has("permanent_address"),
                    expression: "errors.has('permanent_address')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("permanent_address")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.permanent_address != "",
                    expression: "serverErrors.permanent_address != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.permanent_address))]
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
                _vm.errors.has("permanent_address") ||
                _vm.serverErrors.permanent_address != ""
            }
          },
          [
            _c("label", [_vm._v("Permanent Address")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.permanent_address,
                  expression: "formData.permanent_address"
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
                "is-invalid": _vm.errors.has("permanent_address")
              },
              attrs: {
                id: "permanent_address",
                "data-vv-delay": "20",
                name: "permanent_address",
                type: "text",
                placeholder: "Permanent Address"
              },
              domProps: { value: _vm.formData.permanent_address },
              on: {
                focus: function($event) {
                  _vm.serverErrors.permanent_address = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.formData,
                    "permanent_address",
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
                  value: _vm.errors.has("permanent_address"),
                  expression: "errors.has('permanent_address')"
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
                    value: _vm.errors.has("permanent_address"),
                    expression: "errors.has('permanent_address')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("permanent_address")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.permanent_address != "",
                    expression: "serverErrors.permanent_address != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.permanent_address))]
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
                _vm.errors.has("present_address") ||
                _vm.serverErrors.present_address != ""
            }
          },
          [
            _c("label", [_vm._v("Present Address")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.present_address,
                  expression: "formData.present_address"
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
                "is-invalid": _vm.errors.has("present_address")
              },
              attrs: {
                id: "present_address",
                "data-vv-delay": "20",
                name: "present_address",
                type: "text",
                placeholder: "Present Address"
              },
              domProps: { value: _vm.formData.present_address },
              on: {
                focus: function($event) {
                  _vm.serverErrors.present_address = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "present_address", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("present_address"),
                  expression: "errors.has('present_address')"
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
                    value: _vm.errors.has("present_address"),
                    expression: "errors.has('present_address')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("present_address")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.present_address != "",
                    expression: "serverErrors.present_address != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.present_address))]
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
                _vm.errors.has("mother_tongue") ||
                _vm.serverErrors.mother_tongue != ""
            }
          },
          [
            _c("label", [_vm._v("Mother Tongue")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.mother_tongue,
                  expression: "formData.mother_tongue"
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
                "is-invalid": _vm.errors.has("mother_tongue")
              },
              attrs: {
                id: "mother_tongue",
                "data-vv-delay": "20",
                name: "mother_tongue",
                type: "text",
                placeholder: "Mother Tongue"
              },
              domProps: { value: _vm.formData.mother_tongue },
              on: {
                focus: function($event) {
                  _vm.serverErrors.mother_tongue = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "mother_tongue", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("mother_tongue"),
                  expression: "errors.has('mother_tongue')"
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
                    value: _vm.errors.has("mother_tongue"),
                    expression: "errors.has('mother_tongue')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("mother_tongue")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.mother_tongue != "",
                    expression: "serverErrors.mother_tongue != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.mother_tongue))]
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
                _vm.errors.has("community") || _vm.serverErrors.community != ""
            }
          },
          [
            _c("label", [_vm._v("Community")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.community,
                  expression: "formData.community"
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
                "is-invalid": _vm.errors.has("community")
              },
              attrs: {
                id: "community",
                "data-vv-delay": "20",
                name: "community",
                type: "text",
                placeholder: "Community"
              },
              domProps: { value: _vm.formData.community },
              on: {
                focus: function($event) {
                  _vm.serverErrors.community = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "community", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("community"),
                  expression: "errors.has('community')"
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
                    value: _vm.errors.has("community"),
                    expression: "errors.has('community')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("community")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.community != "",
                    expression: "serverErrors.community != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.community))]
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
                _vm.errors.has("community") || _vm.serverErrors.community != ""
            }
          },
          [
            _c("label", [_vm._v("Community")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.community,
                  expression: "formData.community"
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
                "is-invalid": _vm.errors.has("community")
              },
              attrs: {
                id: "community",
                "data-vv-delay": "20",
                name: "community",
                type: "text",
                placeholder: "Community"
              },
              domProps: { value: _vm.formData.community },
              on: {
                focus: function($event) {
                  _vm.serverErrors.community = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "community", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("community"),
                  expression: "errors.has('community')"
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
                    value: _vm.errors.has("community"),
                    expression: "errors.has('community')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("community")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.community != "",
                    expression: "serverErrors.community != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.community))]
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
                _vm.errors.has("religion") || _vm.serverErrors.religion != ""
            }
          },
          [
            _c("label", [_vm._v("Religoin")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.religion,
                  expression: "formData.religion"
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
                "is-invalid": _vm.errors.has("religion")
              },
              attrs: {
                id: "religion",
                "data-vv-delay": "20",
                name: "religion",
                type: "text",
                placeholder: "Religoin"
              },
              domProps: { value: _vm.formData.religion },
              on: {
                focus: function($event) {
                  _vm.serverErrors.religion = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "religion", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("religion"),
                  expression: "errors.has('religion')"
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
                    value: _vm.errors.has("religion"),
                    expression: "errors.has('religion')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("religion")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.religion != "",
                    expression: "serverErrors.religion != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.religion))]
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
                _vm.errors.has("religion") || _vm.serverErrors.religion != ""
            }
          },
          [
            _c("label", [_vm._v("Religion")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.religion,
                  expression: "formData.religion"
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
                "is-invalid": _vm.errors.has("religion")
              },
              attrs: {
                id: "religion",
                "data-vv-delay": "20",
                name: "religion",
                type: "text",
                placeholder: "Religion"
              },
              domProps: { value: _vm.formData.religion },
              on: {
                focus: function($event) {
                  _vm.serverErrors.religion = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "religion", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("religion"),
                  expression: "errors.has('religion')"
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
                    value: _vm.errors.has("religion"),
                    expression: "errors.has('religion')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("religion")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.religion != "",
                    expression: "serverErrors.religion != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.religion))]
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
                _vm.errors.has("social_category") ||
                _vm.serverErrors.social_category != ""
            }
          },
          [
            _c("label", [_vm._v("Social Category")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.social_category,
                  expression: "formData.social_category"
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
                "is-invalid": _vm.errors.has("social_category")
              },
              attrs: {
                id: "social_category",
                "data-vv-delay": "20",
                name: "social_category",
                type: "text",
                placeholder: "Social Category"
              },
              domProps: { value: _vm.formData.social_category },
              on: {
                focus: function($event) {
                  _vm.serverErrors.social_category = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "social_category", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("social_category"),
                  expression: "errors.has('social_category')"
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
                    value: _vm.errors.has("social_category"),
                    expression: "errors.has('social_category')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("social_category")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.social_category != "",
                    expression: "serverErrors.social_category != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.social_category))]
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
                _vm.errors.has("nationality") ||
                _vm.serverErrors.nationality != ""
            }
          },
          [
            _c("label", [_vm._v("Nationality")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.nationality,
                  expression: "formData.nationality"
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
                "is-invalid": _vm.errors.has("nationality")
              },
              attrs: {
                id: "nationality",
                "data-vv-delay": "20",
                name: "nationality",
                type: "text",
                placeholder: "Nationality"
              },
              domProps: { value: _vm.formData.nationality },
              on: {
                focus: function($event) {
                  _vm.serverErrors.nationality = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "nationality", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("nationality"),
                  expression: "errors.has('nationality')"
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
                    value: _vm.errors.has("nationality"),
                    expression: "errors.has('nationality')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("nationality")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.nationality != "",
                    expression: "serverErrors.nationality != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.nationality))]
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
                _vm.errors.has("previous_school") ||
                _vm.serverErrors.previous_school != ""
            }
          },
          [
            _c("label", [_vm._v("Previous School")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.previous_school,
                  expression: "formData.previous_school"
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
                "is-invalid": _vm.errors.has("previous_school")
              },
              attrs: {
                id: "previous_school",
                "data-vv-delay": "20",
                name: "previous_school",
                type: "text",
                placeholder: "Previous School"
              },
              domProps: { value: _vm.formData.previous_school },
              on: {
                focus: function($event) {
                  _vm.serverErrors.previous_school = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "previous_school", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("previous_school"),
                  expression: "errors.has('previous_school')"
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
                    value: _vm.errors.has("previous_school"),
                    expression: "errors.has('previous_school')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("previous_school")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.previous_school != "",
                    expression: "serverErrors.previous_school != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.previous_school))]
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
                _vm.errors.has("bus_facility") ||
                _vm.serverErrors.bus_facility != ""
            }
          },
          [
            _c("label", [_vm._v("Bus Facility")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formData.bus_facility,
                    expression: "formData.bus_facility"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control",
                attrs: { name: "bus_facility" },
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
                      "bus_facility",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [
                  _vm._v("Select your choice")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "yes" } }, [
                  _vm._v("Bus Service Needed")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "no" } }, [_vm._v("Not Needed")])
              ]
            ),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("bus_facility"),
                  expression: "errors.has('bus_facility')"
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
                    value: _vm.errors.has("bus_facility"),
                    expression: "errors.has('bus_facility')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v("\n        " + _vm._s(_vm.errors.first("bus_facility")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.bus_facility != "",
                    expression: "serverErrors.bus_facility != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.serverErrors.bus_facility) +
                    "\n      "
                )
              ]
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
                _vm.errors.has("hostel_facility") ||
                _vm.serverErrors.hostel_facility != ""
            }
          },
          [
            _c("label", [_vm._v("Bus Facility")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formData.hostel_facility,
                    expression: "formData.hostel_facility"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control",
                attrs: { name: "hostel_facility" },
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
                      "hostel_facility",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [
                  _vm._v("Select your choice")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "yes" } }, [
                  _vm._v("Hostel Service Needed")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "no" } }, [_vm._v("Not Needed")])
              ]
            ),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("hostel_facility"),
                  expression: "errors.has('hostel_facility')"
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
                    value: _vm.errors.has("hostel_facility"),
                    expression: "errors.has('hostel_facility')"
                  }
                ],
                staticClass: "text-danger"
              },
              [
                _vm._v(
                  "\n        " + _vm._s(_vm.errors.first("hostel_facility"))
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.hostel_facility != "",
                    expression: "serverErrors.hostel_facility != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.serverErrors.hostel_facility) +
                    "\n      "
                )
              ]
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
                _vm.errors.has("physical_handicapped") ||
                _vm.serverErrors.physical_handicapped != ""
            }
          },
          [
            _c("label", [_vm._v("Bus Facility")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formData.physical_handicapped,
                    expression: "formData.physical_handicapped"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control",
                attrs: { name: "physical_handicapped" },
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
                      "physical_handicapped",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [
                  _vm._v("Select your choice")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "yes" } }, [_vm._v("Yes")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "no" } }, [_vm._v("No")])
              ]
            ),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("physical_handicapped"),
                  expression: "errors.has('physical_handicapped')"
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
                    value: _vm.errors.has("physical_handicapped"),
                    expression: "errors.has('physical_handicapped')"
                  }
                ],
                staticClass: "text-danger"
              },
              [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.errors.first("physical_handicapped"))
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.physical_handicapped != "",
                    expression: "serverErrors.physical_handicapped != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.serverErrors.physical_handicapped) +
                    "\n      "
                )
              ]
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
                _vm.errors.has("previous_percentage") ||
                _vm.serverErrors.previous_percentage != ""
            }
          },
          [
            _c("label", [_vm._v("Previous Percentage")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.previous_percentage,
                  expression: "formData.previous_percentage"
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
                "is-invalid": _vm.errors.has("previous_percentage")
              },
              attrs: {
                id: "previous_percentage",
                "data-vv-delay": "20",
                name: "previous_percentage",
                type: "text",
                placeholder: "Previous Percentage"
              },
              domProps: { value: _vm.formData.previous_percentage },
              on: {
                focus: function($event) {
                  _vm.serverErrors.previous_percentage = ""
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.formData,
                    "previous_percentage",
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
                  value: _vm.errors.has("previous_percentage"),
                  expression: "errors.has('previous_percentage')"
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
                    value: _vm.errors.has("previous_percentage"),
                    expression: "errors.has('previous_percentage')"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("previous_percentage")))]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverErrors.previous_percentage != "",
                    expression: "serverErrors.previous_percentage != ''"
                  }
                ],
                staticClass: "text-danger"
              },
              [_vm._v(_vm._s(_vm.serverErrors.previous_percentage))]
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
              [_c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.wait === false
          ? _c(
              "button",
              { staticClass: "btn btn-primary", attrs: { type: "submit" } },
              [_vm._v("\n      Submit\n    ")]
            )
          : _vm._e()
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

/***/ "./resources/js/application.js":
/*!*************************************!*\
  !*** ./resources/js/application.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component("application", __webpack_require__(/*! ./components/Application.vue */ "./resources/js/components/Application.vue")["default"]);
var element = document.getElementById("application");

if (typeof element != "undefined" && element != null) {
  var cart = new Vue({
    el: "#application"
  });
}

/***/ }),

/***/ "./resources/js/components/Application.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Application.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Application_vue_vue_type_template_id_bf784f96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Application.vue?vue&type=template&id=bf784f96& */ "./resources/js/components/Application.vue?vue&type=template&id=bf784f96&");
/* harmony import */ var _Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Application.vue?vue&type=script&lang=js& */ "./resources/js/components/Application.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Application_vue_vue_type_template_id_bf784f96___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Application_vue_vue_type_template_id_bf784f96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Application.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Application.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Application.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Application.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Application.vue?vue&type=template&id=bf784f96&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Application.vue?vue&type=template&id=bf784f96& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_bf784f96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Application.vue?vue&type=template&id=bf784f96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application.vue?vue&type=template&id=bf784f96&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_bf784f96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_bf784f96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 24:
/*!*******************************************!*\
  !*** multi ./resources/js/application.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/probir/Documents/Probir/Project_bckup/Project/Bridyc stuff/bridyc/resources/js/application.js */"./resources/js/application.js");


/***/ })

/******/ });