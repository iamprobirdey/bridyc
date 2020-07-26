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
        console.log(response); // if(response.data.auth){
        //      location.reload();
        // }

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
      _c("a", { staticClass: "haveanaccount", attrs: { href: "#" } }, [
        _vm._v("Have An Account")
      ])
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
      _c("a", { attrs: { href: "#" } }, [_vm._v(" Log In")])
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

module.exports = __webpack_require__(/*! /home/probir/Documents/Probir/Project_bckup/Project/Bridyc stuff/bridyc/resources/js/loginSignupModal.js */"./resources/js/loginSignupModal.js");


/***/ })

/******/ });