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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelAccountantLedger.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChannelAccountantLedger.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      ledgerData: [],
      subLedgerData: [],
      ledgerDataFailed: false,
      channelId: "",
      parentAddLedgeUrl: "/api/channel/add/ledger/",
      parentEditLedgeUrl: "/api/channel/edit/ledger/",
      childAddLedgerUrl: "/api/channel/child/add/ledger/",
      parentEditLedgerIndex: "",
      childEditLegderIndex: "",
      urlDecider: "",
      mainUrl: "",
      ledgerForm: {
        name: "",
        payment_type: "credit",
        balance: "",
        admission_check: false
      },
      serverError: {
        name: "",
        payment_type: "",
        balance: "",
        admission_check: false
      },
      showDot: null,
      showDotBool: false,
      cashbookUrl: "",
      admissionUrl: "",
      loader: true,
      showSubDot: null,
      showSubDotBool: false
    };
  },
  props: {
    channelid: {
      type: Number,
      "default": null
    }
  },
  created: function created() {
    this.channelId = this.channelid;
    this.getTheLedgerData();
    this.getTheAdmissionCashbookUrl();
  },
  mounted: function mounted() {},
  methods: {
    showSubLedgerDot: function showSubLedgerDot(index) {
      this.showSubDot = index;
      this.showSubDotBool = !this.showSubDotBool;
    },
    getTheAdmissionCashbookUrl: function getTheAdmissionCashbookUrl() {
      var url = location.pathname.split("/");
      var url2 = location.pathname.split("/");
      url[url.length - 1] = "admission";
      url2[url2.length - 1] = "cashbook";
      this.admissionUrl = location.origin + url.join("/");
      this.cashbookUrl = location.origin + url2.join("/");
    },
    createNewLedger: function createNewLedger() {
      this.urlDecider = "ledger-add";
      this.mainUrl = this.parentAddLedgeUrl + this.channelId;
      $("#ledgerModal").modal("show");
    },
    getTheLedgerData: function getTheLedgerData() {
      var _this = this;

      axios.get("/api/channel/get/ledger/data").then(function (response) {
        _this.ledgerDataFailed = false;
        _this.ledgerData = response.data.data;
      })["catch"](function (errors) {
        Vue.toasted.error("Something went wrong", {
          position: "top-center",
          duration: 5000
        });
        _this.ledgerDataFailed = true;
      });
    },
    deleteParentLedger: function deleteParentLedger(ledgerId, index) {
      var _this2 = this;

      axios.get("/api/channel/delete/parent/ledger/" + ledgerId).then(function (response) {
        if (response.data.msg) {
          _this2.ledgerData.splice(index, 1);
        }
      })["catch"](function (errors) {
        Vue.toasted.error("Something went wrong", {
          position: "top-center",
          duration: 5000
        });
      });
    },
    deleteChildLedger: function deleteChildLedger(ledger, indexOfSubledger) {
      var _this3 = this;

      axios.get("/api/channel/delete/parent/ledger/" + ledger.id).then(function (response) {
        if (response.data.msg) {
          var index = _this3.ledgerData.indexOf(ledger);

          _this3.subLedgerData.splice(indexOfSubledger, 1);

          _this3.ledgerData.splice(index, 1);
        }
      })["catch"](function (errors) {
        Vue.toasted.error("Something went wrong", {
          position: "top-center",
          duration: 5000
        });
      });
    },
    editParentLedger: function editParentLedger(ledger, index) {
      this.mainUrl = this.parentEditLedgeUrl + ledger.id;
      this.parentEditLedgerIndex = index;
      this.ledgerForm.name = ledger.name;
      this.ledgerForm.payment_type = ledger.payment_type;
      this.ledgerForm.balance = ledger.balance;
      this.urlDecider = "ledger-edit";
      $("#ledgerModal").modal("show");
    },
    editChildLedger: function editChildLedger(ledger, index) {
      this.mainUrl = this.parentEditLedgeUrl + ledger.id;
      this.parentEditLedgerIndex = this.ledgerData.indexOf(ledger);
      this.childEditLegderIndex = this.subLedgerData.indexOf(ledger);
      this.ledgerForm.name = ledger.name;
      this.ledgerForm.payment_type = ledger.payment_type;
      this.ledgerForm.balance = ledger.balance;
      this.urlDecider = "ledger-edit-child";
      $("#subLedgerModal").modal("hide");
      $("#ledgerModal").modal("show");
    },
    createSubLedger: function createSubLedger(ledger) {
      this.mainUrl = this.childAddLedgerUrl + this.channelId + "/" + ledger.id;
      this.urlDecider = "ledger-add-child";
      $("#ledgerModal").modal("show");
    },
    getAllSubLedger: function getAllSubLedger(ledger) {
      var _this4 = this;

      this.subLedgerData = [];
      axios.get("/api/channel/get/subledger/ledger/data/" + ledger.id).then(function (response) {
        _this4.loader = false;
        _this4.subLedgerData = response.data.data;
      })["catch"](function (errors) {
        Vue.toasted.error("Something went wrong", {
          position: "top-center",
          duration: 5000
        });
      }); //   this.ledgerData.forEach((element) => {
      //     if (ledger.id === parseInt(element.channel_accountant_ledger_id)) {
      //       this.subLedgerData.push(element);
      //     }
      //   });

      $("#subLedgerModal").modal("show");
    },
    submitForm: function submitForm() {
      var _this5 = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          axios.post(_this5.mainUrl, _this5.ledgerForm).then(function (response) {
            if (_this5.urlDecider === "ledger-edit-child") {
              if (response.data.msg === true) {
                $("#ledgerModal").modal("hide");
                Vue.toasted.success("Ledger is been edited", {
                  position: "top-center",
                  duration: 5000
                });
                _this5.ledgerData[_this5.parentEditLedgerIndex].name = response.data.data.name;
                _this5.ledgerData[_this5.parentEditLedgerIndex].payment_type = response.data.data.payment_type;
                _this5.ledgerData[_this5.parentEditLedgerIndex].balance = response.data.data.balance;
                _this5.subLedgerData[_this5.childEditLegderIndex].name = response.data.data.name;
                _this5.subLedgerData[_this5.childEditLegderIndex].payment_type = response.data.data.payment_type;
                _this5.subLedgerData[_this5.childEditLegderIndex].balance = response.data.data.balance;
                _this5.ledgerForm.name = "";
                _this5.ledgerForm.payment_type = "";
                _this5.ledgerForm.balance = "";
                $("#subLedgerModal").modal("show");
              }
            }

            if (_this5.urlDecider === "ledger-add-child") {
              if (response.data.message === true) {
                $("#ledgerModal").modal("hide");
                Vue.toasted.success("New Sub Ledger is been added", {
                  position: "top-center",
                  duration: 5000
                });
                _this5.ledgerForm.name = "";
                _this5.ledgerForm.payment_type = "";
                _this5.ledgerForm.balance = "";
              }
            }

            if (_this5.urlDecider === "ledger-add") {
              if (response.data.message === true) {
                $("#ledgerModal").modal("hide");
                Vue.toasted.success("New Ledger is been added", {
                  position: "top-center",
                  duration: 5000
                });

                _this5.ledgerData.push(response.data.data);

                _this5.ledgerForm.name = "";
                _this5.ledgerForm.payment_type = "";
                _this5.ledgerForm.balance = "";
              }
            }

            if (_this5.urlDecider === "ledger-edit") {
              if (response.data.msg === true) {
                $("#ledgerModal").modal("hide");
                Vue.toasted.success("Ledger is been edited", {
                  position: "top-center",
                  duration: 5000
                });
                _this5.ledgerData[_this5.parentEditLedgerIndex].name = response.data.data.name;
                _this5.ledgerData[_this5.parentEditLedgerIndex].payment_type = response.data.data.payment_type;
                _this5.ledgerData[_this5.parentEditLedgerIndex].balance = response.data.data.balance;
                _this5.ledgerForm.name = "";
                _this5.ledgerForm.payment_type = "";
                _this5.ledgerForm.balance = "";
              }
            }
          })["catch"](function (errors) {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000
            });

            if (errors.response.data.errors.name) {
              _this5.serverError.name = errors.response.data.errors.name[0];
            }

            if (errors.response.data.errors.payment_type) {
              _this5.serverError.payment_type = errors.response.data.errors.payment_type[0];
            }

            if (errors.response.data.errors.balance) {
              _this5.serverError.balance = errors.response.data.errors.balance[0];
            }
          });
        }
      });
    },
    getTheDotDecide: function getTheDotDecide(index) {
      this.showDot = index;
      this.showDotBool = !this.showDotBool;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelAccountantLedger.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--18-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--18-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChannelAccountantLedger.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.customAction {\r\n  display: block;\r\n  position: absolute;\r\n  z-index: 1;\r\n  right: 120px;\n}\n@media (max-width: 576px) {\n.customAction {\r\n    right: 50px !important;\n}\n}\n@media (min-width: 1768px) {\n.customAction {\r\n    right: 260px !important;\n}\n}\r\n/* 2nd card */\n.customAction1 {\r\n  display: block;\r\n  position: absolute;\r\n  z-index: 1;\r\n  right: 80px;\n}\n@media (max-width: 576px) {\n.customAction1 {\r\n    right: 70px !important;\n}\n}\n@media (min-width: 1768px) {\n.customAction1 {\r\n    right: 80px !important;\n}\n}\n.btn:focus {\r\n  box-shadow: 0 0 0 0.1rem rgba(0, 123, 255, 0.25) !important ;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelAccountantLedger.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--18-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--18-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChannelAccountantLedger.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--18-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--18-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelAccountantLedger.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelAccountantLedger.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelAccountantLedger.vue?vue&type=template&id=e9574baa&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChannelAccountantLedger.vue?vue&type=template&id=e9574baa& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "m-1" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          on: {
            click: function($event) {
              return _vm.createNewLedger()
            }
          }
        },
        [_vm._v("\n      Create Ledger d\n    ")]
      ),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "btn btn-secondary", attrs: { href: _vm.admissionUrl } },
        [_vm._v("Go to Admission")]
      ),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "btn btn-primary", attrs: { href: _vm.cashbookUrl } },
        [_vm._v("Go to Cashbook")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "table-responsive" }, [
      _c("table", { staticClass: "table" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          [
            _vm._l(_vm.ledgerData, function(ledger, index) {
              return _c("tr", { key: index }, [
                _c("td", [
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
                          return _vm.getAllSubLedger(ledger)
                        }
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          "fill-rule": "evenodd",
                          d:
                            "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                          "clip-rule": "evenodd"
                        }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(index + 1))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(ledger.name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(ledger.payment_type))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(ledger.balance))]),
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
                            return _vm.getTheDotDecide(index)
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
                  ]),
                  _vm._v(" "),
                  _vm.showDot === index && _vm.showDotBool === true
                    ? _c("div", { staticClass: "card customAction" }, [
                        _c("div", { staticClass: "card-body" }, [
                          _c(
                            "p",
                            {
                              staticStyle: {
                                color: "black",
                                cursor: "pointer"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.createSubLedger(ledger)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                  Create Sub Ledger\n                  "
                              ),
                              _c(
                                "svg",
                                {
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    height: "23",
                                    width: "34"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      "fill-rule": "evenodd",
                                      d:
                                        "M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z",
                                      "clip-rule": "evenodd"
                                    }
                                  })
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticStyle: { cursor: "pointer" },
                              on: {
                                click: function($event) {
                                  return _vm.editParentLedger(ledger, index)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                  Edit\n                  "
                              ),
                              _c(
                                "svg",
                                {
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    height: "23",
                                    width: "34"
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
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticStyle: { color: "red", cursor: "pointer" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteParentLedger(
                                    ledger.id,
                                    index
                                  )
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                  Delete\n                  "
                              ),
                              _c(
                                "svg",
                                {
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    height: "23",
                                    width: "34"
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
                            ]
                          )
                        ])
                      ])
                    : _vm._e()
                ])
              ])
            }),
            _vm._v(" "),
            _vm.ledgerDataFailed
              ? _c(
                  "button",
                  {
                    on: {
                      click: function($event) {
                        return _vm.getTheLedgerData()
                      }
                    }
                  },
                  [_vm._v("\n          Try Again\n        ")]
                )
              : _vm._e()
          ],
          2
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "ledgerModal",
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
                    _vm.urlDecider === "ledger-add"
                      ? _c("h1", [_vm._v("Create A New Ledger")])
                      : _vm.urlDecider === "ledger-edit"
                      ? _c("h1", [_vm._v("Edit a Ledger")])
                      : _c("h1", [_vm._v("Create a Sub Ledger")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group",
                        class: {
                          "has-error":
                            _vm.errors.has("serverError.name") ||
                            _vm.serverError.name != ""
                        }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.ledgerForm.name,
                              expression: "ledgerForm.name"
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
                            placeholder: "Enter Ledger Name"
                          },
                          domProps: { value: _vm.ledgerForm.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.ledgerForm,
                                "name",
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
                                value: _vm.errors.has("name"),
                                expression: "errors.has('name')"
                              }
                            ],
                            staticClass: "text-danger text-center"
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
                                value: _vm.serverError.name != "",
                                expression: "serverError.name != ''"
                              }
                            ],
                            staticClass: "help text-danger"
                          },
                          [_vm._v(_vm._s(_vm.serverError.name))]
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
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.ledgerForm.payment_type,
                                expression: "ledgerForm.payment_type"
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
                                  _vm.ledgerForm,
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
                            _vm.errors.has("serverError.balance") ||
                            _vm.serverError.balance != ""
                        }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.ledgerForm.balance,
                              expression: "ledgerForm.balance"
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
                            "is-invalid": _vm.errors.has("balance")
                          },
                          attrs: {
                            "data-vv-delay": "20",
                            name: "balance",
                            type: "text",
                            placeholder: "Balance"
                          },
                          domProps: { value: _vm.ledgerForm.balance },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.ledgerForm,
                                "balance",
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
                                value: _vm.errors.has("balance"),
                                expression: "errors.has('balance')"
                              }
                            ],
                            staticClass: "text-danger text-center"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("balance")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.serverError.balance != "",
                                expression: "serverError.balance != ''"
                              }
                            ],
                            staticClass: "help text-danger"
                          },
                          [_vm._v(_vm._s(_vm.serverError.balance))]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm.urlDecider === "ledger-add" ||
                    _vm.urlDecider === "ledger-edit"
                      ? _c(
                          "div",
                          {
                            staticClass: "form-group",
                            class: {
                              "has-error":
                                _vm.errors.has("serverError.admission_check") ||
                                _vm.serverError.admission_check != ""
                            }
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.ledgerForm.admission_check,
                                  expression: "ledgerForm.admission_check"
                                }
                              ],
                              class: {
                                "form-control": true,
                                "is-invalid": _vm.errors.has("admission_check")
                              },
                              attrs: {
                                type: "checkbox",
                                "data-vv-delay": "20",
                                name: "admission_check",
                                placeholder: "Balance"
                              },
                              domProps: {
                                checked: Array.isArray(
                                  _vm.ledgerForm.admission_check
                                )
                                  ? _vm._i(
                                      _vm.ledgerForm.admission_check,
                                      null
                                    ) > -1
                                  : _vm.ledgerForm.admission_check
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.ledgerForm.admission_check,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.ledgerForm,
                                          "admission_check",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.ledgerForm,
                                          "admission_check",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(
                                      _vm.ledgerForm,
                                      "admission_check",
                                      $$c
                                    )
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", [
                              _vm._v("Only check for Admission Ledger")
                            ]),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.errors.has("admission_check"),
                                    expression: "errors.has('admission_check')"
                                  }
                                ],
                                staticClass: "text-danger text-center"
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.errors.first("admission_check"))
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
                                      _vm.serverError.admission_check != "",
                                    expression:
                                      "serverError.admission_check != ''"
                                  }
                                ],
                                staticClass: "help text-danger"
                              },
                              [_vm._v(_vm._s(_vm.serverError.admission_check))]
                            )
                          ]
                        )
                      : _vm._e(),
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
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "subLedgerModal",
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
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _vm.loader
                  ? _c(
                      "div",
                      {
                        staticClass: "spinner-border text-info",
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
                _c("table", { staticClass: "table" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.subLedgerData, function(ledger, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [_vm._v(_vm._s(index + 1))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ledger.name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ledger.payment_type))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ledger.balance))]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function($event) {
                                    return _vm.showSubLedgerDot(index)
                                  }
                                }
                              },
                              [
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
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _vm.showSubDot === index &&
                          _vm.showSubDotBool === true
                            ? _c("div", { staticClass: "card customAction1" }, [
                                _c("div", { staticClass: "card-body" }, [
                                  _c(
                                    "p",
                                    {
                                      staticStyle: { cursor: "pointer" },
                                      on: {
                                        click: function($event) {
                                          return _vm.editChildLedger(
                                            ledger,
                                            index
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      Edit\n                      "
                                      ),
                                      _c(
                                        "svg",
                                        {
                                          attrs: {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            height: "23",
                                            width: "34"
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
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticStyle: {
                                        color: "red",
                                        cursor: "pointer"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteChildLedger(
                                            ledger,
                                            index
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      Delete\n                      "
                                      ),
                                      _c(
                                        "svg",
                                        {
                                          attrs: {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            height: "23",
                                            width: "34"
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
                                    ]
                                  )
                                ])
                              ])
                            : _vm._e()
                        ])
                      }),
                      _vm._v(" "),
                      _vm.ledgerDataFailed
                        ? _c(
                            "button",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.getTheLedgerData()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                Try Again\n              "
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    2
                  )
                ])
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
        _c("th", [_vm._v("Sub-Ledger")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col " } }, [_vm._v("Id")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Ledger Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Credit/Debit")]),
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col " } }, [_vm._v("Id")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Ledger Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Credit/Debit")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Balance")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
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

/***/ "./resources/js/ChannelAccountantLedger.js":
/*!*************************************************!*\
  !*** ./resources/js/ChannelAccountantLedger.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component("channel-accountant-ledger", __webpack_require__(/*! ./components/ChannelAccountantLedger.vue */ "./resources/js/components/ChannelAccountantLedger.vue")["default"]);
var element = document.getElementById("channel-accountant-ledger");

if (typeof element != "undefined" && element != null) {
  var cart = new Vue({
    el: "#channel-accountant-ledger"
  });
}

/***/ }),

/***/ "./resources/js/components/ChannelAccountantLedger.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/ChannelAccountantLedger.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelAccountantLedger_vue_vue_type_template_id_e9574baa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelAccountantLedger.vue?vue&type=template&id=e9574baa& */ "./resources/js/components/ChannelAccountantLedger.vue?vue&type=template&id=e9574baa&");
/* harmony import */ var _ChannelAccountantLedger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelAccountantLedger.vue?vue&type=script&lang=js& */ "./resources/js/components/ChannelAccountantLedger.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChannelAccountantLedger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChannelAccountantLedger.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/ChannelAccountantLedger.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChannelAccountantLedger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChannelAccountantLedger_vue_vue_type_template_id_e9574baa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChannelAccountantLedger_vue_vue_type_template_id_e9574baa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ChannelAccountantLedger.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ChannelAccountantLedger.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/ChannelAccountantLedger.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelAccountantLedger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelAccountantLedger.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelAccountantLedger.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelAccountantLedger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ChannelAccountantLedger.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/ChannelAccountantLedger.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_18_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_18_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelAccountantLedger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--18-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--18-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelAccountantLedger.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelAccountantLedger.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_18_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_18_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelAccountantLedger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_18_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_18_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelAccountantLedger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_18_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_18_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelAccountantLedger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_18_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_18_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelAccountantLedger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_18_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_18_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelAccountantLedger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ChannelAccountantLedger.vue?vue&type=template&id=e9574baa&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ChannelAccountantLedger.vue?vue&type=template&id=e9574baa& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelAccountantLedger_vue_vue_type_template_id_e9574baa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelAccountantLedger.vue?vue&type=template&id=e9574baa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelAccountantLedger.vue?vue&type=template&id=e9574baa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelAccountantLedger_vue_vue_type_template_id_e9574baa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelAccountantLedger_vue_vue_type_template_id_e9574baa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 20:
/*!*******************************************************!*\
  !*** multi ./resources/js/ChannelAccountantLedger.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\bridyc\resources\js\ChannelAccountantLedger.js */"./resources/js/ChannelAccountantLedger.js");


/***/ })

/******/ });