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
/* harmony import */ var vue_picture_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-picture-input */ "./node_modules/vue-picture-input/PictureInput.vue");
/* harmony import */ var _channel_profileGender_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./channel/profileGender.vue */ "./resources/js/components/channel/profileGender.vue");
/* harmony import */ var _channel_profile_avatar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./channel/profile/avatar.vue */ "./resources/js/components/channel/profile/avatar.vue");
/* harmony import */ var _channel_profile_activities_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./channel/profile/activities.vue */ "./resources/js/components/channel/profile/activities.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        gender: "",
        vission: ""
      },
      qualificationData: {
        school_name: "",
        degree: "",
        field_of_study: ""
      },
      profileError: {
        gender: "",
        vission: ""
      },
      qualificationError: {
        school_name: "",
        degree: "",
        field_of_study: ""
      },
      domainUrl: location.origin,
      educationPath: "",
      qualificationEditDataId: "",
      qualificationEditIndex: "",
      //Image profile stuff
      imageData: "",
      imageError: "",
      imageChecker: false
    };
  },
  props: {
    user: {
      type: Object,
      "default": null
    }
  },
  components: {
    PictureInput: vue_picture_input__WEBPACK_IMPORTED_MODULE_0__["default"],
    "profile-gender": _channel_profileGender_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "profile-avatar": _channel_profile_avatar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    activities: _channel_profile_activities_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  created: function created() {
    this.channelProfileData = this.user;
    if (this.channelProfileData.gender == null) this.genderVissionChecker = false;
    if (this.channelProfileData.avatar == null) this.imageChecker = true;
  },
  mounted: function mounted() {},
  methods: {
    getQualificationData: function getQualificationData() {
      var _this = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          axios.post(_this.educationPath, _this.qualificationData).then(function (response) {
            if (response.data.message) {
              if (_this.qualificationEditDataId == "") {
                _this.channelProfileData.education = response.data.data;
              } else {
                _this.channelProfileData.education.splice(_this.qualificationEditIndex, 1, response.data.user);
              }

              $("#addEducation").modal("hide");
            }
          })["catch"](function (errors) {
            if (errors.response.data.errors.school_name) {
              _this.qualificationError.school_name = errors.response.data.errors.school_name[0];
            }

            if (errors.response.data.errors.degree) {
              _this.qualificationError.degree = errors.response.data.errors.degree[0];
            }

            if (errors.response.data.errors.field_of_study) {
              _this.qualificationError.field_of_study = errors.response.data.errors.field_of_study[0];
            }
          });
        }
      });
    },
    goBack: function goBack() {
      this.genderVissionChecker = true;
    },
    addEducation: function addEducation() {
      this.educationPath = "";
      this.educationPath = this.domainUrl + "/api/add/education";
      this.qualificationEditDataId = "";
      this.emptyEducationForm();
      $("#addEducation").modal("show");
    },
    editTheEducation: function editTheEducation(education, index) {
      console.log(education);
      this.qualificationData.school_name = education.school_name;
      this.qualificationData.degree = education.degree;
      this.qualificationData.field_of_study = education.field_of_study;
      this.qualificationEditDataId = education.id;
      this.educationPath = "";
      this.educationPath = this.domainUrl + "/api/add/education/edit/" + education.id;
      this.qualificationEditIndex = index;
      $("#addEducation").modal("show");
    },
    emptyEducationForm: function emptyEducationForm() {
      this.qualificationData.school_name = "";
      this.qualificationData.degree = "";
      this.qualificationData.field_of_study = "";
    },
    onChange: function onChange(image) {
      if (this.$refs.pictureInput.image) this.imageData = this.$refs.pictureInput.image;
    },
    onImageSubmit: function onImageSubmit() {
      var _this2 = this;

      if (this.imageData != "") {
        var formData = new FormData();
        formData.append("image", this.imageData);
        axios.post(this.domainUrl + "/api/profile/avatar", formData).then(function (response) {
          onUploadProgress: (function (progressEvent) {
            console.log(progressEvent.loaded / progressEvent.total);
          });

          _this2.channelProfileData.avatar = response.data.image;
          _this2.imageChecker = false;
        })["catch"](function (errors) {
          if (errors.response.data.errors.image) {
            _this2.imageError = errors.response.data.errors.image[0];
          }
        });
      } else {
        this.imageError = "Image is empty";
      }
    },
    onCancleImageEdit: function onCancleImageEdit() {
      this.imageChecker = false;
    },
    editTheImage: function editTheImage() {
      this.imageChecker = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/profile/activities.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/profile/activities.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      activities: [],
      activityFormData: {
        activity: "",
        description: ""
      },
      activityError: {
        activity: "",
        description: ""
      },
      activityPath: "",
      activityIndex: ""
    };
  },
  props: {
    profiledata: {
      type: Object,
      "default": null
    }
  },
  created: function created() {
    this.activities = this.profiledata.activities;
  },
  mounted: function mounted() {},
  methods: {
    addActivity: function addActivity() {
      this.activityPath = "/api/add/activity";
      this.activityIndex = "";
      this.emptyActivity();
      $("#addActivity").modal("show");
    },
    emptyActivity: function emptyActivity() {
      this.activityFormData.activity = "";
      this.activityFormData.description = "";
    },
    editActivity: function editActivity(activity, index) {
      this.activityPath = "/api/edit/activity/" + activity.id;
      this.activityIndex = index;
      this.activityFormData.activity = activity.activity;
      this.activityFormData.description = activity.description;
      $("#addActivity").modal("show");
    },
    getActivityData: function getActivityData() {
      var _this = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          axios.post(_this.activityPath, _this.activityFormData).then(function (response) {
            if (response.data.message) {
              console.log(response.data);

              if (_this.activityIndex === "") {
                _this.activities = response.data.data;
              } else {
                _this.activities = response.data.data;
              } //this.emptyActivity();


              $("#addActivity").modal("hide");
            }
          })["catch"](function (errors) {
            if (errors.response.data.errors.activity) {
              _this.activityError.activity = errors.response.data.errors.activity[0];
            }

            if (errors.response.data.errors.description) {
              _this.activityError.description = errors.response.data.errors.description[0];
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/profile/avatar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/profile/avatar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      imageError: "",
      userImage: "",
      userImageStatus: false,
      userId: "",
      url: "/api/profile/avatar",
      domainUrl: location.origin,
      imageData: ""
    };
  },
  props: {
    user: {
      type: Object,
      "default": null
    }
  },
  components: {
    PictureInput: vue_picture_input__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    if (this.user.avatar != null) {
      this.userImage = this.user.avatar;
      this.userImageStatus = true;
    }

    this.userId = this.user.id;
  },
  mounted: function mounted() {},
  methods: {
    onChange: function onChange(image) {
      if (this.$refs.pictureInput.image) this.imageData = this.$refs.pictureInput.image;
    },
    onImageSubmit: function onImageSubmit() {
      var _this = this;

      if (this.imageData != "") {
        var formData = new FormData();
        formData.append("image", this.imageData);
        axios.post(this.url, formData).then(function (response) {
          onUploadProgress: (function (progressEvent) {
            console.log(progressEvent.loaded / progressEvent.total);
          });

          _this.userImage = response.data.image;
          _this.userImageStatus = true;
        })["catch"](function (errors) {
          if (errors.response.data.errors.image) {
            _this.imageError = errors.response.data.errors.image[0];
          }
        });
      }
    },
    editTheIcon: function editTheIcon() {
      this.userImageStatus = false;
    },
    canTheEdit: function canTheEdit() {
      this.userImageStatus = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/profileGender.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/profileGender.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      channelProfileData: [],
      genderVissionChecker: true,
      profileData: {
        gender: "",
        vission: "",
        message: ""
      },
      profileError: {
        gender: "",
        vission: "",
        message: ""
      }
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
        console.log(result);

        if (result) {
          axios.post("/api/gender/vission", _this.profileData).then(function (response) {
            if (response.data.message === true) {
              Vue.toasted.success("Profile is updated", {
                position: "top-center",
                duration: 5000
              });
              _this.channelProfileData.gender = _this.profileData.gender;
              _this.channelProfileData.vission = _this.profileData.vission;
              _this.channelProfileData.message = _this.profileData.message;
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
    editGenderAndVission: function editGenderAndVission() {
      this.profileData.gender = this.channelProfileData.gender;
      this.profileData.vission = this.channelProfileData.vission;
      this.profileData.message = this.channelProfileData.message;
      this.genderVissionChecker = false;
    }
  }
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/profile/avatar.vue?vue&type=style&index=0&id=e38ab4d4&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--17-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--17-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/profile/avatar.vue?vue&type=style&index=0&id=e38ab4d4&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.picture-preview[data-v-e38ab4d4] {\r\n  position: static;\n}\r\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/profile/avatar.vue?vue&type=style&index=0&id=e38ab4d4&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--17-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--17-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/profile/avatar.vue?vue&type=style&index=0&id=e38ab4d4&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--17-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--17-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./avatar.vue?vue&type=style&index=0&id=e38ab4d4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/profile/avatar.vue?vue&type=style&index=0&id=e38ab4d4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

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
  return _c(
    "div",
    { staticClass: "profile" },
    [
      _c("profile-avatar", { attrs: { user: _vm.channelProfileData } }),
      _vm._v(" "),
      _c(
        "h4",
        { staticClass: "text-center text-capitalized princi-name mx-auto p-2" },
        [_vm._v("Name: " + _vm._s(_vm.channelProfileData.name))]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "body-channelprofile py-5" },
        [
          _c("profile-gender", { attrs: { user: _vm.channelProfileData } }),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-sm-6" },
              [
                _c("h4", { staticClass: "mt-5" }, [
                  _vm._v(
                    "\n         Educational Details (Recomended)  \n         "
                  ),
                  _c(
                    "button",
                    {
                      staticClass: "btn btnadd p-1",
                      on: {
                        click: function($event) {
                          return _vm.addEducation()
                        }
                      }
                    },
                    [_vm._v("+")]
                  )
                ]),
                _vm._v(" "),
                _vm._l(_vm.channelProfileData.education, function(
                  education,
                  index
                ) {
                  return _c(
                    "div",
                    { key: education.id, staticClass: "mx-0 mt-5" },
                    [
                      _c("ul", { staticClass: "nav flex-column pr-0" }, [
                        _c("li", [
                          _c(
                            "div",
                            {
                              staticClass: "card mx-sm-3 shadow profiledetails"
                            },
                            [
                              _c("div", { staticClass: "card-body mt-n2" }, [
                                _c("i", {
                                  staticClass: "fa fa-university",
                                  staticStyle: { color: "#003585" },
                                  attrs: { "aria-hidden": "true" }
                                }),
                                _vm._v(" University : "),
                                _c("strong", [
                                  _vm._v(_vm._s(education.school_name))
                                ])
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "card mx-sm-3 shadow profiledetails"
                            },
                            [
                              _c("div", { staticClass: "card-body mt-n2" }, [
                                _c("i", {
                                  staticClass: "fa fa-graduation-cap",
                                  staticStyle: { color: "#003585" },
                                  attrs: { "aria-hidden": "true" }
                                }),
                                _vm._v(" Degree : " + _vm._s(education.degree))
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "card mx-sm-3 shadow profiledetails"
                            },
                            [
                              _c("div", { staticClass: "card-body mt-n2" }, [
                                _c("i", {
                                  staticClass: "fa fa-book",
                                  staticStyle: { color: "#003585" },
                                  attrs: { "aria-hidden": "true" }
                                }),
                                _vm._v(
                                  " Field of study : " +
                                    _vm._s(education.field_of_study)
                                )
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("br")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ml-3 mt-2" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btnadd p-1",
                            on: {
                              click: function($event) {
                                return _vm.editTheEducation(education, index)
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
                })
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-6" },
              [
                _c("activities", {
                  attrs: { profiledata: _vm.channelProfileData }
                })
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade pricipal-modal",
          attrs: {
            id: "addEducation",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "principalprofilemodal",
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
                      _c("h6", { staticClass: "mb-3 mt-n2" }, [
                        _vm._v("Highest Education")
                      ]),
                      _vm._v(" "),
                      _c("hr", { staticClass: "mx-n3" }),
                      _vm._v(" "),
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
                          _c(
                            "label",
                            { attrs: { for: "exampleInputEmail1" } },
                            [_vm._v("University:")]
                          ),
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
                              placeholder: "Your university name"
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
                              staticClass: "text-danger text-center"
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
                                  value:
                                    _vm.qualificationError.school_name != "",
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
                          _c(
                            "label",
                            { attrs: { for: "exampleInputEmail1" } },
                            [_vm._v("Field of study:")]
                          ),
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
                              placeholder: "Field of study(specialization)"
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
                              staticClass: "text-danger text-center"
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
                          _c(
                            "label",
                            { attrs: { for: "exampleInputEmail1" } },
                            [_vm._v("Degree:")]
                          ),
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
                              placeholder: "Name of your degree"
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
                              staticClass: "text-danger text-center"
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
                        "button",
                        {
                          staticClass: "btn btnadd ml-0",
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
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "button",
        {
          staticClass: "close mr-2",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/profile/activities.vue?vue&type=template&id=2f5bc8ac&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/profile/activities.vue?vue&type=template&id=2f5bc8ac& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    _c("h4", { staticClass: "mt-5 mb-5" }, [
      _vm._v("\n       Other Activities  \n       "),
      _c(
        "button",
        {
          staticClass: "btn btnadd p-1",
          on: {
            click: function($event) {
              return _vm.addActivity()
            }
          }
        },
        [_vm._v("+")]
      )
    ]),
    _vm._v(" "),
    _vm.activities != null
      ? _c(
          "div",
          { staticClass: "mx-0" },
          _vm._l(_vm.activities, function(activity, index) {
            return _c("ul", { key: index, staticClass: "nav flex-column" }, [
              _c("li", [
                _c(
                  "div",
                  {
                    staticClass: "card mx-sm-3 shadow profiledetails",
                    staticStyle: { height: "auto" }
                  },
                  [
                    _c("div", { staticClass: "card-body mt-n2" }, [
                      _vm._v("Activity: " + _vm._s(activity.activity))
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("li", [
                _c(
                  "div",
                  {
                    staticClass: "card mx-sm-3 shadow profiledetails",
                    staticStyle: { height: "auto" }
                  },
                  [
                    _c("div", { staticClass: "card-body mt-n2" }, [
                      _vm._v("Description : " + _vm._s(activity.description))
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "ml-3 mt-2" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btnadd p-1",
                    on: {
                      click: function($event) {
                        return _vm.editActivity(activity, index)
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
            ])
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "addActivity",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "principalprofilemodal",
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
                        return _vm.getActivityData()
                      }
                    }
                  },
                  [
                    _c(
                      "h6",
                      {
                        staticClass: "mb-3 mt-n2",
                        staticStyle: { color: "#003585" }
                      },
                      [_vm._v("Other activities (non academic)")]
                    ),
                    _vm._v(" "),
                    _c("hr", { staticClass: "mx-n3" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group",
                        class: {
                          "has-error":
                            _vm.errors.has("activity") ||
                            _vm.activityError.activity != ""
                        }
                      },
                      [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Activity: ")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.activityFormData.activity,
                              expression: "activityFormData.activity"
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
                            "is-invalid": _vm.errors.has("activity")
                          },
                          attrs: {
                            "data-vv-delay": "20",
                            name: "activity",
                            type: "text",
                            placeholder: "Name the activity"
                          },
                          domProps: { value: _vm.activityFormData.activity },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.activityFormData,
                                "activity",
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
                                value: _vm.errors.has("activity"),
                                expression: "errors.has('activity')"
                              }
                            ],
                            staticClass: "text-danger text-center"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("activity")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.activityError.activity != "",
                                expression: "activityError.activity != ''"
                              }
                            ],
                            staticClass: "text-danger text-center"
                          },
                          [_vm._v(_vm._s(_vm.activityError.activity))]
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
                            _vm.activityError.description != ""
                        }
                      },
                      [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Description: ")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.activityFormData.description,
                              expression: "activityFormData.description"
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
                            placeholder: "Describe your activities here"
                          },
                          domProps: { value: _vm.activityFormData.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.activityFormData,
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
                            staticClass: "text-danger text-center"
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
                                value: _vm.activityError.description != "",
                                expression: "activityError.description != ''"
                              }
                            ],
                            staticClass: "text-danger text-center"
                          },
                          [_vm._v(_vm._s(_vm.activityError.description))]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btnadd ml-0",
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
    return _c("div", [
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/profile/avatar.vue?vue&type=template&id=e38ab4d4&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/profile/avatar.vue?vue&type=template&id=e38ab4d4&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "mb-3" }, [
    _vm.userImageStatus
      ? _c("div", { staticClass: "container text-center ml-3" }, [
          _c("img", {
            staticClass: "princi-profile-picture rounded-circle",
            attrs: {
              height: "150",
              width: "152",
              src:
                _vm.userImage === "default.jpg"
                  ? "/images/default.jpg"
                  : _vm.domainUrl +
                    "/media/channel/" +
                    _vm.userId +
                    "/profile/" +
                    _vm.userImage,
              alt: "principal profile picture"
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn princi-profile-edit p-2",
              on: {
                click: function($event) {
                  return _vm.editTheIcon()
                }
              }
            },
            [
              _c("i", {
                staticClass: "fa fa-camera",
                attrs: { "aria-hidden": "true" }
              })
            ]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    !_vm.userImageStatus
      ? _c(
          "div",
          { staticClass: "princi-upload-profile-pic" },
          [
            _c("picture-input", {
              ref: "pictureInput",
              attrs: {
                width: "152",
                height: "150",
                margin: "16",
                accept: "image/jpeg, image/png",
                size: "10",
                "button-class": "btn",
                "custom-strings": {
                  upload: "<h1>Bummer!</h1>",
                  drag: "Upload your profile picture"
                },
                name: "image"
              },
              on: { change: _vm.onChange }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "btnsuca text-center mt-2" }, [
              _vm.imageData != ""
                ? _c(
                    "button",
                    {
                      staticClass: "btn btnsubmit mt-n2",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.onImageSubmit()
                        }
                      }
                    },
                    [_vm._v("\n        Submit\n      ")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.userImage != ""
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      on: {
                        click: function($event) {
                          return _vm.canTheEdit()
                        }
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-times",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v("Cancel\n      ")
                    ]
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.imageError,
                    expression: "imageError"
                  }
                ],
                staticClass: "text-danger text-center"
              },
              [_vm._v(_vm._s(_vm.imageError))]
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/profileGender.vue?vue&type=template&id=11ebd4fa&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/profileGender.vue?vue&type=template&id=11ebd4fa& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid mx-0" }, [
    _vm.genderVissionChecker
      ? _c("div", { staticClass: "container princi-profile-display" }, [
          _c("div", { staticClass: "row mx-0" }, [
            _c("div", { staticClass: "col-sm-4 mb-3" }, [
              _vm._v("\n        Gender:\n        "),
              _c("button", { staticClass: "btn btn-info" }, [
                _vm._v(_vm._s(_vm.channelProfileData.gender))
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-sm-8 mission-message-display shadow mb-5 py-1"
              },
              [
                _vm._v("\n        Mission:\n        "),
                _c("p", { staticClass: "mt-3 mb-2" }, [
                  _vm._v(_vm._s(_vm.channelProfileData.vission))
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mission-message-display shadow px-3 py-1" },
            [
              _vm._v("\n      Message from the Principal:\n      "),
              _c("p", { staticClass: "mt-3 mb-2" }, [
                _vm._v(_vm._s(_vm.channelProfileData.message))
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btnsubmit rounded-0 mt-2",
              on: {
                click: function($event) {
                  return _vm.editGenderAndVission()
                }
              }
            },
            [
              _c("i", {
                staticClass: "fa fa-pencil",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" Edit\n    ")
            ]
          )
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
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "form-group col-sm-4",
                  class: {
                    "has-error":
                      _vm.errors.has("profileError") || _vm.profileError != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                    _vm._v("Gender: ")
                  ]),
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
                      staticClass: "text-danger text-center"
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.errors.first("gender")) +
                          "\n        "
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
                        "\n          " +
                          _vm._s(_vm.profileError.gender) +
                          "\n        "
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group col-sm-8",
                  class: {
                    "has-error":
                      _vm.errors.has("vission") ||
                      _vm.profileError.vission != ""
                  }
                },
                [
                  _c("label", [_vm._v("Mission/Vision: ")]),
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
                    class: {
                      "form-control": true,
                      "is-invalid": _vm.errors.has("vission")
                    },
                    attrs: {
                      "data-vv-delay": "20",
                      name: "vission",
                      type: "text",
                      placeholder: "Mission and vision of your institute"
                    },
                    domProps: { value: _vm.profileData.vission },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.profileData,
                          "vission",
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
                      staticClass: "text-danger text-center"
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
                      staticClass: "text-danger text-center"
                    },
                    [_vm._v(_vm._s(_vm.profileError.vission))]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "form-group",
                class: {
                  "has-error":
                    _vm.errors.has("message") || _vm.profileError.message != ""
                }
              },
              [
                _c("label", [_vm._v("Principal's Message: ")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.profileData.message,
                      expression: "profileData.message"
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
                    "is-invalid": _vm.errors.has("message")
                  },
                  attrs: {
                    "data-vv-delay": "20",
                    name: "message",
                    type: "text",
                    rows: "5",
                    placeholder: "Write a Message to the visitors/students"
                  },
                  domProps: { value: _vm.profileData.message },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.profileData, "message", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("i", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("message"),
                      expression: "errors.has('message')"
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
                        value: _vm.errors.has("message"),
                        expression: "errors.has('message')"
                      }
                    ],
                    staticClass: "text-danger text-center"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("message")))]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.profileError.message != "",
                        expression: "profileError.message != ''"
                      }
                    ],
                    staticClass: "text-danger text-center"
                  },
                  [_vm._v(_vm._s(_vm.profileError.message))]
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
              [_vm._v("\n      Back\n    ")]
            ),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btnsubmit mt-n2", attrs: { type: "submit" } },
              [_vm._v("Submit")]
            )
          ]
        )
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

/***/ "./resources/js/components/channel/profile/activities.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/channel/profile/activities.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activities_vue_vue_type_template_id_2f5bc8ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activities.vue?vue&type=template&id=2f5bc8ac& */ "./resources/js/components/channel/profile/activities.vue?vue&type=template&id=2f5bc8ac&");
/* harmony import */ var _activities_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activities.vue?vue&type=script&lang=js& */ "./resources/js/components/channel/profile/activities.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _activities_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _activities_vue_vue_type_template_id_2f5bc8ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _activities_vue_vue_type_template_id_2f5bc8ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channel/profile/activities.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channel/profile/activities.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/channel/profile/activities.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_activities_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./activities.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/profile/activities.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_activities_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channel/profile/activities.vue?vue&type=template&id=2f5bc8ac&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/channel/profile/activities.vue?vue&type=template&id=2f5bc8ac& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activities_vue_vue_type_template_id_2f5bc8ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./activities.vue?vue&type=template&id=2f5bc8ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/profile/activities.vue?vue&type=template&id=2f5bc8ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activities_vue_vue_type_template_id_2f5bc8ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activities_vue_vue_type_template_id_2f5bc8ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channel/profile/avatar.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/channel/profile/avatar.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _avatar_vue_vue_type_template_id_e38ab4d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar.vue?vue&type=template&id=e38ab4d4&scoped=true& */ "./resources/js/components/channel/profile/avatar.vue?vue&type=template&id=e38ab4d4&scoped=true&");
/* harmony import */ var _avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar.vue?vue&type=script&lang=js& */ "./resources/js/components/channel/profile/avatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _avatar_vue_vue_type_style_index_0_id_e38ab4d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatar.vue?vue&type=style&index=0&id=e38ab4d4&scoped=true&lang=css& */ "./resources/js/components/channel/profile/avatar.vue?vue&type=style&index=0&id=e38ab4d4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _avatar_vue_vue_type_template_id_e38ab4d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _avatar_vue_vue_type_template_id_e38ab4d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e38ab4d4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channel/profile/avatar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channel/profile/avatar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/channel/profile/avatar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./avatar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/profile/avatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channel/profile/avatar.vue?vue&type=style&index=0&id=e38ab4d4&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/channel/profile/avatar.vue?vue&type=style&index=0&id=e38ab4d4&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_style_index_0_id_e38ab4d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--17-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--17-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./avatar.vue?vue&type=style&index=0&id=e38ab4d4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/profile/avatar.vue?vue&type=style&index=0&id=e38ab4d4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_style_index_0_id_e38ab4d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_style_index_0_id_e38ab4d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_style_index_0_id_e38ab4d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_style_index_0_id_e38ab4d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_style_index_0_id_e38ab4d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/channel/profile/avatar.vue?vue&type=template&id=e38ab4d4&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/channel/profile/avatar.vue?vue&type=template&id=e38ab4d4&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_template_id_e38ab4d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./avatar.vue?vue&type=template&id=e38ab4d4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/profile/avatar.vue?vue&type=template&id=e38ab4d4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_template_id_e38ab4d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_template_id_e38ab4d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channel/profileGender.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/channel/profileGender.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profileGender_vue_vue_type_template_id_11ebd4fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profileGender.vue?vue&type=template&id=11ebd4fa& */ "./resources/js/components/channel/profileGender.vue?vue&type=template&id=11ebd4fa&");
/* harmony import */ var _profileGender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profileGender.vue?vue&type=script&lang=js& */ "./resources/js/components/channel/profileGender.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _profileGender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profileGender_vue_vue_type_template_id_11ebd4fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _profileGender_vue_vue_type_template_id_11ebd4fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channel/profileGender.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channel/profileGender.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/channel/profileGender.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profileGender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./profileGender.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/profileGender.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profileGender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channel/profileGender.vue?vue&type=template&id=11ebd4fa&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/channel/profileGender.vue?vue&type=template&id=11ebd4fa& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileGender_vue_vue_type_template_id_11ebd4fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./profileGender.vue?vue&type=template&id=11ebd4fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/profileGender.vue?vue&type=template&id=11ebd4fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileGender_vue_vue_type_template_id_11ebd4fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileGender_vue_vue_type_template_id_11ebd4fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
=======
!function(e){var t={};function i(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=11)}({11:function(e,t,i){e.exports=i("rSiW")},"15tO":function(e,t,i){var a=i("hcby");"string"==typeof a&&(a=[[e.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(a,s);a.locals&&(e.exports=a.locals)},"3Flm":function(e,t,i){(e.exports=i("I1BE")(!1)).push([e.i,"\n.picture-preview[data-v-3067653b] {\n  position: static;\n}\n",""])},"5ZeN":function(e,t,i){"use strict";var a={name:"picture-input",props:{width:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},height:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},margin:{type:[String,Number],default:0},accept:{type:String,default:"image/*"},size:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},name:{type:String,default:null},id:{type:[String,Number],default:null},buttonClass:{type:String,default:"btn btn-primary button"},removeButtonClass:{type:String,default:"btn btn-secondary button secondary"},aspectButtonClass:{type:String,default:"btn btn-secondary button secondary"},prefill:{type:[String,File],default:""},prefillOptions:{type:Object,default:()=>({})},crop:{type:Boolean,default:!0},radius:{type:[String,Number],default:0},removable:{type:Boolean,default:!1},hideChangeButton:{type:Boolean,default:!1},autoToggleAspectRatio:{type:Boolean,default:!1},toggleAspectRatio:{type:Boolean,default:!1},changeOnClick:{type:Boolean,default:!0},plain:{type:Boolean,default:!1},zIndex:{type:Number,default:1e4},alertOnError:{type:Boolean,default:!0},customStrings:{type:Object,default:()=>({})}},watch:{prefill(){this.prefill?this.preloadImage(this.prefill,this.prefillOptions):this.removeImage()}},data:()=>({imageSelected:!1,previewHeight:0,previewWidth:0,draggingOver:!1,canvasWidth:0,canvasHeight:0,strings:{upload:"<p>Your device does not support file uploading.</p>",drag:"Drag an image or <br>click here to select a file",tap:"Tap here to select a photo <br>from your gallery",change:"Change Photo",aspect:"Landscape/Portrait",remove:"Remove Photo",select:"Select a Photo",selected:"<p>Photo successfully selected!</p>",fileSize:"The file size exceeds the limit",fileType:"This file type is not supported."}}),mounted(){if(this.updateStrings(),this.prefill&&this.preloadImage(this.prefill,this.prefillOptions),this.$nextTick(()=>{window.addEventListener("resize",this.onResize),this.onResize()}),this.supportsPreview){this.pixelRatio=Math.round(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI);const e=this.$refs.previewCanvas;e.getContext&&(this.context=e.getContext("2d"),this.context.scale(this.pixelRatio,this.pixelRatio))}"image/*"!==this.accept&&(this.fileTypes=this.accept.split(","),this.fileTypes=this.fileTypes.map(e=>e.trim())),this.canvasWidth=this.width,this.canvasHeight=this.height,this.$on("error",this.onError)},beforeDestroy(){window.removeEventListener("resize",this.onResize),this.$off("error",this.onError)},methods:{updateStrings(){for(let e in this.customStrings)e in this.strings&&"string"==typeof this.customStrings[e]&&(this.strings[e]=this.customStrings[e])},onClick(){this.imageSelected?(this.changeOnClick&&this.selectImage(),this.$emit("click")):this.selectImage()},onResize(){this.resizeCanvas(),this.imageObject&&this.drawImage(this.imageObject)},onDragStart(){this.supportsDragAndDrop&&(this.draggingOver=!0)},onDragStop(){this.supportsDragAndDrop&&(this.draggingOver=!1)},onFileDrop(e){this.onDragStop(),this.onFileChange(e)},onFileChange(e,t){let i=e.target.files||e.dataTransfer.files;if(i.length)if(i[0].size<=0||i[0].size>1024*this.size*1024)this.$emit("error",{type:"fileSize",fileSize:i[0].size,fileType:i[0].type,fileName:i[0].name,message:this.strings.fileSize+" ("+this.size+"MB)"});else if(i[0].name!==this.fileName||i[0].size!==this.fileSize||this.fileModified!==i[0].lastModified){if(this.file=i[0],this.fileName=i[0].name,this.fileSize=i[0].size,this.fileModified=i[0].lastModified,this.fileType=i[0].type,"image/*"===this.accept){if("image/"!==i[0].type.substr(0,6))return}else if(-1===this.fileTypes.indexOf(i[0].type))return void this.$emit("error",{type:"fileType",fileSize:i[0].size,fileType:i[0].type,fileName:i[0].name,message:this.strings.fileType});this.imageSelected=!0,this.image="",this.supportsPreview?this.loadImage(i[0],t||!1):t?this.$emit("prefill"):this.$emit("change",this.image)}},onError(e){this.alertOnError&&alert(e.message)},loadImage(e,t){this.getEXIFOrientation(e,i=>{this.setOrientation(i);let a=new FileReader;a.onload=e=>{this.image=e.target.result,t?this.$emit("prefill"):this.$emit("change",this.image),this.imageObject=new Image,this.imageObject.onload=()=>{if(this.autoToggleAspectRatio){this.getOrientation(this.canvasWidth,this.canvasHeight)!==this.getOrientation(this.imageObject.width,this.imageObject.height)&&this.rotateCanvas()}this.drawImage(this.imageObject)},this.imageObject.src=this.image},a.readAsDataURL(e)})},drawImage(e){this.imageWidth=e.width,this.imageHeight=e.height,this.imageRatio=e.width/e.height;let t=0,i=0,a=this.previewWidth,s=this.previewHeight;const r=this.previewWidth/this.previewHeight;this.crop?this.imageRatio>=r?(a=s*this.imageRatio,t=(this.previewWidth-a)/2):(s=a/this.imageRatio,i=(this.previewHeight-s)/2):this.imageRatio>=r?(s=a/this.imageRatio,i=(this.previewHeight-s)/2):(a=s*this.imageRatio,t=(this.previewWidth-a)/2);const n=this.$refs.previewCanvas;n.style.background="none",n.width=this.previewWidth*this.pixelRatio,n.height=this.previewHeight*this.pixelRatio,this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,n.width,n.height),this.rotate&&(this.context.translate(t*this.pixelRatio,i*this.pixelRatio),this.context.translate(a/2*this.pixelRatio,s/2*this.pixelRatio),this.context.rotate(this.rotate),t=-a/2,i=-s/2),this.context.drawImage(e,t*this.pixelRatio,i*this.pixelRatio,a*this.pixelRatio,s*this.pixelRatio)},selectImage(){this.$refs.fileInput.click()},removeImage(){this.$refs.fileInput.value="",this.$refs.fileInput.type="",this.$refs.fileInput.type="file",this.fileName="",this.fileType="",this.fileSize=0,this.fileModified=0,this.imageSelected=!1,this.image="",this.file=null,this.imageObject=null,this.$refs.previewCanvas.style.backgroundColor="rgba(200,200,200,.25)",this.$refs.previewCanvas.width=this.previewWidth*this.pixelRatio,this.$emit("remove")},rotateImage(){this.rotateCanvas(),this.imageObject&&this.drawImage(this.imageObject);let e=this.getOrientation(this.canvasWidth,this.canvasHeight);this.$emit("aspectratiochange",e)},resizeCanvas(){let e=this.canvasWidth/this.canvasHeight,t=this.$refs.container.clientWidth;(this.toggleAspectRatio||t!==this.containerWidth)&&(this.containerWidth=t,this.previewWidth=Math.min(this.containerWidth-2*this.margin,this.canvasWidth),this.previewHeight=this.previewWidth/e)},getOrientation(e,t){let i="square";return e>t?i="landscape":e<t&&(i="portrait"),i},switchCanvasOrientation(){const e=this.canvasWidth,t=this.canvasHeight;this.canvasWidth=t,this.canvasHeight=e},rotateCanvas(){this.switchCanvasOrientation(),this.resizeCanvas()},setOrientation(e){this.rotate=!1,8===e?this.rotate=-Math.PI/2:6===e?this.rotate=Math.PI/2:3===e&&(this.rotate=-Math.PI)},getEXIFOrientation(e,t){var i=new FileReader;i.onload=e=>{var i=new DataView(e.target.result);if(65496!==i.getUint16(0,!1))return t(-2);for(var a=i.byteLength,s=2;s<a;){var r=i.getUint16(s,!1);if(s+=2,65505===r){if(1165519206!==i.getUint32(s+=2,!1))return t(-1);var n=18761===i.getUint16(s+=6,!1);s+=i.getUint32(s+4,n);var o=i.getUint16(s,n);s+=2;for(var l=0;l<o;l++)if(274===i.getUint16(s+12*l,n))return t(i.getUint16(s+12*l+8,n))}else{if(65280!=(65280&r))break;s+=i.getUint16(s,!1)}}return t(-1)},i.readAsArrayBuffer(e.slice(0,65536))},preloadImage(e,t){let i=window.File;try{new i([],"")}catch(e){i=class extends Blob{constructor(e,t,i={}){super(e,i),this.lastModifiedDate=new Date,this.lastModified=+this.lastModifiedDate,this.name=t}}}if(t=Object.assign({},t),"object"==typeof e)return this.imageSelected=!0,this.image="",void(this.supportsPreview?this.loadImage(e,!0):this.$emit("prefill"));let a=new Headers;a.append("Accept","image/*"),fetch(e,{method:"GET",mode:"cors",headers:a}).then(e=>e.blob()).then(a=>{let s={target:{files:[]}};const r=t.fileName||e.split("/").slice(-1)[0];let n=t.mediaType||"image/"+(t.fileType||r.split(".").slice(-1)[0]);n=n.replace("jpg","jpeg"),s.target.files[0]=new i([a],r,{type:n}),this.onFileChange(s,!0)}).catch(e=>{this.$emit("error",{type:"failedPrefill",message:"Failed loading prefill image: "+e})})}},computed:{supportsUpload(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;const e=document.createElement("input");return e.type="file",!e.disabled},supportsPreview:()=>window.FileReader&&!!window.CanvasRenderingContext2D,supportsDragAndDrop(){const e=document.createElement("div");return("draggable"in e||"ondragstart"in e&&"ondrop"in e)&&!("ontouchstart"in window||navigator.msMaxTouchPoints)},computedClasses(){const e={};return e["dragging-over"]=this.draggingOver,e},fontSize(){return Math.min(.04*this.previewWidth,21)+"px"}}},s=(i("FD01"),i("KHd+")),r=Object(s.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"container",staticClass:"picture-input",attrs:{id:"picture-input"}},[e.supportsUpload?e.supportsPreview?i("div",[i("div",{staticClass:"preview-container",style:{maxWidth:e.previewWidth+"px",height:e.previewHeight+"px",borderRadius:e.radius+"%"}},[i("canvas",{ref:"previewCanvas",staticClass:"picture-preview",class:e.computedClasses,style:{height:e.previewHeight+"px",zIndex:e.zIndex+1},on:{drag:function(e){e.stopPropagation(),e.preventDefault()},dragover:function(e){e.stopPropagation(),e.preventDefault()},dragstart:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStart(t)},dragenter:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStart(t)},dragend:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStop(t)},dragleave:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStop(t)},drop:function(t){return t.stopPropagation(),t.preventDefault(),e.onFileDrop(t)},click:function(t){return t.preventDefault(),e.onClick(t)}}}),e._v(" "),e.imageSelected||e.plain?e._e():i("div",{staticClass:"picture-inner",style:{top:-e.previewHeight+"px",marginBottom:-e.previewHeight+"px",fontSize:e.fontSize,borderRadius:e.radius+"%",zIndex:e.zIndex+2}},[e.supportsDragAndDrop?i("span",{staticClass:"picture-inner-text",domProps:{innerHTML:e._s(e.strings.drag)}}):i("span",{staticClass:"picture-inner-text",domProps:{innerHTML:e._s(e.strings.tap)}})])]),e._v(" "),e.imageSelected&&!e.hideChangeButton?i("button",{class:e.buttonClass,on:{click:function(t){return t.preventDefault(),e.selectImage(t)}}},[e._v(e._s(e.strings.change))]):e._e(),e._v(" "),e.imageSelected&&e.removable?i("button",{class:e.removeButtonClass,on:{click:function(t){return t.preventDefault(),e.removeImage(t)}}},[e._v(e._s(e.strings.remove))]):e._e(),e._v(" "),e.imageSelected&&e.toggleAspectRatio&&e.width!==e.height?i("button",{class:e.aspectButtonClass,on:{click:function(t){return t.preventDefault(),e.rotateImage(t)}}},[e._v(e._s(e.strings.aspect))]):e._e()]):i("div",[e.imageSelected?i("div",[i("div",{domProps:{innerHTML:e._s(e.strings.selected)}}),e._v(" "),e.hideChangeButton?e._e():i("button",{class:e.buttonClass,on:{click:function(t){return t.preventDefault(),e.selectImage(t)}}},[e._v(e._s(e.strings.change))]),e._v(" "),e.removable?i("button",{class:e.removeButtonClass,on:{click:function(t){return t.preventDefault(),e.removeImage(t)}}},[e._v(e._s(e.strings.remove))]):e._e()]):i("button",{class:e.buttonClass,on:{click:function(t){return t.preventDefault(),e.selectImage(t)}}},[e._v(e._s(e.strings.select))])]):i("div",{domProps:{innerHTML:e._s(e.strings.upload)}}),e._v(" "),i("input",{ref:"fileInput",attrs:{type:"file",name:e.name,id:e.id,accept:e.accept},on:{change:e.onFileChange}})])}),[],!1,null,"5080a0f2",null);t.a=r.exports},"6Rwi":function(e,t,i){"use strict";i.r(t);var a=i("5ZeN"),s={data:function(){return{channelProfileData:[],genderVissionChecker:!0,profileData:{gender:"",vission:"",message:""},profileError:{gender:"",vission:"",message:""}}},props:{user:{type:Object,default:null}},created:function(){this.channelProfileData=this.user,null==this.channelProfileData.gender&&(this.genderVissionChecker=!1)},mounted:function(){},methods:{getFormData:function(){var e=this;this.$validator.validate().then((function(t){console.log(t),t&&axios.post("/api/gender/vission",e.profileData).then((function(t){!0===t.data.message&&(Vue.toasted.success("Profile is updated",{position:"top-center",duration:5e3}),e.channelProfileData.gender=e.profileData.gender,e.channelProfileData.vission=e.profileData.vission,e.channelProfileData.message=e.profileData.message,e.genderVissionChecker=!0)})).catch((function(t){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3}),t.response.data.errors.gender&&(e.profileError.gender=t.response.data.errors.gender[0]),t.response.data.errors.vission&&(e.profileError.vission=t.response.data.errors.vission[0])}))}))},editGenderAndVission:function(){this.profileData.gender=this.channelProfileData.gender,this.profileData.vission=this.channelProfileData.vission,this.profileData.message=this.channelProfileData.message,this.genderVissionChecker=!1}}},r=i("KHd+"),n=Object(r.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container-fluid mx-0"},[e.genderVissionChecker?i("div",{staticClass:"container princi-profile-display"},[i("div",{staticClass:"row mx-0"},[i("div",{staticClass:"col-sm-4 mb-3"},[e._v("\n        Gender:\n        "),i("button",{staticClass:"btn btn-info"},[e._v(e._s(e.channelProfileData.gender))])]),e._v(" "),i("div",{staticClass:"col-sm-8 mission-message-display shadow mb-5 py-1"},[e._v("\n        Mission:\n        "),i("p",{staticClass:"mt-3 mb-2"},[e._v(e._s(e.channelProfileData.vission))])])]),e._v(" "),i("div",{staticClass:"mission-message-display shadow px-3 py-1"},[e._v("\n      Message from the Principal:\n      "),i("p",{staticClass:"mt-3 mb-2"},[e._v(e._s(e.channelProfileData.message))])]),e._v(" "),i("button",{staticClass:"btn btnsubmit rounded-0 mt-2",on:{click:function(t){return e.editGenderAndVission()}}},[i("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}}),e._v(" Edit\n    ")])]):e._e(),e._v(" "),e.genderVissionChecker?e._e():i("form",{on:{submit:function(t){return t.preventDefault(),e.getFormData()}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"form-group col-sm-4",class:{"has-error":e.errors.has("profileError")||""!=e.profileError}},[i("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Gender: ")]),e._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.profileData.gender,expression:"profileData.gender"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"gender"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.profileData,"gender",t.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[e._v("Select your gender")]),e._v(" "),i("option",{attrs:{value:"male"}},[e._v("Male")]),e._v(" "),i("option",{attrs:{value:"female"}},[e._v("Female")])]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("gender"),expression:"errors.has('gender')"}],staticClass:"text-danger text-center"},[e._v("\n          "+e._s(e.errors.first("gender"))+"\n        ")]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.profileError,expression:"profileError != ''"}],staticClass:"help is-danger"},[e._v("\n          "+e._s(e.profileError.gender)+"\n        ")])]),e._v(" "),i("div",{staticClass:"form-group col-sm-8",class:{"has-error":e.errors.has("vission")||""!=e.profileError.vission}},[i("label",[e._v("Mission/Vision: ")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.profileData.vission,expression:"profileData.vission"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"is-invalid":e.errors.has("vission")},attrs:{"data-vv-delay":"20",name:"vission",type:"text",placeholder:"Mission and vision of your institute"},domProps:{value:e.profileData.vission},on:{input:function(t){t.target.composing||e.$set(e.profileData,"vission",t.target.value)}}}),e._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("vission"),expression:"errors.has('vission')"}],staticClass:"is-invalid"}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("vission"),expression:"errors.has('vission')"}],staticClass:"text-danger text-center"},[e._v(e._s(e.errors.first("vission")))]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.profileError.vission,expression:"profileError.vission != ''"}],staticClass:"text-danger text-center"},[e._v(e._s(e.profileError.vission))])])]),e._v(" "),i("div",{staticClass:"form-group",class:{"has-error":e.errors.has("message")||""!=e.profileError.message}},[i("label",[e._v("Principal's Message: ")]),e._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.profileData.message,expression:"profileData.message"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"is-invalid":e.errors.has("message")},attrs:{"data-vv-delay":"20",name:"message",type:"text",rows:"5",placeholder:"Write a Message to the visitors/students"},domProps:{value:e.profileData.message},on:{input:function(t){t.target.composing||e.$set(e.profileData,"message",t.target.value)}}}),e._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("message"),expression:"errors.has('message')"}],staticClass:"is-invalid"}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("message"),expression:"errors.has('message')"}],staticClass:"text-danger text-center"},[e._v(e._s(e.errors.first("message")))]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.profileError.message,expression:"profileError.message != ''"}],staticClass:"text-danger text-center"},[e._v(e._s(e.profileError.message))])]),e._v(" "),i("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(t){return e.goBack()}}},[e._v("\n      Back\n    ")]),e._v(" "),i("button",{staticClass:"btn btnsubmit mt-n2",attrs:{type:"submit"}},[e._v("Submit")])])])}),[],!1,null,null,null).exports,o={data:function(){return{imageError:"",userImage:"",userImageStatus:!1,userId:"",url:"/api/profile/avatar",domainUrl:location.origin,imageData:""}},props:{user:{type:Object,default:null}},components:{PictureInput:a.a},created:function(){null!=this.user.avatar&&(this.userImage=this.user.avatar,this.userImageStatus=!0),this.userId=this.user.id},mounted:function(){},methods:{onChange:function(e){this.$refs.pictureInput.image&&(this.imageData=this.$refs.pictureInput.image)},onImageSubmit:function(){var e=this;if(""!=this.imageData){var t=new FormData;t.append("image",this.imageData),axios.post(this.url,t).then((function(t){e.userImage=t.data.image,e.userImageStatus=!0})).catch((function(t){t.response.data.errors.image&&(e.imageError=t.response.data.errors.image[0])}))}},editTheIcon:function(){this.userImageStatus=!1},canTheEdit:function(){this.userImageStatus=!0}}},l=(i("O2c5"),Object(r.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mb-3"},[e.userImageStatus?i("div",{staticClass:"container text-center ml-3"},[i("img",{staticClass:"princi-profile-picture rounded-circle",attrs:{height:"150",width:"152",src:"default.jpg"===e.userImage?"/images/default.jpg":e.domainUrl+"/media/channel/"+e.userId+"/profile/"+e.userImage,alt:"principal profile picture"}}),e._v(" "),i("button",{staticClass:"btn princi-profile-edit p-2",on:{click:function(t){return e.editTheIcon()}}},[i("i",{staticClass:"fa fa-camera",attrs:{"aria-hidden":"true"}})])]):e._e(),e._v(" "),e.userImageStatus?e._e():i("div",{staticClass:"princi-upload-profile-pic"},[i("picture-input",{ref:"pictureInput",attrs:{width:"152",height:"150",margin:"16",accept:"image/jpeg, image/png",size:"10","button-class":"btn","custom-strings":{upload:"<h1>Bummer!</h1>",drag:"Upload your profile picture"},name:"image"},on:{change:e.onChange}}),e._v(" "),i("div",{staticClass:"btnsuca text-center mt-2"},[""!=e.imageData?i("button",{staticClass:"btn btnsubmit mt-n2",attrs:{type:"button"},on:{click:function(t){return e.onImageSubmit()}}},[e._v("\n        Submit\n      ")]):e._e(),e._v(" "),""!=e.userImage?i("button",{staticClass:"btn btn-success",on:{click:function(t){return e.canTheEdit()}}},[i("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}}),e._v("Cancel\n      ")]):e._e()]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.imageError,expression:"imageError"}],staticClass:"text-danger text-center"},[e._v(e._s(e.imageError))])],1)])}),[],!1,null,"3067653b",null).exports),c={data:function(){return{activities:[],activityFormData:{activity:"",description:""},activityError:{activity:"",description:""},activityPath:"",activityIndex:""}},props:{profiledata:{type:Object,default:null}},created:function(){this.activities=this.profiledata.activities},mounted:function(){},methods:{addActivity:function(){this.activityPath="/api/add/activity",this.activityIndex="",this.emptyActivity(),$("#addActivity").modal("show")},emptyActivity:function(){this.activityFormData.activity="",this.activityFormData.description=""},editActivity:function(e,t){this.activityPath="/api/edit/activity/"+e.id,this.activityIndex=t,this.activityFormData.activity=e.activity,this.activityFormData.description=e.description,$("#addActivity").modal("show")},getActivityData:function(){var e=this;this.$validator.validate().then((function(t){t&&axios.post(e.activityPath,e.activityFormData).then((function(t){t.data.message&&(console.log(t.data),e.activityIndex,e.activities=t.data.data,$("#addActivity").modal("hide"))})).catch((function(t){t.response.data.errors.activity&&(e.activityError.activity=t.response.data.errors.activity[0]),t.response.data.errors.description&&(e.activityError.description=t.response.data.errors.description[0])}))}))}}},d=Object(r.a)(c,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h4",{staticClass:"mt-5 mb-5"},[e._v("\n       Other Activities  \n       "),i("button",{staticClass:"btn btnadd p-1",on:{click:function(t){return e.addActivity()}}},[e._v("+")])]),e._v(" "),null!=e.activities?i("div",{staticClass:"mx-0"},e._l(e.activities,(function(t,a){return i("ul",{key:a,staticClass:"nav flex-column"},[i("li",[i("div",{staticClass:"card mx-sm-3 shadow profiledetails",staticStyle:{height:"auto"}},[i("div",{staticClass:"card-body mt-n2"},[e._v("Activity: "+e._s(t.activity))])])]),e._v(" "),i("br"),e._v(" "),i("li",[i("div",{staticClass:"card mx-sm-3 shadow profiledetails",staticStyle:{height:"auto"}},[i("div",{staticClass:"card-body mt-n2"},[e._v("Description : "+e._s(t.description))])])]),e._v(" "),i("div",{staticClass:"ml-3 mt-2"},[i("button",{staticClass:"btn btnadd p-1",on:{click:function(i){return e.editActivity(t,a)}}},[i("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}})])])])})),0):e._e(),e._v(" "),i("div",{staticClass:"modal fade",attrs:{id:"addActivity",tabindex:"-1",role:"dialog","aria-labelledby":"principalprofilemodal","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[i("div",{staticClass:"modal-content"},[e._m(0),e._v(" "),i("div",{staticClass:"modal-body"},[i("form",{on:{submit:function(t){return t.preventDefault(),e.getActivityData()}}},[i("h6",{staticClass:"mb-3 mt-n2",staticStyle:{color:"#003585"}},[e._v("Other activities (non academic)")]),e._v(" "),i("hr",{staticClass:"mx-n3"}),e._v(" "),i("div",{staticClass:"form-group",class:{"has-error":e.errors.has("activity")||""!=e.activityError.activity}},[i("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Activity: ")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.activityFormData.activity,expression:"activityFormData.activity"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"is-invalid":e.errors.has("activity")},attrs:{"data-vv-delay":"20",name:"activity",type:"text",placeholder:"Name the activity"},domProps:{value:e.activityFormData.activity},on:{input:function(t){t.target.composing||e.$set(e.activityFormData,"activity",t.target.value)}}}),e._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("class"),expression:"errors.has('class')"}],staticClass:"is-invalid"}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("activity"),expression:"errors.has('activity')"}],staticClass:"text-danger text-center"},[e._v(e._s(e.errors.first("activity")))]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.activityError.activity,expression:"activityError.activity != ''"}],staticClass:"text-danger text-center"},[e._v(e._s(e.activityError.activity))])]),e._v(" "),i("div",{staticClass:"form-group",class:{"has-error":e.errors.has("description")||""!=e.activityError.description}},[i("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Description: ")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.activityFormData.description,expression:"activityFormData.description"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"is-invalid":e.errors.has("description")},attrs:{"data-vv-delay":"20",name:"description",type:"text",placeholder:"Describe your activities here"},domProps:{value:e.activityFormData.description},on:{input:function(t){t.target.composing||e.$set(e.activityFormData,"description",t.target.value)}}}),e._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("class"),expression:"errors.has('class')"}],staticClass:"is-invalid"}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("description"),expression:"errors.has('description')"}],staticClass:"text-danger text-center"},[e._v(e._s(e.errors.first("description")))]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.activityError.description,expression:"activityError.description != ''"}],staticClass:"text-danger text-center"},[e._v(e._s(e.activityError.description))])]),e._v(" "),i("button",{staticClass:"btn btnadd ml-0",attrs:{type:"submit"}},[e._v("Submit")])])])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}],!1,null,null,null).exports,u={data:function(){return{channelProfileData:[],genderVissionChecker:!0,profileData:{gender:"",vission:""},qualificationData:{school_name:"",degree:"",field_of_study:""},profileError:{gender:"",vission:""},qualificationError:{school_name:"",degree:"",field_of_study:""},domainUrl:location.origin,educationPath:"",qualificationEditDataId:"",qualificationEditIndex:"",imageData:"",imageError:"",imageChecker:!1}},props:{user:{type:Object,default:null}},components:{PictureInput:a.a,"profile-gender":n,"profile-avatar":l,activities:d},created:function(){this.channelProfileData=this.user,null==this.channelProfileData.gender&&(this.genderVissionChecker=!1),null==this.channelProfileData.avatar&&(this.imageChecker=!0)},mounted:function(){},methods:{getQualificationData:function(){var e=this;this.$validator.validate().then((function(t){t&&axios.post(e.educationPath,e.qualificationData).then((function(t){t.data.message&&(""==e.qualificationEditDataId?e.channelProfileData.education=t.data.data:e.channelProfileData.education.splice(e.qualificationEditIndex,1,t.data.user),$("#addEducation").modal("hide"))})).catch((function(t){t.response.data.errors.school_name&&(e.qualificationError.school_name=t.response.data.errors.school_name[0]),t.response.data.errors.degree&&(e.qualificationError.degree=t.response.data.errors.degree[0]),t.response.data.errors.field_of_study&&(e.qualificationError.field_of_study=t.response.data.errors.field_of_study[0])}))}))},goBack:function(){this.genderVissionChecker=!0},addEducation:function(){this.educationPath="",this.educationPath=this.domainUrl+"/api/add/education",this.qualificationEditDataId="",this.emptyEducationForm(),$("#addEducation").modal("show")},editTheEducation:function(e,t){console.log(e),this.qualificationData.school_name=e.school_name,this.qualificationData.degree=e.degree,this.qualificationData.field_of_study=e.field_of_study,this.qualificationEditDataId=e.id,this.educationPath="",this.educationPath=this.domainUrl+"/api/add/education/edit/"+e.id,this.qualificationEditIndex=t,$("#addEducation").modal("show")},emptyEducationForm:function(){this.qualificationData.school_name="",this.qualificationData.degree="",this.qualificationData.field_of_study=""},onChange:function(e){this.$refs.pictureInput.image&&(this.imageData=this.$refs.pictureInput.image)},onImageSubmit:function(){var e=this;if(""!=this.imageData){var t=new FormData;t.append("image",this.imageData),axios.post(this.domainUrl+"/api/profile/avatar",t).then((function(t){e.channelProfileData.avatar=t.data.image,e.imageChecker=!1})).catch((function(t){t.response.data.errors.image&&(e.imageError=t.response.data.errors.image[0])}))}else this.imageError="Image is empty"},onCancleImageEdit:function(){this.imageChecker=!1},editTheImage:function(){this.imageChecker=!0}}},p=Object(r.a)(u,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"profile"},[i("profile-avatar",{attrs:{user:e.channelProfileData}}),e._v(" "),i("h4",{staticClass:"text-center text-capitalized princi-name mx-auto p-2"},[e._v("Name: "+e._s(e.channelProfileData.name))]),e._v(" "),i("div",{staticClass:"body-channelprofile py-5"},[i("profile-gender",{attrs:{user:e.channelProfileData}}),e._v(" "),i("br"),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6"},[i("h4",{staticClass:"mt-5"},[e._v("\n         Educational Details (Recomended)  \n         "),i("button",{staticClass:"btn btnadd p-1",on:{click:function(t){return e.addEducation()}}},[e._v("+")])]),e._v(" "),e._l(e.channelProfileData.education,(function(t,a){return i("div",{key:t.id,staticClass:"mx-0 mt-5"},[i("ul",{staticClass:"nav flex-column pr-0"},[i("li",[i("div",{staticClass:"card mx-sm-3 shadow profiledetails"},[i("div",{staticClass:"card-body mt-n2"},[i("i",{staticClass:"fa fa-university",staticStyle:{color:"#003585"},attrs:{"aria-hidden":"true"}}),e._v(" University : "),i("strong",[e._v(e._s(t.school_name))])])])]),e._v(" "),i("li",[i("br"),e._v(" "),i("div",{staticClass:"card mx-sm-3 shadow profiledetails"},[i("div",{staticClass:"card-body mt-n2"},[i("i",{staticClass:"fa fa-graduation-cap",staticStyle:{color:"#003585"},attrs:{"aria-hidden":"true"}}),e._v(" Degree : "+e._s(t.degree))])])]),e._v(" "),i("li",[i("br"),e._v(" "),i("div",{staticClass:"card mx-sm-3 shadow profiledetails"},[i("div",{staticClass:"card-body mt-n2"},[i("i",{staticClass:"fa fa-book",staticStyle:{color:"#003585"},attrs:{"aria-hidden":"true"}}),e._v(" Field of study : "+e._s(t.field_of_study))])])]),e._v(" "),i("br")]),e._v(" "),i("div",{staticClass:"ml-3 mt-2"},[i("button",{staticClass:"btn btnadd p-1",on:{click:function(i){return e.editTheEducation(t,a)}}},[i("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}})])])])}))],2),e._v(" "),i("div",{staticClass:"col-sm-6"},[i("activities",{attrs:{profiledata:e.channelProfileData}})],1)])],1),e._v(" "),i("div",{staticClass:"modal fade pricipal-modal",attrs:{id:"addEducation",tabindex:"-1",role:"dialog","aria-labelledby":"principalprofilemodal","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[i("div",{staticClass:"modal-content"},[e._m(0),e._v(" "),i("div",{staticClass:"modal-body"},[i("form",{on:{submit:function(t){return t.preventDefault(),e.getQualificationData()}}},[i("h6",{staticClass:"mb-3 mt-n2"},[e._v("Highest Education")]),e._v(" "),i("hr",{staticClass:"mx-n3"}),e._v(" "),i("div",{staticClass:"form-group",class:{"has-error":e.errors.has("school_name")||""!=e.qualificationError.school_name}},[i("label",{attrs:{for:"exampleInputEmail1"}},[e._v("University:")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.qualificationData.school_name,expression:"qualificationData.school_name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"is-invalid":e.errors.has("school_name")},attrs:{"data-vv-delay":"20",name:"school_name",type:"text",placeholder:"Your university name"},domProps:{value:e.qualificationData.school_name},on:{input:function(t){t.target.composing||e.$set(e.qualificationData,"school_name",t.target.value)}}}),e._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("class"),expression:"errors.has('class')"}],staticClass:"is-invalid"}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("school_name"),expression:"errors.has('school_name')"}],staticClass:"text-danger text-center"},[e._v(e._s(e.errors.first("school_name")))]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.qualificationError.school_name,expression:"qualificationError.school_name != ''"}],staticClass:"text-danger"},[e._v(e._s(e.qualificationError.school_name))])]),e._v(" "),i("div",{staticClass:"form-group",class:{"has-error":e.errors.has("field_of_study")||""!=e.qualificationError.field_of_study}},[i("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Field of study:")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.qualificationData.field_of_study,expression:"qualificationData.field_of_study"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"is-invalid":e.errors.has("field_of_study")},attrs:{"data-vv-delay":"20",name:"field_of_study",type:"text",placeholder:"Field of study(specialization)"},domProps:{value:e.qualificationData.field_of_study},on:{input:function(t){t.target.composing||e.$set(e.qualificationData,"field_of_study",t.target.value)}}}),e._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("class"),expression:"errors.has('class')"}],staticClass:"is-invalid"}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("field_of_study"),expression:"errors.has('field_of_study')"}],staticClass:"text-danger text-center"},[e._v(e._s(e.errors.first("field_of_study")))]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.qualificationError.field_of_study,expression:"qualificationError.field_of_study != ''"}],staticClass:"text-danger"},[e._v(e._s(e.qualificationError.field_of_study))])]),e._v(" "),i("div",{staticClass:"form-group",class:{"has-error":e.errors.has("degree")||""!=e.qualificationError.degree}},[i("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Degree:")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.qualificationData.degree,expression:"qualificationData.degree"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"is-invalid":e.errors.has("degree")},attrs:{"data-vv-delay":"20",name:"degree",type:"text",placeholder:"Name of your degree"},domProps:{value:e.qualificationData.degree},on:{input:function(t){t.target.composing||e.$set(e.qualificationData,"degree",t.target.value)}}}),e._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("class"),expression:"errors.has('class')"}],staticClass:"is-invalid"}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("degree"),expression:"errors.has('degree')"}],staticClass:"text-danger text-center"},[e._v(e._s(e.errors.first("degree")))]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.qualificationError.degree,expression:"qualificationError.degree != ''"}],staticClass:"text-danger"},[e._v(e._s(e.qualificationError.degree))])]),e._v(" "),i("button",{staticClass:"btn btnadd ml-0",attrs:{type:"submit"}},[e._v("Submit")])])])])])])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("button",{staticClass:"close mr-2",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}],!1,null,null,null);t.default=p.exports},"9tPo":function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var i=t.protocol+"//"+t.host,a=i+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var s,r=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(s=0===r.indexOf("//")?r:0===r.indexOf("/")?i+r:a+r.replace(/^\.\//,""),"url("+JSON.stringify(s)+")")}))}},FD01:function(e,t,i){"use strict";var a=i("15tO");i.n(a).a},I1BE:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",a=e[3];if(!a)return i;if(t&&"function"==typeof btoa){var s=(n=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),r=a.sources.map((function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"}));return[i].concat(r).concat([s]).join("\n")}var n;return[i].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i})).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(a[r]=!0)}for(s=0;s<e.length;s++){var n=e[s];"number"==typeof n[0]&&a[n[0]]||(i&&!n[2]?n[2]=i:i&&(n[2]="("+n[2]+") and ("+i+")"),t.push(n))}},t}},"KHd+":function(e,t,i){"use strict";function a(e,t,i,a,s,r,n,o){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=i,c._compiled=!0),a&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),n?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},c._ssrRegister=l):s&&(l=o?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}i.d(t,"a",(function(){return a}))},O2c5:function(e,t,i){"use strict";var a=i("ifb7");i.n(a).a},"aET+":function(e,t,i){var a,s,r={},n=(a=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===s&&(s=a.apply(this,arguments)),s}),o=function(e,t){return t?t.querySelector(e):document.querySelector(e)},l=function(e){var t={};return function(e,i){if("function"==typeof e)return e();if(void 0===t[e]){var a=o.call(this,e,i);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}}(),c=null,d=0,u=[],p=i("9tPo");function h(e,t){for(var i=0;i<e.length;i++){var a=e[i],s=r[a.id];if(s){s.refs++;for(var n=0;n<s.parts.length;n++)s.parts[n](a.parts[n]);for(;n<a.parts.length;n++)s.parts.push(y(a.parts[n],t))}else{var o=[];for(n=0;n<a.parts.length;n++)o.push(y(a.parts[n],t));r[a.id]={id:a.id,refs:1,parts:o}}}}function v(e,t){for(var i=[],a={},s=0;s<e.length;s++){var r=e[s],n=t.base?r[0]+t.base:r[0],o={css:r[1],media:r[2],sourceMap:r[3]};a[n]?a[n].parts.push(o):i.push(a[n]={id:n,parts:[o]})}return i}function f(e,t){var i=l(e.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=u[u.length-1];if("top"===e.insertAt)a?a.nextSibling?i.insertBefore(t,a.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),u.push(t);else if("bottom"===e.insertAt)i.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var s=l(e.insertAt.before,i);i.insertBefore(t,s)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function g(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var a=function(){0;return i.nc}();a&&(e.attrs.nonce=a)}return _(t,e.attrs),f(e,t),t}function _(e,t){Object.keys(t).forEach((function(i){e.setAttribute(i,t[i])}))}function y(e,t){var i,a,s,r;if(t.transform&&e.css){if(!(r="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=r}if(t.singleton){var n=d++;i=c||(c=g(t)),a=x.bind(null,i,n,!1),s=x.bind(null,i,n,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",_(t,e.attrs),f(e,t),t}(t),a=D.bind(null,i,t),s=function(){m(i),i.href&&URL.revokeObjectURL(i.href)}):(i=g(t),a=C.bind(null,i),s=function(){m(i)});return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else s()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=n()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var i=v(e,t);return h(i,t),function(e){for(var a=[],s=0;s<i.length;s++){var n=i[s];(o=r[n.id]).refs--,a.push(o)}e&&h(v(e,t),t);for(s=0;s<a.length;s++){var o;if(0===(o=a[s]).refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete r[o.id]}}}};var b,w=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function x(e,t,i,a){var s=i?"":a.css;if(e.styleSheet)e.styleSheet.cssText=w(t,s);else{var r=document.createTextNode(s),n=e.childNodes;n[t]&&e.removeChild(n[t]),n.length?e.insertBefore(r,n[t]):e.appendChild(r)}}function C(e,t){var i=t.css,a=t.media;if(a&&e.setAttribute("media",a),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}function D(e,t,i){var a=i.css,s=i.sourceMap,r=void 0===t.convertToAbsoluteUrls&&s;(t.convertToAbsoluteUrls||r)&&(a=p(a)),s&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");var n=new Blob([a],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(n),o&&URL.revokeObjectURL(o)}},hcby:function(e,t,i){(e.exports=i("I1BE")(!1)).push([e.i,"\n.picture-input[data-v-5080a0f2] {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n}\n.preview-container[data-v-5080a0f2] {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 auto;\n  cursor: pointer;\n  overflow: hidden;\n}\n.picture-preview[data-v-5080a0f2] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 10001;\n  box-sizing: border-box;\n  background-color: rgba(200,200,200,.25);\n}\n.picture-preview.dragging-over[data-v-5080a0f2] {\n  -webkit-filter: brightness(0.5);\n          filter: brightness(0.5);\n}\n.picture-inner[data-v-5080a0f2] {\n  position: relative;\n  z-index: 10002;\n  pointer-events: none;\n  box-sizing: border-box;\n  margin: 1em auto;\n  padding: 0.5em;\n  border: .3em dashed rgba(66,66,66,.15);\n  border-radius: 8px;\n  width: calc(100% - 2.5em);\n  height: calc(100% - 2.5em);\n  display: table;\n}\n.picture-inner .picture-inner-text[data-v-5080a0f2] {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 2em;\n  line-height: 1.5;\n}\nbutton[data-v-5080a0f2] {\n  margin: 1em .25em;\n  cursor: pointer;\n}\ninput[type=file][data-v-5080a0f2] {\n  display: none;\n}\n",""])},ifb7:function(e,t,i){var a=i("3Flm");"string"==typeof a&&(a=[[e.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(a,s);a.locals&&(e.exports=a.locals)},rSiW:function(e,t,i){Vue.component("channel-profile",i("6Rwi").default);var a=document.getElementById("channel-profile");if(void 0!==a&&null!=a)new Vue({el:"#channel-profile"})}});
>>>>>>> 499710a687753338cb3a7a47de2288e27cdd0116
