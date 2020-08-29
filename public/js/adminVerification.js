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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      slugData: {
        slug: ''
      },
      slugError: {
        slug: ''
      },
      slugUserId: '',
      slugIndex: '',
      metaData: {
        meta_keywords: '',
        meta_descriptions: ''
      },
      metaDataError: {
        meta_keywords: '',
        meta_descriptions: ''
      },
      metaKeywordsDescriptionsId: ''
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
    onTheStatus: function onTheStatus(userId, Id, index) {
      var _this2 = this;

      axios.get("verification/api/updatingforon/" + userId + "/" + Id).then(function (response) {
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
      var slug = title + '-' + name;
      this.slugUserId = userId;
      this.slugData.slug = this.slugify(slug);
      this.slugIndex = index;
      $('#slugGenerator').modal('show');
    },
    slugify: function slugify(string) {
      var a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
      var b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
      var p = new RegExp(a.split('').join('|'), 'g');
      return string.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, function (c) {
        return b.charAt(a.indexOf(c));
      }) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
    },
    slugGenerated: function slugGenerated() {
      var _this4 = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          axios.post('verification/api/channel-slug/' + _this4.slugUserId, _this4.slugData).then(function (response) {
            if (response.data.msg === true) {
              Vue.toasted.success("Slug is created", {
                position: "top-center",
                duration: 5000
              });
              $('#slugGenerator').modal('hide');
            }
          })["catch"](function (errors) {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000
            });

            if (errors.response.data.errors.slug) {
              _this4.slugError.slug = errors.response.data.errors.slug[0];
            }
          });
        }
      });
    },
    getMetaModel: function getMetaModel(verification) {
      this.metaKeywordsDescriptionsId = '';
      this.metaKeywordsDescriptionsId = verification.id;

      if (verification.meta_keywords != undefined) {
        this.metaData.meta_keywords = this.verification.meta_keywords;
      }

      if (verification.meta_descriptions != undefined) {
        this.metaData.meta_descriptions = this.verification.meta_descriptions;
      }

      $('#metaGenerator').modal('show');
    },
    metaGenerationForm: function metaGenerationForm() {
      var _this5 = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          console.log('called');
          axios.post('verification/api/keywords/description/' + _this5.metaKeywordsDescriptionsId, _this5.metaData).then(function (response) {
            if (response.data.msg === true) {
              Vue.toasted.success("Meta data is created", {
                position: "top-center",
                duration: 5000
              });
              $('#slugGenerator').modal('hide');
            }
          })["catch"](function (errors) {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000
            });

            if (errors.response.data.errors.meta_keywords) {
              _this5.metaDataError.meta_keywords = errors.response.data.errors.meta_keywords[0];
            }

            if (errors.response.data.errors.meta_descriptions) {
              _this5.metaDataError.meta_descriptions = errors.response.data.errors.meta_descriptions[0];
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
                    [_vm._v("Block")]
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
                    [_vm._v("unBlock")]
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
                    [_vm._v("ON")]
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
                    [_vm._v("OFF")]
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
                  attrs: {
                    disabled:
                      verification.slug_creation === "created" ? true : false
                  },
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
                [_vm._v("\n                  URl Gen.\n            ")]
              )
            ]),
            _vm._v(" "),
            _c("td", [
              _c(
                "button",
                {
                  staticClass: "btn btn-warning",
                  on: {
                    click: function($event) {
                      return _vm.getMetaModel(verification)
                    }
                  }
                },
                [_vm._v("\n              Meta\n            ")]
              )
            ]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(verification.user.name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(verification.user.email))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(verification.state.name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(verification.district.name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(verification.village.name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(verification.language.name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(verification.udise))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(verification.title))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(verification.founded))])
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Block")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Slug Generator ")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Keywords Generator")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("State")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("District")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("City")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Medium")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Udise")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Founded")])
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

/***/ 2:
/*!*************************************************!*\
  !*** multi ./resources/js/adminVerification.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\bridyc\resources\js\adminVerification.js */"./resources/js/adminVerification.js");


/***/ })

/******/ });