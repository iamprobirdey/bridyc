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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Achievement.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Achievement.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_picture_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-picture-input */ "./node_modules/vue-picture-input/PictureInput.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      achievementData: [],
      disable: false,
      showAchievement: true,
      openAchievementForm: false,
      formData: {
        image_path: "",
        title: "",
        description: "",
        date: ""
      },
      serverErrors: {
        image_path: "",
        title: "",
        description: "",
        date: ""
      },
      channelId: "",
      additionUrl: "",
      url: location.origin + "/api/achievement/",
      baseUrl: location.origin + "/",
      editingUrlChecker: false,
      achievementId: "",
      achievementIndex: "",
      authValue: "",
      userId: ""
    };
  },
  props: {
    achievement: {
      type: Array,
      "default": null
    },
    userid: {
      type: Number,
      "default": null
    }
  },
  created: function created() {
    this.userId = this.userid;
    this.achievementData = this.achievement[0].achievement;
    this.channelId = this.achievement[0].id;
    this.authValue = this.authId;
  },
  mounted: function mounted() {},
  methods: {
    addAchievement: function addAchievement() {
      this.openAchievementForm = true;
      this.formData.title = "";
      this.formData.description = "";
      this.formData.date = "";
      this.showAchievement = false;
    },
    achievementSubmit: _.debounce(function () {
      var _this = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          _this.disable = true;
          if (_this.formData.image_path === "") _this.serverErrors.image_path = "Image is required";
          var formUrl = "";

          if (_this.editingUrlChecker) {
            _this.additionUrl = "edit/";
            formUrl = _this.url + _this.additionUrl + _this.achievementId;
          } else {
            _this.additionUrl = "add/";
            formUrl = _this.url + _this.additionUrl;
          }

          axios.post(formUrl, _this.formData).then(function (response) {
            if (response.data.message === true) {
              _this.disable = false;
              _this.showAchievement = true;
              Vue.toasted.success("Achievement data is created", {
                position: "top-center",
                duration: 5000
              });

              if (_this.editingUrlChecker) {
                _this.achievementData.splice(_this.achievementIndex, 1);
              }

              _this.achievementData.push(response.data.data);

              _this.openAchievementForm = false;
              _this.editingUrlChecker = false;
            }
          })["catch"](function (errors) {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000
            });
          });
        }
      });
    }, 500),
    onChange: function onChange(image) {
      if (this.$refs.pictureInput.image) this.formData.image_path = this.$refs.pictureInput.image;
    },
    editTheForm: function editTheForm(data, index) {
      this.editingUrlChecker = true;
      this.formData.title = data.title;
      this.formData.description = data.description;
      this.formData.date = data.date;
      this.achievementId = data.id;
      this.openAchievementForm = true;
      this.achievementIndex = index;
      this.showAchievement = false;
    },
    canCleSubmittion: function canCleSubmittion() {
      this.editingUrlChecker = false;
      this.openAchievementForm = false;
      this.showAchievement = true;
    }
  },
  components: {
    PictureInput: vue_picture_input__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-picture-input/PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--17-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--17-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-picture-input/PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.picture-input[data-v-431cb064] {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n}\n.preview-container[data-v-431cb064] {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 auto;\n  cursor: pointer;\n  overflow: hidden;\n}\n.picture-preview[data-v-431cb064] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 10001;\n  box-sizing: border-box;\n  background-color: rgba(200,200,200,.25);\n}\n.picture-preview.dragging-over[data-v-431cb064] {\n  -webkit-filter: brightness(0.5);\n          filter: brightness(0.5);\n}\n.picture-inner[data-v-431cb064] {\n  position: relative;\n  z-index: 10002;\n  pointer-events: none;\n  box-sizing: border-box;\n  margin: 1em auto;\n  padding: 0.5em;\n  /*border: .3em dashed rgba(66,66,66,.15); commented because of cover and icon in indtitute edit channel*/\n  border: 4px dashed rgba(66,66,66,.15);\n  border-radius: 8px;\n  width: calc(100% - 2.5em);\n  height: calc(100% - 2.5em);\n  display: table;\n}\n.picture-inner .picture-inner-text[data-v-431cb064] {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  /*font-size: 2em; commented because of cover and icon in institute edit channel*/\n  font-size: 18px;\n  line-height: 1.5;\n}\nbutton[data-v-431cb064] {\n  margin: 1em .25em;\n  cursor: pointer;\n}\ninput[type=file][data-v-431cb064] {\n  display: none;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-picture-input/PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--17-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--17-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-picture-input/PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader??ref--17-1!../vue-loader/lib/loaders/stylePostLoader.js!../postcss-loader/src??ref--17-2!../vue-loader/lib??vue-loader-options!./PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-picture-input/PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

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

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-picture-input/PictureInput.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-picture-input/PictureInput.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'picture-input',
  props: {
    width: {
      type: [String, Number],
      default: Number.MAX_SAFE_INTEGER
    },
    height: {
      type: [String, Number],
      default: Number.MAX_SAFE_INTEGER
    },
    margin: {
      type: [String, Number],
      default: 0
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    size: {
      type: [String, Number],
      default: Number.MAX_SAFE_INTEGER
    },
    name: {
      type: String,
      default: null
    },
    id: {
      type: [String, Number],
      default: null
    },
    buttonClass: {
      type: String,
      default: 'btn btn-primary button'
    },
    removeButtonClass: {
      type: String,
      default: 'btn btn-secondary button secondary'
    },
    aspectButtonClass: {
      type: String,
      default: 'btn btn-secondary button secondary'
    },
    prefill: {
      type: [String, File],
      default: ''
    },
    prefillOptions: {
      type: Object,
      default: () => {
        return {}
      }
    },
    crop: {
      type: Boolean,
      default: true
    },
    radius: {
      type: [String, Number],
      default: 0
    },
    removable: {
      type: Boolean,
      default: false
    },
    hideChangeButton: {
      type: Boolean,
      /*default: false changed due to icon and cover in institute edit channel*/
      default: true

    },
    autoToggleAspectRatio: {
      type: Boolean,
      default: false
    },
    toggleAspectRatio: {
      type: Boolean,
      default: false
    },
    changeOnClick: {
      type: Boolean,
      default: true
    },
    plain: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      /*default: 10000  commented because of cover and icon in institute edit channel*/
      default: 1
    },
    alertOnError: {
      type: Boolean,
      default: true
    },
    customStrings: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  watch: {
    prefill () {
      if (this.prefill) {
        this.preloadImage(this.prefill, this.prefillOptions)
      } else {
        this.removeImage()
      }
    }
  },
  data () {
    return {
      imageSelected: false,
      previewHeight: 0,
      previewWidth: 0,
      draggingOver: false,
      canvasWidth: 0,
      canvasHeight: 0,
      strings: {
        upload: '<p>Your device does not support file uploading.</p>',
        drag: 'Drag an image or <br>click here to select a file',
        tap: 'Tap here to select a photo <br>from your gallery',
       /* change: 'Change Photo', commented because of cover and icon in edit channel*/
        aspect: 'Landscape/Portrait',
        remove: 'Remove Photo',
        select: 'Select a Photo',
        selected: '<p>Photo successfully selected!</p>',
        fileSize: 'The file size exceeds the limit',
        fileType: 'This file type is not supported.'
      }
    }
  },
  mounted () {
    this.updateStrings()
    if (this.prefill) {
      this.preloadImage(this.prefill, this.prefillOptions)
    }

    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
      this.onResize()
    })
    if (this.supportsPreview) {
      this.pixelRatio = Math.round(window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI)
      const canvas = this.$refs.previewCanvas
      if (canvas.getContext) {
        this.context = canvas.getContext('2d')
        this.context.scale(this.pixelRatio, this.pixelRatio)
      }
    }
    if (this.accept !== 'image/*') {
      this.fileTypes = this.accept.split(',')
      this.fileTypes = this.fileTypes.map(s => s.trim())
    }

    this.canvasWidth = this.width
    this.canvasHeight = this.height

    this.$on('error', this.onError)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
    this.$off('error', this.onError)
  },
  methods: {
    updateStrings () {
      for (let s in this.customStrings) {
        if (s in this.strings && typeof this.customStrings[s] === 'string') {
          this.strings[s] = this.customStrings[s]
        }
      }
    },
    onClick () {
      if (!this.imageSelected) {
        this.selectImage()
        return
      }

      if (this.changeOnClick) {
        this.selectImage()
      }

      this.$emit('click')
    },
    onResize () {
      this.resizeCanvas()

      if (this.imageObject) {
        this.drawImage(this.imageObject)
      }
    },
    onDragStart () {
      if (!this.supportsDragAndDrop) {
        return
      }
      this.draggingOver = true
    },
    onDragStop () {
      if (!this.supportsDragAndDrop) {
        return
      }
      this.draggingOver = false
    },
    onFileDrop (e) {
      this.onDragStop()
      this.onFileChange(e)
    },
    onFileChange (e, prefill) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      if (files[0].size <= 0 || files[0].size > this.size * 1024 * 1024) {
        this.$emit('error', {
          type: 'fileSize',
          fileSize: files[0].size,
          fileType: files[0].type,
          fileName: files[0].name,
          message: this.strings.fileSize + ' (' + this.size + 'MB)'
        })
        return
      }
      if (files[0].name === this.fileName && files[0].size === this.fileSize && this.fileModified === files[0].lastModified) {
        return
      }

      this.file = files[0]
      this.fileName = files[0].name
      this.fileSize = files[0].size
      this.fileModified = files[0].lastModified
      this.fileType = files[0].type

      if (this.accept === 'image/*') {
        if (files[0].type.substr(0, 6) !== 'image/') {
          return
        }
      } else {
        if (this.fileTypes.indexOf(files[0].type) === -1) {
          this.$emit('error', {
            type: 'fileType',
            fileSize: files[0].size,
            fileType: files[0].type,
            fileName: files[0].name,
            message: this.strings.fileType
          })
          return
        }
      }
      this.imageSelected = true
      this.image = ''
      if (this.supportsPreview) {
        this.loadImage(files[0], prefill || false)
      } else {
        if (prefill) {
          this.$emit('prefill')
        } else {
          this.$emit('change', this.image)
        }
      }
    },
    onError (error) {
      if (this.alertOnError) {
        alert(error.message)
      }
    },
    loadImage (file, prefill) {
      this.getEXIFOrientation(file, orientation => {
        this.setOrientation(orientation)
        let reader = new FileReader()
        reader.onload = e => {
          this.image = e.target.result
          if (prefill) {
            this.$emit('prefill')
          } else {
            this.$emit('change', this.image)
          }
          this.imageObject = new Image()
          this.imageObject.onload = () => {
            if (this.autoToggleAspectRatio) {
              let canvasOrientation = this.getOrientation(this.canvasWidth, this.canvasHeight)
              let imageOrientation = this.getOrientation(this.imageObject.width, this.imageObject.height)
              if (canvasOrientation !== imageOrientation) {
                this.rotateCanvas()
              }
            }
            this.drawImage(this.imageObject)
          }
          this.imageObject.src = this.image
        }
        reader.readAsDataURL(file)
      })
    },
    drawImage (image) {
      this.imageWidth = image.width
      this.imageHeight = image.height
      this.imageRatio = image.width / image.height
      let offsetX = 0
      let offsetY = 0
      let scaledWidth = this.previewWidth
      let scaledHeight = this.previewHeight
      const previewRatio = this.previewWidth / this.previewHeight
      if (this.crop) {
        if (this.imageRatio >= previewRatio) {
          scaledWidth = scaledHeight * this.imageRatio
          offsetX = (this.previewWidth - scaledWidth) / 2
        } else {
          scaledHeight = scaledWidth / this.imageRatio
          offsetY = (this.previewHeight - scaledHeight) / 2
        }
      } else {
        if (this.imageRatio >= previewRatio) {
          scaledHeight = scaledWidth / this.imageRatio
          offsetY = (this.previewHeight - scaledHeight) / 2
        } else {
          scaledWidth = scaledHeight * this.imageRatio
          offsetX = (this.previewWidth - scaledWidth) / 2
        }
      }
      const canvas = this.$refs.previewCanvas
      canvas.style.background = 'none'
      canvas.width = this.previewWidth * this.pixelRatio
      canvas.height = this.previewHeight * this.pixelRatio
      this.context.setTransform(1, 0, 0, 1, 0, 0)
      this.context.clearRect(0, 0, canvas.width, canvas.height)
      if (this.rotate) {
        this.context.translate(offsetX * this.pixelRatio, offsetY * this.pixelRatio)
        this.context.translate(scaledWidth / 2 * this.pixelRatio, scaledHeight / 2 * this.pixelRatio)
        this.context.rotate(this.rotate)
        offsetX = -scaledWidth / 2
        offsetY = -scaledHeight / 2
      }
      this.context.drawImage(image,
        offsetX * this.pixelRatio,
        offsetY * this.pixelRatio,
        scaledWidth * this.pixelRatio,
        scaledHeight * this.pixelRatio)
    },
    selectImage () {
      this.$refs.fileInput.click()
    },
    removeImage () {
      this.$refs.fileInput.value = ''
      this.$refs.fileInput.type = ''
      this.$refs.fileInput.type = 'file'
      this.fileName = ''
      this.fileType = ''
      this.fileSize = 0
      this.fileModified = 0
      this.imageSelected = false
      this.image = ''
      this.file = null
      this.imageObject = null
      this.$refs.previewCanvas.style.backgroundColor = 'rgba(200,200,200,.25)'
      this.$refs.previewCanvas.width = this.previewWidth * this.pixelRatio
      this.$emit('remove')
    },
    rotateImage () {
      this.rotateCanvas()

      if (this.imageObject) {
        this.drawImage(this.imageObject)
      }

      let newOrientation = this.getOrientation(this.canvasWidth, this.canvasHeight)
      this.$emit('aspectratiochange', newOrientation)
    },
    resizeCanvas () {
      let previewRatio = this.canvasWidth / this.canvasHeight
      let newWidth = this.$refs.container.clientWidth
      if (!this.toggleAspectRatio && newWidth === this.containerWidth) {
        return
      }
      this.containerWidth = newWidth
      this.previewWidth = Math.min(this.containerWidth - this.margin * 2, this.canvasWidth)
      this.previewHeight = this.previewWidth / previewRatio
    },
    getOrientation (width, height) {
      let orientation = 'square'

      if (width > height) {
        orientation = 'landscape'
      } else if (width < height) {
        orientation = 'portrait'
      }

      return orientation
    },
    switchCanvasOrientation () {
      const canvasWidth = this.canvasWidth
      const canvasHeight = this.canvasHeight

      this.canvasWidth = canvasHeight
      this.canvasHeight = canvasWidth
    },
    rotateCanvas () {
      this.switchCanvasOrientation()
      this.resizeCanvas()
    },
    setOrientation (orientation) {
      this.rotate = false
      if (orientation === 8) {
        this.rotate = -Math.PI / 2
      } else if (orientation === 6) {
        this.rotate = Math.PI / 2
      } else if (orientation === 3) {
        this.rotate = -Math.PI
      }
    },
    getEXIFOrientation (file, callback) {
      var reader = new FileReader()
      reader.onload = e => {
        var view = new DataView(e.target.result)
        if (view.getUint16(0, false) !== 0xFFD8) {
          return callback(-2)
        }
        var length = view.byteLength
        var offset = 2
        while (offset < length) {
          var marker = view.getUint16(offset, false)
          offset += 2
          if (marker === 0xFFE1) {
            if (view.getUint32(offset += 2, false) !== 0x45786966) {
              return callback(-1)
            }
            var little = view.getUint16(offset += 6, false) === 0x4949
            offset += view.getUint32(offset + 4, little)
            var tags = view.getUint16(offset, little)
            offset += 2
            for (var i = 0; i < tags; i++) {
              if (view.getUint16(offset + (i * 12), little) === 0x0112) {
                return callback(view.getUint16(offset + (i * 12) + 8, little))
              }
            }
          } else if ((marker & 0xFF00) !== 0xFF00) {
            break
          } else {
            offset += view.getUint16(offset, false)
          }
        }
        return callback(-1)
      }
      reader.readAsArrayBuffer(file.slice(0, 65536))
    },
    preloadImage (source, options) {
      // ie 11 support
      let File = window.File
      try {
        new File([], '') // eslint-disable-line
      } catch (e) {
        File = class File extends Blob {
          constructor (chunks, filename, opts = {}) {
            super(chunks, opts)
            this.lastModifiedDate = new Date()
            this.lastModified = +this.lastModifiedDate
            this.name = filename
          }
        }
      }
      options = Object.assign({}, options)
      if (typeof source === 'object') {
        this.imageSelected = true
        this.image = ''
        if (this.supportsPreview) {
          this.loadImage(source, true)
        } else {
          this.$emit('prefill')
        }
        return
      }
      let headers = new Headers()
      headers.append('Accept', 'image/*')
      fetch(source, {
        method: 'GET',
        mode: 'cors',
        headers: headers
      }).then(response => {
        return response.blob()
      })
      .then(imageBlob => {
        let e = { target: { files: [] } }
        const fileName = options.fileName || source.split('/').slice(-1)[0]
        let mediaType = options.mediaType || ('image/' + (options.fileType || fileName.split('.').slice(-1)[0]))
        mediaType = mediaType.replace('jpg', 'jpeg')
        e.target.files[0] = new File([imageBlob], fileName, { type: mediaType })
        this.onFileChange(e, true)
      })
      .catch(err => {
        this.$emit('error', {
          type: 'failedPrefill',
          message: 'Failed loading prefill image: ' + err
        })
      })
    }
  },
  computed: {
    supportsUpload () {
      if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) {
        return false
      }
      const el = document.createElement('input')
      el.type = 'file'
      return !el.disabled
    },
    supportsPreview () {
      return window.FileReader && !!window.CanvasRenderingContext2D
    },
    supportsDragAndDrop () {
      const div = document.createElement('div')
      return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && !('ontouchstart' in window || navigator.msMaxTouchPoints)
    },
    computedClasses () {
      const classObject = {}
      classObject['dragging-over'] = this.draggingOver
      return classObject
    },
    fontSize () {
      return Math.min(0.04 * this.previewWidth, 21) + 'px'
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-picture-input/PictureInput.vue?vue&type=template&id=431cb064&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-picture-input/PictureInput.vue?vue&type=template&id=431cb064&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      ref: "container",
      staticClass: "picture-input",
      attrs: { id: "picture-input" }
    },
    [
      !_vm.supportsUpload
        ? _c("div", { domProps: { innerHTML: _vm._s(_vm.strings.upload) } })
        : _vm.supportsPreview
        ? _c("div", [
            _c(
              "div",
              {
                staticClass: "preview-container",
                style: {
                  maxWidth: _vm.previewWidth + "px",
                  height: _vm.previewHeight + "px",
                  borderRadius: _vm.radius + "%"
                }
              },
              [
                _c("canvas", {
                  ref: "previewCanvas",
                  staticClass: "picture-preview",
                  class: _vm.computedClasses,
                  style: {
                    height: _vm.previewHeight + "px",
                    zIndex: _vm.zIndex + 1
                  },
                  on: {
                    drag: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                    },
                    dragover: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                    },
                    dragstart: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.onDragStart($event)
                    },
                    dragenter: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.onDragStart($event)
                    },
                    dragend: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.onDragStop($event)
                    },
                    dragleave: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.onDragStop($event)
                    },
                    drop: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.onFileDrop($event)
                    },
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.onClick($event)
                    }
                  }
                }),
                _vm._v(" "),
                !_vm.imageSelected && !_vm.plain
                  ? _c(
                      "div",
                      {
                        staticClass: "picture-inner",
                        style: {
                          top: -_vm.previewHeight + "px",
                          marginBottom: -_vm.previewHeight + "px",
                          fontSize: _vm.fontSize,
                          borderRadius: _vm.radius + "%",
                          zIndex: _vm.zIndex + 2
                        }
                      },
                      [
                        _vm.supportsDragAndDrop
                          ? _c("span", {
                              staticClass: "picture-inner-text",
                              domProps: { innerHTML: _vm._s(_vm.strings.drag) }
                            })
                          : _c("span", {
                              staticClass: "picture-inner-text",
                              domProps: { innerHTML: _vm._s(_vm.strings.tap) }
                            })
                      ]
                    )
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _vm.imageSelected && !_vm.hideChangeButton
              ? _c(
                  "button",
                  {
                    class: _vm.buttonClass,
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.selectImage($event)
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.strings.change))]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.imageSelected && _vm.removable
              ? _c(
                  "button",
                  {
                    class: _vm.removeButtonClass,
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.removeImage($event)
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.strings.remove))]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.imageSelected &&
            _vm.toggleAspectRatio &&
            _vm.width !== _vm.height
              ? _c(
                  "button",
                  {
                    class: _vm.aspectButtonClass,
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.rotateImage($event)
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.strings.aspect))]
                )
              : _vm._e()
          ])
        : _c("div", [
            !_vm.imageSelected
              ? _c(
                  "button",
                  {
                    class: _vm.buttonClass,
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.selectImage($event)
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.strings.select))]
                )
              : _c("div", [
                  _c("div", {
                    domProps: { innerHTML: _vm._s(_vm.strings.selected) }
                  }),
                  _vm._v(" "),
                  !_vm.hideChangeButton
                    ? _c(
                        "button",
                        {
                          class: _vm.buttonClass,
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.selectImage($event)
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.strings.change))]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.removable
                    ? _c(
                        "button",
                        {
                          class: _vm.removeButtonClass,
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.removeImage($event)
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.strings.remove))]
                      )
                    : _vm._e()
                ])
          ]),
      _vm._v(" "),
      _c("input", {
        ref: "fileInput",
        attrs: { type: "file", name: _vm.name, id: _vm.id, accept: _vm.accept },
        on: { change: _vm.onFileChange }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Achievement.vue?vue&type=template&id=0fa45a94&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Achievement.vue?vue&type=template&id=0fa45a94&scoped=true& ***!
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
  return _c("div", [
    _c("h4", { staticClass: "text-center" }, [
      _vm._v("INSTITUTE'S ACHIEVEMENTS")
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("h6", { staticClass: "d-inline" }, [
      _vm._v("Add your institute's achievements here")
    ]),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "btn btnadd p-1 ml-1 rounded-0",
        on: {
          click: function($event) {
            return _vm.addAchievement()
          }
        }
      },
      [_c("i", { staticClass: "fa fa-plus", attrs: { "aria-hidden": "true" } })]
    ),
    _vm._v(" "),
    _vm.showAchievement
      ? _c(
          "div",
          { staticClass: "row my-5" },
          _vm._l(_vm.achievementData, function(achievement, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass: "card shadow mx-auto sidebar-facard mb-4"
              },
              [
                _c("img", {
                  attrs: {
                    src:
                      _vm.baseUrl +
                      "media/channel/" +
                      _vm.userId +
                      "/achievement/" +
                      achievement.image_path
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "card-body mt-n1" }, [
                  _c("h6", { staticClass: "card-title my-n1" }, [
                    _vm._v(_vm._s(achievement.title))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "card-text" }, [
                    _vm._v(
                      "\n          " +
                        _vm._s(achievement.description.substr(0, 20)) +
                        "\n        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "card-text" }, [
                    _vm._v(
                      "\n          " + _vm._s(achievement.date) + "\n        "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-center" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn mb-5 editachieve",
                      attrs: {
                        "data-toggle": "tooltip",
                        "data-placement": "right",
                        title: "Edit"
                      },
                      on: {
                        click: function($event) {
                          return _vm.editTheForm(achievement, index)
                        }
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-pencil",
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
                  )
                ])
              ]
            )
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _vm.openAchievementForm
      ? _c("div", { staticClass: "mt-5" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.achievementSubmit()
                }
              }
            },
            [
              _c("picture-input", {
                ref: "pictureInput",
                attrs: {
                  width: "200",
                  height: "200",
                  margin: "16",
                  accept: "image/jpeg, image/png",
                  size: "10",
                  "button-class": "btn",
                  "custom-strings": {
                    upload: "<h1>Bummer!</h1>",
                    drag: "Drag a 😺 GIF or GTFO"
                  }
                },
                on: { change: _vm.onChange }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.serverErrors.image_path != "",
                      expression: "serverErrors.image_path != ''"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [_vm._v(_vm._s(_vm.serverErrors.image_path))]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group row mx-lg-5",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.title") ||
                      _vm.serverErrors.title != ""
                  }
                },
                [
                  _c(
                    "label",
                    { staticClass: "col-sm-3 col-form-label text-md-right" },
                    [_vm._v("Achievement Title :")]
                  ),
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
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "col-sm-9 mx-1 mx-md-auto",
                    class: {
                      "form-control": true,
                      "is-invalid": _vm.errors.has("title")
                    },
                    attrs: {
                      "data-vv-delay": "20",
                      name: "title",
                      type: "text",
                      placeholder:
                        "Example: Student name, Institute's team achievement"
                    },
                    domProps: { value: _vm.formData.title },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.formData, "title", $event.target.value)
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
                          value: _vm.errors.has("title"),
                          expression: "errors.has('title')"
                        }
                      ],
                      staticClass: "text-danger mx-auto"
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
                      staticClass: "help is-danger mx-auto"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.title))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group row mx-lg-5",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.descriptions") ||
                      _vm.serverErrors.descriptions != ""
                  }
                },
                [
                  _c(
                    "label",
                    { staticClass: "col-sm-3 col-form-label text-md-right" },
                    [_vm._v("\n          Achievement Description :")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formData.description,
                        expression: "formData.description"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "col-sm-9 mx-1 mx-md-auto",
                    class: {
                      "form-control": true,
                      "is-invalid": _vm.errors.has("descriptions")
                    },
                    attrs: {
                      "data-vv-delay": "20",
                      name: "descriptions",
                      type: "text",
                      placeholder: "Describe achievement in seven words"
                    },
                    domProps: { value: _vm.formData.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.formData,
                          "description",
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
                          value: _vm.errors.has("descriptions"),
                          expression: "errors.has('descriptions')"
                        }
                      ],
                      staticClass: "text-danger mx-auto"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("descriptions")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.descriptions != "",
                          expression: "serverErrors.descriptions != ''"
                        }
                      ],
                      staticClass: "help is-danger mx-auto"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.descriptions))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group row mx-lg-5",
                  class: {
                    "has-error":
                      _vm.errors.has("date") || _vm.serverErrors.date != ""
                  }
                },
                [
                  _c(
                    "label",
                    { staticClass: "col-sm-3 col-form-label text-md-right" },
                    [_vm._v("\n          Achievement Event Date :")]
                  ),
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
                    staticClass: "col-sm-9 mx-1 mx-md-auto",
                    class: {
                      "form-control": true,
                      "is-invalid": _vm.errors.has("date")
                    },
                    attrs: {
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
              _c("div", { staticClass: "text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success rounded-0",
                    attrs: { type: "btn" },
                    on: {
                      click: function($event) {
                        return _vm.canCleSubmittion()
                      }
                    }
                  },
                  [_vm._v("\n          Cancel\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btnsubmit mt-n2",
                    attrs: { type: "submit", disabled: _vm.disable }
                  },
                  [_vm._v("\n          Submit\n        ")]
                )
              ])
            ],
            1
          )
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

/***/ "./node_modules/vue-picture-input/PictureInput.vue":
/*!*********************************************************!*\
  !*** ./node_modules/vue-picture-input/PictureInput.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PictureInput_vue_vue_type_template_id_431cb064_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PictureInput.vue?vue&type=template&id=431cb064&scoped=true& */ "./node_modules/vue-picture-input/PictureInput.vue?vue&type=template&id=431cb064&scoped=true&");
/* harmony import */ var _PictureInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PictureInput.vue?vue&type=script&lang=js& */ "./node_modules/vue-picture-input/PictureInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PictureInput_vue_vue_type_style_index_0_id_431cb064_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css& */ "./node_modules/vue-picture-input/PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PictureInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PictureInput_vue_vue_type_template_id_431cb064_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PictureInput_vue_vue_type_template_id_431cb064_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "431cb064",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-picture-input/PictureInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-picture-input/PictureInput.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./node_modules/vue-picture-input/PictureInput.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib??vue-loader-options!./PictureInput.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-picture-input/PictureInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-picture-input/PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-picture-input/PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_17_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_17_2_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_style_index_0_id_431cb064_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../style-loader!../css-loader??ref--17-1!../vue-loader/lib/loaders/stylePostLoader.js!../postcss-loader/src??ref--17-2!../vue-loader/lib??vue-loader-options!./PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-picture-input/PictureInput.vue?vue&type=style&index=0&id=431cb064&scoped=true&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_17_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_17_2_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_style_index_0_id_431cb064_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_17_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_17_2_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_style_index_0_id_431cb064_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_17_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_17_2_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_style_index_0_id_431cb064_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_17_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_17_2_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_style_index_0_id_431cb064_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_17_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_17_2_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_style_index_0_id_431cb064_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/vue-picture-input/PictureInput.vue?vue&type=template&id=431cb064&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./node_modules/vue-picture-input/PictureInput.vue?vue&type=template&id=431cb064&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_template_id_431cb064_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../vue-loader/lib??vue-loader-options!./PictureInput.vue?vue&type=template&id=431cb064&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-picture-input/PictureInput.vue?vue&type=template&id=431cb064&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_template_id_431cb064_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_PictureInput_vue_vue_type_template_id_431cb064_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/achievement.js":
/*!*************************************!*\
  !*** ./resources/js/achievement.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component("channel-achievement", __webpack_require__(/*! ./components/Achievement.vue */ "./resources/js/components/Achievement.vue")["default"]);
var element = document.getElementById("channelAchievement");

if (typeof element != "undefined" && element != null) {
  var cart = new Vue({
    el: "#channelAchievement"
  });
}

/***/ }),

/***/ "./resources/js/components/Achievement.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Achievement.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Achievement_vue_vue_type_template_id_0fa45a94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Achievement.vue?vue&type=template&id=0fa45a94&scoped=true& */ "./resources/js/components/Achievement.vue?vue&type=template&id=0fa45a94&scoped=true&");
/* harmony import */ var _Achievement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Achievement.vue?vue&type=script&lang=js& */ "./resources/js/components/Achievement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Achievement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Achievement_vue_vue_type_template_id_0fa45a94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Achievement_vue_vue_type_template_id_0fa45a94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0fa45a94",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Achievement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Achievement.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Achievement.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Achievement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Achievement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Achievement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Achievement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Achievement.vue?vue&type=template&id=0fa45a94&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Achievement.vue?vue&type=template&id=0fa45a94&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Achievement_vue_vue_type_template_id_0fa45a94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Achievement.vue?vue&type=template&id=0fa45a94&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Achievement.vue?vue&type=template&id=0fa45a94&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Achievement_vue_vue_type_template_id_0fa45a94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Achievement_vue_vue_type_template_id_0fa45a94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 14:
/*!*******************************************!*\
  !*** multi ./resources/js/achievement.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\bridyc\resources\js\achievement.js */"./resources/js/achievement.js");


/***/ })

/******/ });
=======
!function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=14)}({14:function(e,t,i){e.exports=i("i7gT")},"15tO":function(e,t,i){var r=i("hcby");"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(r,n);r.locals&&(e.exports=r.locals)},"5ZeN":function(e,t,i){"use strict";var r={name:"picture-input",props:{width:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},height:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},margin:{type:[String,Number],default:0},accept:{type:String,default:"image/*"},size:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},name:{type:String,default:null},id:{type:[String,Number],default:null},buttonClass:{type:String,default:"btn btn-primary button"},removeButtonClass:{type:String,default:"btn btn-secondary button secondary"},aspectButtonClass:{type:String,default:"btn btn-secondary button secondary"},prefill:{type:[String,File],default:""},prefillOptions:{type:Object,default:()=>({})},crop:{type:Boolean,default:!0},radius:{type:[String,Number],default:0},removable:{type:Boolean,default:!1},hideChangeButton:{type:Boolean,default:!1},autoToggleAspectRatio:{type:Boolean,default:!1},toggleAspectRatio:{type:Boolean,default:!1},changeOnClick:{type:Boolean,default:!0},plain:{type:Boolean,default:!1},zIndex:{type:Number,default:1e4},alertOnError:{type:Boolean,default:!0},customStrings:{type:Object,default:()=>({})}},watch:{prefill(){this.prefill?this.preloadImage(this.prefill,this.prefillOptions):this.removeImage()}},data:()=>({imageSelected:!1,previewHeight:0,previewWidth:0,draggingOver:!1,canvasWidth:0,canvasHeight:0,strings:{upload:"<p>Your device does not support file uploading.</p>",drag:"Drag an image or <br>click here to select a file",tap:"Tap here to select a photo <br>from your gallery",change:"Change Photo",aspect:"Landscape/Portrait",remove:"Remove Photo",select:"Select a Photo",selected:"<p>Photo successfully selected!</p>",fileSize:"The file size exceeds the limit",fileType:"This file type is not supported."}}),mounted(){if(this.updateStrings(),this.prefill&&this.preloadImage(this.prefill,this.prefillOptions),this.$nextTick(()=>{window.addEventListener("resize",this.onResize),this.onResize()}),this.supportsPreview){this.pixelRatio=Math.round(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI);const e=this.$refs.previewCanvas;e.getContext&&(this.context=e.getContext("2d"),this.context.scale(this.pixelRatio,this.pixelRatio))}"image/*"!==this.accept&&(this.fileTypes=this.accept.split(","),this.fileTypes=this.fileTypes.map(e=>e.trim())),this.canvasWidth=this.width,this.canvasHeight=this.height,this.$on("error",this.onError)},beforeDestroy(){window.removeEventListener("resize",this.onResize),this.$off("error",this.onError)},methods:{updateStrings(){for(let e in this.customStrings)e in this.strings&&"string"==typeof this.customStrings[e]&&(this.strings[e]=this.customStrings[e])},onClick(){this.imageSelected?(this.changeOnClick&&this.selectImage(),this.$emit("click")):this.selectImage()},onResize(){this.resizeCanvas(),this.imageObject&&this.drawImage(this.imageObject)},onDragStart(){this.supportsDragAndDrop&&(this.draggingOver=!0)},onDragStop(){this.supportsDragAndDrop&&(this.draggingOver=!1)},onFileDrop(e){this.onDragStop(),this.onFileChange(e)},onFileChange(e,t){let i=e.target.files||e.dataTransfer.files;if(i.length)if(i[0].size<=0||i[0].size>1024*this.size*1024)this.$emit("error",{type:"fileSize",fileSize:i[0].size,fileType:i[0].type,fileName:i[0].name,message:this.strings.fileSize+" ("+this.size+"MB)"});else if(i[0].name!==this.fileName||i[0].size!==this.fileSize||this.fileModified!==i[0].lastModified){if(this.file=i[0],this.fileName=i[0].name,this.fileSize=i[0].size,this.fileModified=i[0].lastModified,this.fileType=i[0].type,"image/*"===this.accept){if("image/"!==i[0].type.substr(0,6))return}else if(-1===this.fileTypes.indexOf(i[0].type))return void this.$emit("error",{type:"fileType",fileSize:i[0].size,fileType:i[0].type,fileName:i[0].name,message:this.strings.fileType});this.imageSelected=!0,this.image="",this.supportsPreview?this.loadImage(i[0],t||!1):t?this.$emit("prefill"):this.$emit("change",this.image)}},onError(e){this.alertOnError&&alert(e.message)},loadImage(e,t){this.getEXIFOrientation(e,i=>{this.setOrientation(i);let r=new FileReader;r.onload=e=>{this.image=e.target.result,t?this.$emit("prefill"):this.$emit("change",this.image),this.imageObject=new Image,this.imageObject.onload=()=>{if(this.autoToggleAspectRatio){this.getOrientation(this.canvasWidth,this.canvasHeight)!==this.getOrientation(this.imageObject.width,this.imageObject.height)&&this.rotateCanvas()}this.drawImage(this.imageObject)},this.imageObject.src=this.image},r.readAsDataURL(e)})},drawImage(e){this.imageWidth=e.width,this.imageHeight=e.height,this.imageRatio=e.width/e.height;let t=0,i=0,r=this.previewWidth,n=this.previewHeight;const a=this.previewWidth/this.previewHeight;this.crop?this.imageRatio>=a?(r=n*this.imageRatio,t=(this.previewWidth-r)/2):(n=r/this.imageRatio,i=(this.previewHeight-n)/2):this.imageRatio>=a?(n=r/this.imageRatio,i=(this.previewHeight-n)/2):(r=n*this.imageRatio,t=(this.previewWidth-r)/2);const s=this.$refs.previewCanvas;s.style.background="none",s.width=this.previewWidth*this.pixelRatio,s.height=this.previewHeight*this.pixelRatio,this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,s.width,s.height),this.rotate&&(this.context.translate(t*this.pixelRatio,i*this.pixelRatio),this.context.translate(r/2*this.pixelRatio,n/2*this.pixelRatio),this.context.rotate(this.rotate),t=-r/2,i=-n/2),this.context.drawImage(e,t*this.pixelRatio,i*this.pixelRatio,r*this.pixelRatio,n*this.pixelRatio)},selectImage(){this.$refs.fileInput.click()},removeImage(){this.$refs.fileInput.value="",this.$refs.fileInput.type="",this.$refs.fileInput.type="file",this.fileName="",this.fileType="",this.fileSize=0,this.fileModified=0,this.imageSelected=!1,this.image="",this.file=null,this.imageObject=null,this.$refs.previewCanvas.style.backgroundColor="rgba(200,200,200,.25)",this.$refs.previewCanvas.width=this.previewWidth*this.pixelRatio,this.$emit("remove")},rotateImage(){this.rotateCanvas(),this.imageObject&&this.drawImage(this.imageObject);let e=this.getOrientation(this.canvasWidth,this.canvasHeight);this.$emit("aspectratiochange",e)},resizeCanvas(){let e=this.canvasWidth/this.canvasHeight,t=this.$refs.container.clientWidth;(this.toggleAspectRatio||t!==this.containerWidth)&&(this.containerWidth=t,this.previewWidth=Math.min(this.containerWidth-2*this.margin,this.canvasWidth),this.previewHeight=this.previewWidth/e)},getOrientation(e,t){let i="square";return e>t?i="landscape":e<t&&(i="portrait"),i},switchCanvasOrientation(){const e=this.canvasWidth,t=this.canvasHeight;this.canvasWidth=t,this.canvasHeight=e},rotateCanvas(){this.switchCanvasOrientation(),this.resizeCanvas()},setOrientation(e){this.rotate=!1,8===e?this.rotate=-Math.PI/2:6===e?this.rotate=Math.PI/2:3===e&&(this.rotate=-Math.PI)},getEXIFOrientation(e,t){var i=new FileReader;i.onload=e=>{var i=new DataView(e.target.result);if(65496!==i.getUint16(0,!1))return t(-2);for(var r=i.byteLength,n=2;n<r;){var a=i.getUint16(n,!1);if(n+=2,65505===a){if(1165519206!==i.getUint32(n+=2,!1))return t(-1);var s=18761===i.getUint16(n+=6,!1);n+=i.getUint32(n+4,s);var o=i.getUint16(n,s);n+=2;for(var l=0;l<o;l++)if(274===i.getUint16(n+12*l,s))return t(i.getUint16(n+12*l+8,s))}else{if(65280!=(65280&a))break;n+=i.getUint16(n,!1)}}return t(-1)},i.readAsArrayBuffer(e.slice(0,65536))},preloadImage(e,t){let i=window.File;try{new i([],"")}catch(e){i=class extends Blob{constructor(e,t,i={}){super(e,i),this.lastModifiedDate=new Date,this.lastModified=+this.lastModifiedDate,this.name=t}}}if(t=Object.assign({},t),"object"==typeof e)return this.imageSelected=!0,this.image="",void(this.supportsPreview?this.loadImage(e,!0):this.$emit("prefill"));let r=new Headers;r.append("Accept","image/*"),fetch(e,{method:"GET",mode:"cors",headers:r}).then(e=>e.blob()).then(r=>{let n={target:{files:[]}};const a=t.fileName||e.split("/").slice(-1)[0];let s=t.mediaType||"image/"+(t.fileType||a.split(".").slice(-1)[0]);s=s.replace("jpg","jpeg"),n.target.files[0]=new i([r],a,{type:s}),this.onFileChange(n,!0)}).catch(e=>{this.$emit("error",{type:"failedPrefill",message:"Failed loading prefill image: "+e})})}},computed:{supportsUpload(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;const e=document.createElement("input");return e.type="file",!e.disabled},supportsPreview:()=>window.FileReader&&!!window.CanvasRenderingContext2D,supportsDragAndDrop(){const e=document.createElement("div");return("draggable"in e||"ondragstart"in e&&"ondrop"in e)&&!("ontouchstart"in window||navigator.msMaxTouchPoints)},computedClasses(){const e={};return e["dragging-over"]=this.draggingOver,e},fontSize(){return Math.min(.04*this.previewWidth,21)+"px"}}},n=(i("FD01"),i("KHd+")),a=Object(n.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"container",staticClass:"picture-input",attrs:{id:"picture-input"}},[e.supportsUpload?e.supportsPreview?i("div",[i("div",{staticClass:"preview-container",style:{maxWidth:e.previewWidth+"px",height:e.previewHeight+"px",borderRadius:e.radius+"%"}},[i("canvas",{ref:"previewCanvas",staticClass:"picture-preview",class:e.computedClasses,style:{height:e.previewHeight+"px",zIndex:e.zIndex+1},on:{drag:function(e){e.stopPropagation(),e.preventDefault()},dragover:function(e){e.stopPropagation(),e.preventDefault()},dragstart:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStart(t)},dragenter:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStart(t)},dragend:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStop(t)},dragleave:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStop(t)},drop:function(t){return t.stopPropagation(),t.preventDefault(),e.onFileDrop(t)},click:function(t){return t.preventDefault(),e.onClick(t)}}}),e._v(" "),e.imageSelected||e.plain?e._e():i("div",{staticClass:"picture-inner",style:{top:-e.previewHeight+"px",marginBottom:-e.previewHeight+"px",fontSize:e.fontSize,borderRadius:e.radius+"%",zIndex:e.zIndex+2}},[e.supportsDragAndDrop?i("span",{staticClass:"picture-inner-text",domProps:{innerHTML:e._s(e.strings.drag)}}):i("span",{staticClass:"picture-inner-text",domProps:{innerHTML:e._s(e.strings.tap)}})])]),e._v(" "),e.imageSelected&&!e.hideChangeButton?i("button",{class:e.buttonClass,on:{click:function(t){return t.preventDefault(),e.selectImage(t)}}},[e._v(e._s(e.strings.change))]):e._e(),e._v(" "),e.imageSelected&&e.removable?i("button",{class:e.removeButtonClass,on:{click:function(t){return t.preventDefault(),e.removeImage(t)}}},[e._v(e._s(e.strings.remove))]):e._e(),e._v(" "),e.imageSelected&&e.toggleAspectRatio&&e.width!==e.height?i("button",{class:e.aspectButtonClass,on:{click:function(t){return t.preventDefault(),e.rotateImage(t)}}},[e._v(e._s(e.strings.aspect))]):e._e()]):i("div",[e.imageSelected?i("div",[i("div",{domProps:{innerHTML:e._s(e.strings.selected)}}),e._v(" "),e.hideChangeButton?e._e():i("button",{class:e.buttonClass,on:{click:function(t){return t.preventDefault(),e.selectImage(t)}}},[e._v(e._s(e.strings.change))]),e._v(" "),e.removable?i("button",{class:e.removeButtonClass,on:{click:function(t){return t.preventDefault(),e.removeImage(t)}}},[e._v(e._s(e.strings.remove))]):e._e()]):i("button",{class:e.buttonClass,on:{click:function(t){return t.preventDefault(),e.selectImage(t)}}},[e._v(e._s(e.strings.select))])]):i("div",{domProps:{innerHTML:e._s(e.strings.upload)}}),e._v(" "),i("input",{ref:"fileInput",attrs:{type:"file",name:e.name,id:e.id,accept:e.accept},on:{change:e.onFileChange}})])}),[],!1,null,"5080a0f2",null);t.a=a.exports},"9tPo":function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var i=t.protocol+"//"+t.host,r=i+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var n,a=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(n=0===a.indexOf("//")?a:0===a.indexOf("/")?i+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")}))}},FD01:function(e,t,i){"use strict";var r=i("15tO");i.n(r).a},I1BE:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",r=e[3];if(!r)return i;if(t&&"function"==typeof btoa){var n=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),a=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[i].concat(a).concat([n]).join("\n")}var s;return[i].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i})).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},n=0;n<this.length;n++){var a=this[n][0];"number"==typeof a&&(r[a]=!0)}for(n=0;n<e.length;n++){var s=e[n];"number"==typeof s[0]&&r[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),t.push(s))}},t}},"KHd+":function(e,t,i){"use strict";function r(e,t,i,r,n,a,s,o){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=i,c._compiled=!0),r&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):n&&(l=o?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:e,options:c}}i.d(t,"a",(function(){return r}))},YAEV:function(e,t,i){"use strict";i.r(t);var r=i("5ZeN"),n={data:function(){return{achievementData:[],disable:!1,showAchievement:!0,openAchievementForm:!1,formData:{image_path:"",title:"",description:"",date:""},serverErrors:{image_path:"",title:"",description:"",date:""},channelId:"",additionUrl:"",url:location.origin+"/api/achievement/",baseUrl:location.origin+"/",editingUrlChecker:!1,achievementId:"",achievementIndex:"",authValue:"",userId:""}},props:{achievement:{type:Array,default:null},userid:{type:Number,default:null}},created:function(){this.userId=this.userid,this.achievementData=this.achievement[0].achievement,this.channelId=this.achievement[0].id,this.authValue=this.authId},mounted:function(){},methods:{addAchievement:function(){this.openAchievementForm=!0,this.formData.title="",this.formData.description="",this.formData.date="",this.showAchievement=!1},achievementSubmit:_.debounce((function(){var e=this;this.$validator.validate().then((function(t){if(t){e.disable=!0,""===e.formData.image_path&&(e.serverErrors.image_path="Image is required");var i="";e.editingUrlChecker?(e.additionUrl="edit/",i=e.url+e.additionUrl+e.achievementId):(e.additionUrl="add/",i=e.url+e.additionUrl),axios.post(i,e.formData).then((function(t){!0===t.data.message&&(e.disable=!1,e.showAchievement=!0,Vue.toasted.success("Achievement data is created",{position:"top-center",duration:5e3}),e.editingUrlChecker&&e.achievementData.splice(e.achievementIndex,1),e.achievementData.push(t.data.data),e.openAchievementForm=!1,e.editingUrlChecker=!1)})).catch((function(e){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})}))}}))}),500),onChange:function(e){this.$refs.pictureInput.image&&(this.formData.image_path=this.$refs.pictureInput.image)},editTheForm:function(e,t){this.editingUrlChecker=!0,this.formData.title=e.title,this.formData.description=e.description,this.formData.date=e.date,this.achievementId=e.id,this.openAchievementForm=!0,this.achievementIndex=t,this.showAchievement=!1},canCleSubmittion:function(){this.editingUrlChecker=!1,this.openAchievementForm=!1,this.showAchievement=!0}},components:{PictureInput:r.a}};$(document).ready((function(){$('[data-toggle="tooltip"]').tooltip()}));var a=n,s=i("KHd+"),o=Object(s.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h4",{staticClass:"text-center"},[e._v("INSTITUTE'S ACHIEVEMENTS")]),e._v(" "),i("br"),e._v(" "),i("h6",{staticClass:"d-inline"},[e._v("Add your institute's achievements here")]),e._v(" "),i("button",{staticClass:"btn btnadd p-1 ml-1 rounded-0",on:{click:function(t){return e.addAchievement()}}},[i("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})]),e._v(" "),e.showAchievement?i("div",{staticClass:"row my-5"},e._l(e.achievementData,(function(t,r){return i("div",{key:r,staticClass:"card shadow mx-auto sidebar-facard mb-4"},[i("img",{attrs:{src:e.baseUrl+"media/channel/"+e.userId+"/achievement/"+t.image_path}}),e._v(" "),i("div",{staticClass:"card-body mt-n1"},[i("h6",{staticClass:"card-title my-n1"},[e._v(e._s(t.title))]),e._v(" "),i("p",{staticClass:"card-text"},[e._v("\n          "+e._s(t.description.substr(0,20))+"\n        ")]),e._v(" "),i("p",{staticClass:"card-text"},[e._v("\n          "+e._s(t.date)+"\n        ")])]),e._v(" "),i("div",{staticClass:"text-center"},[i("button",{staticClass:"btn mb-5 editachieve",attrs:{"data-toggle":"tooltip","data-placement":"right",title:"Edit"},on:{click:function(i){return e.editTheForm(t,r)}}},[i("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}})])])])})),0):e._e(),e._v(" "),i("br"),e._v(" "),e.openAchievementForm?i("div",{staticClass:"mt-5"},[i("form",{on:{submit:function(t){return t.preventDefault(),e.achievementSubmit()}}},[i("picture-input",{ref:"pictureInput",attrs:{width:"200",height:"200",margin:"16",accept:"image/jpeg, image/png",size:"10","button-class":"btn","custom-strings":{upload:"<h1>Bummer!</h1>",drag:"Drag a 😺 GIF or GTFO"}},on:{change:e.onChange}}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.image_path,expression:"serverErrors.image_path != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverErrors.image_path))]),e._v(" "),i("br"),e._v(" "),i("div",{staticClass:"form-group row mx-lg-5",class:{"has-error":e.errors.has("serverErrors.title")||""!=e.serverErrors.title}},[i("label",{staticClass:"col-sm-3 col-form-label text-md-right"},[e._v("Achievement Title :")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.title,expression:"formData.title"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"col-sm-9 mx-1 mx-md-auto",class:{"form-control":!0,"is-invalid":e.errors.has("title")},attrs:{"data-vv-delay":"20",name:"title",type:"text",placeholder:"Example: Student name, Institute's team achievement"},domProps:{value:e.formData.title},on:{input:function(t){t.target.composing||e.$set(e.formData,"title",t.target.value)}}}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("title"),expression:"errors.has('title')"}],staticClass:"text-danger mx-auto"},[e._v(e._s(e.errors.first("title")))]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.title,expression:"serverErrors.title != ''"}],staticClass:"help is-danger mx-auto"},[e._v(e._s(e.serverErrors.title))])]),e._v(" "),i("div",{staticClass:"form-group row mx-lg-5",class:{"has-error":e.errors.has("serverErrors.descriptions")||""!=e.serverErrors.descriptions}},[i("label",{staticClass:"col-sm-3 col-form-label text-md-right"},[e._v("\n          Achievement Description :")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.description,expression:"formData.description"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"col-sm-9 mx-1 mx-md-auto",class:{"form-control":!0,"is-invalid":e.errors.has("descriptions")},attrs:{"data-vv-delay":"20",name:"descriptions",type:"text",placeholder:"Describe achievement in seven words"},domProps:{value:e.formData.description},on:{input:function(t){t.target.composing||e.$set(e.formData,"description",t.target.value)}}}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("descriptions"),expression:"errors.has('descriptions')"}],staticClass:"text-danger mx-auto"},[e._v(e._s(e.errors.first("descriptions")))]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.descriptions,expression:"serverErrors.descriptions != ''"}],staticClass:"help is-danger mx-auto"},[e._v(e._s(e.serverErrors.descriptions))])]),e._v(" "),i("div",{staticClass:"form-group row mx-lg-5",class:{"has-error":e.errors.has("date")||""!=e.serverErrors.date}},[i("label",{staticClass:"col-sm-3 col-form-label text-md-right"},[e._v("\n          Achievement Event Date :")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.date,expression:"formData.date"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"col-sm-9 mx-1 mx-md-auto",class:{"form-control":!0,"is-invalid":e.errors.has("date")},attrs:{"data-vv-delay":"20",name:"date",type:"date",placeholder:"date"},domProps:{value:e.formData.date},on:{focus:function(t){e.serverErrors.date=""},input:function(t){t.target.composing||e.$set(e.formData,"date",t.target.value)}}}),e._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("date"),expression:"errors.has('date')"}],staticClass:"is-invalid"}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("date"),expression:"errors.has('date')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("date")))]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.date,expression:"serverErrors.date != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverErrors.date))])]),e._v(" "),i("div",{staticClass:"text-center"},[i("button",{staticClass:"btn btn-success rounded-0",attrs:{type:"btn"},on:{click:function(t){return e.canCleSubmittion()}}},[e._v("\n          Cancel\n        ")]),e._v(" "),i("button",{staticClass:"btn btnsubmit mt-n2",attrs:{type:"submit",disabled:e.disable}},[e._v("\n          Submit\n        ")])])],1)]):e._e()])}),[],!1,null,"7b4ee6df",null);t.default=o.exports},"aET+":function(e,t,i){var r,n,a={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=r.apply(this,arguments)),n}),o=function(e,t){return t?t.querySelector(e):document.querySelector(e)},l=function(e){var t={};return function(e,i){if("function"==typeof e)return e();if(void 0===t[e]){var r=o.call(this,e,i);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,d=0,h=[],u=i("9tPo");function p(e,t){for(var i=0;i<e.length;i++){var r=e[i],n=a[r.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](r.parts[s]);for(;s<r.parts.length;s++)n.parts.push(w(r.parts[s],t))}else{var o=[];for(s=0;s<r.parts.length;s++)o.push(w(r.parts[s],t));a[r.id]={id:r.id,refs:1,parts:o}}}}function f(e,t){for(var i=[],r={},n=0;n<e.length;n++){var a=e[n],s=t.base?a[0]+t.base:a[0],o={css:a[1],media:a[2],sourceMap:a[3]};r[s]?r[s].parts.push(o):i.push(r[s]={id:s,parts:[o]})}return i}function m(e,t){var i=l(e.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=h[h.length-1];if("top"===e.insertAt)r?r.nextSibling?i.insertBefore(t,r.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),h.push(t);else if("bottom"===e.insertAt)i.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=l(e.insertAt.before,i);i.insertBefore(t,n)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=h.indexOf(e);t>=0&&h.splice(t,1)}function g(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return i.nc}();r&&(e.attrs.nonce=r)}return b(t,e.attrs),m(e,t),t}function b(e,t){Object.keys(t).forEach((function(i){e.setAttribute(i,t[i])}))}function w(e,t){var i,r,n,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var s=d++;i=c||(c=g(t)),r=_.bind(null,i,s,!1),n=_.bind(null,i,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),m(e,t),t}(t),r=S.bind(null,i,t),n=function(){v(i),i.href&&URL.revokeObjectURL(i.href)}):(i=g(t),r=C.bind(null,i),n=function(){v(i)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var i=f(e,t);return p(i,t),function(e){for(var r=[],n=0;n<i.length;n++){var s=i[n];(o=a[s.id]).refs--,r.push(o)}e&&p(f(e,t),t);for(n=0;n<r.length;n++){var o;if(0===(o=r[n]).refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete a[o.id]}}}};var y,x=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function _(e,t,i,r){var n=i?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,n);else{var a=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function C(e,t){var i=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}function S(e,t,i){var r=i.css,n=i.sourceMap,a=void 0===t.convertToAbsoluteUrls&&n;(t.convertToAbsoluteUrls||a)&&(r=u(r)),n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var s=new Blob([r],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(s),o&&URL.revokeObjectURL(o)}},hcby:function(e,t,i){(e.exports=i("I1BE")(!1)).push([e.i,"\n.picture-input[data-v-5080a0f2] {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n}\n.preview-container[data-v-5080a0f2] {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 auto;\n  cursor: pointer;\n  overflow: hidden;\n}\n.picture-preview[data-v-5080a0f2] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 10001;\n  box-sizing: border-box;\n  background-color: rgba(200,200,200,.25);\n}\n.picture-preview.dragging-over[data-v-5080a0f2] {\n  -webkit-filter: brightness(0.5);\n          filter: brightness(0.5);\n}\n.picture-inner[data-v-5080a0f2] {\n  position: relative;\n  z-index: 10002;\n  pointer-events: none;\n  box-sizing: border-box;\n  margin: 1em auto;\n  padding: 0.5em;\n  border: .3em dashed rgba(66,66,66,.15);\n  border-radius: 8px;\n  width: calc(100% - 2.5em);\n  height: calc(100% - 2.5em);\n  display: table;\n}\n.picture-inner .picture-inner-text[data-v-5080a0f2] {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 2em;\n  line-height: 1.5;\n}\nbutton[data-v-5080a0f2] {\n  margin: 1em .25em;\n  cursor: pointer;\n}\ninput[type=file][data-v-5080a0f2] {\n  display: none;\n}\n",""])},i7gT:function(e,t,i){Vue.component("channel-achievement",i("YAEV").default);var r=document.getElementById("channelAchievement");if(void 0!==r&&null!=r)new Vue({el:"#channelAchievement"})}});
>>>>>>> 499710a687753338cb3a7a47de2288e27cdd0116
