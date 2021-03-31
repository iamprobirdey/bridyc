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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelAccountantCashbook.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChannelAccountantCashbook.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      cashbookData: [],
      ledgerData: [],
      cashbookDataFailed: false,
      createCashbookUrl: "/api/channel/add/cashbook/",
      editCashbookUrl: "/api/channel/edit/cashbook/",
      editCashbookIndex: "",
      urlDecider: "",
      mainUrl: "",
      channelId: "",
      cashbookForm: {
        ledger_id: "",
        payment_type: "",
        payment_mode: "",
        total: ""
      },
      serverError: {
        ledger_id: "",
        payment_type: "",
        payment_mode: "",
        total: ""
      },
      showDot: null,
      showDotBool: false,
      ledgerUrl: "",
      admissionUrl: ""
    };
  },
  created: function created() {
    this.channelId = this.channelid;
    this.getCashbookData();
    this.getTheAdmissionLedgerUrl();
  },
  mounted: function mounted() {},
  props: {
    channelid: {
      type: Number,
      "default": null
    }
  },
  methods: {
    getTheAdmissionLedgerUrl: function getTheAdmissionLedgerUrl() {
      var url = location.pathname.split("/");
      var url2 = location.pathname.split("/");
      url[url.length - 1] = "admission";
      url2[url2.length - 1] = "ledger";
      this.admissionUrl = location.origin + url.join("/");
      this.ledgerUrl = location.origin + url2.join("/");
    },
    editCashbook: function editCashbook(cashbook, index) {
      this.cashbookForm.ledger_id = cashbook.accountant_ledger_id;
      this.cashbookForm.payment_type = cashbook.payment_type;
      this.cashbookForm.payment_mode = cashbook.payment_mode;
      this.cashbookForm.total = cashbook.total;
      this.mainUrl = this.editCashbookUrl + cashbook.id;
      this.urlDecider = "edit";
      this.editCashbookIndex = index;
      $("#cashbookModal").modal("show");
    },
    deleteCashbook: function deleteCashbook(cashbookId, index) {
      var _this = this;

      axios.get("/api/channel/delete/cashbook/" + cashbookId).then(function (response) {
        if (response.data.msg) {
          _this.cashbookData.splice(index, 1);
        }
      })["catch"](function (errors) {
        Vue.toasted.error("Something went wrong", {
          position: "top-center",
          duration: 5000
        });
      });
    },
    getCashbookData: function getCashbookData() {
      var _this2 = this;

      axios.get("/api/channel/get/cashbook/data").then(function (response) {
        _this2.cashbookData = response.data.cashbooks;
        _this2.ledgerData = response.data.ledgers;
      })["catch"](function (errors) {
        _this2.cashbookDataFailed = true;
        Vue.toasted.error("Something went wrong", {
          position: "top-center",
          duration: 5000
        });
      });
    },
    createCashbook: function createCashbook() {
      this.mainUrl = this.createCashbookUrl + this.channelId;
      this.urlDecider = "add";
      $("#cashbookModal").modal("show");
    },
    onLedgerChange: function onLedgerChange(ledgerId, event) {
      var _this3 = this;

      this.ledgerData.forEach(function (element) {
        if (ledgerId === parseInt(element.id)) {
          console.log(element);
          _this3.cashbookForm.payment_type = element.payment_type;

          if (_this3.cashbookData.length > 0) {
            if (element.payment_type === "credit") {
              _this3.cashbookForm.total += element.balance;
            }

            if (element.payment_type === "debit") {
              _this3.cashbookForm.total -= element.balance;
            }
          }
        }
      });
    },
    submitForm: function submitForm() {
      var _this4 = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          axios.post(_this4.mainUrl, _this4.cashbookForm).then(function (response) {
            if (_this4.urlDecider === "add") {
              if (response.data.message === true) {
                $("#cashbookModal").modal("hide");
                Vue.toasted.success("New Cashbook has been entered", {
                  position: "top-center",
                  duration: 5000
                });

                _this4.cashbookData.push(response.data.cashbook);

                _this4.cashbookForm.ledger_id = "";
                _this4.cashbookForm.payment_type = "";
                _this4.cashbookForm.payment_mode = "";
                _this4.cashbookForm.total = "";
              }
            }

            if (_this4.urlDecider === "edit") {
              if (response.data.message === true) {
                $("#cashbookModal").modal("hide");
                Vue.toasted.success("Cashbook has been edited successfully", {
                  position: "top-center",
                  duration: 5000
                });
                _this4.cashbookData[_this4.editCashbookIndex].accountant_ledger_id = response.data.cashbook.accountant_ledger_id;
                _this4.cashbookData[_this4.editCashbookIndex].payment_type = response.data.cashbook.payment_type;
                _this4.cashbookData[_this4.editCashbookIndex].payment_mode = response.data.cashbook.payment_mode;
                _this4.cashbookData[_this4.editCashbookIndex].total = response.data.cashbook.total;
                _this4.cashbookForm.ledger_id = "";
                _this4.cashbookForm.payment_type = "";
                _this4.cashbookForm.payment_mode = "";
                _this4.cashbookForm.total = "";
              }
            }
          })["catch"](function (errors) {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000
            });

            if (errors.response.data.errors.ledger_id) {
              _this4.serverError.ledger_id = errors.response.data.errors.ledger_id[0];
            }

            if (errors.response.data.errors.payment_type) {
              _this4.serverError.payment_type = errors.response.data.errors.payment_type[0];
            }

            if (errors.response.data.errors.payment_mode) {
              _this4.serverError.payment_mode = errors.response.data.errors.payment_mode[0];
            }

            if (errors.response.data.errors.total) {
              _this4.serverError.total = errors.response.data.errors.total[0];
            }
          });
        }
      });
    },
    getTheDotDecider: function getTheDotDecider(index) {
      this.showDot = index;
      this.showDotBool = !this.showDotBool;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelAccountantCashbook.vue?vue&type=template&id=297e8544&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChannelAccountantCashbook.vue?vue&type=template&id=297e8544& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      "a",
      { staticClass: "btn btn-secondary", attrs: { href: _vm.ledgerUrl } },
      [_vm._v("Go to Ledger")]
    ),
    _vm._v(" "),
    _c(
      "a",
      { staticClass: "btn btn-primary", attrs: { href: _vm.admissionUrl } },
      [_vm._v("Go to Admission")]
    ),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "btn btn-secondary",
        on: {
          click: function($event) {
            return _vm.createCashbook()
          }
        }
      },
      [_vm._v("\n    Create Cashbook\n  ")]
    ),
    _vm._v(" "),
    _c("table", { staticClass: "table" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        [
          _vm._l(_vm.cashbookData, function(cashbook, index) {
            return _c("tr", { key: index }, [
              _c("td", [_vm._v(_vm._s(index + 1))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(cashbook.ledger.name))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(cashbook.payment_type))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(cashbook.payment_mode))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(cashbook.total))]),
              _vm._v(" "),
              _c("td", [
                _c("a", { attrs: { href: "javascript:void(0)" } }, [
                  _c(
                    "svg",
                    {
                      staticStyle: { color: "black" },
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        height: "23",
                        width: "34"
                      },
                      on: {
                        click: function($event) {
                          return _vm.getTheDotDecider(index)
                        }
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                        }
                      })
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _vm.showDot === index && _vm.showDotBool === true
                ? _c(
                    "div",
                    { staticClass: "card", staticStyle: { width: "18rem" } },
                    [
                      _c("div", { staticClass: "card-body" }, [
                        _c("p", [
                          _vm._v("\n              Edit\n              "),
                          _c(
                            "svg",
                            {
                              staticStyle: { cursor: "pointer" },
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                height: "23",
                                width: "34"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.editCashbook(cashbook, index)
                                }
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v("\n              Delete\n              "),
                          _c(
                            "svg",
                            {
                              staticStyle: { color: "red", cursor: "pointer" },
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                height: "23",
                                width: "34"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.deleteCashbook(cashbook.id, index)
                                }
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  "fill-rule": "evenodd",
                                  d:
                                    "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
                                  "clip-rule": "evenodd"
                                }
                              })
                            ]
                          )
                        ])
                      ])
                    ]
                  )
                : _vm._e()
            ])
          }),
          _vm._v(" "),
          _vm.cashbookDataFailed
            ? _c(
                "button",
                {
                  on: {
                    click: function($event) {
                      return _vm.getCashbookData()
                    }
                  }
                },
                [_vm._v("\n        Try Again\n      ")]
              )
            : _vm._e()
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "cashbookModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true",
          "data-backdrop": "static",
          "data-keyboard": "false"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(1),
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
                            _vm.errors.has("serverError.ledger_id") ||
                            _vm.serverError.ledger_id != ""
                        }
                      },
                      [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Select Particular")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.cashbookForm.ledger_id,
                                expression: "cashbookForm.ledger_id"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "ledger_id" },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.cashbookForm,
                                    "ledger_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function($event) {
                                  return _vm.onLedgerChange(
                                    _vm.cashbookForm.ledger_id,
                                    $event
                                  )
                                }
                              ]
                            }
                          },
                          _vm._l(_vm.ledgerData, function(ledger, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: ledger.id } },
                              [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(ledger.name) +
                                    "\n                "
                                )
                              ]
                            )
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("ledger_id"),
                                expression: "errors.has('ledger_id')"
                              }
                            ],
                            staticClass: "text-danger text-center"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("ledger_id")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.serverError.ledger_id != "",
                                expression: "serverError.ledger_id != ''"
                              }
                            ],
                            staticClass: "help text-danger"
                          },
                          [_vm._v(_vm._s(_vm.serverError.ledger_id))]
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
                            _vm.errors.has("serverError.payment_type") ||
                            _vm.serverError.payment_type != ""
                        }
                      },
                      [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Select Payment Type")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.cashbookForm.payment_type,
                                expression: "cashbookForm.payment_type"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "payment_type" },
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
                                  _vm.cashbookForm,
                                  "payment_type",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "credit" } }, [
                              _vm._v("Credit")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "debit" } }, [
                              _vm._v("Debit")
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
                                value: _vm.errors.has("payment_type"),
                                expression: "errors.has('payment_type')"
                              }
                            ],
                            staticClass: "text-danger text-center"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("payment_type")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.serverError.payment_type != "",
                                expression: "serverError.payment_type != ''"
                              }
                            ],
                            staticClass: "help text-danger"
                          },
                          [_vm._v(_vm._s(_vm.serverError.payment_type))]
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
                            _vm.errors.has("serverError.payment_mode") ||
                            _vm.serverError.payment_mode != ""
                        }
                      },
                      [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Select Payment Mode")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.cashbookForm.payment_mode,
                                expression: "cashbookForm.payment_mode"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "payment_mode" },
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
                                  _vm.cashbookForm,
                                  "payment_mode",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "online" } }, [
                              _vm._v("Online")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "offline" } }, [
                              _vm._v("Offline")
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
                                value: _vm.errors.has("payment_mode"),
                                expression: "errors.has('payment_mode')"
                              }
                            ],
                            staticClass: "text-danger text-center"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("payment_mode")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.serverError.payment_mode != "",
                                expression: "serverError.payment_mode != ''"
                              }
                            ],
                            staticClass: "help text-danger"
                          },
                          [_vm._v(_vm._s(_vm.serverError.payment_mode))]
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
                            _vm.errors.has("serverError.total") ||
                            _vm.serverError.total != ""
                        }
                      },
                      [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Select Total")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.cashbookForm.total,
                              expression: "cashbookForm.total"
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
                            "is-invalid": _vm.errors.has("total")
                          },
                          attrs: {
                            "data-vv-delay": "20",
                            name: "total",
                            type: "text",
                            placeholder: "Balance"
                          },
                          domProps: { value: _vm.cashbookForm.total },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.cashbookForm,
                                "total",
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
                                value: _vm.errors.has("total"),
                                expression: "errors.has('total')"
                              }
                            ],
                            staticClass: "text-danger text-center"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("total")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.serverError.total != "",
                                expression: "serverError.total != ''"
                              }
                            ],
                            staticClass: "help text-danger"
                          },
                          [_vm._v(_vm._s(_vm.serverError.total))]
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
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col " } }, [_vm._v("Id")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Particular")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Credit/Debit")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Online/Offline")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Balance")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
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

/***/ "./resources/js/ChannelAccountantCashbook.js":
/*!***************************************************!*\
  !*** ./resources/js/ChannelAccountantCashbook.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component("channel-accountant-cashbook", __webpack_require__(/*! ./components/ChannelAccountantCashbook.vue */ "./resources/js/components/ChannelAccountantCashbook.vue")["default"]);
var element = document.getElementById("channel-accountant-cashbook");

if (typeof element != "undefined" && element != null) {
  var cart = new Vue({
    el: "#channel-accountant-cashbook"
  });
}

/***/ }),

/***/ "./resources/js/components/ChannelAccountantCashbook.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/ChannelAccountantCashbook.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelAccountantCashbook_vue_vue_type_template_id_297e8544___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelAccountantCashbook.vue?vue&type=template&id=297e8544& */ "./resources/js/components/ChannelAccountantCashbook.vue?vue&type=template&id=297e8544&");
/* harmony import */ var _ChannelAccountantCashbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelAccountantCashbook.vue?vue&type=script&lang=js& */ "./resources/js/components/ChannelAccountantCashbook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChannelAccountantCashbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChannelAccountantCashbook_vue_vue_type_template_id_297e8544___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChannelAccountantCashbook_vue_vue_type_template_id_297e8544___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ChannelAccountantCashbook.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ChannelAccountantCashbook.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/ChannelAccountantCashbook.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelAccountantCashbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelAccountantCashbook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelAccountantCashbook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelAccountantCashbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ChannelAccountantCashbook.vue?vue&type=template&id=297e8544&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/ChannelAccountantCashbook.vue?vue&type=template&id=297e8544& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelAccountantCashbook_vue_vue_type_template_id_297e8544___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelAccountantCashbook.vue?vue&type=template&id=297e8544& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelAccountantCashbook.vue?vue&type=template&id=297e8544&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelAccountantCashbook_vue_vue_type_template_id_297e8544___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelAccountantCashbook_vue_vue_type_template_id_297e8544___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 21:
/*!*********************************************************!*\
  !*** multi ./resources/js/ChannelAccountantCashbook.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/probir/Documents/Probir/Project_bckup/Project/Bridyc stuff/bridyc/resources/js/ChannelAccountantCashbook.js */"./resources/js/ChannelAccountantCashbook.js");


/***/ })

/******/ });