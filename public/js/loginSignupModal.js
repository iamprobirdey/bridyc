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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loginSignupModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/loginSignupModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      registerFormData: {
        name: '',
        email: '',
        phone: '',
        password: '',
        user_type: 'student'
      },
      loginFormData: {
        email: '',
        password: '',
        remmeber: ''
      },
      serverRegisterError: {
        name: '',
        email: '',
        phone: '',
        password: ''
      },
      serverLoginError: {
        email: '',
        password: ''
      },
      checkbox: '',
      password: 'password',
      domainUrl: location.href,
      loginCheckbox: ''
    };
  },
  mounted: function mounted() {},
  methods: {
    validateRegisterForm: function validateRegisterForm() {
      var _this = this;

      axios.post('register', this.registerFormData).then(function (response) {
        console.log(response);

        if (response.data.auth) {
          location.reload();
        }

        if (response.data.status === 201) {
          console.log(response.data);
        }
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }

        return Promise.reject(error.response);
        Vue.toasted.error("Something went wrong", {
          position: "top-center",
          duration: 5000
        });

        if (errors.response.data.errors.name) {
          _this.serverRegisterError.name = errors.response.data.errors.name[0];
        }

        if (errors.response.data.errors.email) {
          _this.serverRegisterError.email = errors.response.data.errors.email[0];
        }

        if (errors.response.data.errors.phone) {
          _this.serverRegisterError.phone = errors.response.data.errors.phone[0];
        }

        if (errors.response.data.errors.password) {
          _this.serverRegisterError.password = errors.response.data.errors.password[0];
        }
      });
    },
    validateLoginForm: function validateLoginForm() {
      var _this2 = this;

      axios.post('login', this.loginFormData).then(function (response) {
        if (response.data.status === 'success' && response.data.message === true) {
          location.href = location.origin + response.data.route;
        }

        if (response.data.status === 'failed') {
          Vue.toasted.error(response.data.message, {
            position: "top-center",
            duration: 5000
          });
        }
      })["catch"](function (errors) {
        Vue.toasted.error("Something went wrong", {
          position: "top-center",
          duration: 5000
        });

        if (errors.response.data.errors.email) {
          _this2.serverLoginError.email = errors.response.data.errors.email[0];
        }

        if (errors.response.data.errors.password) {
          _this2.serverLoginError.password = errors.response.data.errors.password[0];
        }
      });
    },
    checkBox: function checkBox() {
      this.password = this.checkbox === true ? 'text' : 'password';
    },
    loginCheckBox: function loginCheckBox() {
      this.loginFormData.checkbox = this.loginCheckbox === true ? 'on' : '';
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loginSignupModal.vue?vue&type=template&id=24178d97&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/loginSignupModal.vue?vue&type=template&id=24178d97& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "modal-body row p-0" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-7" }, [
        _c(
          "button",
          {
            staticClass: "close mr-3 mt-3 bigclose",
            attrs: { type: "button", "data-dismiss": "modal" }
          },
          [_vm._v("×")]
        ),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("div", { staticClass: "signup", attrs: { id: "mysignup" } }, [
          _vm._m(1),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "form",
            {
              staticClass: "px-5",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.validateRegisterForm()
                }
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.registerFormData.name,
                    expression: "registerFormData.name"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "iplognsign form-control shadow-none",
                class: {
                  "form-control": true,
                  "is-invalid": _vm.errors.has("name")
                },
                attrs: {
                  id: "name",
                  "data-vv-delay": "20",
                  name: "name",
                  type: "text",
                  placeholder: "name"
                },
                domProps: { value: _vm.registerFormData.name },
                on: {
                  focus: function($event) {
                    _vm.serverRegisterError.name = ""
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.registerFormData, "name", $event.target.value)
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
                      value: _vm.serverRegisterError.name != "",
                      expression: "serverRegisterError.name != ''"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [_vm._v(_vm._s(_vm.serverRegisterError.name))]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.registerFormData.email,
                    expression: "registerFormData.email"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required|email",
                    expression: "'required|email'"
                  }
                ],
                staticClass: "iplognsign form-control shadow-none",
                class: {
                  "form-control": true,
                  "is-invalid": _vm.errors.has("email")
                },
                attrs: {
                  id: "email",
                  "data-vv-delay": "20",
                  name: "emailR",
                  type: "text",
                  placeholder: "email"
                },
                domProps: { value: _vm.registerFormData.email },
                on: {
                  focus: function($event) {
                    _vm.serverRegisterError.email = ""
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.registerFormData, "email", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("i", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("email"),
                    expression: "errors.has('email')"
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
                      value: _vm.errors.has("email"),
                      expression: "errors.has('email')"
                    }
                  ],
                  staticClass: "text-danger"
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
                      value: _vm.serverRegisterError.email != "",
                      expression: "serverRegisterError.email != ''"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [_vm._v(_vm._s(_vm.serverRegisterError.email))]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.registerFormData.phone,
                    expression: "registerFormData.phone"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required|numeric|min:10|max:10",
                    expression: "'required|numeric|min:10|max:10'"
                  }
                ],
                staticClass: "iplognsign form-control shadow-none",
                class: {
                  "form-control": true,
                  "is-invalid": _vm.errors.has("phone")
                },
                attrs: {
                  id: "phone",
                  "data-vv-delay": "20",
                  name: "phone",
                  type: "text",
                  placeholder: "phone"
                },
                domProps: { value: _vm.registerFormData.phone },
                on: {
                  focus: function($event) {
                    _vm.serverRegisterError.phone = ""
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.registerFormData, "phone", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("i", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("phone"),
                    expression: "errors.has('phone')"
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
                      value: _vm.errors.has("phone"),
                      expression: "errors.has('phone')"
                    }
                  ],
                  staticClass: "text-danger"
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
                      value: _vm.serverRegisterError.phone != "",
                      expression: "serverRegisterError.phone != ''"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [_vm._v(_vm._s(_vm.serverRegisterError.phone))]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _vm.password === "checkbox"
                ? _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.registerFormData.password,
                        expression: "registerFormData.password"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "iplognsign form-control shadow-none",
                    class: {
                      "form-control": true,
                      "is-invalid": _vm.errors.has("password")
                    },
                    attrs: {
                      id: "password",
                      "data-vv-delay": "20",
                      name: "passwordR",
                      placeholder: "password",
                      type: "checkbox"
                    },
                    domProps: {
                      checked: Array.isArray(_vm.registerFormData.password)
                        ? _vm._i(_vm.registerFormData.password, null) > -1
                        : _vm.registerFormData.password
                    },
                    on: {
                      focus: function($event) {
                        _vm.serverRegisterError.password = ""
                      },
                      change: function($event) {
                        var $$a = _vm.registerFormData.password,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.registerFormData,
                                "password",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.registerFormData,
                                "password",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.registerFormData, "password", $$c)
                        }
                      }
                    }
                  })
                : _vm.password === "radio"
                ? _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.registerFormData.password,
                        expression: "registerFormData.password"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "iplognsign form-control shadow-none",
                    class: {
                      "form-control": true,
                      "is-invalid": _vm.errors.has("password")
                    },
                    attrs: {
                      id: "password",
                      "data-vv-delay": "20",
                      name: "passwordR",
                      placeholder: "password",
                      type: "radio"
                    },
                    domProps: {
                      checked: _vm._q(_vm.registerFormData.password, null)
                    },
                    on: {
                      focus: function($event) {
                        _vm.serverRegisterError.password = ""
                      },
                      change: function($event) {
                        return _vm.$set(_vm.registerFormData, "password", null)
                      }
                    }
                  })
                : _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.registerFormData.password,
                        expression: "registerFormData.password"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "iplognsign form-control shadow-none",
                    class: {
                      "form-control": true,
                      "is-invalid": _vm.errors.has("password")
                    },
                    attrs: {
                      id: "password",
                      "data-vv-delay": "20",
                      name: "passwordR",
                      placeholder: "password",
                      type: _vm.password
                    },
                    domProps: { value: _vm.registerFormData.password },
                    on: {
                      focus: function($event) {
                        _vm.serverRegisterError.password = ""
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.registerFormData,
                          "password",
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
                    value: _vm.errors.has("password"),
                    expression: "errors.has('password')"
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
                      value: _vm.errors.has("password"),
                      expression: "errors.has('password')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [_vm._v(_vm._s(_vm.errors.first("password")))]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.serverRegisterError.password != "",
                      expression: "serverRegisterError.password != ''"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [_vm._v(_vm._s(_vm.serverRegisterError.password))]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.checkbox,
                    expression: "checkbox"
                  }
                ],
                attrs: { type: "checkbox", name: "checkbox" },
                domProps: {
                  checked: Array.isArray(_vm.checkbox)
                    ? _vm._i(_vm.checkbox, null) > -1
                    : _vm.checkbox
                },
                on: {
                  change: [
                    function($event) {
                      var $$a = _vm.checkbox,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && (_vm.checkbox = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.checkbox = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.checkbox = $$c
                      }
                    },
                    function($event) {
                      return _vm.checkBox()
                    }
                  ]
                }
              }),
              _vm._v(" show password\n                "),
              _vm._m(2),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btnlognsign", attrs: { type: "submit" } },
                [_vm._v("Sign Up")]
              )
            ]
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _vm._m(3)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "login", attrs: { id: "mylogin" } }, [
          _vm._m(4),
          _vm._v(" "),
          _c(
            "form",
            {
              staticClass: "px-5 mb-3",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.validateLoginForm()
                }
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.loginFormData.email,
                    expression: "loginFormData.email"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required|email",
                    expression: "'required|email'"
                  }
                ],
                staticClass: "iplognsign form-control shadow-none",
                class: {
                  "form-control": true,
                  "is-invalid": _vm.errors.has("email")
                },
                attrs: {
                  id: "email",
                  "data-vv-delay": "20",
                  name: "email",
                  type: "text",
                  placeholder: "email"
                },
                domProps: { value: _vm.loginFormData.email },
                on: {
                  focus: function($event) {
                    _vm.serverLoginError.email = ""
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.loginFormData, "email", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("i", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("email"),
                    expression: "errors.has('email')"
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
                      value: _vm.errors.has("email"),
                      expression: "errors.has('email')"
                    }
                  ],
                  staticClass: "text-danger"
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
                      value: _vm.serverLoginError.email != "",
                      expression: "serverLoginError.email != ''"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [_vm._v(_vm._s(_vm.serverLoginError.email))]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _vm.password === "checkbox"
                ? _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.loginFormData.password,
                        expression: "loginFormData.password"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "iplognsign form-control shadow-none",
                    class: {
                      "form-control": true,
                      "is-invalid": _vm.errors.has("password")
                    },
                    attrs: {
                      id: "password",
                      "data-vv-delay": "20",
                      name: "password",
                      placeholder: "password",
                      type: "checkbox"
                    },
                    domProps: {
                      checked: Array.isArray(_vm.loginFormData.password)
                        ? _vm._i(_vm.loginFormData.password, null) > -1
                        : _vm.loginFormData.password
                    },
                    on: {
                      focus: function($event) {
                        _vm.serverLoginError.password = ""
                      },
                      change: function($event) {
                        var $$a = _vm.loginFormData.password,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.loginFormData,
                                "password",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.loginFormData,
                                "password",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.loginFormData, "password", $$c)
                        }
                      }
                    }
                  })
                : _vm.password === "radio"
                ? _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.loginFormData.password,
                        expression: "loginFormData.password"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "iplognsign form-control shadow-none",
                    class: {
                      "form-control": true,
                      "is-invalid": _vm.errors.has("password")
                    },
                    attrs: {
                      id: "password",
                      "data-vv-delay": "20",
                      name: "password",
                      placeholder: "password",
                      type: "radio"
                    },
                    domProps: {
                      checked: _vm._q(_vm.loginFormData.password, null)
                    },
                    on: {
                      focus: function($event) {
                        _vm.serverLoginError.password = ""
                      },
                      change: function($event) {
                        return _vm.$set(_vm.loginFormData, "password", null)
                      }
                    }
                  })
                : _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.loginFormData.password,
                        expression: "loginFormData.password"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "iplognsign form-control shadow-none",
                    class: {
                      "form-control": true,
                      "is-invalid": _vm.errors.has("password")
                    },
                    attrs: {
                      id: "password",
                      "data-vv-delay": "20",
                      name: "password",
                      placeholder: "password",
                      type: _vm.password
                    },
                    domProps: { value: _vm.loginFormData.password },
                    on: {
                      focus: function($event) {
                        _vm.serverLoginError.password = ""
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.loginFormData,
                          "password",
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
                    value: _vm.errors.has("password"),
                    expression: "errors.has('password')"
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
                      value: _vm.errors.has("password"),
                      expression: "errors.has('password')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [_vm._v(_vm._s(_vm.errors.first("password")))]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.serverLoginError.password != "",
                      expression: "serverLoginError.password != ''"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [_vm._v(_vm._s(_vm.serverLoginError.password))]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.loginCheckbox,
                    expression: "loginCheckbox"
                  }
                ],
                attrs: { type: "checkbox", name: "checkbox" },
                domProps: {
                  checked: Array.isArray(_vm.loginCheckbox)
                    ? _vm._i(_vm.loginCheckbox, null) > -1
                    : _vm.loginCheckbox
                },
                on: {
                  change: [
                    function($event) {
                      var $$a = _vm.loginCheckbox,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && (_vm.loginCheckbox = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.loginCheckbox = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.loginCheckbox = $$c
                      }
                    },
                    function($event) {
                      return _vm.loginCheckBox()
                    }
                  ]
                }
              }),
              _vm._v(" Remember Password\n                "),
              _c("br"),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.checkbox,
                    expression: "checkbox"
                  }
                ],
                attrs: { type: "checkbox", name: "checkbox" },
                domProps: {
                  checked: Array.isArray(_vm.checkbox)
                    ? _vm._i(_vm.checkbox, null) > -1
                    : _vm.checkbox
                },
                on: {
                  change: [
                    function($event) {
                      var $$a = _vm.checkbox,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && (_vm.checkbox = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.checkbox = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.checkbox = $$c
                      }
                    },
                    function($event) {
                      return _vm.checkBox()
                    }
                  ]
                }
              }),
              _vm._v(" show password\n            "),
              _c(
                "button",
                { staticClass: "btn btnlognsign", attrs: { type: "submit" } },
                [_vm._v("Log In")]
              )
            ]
          ),
          _vm._v(" "),
          _vm._m(5)
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-5 regBen" }, [
      _c(
        "button",
        {
          staticClass: "close mr-3 mt-3 smallclose",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("×")]
      ),
      _vm._v(" "),
      _c("div", [
        _c("img", {
          staticClass: "regformlogo",
          attrs: { src: "/images/circle-bridyc.png", alt: "bridyc logo" }
        })
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "If you are a student or a parent, sign up here! You will be able to apply for different schools,colleges or take part in\n        various educational and fun activities from time to time."
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "If you are an institute and wants to partner with us. Please contact us or call us at +91-9435285795 / +91-9476844478 "
        )
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "haveanaccount",
          attrs: { href: "javascript::void(0)" }
        },
        [_vm._v("Have An Account")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "regheader" }, [
      _c("h2", [_vm._v("Welcome to Bridyc.com")]),
      _vm._v(" "),
      _c("h6", [_vm._v("Signup to continue")]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("a", { staticClass: "fbsignup", attrs: { href: "#" } }, [
        _c("i", {
          staticClass: "fa fa-facebook-official",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" Sign up with Facebook")
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("h6", [_vm._v("OR")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("By continuing, you agree with Bridyc's "),
      _c("a", { attrs: { href: "/terms" } }, [_vm._v("Terms and Conditions")]),
      _vm._v(" and "),
      _c("a", { attrs: { href: "/privacy" } }, [_vm._v("Privacy Policy")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "mx-5 haveaccount" }, [
      _vm._v("Already have an Account?"),
      _c("a", { attrs: { href: "javascript::void(0)" } }, [_vm._v(" Log In")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logheader" }, [
      _c("h2", [_vm._v("Hey, Good to see you back!")]),
      _vm._v(" "),
      _c("h6", [_vm._v("Login to continue")]),
      _vm._v(" "),
      _c("br")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "mx-5" }, [
      _vm._v("New to bridyc? "),
      _c("a", { staticClass: "newuser", attrs: { href: "#" } }, [
        _vm._v("Sign Up")
      ])
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

/***/ "./resources/js/components/loginSignupModal.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/loginSignupModal.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loginSignupModal_vue_vue_type_template_id_24178d97___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginSignupModal.vue?vue&type=template&id=24178d97& */ "./resources/js/components/loginSignupModal.vue?vue&type=template&id=24178d97&");
/* harmony import */ var _loginSignupModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginSignupModal.vue?vue&type=script&lang=js& */ "./resources/js/components/loginSignupModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _loginSignupModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _loginSignupModal_vue_vue_type_template_id_24178d97___WEBPACK_IMPORTED_MODULE_0__["render"],
  _loginSignupModal_vue_vue_type_template_id_24178d97___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/loginSignupModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/loginSignupModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/loginSignupModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loginSignupModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./loginSignupModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loginSignupModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loginSignupModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/loginSignupModal.vue?vue&type=template&id=24178d97&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/loginSignupModal.vue?vue&type=template&id=24178d97& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loginSignupModal_vue_vue_type_template_id_24178d97___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./loginSignupModal.vue?vue&type=template&id=24178d97& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/loginSignupModal.vue?vue&type=template&id=24178d97&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loginSignupModal_vue_vue_type_template_id_24178d97___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loginSignupModal_vue_vue_type_template_id_24178d97___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/loginSignupModal.js":
/*!******************************************!*\
  !*** ./resources/js/loginSignupModal.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component("login-signup-model", __webpack_require__(/*! ./components/loginSignupModal.vue */ "./resources/js/components/loginSignupModal.vue")["default"]);
var element = document.getElementById("login-signup-model");

if (typeof element != "undefined" && element != null) {
  var cart = new Vue({
    el: "#login-signup-model"
  });
}

/***/ }),

/***/ 9:
/*!************************************************!*\
  !*** multi ./resources/js/loginSignupModal.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\bridyc\resources\js\loginSignupModal.js */"./resources/js/loginSignupModal.js");


/***/ })

/******/ });
=======
!function(e){var r={};function s(a){if(r[a])return r[a].exports;var o=r[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=r,s.d=function(e,r,a){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)s.d(a,o,function(r){return e[r]}.bind(null,o));return a},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="/",s(s.s=9)}({"19GL":function(e,r,s){Vue.component("login-signup-model",s("tslG").default);var a=document.getElementById("login-signup-model");if(void 0!==a&&null!=a)new Vue({el:"#login-signup-model"})},9:function(e,r,s){e.exports=s("19GL")},"KHd+":function(e,r,s){"use strict";function a(e,r,s,a,o,t,i,n){var l,c="function"==typeof e?e.options:e;if(r&&(c.render=r,c.staticRenderFns=s,c._compiled=!0),a&&(c.functional=!0),t&&(c._scopeId="data-v-"+t),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):o&&(l=n?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,r){return l.call(r),d(e,r)}}else{var v=c.beforeCreate;c.beforeCreate=v?[].concat(v,l):[l]}return{exports:e,options:c}}s.d(r,"a",(function(){return a}))},tslG:function(e,r,s){"use strict";s.r(r);var a={data:function(){return{registerFormData:{name:"",email:"",phone:"",password:"",user_type:"student"},loginFormData:{email:"",password:"",remmeber:""},serverRegisterError:{name:"",email:"",phone:"",password:""},serverLoginError:{email:"",password:""},checkbox:"",password:"password",domainUrl:location.href,loginCheckbox:""}},mounted:function(){},methods:{validateRegisterForm:function(){axios.post("register",this.registerFormData).then((function(e){console.log(e),e.data.auth&&location.reload(),201===e.data.status&&console.log(e.data)})).catch((function(e){return e.response&&(console.log(e.response),console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)),Promise.reject(e.response)}))},validateLoginForm:function(){var e=this;axios.post("login",this.loginFormData).then((function(e){"success"===e.data.status&&!0===e.data.message&&(location.href=location.origin+e.data.route),"failed"===e.data.status&&Vue.toasted.error(e.data.message,{position:"top-center",duration:5e3})})).catch((function(r){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3}),r.response.data.errors.email&&(e.serverLoginError.email=r.response.data.errors.email[0]),r.response.data.errors.password&&(e.serverLoginError.password=r.response.data.errors.password[0])}))},checkBox:function(){this.password=!0===this.checkbox?"text":"password"},loginCheckBox:function(){this.loginFormData.checkbox=!0===this.loginCheckbox?"on":""}},computed:{}},o=s("KHd+"),t=Object(o.a)(a,(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",[s("div",{staticClass:"modal-body row p-0"},[e._m(0),e._v(" "),s("div",{staticClass:"col-md-7"},[s("button",{staticClass:"close mr-3 mt-3 bigclose",attrs:{type:"button","data-dismiss":"modal"}},[e._v("×")]),e._v(" "),s("br"),e._v(" "),s("div",{staticClass:"signup",attrs:{id:"mysignup"}},[e._m(1),e._v(" "),s("br"),e._v(" "),s("form",{staticClass:"px-5",on:{submit:function(r){return r.preventDefault(),e.validateRegisterForm()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerFormData.name,expression:"registerFormData.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"iplognsign form-control shadow-none",class:{"form-control":!0,"is-invalid":e.errors.has("name")},attrs:{id:"name","data-vv-delay":"20",name:"name",type:"text",placeholder:"name"},domProps:{value:e.registerFormData.name},on:{focus:function(r){e.serverRegisterError.name=""},input:function(r){r.target.composing||e.$set(e.registerFormData,"name",r.target.value)}}}),e._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"is-invalid"}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("name")))]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverRegisterError.name,expression:"serverRegisterError.name != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverRegisterError.name))]),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerFormData.email,expression:"registerFormData.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"iplognsign form-control shadow-none",class:{"form-control":!0,"is-invalid":e.errors.has("email")},attrs:{id:"email","data-vv-delay":"20",name:"emailR",type:"text",placeholder:"email"},domProps:{value:e.registerFormData.email},on:{focus:function(r){e.serverRegisterError.email=""},input:function(r){r.target.composing||e.$set(e.registerFormData,"email",r.target.value)}}}),e._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"is-invalid"}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("email")))]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverRegisterError.email,expression:"serverRegisterError.email != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverRegisterError.email))]),e._v(" "),s("br"),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerFormData.phone,expression:"registerFormData.phone"},{name:"validate",rawName:"v-validate",value:"required|numeric|min:10|max:10",expression:"'required|numeric|min:10|max:10'"}],staticClass:"iplognsign form-control shadow-none",class:{"form-control":!0,"is-invalid":e.errors.has("phone")},attrs:{id:"phone","data-vv-delay":"20",name:"phone",type:"text",placeholder:"phone"},domProps:{value:e.registerFormData.phone},on:{focus:function(r){e.serverRegisterError.phone=""},input:function(r){r.target.composing||e.$set(e.registerFormData,"phone",r.target.value)}}}),e._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("phone"),expression:"errors.has('phone')"}],staticClass:"is-invalid"}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("phone"),expression:"errors.has('phone')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("phone")))]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverRegisterError.phone,expression:"serverRegisterError.phone != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverRegisterError.phone))]),e._v(" "),s("br"),e._v(" "),"checkbox"===e.password?s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerFormData.password,expression:"registerFormData.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"iplognsign form-control shadow-none",class:{"form-control":!0,"is-invalid":e.errors.has("password")},attrs:{id:"password","data-vv-delay":"20",name:"passwordR",placeholder:"password",type:"checkbox"},domProps:{checked:Array.isArray(e.registerFormData.password)?e._i(e.registerFormData.password,null)>-1:e.registerFormData.password},on:{focus:function(r){e.serverRegisterError.password=""},change:function(r){var s=e.registerFormData.password,a=r.target,o=!!a.checked;if(Array.isArray(s)){var t=e._i(s,null);a.checked?t<0&&e.$set(e.registerFormData,"password",s.concat([null])):t>-1&&e.$set(e.registerFormData,"password",s.slice(0,t).concat(s.slice(t+1)))}else e.$set(e.registerFormData,"password",o)}}}):"radio"===e.password?s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerFormData.password,expression:"registerFormData.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"iplognsign form-control shadow-none",class:{"form-control":!0,"is-invalid":e.errors.has("password")},attrs:{id:"password","data-vv-delay":"20",name:"passwordR",placeholder:"password",type:"radio"},domProps:{checked:e._q(e.registerFormData.password,null)},on:{focus:function(r){e.serverRegisterError.password=""},change:function(r){return e.$set(e.registerFormData,"password",null)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerFormData.password,expression:"registerFormData.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"iplognsign form-control shadow-none",class:{"form-control":!0,"is-invalid":e.errors.has("password")},attrs:{id:"password","data-vv-delay":"20",name:"passwordR",placeholder:"password",type:e.password},domProps:{value:e.registerFormData.password},on:{focus:function(r){e.serverRegisterError.password=""},input:function(r){r.target.composing||e.$set(e.registerFormData,"password",r.target.value)}}}),e._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password"),expression:"errors.has('password')"}],staticClass:"is-invalid"}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password"),expression:"errors.has('password')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("password")))]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverRegisterError.password,expression:"serverRegisterError.password != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverRegisterError.password))]),e._v(" "),s("br"),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkbox,expression:"checkbox"}],attrs:{type:"checkbox",name:"checkbox"},domProps:{checked:Array.isArray(e.checkbox)?e._i(e.checkbox,null)>-1:e.checkbox},on:{change:[function(r){var s=e.checkbox,a=r.target,o=!!a.checked;if(Array.isArray(s)){var t=e._i(s,null);a.checked?t<0&&(e.checkbox=s.concat([null])):t>-1&&(e.checkbox=s.slice(0,t).concat(s.slice(t+1)))}else e.checkbox=o},function(r){return e.checkBox()}]}}),e._v(" show password\n                "),e._m(2),e._v(" "),s("button",{staticClass:"btn btnlognsign",attrs:{type:"submit"}},[e._v("Sign Up")])]),e._v(" "),s("br"),e._v(" "),e._m(3)]),e._v(" "),s("div",{staticClass:"login",attrs:{id:"mylogin"}},[e._m(4),e._v(" "),s("form",{staticClass:"px-5 mb-3",on:{submit:function(r){return r.preventDefault(),e.validateLoginForm()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.loginFormData.email,expression:"loginFormData.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"iplognsign form-control shadow-none",class:{"form-control":!0,"is-invalid":e.errors.has("email")},attrs:{id:"email","data-vv-delay":"20",name:"email",type:"text",placeholder:"email"},domProps:{value:e.loginFormData.email},on:{focus:function(r){e.serverLoginError.email=""},input:function(r){r.target.composing||e.$set(e.loginFormData,"email",r.target.value)}}}),e._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"is-invalid"}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("email")))]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverLoginError.email,expression:"serverLoginError.email != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverLoginError.email))]),e._v(" "),s("br"),e._v(" "),"checkbox"===e.password?s("input",{directives:[{name:"model",rawName:"v-model",value:e.loginFormData.password,expression:"loginFormData.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"iplognsign form-control shadow-none",class:{"form-control":!0,"is-invalid":e.errors.has("password")},attrs:{id:"password","data-vv-delay":"20",name:"password",placeholder:"password",type:"checkbox"},domProps:{checked:Array.isArray(e.loginFormData.password)?e._i(e.loginFormData.password,null)>-1:e.loginFormData.password},on:{focus:function(r){e.serverLoginError.password=""},change:function(r){var s=e.loginFormData.password,a=r.target,o=!!a.checked;if(Array.isArray(s)){var t=e._i(s,null);a.checked?t<0&&e.$set(e.loginFormData,"password",s.concat([null])):t>-1&&e.$set(e.loginFormData,"password",s.slice(0,t).concat(s.slice(t+1)))}else e.$set(e.loginFormData,"password",o)}}}):"radio"===e.password?s("input",{directives:[{name:"model",rawName:"v-model",value:e.loginFormData.password,expression:"loginFormData.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"iplognsign form-control shadow-none",class:{"form-control":!0,"is-invalid":e.errors.has("password")},attrs:{id:"password","data-vv-delay":"20",name:"password",placeholder:"password",type:"radio"},domProps:{checked:e._q(e.loginFormData.password,null)},on:{focus:function(r){e.serverLoginError.password=""},change:function(r){return e.$set(e.loginFormData,"password",null)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.loginFormData.password,expression:"loginFormData.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"iplognsign form-control shadow-none",class:{"form-control":!0,"is-invalid":e.errors.has("password")},attrs:{id:"password","data-vv-delay":"20",name:"password",placeholder:"password",type:e.password},domProps:{value:e.loginFormData.password},on:{focus:function(r){e.serverLoginError.password=""},input:function(r){r.target.composing||e.$set(e.loginFormData,"password",r.target.value)}}}),e._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password"),expression:"errors.has('password')"}],staticClass:"is-invalid"}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password"),expression:"errors.has('password')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("password")))]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverLoginError.password,expression:"serverLoginError.password != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverLoginError.password))]),e._v(" "),s("br"),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.loginCheckbox,expression:"loginCheckbox"}],attrs:{type:"checkbox",name:"checkbox"},domProps:{checked:Array.isArray(e.loginCheckbox)?e._i(e.loginCheckbox,null)>-1:e.loginCheckbox},on:{change:[function(r){var s=e.loginCheckbox,a=r.target,o=!!a.checked;if(Array.isArray(s)){var t=e._i(s,null);a.checked?t<0&&(e.loginCheckbox=s.concat([null])):t>-1&&(e.loginCheckbox=s.slice(0,t).concat(s.slice(t+1)))}else e.loginCheckbox=o},function(r){return e.loginCheckBox()}]}}),e._v(" Remember Password\n                "),s("br"),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkbox,expression:"checkbox"}],attrs:{type:"checkbox",name:"checkbox"},domProps:{checked:Array.isArray(e.checkbox)?e._i(e.checkbox,null)>-1:e.checkbox},on:{change:[function(r){var s=e.checkbox,a=r.target,o=!!a.checked;if(Array.isArray(s)){var t=e._i(s,null);a.checked?t<0&&(e.checkbox=s.concat([null])):t>-1&&(e.checkbox=s.slice(0,t).concat(s.slice(t+1)))}else e.checkbox=o},function(r){return e.checkBox()}]}}),e._v(" show password\n            "),s("button",{staticClass:"btn btnlognsign",attrs:{type:"submit"}},[e._v("Log In")])]),e._v(" "),e._m(5)])])])])}),[function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"col-md-5 regBen"},[s("button",{staticClass:"close mr-3 mt-3 smallclose",attrs:{type:"button","data-dismiss":"modal"}},[e._v("×")]),e._v(" "),s("div",[s("img",{staticClass:"regformlogo",attrs:{src:"/images/circle-bridyc.png",alt:"bridyc logo"}})]),e._v(" "),s("br"),e._v(" "),s("p",[e._v("If you are a student or a parent, sign up here! You will be able to apply for different schools,colleges or take part in\n        various educational and fun activities from time to time.")]),e._v(" "),s("p",[e._v("If you are an institute and wants to partner with us. Please contact us or call us at +91-9435285795 / +91-9476844478 ")]),e._v(" "),s("br"),e._v(" "),s("a",{staticClass:"haveanaccount",attrs:{href:"javascript::void(0)"}},[e._v("Have An Account")])])},function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"regheader"},[s("h2",[e._v("Welcome to Bridyc.com")]),e._v(" "),s("h6",[e._v("Signup to continue")]),e._v(" "),s("br"),e._v(" "),s("a",{staticClass:"fbsignup",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-facebook-official",attrs:{"aria-hidden":"true"}}),e._v(" Sign up with Facebook")]),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("h6",[e._v("OR")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("p",[this._v("By continuing, you agree with Bridyc's "),r("a",{attrs:{href:"/terms"}},[this._v("Terms and Conditions")]),this._v(" and "),r("a",{attrs:{href:"/privacy"}},[this._v("Privacy Policy")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("h6",{staticClass:"mx-5 haveaccount"},[this._v("Already have an Account?"),r("a",{attrs:{href:"javascript::void(0)"}},[this._v(" Log In")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"logheader"},[r("h2",[this._v("Hey, Good to see you back!")]),this._v(" "),r("h6",[this._v("Login to continue")]),this._v(" "),r("br")])},function(){var e=this.$createElement,r=this._self._c||e;return r("h6",{staticClass:"mx-5"},[this._v("New to bridyc? "),r("a",{staticClass:"newuser",attrs:{href:"#"}},[this._v("Sign Up")])])}],!1,null,null,null);r.default=t.exports}});
>>>>>>> 499710a687753338cb3a7a47de2288e27cdd0116
