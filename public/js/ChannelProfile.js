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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelProfile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChannelProfile.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      channelProfileData: [],
      genderVissionChecker: true,
      profileData: {
        'gender': '',
        'vission': ''
      },
      qualificationData: {
        'school_name': '',
        'degree': '',
        'field_of_study': '',
        'start_date': '',
        'end_date': '',
        'grade': '',
        'activities_and_sociaties': '',
        'description': ''
      },
      profileError: {
        'gender': '',
        'vission': ''
      },
      qualificationError: {
        'school_name': '',
        'degree': '',
        'field_of_study': '',
        'start_date': '',
        'end_date': '',
        'grade': '',
        'activities_and_sociaties': '',
        'description': ''
      },
      domainUrl: location.origin,
      educationPath: '',
      qualificationEditDataId: '',
      qualificationEditIndex: ''
    };
  },
  props: {
    user: {
      type: Object,
      "default": null
    }
  },
  created: function created() {
    this.channelProfileData = this.user;
    if (this.channelProfileData.gender == null) this.genderVissionChecker = false;
  },
  mounted: function mounted() {},
  methods: {
    getFormData: function getFormData() {
      var _this = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          axios.post(_this.domainUrl + '/user/dashboard/api/gender/vission', _this.profileData).then(function (response) {
            if (response.data.message === true) {
              Vue.toasted.success("Profile is updated", {
                position: "top-center",
                duration: 5000
              });
              _this.channelProfileData.gender = _this.profileData.gender;
              _this.channelProfileData.vission = _this.profileData.vission;
              _this.genderVissionChecker = true;
            }
          })["catch"](function (errors) {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000
            });

            if (errors.response.data.errors.gender) {
              _this.profileError.gender = errors.response.data.errors.gender[0];
            }

            if (errors.response.data.errors.vission) {
              _this.profileError.vission = errors.response.data.errors.vission[0];
            }
          });
        }
      });
    },
    getQualificationData: function getQualificationData() {
      var _this2 = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          axios.post(_this2.educationPath, _this2.qualificationData).then(function (response) {
            if (response.data.message) {
              if (_this2.qualificationEditDataId == '') {
                _this2.channelProfileData.education.push(_this2.qualificationData);
              } else {
                //this.channelProfileData.education.splice(this.qualificationEditIndex,1,response.data.user);
                _this2.channelProfileData.education.$set(_this2.qualificationEditIndex, response.data.user);
              }
            }

            $('#addEducation').modal('hide');
          })["catch"](function (errors) {
            if (errors.response.data.errors.school_name) {
              _this2.qualificationError.school_name = errors.response.data.errors.school_name[0];
            }

            if (errors.response.data.errors.degree) {
              _this2.qualificationError.degree = errors.response.data.errors.degree[0];
            }

            if (errors.response.data.errors.field_of_study) {
              _this2.qualificationError.field_of_study = errors.response.data.errors.field_of_study[0];
            }

            if (errors.response.data.errors.start_date) {
              _this2.qualificationError.start_date = errors.response.data.errors.start_date[0];
            }

            if (errors.response.data.errors.end_date) {
              _this2.qualificationError.end_date = errors.response.data.errors.end_date[0];
            }

            if (errors.response.data.errors.grade) {
              _this2.qualificationError.grade = errors.response.data.errors.grade[0];
            }

            if (errors.response.data.errors.activities_and_sociaties) {
              _this2.qualificationError.activities_and_sociaties = errors.response.data.errors.activities_and_sociaties[0];
            }

            if (errors.response.data.errors.description) {
              _this2.qualificationError.description = errors.response.data.errors.description[0];
            }
          });
        }
      });
    },
    goBack: function goBack() {
      this.genderVissionChecker = true;
    },
    editGenderAndVission: function editGenderAndVission() {
      this.profileData.gender = this.channelProfileData.gender;
      this.profileData.vission = this.channelProfileData.vission;
      this.genderVissionChecker = false;
    },
    addEducation: function addEducation() {
      this.educationPath = '';
      this.educationPath = this.domainUrl + '/user/dashboard/api/add/education';
      this.qualificationEditDataId = '';
      this.emptyEducationForm();
      $('#addEducation').modal('show');
    },
    editTheEducation: function editTheEducation(education, index) {
      this.qualificationData.school_name = education.school_name;
      this.qualificationData.degree = education.degree;
      this.qualificationData.field_of_study = education.field_of_study;
      this.qualificationData.start_date = education.start_date;
      this.qualificationData.end_date = education.end_date;
      this.qualificationData.grade = education.grade;
      this.qualificationData.activities_and_sociaties = education.activities_and_sociaties;
      this.qualificationData.description = education.description;
      this.qualificationEditDataId = education.id;
      this.educationPath = '';
      this.educationPath = this.domainUrl + '/user/dashboard/api/add/education/edit/' + education.id;
      this.qualificationEditIndex = index;
      $('#addEducation').modal('show');
    },
    emptyEducationForm: function emptyEducationForm() {
      this.qualificationData.school_name = '';
      this.qualificationData.degree = '';
      this.qualificationData.field_of_study = '';
      this.qualificationData.start_date = '';
      this.qualificationData.end_date = '';
      this.qualificationData.grade = '';
      this.qualificationData.activities_and_sociaties = '';
      this.qualificationData.description = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelProfile.vue?vue&type=template&id=4eea195e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChannelProfile.vue?vue&type=template&id=4eea195e& ***!
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
  return _c("div", [
    _c("h2", [_vm._v("Principal's Profile")]),
    _vm._v(" "),
    _vm.genderVissionChecker
      ? _c("div", [
          _c(
            "button",
            {
              staticClass: "btn-primary",
              on: {
                click: function($event) {
                  return _vm.editGenderAndVission()
                }
              }
            },
            [_vm._v("Edit")]
          ),
          _vm._v(" "),
          _c("p", [_vm._v(_vm._s(_vm.channelProfileData.gender))]),
          _vm._v(" "),
          _c("p", [_vm._v(_vm._s(_vm.channelProfileData.vission))])
        ])
      : _vm._e(),
    _vm._v(" "),
    !_vm.genderVissionChecker
      ? _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.getFormData()
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
                    _vm.errors.has("profileError") || _vm.profileError != ""
                }
              },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-sm-2 col-form-label",
                    attrs: { for: "exampleInputEmail1" }
                  },
                  [_vm._v("Gender")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.profileData.gender,
                        expression: "profileData.gender"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control col-sm-10",
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
                          _vm.profileData,
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
                      _vm._v("Select your gender")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "male" } }, [
                      _vm._v("Male")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "female" } }, [
                      _vm._v("Female")
                    ])
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
                        value: _vm.errors.has("gender"),
                        expression: "errors.has('gender')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [
                    _vm._v(
                      "\n      " + _vm._s(_vm.errors.first("gender")) + "\n    "
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
                        value: _vm.profileError != "",
                        expression: "profileError != ''"
                      }
                    ],
                    staticClass: "help is-danger"
                  },
                  [
                    _vm._v(
                      "\n      " + _vm._s(_vm.profileError.gender) + "\n    "
                    )
                  ]
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
                    _vm.errors.has("vission") || _vm.profileError.vission != ""
                }
              },
              [
                _c("label", [_vm._v("Vission")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.profileData.vission,
                      expression: "profileData.vission"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "col-sm-10",
                  class: {
                    "form-control": true,
                    "is-invalid": _vm.errors.has("vission")
                  },
                  attrs: {
                    "data-vv-delay": "20",
                    name: "vission",
                    type: "text",
                    placeholder: "Vission"
                  },
                  domProps: { value: _vm.profileData.vission },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.profileData, "vission", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("i", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("vission"),
                      expression: "errors.has('vission')"
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
                        value: _vm.errors.has("vission"),
                        expression: "errors.has('vission')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("vission")))]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.profileError.vission != "",
                        expression: "profileError.vission != ''"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.profileError.vission))]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-success",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.goBack()
                  }
                }
              },
              [_vm._v("Go Back")]
            ),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn-primary", attrs: { type: "submit" } },
              [_vm._v("Submit")]
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("h2", [_vm._v("\n    More Details\n")]),
    _vm._v(" "),
    _c(
      "ul",
      _vm._l(_vm.channelProfileData.education, function(education, index) {
        return _c("li", { key: education.id }, [
          _c("span", [
            _vm._v(
              "\n            School name: " +
                _vm._s(education.school_name) +
                "\n            Degree : " +
                _vm._s(education.degree) +
                "\n            Field of study : " +
                _vm._s(education.field_of_study) +
                "\n            Start Date : " +
                _vm._s(education.start_date) +
                "\n            End Date : " +
                _vm._s(education.end_date) +
                "\n            Grade : " +
                _vm._s(education.grade) +
                "\n            Activity and Sociaty : " +
                _vm._s(education.activities_and_sociaties) +
                "\n            Description : " +
                _vm._s(education.description) +
                "\n        "
            )
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn-secondary",
              on: {
                click: function($event) {
                  return _vm.editTheEducation(education, index)
                }
              }
            },
            [_vm._v("edit")]
          )
        ])
      }),
      0
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "btn-primary",
        on: {
          click: function($event) {
            return _vm.addEducation()
          }
        }
      },
      [_vm._v("+")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "addEducation",
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
                        return _vm.getQualificationData()
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
                            _vm.errors.has("school_name") ||
                            _vm.qualificationError.school_name != ""
                        }
                      },
                      [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("School name")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.qualificationData.school_name,
                              expression: "qualificationData.school_name"
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
                            "is-invalid": _vm.errors.has("school_name")
                          },
                          attrs: {
                            "data-vv-delay": "20",
                            name: "school_name",
                            type: "text",
                            placeholder: "Your school name"
                          },
                          domProps: {
                            value: _vm.qualificationData.school_name
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.qualificationData,
                                "school_name",
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
                              value: _vm.errors.has("class"),
                              expression: "errors.has('class')"
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
                                value: _vm.errors.has("school_name"),
                                expression: "errors.has('school_name')"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("school_name")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.qualificationError.school_name != "",
                                expression:
                                  "qualificationError.school_name != ''"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [_vm._v(_vm._s(_vm.qualificationError.school_name))]
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
                            _vm.errors.has("field_of_study") ||
                            _vm.qualificationError.field_of_study != ""
                        }
                      },
                      [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Field of study")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.qualificationData.field_of_study,
                              expression: "qualificationData.field_of_study"
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
                            "is-invalid": _vm.errors.has("field_of_study")
                          },
                          attrs: {
                            "data-vv-delay": "20",
                            name: "field_of_study",
                            type: "text",
                            placeholder: "Field of study"
                          },
                          domProps: {
                            value: _vm.qualificationData.field_of_study
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.qualificationData,
                                "field_of_study",
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
                              value: _vm.errors.has("class"),
                              expression: "errors.has('class')"
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
                                value: _vm.errors.has("field_of_study"),
                                expression: "errors.has('field_of_study')"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("field_of_study")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value:
                                  _vm.qualificationError.field_of_study != "",
                                expression:
                                  "qualificationError.field_of_study != ''"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.qualificationError.field_of_study)
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
                            _vm.errors.has("degree") ||
                            _vm.qualificationError.degree != ""
                        }
                      },
                      [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Degree")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.qualificationData.degree,
                              expression: "qualificationData.degree"
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
                            "is-invalid": _vm.errors.has("degree")
                          },
                          attrs: {
                            "data-vv-delay": "20",
                            name: "degree",
                            type: "text",
                            placeholder: "Degree"
                          },
                          domProps: { value: _vm.qualificationData.degree },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.qualificationData,
                                "degree",
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
                              value: _vm.errors.has("class"),
                              expression: "errors.has('class')"
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
                                value: _vm.errors.has("degree"),
                                expression: "errors.has('degree')"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("degree")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.qualificationError.degree != "",
                                expression: "qualificationError.degree != ''"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [_vm._v(_vm._s(_vm.qualificationError.degree))]
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
                            _vm.errors.has("start_date") ||
                            _vm.qualificationError.start_date != ""
                        }
                      },
                      [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Start date")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.qualificationData.start_date,
                              expression: "qualificationData.start_date"
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
                            "is-invalid": _vm.errors.has("start_date")
                          },
                          attrs: {
                            "data-vv-delay": "20",
                            name: "start_date",
                            type: "date",
                            placeholder: "Start Date"
                          },
                          domProps: { value: _vm.qualificationData.start_date },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.qualificationData,
                                "start_date",
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
                              value: _vm.errors.has("class"),
                              expression: "errors.has('class')"
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
                                value: _vm.errors.has("start_date"),
                                expression: "errors.has('start_date')"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("start_date")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.qualificationError.start_date != "",
                                expression:
                                  "qualificationError.start_date != ''"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [_vm._v(_vm._s(_vm.qualificationError.start_date))]
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
                            _vm.errors.has("end_date") ||
                            _vm.qualificationError.end_date != ""
                        }
                      },
                      [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("End date")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.qualificationData.end_date,
                              expression: "qualificationData.end_date"
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
                            "is-invalid": _vm.errors.has("end_date")
                          },
                          attrs: {
                            "data-vv-delay": "20",
                            name: "end_date",
                            type: "date",
                            placeholder: "End Date"
                          },
                          domProps: { value: _vm.qualificationData.end_date },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.qualificationData,
                                "end_date",
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
                              value: _vm.errors.has("class"),
                              expression: "errors.has('class')"
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
                                value: _vm.errors.has("end_date"),
                                expression: "errors.has('end_date')"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("end_date")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.qualificationError.end_date != "",
                                expression: "qualificationError.end_date != ''"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [_vm._v(_vm._s(_vm.qualificationError.end_date))]
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
                            _vm.errors.has("grade") ||
                            _vm.qualificationError.grade != ""
                        }
                      },
                      [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Grade")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.qualificationData.grade,
                              expression: "qualificationData.grade"
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
                            "is-invalid": _vm.errors.has("grade")
                          },
                          attrs: {
                            "data-vv-delay": "20",
                            name: "grade",
                            type: "text",
                            placeholder: "Grade"
                          },
                          domProps: { value: _vm.qualificationData.grade },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.qualificationData,
                                "grade",
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
                              value: _vm.errors.has("class"),
                              expression: "errors.has('class')"
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
                                value: _vm.errors.has("grade"),
                                expression: "errors.has('grade')"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("grade")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.qualificationError.grade != "",
                                expression: "qualificationError.grade != ''"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [_vm._v(_vm._s(_vm.qualificationError.grade))]
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
                            _vm.errors.has("activities_and_sociaties") ||
                            _vm.qualificationError.activities_and_sociaties !=
                              ""
                        }
                      },
                      [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Activity and Sociaties")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value:
                                _vm.qualificationData.activities_and_sociaties,
                              expression:
                                "qualificationData.activities_and_sociaties"
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
                            "is-invalid": _vm.errors.has(
                              "activities_and_sociaties"
                            )
                          },
                          attrs: {
                            "data-vv-delay": "20",
                            name: "activities_and_sociaties",
                            type: "text",
                            placeholder: "Activity and Sociaty"
                          },
                          domProps: {
                            value:
                              _vm.qualificationData.activities_and_sociaties
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.qualificationData,
                                "activities_and_sociaties",
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
                              value: _vm.errors.has("class"),
                              expression: "errors.has('class')"
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
                                value: _vm.errors.has(
                                  "activities_and_sociaties"
                                ),
                                expression:
                                  "errors.has('activities_and_sociaties')"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.errors.first("activities_and_sociaties")
                              )
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
                                value:
                                  _vm.qualificationError
                                    .activities_and_sociaties != "",
                                expression:
                                  "qualificationError.activities_and_sociaties != ''"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.qualificationError.activities_and_sociaties
                              )
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
                            _vm.errors.has("description") ||
                            _vm.qualificationError.description != ""
                        }
                      },
                      [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Description")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.qualificationData.description,
                              expression: "qualificationData.description"
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
                            "is-invalid": _vm.errors.has("description")
                          },
                          attrs: {
                            "data-vv-delay": "20",
                            name: "description",
                            type: "text",
                            placeholder: "Description"
                          },
                          domProps: {
                            value: _vm.qualificationData.description
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.qualificationData,
                                "description",
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
                              value: _vm.errors.has("class"),
                              expression: "errors.has('class')"
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
                                value: _vm.errors.has("description"),
                                expression: "errors.has('description')"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("description")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.qualificationError.description != "",
                                expression:
                                  "qualificationError.description != ''"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [_vm._v(_vm._s(_vm.qualificationError.description))]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Submit")]
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
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Add Education")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
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

/***/ "./resources/js/ChannelProfile.js":
/*!****************************************!*\
  !*** ./resources/js/ChannelProfile.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component("channel-profile", __webpack_require__(/*! ./components/ChannelProfile.vue */ "./resources/js/components/ChannelProfile.vue")["default"]);
var element = document.getElementById("channel-profile");

if (typeof element != "undefined" && element != null) {
  var cart = new Vue({
    el: "#channel-profile"
  });
}

/***/ }),

/***/ "./resources/js/components/ChannelProfile.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/ChannelProfile.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelProfile_vue_vue_type_template_id_4eea195e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelProfile.vue?vue&type=template&id=4eea195e& */ "./resources/js/components/ChannelProfile.vue?vue&type=template&id=4eea195e&");
/* harmony import */ var _ChannelProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelProfile.vue?vue&type=script&lang=js& */ "./resources/js/components/ChannelProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChannelProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChannelProfile_vue_vue_type_template_id_4eea195e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChannelProfile_vue_vue_type_template_id_4eea195e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ChannelProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ChannelProfile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/ChannelProfile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ChannelProfile.vue?vue&type=template&id=4eea195e&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ChannelProfile.vue?vue&type=template&id=4eea195e& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelProfile_vue_vue_type_template_id_4eea195e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelProfile.vue?vue&type=template&id=4eea195e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelProfile.vue?vue&type=template&id=4eea195e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelProfile_vue_vue_type_template_id_4eea195e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelProfile_vue_vue_type_template_id_4eea195e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 11:
/*!**********************************************!*\
  !*** multi ./resources/js/ChannelProfile.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\bridyc\resources\js\ChannelProfile.js */"./resources/js/ChannelProfile.js");


/***/ })

/******/ });