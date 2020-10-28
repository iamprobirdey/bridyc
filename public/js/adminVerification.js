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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Verification.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Verification.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_meta_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/meta.vue */ "./resources/js/components/admin/model/meta.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      usersData: [],
      channelHistoryData: [],
      slugData: {
        slug: ""
      },
      slugError: {
        slug: ""
      },
      slugUserId: "",
      slugIndex: "",
      metaData: {
        meta_keywords: "",
        meta_descriptions: ""
      },
      metaDataError: {
        meta_keywords: "",
        meta_descriptions: ""
      },
      metaKeywordsDescriptionsId: ""
    };
  },
  props: {
    users: {
      type: Array,
      "default": null
    }
  },
  mounted: function mounted() {
    if (this.users != null) this.usersData = this.users;
  },
  methods: {
    offTheStatus: function offTheStatus(userId, Id, index) {
      var _this = this;

      axios.get("verification/api/updatingforoff/" + userId + "/" + Id).then(function (response) {
        if (response.status === 200 && response.data.msg === true) {
          _this.usersData[index].status = 1;
        }
      })["catch"](function (errors) {
        Vue.toasted.error("Something went wrong", {
          position: "top-center",
          duration: 5000
        });
      });
    },
    onTheStatus: function onTheStatus(userId, verification, index) {
      var _this2 = this;

      axios.get("verification/api/updatingforon/" + userId + "/" + verification).then(function (response) {
        if (response.status === 200 && response.data.error === true) {
          Vue.toasted.error("Make sure slug is been created", {
            position: "top-center",
            duration: 5000
          });
        }

        if (response.status === 200 && response.data.msg === true) {
          _this2.usersData[index].status = 2;
        }
      })["catch"](function (errors) {
        Vue.toasted.error("Something went wrong", {
          position: "top-center",
          duration: 5000
        });
      });
    },
    blockTheUser: function blockTheUser(userId, Id, index) {
      var _this3 = this;

      axios.get("verification/api/updatingforblock/" + userId + "/" + Id).then(function (response) {
        if (response.status === 200 && response.data.msg === true) {
          _this3.usersData[index].status = 3;
        }
      })["catch"](function (errors) {
        Vue.toasted.error("Something went wrong", {
          position: "top-center",
          duration: 5000
        });
      });
    },
    slugGenetor: function slugGenetor(title, name, userId, index) {
      var _this4 = this;

      this.slugUserId = userId;
      axios.get("verification/api/get-slug-of-channel/" + userId).then(function (response) {
        if (response.data.message === true) {
          if (response.data.channel_slug === null) {
            var slug = title + "-" + name;
            _this4.slugData.slug = _this4.slugify(slug);
          } else {
            _this4.slugData.slug = response.data.channel_slug;
          }
        }
      })["catch"](function (errors) {
        Vue.toasted.error("Something went wrong.Try again", {
          position: "top-center",
          duration: 5000
        });
        $("#slugGenerator").modal("hide");
      });
      $("#slugGenerator").modal("show");
    },
    slugify: function slugify(string) {
      var a = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
      var b = "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
      var p = new RegExp(a.split("").join("|"), "g");
      return string.toString().toLowerCase().replace(/\s+/g, "-") // Replace spaces with -
      .replace(p, function (c) {
        return b.charAt(a.indexOf(c));
      }) // Replace special characters
      .replace(/&/g, "-and-") // Replace & with 'and'
      .replace(/[^\w\-]+/g, "") // Remove all non-word characters
      .replace(/\-\-+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
    },
    slugGenerated: function slugGenerated() {
      var _this5 = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          axios.post("verification/api/channel-slug/" + _this5.slugUserId, _this5.slugData).then(function (response) {
            if (response.data.msg === true) {
              Vue.toasted.success("Slug is created", {
                position: "top-center",
                duration: 5000
              });
              $("#slugGenerator").modal("hide");
            }
          })["catch"](function (errors) {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000
            });

            if (errors.response.data.errors.slug) {
              _this5.slugError.slug = errors.response.data.errors.slug[0];
            }
          });
        }
      });
    },
    deleteTheUser: function deleteTheUser(userId, index) {
      var _this6 = this;

      if (confirm("Are you sure?")) {
        axios.get("verification/api/delete/user/" + userId).then(function (response) {
          if (response.status === 200 && response.data.msg === true) {
            _this6.usersData.splice(index, 1);
          }
        })["catch"](function (errors) {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000
          });
        });
      }
    },
    getMetaModel: function getMetaModel(verification) {
      this.metaKeywordsDescriptionsId = "";
      this.metaKeywordsDescriptionsId = verification.id;

      if (verification.meta_keywords != undefined) {
        this.metaData.meta_keywords = this.verification.meta_keywords;
      }

      if (verification.meta_descriptions != undefined) {
        this.metaData.meta_descriptions = this.verification.meta_descriptions;
      }

      $("#metaGenerator").modal("show");
    },
    showChannelHistoryData: function showChannelHistoryData(data) {
      this.channelHistoryData = data;
      $("#showChannelHistory").modal("show");
    },
    metaGenerationForm: function metaGenerationForm() {
      var _this7 = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          console.log("called");
          axios.post("verification/api/keywords/description/" + _this7.metaKeywordsDescriptionsId, _this7.metaData).then(function (response) {
            if (response.data.msg === true) {
              Vue.toasted.success("Meta data is created", {
                position: "top-center",
                duration: 5000
              });
              $("#slugGenerator").modal("hide");
            }
          })["catch"](function (errors) {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000
            });

            if (errors.response.data.errors.meta_keywords) {
              _this7.metaDataError.meta_keywords = errors.response.data.errors.meta_keywords[0];
            }

            if (errors.response.data.errors.meta_descriptions) {
              _this7.metaDataError.meta_descriptions = errors.response.data.errors.meta_descriptions[0];
            }
          });
        }
      });
    }
  },
  components: {
    "meta-keywords": _model_meta_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/model/meta.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/model/meta.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      metaData: {
        meta_keywords: "",
        meta_descriptions: ""
      },
      metaDataError: {
        meta_keywords: "",
        meta_descriptions: ""
      },
      metaKeywordsDescriptionsId: "",
      verificationData: []
    };
  },
  props: {
    verification: {
      type: Object,
      "default": null
    }
  },
  created: function created() {
    this.verificationData = this.verification;
    console.log(this.verificationData);
  },
  mounted: function mounted() {},
  methods: {
    getTheSubmitId: function getTheSubmitId(data) {
      //this.metaKeywordsDescriptionsId = id;
      console.log(this.verificationData.id); //this.metaGenerationForm();
    },
    getMetaModel: function getMetaModel() {
      $("#metaGenerator").modal("show");
    },
    metaGenerationForm: function metaGenerationForm() {
      var _this = this;

      this.$validator.validate().then(function (result) {
        console.log("Inside validation:- " + _this.metaKeywordsDescriptionsId);

        if (result) {
          axios.post("verification/api/keywords/description/" + _this.verificationData.id, _this.metaData).then(function (response) {
            if (response.data.message === true) {
              Vue.toasted.success("Meta data is created", {
                position: "top-center",
                duration: 5000
              });
              _this.metaData.meta_descriptions = "";
              _this.metaData.meta_keywords = "";
              $("#metaGenerator").modal("hide");
            }
          })["catch"](function (errors) {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000
            });

            if (errors.response.data.errors.meta_keywords) {
              _this.metaDataError.meta_keywords = errors.response.data.errors.meta_keywords[0];
            }

            if (errors.response.data.errors.meta_descriptions) {
              _this.metaDataError.meta_descriptions = errors.response.data.errors.meta_descriptions[0];
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Verification.vue?vue&type=template&id=78fbb906&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Verification.vue?vue&type=template&id=78fbb906& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    _c("table", { staticClass: "table responsive" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.usersData, function(verification, index) {
          return _c("tr", { key: verification.id }, [
            _c("td", [_vm._v(_vm._s(verification.id))]),
            _vm._v(" "),
            _c("td", [
              verification.status === 1 || verification.status === 2
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: {
                        click: function($event) {
                          return _vm.blockTheUser(
                            verification.user_id,
                            verification.id,
                            index
                          )
                        }
                      }
                    },
                    [_vm._v("\n            Block\n          ")]
                  )
                : _vm._e(),
              _vm._v(" "),
              verification.status === 3
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: {
                        click: function($event) {
                          return _vm.offTheStatus(
                            verification.user_id,
                            verification.id,
                            index
                          )
                        }
                      }
                    },
                    [_vm._v("\n            unBlock\n          ")]
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("td", [
              verification.status === 2
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      on: {
                        click: function($event) {
                          return _vm.offTheStatus(
                            verification.user_id,
                            verification.id,
                            index
                          )
                        }
                      }
                    },
                    [_vm._v("\n            ON\n          ")]
                  )
                : _vm._e(),
              _vm._v(" "),
              verification.status === 1
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-danger",
                      on: {
                        click: function($event) {
                          return _vm.onTheStatus(
                            verification.user_id,
                            verification.id,
                            index
                          )
                        }
                      }
                    },
                    [_vm._v("\n            OFF\n          ")]
                  )
                : _vm._e(),
              _vm._v(" "),
              verification.status === 3
                ? _c("span", { staticClass: "text-danger" }, [
                    _vm._v("user is block")
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("td", [
              _c(
                "button",
                {
                  staticClass: "btn btn-info",
                  on: {
                    click: function($event) {
                      return _vm.slugGenetor(
                        verification.title,
                        verification.state.name,
                        verification.user.id,
                        index
                      )
                    }
                  }
                },
                [_vm._v("\n            URl Gen.\n          ")]
              )
            ]),
            _vm._v(" "),
            _c(
              "td",
              [_c("meta-keywords", { attrs: { verification: verification } })],
              1
            ),
            _vm._v(" "),
            _c("td", [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  on: {
                    click: function($event) {
                      return _vm.showChannelHistoryData(verification)
                    }
                  }
                },
                [_vm._v("\n            Open\n          ")]
              )
            ]),
            _vm._v(" "),
            _c("td", [
              _c(
                "button",
                {
                  staticClass: "btn btn-danger",
                  on: {
                    click: function($event) {
                      return _vm.deleteTheUser(verification.user_id, index)
                    }
                  }
                },
                [_vm._v("\n            Delete Channel\n          ")]
              )
            ])
          ])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "slugGenerator",
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
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.slugGenerated()
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
                            _vm.errors.has("slugError.slug") ||
                            _vm.slugError.slug != ""
                        }
                      },
                      [
                        _c("label", [_vm._v("Url for Channel")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.slugData.slug,
                              expression: "slugData.slug"
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
                            "is-invalid": _vm.errors.has("slug")
                          },
                          attrs: {
                            id: "slug",
                            "data-vv-delay": "20",
                            name: "slug",
                            type: "text",
                            placeholder: "Url Generator"
                          },
                          domProps: { value: _vm.slugData.slug },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.slugData,
                                "slug",
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
                                value: _vm.errors.has("slug"),
                                expression: "errors.has('slug')"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("slug")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.slugError.slug != "",
                                expression: "slugError.slug != ''"
                              }
                            ],
                            staticClass: "help is-danger"
                          },
                          [_vm._v(_vm._s(_vm.slugError.slug))]
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
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "showChannelHistory",
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
              _c("div", { staticClass: "modal-body" }, [
                _vm.channelHistoryData != ""
                  ? _c("table", { staticClass: "table responsive" }, [
                      _c("tr", [
                        _c("th", [_vm._v("Title:")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.channelHistoryData.title))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Name:")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.channelHistoryData.user.name))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Email:")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.channelHistoryData.user.email))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("State:")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.channelHistoryData.state.name))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("District:")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.channelHistoryData.district.name))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Village:")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.channelHistoryData.village.name))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Language:")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.channelHistoryData.language.name))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Udise:")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.channelHistoryData.udise))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Founded:")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.channelHistoryData.founded))
                        ])
                      ])
                    ])
                  : _vm._e()
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Serial Number")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Block")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Slug Generator")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Keywords Generator")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Show Channel Data")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Delete")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/model/meta.vue?vue&type=template&id=067f64b6&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/model/meta.vue?vue&type=template&id=067f64b6& ***!
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
    _c(
      "button",
      {
        staticClass: "btn btn-warning",
        on: {
          click: function($event) {
            return _vm.getMetaModel()
          }
        }
      },
      [_vm._v("Meta")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "metaGenerator",
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
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.metaGenerationForm()
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
                            _vm.errors.has("metaDataError.meta_keywords") ||
                            _vm.metaDataError.meta_keywords != ""
                        }
                      },
                      [
                        _c("label", [_vm._v("Meta Keywords")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.metaData.meta_keywords,
                              expression: "metaData.meta_keywords"
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
                            "is-invalid": _vm.errors.has("meta_keywords")
                          },
                          attrs: {
                            "data-vv-delay": "20",
                            name: "meta_keywords",
                            type: "text",
                            placeholder: "Meta Keywords"
                          },
                          domProps: { value: _vm.metaData.meta_keywords },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.metaData,
                                "meta_keywords",
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
                                value: _vm.errors.has("meta_keywords"),
                                expression: "errors.has('meta_keywords')"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("meta_keywords")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.metaDataError.meta_keywords != "",
                                expression: "metaDataError.meta_keywords != ''"
                              }
                            ],
                            staticClass: "help is-danger"
                          },
                          [_vm._v(_vm._s(_vm.metaDataError.meta_keywords))]
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
                            _vm.errors.has("metaDataError.meta_descriptions") ||
                            _vm.metaDataError.meta_descriptions != ""
                        }
                      },
                      [
                        _c("label", [_vm._v("Meta Description")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.metaData.meta_descriptions,
                              expression: "metaData.meta_descriptions"
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
                            "is-invalid": _vm.errors.has("meta_descriptions")
                          },
                          attrs: {
                            "data-vv-delay": "20",
                            name: "meta_descriptions",
                            type: "text",
                            placeholder: "Meta Description"
                          },
                          domProps: { value: _vm.metaData.meta_descriptions },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.metaData,
                                "meta_descriptions",
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
                                value: _vm.errors.has("meta_descriptions"),
                                expression: "errors.has('meta_descriptions')"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.errors.first("meta_descriptions"))
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
                                  _vm.metaDataError.meta_descriptions != "",
                                expression:
                                  "metaDataError.meta_descriptions != ''"
                              }
                            ],
                            staticClass: "help is-danger"
                          },
                          [_vm._v(_vm._s(_vm.metaDataError.meta_descriptions))]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.getTheSubmitId(_vm.verificationData)
                          }
                        }
                      },
                      [_vm._v("\n              Submit\n            ")]
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

/***/ "./resources/js/adminVerification.js":
/*!*******************************************!*\
  !*** ./resources/js/adminVerification.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component("admin-verification", __webpack_require__(/*! ./components/admin/Verification.vue */ "./resources/js/components/admin/Verification.vue")["default"]);
var element = document.getElementById("admin-verification");

if (typeof element != "undefined" && element != null) {
  var vue = new Vue({
    el: "#admin-verification"
  });
}

/***/ }),

/***/ "./resources/js/components/admin/Verification.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/Verification.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Verification_vue_vue_type_template_id_78fbb906___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Verification.vue?vue&type=template&id=78fbb906& */ "./resources/js/components/admin/Verification.vue?vue&type=template&id=78fbb906&");
/* harmony import */ var _Verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Verification.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Verification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Verification_vue_vue_type_template_id_78fbb906___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Verification_vue_vue_type_template_id_78fbb906___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Verification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Verification.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/Verification.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Verification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Verification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Verification.vue?vue&type=template&id=78fbb906&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/admin/Verification.vue?vue&type=template&id=78fbb906& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Verification_vue_vue_type_template_id_78fbb906___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Verification.vue?vue&type=template&id=78fbb906& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Verification.vue?vue&type=template&id=78fbb906&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Verification_vue_vue_type_template_id_78fbb906___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Verification_vue_vue_type_template_id_78fbb906___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/model/meta.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/admin/model/meta.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meta_vue_vue_type_template_id_067f64b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meta.vue?vue&type=template&id=067f64b6& */ "./resources/js/components/admin/model/meta.vue?vue&type=template&id=067f64b6&");
/* harmony import */ var _meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meta.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/model/meta.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _meta_vue_vue_type_template_id_067f64b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _meta_vue_vue_type_template_id_067f64b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/model/meta.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/model/meta.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/admin/model/meta.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./meta.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/model/meta.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/model/meta.vue?vue&type=template&id=067f64b6&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/model/meta.vue?vue&type=template&id=067f64b6& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_meta_vue_vue_type_template_id_067f64b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./meta.vue?vue&type=template&id=067f64b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/model/meta.vue?vue&type=template&id=067f64b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_meta_vue_vue_type_template_id_067f64b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_meta_vue_vue_type_template_id_067f64b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 2:
/*!*************************************************!*\
  !*** multi ./resources/js/adminVerification.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\bridyc\resources\js\adminVerification.js */"./resources/js/adminVerification.js");


/***/ })

/******/ });
=======
!function(t){var e={};function a(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=e,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(r,s,function(e){return t[e]}.bind(null,s));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a(a.s=2)}({2:function(t,e,a){t.exports=a("8h5b")},"8h5b":function(t,e,a){Vue.component("admin-verification",a("qRSQ").default);var r=document.getElementById("admin-verification");if(void 0!==r&&null!=r)new Vue({el:"#admin-verification"})},"KHd+":function(t,e,a){"use strict";function r(t,e,a,r,s,o,n,i){var l,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=a,d._compiled=!0),r&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),n?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=l):s&&(l=i?function(){s.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(d.functional){d._injectStyles=l;var u=d.render;d.render=function(t,e){return l.call(e),u(t,e)}}else{var c=d.beforeCreate;d.beforeCreate=c?[].concat(c,l):[l]}return{exports:t,options:d}}a.d(e,"a",(function(){return r}))},qRSQ:function(t,e,a){"use strict";a.r(e);var r={data:function(){return{metaData:{meta_keywords:"",meta_descriptions:""},metaDataError:{meta_keywords:"",meta_descriptions:""},metaKeywordsDescriptionsId:"",verificationData:[]}},props:{verification:{type:Object,default:null}},created:function(){this.verificationData=this.verification,console.log(this.verificationData)},mounted:function(){},methods:{getTheSubmitId:function(t){console.log(this.verificationData.id)},getMetaModel:function(){$("#metaGenerator").modal("show")},metaGenerationForm:function(){var t=this;this.$validator.validate().then((function(e){console.log("Inside validation:- "+t.metaKeywordsDescriptionsId),e&&axios.post("verification/api/keywords/description/"+t.verificationData.id,t.metaData).then((function(e){!0===e.data.message&&(Vue.toasted.success("Meta data is created",{position:"top-center",duration:5e3}),t.metaData.meta_descriptions="",t.metaData.meta_keywords="",$("#metaGenerator").modal("hide"))})).catch((function(e){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3}),e.response.data.errors.meta_keywords&&(t.metaDataError.meta_keywords=e.response.data.errors.meta_keywords[0]),e.response.data.errors.meta_descriptions&&(t.metaDataError.meta_descriptions=e.response.data.errors.meta_descriptions[0])}))}))}}},s=a("KHd+"),o=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.getMetaModel()}}},[t._v("Meta")]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"metaGenerator",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.metaGenerationForm()}}},[a("div",{staticClass:"form-group",class:{"has-error":t.errors.has("metaDataError.meta_keywords")||""!=t.metaDataError.meta_keywords}},[a("label",[t._v("Meta Keywords")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.metaData.meta_keywords,expression:"metaData.meta_keywords"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"is-invalid":t.errors.has("meta_keywords")},attrs:{"data-vv-delay":"20",name:"meta_keywords",type:"text",placeholder:"Meta Keywords"},domProps:{value:t.metaData.meta_keywords},on:{input:function(e){e.target.composing||t.$set(t.metaData,"meta_keywords",e.target.value)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("meta_keywords"),expression:"errors.has('meta_keywords')"}],staticClass:"text-danger"},[t._v(t._s(t.errors.first("meta_keywords")))]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.metaDataError.meta_keywords,expression:"metaDataError.meta_keywords != ''"}],staticClass:"help is-danger"},[t._v(t._s(t.metaDataError.meta_keywords))])]),t._v(" "),a("div",{staticClass:"form-group",class:{"has-error":t.errors.has("metaDataError.meta_descriptions")||""!=t.metaDataError.meta_descriptions}},[a("label",[t._v("Meta Description")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.metaData.meta_descriptions,expression:"metaData.meta_descriptions"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"is-invalid":t.errors.has("meta_descriptions")},attrs:{"data-vv-delay":"20",name:"meta_descriptions",type:"text",placeholder:"Meta Description"},domProps:{value:t.metaData.meta_descriptions},on:{input:function(e){e.target.composing||t.$set(t.metaData,"meta_descriptions",e.target.value)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("meta_descriptions"),expression:"errors.has('meta_descriptions')"}],staticClass:"text-danger"},[t._v(t._s(t.errors.first("meta_descriptions")))]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.metaDataError.meta_descriptions,expression:"metaDataError.meta_descriptions != ''"}],staticClass:"help is-danger"},[t._v(t._s(t.metaDataError.meta_descriptions))])]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.getTheSubmitId(t.verificationData)}}},[t._v("\n              Submit\n            ")])])])])])])])}),[],!1,null,null,null).exports,n={data:function(){return{usersData:[],channelHistoryData:[],slugData:{slug:""},slugError:{slug:""},slugUserId:"",slugIndex:"",metaData:{meta_keywords:"",meta_descriptions:""},metaDataError:{meta_keywords:"",meta_descriptions:""},metaKeywordsDescriptionsId:""}},props:{users:{type:Array,default:null}},mounted:function(){null!=this.users&&(this.usersData=this.users)},methods:{offTheStatus:function(t,e,a){var r=this;axios.get("verification/api/updatingforoff/"+t+"/"+e).then((function(t){200===t.status&&!0===t.data.msg&&(r.usersData[a].status=1)})).catch((function(t){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})}))},onTheStatus:function(t,e,a){var r=this;axios.get("verification/api/updatingforon/"+t+"/"+e).then((function(t){200===t.status&&!0===t.data.error&&Vue.toasted.error("Make sure slug is been created",{position:"top-center",duration:5e3}),200===t.status&&!0===t.data.msg&&(r.usersData[a].status=2)})).catch((function(t){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})}))},blockTheUser:function(t,e,a){var r=this;axios.get("verification/api/updatingforblock/"+t+"/"+e).then((function(t){200===t.status&&!0===t.data.msg&&(r.usersData[a].status=3)})).catch((function(t){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})}))},slugGenetor:function(t,e,a,r){var s=this;this.slugUserId=a,axios.get("verification/api/get-slug-of-channel/"+a).then((function(a){if(!0===a.data.message)if(null===a.data.channel_slug){var r=t+"-"+e;s.slugData.slug=s.slugify(r)}else s.slugData.slug=a.data.channel_slug})).catch((function(t){Vue.toasted.error("Something went wrong.Try again",{position:"top-center",duration:5e3}),$("#slugGenerator").modal("hide")})),$("#slugGenerator").modal("show")},slugify:function(t){var e="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",a=new RegExp(e.split("").join("|"),"g");return t.toString().toLowerCase().replace(/\s+/g,"-").replace(a,(function(t){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(e.indexOf(t))})).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},slugGenerated:function(){var t=this;this.$validator.validate().then((function(e){e&&axios.post("verification/api/channel-slug/"+t.slugUserId,t.slugData).then((function(t){!0===t.data.msg&&(Vue.toasted.success("Slug is created",{position:"top-center",duration:5e3}),$("#slugGenerator").modal("hide"))})).catch((function(e){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3}),e.response.data.errors.slug&&(t.slugError.slug=e.response.data.errors.slug[0])}))}))},deleteTheUser:function(t,e){var a=this;confirm("Are you sure?")&&axios.get("verification/api/delete/user/"+t).then((function(t){200===t.status&&!0===t.data.msg&&a.usersData.splice(e,1)})).catch((function(t){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})}))},getMetaModel:function(t){this.metaKeywordsDescriptionsId="",this.metaKeywordsDescriptionsId=t.id,null!=t.meta_keywords&&(this.metaData.meta_keywords=this.verification.meta_keywords),null!=t.meta_descriptions&&(this.metaData.meta_descriptions=this.verification.meta_descriptions),$("#metaGenerator").modal("show")},showChannelHistoryData:function(t){this.channelHistoryData=t,$("#showChannelHistory").modal("show")},metaGenerationForm:function(){var t=this;this.$validator.validate().then((function(e){e&&(console.log("called"),axios.post("verification/api/keywords/description/"+t.metaKeywordsDescriptionsId,t.metaData).then((function(t){!0===t.data.msg&&(Vue.toasted.success("Meta data is created",{position:"top-center",duration:5e3}),$("#slugGenerator").modal("hide"))})).catch((function(e){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3}),e.response.data.errors.meta_keywords&&(t.metaDataError.meta_keywords=e.response.data.errors.meta_keywords[0]),e.response.data.errors.meta_descriptions&&(t.metaDataError.meta_descriptions=e.response.data.errors.meta_descriptions[0])})))}))}},components:{"meta-keywords":o}},i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"table responsive"},[t._m(0),t._v(" "),a("tbody",t._l(t.usersData,(function(e,r){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[1===e.status||2===e.status?a("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.blockTheUser(e.user_id,e.id,r)}}},[t._v("\n            Block\n          ")]):t._e(),t._v(" "),3===e.status?a("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.offTheStatus(e.user_id,e.id,r)}}},[t._v("\n            unBlock\n          ")]):t._e()]),t._v(" "),a("td",[2===e.status?a("button",{staticClass:"btn btn-success",on:{click:function(a){return t.offTheStatus(e.user_id,e.id,r)}}},[t._v("\n            ON\n          ")]):t._e(),t._v(" "),1===e.status?a("button",{staticClass:"btn btn-danger",on:{click:function(a){return t.onTheStatus(e.user_id,e.id,r)}}},[t._v("\n            OFF\n          ")]):t._e(),t._v(" "),3===e.status?a("span",{staticClass:"text-danger"},[t._v("user is block")]):t._e()]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-info",on:{click:function(a){return t.slugGenetor(e.title,e.state.name,e.user.id,r)}}},[t._v("\n            URl Gen.\n          ")])]),t._v(" "),a("td",[a("meta-keywords",{attrs:{verification:e}})],1),t._v(" "),a("td",[a("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.showChannelHistoryData(e)}}},[t._v("\n            Open\n          ")])]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-danger",on:{click:function(a){return t.deleteTheUser(e.user_id,r)}}},[t._v("\n            Delete Channel\n          ")])])])})),0)]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"slugGenerator",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.slugGenerated()}}},[a("div",{staticClass:"form-group",class:{"has-error":t.errors.has("slugError.slug")||""!=t.slugError.slug}},[a("label",[t._v("Url for Channel")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.slugData.slug,expression:"slugData.slug"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"is-invalid":t.errors.has("slug")},attrs:{id:"slug","data-vv-delay":"20",name:"slug",type:"text",placeholder:"Url Generator"},domProps:{value:t.slugData.slug},on:{input:function(e){e.target.composing||t.$set(t.slugData,"slug",e.target.value)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("slug"),expression:"errors.has('slug')"}],staticClass:"text-danger"},[t._v(t._s(t.errors.first("slug")))]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.slugError.slug,expression:"slugError.slug != ''"}],staticClass:"help is-danger"},[t._v(t._s(t.slugError.slug))])]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"showChannelHistory",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[""!=t.channelHistoryData?a("table",{staticClass:"table responsive"},[a("tr",[a("th",[t._v("Title:")]),t._v(" "),a("td",[t._v(t._s(t.channelHistoryData.title))])]),t._v(" "),a("tr",[a("th",[t._v("Name:")]),t._v(" "),a("td",[t._v(t._s(t.channelHistoryData.user.name))])]),t._v(" "),a("tr",[a("th",[t._v("Email:")]),t._v(" "),a("td",[t._v(t._s(t.channelHistoryData.user.email))])]),t._v(" "),a("tr",[a("th",[t._v("State:")]),t._v(" "),a("td",[t._v(t._s(t.channelHistoryData.state.name))])]),t._v(" "),a("tr",[a("th",[t._v("District:")]),t._v(" "),a("td",[t._v(t._s(t.channelHistoryData.district.name))])]),t._v(" "),a("tr",[a("th",[t._v("Village:")]),t._v(" "),a("td",[t._v(t._s(t.channelHistoryData.village.name))])]),t._v(" "),a("tr",[a("th",[t._v("Language:")]),t._v(" "),a("td",[t._v(t._s(t.channelHistoryData.language.name))])]),t._v(" "),a("tr",[a("th",[t._v("Udise:")]),t._v(" "),a("td",[t._v(t._s(t.channelHistoryData.udise))])]),t._v(" "),a("tr",[a("th",[t._v("Founded:")]),t._v(" "),a("td",[t._v(t._s(t.channelHistoryData.founded))])])]):t._e()])])])])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Serial Number")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Block")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Slug Generator")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Keywords Generator")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Show Channel Data")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Delete")])])])}],!1,null,null,null);e.default=i.exports}});
>>>>>>> 499710a687753338cb3a7a47de2288e27cdd0116
