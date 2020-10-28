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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditChannel.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditChannel.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _channel_website_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./channel/website.vue */ "./resources/js/components/channel/website.vue");
/* harmony import */ var _channel_description_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./channel/description.vue */ "./resources/js/components/channel/description.vue");
/* harmony import */ var _channel_cover_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./channel/cover.vue */ "./resources/js/components/channel/cover.vue");
/* harmony import */ var _channel_icon_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./channel/icon.vue */ "./resources/js/components/channel/icon.vue");
/* harmony import */ var _channel_infrastructure_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./channel/infrastructure.vue */ "./resources/js/components/channel/infrastructure.vue");
/* harmony import */ var _channel_standard_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./channel/standard.vue */ "./resources/js/components/channel/standard.vue");
/* harmony import */ var _channel_board_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./channel/board.vue */ "./resources/js/components/channel/board.vue");
/* harmony import */ var _channel_social_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./channel/social.vue */ "./resources/js/components/channel/social.vue");
/* harmony import */ var _channel_college_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./channel/college.vue */ "./resources/js/components/channel/college.vue");
/* harmony import */ var _channel_phone_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./channel/phone.vue */ "./resources/js/components/channel/phone.vue");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return _defineProperty({
      websiteLink: "",
      websiteLinkError: "",
      userData: {},
      channelData: []
    }, "userData", {});
  },
  props: {
    channel: {
      type: Array,
      "default": null
    },
    user: {
      type: Object,
      "default": null
    }
  },
  created: function created() {
    this.channelData = this.channel;
    this.userData = this.user;
  },
  mounted: function mounted() {},
  methods: {},
  components: {
    website: _channel_website_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    description: _channel_description_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    cover: _channel_cover_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    icon: _channel_icon_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    infrastructure: _channel_infrastructure_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    standard: _channel_standard_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    board: _channel_board_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    social: _channel_social_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    college: _channel_college_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    phone: _channel_phone_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/board.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/board.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      userData: [],
      boardData: [],
      boardDataStatus: false,
      value: []
    };
  },
  mounted: function mounted() {
    this.getBoardData();
  },
  methods: {
    getBoardData: function getBoardData() {
      var _this = this;

      axios.get("/api/board").then(function (response) {
        _this.userData = response.data.channel[0].board;
        _this.boardData = response.data.board;
        if (_this.userData.length > 0) _this.boardDataStatus = true;

        _this.theBoardDecider();
      })["catch"](function (errors) {
        console.log("i am error" + errors);
        Vue.toasted.error("Something went wrong", {
          position: "top-center",
          duration: 5000
        });
      });
    },
    theBoardDecider: function theBoardDecider() {
      var _this2 = this;

      this.value = [];

      if (this.userData != null) {
        this.boardData.map(function (board) {
          _this2.userData.map(function (data) {
            if (data.name === board.name) {
              _this2.value.push(board);
            }
          });
        });
      }
    },
    boardNameOnly: function boardNameOnly(board) {
      return "".concat(board.name);
    },
    editTheboard: function editTheboard() {
      this.boardDataStatus = false;
    },
    submitStandardData: function submitStandardData() {
      var _this3 = this;

      if (this.value.length) {
        var formData = {
          board: []
        };
        this.value.map(function (item) {
          formData.board.push(item.id);
        });
        axios.post("/api/board", formData).then(function (response) {
          _this3.userData = [];
          _this3.userData = response.data.data;
          console.log(_this3.userData);
          _this3.streamDataStatus = true;

          _this3.theBoardDecider();
        })["catch"](function (errors) {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000
          });
        });
      } else {
        Vue.toasted.error("Field is empty", {
          position: "top-center",
          duration: 5000
        });
      }

      this.boardDataStatus = true;
    }
  },
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/college.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/college.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      imageData: "",
      imageError: "",
      collegeImageData: {},
      collegeImageEntry: false,
      channelData: [],
      userId: "",
      domainUrl: location.origin
    };
  },
  props: {
    channel: {
      type: Array,
      "default": null
    }
  },
  created: function created() {
    this.channelData = this.channel[0];
    console.log(this.channelData);
    this.userId = this.channel[0].user_id;
  },
  mounted: function mounted() {},
  components: {
    PictureInput: vue_picture_input__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    onChange: function onChange(image) {
      if (this.$refs.pictureInput.image) this.imageData = this.$refs.pictureInput.image;
    },
    onImageSubmit: _.debounce(function () {
      var _this = this;

      if (this.imageData != "") {
        var formData = new FormData();
        formData.append("image", this.imageData);
        axios.post("/api/college/image/upload/" + this.channelData.id, formData).then(function (response) {
          _this.channelData.college_image = response.data.image;
          _this.collegeImageEntry = false;
          _this.imageData = "";
        })["catch"](function (errors) {
          if (errors.response.data.errors.image) {
            _this.imageError = errors.response.data.errors.image[0];
          }
        });
      }
    }, 500),
    deleteCollege: function deleteCollege(image, index) {
      var _this2 = this;

      axios.post("/api/delete/college/image/" + image.id).then(function (response) {
        if (response.data.message) {
          _this2.channelData.college_image.splice(index, 1);

          Vue.toasted.success("Image successfully deleted", {
            position: "top-center",
            duration: 5000
          });
        }
      })["catch"](function (errors) {
        Vue.toasted.error("Image successfully deleted", {
          position: "top-center",
          duration: 5000
        });
      });
    },
    insertImage: function insertImage() {
      this.collegeImageEntry = true;
    },
    canTheEdit: function canTheEdit() {
      this.collegeImageEntry = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/cover.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/cover.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      userImage: "",
      userImageStatus: false,
      userId: null,
      imageData: "",
      selectedImagefile: null,
      imageError: "",
      url: "/api/cover/upload",
      domainUrl: location.origin
    };
  },
  components: {
    PictureInput: vue_picture_input__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.getCoverData();
  },
  methods: {
    getCoverData: function getCoverData() {
      var _this = this;

      axios.get("/api/cover").then(function (response) {
        _this.userImage = response.data.image;
        _this.userId = response.data.userId;
        _this.userImageStatus = true;
      })["catch"](function (errors) {
        Vue.toasted.error("Something went wrong", {
          position: "top-center",
          duration: 5000
        });
      });
    },
    onImageSubmit: function onImageSubmit() {
      var _this2 = this;

      if (this.imageData != "") {
        var formData = new FormData();
        formData.append("image", this.imageData);
        axios.post(this.url, formData).then(function (response) {
          _this2.userImage = response.data.image;
          _this2.userImageStatus = true;
        })["catch"](function (errors) {
          if (errors.response.data.errors.image) {
            _this2.imageError = errors.response.data.errors.image[0];
          }
        });
      }
    },
    onChange: function onChange(image) {
      if (this.$refs.pictureInput.image) this.imageData = this.$refs.pictureInput.image;
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/description.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/description.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      descriptionFromServer: "",
      descriptionStatus: false,
      formData: {
        description: ""
      },
      url: "/api/description",
      descriptionError: ""
    };
  },
  mounted: function mounted() {
    this.getDescriptionDataFromServer();
  },
  methods: {
    getDescriptionDataFromServer: function getDescriptionDataFromServer() {
      var _this = this;

      axios.get(this.url).then(function (response) {
        if (response.data.data.description != null) {
          _this.descriptionFromServer = response.data.data.description;
          _this.descriptionStatus = true;
        }
      })["catch"](function (errors) {
        console.log(errors);
      });
    },
    getFormData: function getFormData() {
      var _this2 = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          if (_this2.descriptionFromServer != "") _this2.url = "/api/description/edit";
          axios.post(_this2.url, _this2.formData).then(function (response) {
            if (response.data.message === true) {
              Vue.toasted.success("Description is updated", {
                position: "top-center",
                duration: 5000
              });
              _this2.descriptionFromServer = response.data.data.description;
              _this2.descriptionStatus = true;
            }
          })["catch"](function (errors) {
            _this2.descriptionError = errors.response.data.description[0];
          });
        }
      });
    },
    editDescription: function editDescription() {
      this.formData.description = this.descriptionFromServer;
      this.descriptionStatus = false;
    },
    goBack: function goBack() {
      this.descriptionStatus = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/icon.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/icon.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_picture_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-picture-input */ "./node_modules/vue-picture-input/PictureInput.vue");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _ref;

    return _ref = {
      imageData: "",
      url: "api/icon",
      imageError: "",
      userImage: "",
      userImageStatus: false,
      userId: null
    }, _defineProperty(_ref, "url", "/api/icon/upload"), _defineProperty(_ref, "domainUrl", location.origin), _ref;
  },
  mounted: function mounted() {
    this.getImageData();
  },
  methods: {
    getImageData: function getImageData() {
      var _this = this;

      axios.get("/api/icon").then(function (response) {
        _this.userImage = response.data.image;
        _this.userId = response.data.userId;
        _this.userImageStatus = true;
      })["catch"](function (errors) {
        Vue.toasted.error("Something went wrong", {
          position: "top-center",
          duration: 5000
        });
      });
    },
    onChange: function onChange(image) {
      if (this.$refs.pictureInput.image) this.imageData = this.$refs.pictureInput.image;
    },
    onImageSubmit: function onImageSubmit() {
      var _this2 = this;

      if (this.imageData != "") {
        var formData = new FormData();
        formData.append("image", this.imageData);
        axios.post(this.url, formData).then(function (response) {
          onUploadProgress: (function (progressEvent) {
            console.log(progressEvent.loaded / progressEvent.total);
          });

          _this2.userImage = response.data.image;
          _this2.userImageStatus = true;
        })["catch"](function (errors) {
          if (errors.response.data.errors.image) {
            _this2.imageError = errors.response.data.errors.image[0];
          }
        });
      }
    },
    editTheIcon: function editTheIcon() {
      this.userImageStatus = false;
      this.imageData = this.userImage;
    },
    canTheEdit: function canTheEdit() {
      this.userImageStatus = true;
    }
  },
  components: {
    PictureInput: vue_picture_input__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/infrastructure.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/infrastructure.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      infrastructure: {},
      infrastructureStatus: true,
      formData: {
        no_of_class: "",
        canteen: "",
        stationary: "",
        boys_hostel: "",
        girls_hostel: "",
        computer_learning: "",
        wall: "",
        library: "",
        no_of_books: "",
        playground: "",
        hostel: "",
        bus_services: ""
      },
      serverErrors: {
        no_of_class: "",
        canteen: "",
        stationary: "",
        boys_hostel: "",
        girls_hostel: "",
        computer_learning: "",
        wall: "",
        library: "",
        no_of_books: "",
        playground: "",
        hostel: "",
        bus_services: ""
      }
    };
  },
  mounted: function mounted() {
    this.getUserData();
  },
  methods: {
    getUserData: function getUserData() {
      var _this = this;

      axios.get("/api/getUserData").then(function (response) {
        if (response.status === 200) {
          _this.infrastructure = response.data.user;
          if (_this.infrastructure.canteen != null) _this.infrastructureStatus = false;
        }
      })["catch"](function (errors) {
        console.log(errros);
      });
    },
    validateForm: function validateForm() {
      var _this2 = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          axios.post("/api/infra/store/" + _this2.infrastructure.id, _this2.formData).then(function (response) {
            _this2.infrastructureStatus = false;
            _this2.infrastructure = response.data.channel;
          })["catch"](function (errors) {
            if (errors.response.data.errors.no_of_class) {
              _this2.serverErrors.no_of_class = errors.response.data.errors.no_of_class[0];
            }

            if (errors.response.data.errors.canteen) {
              _this2.serverErrors.canteen = errors.response.data.errors.canteen[0];
            }

            if (errors.response.data.errors.stationary) {
              _this2.serverErrors.stationary = errors.response.data.errors.stationary[0];
            }

            if (errors.response.data.errors.computer_learning) {
              _this2.serverErrors.computer_learning = errors.response.data.errors.computer_learning[0];
            }

            if (errors.response.data.errors.boys_hostel) {
              _this2.serverErrors.boys_hostel = errors.response.data.errors.boys_hostel[0];
            }

            if (errors.response.data.errors.wall) {
              _this2.serverErrors.wall = errors.response.data.errors.wall[0];
            }

            if (errors.response.data.errors.library) {
              _this2.serverErrors.library = errors.response.data.errors.library[0];
            }

            if (errors.response.data.errors.no_of_books) {
              _this2.serverErrors.no_of_books = errors.response.data.errors.no_of_books[0];
            }

            if (errors.response.data.errors.playground) {
              _this2.serverErrors.playground = errors.response.data.errors.playground[0];
            }

            if (errors.response.data.errors.girls_hostel) {
              _this2.serverErrors.girls_hostel = errors.response.data.errors.girls_hostel[0];
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/phone.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/phone.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      userData: {},
      phoneData: {
        phone: ""
      },
      serverError: {
        phone: ""
      },
      otpData: {
        otp: ""
      },
      serverOtpError: {
        otp: ""
      },
      phoneVerificationChecker: true,
      otpVerificationCheck: false
    };
  },
  props: {
    user: {
      type: Object,
      "default": null
    }
  },
  created: function created() {
    this.userData = this.user;

    if (this.userData.phone == null) {
      this.phoneVerificationChecker = false;
    }
  },
  mounted: function mounted() {
    console.log("Phone Mounted");
  },
  methods: {
    phoneVerificationForm: function phoneVerificationForm() {
      var _this = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          axios.post("/api/edit/channel/phone/number/" + _this.userData.id, _this.phoneData).then(function (response) {
            if (response.data.message === true) {
              Vue.toasted.success("Phone number is succefully created", {
                position: "top-center",
                duration: 5000
              });
              _this.userData = response.data.user;
              _this.phoneVerificationChecker = true;
            }
          })["catch"](function (errors) {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000
            });

            if (errors.response.data.errors.phone) {
              _this.serverError.phone = errors.response.data.errors.phone[0];
            }
          });
        }
      });
    },
    otpVerificationForm: function otpVerificationForm() {},
    verifyPhoneNumber: function verifyPhoneNumber() {
      axios.post("/api/edit/channel/phone/number" + this.userData.id).then(function (response) {
        if (response.data.message === true) {}
      }, function (response) {
        if (response.status === 422) {}
      })["catch"](function (errors) {
        Vue.toasted.error("Something went wrong", {
          position: "top-center",
          duration: 5000
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/social.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/social.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      getTheModel: false,
      socialData: [],
      formData: {
        facebook: "",
        instagram: "",
        linkedin: "",
        youtube: ""
      },
      serverErrors: {
        facebook: "",
        instagram: "",
        linkedin: "",
        youtube: ""
      }
    };
  },
  mounted: function mounted() {
    this.getSocailData();
  },
  methods: {
    getSocailData: function getSocailData() {
      var _this = this;

      axios.get("/api/social").then(function (response) {
        _this.socialData = response.data.channel.extra_attributes.social;
      })["catch"](function (errors) {
        Vue.toasted.error("Something went wrong", {
          position: "top-center",
          duration: 5000
        });
      });
    },
    validateForm: function validateForm() {
      var _this2 = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          axios.post("/api/social", _this2.formData).then(function (response) {
            _this2.socialData = response.data.data.extra_attributes.social;
            _this2.getTheModel = false;
          })["catch"](function (errors) {
            if (errors.response.data.errors.facebook) {
              _this2.serverErrors.facebook = errors.response.data.errors.facebook[0];
            }

            if (errors.response.data.errors.instagram) {
              _this2.serverErrors.instagram = errors.response.data.errors.instagram[0];
            }

            if (errors.response.data.errors.linkedIn) {
              _this2.serverErrors.linkedIn = errors.response.data.errors.linkedIn[0];
            }

            if (errors.response.data.errors.youtube) {
              _this2.serverErrors.youtube = errors.response.data.errors.youtube[0];
            }
          });
        }
      });
    },
    editTheSocial: function editTheSocial() {
      this.getTheModel = !this.getTheModel;
      if (this.socialData.facebook != null) this.formData.facebook = this.socialData.facebook;
      if (this.socialData.instagram != null) this.formData.instagram = this.socialData.instagram;
      if (this.socialData.linkedin != null) this.formData.linkedin = this.socialData.linkedin;
      if (this.socialData.youtube != null) this.formData.youtube = this.socialData.youtube;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/standard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/standard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      userData: [],
      userDataLength: 0,
      standardData: [],
      standardDataStatus: false,
      standardDataDecider: [],
      value: []
    };
  },
  mounted: function mounted() {
    this.getStandardData();
  },
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  methods: {
    getStandardData: function getStandardData() {
      var _this = this;

      axios.get("/api/standard").then(function (response) {
        _this.userData = response.data.channel[0].standard;
        _this.userDataLength = _this.userData.length;
        _this.standardData = response.data.standard;
        if (_this.userData.length > 0) _this.standardDataStatus = true;

        _this.theStandardDecider();
      })["catch"](function (errors) {
        Vue.toasted.error("Something went wrong", {
          position: "top-center",
          duration: 5000
        });
      });
    },
    editTheStandard: function editTheStandard() {
      this.standardDataStatus = false;
    },
    theStandardDecider: function theStandardDecider() {
      var _this2 = this;

      this.value = [];

      if (this.userData != null) {
        this.standardData.map(function (item) {
          _this2.userData.map(function (data) {
            if (data.standard_name === item.standard_name) {
              _this2.value.push(item);
            }
          });
        });
      }
    },
    submitStandardData: function submitStandardData() {
      var _this3 = this;

      if (this.value.length > 0) {
        var formData = {
          standard: []
        };
        this.value.map(function (item) {
          formData.standard.push(item.id);
        });
        axios.post("/api/standard", formData).then(function (response) {
          _this3.userData = [];
          _this3.userData = response.data.data;
          _this3.standardDataStatus = true;

          _this3.theStandardDecider();
        })["catch"](function (errors) {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000
          });
        });
      } else {
        Vue.toasted.error("Field is empty", {
          position: "top-center",
          duration: 5000
        });
      }
    },
    standardNameOnly: function standardNameOnly(standard) {
      return "".concat(standard.standard_name);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/website.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/website.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      websiteLinkFromServer: "",
      formData: {
        website: ""
      },
      websiteLinkError: "",
      websiteOnPresent: false,
      url: "/api/website/"
    };
  },
  mounted: function mounted() {
    this.getWebsiteData();
  },
  methods: {
    getFormData: function getFormData() {
      var _this = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          if (_this.websiteLinkFromServer != "") _this.url = "/api/website/edit";
          axios.post(_this.url, _this.formData).then(function (response) {
            if (response.data.message === true) {
              Vue.toasted.success("Website is updated", {
                position: "top-center",
                duration: 5000
              });
              _this.websiteLinkFromServer = response.data.data.website_link;
              _this.websiteOnPresent = true;
            }
          })["catch"](function (errors) {
            _this.websiteLinkError = errors.response.data.message;
          });
        }
      });
    },
    getWebsiteData: function getWebsiteData() {
      var _this2 = this;

      axios.get("/api/website").then(function (response) {
        if (response.status === 200) {
          if (response.data.data.website_link != null) {
            _this2.websiteLinkFromServer = response.data.data.website_link;
            _this2.websiteOnPresent = true;
          }
        }
      })["catch"](function (errors) {
        console.log(errors);
      });
    },
    editMyWebsiteLink: function editMyWebsiteLink() {
      this.formData.website = this.websiteLinkFromServer;
      this.websiteOnPresent = false;
    },
    goBack: function goBack() {
      this.websiteOnPresent = true;
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/board.vue?vue&type=style&index=1&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--17-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--17-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/board.vue?vue&type=style&index=1&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-success {\r\n  border-radius: 0;\r\n  padding: 5px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/cover.vue?vue&type=style&index=0&id=ccb8d420&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--17-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--17-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/cover.vue?vue&type=style&index=0&id=ccb8d420&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btnsubmitcover[data-v-ccb8d420] {\r\n  background-color: #013737;\r\n  color: white;\r\n  padding-top: 2px;\r\n  padding-bottom: 2px;\r\n  border-radius: 0;\r\n  z-index: 100;\n}\n.btnsuca[data-v-ccb8d420] {\r\n  text-align: center;\n}\n.btn-success[data-v-ccb8d420] {\r\n  padding-top: 0.1rem !important;\r\n  padding-bottom: 0.1rem !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/description.vue?vue&type=style&index=0&id=4ad50216&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--17-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--17-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/description.vue?vue&type=style&index=0&id=4ad50216&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.desctext[data-v-4ad50216] {\r\n  background-color: white;\r\n  color: black;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/icon.vue?vue&type=style&index=0&id=d9ed4160&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--17-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--17-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/icon.vue?vue&type=style&index=0&id=d9ed4160&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btnsubmiticon[data-v-d9ed4160] {\r\n  background-color: #013737;\r\n  color: white;\r\n  padding-top: 2px;\r\n  padding-bottom: 2px;\r\n  border-radius: 0;\r\n  z-index: 100;\n}\n.btnsuca[data-v-d9ed4160] {\r\n  text-align: center;\n}\n.btn-success[data-v-d9ed4160] {\r\n  padding-top: 0.1rem !important;\r\n  padding-bottom: 0.1rem !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/website.vue?vue&type=style&index=0&id=ed4e66d8&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--17-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--17-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/website.vue?vue&type=style&index=0&id=ed4e66d8&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.slide-fade-enter-active[data-v-ed4e66d8] {\r\n  transition: all 0.5s ease;\n}\n.slide-fade-leave-active[data-v-ed4e66d8] {\r\n  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.slide-fade-enter[data-v-ed4e66d8],\r\n.slide-fade-leave-to[data-v-ed4e66d8] {\r\n  transform: translateX(10px);\r\n  opacity: 0;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--17-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--17-2!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#41b883;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{-webkit-animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__spinner:after{-webkit-animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input:-ms-input-placeholder{color:#35495e}.multiselect__input::-moz-placeholder{color:#35495e}.multiselect__input::-ms-input-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:\"\"}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@-webkit-keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}@keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/board.vue?vue&type=style&index=1&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--17-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--17-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/board.vue?vue&type=style&index=1&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--17-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--17-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./board.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/board.vue?vue&type=style&index=1&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/cover.vue?vue&type=style&index=0&id=ccb8d420&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--17-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--17-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/cover.vue?vue&type=style&index=0&id=ccb8d420&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--17-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--17-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./cover.vue?vue&type=style&index=0&id=ccb8d420&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/cover.vue?vue&type=style&index=0&id=ccb8d420&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/description.vue?vue&type=style&index=0&id=4ad50216&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--17-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--17-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/description.vue?vue&type=style&index=0&id=4ad50216&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--17-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--17-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./description.vue?vue&type=style&index=0&id=4ad50216&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/description.vue?vue&type=style&index=0&id=4ad50216&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/icon.vue?vue&type=style&index=0&id=d9ed4160&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--17-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--17-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/icon.vue?vue&type=style&index=0&id=d9ed4160&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--17-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--17-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./icon.vue?vue&type=style&index=0&id=d9ed4160&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/icon.vue?vue&type=style&index=0&id=d9ed4160&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/website.vue?vue&type=style&index=0&id=ed4e66d8&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--17-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--17-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/website.vue?vue&type=style&index=0&id=ed4e66d8&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--17-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--17-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./website.vue?vue&type=style&index=0&id=ed4e66d8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/website.vue?vue&type=style&index=0&id=ed4e66d8&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--17-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--17-2!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--17-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--17-2!./vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

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

/***/ "./node_modules/vee-validate/dist/vee-validate.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/vee-validate/dist/vee-validate.esm.js ***!
  \************************************************************/
/*! exports provided: default, ErrorBag, Rules, ValidationObserver, ValidationProvider, Validator, directive, install, mapFields, mixin, version, withValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorBag", function() { return ErrorBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rules", function() { return Rules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationObserver", function() { return ValidationObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationProvider", function() { return ValidationProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return Validator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFields", function() { return mapFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return mixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withValidation", function() { return withValidation; });
/**
  * vee-validate v2.2.15
  * (c) 2019 Abdelrahman Awad
  * @license MIT
  */
// 

var isTextInput = function (el) {
  return includes(['text', 'password', 'search', 'email', 'tel', 'url', 'textarea', 'number'], el.type);
};

var isCheckboxOrRadioInput = function (el) {
  return includes(['radio', 'checkbox'], el.type);
};

var isDateInput = function (el) {
  return includes(['date', 'week', 'month', 'datetime-local', 'time'], el.type);
};

/**
 * Gets the data attribute. the name must be kebab-case.
 */
var getDataAttribute = function (el, name) { return el.getAttribute(("data-vv-" + name)); };

var isNaN$1 = function (value) {
  if ('isNaN' in Number) {
    return Number.isNaN(value);
  }

  // eslint-disable-next-line
  return typeof(value) === 'number' && value !== value;
};

/**
 * Checks if the values are either null or undefined.
 */
var isNullOrUndefined = function () {
  var values = [], len = arguments.length;
  while ( len-- ) values[ len ] = arguments[ len ];

  return values.every(function (value) {
    return value === null || value === undefined;
  });
};

/**
 * Creates the default flags object.
 */
var createFlags = function () { return ({
  untouched: true,
  touched: false,
  dirty: false,
  pristine: true,
  valid: null,
  invalid: null,
  validated: false,
  pending: false,
  required: false,
  changed: false
}); };

/**
 * Shallow object comparison.
 */
var isEqual = function (lhs, rhs) {
  if (lhs instanceof RegExp && rhs instanceof RegExp) {
    return isEqual(lhs.source, rhs.source) && isEqual(lhs.flags, rhs.flags);
  }

  if (Array.isArray(lhs) && Array.isArray(rhs)) {
    if (lhs.length !== rhs.length) { return false; }

    for (var i = 0; i < lhs.length; i++) {
      if (!isEqual(lhs[i], rhs[i])) {
        return false;
      }
    }

    return true;
  }

  // if both are objects, compare each key recursively.
  if (isObject(lhs) && isObject(rhs)) {
    return Object.keys(lhs).every(function (key) {
      return isEqual(lhs[key], rhs[key]);
    }) && Object.keys(rhs).every(function (key) {
      return isEqual(lhs[key], rhs[key]);
    });
  }

  if (isNaN$1(lhs) && isNaN$1(rhs)) {
    return true;
  }

  return lhs === rhs;
};

/**
 * Determines the input field scope.
 */
var getScope = function (el) {
  var scope = getDataAttribute(el, 'scope');
  if (isNullOrUndefined(scope)) {
    var form = getForm(el);

    if (form) {
      scope = getDataAttribute(form, 'scope');
    }
  }

  return !isNullOrUndefined(scope) ? scope : null;
};

/**
 * Get the closest form element.
 */
var getForm = function (el) {
  if (isNullOrUndefined(el)) { return null; }

  if (el.tagName === 'FORM') { return el; }

  if (!isNullOrUndefined(el.form)) { return el.form; }

  return !isNullOrUndefined(el.parentNode) ? getForm(el.parentNode) : null;
};

/**
 * Gets the value in an object safely.
 */
var getPath = function (path, target, def) {
  if ( def === void 0 ) def = undefined;

  if (!path || !target) { return def; }

  var value = target;
  path.split('.').every(function (prop) {
    if (prop in value) {
      value = value[prop];

      return true;
    }

    value = def;

    return false;
  });

  return value;
};

/**
 * Checks if path exists within an object.
 */
var hasPath = function (path, target) {
  var obj = target;
  var previousPath = null;
  var isNullOrNonObject = false;
  var isValidPath = path.split('.').reduce(function (reducer, prop) {
    if (obj == null || typeof obj !== 'object') {
      isNullOrNonObject = true;
      return reducer && false;
    }

    if (prop in obj) {
      obj = obj[prop];
      previousPath = previousPath === null ? prop : previousPath + '.' + prop;

      return reducer && true;
    }

    return reducer && false;
  }, true);

  if (true) {
    if (isNullOrNonObject) {
      throw new Error(previousPath + ' is not an object');
    }
  }

  return isValidPath;
};

/**
 * Parses a rule string expression.
 */
var parseRule = function (rule) {
  var params = [];
  var name = rule.split(':')[0];

  if (includes(rule, ':')) {
    params = rule.split(':').slice(1).join(':').split(',');
  }

  return { name: name, params: params };
};

/**
 * Debounces a function.
 */
var debounce = function (fn, wait, token) {
  if ( wait === void 0 ) wait = 0;
  if ( token === void 0 ) token = { cancelled: false };

  if (wait === 0) {
    return fn;
  }

  var timeout;

  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var later = function () {
      timeout = null;

      // check if the fn call was cancelled.
      if (!token.cancelled) { fn.apply(void 0, args); }
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (!timeout) { fn.apply(void 0, args); }
  };
};

/**
 * Appends a rule definition to a list of rules.
 */
var appendRule = function (rule, rules) {
  if (!rules) {
    return normalizeRules(rule);
  }

  if (!rule) {
    return normalizeRules(rules);
  }

  if (typeof rules === 'string') {
    rules = normalizeRules(rules);
  }

  return assign({}, rules, normalizeRules(rule));
};

/**
 * Normalizes the given rules expression.
 */
var normalizeRules = function (rules) {
  // if falsy value return an empty object.
  if (!rules) {
    return {};
  }

  if (isObject(rules)) {
    // $FlowFixMe
    return Object.keys(rules).reduce(function (prev, curr) {
      var params = [];
      // $FlowFixMe
      if (rules[curr] === true) {
        params = [];
      } else if (Array.isArray(rules[curr])) {
        params = rules[curr];
      } else if (isObject(rules[curr])) {
        params = rules[curr];
      } else {
        params = [rules[curr]];
      }

      // $FlowFixMe
      if (rules[curr] !== false) {
        prev[curr] = params;
      }

      return prev;
    }, {});
  }

  if (typeof rules !== 'string') {
    warn('rules must be either a string or an object.');
    return {};
  }

  return rules.split('|').reduce(function (prev, rule) {
    var parsedRule = parseRule(rule);
    if (!parsedRule.name) {
      return prev;
    }

    prev[parsedRule.name] = parsedRule.params;
    return prev;
  }, {});
};

/**
 * Emits a warning to the console.
 */
var warn = function (message) {
  console.warn(("[vee-validate] " + message)); // eslint-disable-line
};

/**
 * Creates a branded error object.
 */
var createError = function (message) { return new Error(("[vee-validate] " + message)); };

/**
 * Checks if the value is an object.
 */
var isObject = function (obj) { return obj !== null && obj && typeof obj === 'object' && ! Array.isArray(obj); };

/**
 * Checks if a function is callable.
 */
var isCallable = function (func) { return typeof func === 'function'; };

/**
 * Check if element has the css class on it.
 */
var hasClass = function (el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  }

  return !!el.className.match(new RegExp(("(\\s|^)" + className + "(\\s|$)")));
};

/**
 * Adds the provided css className to the element.
 */
var addClass = function (el, className) {
  if (el.classList) {
    el.classList.add(className);
    return;
  }

  if (!hasClass(el, className)) {
    el.className += " " + className;
  }
};

/**
 * Remove the provided css className from the element.
 */
var removeClass = function (el, className) {
  if (el.classList) {
    el.classList.remove(className);
    return;
  }

  if (hasClass(el, className)) {
    var reg = new RegExp(("(\\s|^)" + className + "(\\s|$)"));
    el.className = el.className.replace(reg, ' ');
  }
};

/**
 * Adds or removes a class name on the input depending on the status flag.
 */
var toggleClass = function (el, className, status) {
  if (!el || !className) { return; }

  if (Array.isArray(className)) {
    className.forEach(function (item) { return toggleClass(el, item, status); });
    return;
  }

  if (status) {
    return addClass(el, className);
  }

  removeClass(el, className);
};

/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */
var toArray = function (arrayLike) {
  if (isCallable(Array.from)) {
    return Array.from(arrayLike);
  }

  var array = [];
  var length = arrayLike.length;
  /* istanbul ignore next */
  for (var i = 0; i < length; i++) {
    array.push(arrayLike[i]);
  }

  /* istanbul ignore next */
  return array;
};

/**
 * Converts an array-like object to array and place other elements in an array
 */
var ensureArray = function (arrayLike) {
  if (Array.isArray(arrayLike)) {
    return [].concat( arrayLike );
  }
  var array = toArray(arrayLike);
  return isEmptyArray(array) ? [arrayLike] : array;
};

/**
 * Assign polyfill from the mdn.
 */
var assign = function (target) {
  var others = [], len = arguments.length - 1;
  while ( len-- > 0 ) others[ len ] = arguments[ len + 1 ];

  /* istanbul ignore else */
  if (isCallable(Object.assign)) {
    return Object.assign.apply(Object, [ target ].concat( others ));
  }

  /* istanbul ignore next */
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  /* istanbul ignore next */
  var to = Object(target);
  /* istanbul ignore next */
  others.forEach(function (arg) {
    // Skip over if undefined or null
    if (arg != null) {
      Object.keys(arg).forEach(function (key) {
        to[key] = arg[key];
      });
    }
  });
  /* istanbul ignore next */
  return to;
};

var id = 0;
var idTemplate = '{id}';

/**
 * Generates a unique id.
 */
var uniqId = function () {
  // handle too many uses of uniqId, although unlikely.
  if (id >= 9999) {
    id = 0;
    // shift the template.
    idTemplate = idTemplate.replace('{id}', '_{id}');
  }

  id++;
  var newId = idTemplate.replace('{id}', String(id));

  return newId;
};

var findIndex = function (arrayLike, predicate) {
  var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return i;
    }
  }

  return -1;
};

/**
 * finds the first element that satisfies the predicate callback, polyfills array.find
 */
var find = function (arrayLike, predicate) {
  var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
  var idx = findIndex(array, predicate);

  return idx === -1 ? undefined : array[idx];
};

var isBuiltInComponent = function (vnode) {
  if (!vnode) {
    return false;
  }

  var tag = vnode.componentOptions.tag;

  return /^(keep-alive|transition|transition-group)$/.test(tag);
};

var makeDelayObject = function (events, delay, delayConfig) {
  if (typeof delay === 'number') {
    return events.reduce(function (prev, e) {
      prev[e] = delay;
      return prev;
    }, {});
  }

  return events.reduce(function (prev, e) {
    if (typeof delay === 'object' && e in delay) {
      prev[e] = delay[e];
      return prev;
    }

    if (typeof delayConfig === 'number') {
      prev[e] = delayConfig;
      return prev;
    }

    prev[e] = (delayConfig && delayConfig[e]) || 0;

    return prev;
  }, {});
};

var deepParseInt = function (input) {
  if (typeof input === 'number') { return input; }

  if (typeof input === 'string') { return parseInt(input); }

  var map = {};
  for (var element in input) {
    map[element] = parseInt(input[element]);
  }

  return map;
};

var merge = function (target, source) {
  if (! (isObject(target) && isObject(source))) {
    return target;
  }

  Object.keys(source).forEach(function (key) {
    var obj, obj$1;

    if (isObject(source[key])) {
      if (! target[key]) {
        assign(target, ( obj = {}, obj[key] = {}, obj ));
      }

      merge(target[key], source[key]);
      return;
    }

    assign(target, ( obj$1 = {}, obj$1[key] = source[key], obj$1 ));
  });

  return target;
};

var fillRulesFromElement = function (el, rules) {
  if (el.required) {
    rules = appendRule('required', rules);
  }

  if (isTextInput(el)) {
    if (el.type === 'email') {
      rules = appendRule(("email" + (el.multiple ? ':multiple' : '')), rules);
    }

    if (el.pattern) {
      rules = appendRule({ regex: el.pattern }, rules);
    }

    // 524288 is the max on some browsers and test environments.
    if (el.maxLength >= 0 && el.maxLength < 524288) {
      rules = appendRule(("max:" + (el.maxLength)), rules);
    }

    if (el.minLength > 0) {
      rules = appendRule(("min:" + (el.minLength)), rules);
    }

    if (el.type === 'number') {
      rules = appendRule('decimal', rules);
      if (el.min !== '') {
        rules = appendRule(("min_value:" + (el.min)), rules);
      }

      if (el.max !== '') {
        rules = appendRule(("max_value:" + (el.max)), rules);
      }
    }

    return rules;
  }

  if (isDateInput(el)) {
    var timeFormat = el.step && Number(el.step) < 60 ? 'HH:mm:ss' : 'HH:mm';

    if (el.type === 'date') {
      return appendRule('date_format:yyyy-MM-dd', rules);
    }

    if (el.type === 'datetime-local') {
      return appendRule(("date_format:yyyy-MM-ddT" + timeFormat), rules);
    }

    if (el.type === 'month') {
      return appendRule('date_format:yyyy-MM', rules);
    }

    if (el.type === 'week') {
      return appendRule('date_format:yyyy-[W]WW', rules);
    }

    if (el.type === 'time') {
      return appendRule(("date_format:" + timeFormat), rules);
    }
  }

  return rules;
};

var values = function (obj) {
  if (isCallable(Object.values)) {
    return Object.values(obj);
  }

  // fallback to keys()
  /* istanbul ignore next */
  return Object.keys(obj).map(function (k) { return obj[k]; });
};

var parseSelector = function (selector) {
  var rule = null;
  if (includes(selector, ':')) {
    rule = selector.split(':').pop();
    selector = selector.replace((":" + rule), '');
  }

  if (selector[0] === '#') {
    return {
      id: selector.slice(1),
      rule: rule,
      name: null,
      scope: null
    };
  }

  var scope = null;
  var name = selector;
  if (includes(selector, '.')) {
    var parts = selector.split('.');
    scope = parts[0];
    name = parts.slice(1).join('.');
  }

  return {
    id: null,
    scope: scope,
    name: name,
    rule: rule
  };
};

var includes = function (collection, item) {
  return collection.indexOf(item) !== -1;
};

var isEmptyArray = function (arr) {
  return Array.isArray(arr) && arr.length === 0;
};

var defineNonReactive = function (obj, prop, value) {
  Object.defineProperty(obj, prop, {
    configurable: false,
    writable: true,
    value: value
  });
};

// 

var LOCALE = 'en';

var Dictionary = function Dictionary (dictionary) {
  if ( dictionary === void 0 ) dictionary = {};

  this.container = {};
  this.merge(dictionary);
};

var prototypeAccessors = { locale: { configurable: true } };

prototypeAccessors.locale.get = function () {
  return LOCALE;
};

prototypeAccessors.locale.set = function (value) {
  LOCALE = value || 'en';
};

Dictionary.prototype.hasLocale = function hasLocale (locale) {
  return !!this.container[locale];
};

Dictionary.prototype.setDateFormat = function setDateFormat (locale, format) {
  if (!this.container[locale]) {
    this.container[locale] = {};
  }

  this.container[locale].dateFormat = format;
};

Dictionary.prototype.getDateFormat = function getDateFormat (locale) {
  if (!this.container[locale] || !this.container[locale].dateFormat) {
    return null;
  }

  return this.container[locale].dateFormat;
};

Dictionary.prototype.getMessage = function getMessage (locale, key, data) {
  var message = null;
  if (!this.hasMessage(locale, key)) {
    message = this._getDefaultMessage(locale);
  } else {
    message = this.container[locale].messages[key];
  }

  return isCallable(message) ? message.apply(void 0, data) : message;
};

/**
 * Gets a specific message for field. falls back to the rule message.
 */
Dictionary.prototype.getFieldMessage = function getFieldMessage (locale, field, key, data) {
  if (!this.hasLocale(locale)) {
    return this.getMessage(locale, key, data);
  }

  var dict = this.container[locale].custom && this.container[locale].custom[field];
  if (!dict || !dict[key]) {
    return this.getMessage(locale, key, data);
  }

  var message = dict[key];
  return isCallable(message) ? message.apply(void 0, data) : message;
};

Dictionary.prototype._getDefaultMessage = function _getDefaultMessage (locale) {
  if (this.hasMessage(locale, '_default')) {
    return this.container[locale].messages._default;
  }

  return this.container.en.messages._default;
};

Dictionary.prototype.getAttribute = function getAttribute (locale, key, fallback) {
    if ( fallback === void 0 ) fallback = '';

  if (!this.hasAttribute(locale, key)) {
    return fallback;
  }

  return this.container[locale].attributes[key];
};

Dictionary.prototype.hasMessage = function hasMessage (locale, key) {
  return !! (
    this.hasLocale(locale) &&
          this.container[locale].messages &&
          this.container[locale].messages[key]
  );
};

Dictionary.prototype.hasAttribute = function hasAttribute (locale, key) {
  return !! (
    this.hasLocale(locale) &&
          this.container[locale].attributes &&
          this.container[locale].attributes[key]
  );
};

Dictionary.prototype.merge = function merge$1 (dictionary) {
  merge(this.container, dictionary);
};

Dictionary.prototype.setMessage = function setMessage (locale, key, message) {
  if (! this.hasLocale(locale)) {
    this.container[locale] = {
      messages: {},
      attributes: {}
    };
  }
    
  if (!this.container[locale].messages) {
    this.container[locale].messages = {};
  }

  this.container[locale].messages[key] = message;
};

Dictionary.prototype.setAttribute = function setAttribute (locale, key, attribute) {
  if (! this.hasLocale(locale)) {
    this.container[locale] = {
      messages: {},
      attributes: {}
    };
  }

  this.container[locale].attributes[key] = attribute;
};

Object.defineProperties( Dictionary.prototype, prototypeAccessors );

var drivers = {
  default: new Dictionary({
    en: {
      messages: {},
      attributes: {},
      custom: {}
    }
  })
};

var currentDriver = 'default';

var DictionaryResolver = function DictionaryResolver () {};

DictionaryResolver._checkDriverName = function _checkDriverName (driver) {
  if (!driver) {
    throw createError('you must provide a name to the dictionary driver');
  }
};

DictionaryResolver.setDriver = function setDriver (driver, implementation) {
    if ( implementation === void 0 ) implementation = null;

  this._checkDriverName(driver);
  if (implementation) {
    drivers[driver] = implementation;
  }

  currentDriver = driver;
};

DictionaryResolver.getDriver = function getDriver () {
  return drivers[currentDriver];
};

// 

var ErrorBag = function ErrorBag (errorBag, id) {
  if ( errorBag === void 0 ) errorBag = null;
  if ( id === void 0 ) id = null;

  this.vmId = id || null;
  // make this bag a mirror of the provided one, sharing the same items reference.
  if (errorBag && errorBag instanceof ErrorBag) {
    this.items = errorBag.items;
  } else {
    this.items = [];
  }
};

ErrorBag.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function () {
    var this$1 = this;

  var index = 0;
  return {
    next: function () {
      return { value: this$1.items[index++], done: index > this$1.items.length };
    }
  };
};

/**
 * Adds an error to the internal array.
 */
ErrorBag.prototype.add = function add (error) {
    var ref;

  (ref = this.items).push.apply(
    ref, this._normalizeError(error)
  );
};

/**
 * Normalizes passed errors to an error array.
 */
ErrorBag.prototype._normalizeError = function _normalizeError (error) {
    var this$1 = this;

  if (Array.isArray(error)) {
    return error.map(function (e) {
      e.scope = !isNullOrUndefined(e.scope) ? e.scope : null;
      e.vmId = !isNullOrUndefined(e.vmId) ? e.vmId : (this$1.vmId || null);

      return e;
    });
  }

  error.scope = !isNullOrUndefined(error.scope) ? error.scope : null;
  error.vmId = !isNullOrUndefined(error.vmId) ? error.vmId : (this.vmId || null);

  return [error];
};

/**
 * Regenrates error messages if they have a generator function.
 */
ErrorBag.prototype.regenerate = function regenerate () {
  this.items.forEach(function (i) {
    i.msg = isCallable(i.regenerate) ? i.regenerate() : i.msg;
  });
};

/**
 * Updates a field error with the new field scope.
 */
ErrorBag.prototype.update = function update (id, error) {
  var item = find(this.items, function (i) { return i.id === id; });
  if (!item) {
    return;
  }

  var idx = this.items.indexOf(item);
  this.items.splice(idx, 1);
  item.scope = error.scope;
  this.items.push(item);
};

/**
 * Gets all error messages from the internal array.
 */
ErrorBag.prototype.all = function all (scope) {
    var this$1 = this;

  var filterFn = function (item) {
    var matchesScope = true;
    var matchesVM = true;
    if (!isNullOrUndefined(scope)) {
      matchesScope = item.scope === scope;
    }

    if (!isNullOrUndefined(this$1.vmId)) {
      matchesVM = item.vmId === this$1.vmId;
    }

    return matchesVM && matchesScope;
  };

  return this.items.filter(filterFn).map(function (e) { return e.msg; });
};

/**
 * Checks if there are any errors in the internal array.
 */
ErrorBag.prototype.any = function any (scope) {
    var this$1 = this;

  var filterFn = function (item) {
    var matchesScope = true;
    var matchesVM = true;
    if (!isNullOrUndefined(scope)) {
      matchesScope = item.scope === scope;
    }

    if (!isNullOrUndefined(this$1.vmId)) {
      matchesVM = item.vmId === this$1.vmId;
    }

    return matchesVM && matchesScope;
  };

  return !!this.items.filter(filterFn).length;
};

/**
 * Removes all items from the internal array.
 */
ErrorBag.prototype.clear = function clear (scope) {
    var this$1 = this;

  var matchesVM = isNullOrUndefined(this.vmId) ? function () { return true; } : function (i) { return i.vmId === this$1.vmId; };
  var matchesScope = function (i) { return i.scope === scope; };
  if (arguments.length === 0) {
    matchesScope = function () { return true; };
  } else if (isNullOrUndefined(scope)) {
    scope = null;
  }

  for (var i = 0; i < this.items.length; ++i) {
    if (matchesVM(this.items[i]) && matchesScope(this.items[i])) {
      this.items.splice(i, 1);
      --i;
    }
  }
};

/**
 * Collects errors into groups or for a specific field.
 */
ErrorBag.prototype.collect = function collect (field, scope, map) {
    var this$1 = this;
    if ( map === void 0 ) map = true;

  var isSingleField = !isNullOrUndefined(field) && !field.includes('*');
  var groupErrors = function (items) {
    var errors = items.reduce(function (collection, error) {
      if (!isNullOrUndefined(this$1.vmId) && error.vmId !== this$1.vmId) {
        return collection;
      }

      if (!collection[error.field]) {
        collection[error.field] = [];
      }

      collection[error.field].push(map ? error.msg : error);

      return collection;
    }, {});

    // reduce the collection to be a single array.
    if (isSingleField) {
      return values(errors)[0] || [];
    }

    return errors;
  };

  if (isNullOrUndefined(field)) {
    return groupErrors(this.items);
  }

  var selector = isNullOrUndefined(scope) ? String(field) : (scope + "." + field);
  var ref = this._makeCandidateFilters(selector);
    var isPrimary = ref.isPrimary;
    var isAlt = ref.isAlt;

  var collected = this.items.reduce(function (prev, curr) {
    if (isPrimary(curr)) {
      prev.primary.push(curr);
    }

    if (isAlt(curr)) {
      prev.alt.push(curr);
    }

    return prev;
  }, { primary: [], alt: [] });

  collected = collected.primary.length ? collected.primary : collected.alt;

  return groupErrors(collected);
};

/**
 * Gets the internal array length.
 */
ErrorBag.prototype.count = function count () {
    var this$1 = this;

  if (this.vmId) {
    return this.items.filter(function (e) { return e.vmId === this$1.vmId; }).length;
  }

  return this.items.length;
};

/**
 * Finds and fetches the first error message for the specified field id.
 */
ErrorBag.prototype.firstById = function firstById (id) {
  var error = find(this.items, function (i) { return i.id === id; });

  return error ? error.msg : undefined;
};

/**
 * Gets the first error message for a specific field.
 */
ErrorBag.prototype.first = function first (field, scope) {
    if ( scope === void 0 ) scope = null;

  var selector = isNullOrUndefined(scope) ? field : (scope + "." + field);
  var match = this._match(selector);

  return match && match.msg;
};

/**
 * Returns the first error rule for the specified field
 */
ErrorBag.prototype.firstRule = function firstRule (field, scope) {
  var errors = this.collect(field, scope, false);

  return (errors.length && errors[0].rule) || undefined;
};

/**
 * Checks if the internal array has at least one error for the specified field.
 */
ErrorBag.prototype.has = function has (field, scope) {
    if ( scope === void 0 ) scope = null;

  return !!this.first(field, scope);
};

/**
 * Gets the first error message for a specific field and a rule.
 */
ErrorBag.prototype.firstByRule = function firstByRule (name, rule, scope) {
    if ( scope === void 0 ) scope = null;

  var error = this.collect(name, scope, false).filter(function (e) { return e.rule === rule; })[0];

  return (error && error.msg) || undefined;
};

/**
 * Gets the first error message for a specific field that not match the rule.
 */
ErrorBag.prototype.firstNot = function firstNot (name, rule, scope) {
    if ( rule === void 0 ) rule = 'required';
    if ( scope === void 0 ) scope = null;

  var error = this.collect(name, scope, false).filter(function (e) { return e.rule !== rule; })[0];

  return (error && error.msg) || undefined;
};

/**
 * Removes errors by matching against the id or ids.
 */
ErrorBag.prototype.removeById = function removeById (id) {
  var condition = function (item) { return item.id === id; };
  if (Array.isArray(id)) {
    condition = function (item) { return id.indexOf(item.id) !== -1; };
  }

  for (var i = 0; i < this.items.length; ++i) {
    if (condition(this.items[i])) {
      this.items.splice(i, 1);
      --i;
    }
  }
};

/**
 * Removes all error messages associated with a specific field.
 */
ErrorBag.prototype.remove = function remove (field, scope, vmId) {
  if (isNullOrUndefined(field)) {
    return;
  }

  var selector = isNullOrUndefined(scope) ? String(field) : (scope + "." + field);
  var ref = this._makeCandidateFilters(selector);
    var isPrimary = ref.isPrimary;
    var isAlt = ref.isAlt;
  var matches = function (item) { return isPrimary(item) || isAlt(item); };
  var shouldRemove = function (item) {
    if (isNullOrUndefined(vmId)) { return matches(item); }

    return matches(item) && item.vmId === vmId;
  };

  for (var i = 0; i < this.items.length; ++i) {
    if (shouldRemove(this.items[i])) {
      this.items.splice(i, 1);
      --i;
    }
  }
};

ErrorBag.prototype._makeCandidateFilters = function _makeCandidateFilters (selector) {
    var this$1 = this;

  var matchesRule = function () { return true; };
  var matchesScope = function () { return true; };
  var matchesName = function () { return true; };
  var matchesVM = function () { return true; };

  var ref = parseSelector(selector);
    var id = ref.id;
    var rule = ref.rule;
    var scope = ref.scope;
    var name = ref.name;

  if (rule) {
    matchesRule = function (item) { return item.rule === rule; };
  }

  // match by id, can be combined with rule selection.
  if (id) {
    return {
      isPrimary: function (item) { return matchesRule(item) && (function (item) { return id === item.id; }); },
      isAlt: function () { return false; }
    };
  }

  if (isNullOrUndefined(scope)) {
    // if no scope specified, make sure the found error has no scope.
    matchesScope = function (item) { return isNullOrUndefined(item.scope); };
  } else {
    matchesScope = function (item) { return item.scope === scope; };
  }

  if (!isNullOrUndefined(name) && name !== '*') {
    matchesName = function (item) { return item.field === name; };
  }

  if (!isNullOrUndefined(this.vmId)) {
    matchesVM = function (item) { return item.vmId === this$1.vmId; };
  }

  // matches the first candidate.
  var isPrimary = function (item) {
    return matchesVM(item) && matchesName(item) && matchesRule(item) && matchesScope(item);
  };

  // matches a second candidate, which is a field with a name containing the '.' character.
  var isAlt = function (item) {
    return matchesVM(item) && matchesRule(item) && item.field === (scope + "." + name);
  };

  return {
    isPrimary: isPrimary,
    isAlt: isAlt
  };
};

ErrorBag.prototype._match = function _match (selector) {
  if (isNullOrUndefined(selector)) {
    return undefined;
  }

  var ref = this._makeCandidateFilters(selector);
    var isPrimary = ref.isPrimary;
    var isAlt = ref.isAlt;

  return this.items.reduce(function (prev, item, idx, arr) {
    var isLast = idx === arr.length - 1;
    if (prev.primary) {
      return isLast ? prev.primary : prev;
    }

    if (isPrimary(item)) {
      prev.primary = item;
    }

    if (isAlt(item)) {
      prev.alt = item;
    }

    // keep going.
    if (!isLast) {
      return prev;
    }

    return prev.primary || prev.alt;
  }, {});
};

var DEFAULT_CONFIG = {
  locale: 'en',
  delay: 0,
  errorBagName: 'errors',
  dictionary: null,
  fieldsBagName: 'fields',
  classes: false,
  classNames: null,
  events: 'input',
  inject: true,
  fastExit: true,
  aria: true,
  validity: false,
  mode: 'aggressive',
  useConstraintAttrs: true,
  i18n: null,
  i18nRootKey: 'validation'
};

var currentConfig = assign({}, DEFAULT_CONFIG);

var resolveConfig = function (ctx) {
  var selfConfig = getPath('$options.$_veeValidate', ctx, {});

  return assign({}, currentConfig, selfConfig);
};

var getConfig = function () { return currentConfig; };

var setConfig = function (newConf) {
  currentConfig = assign({}, currentConfig, newConf);
};

// VNode Utils

// Gets the model object on the vnode.
function findModel (vnode) {
  if (!vnode.data) {
    return null;
  }

  // Component Model
  if (vnode.data.model) {
    return vnode.data.model;
  }

  return !!(vnode.data.directives) && find(vnode.data.directives, function (d) { return d.name === 'model'; });
}

function extractChildren (vnode) {
  if (Array.isArray(vnode)) {
    return vnode;
  }

  if (Array.isArray(vnode.children)) {
    return vnode.children;
  }

  if (vnode.componentOptions && Array.isArray(vnode.componentOptions.children)) {
    return vnode.componentOptions.children;
  }

  return [];
}

function extractVNodes (vnode) {
  if (findModel(vnode)) {
    return [vnode];
  }

  var children = extractChildren(vnode);

  return children.reduce(function (nodes, node) {
    var candidates = extractVNodes(node);
    if (candidates.length) {
      nodes.push.apply(nodes, candidates);
    }

    return nodes;
  }, []);
}

// Resolves v-model config if exists.
function findModelConfig (vnode) {
  if (!vnode.componentOptions) { return null; }

  return vnode.componentOptions.Ctor.options.model;
}
// Adds a listener to vnode listener object.
function mergeVNodeListeners (obj, eventName, handler) {
  // Has a single listener, convert to array.
  if (isCallable(obj[eventName])) {
    var prevHandler = obj[eventName];
    obj[eventName] = [prevHandler];
  }

  // no listeners, create the array.
  if (isNullOrUndefined(obj[eventName])) {
    obj[eventName] = [];
  }

  obj[eventName].push(handler);
}

// Adds a listener to a native HTML vnode.
function addNativeNodeListener (node, eventName, handler) {
  if (isNullOrUndefined(node.data.on)) {
    node.data.on = {};
  }

  mergeVNodeListeners(node.data.on, eventName, handler);
}

// Adds a listener to a Vue component vnode.
function addComponentNodeListener (node, eventName, handler) {
  /* istanbul ignore next */
  if (!node.componentOptions.listeners) {
    node.componentOptions.listeners = {};
  }

  mergeVNodeListeners(node.componentOptions.listeners, eventName, handler);
}
function addVNodeListener (vnode, eventName, handler) {
  if (vnode.componentOptions) {
    addComponentNodeListener(vnode, eventName, handler);
    return;
  }

  addNativeNodeListener(vnode, eventName, handler);
}
// Determines if `change` should be used over `input` for listeners.
function getInputEventName (vnode, model) {
  // Is a component.
  if (vnode.componentOptions) {
    var ref = findModelConfig(vnode) || { event: 'input' };
    var event = ref.event;

    return event;
  }

  // Lazy Models and select tag typically use change event
  if ((model && model.modifiers && model.modifiers.lazy) || vnode.tag === 'select') {
    return 'change';
  }

  // is a textual-type input.
  if (vnode.data.attrs && isTextInput({ type: vnode.data.attrs.type || 'text' })) {
    return 'input';
  }

  return 'change';
}

function normalizeSlots (slots, ctx) {
  return Object.keys(slots).reduce(function (arr, key) {
    slots[key].forEach(function (vnode) {
      if (!vnode.context) {
        slots[key].context = ctx;
        if (!vnode.data) {
          vnode.data = {};
        }
        vnode.data.slot = key;
      }
    });

    return arr.concat(slots[key]);
  }, []);
}
function createRenderless (h, children) {
  // Only render the first item of the node.
  if (Array.isArray(children) && children[0]) {
    return children[0];
  }

  // a single node.
  if (children) {
    return children;
  }

  // No slots, render nothing.
  return h();
}

/**
 * Generates the options required to construct a field.
 */
var Resolver = function Resolver () {};

Resolver.generate = function generate (el, binding, vnode) {
  var model = Resolver.resolveModel(binding, vnode);
  var options = resolveConfig(vnode.context);

  return {
    name: Resolver.resolveName(el, vnode),
    el: el,
    listen: !binding.modifiers.disable,
    bails: binding.modifiers.bails ? true : (binding.modifiers.continues === true ? false : undefined),
    scope: Resolver.resolveScope(el, binding, vnode),
    vm: vnode.context,
    expression: binding.value,
    component: vnode.componentInstance,
    classes: options.classes,
    classNames: options.classNames,
    getter: Resolver.resolveGetter(el, vnode, model),
    events: Resolver.resolveEvents(el, vnode) || options.events,
    model: model,
    delay: Resolver.resolveDelay(el, vnode, options),
    rules: Resolver.resolveRules(el, binding, vnode),
    immediate: !!binding.modifiers.initial || !!binding.modifiers.immediate,
    persist: !!binding.modifiers.persist,
    validity: options.validity && !vnode.componentInstance,
    aria: options.aria && !vnode.componentInstance,
    initialValue: Resolver.resolveInitialValue(vnode)
  };
};

Resolver.getCtorConfig = function getCtorConfig (vnode) {
  if (!vnode.componentInstance) { return null; }

  var config = getPath('componentInstance.$options.$_veeValidate', vnode);

  return config;
};

/**
 * Resolves the rules defined on an element.
 */
Resolver.resolveRules = function resolveRules (el, binding, vnode) {
  var rules = '';
  if (!binding.value && (!binding || !binding.expression)) {
    rules = getDataAttribute(el, 'rules');
  }

  if (binding.value && includes(['string', 'object'], typeof binding.value.rules)) {
    rules = binding.value.rules;
  } else if (binding.value) {
    rules = binding.value;
  }

  if (vnode.componentInstance) {
    return rules;
  }

  // If validity is disabled, ignore field rules.
  var normalized = normalizeRules(rules);
  if (!getConfig().useConstraintAttrs) {
    return normalized;
  }

  return assign({}, fillRulesFromElement(el, {}), normalized);
};

/**
 * @param {*} vnode
 */
Resolver.resolveInitialValue = function resolveInitialValue (vnode) {
  var model = vnode.data.model || find(vnode.data.directives, function (d) { return d.name === 'model'; });

  return model && model.value;
};

/**
 * Resolves the delay value.
 * @param {*} el
 * @param {*} vnode
 * @param {Object} options
 */
Resolver.resolveDelay = function resolveDelay (el, vnode, options) {
  var delay = getDataAttribute(el, 'delay');
  var globalDelay = (options && 'delay' in options) ? options.delay : 0;

  if (!delay && vnode.componentInstance && vnode.componentInstance.$attrs) {
    delay = vnode.componentInstance.$attrs['data-vv-delay'];
  }

  if (!isObject(globalDelay)) {
    return deepParseInt(delay || globalDelay);
  }

  if (!isNullOrUndefined(delay)) {
    globalDelay.input = delay;
  }

  return deepParseInt(globalDelay);
};

/**
 * Resolves the events to validate in response to.
 * @param {*} el
 * @param {*} vnode
 */
Resolver.resolveEvents = function resolveEvents (el, vnode) {
  // resolve it from the root element.
  var events = getDataAttribute(el, 'validate-on');

  // resolve from data-vv-validate-on if its a vue component.
  if (!events && vnode.componentInstance && vnode.componentInstance.$attrs) {
    events = vnode.componentInstance.$attrs['data-vv-validate-on'];
  }

  // resolve it from $_veeValidate options.
  if (!events && vnode.componentInstance) {
    var config = Resolver.getCtorConfig(vnode);
    events = config && config.events;
  }

  if (!events && getConfig().events) {
    events = getConfig().events;
  }

  // resolve the model event if its configured for custom components.
  if (events && vnode.componentInstance && includes(events, 'input')) {
    var ref = vnode.componentInstance.$options.model || { event: 'input' };
      var event = ref.event;
    // if the prop was configured but not the model.
    if (!event) {
      return events;
    }

    events = events.replace('input', event);
  }

  return events;
};

/**
 * Resolves the scope for the field.
 * @param {*} el
 * @param {*} binding
 */
Resolver.resolveScope = function resolveScope (el, binding, vnode) {
    if ( vnode === void 0 ) vnode = {};

  var scope = null;
  if (vnode.componentInstance && isNullOrUndefined(scope)) {
    scope = vnode.componentInstance.$attrs && vnode.componentInstance.$attrs['data-vv-scope'];
  }

  return !isNullOrUndefined(scope) ? scope : getScope(el);
};

/**
 * Checks if the node directives contains a v-model or a specified arg.
 * Args take priority over models.
 *
 * @return {Object}
 */
Resolver.resolveModel = function resolveModel (binding, vnode) {
  if (binding.arg) {
    return { expression: binding.arg };
  }

  var model = findModel(vnode);
  if (!model) {
    return null;
  }

  // https://github.com/vuejs/vue/blob/dev/src/core/util/lang.js#L26
  var watchable = !/[^\w.$]/.test(model.expression) && hasPath(model.expression, vnode.context);
  var lazy = !!(model.modifiers && model.modifiers.lazy);

  if (!watchable) {
    return { expression: null, lazy: lazy };
  }

  return { expression: model.expression, lazy: lazy };
};

/**
 * Resolves the field name to trigger validations.
 * @return {String} The field name.
 */
Resolver.resolveName = function resolveName (el, vnode) {
  var name = getDataAttribute(el, 'name');

  if (!name && !vnode.componentInstance) {
    return el.name;
  }

  if (!name && vnode.componentInstance && vnode.componentInstance.$attrs) {
    name = vnode.componentInstance.$attrs['data-vv-name'] || vnode.componentInstance.$attrs['name'];
  }

  if (!name && vnode.componentInstance) {
    var config = Resolver.getCtorConfig(vnode);
    if (config && isCallable(config.name)) {
      var boundGetter = config.name.bind(vnode.componentInstance);

      return boundGetter();
    }

    return vnode.componentInstance.name;
  }

  return name;
};

/**
 * Returns a value getter input type.
 */
Resolver.resolveGetter = function resolveGetter (el, vnode, model) {
  if (model && model.expression) {
    return function () {
      return getPath(model.expression, vnode.context);
    };
  }

  if (vnode.componentInstance) {
    var path = getDataAttribute(el, 'value-path') || (vnode.componentInstance.$attrs && vnode.componentInstance.$attrs['data-vv-value-path']);
    if (path) {
      return function () {
        return getPath(path, vnode.componentInstance);
      };
    }

    var config = Resolver.getCtorConfig(vnode);
    if (config && isCallable(config.value)) {
      var boundGetter = config.value.bind(vnode.componentInstance);

      return function () {
        return boundGetter();
      };
    }

    var ref = vnode.componentInstance.$options.model || { prop: 'value' };
      var prop = ref.prop;

    return function () {
      return vnode.componentInstance[prop];
    };
  }

  switch (el.type) {
  case 'checkbox': return function () {
    var els = document.querySelectorAll(("input[name=\"" + (el.name) + "\"]"));

    els = toArray(els).filter(function (el) { return el.checked; });
    if (!els.length) { return undefined; }

    return els.map(function (checkbox) { return checkbox.value; });
  };
  case 'radio': return function () {
    var els = document.querySelectorAll(("input[name=\"" + (el.name) + "\"]"));
    var elm = find(els, function (el) { return el.checked; });

    return elm && elm.value;
  };
  case 'file': return function (context) {
    return toArray(el.files);
  };
  case 'select-multiple': return function () {
    return toArray(el.options).filter(function (opt) { return opt.selected; }).map(function (opt) { return opt.value; });
  };
  default: return function () {
    return el && el.value;
  };
  }
};

var RULES = {};

var RuleContainer = function RuleContainer () {};

var staticAccessors = { rules: { configurable: true } };

RuleContainer.add = function add (name, ref) {
    var validate = ref.validate;
    var options = ref.options;
    var paramNames = ref.paramNames;

  RULES[name] = {
    validate: validate,
    options: options,
    paramNames: paramNames
  };
};

staticAccessors.rules.get = function () {
  return RULES;
};

RuleContainer.has = function has (name) {
  return !!RULES[name];
};

RuleContainer.isImmediate = function isImmediate (name) {
  return !!(RULES[name] && RULES[name].options.immediate);
};

RuleContainer.isRequireRule = function isRequireRule (name) {
  return !!(RULES[name] && RULES[name].options.computesRequired);
};

RuleContainer.isTargetRule = function isTargetRule (name) {
  return !!(RULES[name] && RULES[name].options.hasTarget);
};

RuleContainer.remove = function remove (ruleName) {
  delete RULES[ruleName];
};

RuleContainer.getParamNames = function getParamNames (ruleName) {
  return RULES[ruleName] && RULES[ruleName].paramNames;
};

RuleContainer.getOptions = function getOptions (ruleName) {
  return RULES[ruleName] && RULES[ruleName].options;
};

RuleContainer.getValidatorMethod = function getValidatorMethod (ruleName) {
  return RULES[ruleName] ? RULES[ruleName].validate : null;
};

Object.defineProperties( RuleContainer, staticAccessors );

// 

var isEvent = function (evt) {
  return (typeof Event !== 'undefined' && isCallable(Event) && evt instanceof Event) || (evt && evt.srcElement);
};

var normalizeEvents = function (evts) {
  if (!evts) { return []; }

  return (typeof evts === 'string' ? evts.split('|') : evts);
};

var supportsPassive = true;

var detectPassiveSupport = function () {
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get () {
        supportsPassive = true;
      }
    });
    window.addEventListener('testPassive', null, opts);
    window.removeEventListener('testPassive', null, opts);
  } catch (e) {
    supportsPassive = false;
  }
  return supportsPassive;
};

var addEventListener = function (el, eventName, cb) {
  el.addEventListener(eventName, cb, supportsPassive ? { passive: true } : false);
};

// 

var DEFAULT_OPTIONS = {
  targetOf: null,
  immediate: false,
  persist: false,
  scope: null,
  listen: true,
  name: null,
  rules: {},
  vm: null,
  classes: false,
  validity: true,
  aria: true,
  events: 'input|blur',
  delay: 0,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  }
};

var Field = function Field (options) {
  if ( options === void 0 ) options = {};

  this.id = uniqId();
  this.el = options.el;
  this.updated = false;
  this.vmId = options.vmId;
  defineNonReactive(this, 'dependencies', []);
  defineNonReactive(this, 'watchers', []);
  defineNonReactive(this, 'events', []);
  this.delay = 0;
  this.rules = {};
  this.forceRequired = false;
  this._cacheId(options);
  this.classNames = assign({}, DEFAULT_OPTIONS.classNames);
  options = assign({}, DEFAULT_OPTIONS, options);
  this._delay = !isNullOrUndefined(options.delay) ? options.delay : 0; // cache initial delay
  this.validity = options.validity;
  this.aria = options.aria;
  this.flags = options.flags || createFlags();
  defineNonReactive(this, 'vm', options.vm);
  defineNonReactive(this, 'componentInstance', options.component);
  this.ctorConfig = this.componentInstance ? getPath('$options.$_veeValidate', this.componentInstance) : undefined;
  this.update(options);
  // set initial value.
  this.initialValue = this.value;
  this.updated = false;
};

var prototypeAccessors$1 = { validator: { configurable: true },isRequired: { configurable: true },isDisabled: { configurable: true },alias: { configurable: true },value: { configurable: true },bails: { configurable: true },rejectsFalse: { configurable: true } };

prototypeAccessors$1.validator.get = function () {
  if (!this.vm || !this.vm.$validator) {
    return { validate: function () { return Promise.resolve(true); } };
  }

  return this.vm.$validator;
};

prototypeAccessors$1.isRequired.get = function () {
  return !!this.rules.required || this.forceRequired;
};

prototypeAccessors$1.isDisabled.get = function () {
  return !!(this.el && this.el.disabled);
};

/**
 * Gets the display name (user-friendly name).
 */
prototypeAccessors$1.alias.get = function () {
  if (this._alias) {
    return this._alias;
  }

  var alias = null;
  if (this.ctorConfig && this.ctorConfig.alias) {
    alias = isCallable(this.ctorConfig.alias) ? this.ctorConfig.alias.call(this.componentInstance) : this.ctorConfig.alias;
  }

  if (!alias && this.el) {
    alias = getDataAttribute(this.el, 'as');
  }

  if (!alias && this.componentInstance) {
    return this.componentInstance.$attrs && this.componentInstance.$attrs['data-vv-as'];
  }

  return alias;
};

/**
 * Gets the input value.
 */

prototypeAccessors$1.value.get = function () {
  if (!isCallable(this.getter)) {
    return undefined;
  }

  return this.getter();
};

prototypeAccessors$1.bails.get = function () {
  return this._bails;
};

/**
 * If the field rejects false as a valid value for the required rule.
 */

prototypeAccessors$1.rejectsFalse.get = function () {
  if (this.componentInstance && this.ctorConfig) {
    return !!this.ctorConfig.rejectsFalse;
  }

  if (!this.el) {
    return false;
  }

  return this.el.type === 'checkbox';
};

/**
 * Determines if the instance matches the options provided.
 */
Field.prototype.matches = function matches (options) {
    var this$1 = this;

  if (!options) {
    return true;
  }

  if (options.id) {
    return this.id === options.id;
  }

  var matchesComponentId = isNullOrUndefined(options.vmId) ? function () { return true; } : function (id) { return id === this$1.vmId; };
  if (!matchesComponentId(options.vmId)) {
    return false;
  }

  if (options.name === undefined && options.scope === undefined) {
    return true;
  }

  if (options.scope === undefined) {
    return this.name === options.name;
  }

  if (options.name === undefined) {
    return this.scope === options.scope;
  }

  return options.name === this.name && options.scope === this.scope;
};

/**
 * Caches the field id.
 */
Field.prototype._cacheId = function _cacheId (options) {
  if (this.el && !options.targetOf) {
    this.el._veeValidateId = this.id;
  }
};

/**
 * Keeps a reference of the most current validation run.
 */
Field.prototype.waitFor = function waitFor (pendingPromise) {
  this._waitingFor = pendingPromise;
};

Field.prototype.isWaitingFor = function isWaitingFor (promise) {
  return this._waitingFor === promise;
};

/**
 * Updates the field with changed data.
 */
Field.prototype.update = function update (options) {
    var this$1 = this;

  this.targetOf = options.targetOf || null;
  this.immediate = options.immediate || this.immediate || false;
  this.persist = options.persist || this.persist || false;

  // update errors scope if the field scope was changed.
  if (!isNullOrUndefined(options.scope) && options.scope !== this.scope && isCallable(this.validator.update)) {
    this.validator.update(this.id, { scope: options.scope });
  }
  this.scope = !isNullOrUndefined(options.scope) ? options.scope
    : !isNullOrUndefined(this.scope) ? this.scope : null;
  this.name = (!isNullOrUndefined(options.name) ? String(options.name) : options.name) || this.name || null;
  this.rules = options.rules !== undefined ? normalizeRules(options.rules) : this.rules;
  this._bails = options.bails !== undefined ? options.bails : this._bails;
  this.model = options.model || this.model;
  this.listen = options.listen !== undefined ? options.listen : this.listen;
  this.classes = (options.classes || this.classes || false) && !this.componentInstance;
  this.classNames = isObject(options.classNames) ? merge(this.classNames, options.classNames) : this.classNames;
  this.getter = isCallable(options.getter) ? options.getter : this.getter;
  this._alias = options.alias || this._alias;
  this.events = (options.events) ? normalizeEvents(options.events) : this.events;
  this.delay = makeDelayObject(this.events, options.delay || this.delay, this._delay);
  this.updateDependencies();
  this.addActionListeners();

  if ( true && !this.name && !this.targetOf) {
    warn('A field is missing a "name" or "data-vv-name" attribute');
  }

  // update required flag flags
  if (options.rules !== undefined) {
    this.flags.required = this.isRequired;
  }

  if (Object.keys(options.rules || {}).length === 0 && this.updated) {
    var resetFlag = this.flags.validated;
    this.validator.validate(("#" + (this.id))).then(function () {
      this$1.flags.validated = resetFlag;
    });
  }

  // validate if it was validated before and field was updated and there was a rules mutation.
  if (this.flags.validated && options.rules !== undefined && this.updated) {
    this.validator.validate(("#" + (this.id)));
  }

  this.updated = true;
  this.addValueListeners();

  // no need to continue.
  if (!this.el) {
    return;
  }
  this.updateClasses();
  this.updateAriaAttrs();
};

/**
 * Resets field flags and errors.
 */
Field.prototype.reset = function reset () {
    var this$1 = this;

  if (this._cancellationToken) {
    this._cancellationToken.cancelled = true;
    delete this._cancellationToken;
  }

  var defaults = createFlags();
  Object.keys(this.flags).filter(function (flag) { return flag !== 'required'; }).forEach(function (flag) {
    this$1.flags[flag] = defaults[flag];
  });

  // update initial value
  this.initialValue = this.value;
  this.flags.changed = false;

  this.addValueListeners();
  this.addActionListeners();
  this.updateClasses(true);
  this.updateAriaAttrs();
  this.updateCustomValidity();
};

/**
 * Sets the flags and their negated counterparts, and updates the classes and re-adds action listeners.
 */
Field.prototype.setFlags = function setFlags (flags) {
    var this$1 = this;

  var negated = {
    pristine: 'dirty',
    dirty: 'pristine',
    valid: 'invalid',
    invalid: 'valid',
    touched: 'untouched',
    untouched: 'touched'
  };

  Object.keys(flags).forEach(function (flag) {
    this$1.flags[flag] = flags[flag];
    // if it has a negation and was not specified, set it as well.
    if (negated[flag] && flags[negated[flag]] === undefined) {
      this$1.flags[negated[flag]] = !flags[flag];
    }
  });

  if (
    flags.untouched !== undefined ||
    flags.touched !== undefined ||
    flags.dirty !== undefined ||
    flags.pristine !== undefined
  ) {
    this.addActionListeners();
  }
  this.updateClasses();
  this.updateAriaAttrs();
  this.updateCustomValidity();
};

/**
 * Determines if the field requires references to target fields.
*/
Field.prototype.updateDependencies = function updateDependencies () {
    var this$1 = this;

  // reset dependencies.
  this.dependencies.forEach(function (d) { return d.field.destroy(); });
  this.dependencies = [];

  // we get the selectors for each field.
  var fields = Object.keys(this.rules).reduce(function (prev, r) {
    if (RuleContainer.isTargetRule(r)) {
      prev.push({ selector: this$1.rules[r][0], name: r });
    }

    return prev;
  }, []);

  if (!fields.length || !this.vm || !this.vm.$el) { return; }

  // must be contained within the same component, so we use the vm root element constrain our dom search.
  fields.forEach(function (ref$1) {
      var selector = ref$1.selector;
      var name = ref$1.name;

    var ref = this$1.vm.$refs[selector];
    var el = Array.isArray(ref) ? ref[0] : ref;
    if (!el) {
      return;
    }

    var options = {
      vm: this$1.vm,
      classes: this$1.classes,
      classNames: this$1.classNames,
      delay: this$1.delay,
      scope: this$1.scope,
      events: this$1.events.join('|'),
      immediate: this$1.immediate,
      targetOf: this$1.id
    };

    // probably a component.
    if (isCallable(el.$watch)) {
      options.component = el;
      options.el = el.$el;
      options.getter = Resolver.resolveGetter(el.$el, el.$vnode);
    } else {
      options.el = el;
      options.getter = Resolver.resolveGetter(el, {});
    }

    this$1.dependencies.push({ name: name, field: new Field(options) });
  });
};

/**
 * Removes listeners.
 */
Field.prototype.unwatch = function unwatch (tag) {
    if ( tag === void 0 ) tag = null;

  if (!tag) {
    this.watchers.forEach(function (w) { return w.unwatch(); });
    this.watchers = [];
    return;
  }

  this.watchers.filter(function (w) { return tag.test(w.tag); }).forEach(function (w) { return w.unwatch(); });
  this.watchers = this.watchers.filter(function (w) { return !tag.test(w.tag); });
};

/**
 * Updates the element classes depending on each field flag status.
 */
Field.prototype.updateClasses = function updateClasses (isReset) {
    var this$1 = this;
    if ( isReset === void 0 ) isReset = false;

  if (!this.classes || this.isDisabled) { return; }
  var applyClasses = function (el) {
    toggleClass(el, this$1.classNames.dirty, this$1.flags.dirty);
    toggleClass(el, this$1.classNames.pristine, this$1.flags.pristine);
    toggleClass(el, this$1.classNames.touched, this$1.flags.touched);
    toggleClass(el, this$1.classNames.untouched, this$1.flags.untouched);

    // remove valid/invalid classes on reset.
    if (isReset) {
      toggleClass(el, this$1.classNames.valid, false);
      toggleClass(el, this$1.classNames.invalid, false);
    }

    // make sure we don't set any classes if the state is undetermined.
    if (!isNullOrUndefined(this$1.flags.valid) && this$1.flags.validated) {
      toggleClass(el, this$1.classNames.valid, this$1.flags.valid);
    }

    if (!isNullOrUndefined(this$1.flags.invalid) && this$1.flags.validated) {
      toggleClass(el, this$1.classNames.invalid, this$1.flags.invalid);
    }
  };

  if (!isCheckboxOrRadioInput(this.el)) {
    applyClasses(this.el);
    return;
  }

  var els = document.querySelectorAll(("input[name=\"" + (this.el.name) + "\"]"));
  toArray(els).forEach(applyClasses);
};

/**
 * Adds the listeners required for automatic classes and some flags.
 */
Field.prototype.addActionListeners = function addActionListeners () {
    var this$1 = this;

  // remove previous listeners.
  this.unwatch(/class/);

  if (!this.el) { return; }

  var onBlur = function () {
    this$1.flags.touched = true;
    this$1.flags.untouched = false;
    if (this$1.classes) {
      toggleClass(this$1.el, this$1.classNames.touched, true);
      toggleClass(this$1.el, this$1.classNames.untouched, false);
    }

    // only needed once.
    this$1.unwatch(/^class_blur$/);
  };

  var inputEvent = isTextInput(this.el) ? 'input' : 'change';
  var onInput = function () {
    this$1.flags.dirty = true;
    this$1.flags.pristine = false;
    if (this$1.classes) {
      toggleClass(this$1.el, this$1.classNames.pristine, false);
      toggleClass(this$1.el, this$1.classNames.dirty, true);
    }

    // only needed once.
    this$1.unwatch(/^class_input$/);
  };

  if (this.componentInstance && isCallable(this.componentInstance.$once)) {
    this.componentInstance.$once('input', onInput);
    this.componentInstance.$once('blur', onBlur);
    this.watchers.push({
      tag: 'class_input',
      unwatch: function () {
        this$1.componentInstance.$off('input', onInput);
      }
    });
    this.watchers.push({
      tag: 'class_blur',
      unwatch: function () {
        this$1.componentInstance.$off('blur', onBlur);
      }
    });
    return;
  }

  if (!this.el) { return; }

  addEventListener(this.el, inputEvent, onInput);
  // Checkboxes and radio buttons on Mac don't emit blur naturally, so we listen on click instead.
  var blurEvent = isCheckboxOrRadioInput(this.el) ? 'change' : 'blur';
  addEventListener(this.el, blurEvent, onBlur);
  this.watchers.push({
    tag: 'class_input',
    unwatch: function () {
      this$1.el.removeEventListener(inputEvent, onInput);
    }
  });

  this.watchers.push({
    tag: 'class_blur',
    unwatch: function () {
      this$1.el.removeEventListener(blurEvent, onBlur);
    }
  });
};

Field.prototype.checkValueChanged = function checkValueChanged () {
  // handle some people initialize the value to null, since text inputs have empty string value.
  if (this.initialValue === null && this.value === '' && isTextInput(this.el)) {
    return false;
  }

  return this.value !== this.initialValue;
};

/**
 * Determines the suitable primary event to listen for.
 */
Field.prototype._determineInputEvent = function _determineInputEvent () {
  // if its a custom component, use the customized model event or the input event.
  if (this.componentInstance) {
    return (this.componentInstance.$options.model && this.componentInstance.$options.model.event) || 'input';
  }

  if (this.model && this.model.lazy) {
    return 'change';
  }

  if (isTextInput(this.el)) {
    return 'input';
  }

  return 'change';
};

/**
 * Determines the list of events to listen to.
 */
Field.prototype._determineEventList = function _determineEventList (defaultInputEvent) {
    var this$1 = this;

  // if no event is configured, or it is a component or a text input then respect the user choice.
  if (!this.events.length || this.componentInstance || isTextInput(this.el)) {
    return [].concat( this.events ).map(function (evt) {
      if (evt === 'input' && this$1.model && this$1.model.lazy) {
        return 'change';
      }

      return evt;
    });
  }

  // force suitable event for non-text type fields.
  return this.events.map(function (e) {
    if (e === 'input') {
      return defaultInputEvent;
    }

    return e;
  });
};

/**
 * Adds the listeners required for validation.
 */
Field.prototype.addValueListeners = function addValueListeners () {
    var this$1 = this;

  this.unwatch(/^input_.+/);
  if (!this.listen || !this.el) { return; }

  var token = { cancelled: false };
  var fn = this.targetOf ? function () {
    var target = this$1.validator._resolveField(("#" + (this$1.targetOf)));
    if (target && target.flags.validated) {
      this$1.validator.validate(("#" + (this$1.targetOf)));
    }
  } : function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

    // if its a DOM event, resolve the value, otherwise use the first parameter as the value.
    if (args.length === 0 || isEvent(args[0])) {
      args[0] = this$1.value;
    }

    this$1.flags.pending = true;
    this$1._cancellationToken = token;
    this$1.validator.validate(("#" + (this$1.id)), args[0]);
  };

  var inputEvent = this._determineInputEvent();
  var events = this._determineEventList(inputEvent);

  // if on input validation is requested.
  if (includes(events, inputEvent)) {
    var ctx = null;
    var expression = null;
    var watchCtxVm = false;
    // if its watchable from the context vm.
    if (this.model && this.model.expression) {
      ctx = this.vm;
      expression = this.model.expression;
      watchCtxVm = true;
    }

    // watch it from the custom component vm instead.
    if (!expression && this.componentInstance && this.componentInstance.$options.model) {
      ctx = this.componentInstance;
      expression = this.componentInstance.$options.model.prop || 'value';
    }

    if (ctx && expression) {
      var debouncedFn = debounce(fn, this.delay[inputEvent], token);
      var unwatch = ctx.$watch(expression, debouncedFn);
      this.watchers.push({
        tag: 'input_model',
        unwatch: function () {
          this$1.vm.$nextTick(function () {
            unwatch();
          });
        }
      });

      // filter out input event when we are watching from the context vm.
      if (watchCtxVm) {
        events = events.filter(function (e) { return e !== inputEvent; });
      }
    }
  }

  // Add events.
  events.forEach(function (e) {
    var debouncedFn = debounce(fn, this$1.delay[e], token);

    this$1._addComponentEventListener(e, debouncedFn);
    this$1._addHTMLEventListener(e, debouncedFn);
  });
};

Field.prototype._addComponentEventListener = function _addComponentEventListener (evt, validate) {
    var this$1 = this;

  if (!this.componentInstance) { return; }

  this.componentInstance.$on(evt, validate);
  this.watchers.push({
    tag: 'input_vue',
    unwatch: function () {
      this$1.componentInstance.$off(evt, validate);
    }
  });
};

Field.prototype._addHTMLEventListener = function _addHTMLEventListener (evt, validate) {
    var this$1 = this;

  if (!this.el || this.componentInstance) { return; }

  // listen for the current element.
  var addListener = function (el) {
    addEventListener(el, evt, validate);
    this$1.watchers.push({
      tag: 'input_native',
      unwatch: function () {
        el.removeEventListener(evt, validate);
      }
    });
  };

  addListener(this.el);
  if (!isCheckboxOrRadioInput(this.el)) {
    return;
  }

  var els = document.querySelectorAll(("input[name=\"" + (this.el.name) + "\"]"));
  toArray(els).forEach(function (el) {
    // skip if it is added by v-validate and is not the current element.
    if (el._veeValidateId && el !== this$1.el) {
      return;
    }

    addListener(el);
  });
};

/**
 * Updates aria attributes on the element.
 */
Field.prototype.updateAriaAttrs = function updateAriaAttrs () {
    var this$1 = this;

  if (!this.aria || !this.el || !isCallable(this.el.setAttribute)) { return; }

  var applyAriaAttrs = function (el) {
    el.setAttribute('aria-required', this$1.isRequired ? 'true' : 'false');
    el.setAttribute('aria-invalid', this$1.flags.invalid ? 'true' : 'false');
  };

  if (!isCheckboxOrRadioInput(this.el)) {
    applyAriaAttrs(this.el);
    return;
  }

  var els = document.querySelectorAll(("input[name=\"" + (this.el.name) + "\"]"));
  toArray(els).forEach(applyAriaAttrs);
};

/**
 * Updates the custom validity for the field.
 */
Field.prototype.updateCustomValidity = function updateCustomValidity () {
  if (!this.validity || !this.el || !isCallable(this.el.setCustomValidity) || !this.validator.errors) { return; }

  this.el.setCustomValidity(this.flags.valid ? '' : (this.validator.errors.firstById(this.id) || ''));
};

/**
 * Removes all listeners.
 */
Field.prototype.destroy = function destroy () {
  // ignore the result of any ongoing validation.
  if (this._cancellationToken) {
    this._cancellationToken.cancelled = true;
  }

  this.unwatch();
  this.dependencies.forEach(function (d) { return d.field.destroy(); });
  this.dependencies = [];
};

Object.defineProperties( Field.prototype, prototypeAccessors$1 );

// 

var FieldBag = function FieldBag (items) {
  if ( items === void 0 ) items = [];

  this.items = items || [];
  this.itemsById = this.items.reduce(function (itemsById, item) {
    itemsById[item.id] = item;
    return itemsById;
  }, {});
};

var prototypeAccessors$2 = { length: { configurable: true } };

FieldBag.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function () {
    var this$1 = this;

  var index = 0;
  return {
    next: function () {
      return { value: this$1.items[index++], done: index > this$1.items.length };
    }
  };
};

/**
 * Gets the current items length.
 */

prototypeAccessors$2.length.get = function () {
  return this.items.length;
};

/**
 * Finds the first field that matches the provided matcher object.
 */
FieldBag.prototype.find = function find$1 (matcher) {
  return find(this.items, function (item) { return item.matches(matcher); });
};

/**
 * Finds the field with the given id, using a plain object as a map to link
 * ids to items faster than by looping over the array and matching.
 */
FieldBag.prototype.findById = function findById (id) {
  return this.itemsById[id] || null;
};

/**
 * Filters the items down to the matched fields.
 */
FieldBag.prototype.filter = function filter (matcher) {
  // multiple matchers to be tried.
  if (Array.isArray(matcher)) {
    return this.items.filter(function (item) { return matcher.some(function (m) { return item.matches(m); }); });
  }

  return this.items.filter(function (item) { return item.matches(matcher); });
};

/**
 * Maps the field items using the mapping function.
 */
FieldBag.prototype.map = function map (mapper) {
  return this.items.map(mapper);
};

/**
 * Finds and removes the first field that matches the provided matcher object, returns the removed item.
 */
FieldBag.prototype.remove = function remove (matcher) {
  var item = null;
  if (matcher instanceof Field) {
    item = matcher;
  } else {
    item = this.find(matcher);
  }

  if (!item) { return null; }

  var index = this.items.indexOf(item);
  this.items.splice(index, 1);
  delete this.itemsById[item.id];

  return item;
};

/**
 * Adds a field item to the list.
 */
FieldBag.prototype.push = function push (item) {
  if (! (item instanceof Field)) {
    throw createError('FieldBag only accepts instances of Field that has an id defined.');
  }

  if (!item.id) {
    throw createError('Field id must be defined.');
  }

  if (this.findById(item.id)) {
    throw createError(("Field with id " + (item.id) + " is already added."));
  }

  this.items.push(item);
  this.itemsById[item.id] = item;
};

Object.defineProperties( FieldBag.prototype, prototypeAccessors$2 );

var ScopedValidator = function ScopedValidator (base, vm) {
  this.id = vm._uid;
  this._base = base;
  this._paused = false;

  // create a mirror bag with limited component scope.
  this.errors = new ErrorBag(base.errors, this.id);
};

var prototypeAccessors$3 = { flags: { configurable: true },rules: { configurable: true },fields: { configurable: true },dictionary: { configurable: true },locale: { configurable: true } };

prototypeAccessors$3.flags.get = function () {
    var this$1 = this;

  return this._base.fields.items.filter(function (f) { return f.vmId === this$1.id; }).reduce(function (acc, field) {
    if (field.scope) {
      if (!acc[("$" + (field.scope))]) {
        acc[("$" + (field.scope))] = {};
      }

      acc[("$" + (field.scope))][field.name] = field.flags;
    }

    acc[field.name] = field.flags;

    return acc;
  }, {});
};

prototypeAccessors$3.rules.get = function () {
  return this._base.rules;
};

prototypeAccessors$3.fields.get = function () {
  return new FieldBag(this._base.fields.filter({ vmId: this.id }));
};

prototypeAccessors$3.dictionary.get = function () {
  return this._base.dictionary;
};

prototypeAccessors$3.locale.get = function () {
  return this._base.locale;
};

prototypeAccessors$3.locale.set = function (val) {
  this._base.locale = val;
};

ScopedValidator.prototype.localize = function localize () {
    var ref;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
  return (ref = this._base).localize.apply(ref, args);
};

ScopedValidator.prototype.update = function update () {
    var ref;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
  return (ref = this._base).update.apply(ref, args);
};

ScopedValidator.prototype.attach = function attach (opts) {
  var attachOpts = assign({}, opts, { vmId: this.id });

  return this._base.attach(attachOpts);
};

ScopedValidator.prototype.pause = function pause () {
  this._paused = true;
};

ScopedValidator.prototype.resume = function resume () {
  this._paused = false;
};

ScopedValidator.prototype.remove = function remove (ruleName) {
  return this._base.remove(ruleName);
};

ScopedValidator.prototype.detach = function detach (name, scope) {
  return this._base.detach(name, scope, this.id);
};

ScopedValidator.prototype.extend = function extend () {
    var ref;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
  return (ref = this._base).extend.apply(ref, args);
};

ScopedValidator.prototype.validate = function validate (descriptor, value, opts) {
    if ( opts === void 0 ) opts = {};

  if (this._paused) { return Promise.resolve(true); }

  return this._base.validate(descriptor, value, assign({}, { vmId: this.id }, opts || {}));
};

ScopedValidator.prototype.verify = function verify () {
    var ref;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
  return (ref = this._base).verify.apply(ref, args);
};

ScopedValidator.prototype.validateAll = function validateAll (values, opts) {
    if ( opts === void 0 ) opts = {};

  if (this._paused) { return Promise.resolve(true); }

  return this._base.validateAll(values, assign({}, { vmId: this.id }, opts || {}));
};

ScopedValidator.prototype.validateScopes = function validateScopes (opts) {
    if ( opts === void 0 ) opts = {};

  if (this._paused) { return Promise.resolve(true); }

  return this._base.validateScopes(assign({}, { vmId: this.id }, opts || {}));
};

ScopedValidator.prototype.destroy = function destroy () {
  delete this.id;
  delete this._base;
};

ScopedValidator.prototype.reset = function reset (matcher) {
  return this._base.reset(Object.assign({}, matcher || {}, { vmId: this.id }));
};

ScopedValidator.prototype.flag = function flag () {
    var ref;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
  return (ref = this._base).flag.apply(ref, args.concat( [this.id] ));
};

ScopedValidator.prototype._resolveField = function _resolveField () {
    var ref;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
  return (ref = this._base)._resolveField.apply(ref, args);
};

Object.defineProperties( ScopedValidator.prototype, prototypeAccessors$3 );

var VALIDATOR = null;

var getValidator = function () {
  return VALIDATOR;
};

var setValidator = function (value) {
  VALIDATOR = value;

  return value;
};

// 

/**
 * Checks if a parent validator instance was requested.
 */
var requestsValidator = function (injections) {
  if (isObject(injections) && injections.$validator) {
    return true;
  }

  return false;
};

var mixin = {
  provide: function provide () {
    if (this.$validator && !isBuiltInComponent(this.$vnode)) {
      return {
        $validator: this.$validator
      };
    }

    return {};
  },
  beforeCreate: function beforeCreate () {
    // if built in do nothing.
    if (isBuiltInComponent(this.$vnode) || this.$options.$__veeInject === false) {
      return;
    }

    // if its a root instance set the config if it exists.
    if (!this.$parent) {
      setConfig(this.$options.$_veeValidate || {});
    }

    var options = resolveConfig(this);

    // if its a root instance, inject anyways, or if it requested a new instance.
    if (!this.$parent || (this.$options.$_veeValidate && /new/.test(this.$options.$_veeValidate.validator))) {
      this.$validator = new ScopedValidator(getValidator(), this);
    }

    var requested = requestsValidator(this.$options.inject);

    // if automatic injection is enabled and no instance was requested.
    if (! this.$validator && options.inject && !requested) {
      this.$validator = new ScopedValidator(getValidator(), this);
    }

    // don't inject errors or fieldBag as no validator was resolved.
    if (!requested && !this.$validator) {
      return;
    }

    // There is a validator but it isn't injected, mark as reactive.
    if (!requested && this.$validator) {
      var Vue = this.$options._base; // the vue constructor.
      Vue.util.defineReactive(this.$validator, 'errors', this.$validator.errors);
    }

    if (!this.$options.computed) {
      this.$options.computed = {};
    }

    this.$options.computed[options.errorBagName || 'errors'] = function errorBagGetter () {
      return this.$validator.errors;
    };
    this.$options.computed[options.fieldsBagName || 'fields'] = function fieldBagGetter () {
      return this.$validator.fields.items.reduce(function (acc, field) {
        if (field.scope) {
          if (!acc[("$" + (field.scope))]) {
            acc[("$" + (field.scope))] = {};
          }

          acc[("$" + (field.scope))][field.name] = field.flags;

          return acc;
        }

        acc[field.name] = field.flags;

        return acc;
      }, {});
    };
  },
  beforeDestroy: function beforeDestroy () {
    if (this.$validator && this._uid === this.$validator.id) {
      this.$validator.errors.clear(); // remove errors generated by this component.
    }
  }
};

// 

/**
 * Finds the requested field by id from the context object.
 */
function findField (el, context) {
  if (!context || !context.$validator) {
    return null;
  }

  return context.$validator.fields.findById(el._veeValidateId);
}
var directive = {
  bind: function bind (el, binding, vnode) {
    var validator = vnode.context.$validator;
    if (!validator) {
      if (true) {
        warn("No validator instance is present on vm, did you forget to inject '$validator'?");
      }

      return;
    }

    var fieldOptions = Resolver.generate(el, binding, vnode);
    validator.attach(fieldOptions);
  },
  inserted: function inserted (el, binding, vnode) {
    var field = findField(el, vnode.context);
    var scope = Resolver.resolveScope(el, binding, vnode);

    // skip if scope hasn't changed.
    if (!field || scope === field.scope) { return; }

    // only update scope.
    field.update({ scope: scope });

    // allows the field to re-evaluated once more in the update hook.
    field.updated = false;
  },
  update: function update (el, binding, vnode) {
    var field = findField(el, vnode.context);

    // make sure we don't do unneccasary work if no important change was done.
    if (!field || (field.updated && isEqual(binding.value, binding.oldValue))) { return; }
    var scope = Resolver.resolveScope(el, binding, vnode);
    var rules = Resolver.resolveRules(el, binding, vnode);

    field.update({
      scope: scope,
      rules: rules
    });
  },
  unbind: function unbind (el, binding, ref) {
    var context = ref.context;

    var field = findField(el, context);
    if (!field) { return; }

    context.$validator.detach(field);
  }
};

// 

var Validator = function Validator (validations, options, pluginContainer) {
  if ( options === void 0 ) options = { fastExit: true };
  if ( pluginContainer === void 0 ) pluginContainer = null;

  this.errors = new ErrorBag();
  this.fields = new FieldBag();
  this._createFields(validations);
  this.paused = false;
  this.fastExit = !isNullOrUndefined(options && options.fastExit) ? options.fastExit : true;
  this.$vee = pluginContainer || {
    _vm: {
      $nextTick: function (cb) { return isCallable(cb) ? cb() : Promise.resolve(); },
      $emit: function () {},
      $off: function () {}
    }
  };
};

var prototypeAccessors$4 = { rules: { configurable: true },dictionary: { configurable: true },flags: { configurable: true },locale: { configurable: true } };
var staticAccessors$1 = { rules: { configurable: true },dictionary: { configurable: true },locale: { configurable: true } };

/**
 * @deprecated
 */
staticAccessors$1.rules.get = function () {
  if (true) {
    warn('this accessor will be deprecated, use `import { rules } from "vee-validate"` instead.');
  }

  return RuleContainer.rules;
};

/**
 * @deprecated
 */
prototypeAccessors$4.rules.get = function () {
  if (true) {
    warn('this accessor will be deprecated, use `import { rules } from "vee-validate"` instead.');
  }

  return RuleContainer.rules;
};

prototypeAccessors$4.dictionary.get = function () {
  return DictionaryResolver.getDriver();
};

staticAccessors$1.dictionary.get = function () {
  return DictionaryResolver.getDriver();
};

prototypeAccessors$4.flags.get = function () {
  return this.fields.items.reduce(function (acc, field) {
      var obj;

    if (field.scope) {
      acc[("$" + (field.scope))] = ( obj = {}, obj[field.name] = field.flags, obj );

      return acc;
    }

    acc[field.name] = field.flags;

    return acc;
  }, {});
};

/**
 * Getter for the current locale.
 */
prototypeAccessors$4.locale.get = function () {
  return Validator.locale;
};

/**
 * Setter for the validator locale.
 */
prototypeAccessors$4.locale.set = function (value) {
  Validator.locale = value;
};

staticAccessors$1.locale.get = function () {
  return DictionaryResolver.getDriver().locale;
};

/**
 * Setter for the validator locale.
 */
staticAccessors$1.locale.set = function (value) {
  var hasChanged = value !== DictionaryResolver.getDriver().locale;
  DictionaryResolver.getDriver().locale = value;
  if (hasChanged && Validator.$vee && Validator.$vee._vm) {
    Validator.$vee._vm.$emit('localeChanged');
  }
};

/**
 * Static constructor.
 * @deprecated
 */
Validator.create = function create (validations, options) {
  if (true) {
    warn('Please use `new` to create new validator instances.');
  }

  return new Validator(validations, options);
};

/**
 * Adds a custom validator to the list of validation rules.
 */
Validator.extend = function extend (name, validator, options) {
    if ( options === void 0 ) options = {};

  Validator._guardExtend(name, validator);
  // rules imported from the minimal bundle
  // will have the options embedded in them
  var mergedOpts = validator.options || {};
  Validator._merge(name, {
    validator: validator,
    paramNames: (options && options.paramNames) || validator.paramNames,
    options: assign({ hasTarget: false, immediate: true }, mergedOpts, options || {})
  });
};

/**
 * Removes a rule from the list of validators.
 * @deprecated
 */
Validator.remove = function remove (name) {
  if (true) {
    warn('this method will be deprecated, you can still override your rules with `extend`');
  }

  RuleContainer.remove(name);
};

/**
 * Adds and sets the current locale for the validator.
*/
Validator.prototype.localize = function localize (lang, dictionary) {
  Validator.localize(lang, dictionary);
};

/**
 * Adds and sets the current locale for the validator.
 */
Validator.localize = function localize (lang, dictionary) {
    var obj;

  if (isObject(lang)) {
    DictionaryResolver.getDriver().merge(lang);
    return;
  }

  // merge the dictionary.
  if (dictionary) {
    var locale = lang || dictionary.name;
    dictionary = assign({}, dictionary);
    DictionaryResolver.getDriver().merge(( obj = {}, obj[locale] = dictionary, obj ));
  }

  if (lang) {
    // set the locale.
    Validator.locale = lang;
  }
};

/**
 * Registers a field to be validated.
 */
Validator.prototype.attach = function attach (fieldOpts) {
    var this$1 = this;

  // We search for a field with the same name & scope, having persist enabled
  var oldFieldMatcher = { name: fieldOpts.name, scope: fieldOpts.scope, persist: true };
  var oldField = fieldOpts.persist ? this.fields.find(oldFieldMatcher) : null;

  if (oldField) {
    // We keep the flags of the old field, then we remove its instance
    fieldOpts.flags = oldField.flags;
    oldField.destroy();
    this.fields.remove(oldField);
  }

  // fixes initial value detection with v-model and select elements.
  var value = fieldOpts.initialValue;
  var field = new Field(fieldOpts);
  this.fields.push(field);

  // validate the field initially
  if (field.immediate) {
    this.$vee._vm.$nextTick(function () { return this$1.validate(("#" + (field.id)), value || field.value, { vmId: fieldOpts.vmId }); });
  } else {
    this._validate(field, value || field.value, { initial: true }).then(function (result) {
      field.flags.valid = result.valid;
      field.flags.invalid = !result.valid;
    });
  }

  return field;
};

/**
 * Sets the flags on a field.
 */
Validator.prototype.flag = function flag (name, flags, uid) {
    if ( uid === void 0 ) uid = null;

  var field = this._resolveField(name, undefined, uid);
  if (!field || !flags) {
    return;
  }

  field.setFlags(flags);
};

/**
 * Removes a field from the validator.
 */
Validator.prototype.detach = function detach (name, scope, uid) {
  var field = isCallable(name.destroy) ? name : this._resolveField(name, scope, uid);
  if (!field) { return; }

  // We destroy/remove the field & error instances if it's not a `persist` one
  if (!field.persist) {
    field.destroy();
    this.errors.remove(field.name, field.scope, field.vmId);
    this.fields.remove(field);
  }
};

/**
 * Adds a custom validator to the list of validation rules.
 */
Validator.prototype.extend = function extend (name, validator, options) {
    if ( options === void 0 ) options = {};

  Validator.extend(name, validator, options);
};

Validator.prototype.reset = function reset (matcher) {
    var this$1 = this;

  // two ticks
  return this.$vee._vm.$nextTick().then(function () {
    return this$1.$vee._vm.$nextTick();
  }).then(function () {
    this$1.fields.filter(matcher).forEach(function (field) {
      field.waitFor(null);
      field.reset(); // reset field flags.
      this$1.errors.remove(field.name, field.scope, matcher && matcher.vmId);
    });
  });
};

/**
 * Updates a field, updating both errors and flags.
 */
Validator.prototype.update = function update (id, ref) {
    var scope = ref.scope;

  var field = this._resolveField(("#" + id));
  if (!field) { return; }

  // remove old scope.
  this.errors.update(id, { scope: scope });
};

/**
 * Removes a rule from the list of validators.
 * @deprecated
 */
Validator.prototype.remove = function remove (name) {
  Validator.remove(name);
};

/**
 * Validates a value against a registered field validations.
 */
Validator.prototype.validate = function validate (fieldDescriptor, value, ref) {
    var this$1 = this;
    if ( ref === void 0 ) ref = {};
    var silent = ref.silent;
    var vmId = ref.vmId;

  if (this.paused) { return Promise.resolve(true); }

  // overload to validate all.
  if (isNullOrUndefined(fieldDescriptor)) {
    return this.validateScopes({ silent: silent, vmId: vmId });
  }

  // overload to validate scope-less fields.
  if (fieldDescriptor === '*') {
    return this.validateAll(undefined, { silent: silent, vmId: vmId });
  }

  // if scope validation was requested.
  if (/^(.+)\.\*$/.test(fieldDescriptor)) {
    var matched = fieldDescriptor.match(/^(.+)\.\*$/)[1];
    return this.validateAll(matched);
  }

  var field = this._resolveField(fieldDescriptor);
  if (!field) {
    return this._handleFieldNotFound(fieldDescriptor);
  }

  if (!silent) { field.flags.pending = true; }
  if (value === undefined) {
    value = field.value;
  }

  var validationPromise = this._validate(field, value);
  field.waitFor(validationPromise);

  return validationPromise.then(function (result) {
    if (!silent && field.isWaitingFor(validationPromise)) {
      // allow next validation to mutate the state.
      field.waitFor(null);
      this$1._handleValidationResults([result], vmId);
    }

    return result.valid;
  });
};

/**
 * Pauses the validator.
 */
Validator.prototype.pause = function pause () {
  this.paused = true;

  return this;
};

/**
 * Resumes the validator.
 */
Validator.prototype.resume = function resume () {
  this.paused = false;

  return this;
};

/**
 * Validates each value against the corresponding field validations.
 */
Validator.prototype.validateAll = function validateAll (values, ref) {
    var this$1 = this;
    if ( ref === void 0 ) ref = {};
    var silent = ref.silent;
    var vmId = ref.vmId;

  if (this.paused) { return Promise.resolve(true); }

  var matcher = null;
  var providedValues = false;

  if (typeof values === 'string') {
    matcher = { scope: values, vmId: vmId };
  } else if (isObject(values)) {
    matcher = Object.keys(values).map(function (key) {
      return { name: key, vmId: vmId, scope: null };
    });
    providedValues = true;
  } else if (Array.isArray(values)) {
    matcher = values.map(function (key) {
      return typeof key === 'object' ? Object.assign({ vmId: vmId }, key) : { name: key, vmId: vmId };
    });
  } else {
    matcher = { scope: null, vmId: vmId };
  }

  return Promise.all(
    this.fields.filter(matcher).map(function (field) { return this$1._validate(field, providedValues ? values[field.name] : field.value); })
  ).then(function (results) {
    if (!silent) {
      this$1._handleValidationResults(results, vmId);
    }

    return results.every(function (t) { return t.valid; });
  });
};

/**
 * Validates all scopes.
 */
Validator.prototype.validateScopes = function validateScopes (ref) {
    var this$1 = this;
    if ( ref === void 0 ) ref = {};
    var silent = ref.silent;
    var vmId = ref.vmId;

  if (this.paused) { return Promise.resolve(true); }

  return Promise.all(
    this.fields.filter({ vmId: vmId }).map(function (field) { return this$1._validate(field, field.value); })
  ).then(function (results) {
    if (!silent) {
      this$1._handleValidationResults(results, vmId);
    }

    return results.every(function (t) { return t.valid; });
  });
};

/**
 * Validates a value against the rules.
 */
Validator.prototype.verify = function verify (value, rules, options) {
    if ( options === void 0 ) options = {};

  var field = {
    name: (options && options.name) || '{field}',
    rules: normalizeRules(rules),
    bails: getPath('bails', options, true),
    forceRequired: false,
    get isRequired () {
      return !!this.rules.required || this.forceRequired;
    }
  };

  var targetRules = Object.keys(field.rules).filter(RuleContainer.isTargetRule);
  if (targetRules.length && options && isObject(options.values)) {
    field.dependencies = targetRules.map(function (rule) {
      var ref = field.rules[rule];
        var targetKey = ref[0];

      return {
        name: rule,
        field: { value: options.values[targetKey] }
      };
    });
  }

  return this._validate(field, value).then(function (result) {
    var errors = [];
    var ruleMap = {};
    result.errors.forEach(function (e) {
      errors.push(e.msg);
      ruleMap[e.rule] = e.msg;
    });

    return {
      valid: result.valid,
      errors: errors,
      failedRules: ruleMap
    };
  });
};

/**
 * Perform cleanup.
 */
Validator.prototype.destroy = function destroy () {
  this.$vee._vm.$off('localeChanged');
};

/**
 * Creates the fields to be validated.
 */
Validator.prototype._createFields = function _createFields (validations) {
    var this$1 = this;

  if (!validations) { return; }

  Object.keys(validations).forEach(function (field) {
    var options = assign({}, { name: field, rules: validations[field] });
    this$1.attach(options);
  });
};

/**
 * Date rules need the existence of a format, so date_format must be supplied.
 */
Validator.prototype._getDateFormat = function _getDateFormat (validations) {
  var format = null;
  if (validations.date_format && Array.isArray(validations.date_format)) {
    format = validations.date_format[0];
  }

  return format || DictionaryResolver.getDriver().getDateFormat(this.locale);
};

/**
 * Formats an error message for field and a rule.
 */
Validator.prototype._formatErrorMessage = function _formatErrorMessage (field, rule, data, targetName) {
    if ( data === void 0 ) data = {};
    if ( targetName === void 0 ) targetName = null;

  var name = this._getFieldDisplayName(field);
  var params = this._getLocalizedParams(rule, targetName);

  return DictionaryResolver.getDriver().getFieldMessage(this.locale, field.name, rule.name, [name, params, data]);
};

/**
 * We need to convert any object param to an array format since the locales do not handle params as objects yet.
 */
Validator.prototype._convertParamObjectToArray = function _convertParamObjectToArray (obj, ruleName) {
  if (Array.isArray(obj)) {
    return obj;
  }

  var paramNames = RuleContainer.getParamNames(ruleName);
  if (!paramNames || !isObject(obj)) {
    return obj;
  }

  return paramNames.reduce(function (prev, paramName) {
    if (paramName in obj) {
      prev.push(obj[paramName]);
    }

    return prev;
  }, []);
};

/**
 * Translates the parameters passed to the rule (mainly for target fields).
 */
Validator.prototype._getLocalizedParams = function _getLocalizedParams (rule, targetName) {
    if ( targetName === void 0 ) targetName = null;

  var params = this._convertParamObjectToArray(rule.params, rule.name);
  if (rule.options.hasTarget && params && params[0]) {
    var localizedName = targetName || DictionaryResolver.getDriver().getAttribute(this.locale, params[0], params[0]);
    return [localizedName].concat(params.slice(1));
  }

  return params;
};

/**
 * Resolves an appropriate display name, first checking 'data-as' or the registered 'prettyName'
 */
Validator.prototype._getFieldDisplayName = function _getFieldDisplayName (field) {
  return field.alias || DictionaryResolver.getDriver().getAttribute(this.locale, field.name, field.name);
};

/**
 * Converts an array of params to an object with named properties.
 * Only works if the rule is configured with a paramNames array.
 * Returns the same params if it cannot convert it.
 */
Validator.prototype._convertParamArrayToObj = function _convertParamArrayToObj (params, ruleName) {
  var paramNames = RuleContainer.getParamNames(ruleName);
  if (!paramNames) {
    return params;
  }

  if (isObject(params)) {
    // check if the object is either a config object or a single parameter that is an object.
    var hasKeys = paramNames.some(function (name) { return Object.keys(params).indexOf(name) !== -1; });
    // if it has some of the keys, return it as is.
    if (hasKeys) {
      return params;
    }
    // otherwise wrap the object in an array.
    params = [params];
  }

  // Reduce the paramsNames to a param object.
  return params.reduce(function (prev, value, idx) {
    prev[paramNames[idx]] = value;

    return prev;
  }, {});
};

/**
 * Tests a single input value against a rule.
 */
Validator.prototype._test = function _test (field, value, rule) {
    var this$1 = this;

  var validator = RuleContainer.getValidatorMethod(rule.name);
  var params = Array.isArray(rule.params) ? toArray(rule.params) : rule.params;
  if (!params) {
    params = [];
  }

  var targetName = null;
  if (!validator || typeof validator !== 'function') {
    return Promise.reject(createError(("No such validator '" + (rule.name) + "' exists.")));
  }

  // has field dependencies.
  if (rule.options.hasTarget && field.dependencies) {
    var target = find(field.dependencies, function (d) { return d.name === rule.name; });
    if (target) {
      targetName = target.field.alias;
      params = [target.field.value].concat(params.slice(1));
    }
  } else if (rule.name === 'required' && field.rejectsFalse) {
    // invalidate false if no args were specified and the field rejects false by default.
    params = params.length ? params : [true];
  }

  if (rule.options.isDate) {
    var dateFormat = this._getDateFormat(field.rules);
    if (rule.name !== 'date_format') {
      params.push(dateFormat);
    }
  }

  var result = validator(value, this._convertParamArrayToObj(params, rule.name));

  // If it is a promise.
  if (isCallable(result.then)) {
    return result.then(function (values) {
      var allValid = true;
      var data = {};
      if (Array.isArray(values)) {
        allValid = values.every(function (t) { return (isObject(t) ? t.valid : t); });
      } else { // Is a single object/boolean.
        allValid = isObject(values) ? values.valid : values;
        data = values.data;
      }

      return {
        valid: allValid,
        data: result.data,
        errors: allValid ? [] : [this$1._createFieldError(field, rule, data, targetName)]
      };
    });
  }

  if (!isObject(result)) {
    result = { valid: result, data: {} };
  }

  return {
    valid: result.valid,
    data: result.data,
    errors: result.valid ? [] : [this._createFieldError(field, rule, result.data, targetName)]
  };
};

/**
 * Merges a validator object into the RULES and Messages.
 */
Validator._merge = function _merge (name, ref) {
    var validator = ref.validator;
    var options = ref.options;
    var paramNames = ref.paramNames;

  var validate = isCallable(validator) ? validator : validator.validate;
  if (validator.getMessage) {
    DictionaryResolver.getDriver().setMessage(Validator.locale, name, validator.getMessage);
  }

  RuleContainer.add(name, {
    validate: validate,
    options: options,
    paramNames: paramNames
  });
};

/**
 * Guards from extension violations.
 */
Validator._guardExtend = function _guardExtend (name, validator) {
  if (isCallable(validator)) {
    return;
  }

  if (!isCallable(validator.validate)) {
    throw createError(
      ("Extension Error: The validator '" + name + "' must be a function or have a 'validate' method.")
    );
  }
};

/**
 * Creates a Field Error Object.
 */
Validator.prototype._createFieldError = function _createFieldError (field, rule, data, targetName) {
    var this$1 = this;

  return {
    id: field.id,
    vmId: field.vmId,
    field: field.name,
    msg: this._formatErrorMessage(field, rule, data, targetName),
    rule: rule.name,
    scope: field.scope,
    regenerate: function () {
      return this$1._formatErrorMessage(field, rule, data, targetName);
    }
  };
};

/**
 * Tries different strategies to find a field.
 */
Validator.prototype._resolveField = function _resolveField (name, scope, uid) {
  if (name[0] === '#') {
    return this.fields.findById(name.slice(1));
  }

  if (!isNullOrUndefined(scope)) {
    return this.fields.find({ name: name, scope: scope, vmId: uid });
  }

  if (includes(name, '.')) {
    var ref = name.split('.');
      var fieldScope = ref[0];
      var fieldName = ref.slice(1);
    var field = this.fields.find({ name: fieldName.join('.'), scope: fieldScope, vmId: uid });
    if (field) {
      return field;
    }
  }

  return this.fields.find({ name: name, scope: null, vmId: uid });
};

/**
 * Handles when a field is not found.
 */
Validator.prototype._handleFieldNotFound = function _handleFieldNotFound (name, scope) {
  var fullName = isNullOrUndefined(scope) ? name : ("" + (!isNullOrUndefined(scope) ? scope + '.' : '') + name);

  return Promise.reject(createError(
    ("Validating a non-existent field: \"" + fullName + "\". Use \"attach()\" first.")
  ));
};

/**
 * Handles validation results.
 */
Validator.prototype._handleValidationResults = function _handleValidationResults (results, vmId) {
    var this$1 = this;

  var matchers = results.map(function (result) { return ({ id: result.id }); });
  this.errors.removeById(matchers.map(function (m) { return m.id; }));
  // remove by name and scope to remove any custom errors added.
  results.forEach(function (result) {
    this$1.errors.remove(result.field, result.scope, vmId);
  });
  var allErrors = results.reduce(function (prev, curr) {
    prev.push.apply(prev, curr.errors);

    return prev;
  }, []);

  this.errors.add(allErrors);

  // handle flags.
  this.fields.filter(matchers).forEach(function (field) {
    var result = find(results, function (r) { return r.id === field.id; });
    field.setFlags({
      pending: false,
      valid: result.valid,
      validated: true
    });
  });
};

Validator.prototype._shouldSkip = function _shouldSkip (field, value) {
  // field is configured to run through the pipeline regardless
  if (field.bails === false) {
    return false;
  }

  // disabled fields are skipped if useConstraintAttrs is enabled in config
  if (field.isDisabled && getConfig().useConstraintAttrs) {
    return true;
  }

  // skip if the field is not required and has an empty value.
  return !field.isRequired && (isNullOrUndefined(value) || value === '' || isEmptyArray(value));
};

Validator.prototype._shouldBail = function _shouldBail (field) {
  // if the field was configured explicitly.
  if (field.bails !== undefined) {
    return field.bails;
  }

  return this.fastExit;
};

/**
 * Starts the validation process.
 */
Validator.prototype._validate = function _validate (field, value, ref) {
    var this$1 = this;
    if ( ref === void 0 ) ref = {};
    var initial = ref.initial;

  var requireRules = Object.keys(field.rules).filter(RuleContainer.isRequireRule);

  field.forceRequired = false;
  requireRules.forEach(function (rule) {
    var ruleOptions = RuleContainer.getOptions(rule);
    var result = this$1._test(field, value, { name: rule, params: field.rules[rule], options: ruleOptions });

    if (isCallable(result.then)) { throw createError('Require rules cannot be async'); }
    if (!isObject(result)) { throw createError('Require rules has to return an object (see docs)'); }

    if (result.data.required === true) {
      field.forceRequired = true;
    }
  });

  if (this._shouldSkip(field, value)) {
    return Promise.resolve({ valid: true, id: field.id, field: field.name, scope: field.scope, errors: [] });
  }

  var promises = [];
  var errors = [];
  var isExitEarly = false;
  if (isCallable(field.checkValueChanged)) {
    field.flags.changed = field.checkValueChanged();
  }

  // use of '.some()' is to break iteration in middle by returning true
  Object.keys(field.rules).filter(function (rule) {
    if (!initial || !RuleContainer.has(rule)) { return true; }

    return RuleContainer.isImmediate(rule);
  }).some(function (rule) {
    var ruleOptions = RuleContainer.getOptions(rule);
    var result = this$1._test(field, value, { name: rule, params: field.rules[rule], options: ruleOptions });
    if (isCallable(result.then)) {
      promises.push(result);
    } else if (!result.valid && this$1._shouldBail(field)) {
      errors.push.apply(errors, result.errors);
      isExitEarly = true;
    } else {
      // promisify the result.
      promises.push(new Promise(function (resolve) { return resolve(result); }));
    }

    return isExitEarly;
  });

  if (isExitEarly) {
    return Promise.resolve({ valid: false, errors: errors, id: field.id, field: field.name, scope: field.scope });
  }

  return Promise.all(promises).then(function (results) {
    return results.reduce(function (prev, v) {
        var ref;

      if (!v.valid) {
        (ref = prev.errors).push.apply(ref, v.errors);
      }

      prev.valid = prev.valid && v.valid;

      return prev;
    }, { valid: true, errors: errors, id: field.id, field: field.name, scope: field.scope });
  });
};

Object.defineProperties( Validator.prototype, prototypeAccessors$4 );
Object.defineProperties( Validator, staticAccessors$1 );

// 

var normalizeValue = function (value) {
  if (isObject(value)) {
    return Object.keys(value).reduce(function (prev, key) {
      prev[key] = normalizeValue(value[key]);

      return prev;
    }, {});
  }

  if (isCallable(value)) {
    return value('{0}', ['{1}', '{2}', '{3}']);
  }

  return value;
};

var normalizeFormat = function (locale) {
  // normalize messages
  var dictionary = {};
  if (locale.messages) {
    dictionary.messages = normalizeValue(locale.messages);
  }

  if (locale.custom) {
    dictionary.custom = normalizeValue(locale.custom);
  }

  if (locale.attributes) {
    dictionary.attributes = locale.attributes;
  }

  if (!isNullOrUndefined(locale.dateFormat)) {
    dictionary.dateFormat = locale.dateFormat;
  }

  return dictionary;
};

var I18nDictionary = function I18nDictionary (i18n, rootKey) {
  this.i18n = i18n;
  this.rootKey = rootKey;
};

var prototypeAccessors$5 = { locale: { configurable: true } };

prototypeAccessors$5.locale.get = function () {
  return this.i18n.locale;
};

prototypeAccessors$5.locale.set = function (value) {
  warn('Cannot set locale from the validator when using vue-i18n, use i18n.locale setter instead');
};

I18nDictionary.prototype.getDateFormat = function getDateFormat (locale) {
  return this.i18n.getDateTimeFormat(locale || this.locale);
};

I18nDictionary.prototype.setDateFormat = function setDateFormat (locale, value) {
  this.i18n.setDateTimeFormat(locale || this.locale, value);
};

I18nDictionary.prototype.getMessage = function getMessage (_, key, data) {
  var path = (this.rootKey) + ".messages." + key;
  var dataOptions = data;

  if (Array.isArray(data)) {
    dataOptions = [].concat.apply([], data);
  }

  if (this.i18n.te(path)) {
    return this.i18n.t(path, dataOptions);
  }

  // fallback to the fallback message
  if (this.i18n.te(path, this.i18n.fallbackLocale)) {
    return this.i18n.t(path, this.i18n.fallbackLocale, dataOptions);
  }

  // fallback to the root message
  return this.i18n.t(((this.rootKey) + ".messages._default"), dataOptions);
};

I18nDictionary.prototype.getAttribute = function getAttribute (_, key, fallback) {
    if ( fallback === void 0 ) fallback = '';

  var path = (this.rootKey) + ".attributes." + key;
  if (this.i18n.te(path)) {
    return this.i18n.t(path);
  }

  return fallback;
};

I18nDictionary.prototype.getFieldMessage = function getFieldMessage (_, field, key, data) {
  var path = (this.rootKey) + ".custom." + field + "." + key;
  if (this.i18n.te(path)) {
    return this.i18n.t(path, data);
  }

  return this.getMessage(_, key, data);
};

I18nDictionary.prototype.merge = function merge$1 (dictionary) {
    var this$1 = this;

  Object.keys(dictionary).forEach(function (localeKey) {
      var obj;

    // i18n doesn't deep merge
    // first clone the existing locale (avoid mutations to locale)
    var clone = merge({}, getPath((localeKey + "." + (this$1.rootKey)), this$1.i18n.messages, {}));
    // Merge cloned locale with new one
    var locale = merge(clone, normalizeFormat(dictionary[localeKey]));
    this$1.i18n.mergeLocaleMessage(localeKey, ( obj = {}, obj[this$1.rootKey] = locale, obj ));
    if (locale.dateFormat) {
      this$1.i18n.setDateTimeFormat(localeKey, locale.dateFormat);
    }
  });
};

I18nDictionary.prototype.setMessage = function setMessage (locale, key, value) {
    var obj, obj$1;

  this.merge(( obj$1 = {}, obj$1[locale] = {
      messages: ( obj = {}, obj[key] = value, obj )
    }, obj$1 ));
};

I18nDictionary.prototype.setAttribute = function setAttribute (locale, key, value) {
    var obj, obj$1;

  this.merge(( obj$1 = {}, obj$1[locale] = {
      attributes: ( obj = {}, obj[key] = value, obj )
    }, obj$1 ));
};

Object.defineProperties( I18nDictionary.prototype, prototypeAccessors$5 );

var aggressive = function () { return ({
  on: ['input']
}); };

var lazy = function () { return ({
  on: ['change']
}); };

var eager = function (ref) {
  var errors = ref.errors;

  if (errors.length) {
    return {
      on: ['input']
    };
  }

  return {
    on: ['change', 'blur']
  };
};

var passive = function () { return ({
  on: []
}); };

var modes = {
  aggressive: aggressive,
  eager: eager,
  passive: passive,
  lazy: lazy
};

// 

var Vue;
var pendingPlugins;
var pluginInstance;

var VeeValidate$1 = function VeeValidate (config, _Vue) {
  this.configure(config);
  pluginInstance = this;
  if (_Vue) {
    Vue = _Vue;
  }
  this._validator = setValidator(
    new Validator(null, { fastExit: config && config.fastExit }, this)
  );
  this._initVM(this.config);
  this._initI18n(this.config);
};

var prototypeAccessors$6 = { i18nDriver: { configurable: true },config: { configurable: true } };
var staticAccessors$2 = { i18nDriver: { configurable: true },config: { configurable: true } };

VeeValidate$1.setI18nDriver = function setI18nDriver (driver, instance) {
  DictionaryResolver.setDriver(driver, instance);
};

VeeValidate$1.configure = function configure (cfg) {
  setConfig(cfg);
};

VeeValidate$1.setMode = function setMode (mode, implementation) {
  setConfig({ mode: mode });
  if (!implementation) {
    return;
  }

  if (!isCallable(implementation)) {
    throw new Error('A mode implementation must be a function');
  }

  modes[mode] = implementation;
};

VeeValidate$1.use = function use (plugin, options) {
    if ( options === void 0 ) options = {};

  if (!isCallable(plugin)) {
    return warn('The plugin must be a callable function');
  }

  // Don't install plugins until vee-validate is installed.
  if (!pluginInstance) {
    if (!pendingPlugins) {
      pendingPlugins = [];
    }
    pendingPlugins.push({ plugin: plugin, options: options });
    return;
  }

  plugin({ Validator: Validator, ErrorBag: ErrorBag, Rules: Validator.rules }, options);
};
VeeValidate$1.install = function install (_Vue, opts) {
  if (Vue && _Vue === Vue) {
    if (true) {
      warn('already installed, Vue.use(VeeValidate) should only be called once.');
    }
    return;
  }

  Vue = _Vue;
  pluginInstance = new VeeValidate$1(opts);
  // inject the plugin container statically into the validator class
  Validator.$vee = pluginInstance;

  detectPassiveSupport();

  Vue.mixin(mixin);
  Vue.directive('validate', directive);
  if (pendingPlugins) {
    pendingPlugins.forEach(function (ref) {
        var plugin = ref.plugin;
        var options = ref.options;

      VeeValidate$1.use(plugin, options);
    });
    pendingPlugins = null;
  }
};

prototypeAccessors$6.i18nDriver.get = function () {
  return DictionaryResolver.getDriver();
};

staticAccessors$2.i18nDriver.get = function () {
  return DictionaryResolver.getDriver();
};

prototypeAccessors$6.config.get = function () {
  return getConfig();
};

staticAccessors$2.config.get = function () {
  return getConfig();
};

VeeValidate$1.prototype._initVM = function _initVM (config) {
    var this$1 = this;

  this._vm = new Vue({
    data: function () { return ({
      errors: this$1._validator.errors,
      fields: this$1._validator.fields
    }); }
  });
};

VeeValidate$1.prototype._initI18n = function _initI18n (config) {
    var this$1 = this;

  var dictionary = config.dictionary;
    var i18n = config.i18n;
    var i18nRootKey = config.i18nRootKey;
    var locale = config.locale;
  var onLocaleChanged = function () {
    if (dictionary) {
      this$1.i18nDriver.merge(dictionary);
    }

    this$1._validator.errors.regenerate();
  };

  // i18 is being used for localization.
  if (i18n) {
    VeeValidate$1.setI18nDriver('i18n', new I18nDictionary(i18n, i18nRootKey));
    i18n._vm.$watch('locale', onLocaleChanged);
  } else if (typeof window !== 'undefined') {
    this._vm.$on('localeChanged', onLocaleChanged);
  }

  if (dictionary) {
    this.i18nDriver.merge(dictionary);
  }

  if (locale && !i18n) {
    this._validator.localize(locale);
  }
};

VeeValidate$1.prototype.configure = function configure (cfg) {
  setConfig(cfg);
};

Object.defineProperties( VeeValidate$1.prototype, prototypeAccessors$6 );
Object.defineProperties( VeeValidate$1, staticAccessors$2 );

VeeValidate$1.mixin = mixin;
VeeValidate$1.directive = directive;
VeeValidate$1.Validator = Validator;
VeeValidate$1.ErrorBag = ErrorBag;

/**
 * Formates file size.
 *
 * @param {Number|String} size
 */
var formatFileSize = function (size) {
  var units = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var threshold = 1024;
  size = Number(size) * threshold;
  var i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(threshold));
  return (((size / Math.pow(threshold, i)).toFixed(2) * 1) + " " + (units[i]));
};

/**
 * Checks if vee-validate is defined globally.
 */
var isDefinedGlobally = function () {
  return typeof VeeValidate !== 'undefined';
};

var obj;

var messages = {
  _default: function (field) { return ("The " + field + " value is not valid"); },
  after: function (field, ref) {
    var target = ref[0];
    var inclusion = ref[1];

    return ("The " + field + " must be after " + (inclusion ? 'or equal to ' : '') + target);
},
  alpha: function (field) { return ("The " + field + " field may only contain alphabetic characters"); },
  alpha_dash: function (field) { return ("The " + field + " field may contain alpha-numeric characters as well as dashes and underscores"); },
  alpha_num: function (field) { return ("The " + field + " field may only contain alpha-numeric characters"); },
  alpha_spaces: function (field) { return ("The " + field + " field may only contain alphabetic characters as well as spaces"); },
  before: function (field, ref) {
    var target = ref[0];
    var inclusion = ref[1];

    return ("The " + field + " must be before " + (inclusion ? 'or equal to ' : '') + target);
},
  between: function (field, ref) {
    var min = ref[0];
    var max = ref[1];

    return ("The " + field + " field must be between " + min + " and " + max);
},
  confirmed: function (field) { return ("The " + field + " confirmation does not match"); },
  credit_card: function (field) { return ("The " + field + " field is invalid"); },
  date_between: function (field, ref) {
    var min = ref[0];
    var max = ref[1];

    return ("The " + field + " must be between " + min + " and " + max);
},
  date_format: function (field, ref) {
    var format = ref[0];

    return ("The " + field + " must be in the format " + format);
},
  decimal: function (field, ref) {
    if ( ref === void 0 ) ref = [];
    var decimals = ref[0]; if ( decimals === void 0 ) decimals = '*';

    return ("The " + field + " field must be numeric and may contain" + (!decimals || decimals === '*' ? '' : ' ' + decimals) + " decimal points");
},
  digits: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field must be numeric and contains exactly " + length + " digits");
},
  dimensions: function (field, ref) {
    var width = ref[0];
    var height = ref[1];

    return ("The " + field + " field must be " + width + " pixels by " + height + " pixels");
},
  email: function (field) { return ("The " + field + " field must be a valid email"); },
  excluded: function (field) { return ("The " + field + " field must be a valid value"); },
  ext: function (field) { return ("The " + field + " field must be a valid file"); },
  image: function (field) { return ("The " + field + " field must be an image"); },
  included: function (field) { return ("The " + field + " field must be a valid value"); },
  integer: function (field) { return ("The " + field + " field must be an integer"); },
  ip: function (field) { return ("The " + field + " field must be a valid ip address"); },
  ip_or_fqdn: function (field) { return ("The " + field + " field must be a valid ip address or FQDN"); },
  length: function (field, ref) {
    var length = ref[0];
    var max = ref[1];

    if (max) {
      return ("The " + field + " length must be between " + length + " and " + max);
    }

    return ("The " + field + " length must be " + length);
  },
  max: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field may not be greater than " + length + " characters");
},
  max_value: function (field, ref) {
    var max = ref[0];

    return ("The " + field + " field must be " + max + " or less");
},
  mimes: function (field) { return ("The " + field + " field must have a valid file type"); },
  min: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field must be at least " + length + " characters");
},
  min_value: function (field, ref) {
    var min = ref[0];

    return ("The " + field + " field must be " + min + " or more");
},
  numeric: function (field) { return ("The " + field + " field may only contain numeric characters"); },
  regex: function (field) { return ("The " + field + " field format is invalid"); },
  required: function (field) { return ("The " + field + " field is required"); },
  required_if: function (field, ref) {
    var target = ref[0];

    return ("The " + field + " field is required when the " + target + " field has this value");
},
  size: function (field, ref) {
    var size = ref[0];

    return ("The " + field + " size must be less than " + (formatFileSize(size)));
},
  url: function (field) { return ("The " + field + " field is not a valid URL"); }
};

var locale = {
  name: 'en',
  messages: messages,
  attributes: {}
};

if (isDefinedGlobally()) {
  // eslint-disable-next-line
  VeeValidate.Validator.localize(( obj = {}, obj[locale.name] = locale, obj ));
}

function toInteger (dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number)
}

var MILLISECONDS_IN_MINUTE = 60000;

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds (dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = date.getTimezoneOffset();
  date.setSeconds(0, 0);
  var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE;

  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset
}

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE$1 = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;

var patterns = {
  dateTimeDelimeter: /[T ]/,
  plainTime: /:/,
  timeZoneDelimeter: /[Z ]/i,

  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/, // 0 additional digits
    /^([+-]\d{3})$/, // 1 additional digit
    /^([+-]\d{4})$/ // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/, // 0 additional digits
    /^([+-]\d{5})/, // 1 additional digit
    /^([+-]\d{6})/ // 2 additional digits
  ],

  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,

  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,

  // timezone tokens
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-])(\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 * If the function cannot parse the string or the values are invalid, it returns Invalid Date.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 * All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = toDate('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = toDate('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function toDate (argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  if (argument === null) {
    return new Date(NaN)
  }

  var options = dirtyOptions || {};

  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : toInteger(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2')
  }

  // Clone the date
  if (argument instanceof Date ||
    (typeof argument === 'object' && Object.prototype.toString.call(argument) === '[object Date]')
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument === 'number' || Object.prototype.toString.call(argument) === '[object Number]') {
    return new Date(argument)
  } else if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN)
  }

  var dateStrings = splitDateString(argument);

  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;

  var date = parseDate(restDateString, year);

  if (isNaN(date)) {
    return new Date(NaN)
  }

  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;

    if (dateStrings.time) {
      time = parseTime(dateStrings.time);

      if (isNaN(time)) {
        return new Date(NaN)
      }
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone);
      if (isNaN(offset)) {
        return new Date(NaN)
      }
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time));
      offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time + offset));
    }

    return new Date(timestamp + time + offset)
  } else {
    return new Date(NaN)
  }
}

function splitDateString (dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimeter);
  var timeString;

  if (patterns.plainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimeter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimeter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits];
  var patternYYYYY = patterns.YYYYY[additionalDigits];

  var token;

  // YYYY or ±YYYYY
  token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token;
  var date;
  var month;
  var week;

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0);
    date.setUTCFullYear(year);
    return date
  }

  // YYYY-MM
  token = patterns.MM.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;

    if (!validateDate(year, month)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, month);
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = patterns.DDD.exec(dateString);
  if (token) {
    date = new Date(0);
    var dayOfYear = parseInt(token[1], 10);

    if (!validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, 0, dayOfYear);
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = patterns.MMDD.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);

    if (!validateDate(year, month, day)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, month, day);
    return date
  }

  // YYYY-Www or YYYYWww
  token = patterns.Www.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;

    if (!validateWeekDate(year, week)) {
      return new Date(NaN)
    }

    return dayOfISOWeekYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = patterns.WwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;

    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN)
    }

    return dayOfISOWeekYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token;
  var hours;
  var minutes;

  // hh
  token = patterns.HH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'));

    if (!validateTime(hours)) {
      return NaN
    }

    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = patterns.HHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(',', '.'));

    if (!validateTime(hours, minutes)) {
      return NaN
    }

    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE$1
  }

  // hh:mm:ss or hhmmss
  token = patterns.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(',', '.'));

    if (!validateTime(hours, minutes, seconds)) {
      return NaN
    }

    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE$1 +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token;
  var absoluteOffset;

  // Z
  token = patterns.timezoneZ.exec(timezoneString);
  if (token) {
    return 0
  }

  var hours;

  // ±hh
  token = patterns.timezoneHH.exec(timezoneString);
  if (token) {
    hours = parseInt(token[2], 10);

    if (!validateTimezone()) {
      return NaN
    }

    absoluteOffset = hours * MILLISECONDS_IN_HOUR;
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = patterns.timezoneHHMM.exec(timezoneString);
  if (token) {
    hours = parseInt(token[2], 10);
    var minutes = parseInt(token[3], 10);

    if (!validateTimezone(hours, minutes)) {
      return NaN
    }

    absoluteOffset = hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE$1;
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOWeekYear (isoWeekYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

// Validation functions

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex (year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}

function validateDate (year, month, date) {
  if (month < 0 || month > 11) {
    return false
  }

  if (date != null) {
    if (date < 1) {
      return false
    }

    var isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false
    }
    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false
    }
  }

  return true
}

function validateDayOfYearDate (year, dayOfYear) {
  if (dayOfYear < 1) {
    return false
  }

  var isLeapYear = isLeapYearIndex(year);
  if (isLeapYear && dayOfYear > 366) {
    return false
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false
  }

  return true
}

function validateWeekDate (year, week, day) {
  if (week < 0 || week > 52) {
    return false
  }

  if (day != null && (day < 0 || day > 6)) {
    return false
  }

  return true
}

function validateTime (hours, minutes, seconds) {
  if (hours != null && (hours < 0 || hours >= 25)) {
    return false
  }

  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false
  }

  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false
  }

  return true
}

function validateTimezone (hours, minutes) {
  if (minutes != null && (minutes < 0 || minutes > 59)) {
    return false
  }

  return true
}

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var timestamp = toDate(dirtyDate, dirtyOptions).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount)
}

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid('2014-02-31')
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  return !isNaN(date)
}

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },

  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },

  halfAMinute: 'half a minute',

  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },

  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },

  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },

  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },

  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },

  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },

  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },

  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },

  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },

  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },

  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

function formatDistance (token, count, options) {
  options = options || {};

  var result;
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result
    } else {
      return result + ' ago'
    }
  }

  return result
}

function buildFormatLongFn (args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format
  }
}

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};

var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};

var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};

var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),

  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),

  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};

var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}

function buildLocalizeFn (args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var context = options.context ? String(options.context) : 'standalone';

    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      valuesArray = args.formattingValues[width] || args.formattingValues[args.defaultFormattingWidth];
    } else {
      valuesArray = args.values[width] || args.values[args.defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index]
  }
}

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};

var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber (dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1
    }
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaulFormattingWidth: 'wide'
  })
};

function buildMatchPatternFn (args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};

    var matchResult = string.match(args.matchPattern);
    if (!matchResult) {
      return null
    }
    var matchedString = matchResult[0];

    var parseResult = string.match(args.parsePattern);
    if (!parseResult) {
      return null
    }
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;

    return {
      value: value,
      rest: string.slice(matchedString.length)
    }
  }
}

function buildMatchFn (args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;

    var matchPattern = (width && args.matchPatterns[width]) || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null
    }
    var matchedString = matchResult[0];

    var parsePatterns = (width && args.parsePatterns[width]) || args.parsePatterns[args.defaultParseWidth];

    var value;
    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = parsePatterns.findIndex(function (pattern) {
        return pattern.test(string)
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(string)
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;

    return {
      value: value,
      rest: string.slice(matchedString.length)
    }
  }
}

function findKey (object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key
    }
  }
}

var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;

var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};

var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};

var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};

var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};

var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};

var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10)
    }
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1
    }
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale$1 = {
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};

var MILLISECONDS_IN_DAY = 86400000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCDayOfYear (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeek (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var weekStartsOn = 1;

  var date = toDate(dirtyDate, dirtyOptions);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeekYear (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();

  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear, dirtyOptions);

  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeekYear (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var year = getUTCISOWeekYear(dirtyDate, dirtyOptions);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary, dirtyOptions);
  return date
}

var MILLISECONDS_IN_WEEK = 604800000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeek (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var diff = startOfUTCISOWeek(date, dirtyOptions).getTime() - startOfUTCISOWeekYear(date, dirtyOptions).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCWeek (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var date = toDate(dirtyDate, options);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCWeekYear (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale &&
    locale.options &&
    locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null
      ? 1
      : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);

  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCWeekYear (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale &&
    locale.options &&
    locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null
      ? 1
      : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate);

  var year = getUTCWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, dirtyOptions);
  return date
}

var MILLISECONDS_IN_WEEK$1 = 604800000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCWeek (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var diff = startOfUTCWeek(date, dirtyOptions).getTime() - startOfUTCWeekYear(date, dirtyOptions).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1
}

var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {width: 'abbreviated'})
      // A, B
      case 'GGGGG':
        return localize.era(era, {width: 'narrow'})
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {width: 'wide'})
    }
  },

  // Year
  y: function (date, token, localize, options) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();

    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;

    // Two digit year
    if (token === 'yy') {
      var twoDigitYear = year % 100;
      return addLeadingZeros(twoDigitYear, 2)
    }

    // Ordinal number
    if (token === 'yo') {
      return localize.ordinalNumber(year, {unit: 'year'})
    }

    // Padding
    return addLeadingZeros(year, token.length)
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2)
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {unit: 'year'})
    }

    // Padding
    return addLeadingZeros(weekYear, token.length)
  },

  // ISO week-numbering year
  R: function (date, token, localize, options) {
    var isoWeekYear = getUTCISOWeekYear(date, options);

    // Padding
    return addLeadingZeros(isoWeekYear, token.length)
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token, localize, options) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length)
  },

  // Quarter
  Q: function (date, token, localize, options) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter)
      // 01, 02, 03, 04
      case 'QQ':
        return addLeadingZeros(quarter, 2)
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {unit: 'quarter'})
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {width: 'abbreviated', context: 'formatting'})
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {width: 'narrow', context: 'formatting'})
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {width: 'wide', context: 'formatting'})
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize, options) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter)
      // 01, 02, 03, 04
      case 'qq':
        return addLeadingZeros(quarter, 2)
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {unit: 'quarter'})
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {width: 'abbreviated', context: 'standalone'})
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {width: 'narrow', context: 'standalone'})
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {width: 'wide', context: 'standalone'})
    }
  },

  // Month
  M: function (date, token, localize, options) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'M':
        return String(month + 1)
      // 01, 02, ..., 12
      case 'MM':
        return addLeadingZeros(month + 1, 2)
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {unit: 'month'})
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {width: 'abbreviated', context: 'formatting'})
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {width: 'narrow', context: 'formatting'})
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {width: 'wide', context: 'formatting'})
    }
  },

  // Stand-alone month
  L: function (date, token, localize, options) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1)
      // 01, 02, ..., 12
      case 'LL':
        return addLeadingZeros(month + 1, 2)
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {unit: 'month'})
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {width: 'abbreviated', context: 'standalone'})
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {width: 'narrow', context: 'standalone'})
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {width: 'wide', context: 'standalone'})
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    var week = getUTCWeek(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {unit: 'week'})
    }

    return addLeadingZeros(week, token.length)
  },

  // ISO week of year
  I: function (date, token, localize, options) {
    var isoWeek = getUTCISOWeek(date, options);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {unit: 'week'})
    }

    return addLeadingZeros(isoWeek, token.length)
  },

  // Day of the month
  d: function (date, token, localize, options) {
    var dayOfMonth = date.getUTCDate();

    if (token === 'do') {
      return localize.ordinalNumber(dayOfMonth, {unit: 'date'})
    }

    return addLeadingZeros(dayOfMonth, token.length)
  },

  // Day of year
  D: function (date, token, localize, options) {
    var dayOfYear = getUTCDayOfYear(date, options);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {unit: 'dayOfYear'})
    }

    return addLeadingZeros(dayOfYear, token.length)
  },

  // Day of week
  E: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {width: 'abbreviated', context: 'formatting'})
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {width: 'narrow', context: 'formatting'})
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {width: 'short', context: 'formatting'})
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {width: 'wide', context: 'formatting'})
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = ((dayOfWeek - options.weekStartsOn + 8) % 7) || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek)
      // Padded numerical value
      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2)
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {unit: 'day'})
      case 'eee':
        return localize.day(dayOfWeek, {width: 'abbreviated', context: 'formatting'})
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {width: 'narrow', context: 'formatting'})
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {width: 'short', context: 'formatting'})
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {width: 'wide', context: 'formatting'})
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = ((dayOfWeek - options.weekStartsOn + 8) % 7) || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek)
      // Padded numberical value
      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length)
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {unit: 'day'})
      case 'ccc':
        return localize.day(dayOfWeek, {width: 'abbreviated', context: 'standalone'})
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {width: 'narrow', context: 'standalone'})
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {width: 'short', context: 'standalone'})
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {width: 'wide', context: 'standalone'})
    }
  },

  // ISO day of week
  i: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek)
      // 02
      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length)
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {unit: 'day'})
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {width: 'abbreviated', context: 'formatting'})
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {width: 'narrow', context: 'formatting'})
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {width: 'short', context: 'formatting'})
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {width: 'wide', context: 'formatting'})
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = (hours / 12) >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'abbreviated', context: 'formatting'})
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'narrow', context: 'formatting'})
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'wide', context: 'formatting'})
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = (hours / 12) >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'abbreviated', context: 'formatting'})
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'narrow', context: 'formatting'})
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'wide', context: 'formatting'})
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'abbreviated', context: 'formatting'})
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'narrow', context: 'formatting'})
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'wide', context: 'formatting'})
    }
  },

  // Hour [1-12]
  h: function (date, token, localize, options) {
    var hours = date.getUTCHours() % 12;

    if (hours === 0) {
      hours = 12;
    }

    if (token === 'ho') {
      return localize.ordinalNumber(hours, {unit: 'hour'})
    }

    return addLeadingZeros(hours, token.length)
  },

  // Hour [0-23]
  H: function (date, token, localize, options) {
    var hours = date.getUTCHours();

    if (token === 'Ho') {
      return localize.ordinalNumber(hours, {unit: 'hour'})
    }

    return addLeadingZeros(hours, token.length)
  },

  // Hour [0-11]
  K: function (date, token, localize, options) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {unit: 'hour'})
    }

    return addLeadingZeros(hours, token.length)
  },

  // Hour [1-24]
  k: function (date, token, localize, options) {
    var hours = date.getUTCHours();

    if (hours === 0) {
      hours = 24;
    }

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {unit: 'hour'})
    }

    return addLeadingZeros(hours, token.length)
  },

  // Minute
  m: function (date, token, localize, options) {
    var minutes = date.getUTCMinutes();

    if (token === 'mo') {
      return localize.ordinalNumber(minutes, {unit: 'minute'})
    }

    return addLeadingZeros(minutes, token.length)
  },

  // Second
  s: function (date, token, localize, options) {
    var seconds = date.getUTCSeconds();

    if (token === 'so') {
      return localize.ordinalNumber(seconds, {unit: 'second'})
    }

    return addLeadingZeros(seconds, token.length)
  },

  // Fraction of second
  S: function (date, token, localize, options) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, numberOfDigits)
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z'
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset)

      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX': // Hours and minutes without `:` delimeter
        return formatTimezone(timezoneOffset)

      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimeter
      default:
        return formatTimezone(timezoneOffset, ':')
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset)

      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx': // Hours and minutes without `:` delimeter
        return formatTimezone(timezoneOffset)

      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimeter
      default:
        return formatTimezone(timezoneOffset, ':')
    }
  },

  // Timezone (GMT)
  O: function (date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':')
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':')
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':')
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':')
    }
  },

  // Seconds timestamp
  t: function (date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length)
  },

  // Milliseconds timestamp
  T: function (date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length)
  }
};

function addLeadingZeros (number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output
}

function formatTimezone (offset, dirtyDelimeter) {
  var delimeter = dirtyDelimeter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimeter + minutes
}

function formatTimezoneWithOptionalMinutes (offset, dirtyDelimeter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2)
  }
  return formatTimezone(offset, dirtyDelimeter)
}

function formatTimezoneShort (offset, dirtyDelimeter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours)
  }
  var delimeter = dirtyDelimeter || '';
  return sign + String(hours) + delimeter + addLeadingZeros(minutes, 2)
}

function dateLongFormatter (pattern, formatLong, options) {
  switch (pattern) {
    case 'P':
      return formatLong.date({width: 'short'})
    case 'PP':
      return formatLong.date({width: 'medium'})
    case 'PPP':
      return formatLong.date({width: 'long'})
    case 'PPPP':
    default:
      return formatLong.date({width: 'full'})
  }
}

function timeLongFormatter (pattern, formatLong, options) {
  switch (pattern) {
    case 'p':
      return formatLong.time({width: 'short'})
    case 'pp':
      return formatLong.time({width: 'medium'})
    case 'ppp':
      return formatLong.time({width: 'long'})
    case 'pppp':
    default:
      return formatLong.time({width: 'full'})
  }
}

function dateTimeLongFormatter (pattern, formatLong, options) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong)
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({width: 'short'});
      break
    case 'PP':
      dateTimeFormat = formatLong.dateTime({width: 'medium'});
      break
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({width: 'long'});
      break
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({width: 'full'});
      break
  }

  return dateTimeFormat
    .replace('{{date}}', dateLongFormatter(datePattern, formatLong))
    .replace('{{time}}', timeLongFormatter(timePattern, formatLong))
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount, dirtyOptions)
}

var protectedTokens = ['D', 'DD', 'YY', 'YYYY'];

function isProtectedToken(token) {
  return protectedTokens.indexOf(token) !== -1
}

function throwProtectedError(token) {
  throw new RangeError(
    '`options.awareOfUnicodeTokens` must be set to `true` to use `' +
      token +
      '` token; see: https://git.io/fxCyr'
  )
}

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

var escapedStringRegExp = /^'(.*?)'?$/;
var doubleQuoteRegExp = /''/g;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 8     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 8     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Su            | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aaa  | AM, PM                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 1, 2, ..., 11, 0                  |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 0001, ..., 999               |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 05/29/1453                        | 7     |
 * |                                 | PP      | May 29, 1453                      | 7     |
 * |                                 | PPP     | May 29th, 1453                    | 7     |
 * |                                 | PPPP    | Sunday, May 29th, 1453            | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 05/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | May 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | May 29th, 1453 at ...             | 7     |
 * |                                 | PPPPpppp| Sunday, May 29th, 1453 at ...     | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. These tokens are often confused with others. See: https://git.io/fxCyr
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {Boolean} [options.awareOfUnicodeTokens=false] - if true, allows usage of Unicode tokens causes confusion:
 *   - Some of the day of year tokens (`D`, `DD`) that are confused with the day of month tokens (`d`, `dd`).
 *   - Some of the local week-numbering year tokens (`YY`, `YYYY`) that are confused with the calendar year tokens (`yy`, `yyyy`).
 *   See: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.awareOfUnicodeTokens` must be set to `true` to use `XX` token; see: https://git.io/fxCyr
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/dd/yyyy'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(
 *   new Date(2014, 6, 2),
 *   "do 'de' MMMM yyyy",
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(
 *   new Date(2014, 6, 2, 15),
 *   "h 'o''clock'"
 * )
 * //=> "3 o'clock"
 */
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present'
    )
  }

  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};

  var locale = options.locale || locale$1;

  var localeFirstWeekContainsDate =
    locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null
      ? 1
      : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively'
    )
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn =
    localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn =
    options.weekStartsOn == null
      ? defaultWeekStartsOn
      : toInteger(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property')
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property')
  }

  var originalDate = toDate(dirtyDate, options);

  if (!isValid(originalDate, options)) {
    return 'Invalid Date'
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset, options);

  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };

  var result = formatStr
    .match(longFormattingTokensRegExp)
    .map(function(substring) {
      var firstCharacter = substring[0];
      if (firstCharacter === 'p' || firstCharacter === 'P') {
        var longFormatter = longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong, formatterOptions)
      }
      return substring
    })
    .join('')
    .match(formattingTokensRegExp)
    .map(function(substring) {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return "'"
      }

      var firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return cleanEscapedString(substring)
      }

      var formatter = formatters[firstCharacter];
      if (formatter) {
        if (!options.awareOfUnicodeTokens && isProtectedToken(substring)) {
          throwProtectedError(substring);
        }
        return formatter(utcDate, substring, locale.localize, formatterOptions)
      }

      return substring
    })
    .join('');

  return result
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'")
}

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|String|Number} date - the date that should be after the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter (dirtyDate, dirtyDateToCompare, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
  return date.getTime() > dateToCompare.getTime()
}

/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|String|Number} date - the date that should be before the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore (dirtyDate, dirtyDateToCompare, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
  return date.getTime() < dateToCompare.getTime()
}

/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are equal
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0)
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual$1 (dirtyLeftDate, dirtyRightDate, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var dateLeft = toDate(dirtyLeftDate, dirtyOptions);
  var dateRight = toDate(dirtyRightDate, dirtyOptions);
  return dateLeft.getTime() === dateRight.getTime()
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCDay (dirtyDate, dirtyDay, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var day = toInteger(dirtyDay);

  var currentDay = date.getUTCDay();

  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCWeek (dirtyDate, dirtyWeek, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, dirtyOptions) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISODay (dirtyDate, dirtyDay, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var day = toInteger(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = toDate(dirtyDate, dirtyOptions);
  var currentDay = date.getUTCDay();

  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISOWeek (dirtyDate, dirtyISOWeek, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date, dirtyOptions) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date
}

var MILLISECONDS_IN_HOUR$1 = 3600000;
var MILLISECONDS_IN_MINUTE$2 = 60000;
var MILLISECONDS_IN_SECOND = 1000;

var numericPatterns = {
  month: /^(1[0-2]|0?\d)/, // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/, // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/, // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/, // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/, // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/, // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/, // 0 to 12
  minute: /^[0-5]?\d/, // 0 to 59
  second: /^[0-5]?\d/, // 0 to 59

  singleDigit: /^\d/, // 0 to 9
  twoDigits: /^\d{1,2}/, // 0 to 99
  threeDigits: /^\d{1,3}/, // 0 to 999
  fourDigits: /^\d{1,4}/, // 0 to 9999

  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/, // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/, // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/, // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999
};

var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function parseNumericPattern (pattern, string, valueCallback) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null
  }

  var value = parseInt(matchResult[0], 10);

  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length)
  }
}

function parseTimezonePattern (pattern, string) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null
  }

  // Input is 'Z'
  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: string.slice(1)
    }
  }

  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;

  return {
    value: sign * (
      hours * MILLISECONDS_IN_HOUR$1 +
        minutes * MILLISECONDS_IN_MINUTE$2 +
        seconds * MILLISECONDS_IN_SECOND
    ),
    rest: string.slice(matchResult[0].length)
  }
}

function parseAnyDigitsSigned (string, valueCallback) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback)
}

function parseNDigits (n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback)
    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback)
    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback)
    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback)
    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback)
  }
}

function parseNDigitsSigned (n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback)
    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback)
    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback)
    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback)
    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback)
  }
}

function dayPeriodEnumToHours (enumValue) {
  switch (enumValue) {
    case 'morning':
      return 4
    case 'evening':
      return 17
    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12
    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0
  }
}

function normalizeTwoDigitYear (twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0;
  // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC
  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;

  var result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result
}

var DAYS_IN_MONTH$1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR$1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// User for validation
function isLeapYearIndex$1 (year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */
var parsers = {
  // Era
  G: {
    priority: 140,
    parse: function (string, token, match, options) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(string, {width: 'abbreviated'}) ||
            match.era(string, {width: 'narrow'})
        // A, B
        case 'GGGGG':
          return match.era(string, {width: 'narrow'})
        // Anno Domini, Before Christ
        case 'GGGG':
        default:
          return match.era(string, {width: 'wide'}) ||
            match.era(string, {width: 'abbreviated'}) ||
            match.era(string, {width: 'narrow'})
      }
    },
    set: function (date, value, options) {
      // Sets year 10 BC if BC, or 10 AC if AC
      date.setUTCFullYear(value === 1 ? 10 : -9, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Year
  y: {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    priority: 130,
    parse: function (string, token, match, options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        }
      };

      switch (token) {
        case 'y':
          return parseNDigits(4, string, valueCallback)
        case 'yo':
          return match.ordinalNumber(string, {unit: 'year', valueCallback: valueCallback})
        default:
          return parseNDigits(token.length, string, valueCallback)
      }
    },
    validate: function (date, value, options) {
      return value.isTwoDigitYear || value.year > 0
    },
    set: function (date, value, options) {
      var currentYear = getUTCWeekYear(date, options);

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date
      }

      var year = currentYear > 0 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Local week-numbering year
  Y: {
    priority: 130,
    parse: function (string, token, match, options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        }
      };

      switch (token) {
        case 'Y':
          return parseNDigits(4, string, valueCallback)
        case 'Yo':
          return match.ordinalNumber(string, {unit: 'year', valueCallback: valueCallback})
        default:
          return parseNDigits(token.length, string, valueCallback)
      }
    },
    validate: function (date, value, options) {
      return value.isTwoDigitYear || value.year > 0
    },
    set: function (date, value, options) {
      var currentYear = date.getUTCFullYear();

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options)
      }

      var year = currentYear > 0 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek(date, options)
    }
  },

  // ISO week-numbering year
  R: {
    priority: 130,
    parse: function (string, token, match, options) {
      if (token === 'R') {
        return parseNDigitsSigned(4, string)
      }

      return parseNDigitsSigned(token.length, string)
    },
    set: function (date, value, options) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return startOfUTCISOWeek(firstWeekOfYear)
    }
  },

  // Extended year
  u: {
    priority: 130,
    parse: function (string, token, match, options) {
      if (token === 'u') {
        return parseNDigitsSigned(4, string)
      }

      return parseNDigitsSigned(token.length, string)
    },
    set: function (date, value, options) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Quarter
  Q: {
    priority: 120,
    parse: function (string, token, match, options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ': // 01, 02, 03, 04
          return parseNDigits(token.length, string)
        // 1st, 2nd, 3rd, 4th
        case 'Qo':
          return match.ordinalNumber(string, {unit: 'quarter'})
        // Q1, Q2, Q3, Q4
        case 'QQQ':
          return match.quarter(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.quarter(string, {width: 'narrow', context: 'formatting'})
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case 'QQQQQ':
          return match.quarter(string, {width: 'narrow', context: 'formatting'})
        // 1st quarter, 2nd quarter, ...
        case 'QQQQ':
        default:
          return match.quarter(string, {width: 'wide', context: 'formatting'}) ||
            match.quarter(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.quarter(string, {width: 'narrow', context: 'formatting'})
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 4
    },
    set: function (date, value, options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Stand-alone quarter
  q: {
    priority: 120,
    parse: function (string, token, match, options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq': // 01, 02, 03, 04
          return parseNDigits(token.length, string)
        // 1st, 2nd, 3rd, 4th
        case 'qo':
          return match.ordinalNumber(string, {unit: 'quarter'})
        // Q1, Q2, Q3, Q4
        case 'qqq':
          return match.quarter(string, {width: 'abbreviated', context: 'standalone'}) ||
            match.quarter(string, {width: 'narrow', context: 'standalone'})
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case 'qqqqq':
          return match.quarter(string, {width: 'narrow', context: 'standalone'})
        // 1st quarter, 2nd quarter, ...
        case 'qqqq':
        default:
          return match.quarter(string, {width: 'wide', context: 'standalone'}) ||
            match.quarter(string, {width: 'abbreviated', context: 'standalone'}) ||
            match.quarter(string, {width: 'narrow', context: 'standalone'})
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 4
    },
    set: function (date, value, options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Month
  M: {
    priority: 110,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        return value - 1
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return parseNumericPattern(numericPatterns.month, string, valueCallback)
        // 01, 02, ..., 12
        case 'MM':
          return parseNDigits(2, string, valueCallback)
        // 1st, 2nd, ..., 12th
        case 'Mo':
          return match.ordinalNumber(string, {unit: 'month', valueCallback: valueCallback})
        // Jan, Feb, ..., Dec
        case 'MMM':
          return match.month(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.month(string, {width: 'narrow', context: 'formatting'})
        // J, F, ..., D
        case 'MMMMM':
          return match.month(string, {width: 'narrow', context: 'formatting'})
        // January, February, ..., December
        case 'MMMM':
        default:
          return match.month(string, {width: 'wide', context: 'formatting'}) ||
            match.month(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.month(string, {width: 'narrow', context: 'formatting'})
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 11
    },
    set: function (date, value, options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Stand-alone month
  L: {
    priority: 110,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        return value - 1
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return parseNumericPattern(numericPatterns.month, string, valueCallback)
        // 01, 02, ..., 12
        case 'LL':
          return parseNDigits(2, string, valueCallback)
        // 1st, 2nd, ..., 12th
        case 'Lo':
          return match.ordinalNumber(string, {unit: 'month', valueCallback: valueCallback})
        // Jan, Feb, ..., Dec
        case 'LLL':
          return match.month(string, {width: 'abbreviated', context: 'standalone'}) ||
            match.month(string, {width: 'narrow', context: 'standalone'})
        // J, F, ..., D
        case 'LLLLL':
          return match.month(string, {width: 'narrow', context: 'standalone'})
        // January, February, ..., December
        case 'LLLL':
        default:
          return match.month(string, {width: 'wide', context: 'standalone'}) ||
            match.month(string, {width: 'abbreviated', context: 'standalone'}) ||
            match.month(string, {width: 'narrow', context: 'standalone'})
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 11
    },
    set: function (date, value, options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Local week of year
  w: {
    priority: 100,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, string)
        case 'wo':
          return match.ordinalNumber(string, {unit: 'week'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 53
    },
    set: function (date, value, options) {
      return startOfUTCWeek(setUTCWeek(date, value, options), options)
    }
  },

  // ISO week of year
  I: {
    priority: 100,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, string)
        case 'Io':
          return match.ordinalNumber(string, {unit: 'week'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 53
    },
    set: function (date, value, options) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value, options), options)
    }
  },

  // Day of the month
  d: {
    priority: 90,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, string)
        case 'do':
          return match.ordinalNumber(string, {unit: 'date'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex$1(year);
      var month = date.getUTCMonth();
      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR$1[month]
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH$1[month]
      }
    },
    set: function (date, value, options) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Day of year
  D: {
    priority: 90,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, string)
        case 'Do':
          return match.ordinalNumber(string, {unit: 'date'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex$1(year);
      if (isLeapYear) {
        return value >= 1 && value <= 366
      } else {
        return value >= 1 && value <= 365
      }
    },
    set: function (date, value, options) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Day of week
  E: {
    priority: 90,
    parse: function (string, token, match, options) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.day(string, {width: 'short', context: 'formatting'}) ||
            match.day(string, {width: 'narrow', context: 'formatting'})
        // T
        case 'EEEEE':
          return match.day(string, {width: 'narrow', context: 'formatting'})
        // Tu
        case 'EEEEEE':
          return match.day(string, {width: 'short', context: 'formatting'}) ||
          match.day(string, {width: 'narrow', context: 'formatting'})
        // Tuesday
        case 'EEEE':
        default:
          return match.day(string, {width: 'wide', context: 'formatting'}) ||
            match.day(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.day(string, {width: 'short', context: 'formatting'}) ||
            match.day(string, {width: 'narrow', context: 'formatting'})
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 6
    },
    set: function (date, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Local day of week
  e: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays
      };

      switch (token) {
        // 3
        case 'e':
        case 'ee': // 03
          return parseNDigits(token.length, string, valueCallback)
        // 3rd
        case 'eo':
          return match.ordinalNumber(string, {unit: 'day', valueCallback: valueCallback})
        // Tue
        case 'eee':
          return match.day(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.day(string, {width: 'short', context: 'formatting'}) ||
            match.day(string, {width: 'narrow', context: 'formatting'})
        // T
        case 'eeeee':
          return match.day(string, {width: 'narrow', context: 'formatting'})
        // Tu
        case 'eeeeee':
          return match.day(string, {width: 'short', context: 'formatting'}) ||
          match.day(string, {width: 'narrow', context: 'formatting'})
        // Tuesday
        case 'eeee':
        default:
          return match.day(string, {width: 'wide', context: 'formatting'}) ||
            match.day(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.day(string, {width: 'short', context: 'formatting'}) ||
            match.day(string, {width: 'narrow', context: 'formatting'})
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 6
    },
    set: function (date, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Stand-alone local day of week
  c: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays
      };

      switch (token) {
        // 3
        case 'c':
        case 'cc': // 03
          return parseNDigits(token.length, string, valueCallback)
        // 3rd
        case 'co':
          return match.ordinalNumber(string, {unit: 'day', valueCallback: valueCallback})
        // Tue
        case 'ccc':
          return match.day(string, {width: 'abbreviated', context: 'standalone'}) ||
            match.day(string, {width: 'short', context: 'standalone'}) ||
            match.day(string, {width: 'narrow', context: 'standalone'})
        // T
        case 'ccccc':
          return match.day(string, {width: 'narrow', context: 'standalone'})
        // Tu
        case 'cccccc':
          return match.day(string, {width: 'short', context: 'standalone'}) ||
          match.day(string, {width: 'narrow', context: 'standalone'})
        // Tuesday
        case 'cccc':
        default:
          return match.day(string, {width: 'wide', context: 'standalone'}) ||
            match.day(string, {width: 'abbreviated', context: 'standalone'}) ||
            match.day(string, {width: 'short', context: 'standalone'}) ||
            match.day(string, {width: 'narrow', context: 'standalone'})
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 6
    },
    set: function (date, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // ISO day of week
  i: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        if (value === 0) {
          return 7
        }
        return value
      };

      switch (token) {
        // 2
        case 'i':
        case 'ii': // 02
          return parseNDigits(token.length, string)
        // 2nd
        case 'io':
          return match.ordinalNumber(string, {unit: 'day'})
        // Tue
        case 'iii':
          return match.day(string, {width: 'abbreviated', context: 'formatting', valueCallback: valueCallback}) ||
            match.day(string, {width: 'short', context: 'formatting', valueCallback: valueCallback}) ||
            match.day(string, {width: 'narrow', context: 'formatting', valueCallback: valueCallback})
        // T
        case 'iiiii':
          return match.day(string, {width: 'narrow', context: 'formatting', valueCallback: valueCallback})
        // Tu
        case 'iiiiii':
          return match.day(string, {width: 'short', context: 'formatting', valueCallback: valueCallback}) ||
          match.day(string, {width: 'narrow', context: 'formatting', valueCallback: valueCallback})
        // Tuesday
        case 'iiii':
        default:
          return match.day(string, {width: 'wide', context: 'formatting', valueCallback: valueCallback}) ||
            match.day(string, {width: 'abbreviated', context: 'formatting', valueCallback: valueCallback}) ||
            match.day(string, {width: 'short', context: 'formatting', valueCallback: valueCallback}) ||
            match.day(string, {width: 'narrow', context: 'formatting', valueCallback: valueCallback})
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 7
    },
    set: function (date, value, options) {
      date = setUTCISODay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // AM or PM
  a: {
    priority: 80,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
        case 'aaaaa':
          return match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
        case 'aaaa':
        default:
          return match.dayPeriod(string, {width: 'wide', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
      }
    },
    set: function (date, value, options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date
    }
  },

  // AM, PM, midnight
  b: {
    priority: 80,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
        case 'bbbbb':
          return match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
        case 'bbbb':
        default:
          return match.dayPeriod(string, {width: 'wide', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
      }
    },
    set: function (date, value, options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: {
    priority: 80,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
        case 'BBBBB':
          return match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
        case 'BBBB':
        default:
          return match.dayPeriod(string, {width: 'wide', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
      }
    },
    set: function (date, value, options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date
    }
  },

  // Hour [1-12]
  h: {
    priority: 70,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, string)
        case 'ho':
          return match.ordinalNumber(string, {unit: 'hour'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 12
    },
    set: function (date, value, options) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date
    }
  },

  // Hour [0-23]
  H: {
    priority: 70,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, string)
        case 'Ho':
          return match.ordinalNumber(string, {unit: 'hour'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 23
    },
    set: function (date, value, options) {
      date.setUTCHours(value, 0, 0, 0);
      return date
    }
  },

  // Hour [0-11]
  K: {
    priority: 70,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, string)
        case 'Ko':
          return match.ordinalNumber(string, {unit: 'hour'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 11
    },
    set: function (date, value, options) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date
    }
  },

  // Hour [1-24]
  k: {
    priority: 70,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, string)
        case 'ko':
          return match.ordinalNumber(string, {unit: 'hour'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 24
    },
    set: function (date, value, options) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date
    }
  },

  // Minute
  m: {
    priority: 60,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, string)
        case 'mo':
          return match.ordinalNumber(string, {unit: 'minute'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 59
    },
    set: function (date, value, options) {
      date.setUTCMinutes(value, 0, 0);
      return date
    }
  },

  // Second
  s: {
    priority: 50,
    parse: function (string, token, match, options) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, string)
        case 'so':
          return match.ordinalNumber(string, {unit: 'second'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 59
    },
    set: function (date, value, options) {
      date.setUTCSeconds(value, 0);
      return date
    }
  },

  // Fraction of second
  S: {
    priority: 40,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        return Math.floor(value * Math.pow(10, -token.length + 3))
      };
      return parseNDigits(token.length, string, valueCallback)
    },
    set: function (date, value, options) {
      date.setUTCMilliseconds(value);
      return date
    }
  },

  // Timezone (ISO-8601. +00:00 is `'Z'`)
  X: {
    priority: 20,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string)
        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, string)
        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string)
        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string)
        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string)
      }
    },
    set: function (date, value, options) {
      return new Date(date.getTime() - value)
    }
  },

  // Timezone (ISO-8601)
  x: {
    priority: 20,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string)
        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, string)
        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string)
        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string)
        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string)
      }
    },
    set: function (date, value, options) {
      return new Date(date.getTime() - value)
    }
  },

  // Seconds timestamp
  t: {
    priority: 10,
    parse: function (string, token, match, options) {
      return parseAnyDigitsSigned(string)
    },
    set: function (date, value, options) {
      return new Date(value * 1000)
    }
  },

  // Milliseconds timestamp
  T: {
    priority: 10,
    parse: function (string, token, match, options) {
      return parseAnyDigitsSigned(string)
    },
    set: function (date, value, options) {
      return new Date(value)
    }
  }
};

var TIMEZONE_UNIT_PRIORITY = 20;

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

var escapedStringRegExp$1 = /^'(.*?)'?$/;
var doubleQuoteRegExp$1 = /''/g;

var notWhitespaceRegExp = /\S/;

/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 6     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 6     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Su            | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 1, 2, ..., 11, 0                  |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              |  40 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  20 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  20 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Seconds timestamp               |  10 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Milliseconds timestamp          |  10 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `baseDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *
 * 6. These tokens are often confused with others. See: https://git.io/fxCyr
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `baseDate` which works as a context of parsing.
 *
 * `baseDate` must be passed for correct work of the function.
 * If you're not sure which `baseDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `baseDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `baseDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|String|Number} baseDate - defines values missing from the parsed dateString
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.awareOfUnicodeTokens=false] - if true, allows usage of Unicode tokens causes confusion:
 *   - Some of the day of year tokens (`D`, `DD`) that are confused with the day of month tokens (`d`, `dd`).
 *   - Some of the local week-numbering year tokens (`YY`, `YYYY`) that are confused with the calendar year tokens (`yy`, `yyyy`).
 *   See: https://git.io/fxCyr
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} `options.awareOfUnicodeTokens` must be set to `true` to use `XX` token; see: https://git.io/fxCyr
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse(
 *   '02/11/2014',
 *   'MM/dd/yyyy',
 *   new Date()
 * )
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse(
 *   '28-a de februaro',
 *   "do 'de' MMMM",
 *   new Date(2010, 0, 1),
 *   {locale: eo}
 * )
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse(
  dirtyDateString,
  dirtyFormatString,
  dirtyBaseDate,
  dirtyOptions
) {
  if (arguments.length < 3) {
    throw new TypeError(
      '3 arguments required, but only ' + arguments.length + ' present'
    )
  }

  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var options = dirtyOptions || {};

  var locale = options.locale || locale$1;

  if (!locale.match) {
    throw new RangeError('locale must contain match property')
  }

  var localeFirstWeekContainsDate =
    locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null
      ? 1
      : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively'
    )
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn =
    localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn =
    options.weekStartsOn == null
      ? defaultWeekStartsOn
      : toInteger(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  if (formatString === '') {
    if (dateString === '') {
      return toDate(dirtyBaseDate, options)
    } else {
      return new Date(NaN)
    }
  }

  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale
  };

  // If timezone isn't specified, it will be set to the system timezone
  var setters = [
    {
      priority: TIMEZONE_UNIT_PRIORITY,
      set: dateToSystemTimezone,
      index: 0
    }
  ];

  var i;

  var tokens = formatString.match(formattingTokensRegExp$1);

  for (i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (!options.awareOfUnicodeTokens && isProtectedToken(token)) {
      throwProtectedError(token);
    }

    var firstCharacter = token[0];
    var parser = parsers[firstCharacter];
    if (parser) {
      var parseResult = parser.parse(
        dateString,
        token,
        locale.match,
        subFnOptions
      );

      if (!parseResult) {
        return new Date(NaN)
      }

      setters.push({
        priority: parser.priority,
        set: parser.set,
        validate: parser.validate,
        value: parseResult.value,
        index: setters.length
      });

      dateString = parseResult.rest;
    } else {
      // Replace two single quote characters with one single quote character
      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString$1(token);
      }

      // Cut token from string, or, if string doesn't match the token, return Invalid Date
      if (dateString.indexOf(token) === 0) {
        dateString = dateString.slice(token.length);
      } else {
        return new Date(NaN)
      }
    }
  }

  // Check if the remaining input contains something other than whitespace
  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN)
  }

  var uniquePrioritySetters = setters
    .map(function(setter) {
      return setter.priority
    })
    .sort(function(a, b) {
      return b - a
    })
    .filter(function(priority, index, array) {
      return array.indexOf(priority) === index
    })
    .map(function(priority) {
      return setters
        .filter(function(setter) {
          return setter.priority === priority
        })
        .reverse()
    })
    .map(function(setterArray) {
      return setterArray[0]
    });

  var date = toDate(dirtyBaseDate, options);

  if (isNaN(date)) {
    return new Date(NaN)
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37
  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));

  for (i = 0; i < uniquePrioritySetters.length; i++) {
    var setter = uniquePrioritySetters[i];

    if (
      setter.validate &&
      !setter.validate(utcDate, setter.value, subFnOptions)
    ) {
      return new Date(NaN)
    }

    utcDate = setter.set(utcDate, setter.value, subFnOptions);
  }

  return utcDate
}

function dateToSystemTimezone(date) {
  var convertedDate = new Date(0);
  convertedDate.setFullYear(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate()
  );
  convertedDate.setHours(
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  );
  return convertedDate
}

function cleanEscapedString$1(input) {
  return input.match(escapedStringRegExp$1)[1].replace(doubleQuoteRegExp$1, "'")
}

// 

/**
 * Custom parse behavior on top of date-fns parse function.
 */
function parseDate$1 (date, format$1) {
  if (typeof date !== 'string') {
    return isValid(date) ? date : null;
  }

  var parsed = parse(date, format$1, new Date());

  // if date is not valid or the formatted output after parsing does not match
  // the string value passed in (avoids overflows)
  if (!isValid(parsed) || format(parsed, format$1) !== date) {
    return null;
  }

  return parsed;
}

var afterValidator = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var targetValue = ref.targetValue;
  var inclusion = ref.inclusion; if ( inclusion === void 0 ) inclusion = false;
  var format = ref.format;

  if (typeof format === 'undefined') {
    format = inclusion;
    inclusion = false;
  }

  value = parseDate$1(value, format);
  targetValue = parseDate$1(targetValue, format);

  // if either is not valid.
  if (!value || !targetValue) {
    return false;
  }

  return isAfter(value, targetValue) || (inclusion && isEqual$1(value, targetValue));
};

var options = {
  hasTarget: true,
  isDate: true
};

// required to convert from a list of array values to an object.
var paramNames = ['targetValue', 'inclusion', 'format'];

var after = {
  validate: afterValidator,
  options: options,
  paramNames: paramNames
};

/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */

var alpha = {
  en: /^[A-Z]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[A-ZÆØÅ]*$/i,
  de: /^[A-ZÄÖÜß]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  it: /^[A-Z\xC0-\xFF]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[А-ЯЁ]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[A-ZČĆŽŠĐ]*$/i,
  sv: /^[A-ZÅÄÖ]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
  az: /^[A-ZÇƏĞİıÖŞÜ]*$/i
};

var alphaSpaces = {
  en: /^[A-Z\s]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
  da: /^[A-ZÆØÅ\s]*$/i,
  de: /^[A-ZÄÖÜß\s]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی\s]*$/,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
  it: /^[A-Z\xC0-\xFF\s]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
  ru: /^[А-ЯЁ\s]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
  sr: /^[A-ZČĆŽŠĐ\s]*$/i,
  sv: /^[A-ZÅÄÖ\s]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
  az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i
};

var alphanumeric = {
  en: /^[0-9A-Z]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[0-9A-ZÆØÅ]$/i,
  de: /^[0-9A-ZÄÖÜß]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
  fa: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  it: /^[0-9A-Z\xC0-\xFF]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[0-9А-ЯЁ]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
  sv: /^[0-9A-ZÅÄÖ]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
  az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i
};

var alphaDash = {
  en: /^[0-9A-Z_-]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
  da: /^[0-9A-ZÆØÅ_-]*$/i,
  de: /^[0-9A-ZÄÖÜß_-]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
  fa: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی_-]*$/,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
  it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
  ru: /^[0-9А-ЯЁ_-]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
  sv: /^[0-9A-ZÅÄÖ_-]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
  az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i
};

var validate = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var locale = ref.locale;

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alpha).some(function (loc) { return alpha[loc].test(value); });
  }

  return (alpha[locale] || alpha.en).test(value);
};

var paramNames$1 = ['locale'];

var alpha$1 = {
  validate: validate,
  paramNames: paramNames$1
};

var validate$1 = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var locale = ref.locale;

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$1(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphaDash).some(function (loc) { return alphaDash[loc].test(value); });
  }

  return (alphaDash[locale] || alphaDash.en).test(value);
};

var paramNames$2 = ['locale'];

var alpha_dash = {
  validate: validate$1,
  paramNames: paramNames$2
};

var validate$2 = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var locale = ref.locale;

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$2(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphanumeric).some(function (loc) { return alphanumeric[loc].test(value); });
  }

  return (alphanumeric[locale] || alphanumeric.en).test(value);
};

var paramNames$3 = ['locale'];

var alpha_num = {
  validate: validate$2,
  paramNames: paramNames$3
};

var validate$3 = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var locale = ref.locale;

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$3(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphaSpaces).some(function (loc) { return alphaSpaces[loc].test(value); });
  }

  return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};

var paramNames$4 = ['locale'];

var alpha_spaces = {
  validate: validate$3,
  paramNames: paramNames$4
};

var validate$4 = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var targetValue = ref.targetValue;
  var inclusion = ref.inclusion; if ( inclusion === void 0 ) inclusion = false;
  var format = ref.format;

  if (typeof format === 'undefined') {
    format = inclusion;
    inclusion = false;
  }

  value = parseDate$1(value, format);
  targetValue = parseDate$1(targetValue, format);

  // if either is not valid.
  if (!value || !targetValue) {
    return false;
  }

  return isBefore(value, targetValue) || (inclusion && isEqual$1(value, targetValue));
};

var options$1 = {
  hasTarget: true,
  isDate: true
};

var paramNames$5 = ['targetValue', 'inclusion', 'format'];

var before = {
  validate: validate$4,
  options: options$1,
  paramNames: paramNames$5
};

var validate$5 = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var min = ref.min;
  var max = ref.max;

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$5(val, { min: min, max: max }); });
  }

  return Number(min) <= value && Number(max) >= value;
};

var paramNames$6 = ['min', 'max'];

var between = {
  validate: validate$5,
  paramNames: paramNames$6
};

var validate$6 = function (value, ref) {
  var targetValue = ref.targetValue;

  return String(value) === String(targetValue);
};
var options$2 = {
  hasTarget: true
};

var paramNames$7 = ['targetValue'];

var confirmed = {
  validate: validate$6,
  options: options$2,
  paramNames: paramNames$7
};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var assertString_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    var invalidType;

    if (input === null) {
      invalidType = 'null';
    } else {
      invalidType = _typeof(input);

      if (invalidType === 'object' && input.constructor && input.constructor.hasOwnProperty('name')) {
        invalidType = input.constructor.name;
      } else {
        invalidType = "a ".concat(invalidType);
      }
    }

    throw new TypeError("Expected string but received ".concat(invalidType, "."));
  }
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(assertString_1);

var isCreditCard_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;

var _assertString = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString.default)(str);
  var sanitized = str.replace(/[- ]+/g, '');

  if (!creditCard.test(sanitized)) {
    return false;
  }

  var sum = 0;
  var digit;
  var tmpNum;
  var shouldDouble;

  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);

    if (shouldDouble) {
      tmpNum *= 2;

      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }

    shouldDouble = !shouldDouble;
  }

  return !!(sum % 10 === 0 ? sanitized : false);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

var isCreditCard = unwrapExports(isCreditCard_1);

var validate$7 = function (value) { return isCreditCard(String(value)); };

var credit_card = {
  validate: validate$7
};

var validate$8 = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var min = ref.min;
  var max = ref.max;
  var inclusivity = ref.inclusivity; if ( inclusivity === void 0 ) inclusivity = '()';
  var format = ref.format;

  if (typeof format === 'undefined') {
    format = inclusivity;
    inclusivity = '()';
  }

  var minDate = parseDate$1(String(min), format);
  var maxDate = parseDate$1(String(max), format);
  var dateVal = parseDate$1(String(value), format);

  if (!minDate || !maxDate || !dateVal) {
    return false;
  }

  if (inclusivity === '()') {
    return isAfter(dateVal, minDate) && isBefore(dateVal, maxDate);
  }

  if (inclusivity === '(]') {
    return isAfter(dateVal, minDate) && (isEqual$1(dateVal, maxDate) || isBefore(dateVal, maxDate));
  }

  if (inclusivity === '[)') {
    return isBefore(dateVal, maxDate) && (isEqual$1(dateVal, minDate) || isAfter(dateVal, minDate));
  }

  return isEqual$1(dateVal, maxDate) || isEqual$1(dateVal, minDate) ||
    (isBefore(dateVal, maxDate) && isAfter(dateVal, minDate));
};

var options$3 = {
  isDate: true
};

var paramNames$8 = ['min', 'max', 'inclusivity', 'format'];

var date_between = {
  validate: validate$8,
  options: options$3,
  paramNames: paramNames$8
};

var validate$9 = function (value, ref) {
  var format = ref.format;

  return !!parseDate$1(value, format);
};

var options$4 = {
  isDate: true
};

var paramNames$9 = ['format'];

var date_format = {
  validate: validate$9,
  options: options$4,
  paramNames: paramNames$9
};

var validate$a = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var decimals = ref.decimals; if ( decimals === void 0 ) decimals = '*';
  var separator = ref.separator; if ( separator === void 0 ) separator = '.';

  if (isNullOrUndefined(value) || value === '') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$a(val, { decimals: decimals, separator: separator }); });
  }

  // if is 0.
  if (Number(decimals) === 0) {
    return /^-?\d*$/.test(value);
  }

  var regexPart = decimals === '*' ? '+' : ("{1," + decimals + "}");
  var regex = new RegExp(("^[-+]?\\d*(\\" + separator + "\\d" + regexPart + ")?([eE]{1}[-]?\\d+)?$"));

  if (! regex.test(value)) {
    return false;
  }

  var parsedValue = parseFloat(value);

  // eslint-disable-next-line
  return parsedValue === parsedValue;
};

var paramNames$a = ['decimals', 'separator'];

var decimal = {
  validate: validate$a,
  paramNames: paramNames$a
};

var validate$b = function (value, ref) {
  var length = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$b(val, [length]); });
  }
  var strVal = String(value);

  return /^[0-9]*$/.test(strVal) && strVal.length === Number(length);
};

var digits = {
  validate: validate$b
};

var imageRegex = /\.(jpg|svg|jpeg|png|bmp|gif)$/i;

var validateImage = function (file, width, height) {
  var URL = window.URL || window.webkitURL;
  return new Promise(function (resolve) {
    var image = new Image();
    image.onerror = function () { return resolve({ valid: false }); };
    image.onload = function () { return resolve({
      valid: image.width === Number(width) && image.height === Number(height)
    }); };

    image.src = URL.createObjectURL(file);
  });
};

var validate$c = function (files, ref) {
  var width = ref[0];
  var height = ref[1];

  var images = ensureArray(files).filter(function (file) { return imageRegex.test(file.name); });
  if (images.length === 0) {
    return false;
  }
  return Promise.all(images.map(function (image) { return validateImage(image, width, height); }));
};

var dimensions = {
  validate: validate$c
};

var merge_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;

function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments.length > 1 ? arguments[1] : undefined;

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }

  return obj;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(merge_1);

var isByteLength_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isByteLength;

var _assertString = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString.default)(str);
  var min;
  var max;

  if (_typeof(options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }

  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isByteLength_1);

var isFQDN_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFQDN;

var _assertString = _interopRequireDefault(assertString_1);

var _merge = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFQDN(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_fqdn_options);
  /* Remove the optional trailing dot before checking validity */

  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }

  var parts = str.split('.');

  for (var i = 0; i < parts.length; i++) {
    if (parts[i].length > 63) {
      return false;
    }
  }

  if (options.require_tld) {
    var tld = parts.pop();

    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    } // disallow spaces


    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }

  for (var part, _i = 0; _i < parts.length; _i++) {
    part = parts[_i];

    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }

    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    } // disallow full-width chars


    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }

    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

var isFQDN = unwrapExports(isFQDN_1);

var isIP_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;

var _assertString = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _assertString.default)(str);
  version = String(version);

  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }

    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::
    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.

    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    } // initial or final ::


    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }

        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) ; else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }

    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }

    return blocks.length === expectedNumberOfBlocks;
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

var isIP = unwrapExports(isIP_1);

var isEmail_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = _interopRequireDefault(assertString_1);

var _merge = _interopRequireDefault(merge_1);

var _isByteLength = _interopRequireDefault(isByteLength_1);

var _isFQDN = _interopRequireDefault(isFQDN_1);

var _isIP = _interopRequireDefault(isIP_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};
/* eslint-disable max-len */

/* eslint-disable no-control-regex */

var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var gmailUserPart = /^[a-z\d]+$/;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */

/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(displayName);

    if (display_email) {
      str = display_email[1];
    } else if (options.require_display_name) {
      return false;
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');
  var lower_domain = domain.toLowerCase();

  if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
    /*
      Previously we removed dots for gmail addresses before validating.
      This was removed because it allows `multiple..dots@gmail.com`
      to be reported as valid, but it is not.
      Gmail only normalizes single dots, removing them from here is pointless,
      should be done in normalizeEmail
    */
    user = user.toLowerCase(); // Removing sub-address from username before gmail validation

    var username = user.split('+')[0]; // Dots are not included in gmail length restriction

    if (!(0, _isByteLength.default)(username.replace('.', ''), {
      min: 6,
      max: 30
    })) {
      return false;
    }

    var _user_parts = username.split('.');

    for (var i = 0; i < _user_parts.length; i++) {
      if (!gmailUserPart.test(_user_parts[i])) {
        return false;
      }
    }
  }

  if (!(0, _isByteLength.default)(user, {
    max: 64
  }) || !(0, _isByteLength.default)(domain, {
    max: 254
  })) {
    return false;
  }

  if (!(0, _isFQDN.default)(domain, {
    require_tld: options.require_tld
  })) {
    if (!options.allow_ip_domain) {
      return false;
    }

    if (!(0, _isIP.default)(domain)) {
      if (!domain.startsWith('[') || !domain.endsWith(']')) {
        return false;
      }

      var noBracketdomain = domain.substr(1, domain.length - 2);

      if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {
        return false;
      }
    }
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
  var user_parts = user.split('.');

  for (var _i = 0; _i < user_parts.length; _i++) {
    if (!pattern.test(user_parts[_i])) {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

var isEmail = unwrapExports(isEmail_1);

function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var validate$d = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var multiple = ref.multiple; if ( multiple === void 0 ) multiple = false;
  var rest = objectWithoutProperties( ref, ["multiple"] );
  var options = rest;

  if (multiple && !Array.isArray(value)) {
    value = String(value).split(',').map(function (emailStr) { return emailStr.trim(); });
  }

  var validatorOptions = assign({}, options);

  if (Array.isArray(value)) {
    return value.every(function (val) { return isEmail(String(val), validatorOptions); });
  }

  return isEmail(String(value), validatorOptions);
};

var email = {
  validate: validate$d
};

var validate$e = function (value, options) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$e(val, options); });
  }

  return toArray(options).some(function (item) {
    // eslint-disable-next-line
    return item == value;
  });
};

var included = {
  validate: validate$e
};

var validate$f = function () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return !validate$e.apply(void 0, args);
};

var excluded = {
  validate: validate$f
};

var validate$g = function (files, extensions) {
  var regex = new RegExp((".(" + (extensions.join('|')) + ")$"), 'i');
  return ensureArray(files).every(function (file) { return regex.test(file.name); });
};

var ext = {
  validate: validate$g
};

var validate$h = function (files) { return (Array.isArray(files) ? files : [files]).every(function (file) { return /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(file.name); }); };

var image = {
  validate: validate$h
};

var validate$i = function (value) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return /^-?[0-9]+$/.test(String(val)); });
  }

  return /^-?[0-9]+$/.test(String(value));
};

var integer = {
  validate: validate$i
};

var validate$j = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var version = ref.version; if ( version === void 0 ) version = 4;

  if (isNullOrUndefined(value)) {
    value = '';
  }

  if (Array.isArray(value)) {
    return value.every(function (val) { return isIP(val, version); });
  }

  return isIP(value, version);
};

var paramNames$b = ['version'];

var ip = {
  validate: validate$j,
  paramNames: paramNames$b
};

var validate$k = function (value) {
  if (isNullOrUndefined(value)) {
    value = '';
  }

  if (Array.isArray(value)) {
    return value.every(function (val) { return (isIP(val, '') || isFQDN(val)); });
  }

  return isIP(value, '') || isFQDN(value);
};

var ip_or_fqdn = {
  validate: validate$k
};

var validate$l = function (value, ref) {
  if ( ref === void 0 ) ref = [];
  var other = ref[0];

  return value === other;
};

var is = {
  validate: validate$l
};

var validate$m = function (value, ref) {
  if ( ref === void 0 ) ref = [];
  var other = ref[0];

  return value !== other;
};

var is_not = {
  validate: validate$m
};

/**
 * @param {Array|String} value
 * @param {Number} length
 * @param {Number} max
 */
var compare = function (value, length, max) {
  if (max === undefined) {
    return value.length === length;
  }

  // cast to number.
  max = Number(max);

  return value.length >= length && value.length <= max;
};

var validate$n = function (value, ref) {
  var length = ref[0];
  var max = ref[1]; if ( max === void 0 ) max = undefined;

  if (isNullOrUndefined(value)) {
    return false;
  }

  length = Number(length);
  if (typeof value === 'number') {
    value = String(value);
  }

  if (!value.length) {
    value = toArray(value);
  }

  return compare(value, length, max);
};

var length = {
  validate: validate$n
};

var validate$o = function (value, ref) {
  var length = ref[0];

  if (isNullOrUndefined(value)) {
    return length >= 0;
  }

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$o(val, [length]); });
  }

  return String(value).length <= length;
};

var max = {
  validate: validate$o
};

var validate$p = function (value, ref) {
  var max = ref[0];

  if (isNullOrUndefined(value) || value === '') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length > 0 && value.every(function (val) { return validate$p(val, [max]); });
  }

  return Number(value) <= max;
};

var max_value = {
  validate: validate$p
};

var validate$q = function (files, mimes) {
  var regex = new RegExp(((mimes.join('|').replace('*', '.+')) + "$"), 'i');
  return ensureArray(files).every(function (file) { return regex.test(file.type); });
};

var mimes = {
  validate: validate$q
};

var validate$r = function (value, ref) {
  var length = ref[0];

  if (isNullOrUndefined(value)) {
    return false;
  }

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$r(val, [length]); });
  }

  return String(value).length >= length;
};

var min = {
  validate: validate$r
};

var validate$s = function (value, ref) {
  var min = ref[0];

  if (isNullOrUndefined(value) || value === '') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length > 0 && value.every(function (val) { return validate$s(val, [min]); });
  }

  return Number(value) >= min;
};

var min_value = {
  validate: validate$s
};

var ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
var en = /^[0-9]+$/;

var validate$t = function (value) {
  var testValue = function (val) {
    var strValue = String(val);

    return en.test(strValue) || ar.test(strValue);
  };

  if (Array.isArray(value)) {
    return value.every(testValue);
  }

  return testValue(value);
};

var numeric = {
  validate: validate$t
};

var validate$u = function (value, ref) {
  var expression = ref.expression;

  if (typeof expression === 'string') {
    expression = new RegExp(expression);
  }

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$u(val, { expression: expression }); });
  }

  return expression.test(String(value));
};

var paramNames$c = ['expression'];

var regex = {
  validate: validate$u,
  paramNames: paramNames$c
};

var validate$v = function (value, ref) {
  if ( ref === void 0 ) ref = [];
  var invalidateFalse = ref[0]; if ( invalidateFalse === void 0 ) invalidateFalse = false;

  if (isNullOrUndefined(value) || isEmptyArray(value)) {
    return false;
  }

  // incase a field considers `false` as an empty value like checkboxes.
  if (value === false && invalidateFalse) {
    return false;
  }

  return !!String(value).trim().length;
};

var required = {
  validate: validate$v
};

var validate$w = function (value, ref) {
  if ( ref === void 0 ) ref = [];
  var otherFieldVal = ref[0];
  var possibleVals = ref.slice(1);

  var required = possibleVals.includes(String(otherFieldVal).trim());

  if (!required) {
    return {
      valid: true,
      data: {
        required: required
      }
    };
  }

  var invalid = (isEmptyArray(value) || [false, null, undefined].includes(value));

  invalid = invalid || !String(value).trim().length;

  return {
    valid: !invalid,
    data: {
      required: required
    }
  };
};

var options$5 = {
  hasTarget: true,
  computesRequired: true
};

var required_if = {
  validate: validate$w,
  options: options$5
};

var validate$x = function (files, ref) {
  var size = ref[0];

  if (isNaN(size)) {
    return false;
  }
  var nSize = Number(size) * 1024;
  return ensureArray(files).every(function (file) { return file.size <= nSize; });
};

var size = {
  validate: validate$x
};

var isURL_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;

var _assertString = _interopRequireDefault(assertString_1);

var _isFQDN = _interopRequireDefault(isFQDN_1);

var _isIP = _interopRequireDefault(isIP_1);

var _merge = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};
var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];

    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }

  return false;
}

function isURL(url, options) {
  (0, _assertString.default)(url);

  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }

  if (url.indexOf('mailto:') === 0) {
    return false;
  }

  options = (0, _merge.default)(options, default_url_options);
  var protocol, auth, host, hostname, port, port_str, split, ipv6;
  split = url.split('#');
  url = split.shift();
  split = url.split('?');
  url = split.shift();
  split = url.split('://');

  if (split.length > 1) {
    protocol = split.shift().toLowerCase();

    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (url.substr(0, 2) === '//') {
    if (!options.allow_protocol_relative_urls) {
      return false;
    }

    split[0] = url.substr(2);
  }

  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');

  if (split.length > 1) {
    if (options.disallow_auth) {
      return false;
    }

    auth = split.shift();

    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }

  hostname = split.join('@');
  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);

  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();

    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);

    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }

  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

var isURL = unwrapExports(isURL_1);

var validate$y = function (value, options) {
  if ( options === void 0 ) options = {};

  if (isNullOrUndefined(value)) {
    value = '';
  }

  var validatorOptions = assign({}, options);

  if (Array.isArray(value)) {
    return value.every(function (val) { return isURL(val, validatorOptions); });
  }

  return isURL(value, validatorOptions);
};

var url = {
  validate: validate$y
};

/* eslint-disable camelcase */

var Rules = /*#__PURE__*/Object.freeze({
  after: after,
  alpha_dash: alpha_dash,
  alpha_num: alpha_num,
  alpha_spaces: alpha_spaces,
  alpha: alpha$1,
  before: before,
  between: between,
  confirmed: confirmed,
  credit_card: credit_card,
  date_between: date_between,
  date_format: date_format,
  decimal: decimal,
  digits: digits,
  dimensions: dimensions,
  email: email,
  ext: ext,
  image: image,
  included: included,
  integer: integer,
  length: length,
  ip: ip,
  ip_or_fqdn: ip_or_fqdn,
  is_not: is_not,
  is: is,
  max: max,
  max_value: max_value,
  mimes: mimes,
  min: min,
  min_value: min_value,
  excluded: excluded,
  numeric: numeric,
  regex: regex,
  required: required,
  required_if: required_if,
  size: size,
  url: url
});

// 

var normalize = function (fields) {
  if (Array.isArray(fields)) {
    return fields.reduce(function (prev, curr) {
      if (includes(curr, '.')) {
        prev[curr.split('.')[1]] = curr;
      } else {
        prev[curr] = curr;
      }

      return prev;
    }, {});
  }

  return fields;
};

// Combines two flags using either AND or OR depending on the flag type.
var combine = function (lhs, rhs) {
  var mapper = {
    pristine: function (lhs, rhs) { return lhs && rhs; },
    dirty: function (lhs, rhs) { return lhs || rhs; },
    touched: function (lhs, rhs) { return lhs || rhs; },
    untouched: function (lhs, rhs) { return lhs && rhs; },
    valid: function (lhs, rhs) { return lhs && rhs; },
    invalid: function (lhs, rhs) { return lhs || rhs; },
    pending: function (lhs, rhs) { return lhs || rhs; },
    required: function (lhs, rhs) { return lhs || rhs; },
    validated: function (lhs, rhs) { return lhs && rhs; }
  };

  return Object.keys(mapper).reduce(function (flags, flag) {
    flags[flag] = mapper[flag](lhs[flag], rhs[flag]);

    return flags;
  }, {});
};

var mapScope = function (scope, deep) {
  if ( deep === void 0 ) deep = true;

  return Object.keys(scope).reduce(function (flags, field) {
    if (!flags) {
      flags = assign({}, scope[field]);
      return flags;
    }

    // scope.
    var isScope = field.indexOf('$') === 0;
    if (deep && isScope) {
      return combine(mapScope(scope[field]), flags);
    } else if (!deep && isScope) {
      return flags;
    }

    flags = combine(flags, scope[field]);

    return flags;
  }, null);
};

/**
 * Maps fields to computed functions.
 */
var mapFields = function (fields) {
  if (!fields) {
    return function () {
      return mapScope(this.$validator.flags);
    };
  }

  var normalized = normalize(fields);
  return Object.keys(normalized).reduce(function (prev, curr) {
    var field = normalized[curr];
    prev[curr] = function mappedField () {
      // if field exists
      if (this.$validator.flags[field]) {
        return this.$validator.flags[field];
      }

      // scopeless fields were selected.
      if (normalized[curr] === '*') {
        return mapScope(this.$validator.flags, false);
      }

      // if it has a scope defined
      var index = field.indexOf('.');
      if (index <= 0) {
        return {};
      }

      var ref = field.split('.');
      var scope = ref[0];
      var name = ref.slice(1);

      scope = this.$validator.flags[("$" + scope)];
      name = name.join('.');

      // an entire scope was selected: scope.*
      if (name === '*' && scope) {
        return mapScope(scope);
      }

      if (scope && scope[name]) {
        return scope[name];
      }

      return {};
    };

    return prev;
  }, {});
};

var $validator = null;

var PROVIDER_COUNTER = 0;

var ValidationProvider = {
  $__veeInject: false,
  inject: {
    $_veeObserver: {
      from: '$_veeObserver',
      default: function default$1 () {
        if (!this.$vnode.context.$_veeObserver) {
          this.$vnode.context.$_veeObserver = createObserver();
        }

        return this.$vnode.context.$_veeObserver;
      }
    }
  },
  props: {
    vid: {
      type: [String, Number],
      default: function () {
        PROVIDER_COUNTER++;

        return ("_vee_" + PROVIDER_COUNTER);
      }
    },
    name: {
      type: String,
      default: null
    },
    mode: {
      type: [String, Function],
      default: function () {
        return getConfig().mode;
      }
    },
    events: {
      type: Array,
      validate: function () {
        /* istanbul ignore next */
        if (true) {
          warn('events prop and config will be deprecated in future version please use the interaction modes instead');
        }

        return true;
      },
      default: function () {
        var events = getConfig().events;
        if (typeof events === 'string') {
          return events.split('|');
        }

        return events;
      }
    },
    rules: {
      type: [Object, String],
      default: null
    },
    immediate: {
      type: Boolean,
      default: false
    },
    persist: {
      type: Boolean,
      default: false
    },
    bails: {
      type: Boolean,
      default: function () { return getConfig().fastExit; }
    },
    debounce: {
      type: Number,
      default: function () { return getConfig().delay || 0; }
    },
    tag: {
      type: String,
      default: 'span'
    },
    slim: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    rules: {
      deep: true,
      handler: function handler (val, oldVal) {
        this._needsValidation = !isEqual(val, oldVal);
      }
    }
  },
  data: function () { return ({
    messages: [],
    value: undefined,
    initialized: false,
    initialValue: undefined,
    flags: createFlags(),
    failedRules: {},
    forceRequired: false,
    isDeactivated: false,
    id: null
  }); },
  computed: {
    isValid: function isValid () {
      return this.flags.valid;
    },
    fieldDeps: function fieldDeps () {
      var this$1 = this;

      var rules = normalizeRules(this.rules);

      return Object.keys(rules).filter(RuleContainer.isTargetRule).map(function (rule) {
        var depName = rules[rule][0];
        watchCrossFieldDep(this$1, depName);

        return depName;
      });
    },
    normalizedEvents: function normalizedEvents () {
      var this$1 = this;

      var ref = computeModeSetting(this);
      var on = ref.on;

      return normalizeEvents(on || this.events || []).map(function (e) {
        if (e === 'input') {
          return this$1._inputEventName;
        }

        return e;
      });
    },
    isRequired: function isRequired () {
      var rules = normalizeRules(this.rules);
      var forceRequired = this.forceRequired;

      var isRequired = rules.required || forceRequired;
      this.flags.required = isRequired;

      return isRequired;
    },
    classes: function classes () {
      var this$1 = this;

      var names = getConfig().classNames;
      return Object.keys(this.flags).reduce(function (classes, flag) {
        var className = (names && names[flag]) || flag;
        if (isNullOrUndefined(this$1.flags[flag])) {
          return classes;
        }

        if (className) {
          classes[className] = this$1.flags[flag];
        }

        return classes;
      }, {});
    }
  },
  render: function render (h) {
    var this$1 = this;

    this.registerField();
    var ctx = createValidationCtx(this);

    // Gracefully handle non-existent scoped slots.
    var slot = this.$scopedSlots.default;
    /* istanbul ignore next */
    if (!isCallable(slot)) {
      if (true) {
        warn('ValidationProvider expects a scoped slot. Did you forget to add "v-slot" to your slot?');
      }

      return h(this.tag, this.$slots.default);
    }

    var nodes = slot(ctx);
    // Handle single-root slot.
    extractVNodes(nodes).forEach(function (input) {
      addListeners.call(this$1, input);
    });

    return this.slim ? createRenderless(h, nodes) : h(this.tag, nodes);
  },
  beforeDestroy: function beforeDestroy () {
    // cleanup reference.
    this.$_veeObserver.unsubscribe(this);
  },
  activated: function activated () {
    this.$_veeObserver.subscribe(this);
    this.isDeactivated = false;
  },
  deactivated: function deactivated () {
    this.$_veeObserver.unsubscribe(this);
    this.isDeactivated = true;
  },
  methods: {
    setFlags: function setFlags (flags) {
      var this$1 = this;

      Object.keys(flags).forEach(function (flag) {
        this$1.flags[flag] = flags[flag];
      });
    },
    syncValue: function syncValue (e) {
      var value = normalizeValue$1(e);
      this.value = value;
      this.flags.changed = this.initialValue !== value;
    },
    reset: function reset () {
      this.messages = [];
      this._pendingValidation = null;
      this.initialValue = this.value;
      var flags = createFlags();
      this.setFlags(flags);
    },
    validate: function validate () {
      var this$1 = this;
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (args.length > 0) {
        this.syncValue(args[0]);
      }

      return this.validateSilent().then(function (result) {
        this$1.applyResult(result);

        return result;
      });
    },
    validateSilent: function validateSilent () {
      var this$1 = this;

      this.setFlags({ pending: true });

      return $validator.verify(this.value, this.rules, {
        name: this.name,
        values: createValuesLookup(this),
        bails: this.bails
      }).then(function (result) {
        this$1.setFlags({ pending: false });
        if (!this$1.isRequired) {
          this$1.setFlags({ valid: result.valid, invalid: !result.valid });
        }

        return result;
      });
    },
    applyResult: function applyResult (ref) {
      var errors = ref.errors;
      var failedRules = ref.failedRules;

      this.messages = errors;
      this.failedRules = assign({}, failedRules);
      this.setFlags({
        valid: !errors.length,
        changed: this.value !== this.initialValue,
        invalid: !!errors.length,
        validated: true
      });
    },
    registerField: function registerField () {
      if (!$validator) {
        $validator = getValidator() || new Validator(null, { fastExit: getConfig().fastExit });
      }

      updateRenderingContextRefs(this);
    }
  }
};

function createValidationCtx (ctx) {
  return {
    errors: ctx.messages,
    flags: ctx.flags,
    classes: ctx.classes,
    valid: ctx.isValid,
    failedRules: ctx.failedRules,
    reset: function () { return ctx.reset(); },
    validate: function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      return ctx.validate.apply(ctx, args);
  },
    aria: {
      'aria-invalid': ctx.flags.invalid ? 'true' : 'false',
      'aria-required': ctx.isRequired ? 'true' : 'false'
    }
  };
}

function normalizeValue$1 (value) {
  if (isEvent(value)) {
    return value.target.type === 'file' ? toArray(value.target.files) : value.target.value;
  }

  return value;
}

/**
 * Determines if a provider needs to run validation.
 */
function shouldValidate (ctx, model) {
  // when an immediate/initial validation is needed and wasn't done before.
  if (!ctx._ignoreImmediate && ctx.immediate) {
    return true;
  }

  // when the value changes for whatever reason.
  if (ctx.value !== model.value) {
    return true;
  }

  // when it needs validation due to props/cross-fields changes.
  if (ctx._needsValidation) {
    return true;
  }

  // when the initial value is undefined and the field wasn't rendered yet.
  if (!ctx.initialized && model.value === undefined) {
    return true;
  }

  return false;
}

function computeModeSetting (ctx) {
  var compute = isCallable(ctx.mode) ? ctx.mode : modes[ctx.mode];

  return compute({
    errors: ctx.messages,
    value: ctx.value,
    flags: ctx.flags
  });
}

function onRenderUpdate (model) {
  if (!this.initialized) {
    this.initialValue = model.value;
  }

  var validateNow = shouldValidate(this, model);
  this._needsValidation = false;
  this.value = model.value;
  this._ignoreImmediate = true;

  if (!validateNow) {
    return;
  }

  this.validateSilent().then(this.immediate || this.flags.validated ? this.applyResult : function (x) { return x; });
}

// Creates the common handlers for a validatable context.
function createCommonHandlers (ctx) {
  var onInput = function (e) {
    ctx.syncValue(e); // track and keep the value updated.
    ctx.setFlags({ dirty: true, pristine: false });
  };

  // Blur event listener.
  var onBlur = function () {
    ctx.setFlags({ touched: true, untouched: false });
  };

  var onValidate = ctx.$veeHandler;
  var mode = computeModeSetting(ctx);

  // Handle debounce changes.
  if (!onValidate || ctx.$veeDebounce !== ctx.debounce) {
    onValidate = debounce(
      function () {
        ctx.$nextTick(function () {
          var pendingPromise = ctx.validateSilent();
          // avoids race conditions between successive validations.
          ctx._pendingValidation = pendingPromise;
          pendingPromise.then(function (result) {
            if (pendingPromise === ctx._pendingValidation) {
              ctx.applyResult(result);
              ctx._pendingValidation = null;
            }
          });
        });
      },
      mode.debounce || ctx.debounce
    );

    // Cache the handler so we don't create it each time.
    ctx.$veeHandler = onValidate;
    // cache the debounce value so we detect if it was changed.
    ctx.$veeDebounce = ctx.debounce;
  }

  return { onInput: onInput, onBlur: onBlur, onValidate: onValidate };
}

// Adds all plugin listeners to the vnode.
function addListeners (node) {
  var model = findModel(node);
  // cache the input eventName.
  this._inputEventName = this._inputEventName || getInputEventName(node, model);

  onRenderUpdate.call(this, model);

  var ref = createCommonHandlers(this);
  var onInput = ref.onInput;
  var onBlur = ref.onBlur;
  var onValidate = ref.onValidate;
  addVNodeListener(node, this._inputEventName, onInput);
  addVNodeListener(node, 'blur', onBlur);

  // add the validation listeners.
  this.normalizedEvents.forEach(function (evt) {
    addVNodeListener(node, evt, onValidate);
  });

  this.initialized = true;
}

function createValuesLookup (ctx) {
  var providers = ctx.$_veeObserver.refs;

  return ctx.fieldDeps.reduce(function (acc, depName) {
    if (!providers[depName]) {
      return acc;
    }

    acc[depName] = providers[depName].value;

    return acc;
  }, {});
}

function updateRenderingContextRefs (ctx) {
  // IDs should not be nullable.
  if (isNullOrUndefined(ctx.id) && ctx.id === ctx.vid) {
    ctx.id = PROVIDER_COUNTER;
    PROVIDER_COUNTER++;
  }

  var id = ctx.id;
  var vid = ctx.vid;
  // Nothing has changed.
  if (ctx.isDeactivated || (id === vid && ctx.$_veeObserver.refs[id])) {
    return;
  }

  // vid was changed.
  if (id !== vid && ctx.$_veeObserver.refs[id] === ctx) {
    ctx.$_veeObserver.unsubscribe({ vid: id });
  }

  ctx.$_veeObserver.subscribe(ctx);
  ctx.id = vid;
}

function createObserver () {
  return {
    refs: {},
    subscribe: function subscribe (ctx) {
      this.refs[ctx.vid] = ctx;
    },
    unsubscribe: function unsubscribe (ctx) {
      delete this.refs[ctx.vid];
    }
  };
}

function watchCrossFieldDep (ctx, depName, withHooks) {
  if ( withHooks === void 0 ) withHooks = true;

  var providers = ctx.$_veeObserver.refs;
  if (!ctx._veeWatchers) {
    ctx._veeWatchers = {};
  }

  if (!providers[depName] && withHooks) {
    return ctx.$once('hook:mounted', function () {
      watchCrossFieldDep(ctx, depName, false);
    });
  }

  if (!isCallable(ctx._veeWatchers[depName]) && providers[depName]) {
    ctx._veeWatchers[depName] = providers[depName].$watch('value', function () {
      if (ctx.flags.validated) {
        ctx._needsValidation = true;
        ctx.validate();
      }
    });
  }
}

var flagMergingStrategy = {
  pristine: 'every',
  dirty: 'some',
  touched: 'some',
  untouched: 'every',
  valid: 'every',
  invalid: 'some',
  pending: 'some',
  validated: 'every'
};

function mergeFlags (lhs, rhs, strategy) {
  var stratName = flagMergingStrategy[strategy];

  return [lhs, rhs][stratName](function (f) { return f; });
}

var OBSERVER_COUNTER = 0;

var ValidationObserver = {
  name: 'ValidationObserver',
  provide: function provide () {
    return {
      $_veeObserver: this
    };
  },
  inject: {
    $_veeObserver: {
      from: '$_veeObserver',
      default: function default$1 () {
        if (!this.$vnode.context.$_veeObserver) {
          return null;
        }

        return this.$vnode.context.$_veeObserver;
      }
    }
  },
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    slim: {
      type: Boolean,
      default: false
    }
  },
  data: function () { return ({
    vid: ("obs_" + (OBSERVER_COUNTER++)),
    refs: {},
    observers: [],
    persistedStore: {}
  }); },
  computed: {
    ctx: function ctx () {
      var this$1 = this;

      var ctx = {
        errors: {},
        validate: function (arg) {
          var promise = this$1.validate(arg);

          return {
            then: function then (thenable) {
              return promise.then(function (success) {
                if (success && isCallable(thenable)) {
                  return Promise.resolve(thenable());
                }

                return Promise.resolve(success);
              });
            }
          };
        },
        reset: function () { return this$1.reset(); }
      };

      return values(this.refs).concat( Object.keys(this.persistedStore).map(function (key) {
          return {
            vid: key,
            flags: this$1.persistedStore[key].flags,
            messages: this$1.persistedStore[key].errors
          };
        }),
        this.observers ).reduce(function (acc, provider) {
        Object.keys(flagMergingStrategy).forEach(function (flag) {
          var flags = provider.flags || provider.ctx;
          if (!(flag in acc)) {
            acc[flag] = flags[flag];
            return;
          }

          acc[flag] = mergeFlags(acc[flag], flags[flag], flag);
        });

        acc.errors[provider.vid] = provider.messages || values(provider.ctx.errors).reduce(function (errs, obsErrors) {
          return errs.concat(obsErrors);
        }, []);

        return acc;
      }, ctx);
    }
  },
  created: function created () {
    if (this.$_veeObserver) {
      this.$_veeObserver.subscribe(this, 'observer');
    }
  },
  activated: function activated () {
    if (this.$_veeObserver) {
      this.$_veeObserver.subscribe(this, 'observer');
    }
  },
  deactivated: function deactivated () {
    if (this.$_veeObserver) {
      this.$_veeObserver.unsubscribe(this, 'observer');
    }
  },
  beforeDestroy: function beforeDestroy () {
    if (this.$_veeObserver) {
      this.$_veeObserver.unsubscribe(this, 'observer');
    }
  },
  render: function render (h) {
    var slots = this.$slots.default || this.$scopedSlots.default || [];
    if (isCallable(slots)) {
      slots = slots(this.ctx);
    }

    return this.slim ? createRenderless(h, slots) : h(this.tag, { on: this.$listeners, attrs: this.$attrs }, slots);
  },
  methods: {
    subscribe: function subscribe (subscriber, kind) {
      var obj;

      if ( kind === void 0 ) kind = 'provider';
      if (kind === 'observer') {
        this.observers.push(subscriber);
        return;
      }

      this.refs = Object.assign({}, this.refs, ( obj = {}, obj[subscriber.vid] = subscriber, obj ));
      if (subscriber.persist && this.persistedStore[subscriber.vid]) {
        this.restoreProviderState(subscriber);
      }
    },
    unsubscribe: function unsubscribe (ref, kind) {
      var vid = ref.vid;
      if ( kind === void 0 ) kind = 'provider';

      if (kind === 'provider') {
        this.removeProvider(vid);
      }

      var idx = findIndex(this.observers, function (o) { return o.vid === vid; });
      if (idx !== -1) {
        this.observers.splice(idx, 1);
      }
    },
    validate: function validate (ref) {
      if ( ref === void 0 ) ref = { silent: false };
      var silent = ref.silent;

      return Promise.all(values(this.refs).map(function (ref) { return ref[silent ? 'validateSilent' : 'validate']().then(function (r) { return r.valid; }); }).concat( this.observers.map(function (obs) { return obs.validate({ silent: silent }); })
      )).then(function (results) { return results.every(function (r) { return r; }); });
    },
    reset: function reset () {
      var this$1 = this;

      Object.keys(this.persistedStore).forEach(function (key) {
        this$1.$delete(this$1.persistedStore, key);
      });
      return values(this.refs).concat( this.observers).forEach(function (ref) { return ref.reset(); });
    },
    restoreProviderState: function restoreProviderState (provider) {
      var state = this.persistedStore[provider.vid];
      provider.setFlags(state.flags);
      provider.applyResult(state);
      this.$delete(this.persistedStore, provider.vid);
    },
    removeProvider: function removeProvider (vid) {
      var obj;

      var provider = this.refs[vid];
      // save it for the next time.
      if (provider && provider.persist) {
        /* istanbul ignore else */
        if (true) {
          if (vid.indexOf('_vee_') === 0) {
            warn('Please provide a `vid` prop when using `persist`, there might be unexpected issues otherwise.');
          }
        }

        this.persistedStore = assign({}, this.persistedStore, ( obj = {}, obj[vid] = {
            flags: provider.flags,
            errors: provider.messages,
            failedRules: provider.failedRules
          }, obj ));
      }

      this.$delete(this.refs, vid);
    },
  }
};

function withValidation (component, ctxToProps) {
  if ( ctxToProps === void 0 ) ctxToProps = null;

  var options = isCallable(component) ? component.options : component;
  options.$__veeInject = false;
  var hoc = {
    name: ((options.name || 'AnonymousHoc') + "WithValidation"),
    props: assign({}, ValidationProvider.props),
    data: ValidationProvider.data,
    computed: assign({}, ValidationProvider.computed),
    methods: assign({}, ValidationProvider.methods),
    $__veeInject: false,
    beforeDestroy: ValidationProvider.beforeDestroy,
    inject: ValidationProvider.inject
  };

  // Default ctx converts ctx props to component props.
  if (!ctxToProps) {
    ctxToProps = function (ctx) { return ctx; };
  }

  var eventName = (options.model && options.model.event) || 'input';

  hoc.render = function (h) {
    var obj;

    this.registerField();
    var vctx = createValidationCtx(this);
    var listeners = assign({}, this.$listeners);

    var model = findModel(this.$vnode);
    this._inputEventName = this._inputEventName || getInputEventName(this.$vnode, model);
    onRenderUpdate.call(this, model);

    var ref = createCommonHandlers(this);
    var onInput = ref.onInput;
    var onBlur = ref.onBlur;
    var onValidate = ref.onValidate;

    mergeVNodeListeners(listeners, eventName, onInput);
    mergeVNodeListeners(listeners, 'blur', onBlur);
    this.normalizedEvents.forEach(function (evt, idx) {
      mergeVNodeListeners(listeners, evt, onValidate);
    });

    // Props are any attrs not associated with ValidationProvider Plus the model prop.
    // WARNING: Accidental prop overwrite will probably happen.
    var ref$1 = findModelConfig(this.$vnode) || { prop: 'value' };
    var prop = ref$1.prop;
    var props = assign({}, this.$attrs, ( obj = {}, obj[prop] = model.value, obj ), ctxToProps(vctx));

    return h(options, {
      attrs: this.$attrs,
      props: props,
      on: listeners
    }, normalizeSlots(this.$slots, this.$vnode.context));
  };

  return hoc;
}

var version = '2.2.15';

Object.keys(Rules).forEach(function (rule) {
  Validator.extend(rule, Rules[rule].validate, assign({}, Rules[rule].options, { paramNames: Rules[rule].paramNames }));
});

// Merge the english messages.
Validator.localize({ en: locale });

var install = VeeValidate$1.install;

VeeValidate$1.version = version;
VeeValidate$1.mapFields = mapFields;
VeeValidate$1.ValidationProvider = ValidationProvider;
VeeValidate$1.ValidationObserver = ValidationObserver;
VeeValidate$1.withValidation = withValidation;

/* harmony default export */ __webpack_exports__["default"] = (VeeValidate$1);



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditChannel.vue?vue&type=template&id=5ccc2dfe&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditChannel.vue?vue&type=template&id=5ccc2dfe& ***!
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
    _c("div", { staticClass: "row mb-5 mx-auto" }, [
      _c("div", { staticClass: "col-sm-4" }, [_c("icon")], 1),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-8" }, [_c("cover")], 1)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-4 mb-5" }, [_c("website")], 1),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-8" }, [_c("description")], 1)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container mt-5" }, [_c("infrastructure")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-5" }, [
      _c("div", { staticClass: "col-sm-6" }, [_c("standard")], 1),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6" }, [_c("board")], 1)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-5" }, [
      _c("div", { staticClass: "col-sm-6 mb-5" }, [_c("social")], 1),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-sm-6" },
        [_c("college", { attrs: { channel: _vm.channelData } })],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/board.vue?vue&type=template&id=7833fcc2&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/board.vue?vue&type=template&id=7833fcc2& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    _c("h4", [_vm._v("School Boards")]),
    _vm._v(" "),
    _vm.userData != null && _vm.boardDataStatus === true
      ? _c(
          "div",
          [
            _vm._l(_vm.userData, function(board, index) {
              return _c(
                "button",
                { key: index, staticClass: "btn btn-info m-1" },
                [_vm._v("\n      " + _vm._s(board.name) + "\n    ")]
              )
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn",
                on: {
                  click: function($event) {
                    return _vm.editTheboard()
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
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.boardDataStatus === false
      ? _c(
          "div",
          [
            _c("multiselect", {
              attrs: {
                options: _vm.boardData,
                "track-by": "name",
                "custom-label": _vm.boardNameOnly,
                multiple: true,
                "tag-placeholder": "Select classes of your institute",
                "option-height": 104
              },
              model: {
                value: _vm.value,
                callback: function($$v) {
                  _vm.value = $$v
                },
                expression: "value"
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btnsubmit",
                attrs: { type: "submit" },
                on: {
                  click: function($event) {
                    return _vm.submitStandardData()
                  }
                }
              },
              [_vm._v("\n      Submit\n    ")]
            )
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("br")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/college.vue?vue&type=template&id=7c156f90&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/college.vue?vue&type=template&id=7c156f90& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    _c("div", [
      _c("h4", [_vm._v("Your Gallery (First five photos will be displayed)")]),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "nav" },
        _vm._l(_vm.channelData.college_image, function(image, index) {
          return _c("li", { key: index, staticClass: "m-2" }, [
            _c("img", {
              staticClass: "border border-light m-1",
              attrs: {
                src:
                  _vm.domainUrl +
                  "/media/channel/" +
                  _vm.userId +
                  "/college/" +
                  image.image_path,
                height: "120",
                width: "120",
                alt: "college infrastructure"
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-danger",
                on: {
                  click: function($event) {
                    return _vm.deleteCollege(image, index)
                  }
                }
              },
              [_vm._v("\n          Delete\n        ")]
            )
          ])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    !_vm.collegeImageEntry
      ? _c(
          "button",
          {
            staticClass: "btn btnsubmit rounded-0",
            on: {
              click: function($event) {
                return _vm.insertImage()
              }
            }
          },
          [_vm._v("\n    Insert images\n  ")]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.collegeImageEntry
      ? _c(
          "div",
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
                  drag: "Upload Infrastructure images"
                },
                name: "image"
              },
              on: { change: _vm.onChange }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "btnsuca mt-2 text-center" }, [
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
              _vm.collegeImageEntry
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
                      _vm._v(" Cancel\n      ")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/cover.vue?vue&type=template&id=ccb8d420&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/cover.vue?vue&type=template&id=ccb8d420&scoped=true& ***!
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
    _vm.userImageStatus
      ? _c("div", [
          _c("img", {
            attrs: {
              height: "150",
              width: "250",
              src:
                _vm.userImage === "institute-cover-default.jpg"
                  ? "/images/" + _vm.userImage
                  : "/media/channel/" + _vm.userId + "/cover/" + _vm.userImage,
              alt: "icon image"
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn",
              on: {
                click: function($event) {
                  return _vm.editTheIcon()
                }
              }
            },
            [
              _c("i", {
                staticClass: "fa fa-pencil",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" Change Cover Photo\n    ")
            ]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.userImageStatus === false
      ? _c(
          "div",
          [
            _c("picture-input", {
              ref: "pictureInput",
              attrs: {
                width: "250",
                height: "150",
                margin: "16",
                accept: "image/jpeg, image/png",
                size: "10",
                "button-class": "btn",
                "custom-strings": {
                  upload: "<h1>Bummer!</h1>",
                  drag: "Upload a cover picture"
                }
              },
              on: { change: _vm.onChange }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "btnsuca mt-2" }, [
              _vm.imageData != ""
                ? _c(
                    "button",
                    {
                      staticClass: "btn btnsubmitcover rounded-0",
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
              _vm.userImage != null
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
                staticClass: "text-danger"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/description.vue?vue&type=template&id=4ad50216&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/description.vue?vue&type=template&id=4ad50216&scoped=true& ***!
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
  return _c("div", [
    _vm.descriptionStatus
      ? _c("div", { staticClass: "desctext shadow" }, [
          _c("h4", { staticClass: "pl-2" }, [_vm._v("Institute Description:")]),
          _vm._v(" "),
          _c("p", { staticClass: "pl-2" }, [
            _vm._v(_vm._s(_vm.descriptionFromServer))
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btnwebdes rounded-0",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  return _vm.editDescription()
                }
              }
            },
            [
              _c("i", {
                staticClass: "fa fa-pencil",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" Edit Description\n    ")
            ]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.descriptionStatus === false
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
                staticClass: "form-group",
                class: {
                  "has-error":
                    _vm.errors.has("descriptionError") ||
                    _vm.descriptionError != ""
                }
              },
              [
                _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                  _vm._v("Describe Your Institute")
                ]),
                _vm._v(" "),
                _c("textarea", {
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
                  class: {
                    "form-control": true,
                    "is-invalid": _vm.errors.has("description")
                  },
                  attrs: {
                    rows: "5",
                    id: "description",
                    "data-vv-delay": "20",
                    name: "description",
                    type: "text",
                    placeholder: "Briefly describe your institute"
                  },
                  domProps: { value: _vm.formData.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.formData, "description", $event.target.value)
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
                        value: _vm.errors.has("description"),
                        expression: "errors.has('description')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.errors.first("description")) +
                        "\n      "
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
                        value: _vm.descriptionError != "",
                        expression: "descriptionError != ''"
                      }
                    ],
                    staticClass: "help is-danger"
                  },
                  [
                    _vm._v(
                      "\n        " + _vm._s(_vm.descriptionError) + "\n      "
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _vm.descriptionFromServer != ""
              ? _c(
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
                  [
                    _c("i", {
                      staticClass: "fa fa-long-arrow-left mt-n2 p-1",
                      attrs: { "aria-hidden": "true" }
                    }),
                    _vm._v("Back\n    ")
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btnsubmit mt-n3", attrs: { type: "submit" } },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/icon.vue?vue&type=template&id=d9ed4160&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/icon.vue?vue&type=template&id=d9ed4160&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      ? _c("div", [
          _c("img", {
            attrs: {
              height: "150",
              width: "152",
              src:
                _vm.userImage === "institute-logo-default.jpg"
                  ? "/images/" + _vm.userImage
                  : "/media/channel/" + _vm.userId + "/avatar/" + _vm.userImage,
              alt: "icon image"
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn",
              on: {
                click: function($event) {
                  return _vm.editTheIcon()
                }
              }
            },
            [
              _c("i", {
                staticClass: "fa fa-pencil",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" Change Logo\n    ")
            ]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.userImageStatus === false
      ? _c(
          "div",
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
                  drag: "Upload your logo"
                },
                name: "image"
              },
              on: { change: _vm.onChange }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "btnsuca mt-2" }, [
              _vm.imageData != ""
                ? _c(
                    "button",
                    {
                      staticClass: "btn btnsubmiticon rounded-0",
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
              _vm.userImage != null
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
                staticClass: "text-danger"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/infrastructure.vue?vue&type=template&id=3138e0ba&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/infrastructure.vue?vue&type=template&id=3138e0ba& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    !_vm.infrastructureStatus
      ? _c("div", [
          _c("div", { staticClass: "row infrastructure-display mt-5 py-3" }, [
            _c("div", { staticClass: "col-sm-4" }, [
              _c("p", [
                _c("img", {
                  staticClass: "mr-2",
                  attrs: {
                    src: "/images/stationery.svg",
                    alt: "Stationery Image"
                  }
                }),
                _vm._v("\n                 Stationery : "),
                _c("strong", { staticClass: "ml-1 text-capitalize" }, [
                  _vm._v(
                    "\n                   " +
                      _vm._s(_vm.infrastructure.stationary) +
                      "\n                 "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _c("img", {
                  staticClass: "mr-2",
                  attrs: { src: "/images/computer.svg", alt: "computer Image" }
                }),
                _vm._v("\n                 Computer : "),
                _c("strong", { staticClass: "ml-1 text-capitalize" }, [
                  _vm._v(
                    "\n                   " +
                      _vm._s(_vm.infrastructure.computer_learning) +
                      "\n                 "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _c("img", {
                  staticClass: "mr-2",
                  attrs: { src: "/images/hostel.svg", alt: "Hostel Image" }
                }),
                _vm._v("\n                 Boys Hostel : "),
                _c("strong", { staticClass: "ml-1 text-capitalize" }, [
                  _vm._v(
                    "\n                   " +
                      _vm._s(_vm.infrastructure.boys_hostel) +
                      "\n                 "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _c("img", {
                  staticClass: "mr-2",
                  attrs: { src: "/images/bus.svg", alt: "Bus Image" }
                }),
                _vm._v("\n                 Girls Hostel : "),
                _c("strong", { staticClass: "ml-1 text-capitalize" }, [
                  _vm._v(
                    "\n                   " +
                      _vm._s(_vm.infrastructure.girls_hostel) +
                      "\n                 "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("p", [
                _c("img", {
                  staticClass: "mr-2",
                  attrs: {
                    src: "/images/playground.svg",
                    alt: "playground Image"
                  }
                }),
                _vm._v("\n                 Playground : "),
                _c("strong", { staticClass: "ml-1 text-capitalize" }, [
                  _vm._v(
                    "\n                   " +
                      _vm._s(_vm.infrastructure.playground) +
                      "\n                 "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _c("img", {
                  staticClass: "mr-2",
                  attrs: { src: "/images/library.svg", alt: "Library Image" }
                }),
                _vm._v("\n                 Library : "),
                _c("strong", { staticClass: "ml-1 text-capitalize" }, [
                  _vm._v(
                    "\n                   " +
                      _vm._s(_vm.infrastructure.library) +
                      "\n                 "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _c("img", {
                  staticClass: "mr-2",
                  attrs: { src: "/images/book.svg", alt: "Books Image" }
                }),
                _vm._v("\n                 No of Books : "),
                _c("strong", { staticClass: "ml-1 text-capitalize" }, [
                  _vm._v(
                    "\n                   " +
                      _vm._s(_vm.infrastructure.no_of_books) +
                      "\n                 "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("p", [
                _c("img", {
                  staticClass: "mr-2",
                  attrs: { src: "/images/canteen.svg", alt: "Canteen Image" }
                }),
                _vm._v("\n                 Canteen : "),
                _c("strong", { staticClass: "ml-1 text-capitalize" }, [
                  _vm._v(
                    "\n                   " +
                      _vm._s(_vm.infrastructure.canteen) +
                      "\n                 "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _c("img", {
                  staticClass: "mr-2",
                  attrs: { src: "/images/bus.svg", alt: "Bus Image" }
                }),
                _vm._v(" Bus\n                 Services : "),
                _c("strong", { staticClass: "ml-1 text-capitalize" }, [
                  _vm._v(
                    "\n                   " +
                      _vm._s(_vm.infrastructure.bus_services) +
                      "\n                 "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _c("img", {
                  staticClass: "mr-2",
                  attrs: { src: "/images/fence.svg", alt: "fence Image" }
                }),
                _vm._v("\n                 Boundary : "),
                _c("strong", { staticClass: "ml-1 text-capitalize" }, [
                  _vm._v(
                    "\n                  " +
                      _vm._s(_vm.infrastructure.wall) +
                      "\n                 "
                  )
                ])
              ])
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.infrastructureStatus
      ? _c("div", [
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
                  staticClass: "form-group row mx-lg-5",
                  class: {
                    "has-error":
                      _vm.errors.has("class") ||
                      _vm.serverErrors.no_of_class != ""
                  }
                },
                [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-2 col-form-label",
                      attrs: { for: "exampleInputEmail1" }
                    },
                    [_vm._v("Total Class Room:")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formData.no_of_class,
                        expression: "formData.no_of_class"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|numeric",
                        expression: "'required|numeric'"
                      }
                    ],
                    staticClass: "col-sm-10",
                    class: {
                      "form-control": true,
                      "is-invalid": _vm.errors.has("class")
                    },
                    attrs: {
                      id: "class",
                      "data-vv-delay": "20",
                      name: "class",
                      type: "text",
                      placeholder: "Total number of Class room"
                    },
                    domProps: { value: _vm.formData.no_of_class },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.formData,
                          "no_of_class",
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
                          value: _vm.errors.has("class"),
                          expression: "errors.has('class')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("class")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.class != "",
                          expression: "serverErrors.class != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.class))]
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
                      _vm.errors.has("canteen") ||
                      _vm.serverErrors.canteen != ""
                  }
                },
                [
                  _c("label", { staticClass: "col-sm-2 col-form-label" }, [
                    _vm._v("Canteen")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formData.canteen,
                          expression: "formData.canteen"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "col-sm-10 form-control",
                      attrs: { name: "canteen" },
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
                            "canteen",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
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
                        _vm._v("Yes")
                      ]),
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
                        value: _vm.errors.has("canteen"),
                        expression: "errors.has('canteen')"
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
                          value: _vm.errors.has("canteen"),
                          expression: "errors.has('canteen')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("canteen")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.canteen != "",
                          expression: "serverErrors.canteen != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.canteen))]
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
                      _vm.errors.has("stationary") ||
                      _vm.serverErrors.stationary != ""
                  }
                },
                [
                  _c("label", { staticClass: "col-sm-2 col-form-label" }, [
                    _vm._v("Stationary")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formData.stationary,
                          expression: "formData.stationary"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "col-sm-10 form-control",
                      attrs: { name: "stationary" },
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
                            "stationary",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
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
                        _vm._v("Yes")
                      ]),
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
                        value: _vm.errors.has("stationary"),
                        expression: "errors.has('stationary')"
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
                          value: _vm.errors.has("stationary"),
                          expression: "errors.has('stationary')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("stationary")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.stationary != "",
                          expression: "serverErrors.stationary != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.stationary))]
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
                      _vm.errors.has("computer_learning") ||
                      _vm.serverErrors.computer_learning != ""
                  }
                },
                [
                  _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                    _vm._v("Computer Learning:")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formData.computer_learning,
                          expression: "formData.computer_learning"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "col-sm-9 form-control",
                      attrs: { name: "computer_learning" },
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
                            "computer_learning",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
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
                        _vm._v("Yes")
                      ]),
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
                        value: _vm.errors.has("computer_learning"),
                        expression: "errors.has('computer_learning')"
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
                          value: _vm.errors.has("computer_learning"),
                          expression: "errors.has('computer_learning')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("computer_learning")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.computer_learning != "",
                          expression: "serverErrors.computer_learning != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.computer_learning))]
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
                      _vm.errors.has("boys_hostel") ||
                      _vm.serverErrors.boys_hostel != ""
                  }
                },
                [
                  _c("label", { staticClass: "col-sm-2 col-form-label" }, [
                    _vm._v("Boys Hostel")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formData.boys_hostel,
                          expression: "formData.boys_hostel"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "col-sm-10 form-control",
                      attrs: { name: "boys_hostel" },
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
                            "boys_hostel",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
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
                        _vm._v("Yes")
                      ]),
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
                        value: _vm.errors.has("boys_hostel"),
                        expression: "errors.has('boys_hostel')"
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
                          value: _vm.errors.has("boys_hostel"),
                          expression: "errors.has('boys_hostel')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("boys_hostel")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.boys_hostel != "",
                          expression: "serverErrors.boys_hostel != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.boys_hostel))]
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
                      _vm.errors.has("girls_hostel") ||
                      _vm.serverErrors.girls_hostel != ""
                  }
                },
                [
                  _c("label", { staticClass: "col-sm-2 col-form-label" }, [
                    _vm._v("Girls Hostel")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formData.girls_hostel,
                          expression: "formData.girls_hostel"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "col-sm-10 form-control",
                      attrs: { name: "girls_hostel" },
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
                            "girls_hostel",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
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
                        _vm._v("Yes")
                      ]),
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
                        value: _vm.errors.has("girls_hostel"),
                        expression: "errors.has('girls_hostel')"
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
                          value: _vm.errors.has("girls_hostel"),
                          expression: "errors.has('girls_hostel')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("girls_hostel")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.girls_hostel != "",
                          expression: "serverErrors.girls_hostel != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.girls_hostel))]
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
                      _vm.errors.has("wall") || _vm.serverErrors.wall != ""
                  }
                },
                [
                  _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                    _vm._v("Campus Boundary")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formData.wall,
                          expression: "formData.wall"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "col-sm-9 form-control",
                      attrs: { name: "wall" },
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
                            "wall",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Select your choice")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "no_wall" } }, [
                        _vm._v("No wall")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "fence" } }, [
                        _vm._v("Fence")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "wall" } }, [
                        _vm._v("Wall boundary")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("i", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("wall"),
                        expression: "errors.has('wall')"
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
                          value: _vm.errors.has("wall"),
                          expression: "errors.has('wall')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("wall")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.wall != "",
                          expression: "serverErrors.wall != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.wall))]
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
                      _vm.errors.has("library") ||
                      _vm.serverErrors.library != ""
                  }
                },
                [
                  _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                    _vm._v("Library Availability:")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formData.library,
                          expression: "formData.library"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "col-sm-9 form-control",
                      attrs: { name: "library" },
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
                            "library",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
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
                        _vm._v("Yes")
                      ]),
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
                        value: _vm.errors.has("library"),
                        expression: "errors.has('library')"
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
                          value: _vm.errors.has("library"),
                          expression: "errors.has('library')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("library")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.library != "",
                          expression: "serverErrors.library != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.library))]
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
                      _vm.errors.has("books") ||
                      _vm.serverErrors.no_of_books != ""
                  }
                },
                [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-2 col-form-label",
                      attrs: { for: "exampleInputEmail1" }
                    },
                    [_vm._v("Total Books:")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formData.no_of_books,
                        expression: "formData.no_of_books"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|numeric",
                        expression: "'required|numeric'"
                      }
                    ],
                    staticClass: "col-sm-10",
                    class: {
                      "form-control": true,
                      "is-invalid": _vm.errors.has("books")
                    },
                    attrs: {
                      id: "books",
                      "data-vv-delay": "20",
                      name: "books",
                      type: "text",
                      placeholder: "Total number of books in library"
                    },
                    domProps: { value: _vm.formData.no_of_books },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.formData,
                          "no_of_books",
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
                          value: _vm.errors.has("books"),
                          expression: "errors.has('books')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("books")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.no_of_books != "",
                          expression: "serverErrors.no_of_books != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.no_of_books))]
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
                      _vm.errors.has("playground") ||
                      _vm.serverErrors.playground != ""
                  }
                },
                [
                  _c("label", { staticClass: "col-sm-2 col-form-label" }, [
                    _vm._v("Playground:")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formData.playground,
                          expression: "formData.playground"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "col-sm-10 form-control",
                      attrs: { name: "playground" },
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
                            "playground",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
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
                        _vm._v("Yes")
                      ]),
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
                        value: _vm.errors.has("playground"),
                        expression: "errors.has('playground')"
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
                          value: _vm.errors.has("playground"),
                          expression: "errors.has('playground')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("playground")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.playground != "",
                          expression: "serverErrors.playground != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.playground))]
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
                      _vm.errors.has("bus_services") ||
                      _vm.serverErrors.bus_services != ""
                  }
                },
                [
                  _c("label", { staticClass: "col-sm-2 col-form-label" }, [
                    _vm._v("Bus Services:")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formData.bus_services,
                          expression: "formData.bus_services"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "col-sm-10 form-control",
                      attrs: { name: "bus_services" },
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
                            "bus_services",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
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
                        _vm._v("Yes")
                      ]),
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
                        value: _vm.errors.has("bus_services"),
                        expression: "errors.has('bus_services')"
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
                          value: _vm.errors.has("bus_services"),
                          expression: "errors.has('bus_services')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("bus_services")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.bus_services != "",
                          expression: "serverErrors.bus_services != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.bus_services))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn infrabtn", attrs: { type: "submit" } },
                [_vm._v("Submit")]
              )
            ]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "infraheader mb-3 p-1", attrs: { id: "infrastrucuter" } },
      [_c("h3", [_vm._v("Let's talk about Infrastructure")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/phone.vue?vue&type=template&id=336467b2&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/phone.vue?vue&type=template&id=336467b2& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    _vm.phoneVerificationChecker
      ? _c("div", [
          _c("label", { attrs: { col: "col-sm-3 col-form-label" } }, [
            _vm._v("Phone: ")
          ]),
          _vm._v(" "),
          _c("button", { staticClass: "btn btn-info" }, [
            _vm._v("\n      +91 " + _vm._s(_vm.userData.phone) + "\n      "),
            _vm.userData.phone_verified != null
              ? _c("span", { staticClass: "text-success text-center" }, [
                  _vm._v("verified")
                ])
              : _vm._e()
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", [
      !_vm.phoneVerificationChecker
        ? _c("div", [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.phoneVerificationForm()
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "form-group row mx-5",
                    class: {
                      "has-error":
                        _vm.errors.has("serverError.phone") ||
                        _vm.serverError.phone != ""
                    }
                  },
                  [
                    _c("label", { attrs: { col: "col-sm-3 col-form-label" } }, [
                      _vm._v("Phone: ")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.phoneData.phone,
                          expression: "phoneData.phone"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric|max:10|min:10",
                          expression: "'required|numeric|max:10|min:10'"
                        }
                      ],
                      staticClass: "col-sm-9 ml-md-4",
                      class: {
                        "form-control": true,
                        "is-invalid": _vm.errors.has("phone")
                      },
                      attrs: {
                        "data-vv-delay": "20",
                        name: "phone",
                        type: "text",
                        placeholder: "Verify your phone"
                      },
                      domProps: { value: _vm.phoneData.phone },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.phoneData, "phone", $event.target.value)
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
                            value: _vm.errors.has("phone"),
                            expression: "errors.has('phone')"
                          }
                        ],
                        staticClass: "text-danger text-center"
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
                            value: _vm.serverError.phone != "",
                            expression: "serverError.phone != ''"
                          }
                        ],
                        staticClass: "text-danger text-center"
                      },
                      [_vm._v(_vm._s(_vm.serverError.phone))]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(0)
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.otpVerificationCheck
        ? _c("div", [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.otpVerificationForm()
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "form-group row mx-5",
                    class: {
                      "has-error":
                        _vm.errors.has("serverOtpError.otp") ||
                        _vm.serverOtpError.otp != ""
                    }
                  },
                  [
                    _c("label", { attrs: { col: "col-sm-3 col-form-label" } }, [
                      _vm._v("Phone: ")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.otpData.otp,
                          expression: "otpData.otp"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric|min:6|max:6",
                          expression: "'required|numeric|min:6|max:6'"
                        }
                      ],
                      staticClass: "col-sm-9 ml-4",
                      class: {
                        "form-control": true,
                        "is-invalid": _vm.errors.has("otp")
                      },
                      attrs: {
                        "data-vv-delay": "20",
                        name: "otp",
                        type: "text",
                        placeholder: "Verify your otp"
                      },
                      domProps: { value: _vm.otpData.otp },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.otpData, "otp", $event.target.value)
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
                            value: _vm.errors.has("otp"),
                            expression: "errors.has('otp')"
                          }
                        ],
                        staticClass: "text-danger text-center"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("otp")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverOtpError.otp != "",
                            expression: "serverOtpError.otp != ''"
                          }
                        ],
                        staticClass: "help is-danger text-center"
                      },
                      [_vm._v(_vm._s(_vm.serverOtpError.otp))]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(1)
              ]
            )
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ml-5" }, [
      _c(
        "button",
        {
          staticClass: "btn btnsubmit mt-n2 rounded-0",
          attrs: { type: "submit" }
        },
        [_vm._v("Verify")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ml-5" }, [
      _c(
        "button",
        { staticClass: "btn btnsubmit mt-n2", attrs: { type: "submit" } },
        [_vm._v("Submit")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/social.vue?vue&type=template&id=38e126f8&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/social.vue?vue&type=template&id=38e126f8& ***!
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
    _c("h4", [_vm._v("Social Media handles")]),
    _vm._v(" "),
    _vm.getTheModel === false
      ? _c("ul", { staticClass: "edit-social" }, [
          _vm.socialData.facebook != null
            ? _c("li", [
                _c(
                  "a",
                  {
                    attrs: { href: _vm.socialData.facebook, target: "_blank" }
                  },
                  [_c("span", [_vm._v(" Facebook")])]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.socialData.instagram != null
            ? _c("li", [
                _c(
                  "a",
                  {
                    attrs: { href: _vm.socialData.instagram, target: "_blank" }
                  },
                  [_c("span", [_vm._v(" Instagram")])]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.socialData.linkedin != null
            ? _c("li", [
                _c(
                  "a",
                  {
                    attrs: { href: _vm.socialData.linkedin, target: "_blank" }
                  },
                  [_c("span", [_vm._v(" LinkedIn")])]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.socialData.youtube != null
            ? _c("li", [
                _c(
                  "a",
                  { attrs: { href: _vm.socialData.youtube, target: "_blank" } },
                  [_c("span", [_vm._v(" Youtube")])]
                )
              ])
            : _vm._e()
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "btn btnwebdes",
        on: {
          click: function($event) {
            return _vm.editTheSocial()
          }
        }
      },
      [_vm._v("Edit")]
    ),
    _vm._v(" "),
    _vm.getTheModel
      ? _c("div", [
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
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass: "form-group col-sm-6",
                    class: {
                      "has-error":
                        _vm.errors.has("facebook") ||
                        _vm.serverErrors.facebook != ""
                    }
                  },
                  [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Facebook")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formData.facebook,
                          expression: "formData.facebook"
                        }
                      ],
                      class: {
                        "form-control": true,
                        "is-invalid": _vm.errors.has("facebook")
                      },
                      attrs: {
                        id: "facebook",
                        "data-vv-delay": "20",
                        name: "facebook",
                        type: "text",
                        placeholder: "facebook (optional)"
                      },
                      domProps: { value: _vm.formData.facebook },
                      on: {
                        focus: function($event) {
                          _vm.serverErrors.facebook = ""
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formData,
                            "facebook",
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
                          value: _vm.errors.has("facebook"),
                          expression: "errors.has('facebook')"
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
                            value: _vm.errors.has("facebook"),
                            expression: "errors.has('facebook')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("facebook")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.facebook != "",
                            expression: "serverErrors.facebook != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.facebook))]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-group col-sm-6",
                    class: {
                      "has-error":
                        _vm.errors.has("instagram") ||
                        _vm.serverErrors.instagram != ""
                    }
                  },
                  [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Instagram")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formData.instagram,
                          expression: "formData.instagram"
                        }
                      ],
                      class: {
                        "form-control": true,
                        "is-invalid": _vm.errors.has("instagram")
                      },
                      attrs: {
                        id: "instagram",
                        "data-vv-delay": "20",
                        name: "instagram",
                        type: "text",
                        placeholder: "instagram (optional)"
                      },
                      domProps: { value: _vm.formData.instagram },
                      on: {
                        focus: function($event) {
                          _vm.serverErrors.instagram = ""
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formData,
                            "instagram",
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
                          value: _vm.errors.has("instagram"),
                          expression: "errors.has('instagram')"
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
                            value: _vm.errors.has("instagram"),
                            expression: "errors.has('instagram')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("instagram")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.instagram != "",
                            expression: "serverErrors.instagram != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.instagram))]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass: "form-group col-md-6",
                    class: {
                      "has-error":
                        _vm.errors.has("linkedIn") ||
                        _vm.serverErrors.linkedIn != ""
                    }
                  },
                  [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("LinkedIn")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formData.linkedin,
                          expression: "formData.linkedin"
                        }
                      ],
                      class: {
                        "form-control": true,
                        "is-invalid": _vm.errors.has("linkedIn")
                      },
                      attrs: {
                        id: "linkedIn",
                        "data-vv-delay": "20",
                        name: "linkedIn",
                        type: "text",
                        placeholder: "linkedIn (optional)"
                      },
                      domProps: { value: _vm.formData.linkedin },
                      on: {
                        focus: function($event) {
                          _vm.serverErrors.linkedin = ""
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formData,
                            "linkedin",
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
                          value: _vm.errors.has("linkedIn"),
                          expression: "errors.has('linkedIn')"
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
                            value: _vm.errors.has("linkedIn"),
                            expression: "errors.has('linkedIn')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("linkedIn")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.linkedin != "",
                            expression: "serverErrors.linkedin != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.linkedin))]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-group col-md-6",
                    class: {
                      "has-error":
                        _vm.errors.has("youtube") ||
                        _vm.serverErrors.youtube != ""
                    }
                  },
                  [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Youtube")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formData.youtube,
                          expression: "formData.youtube"
                        }
                      ],
                      class: {
                        "form-control": true,
                        "is-invalid": _vm.errors.has("youtube")
                      },
                      attrs: {
                        id: "youtube",
                        "data-vv-delay": "20",
                        name: "youtube",
                        type: "text",
                        placeholder: "youtube (optional)"
                      },
                      domProps: { value: _vm.formData.youtube },
                      on: {
                        focus: function($event) {
                          _vm.serverErrors.youtube = ""
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.formData, "youtube", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("i", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("youtube"),
                          expression: "errors.has('youtube')"
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
                            value: _vm.errors.has("youtube"),
                            expression: "errors.has('youtube')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("youtube")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.youtube != "",
                            expression: "serverErrors.youtube != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.youtube))]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btnsubmit", attrs: { type: "submit" } },
                [_vm._v("Submit")]
              )
            ]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/standard.vue?vue&type=template&id=f167efd8&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/standard.vue?vue&type=template&id=f167efd8&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    _c("h4", [_vm._v("School Standards")]),
    _vm._v(" "),
    _vm.userData != null && _vm.standardDataStatus
      ? _c(
          "div",
          [
            _c("h5", [_vm._v("List of standard available :")]),
            _vm._v(" "),
            _vm._l(_vm.userData, function(standard, index) {
              return _c(
                "button",
                { key: index, staticClass: "btn btn-success m-1" },
                [_vm._v("\n      " + _vm._s(standard.standard_name) + "\n    ")]
              )
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn",
                on: {
                  click: function($event) {
                    return _vm.editTheStandard()
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
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    !_vm.standardDataStatus
      ? _c(
          "div",
          [
            _c("multiselect", {
              attrs: {
                options: _vm.standardData,
                "track-by": "standard_name",
                "custom-label": _vm.standardNameOnly,
                multiple: true,
                "tag-placeholder": "Select classes of your institute",
                "option-height": 104
              },
              model: {
                value: _vm.value,
                callback: function($$v) {
                  _vm.value = $$v
                },
                expression: "value"
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btnsubmit",
                attrs: { type: "submit" },
                on: {
                  click: function($event) {
                    return _vm.submitStandardData()
                  }
                }
              },
              [_vm._v("\n      Submit\n    ")]
            )
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("br")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/website.vue?vue&type=template&id=ed4e66d8&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channel/website.vue?vue&type=template&id=ed4e66d8&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    [
      _c("transition", { attrs: { name: "slide-fade" } }, [
        _vm.websiteOnPresent
          ? _c("div", [
              _c("h4", [_vm._v("Your website link")]),
              _vm._v(" "),
              _c("p", { staticStyle: { color: "blue" } }, [
                _vm._v(
                  "\n        " + _vm._s(_vm.websiteLinkFromServer) + "\n      "
                )
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btnwebdes rounded-0",
                  on: {
                    click: function($event) {
                      return _vm.editMyWebsiteLink()
                    }
                  }
                },
                [
                  _c("i", {
                    staticClass: "fa fa-pencil",
                    attrs: { "aria-hidden": "true" }
                  }),
                  _vm._v(" Change website url\n      ")
                ]
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      !_vm.websiteOnPresent
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
                  staticClass: "form-group",
                  class: {
                    "has-error":
                      _vm.errors.has("websiteLinkError") ||
                      _vm.websiteLinkError != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                    _vm._v("Website")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formData.website,
                        expression: "formData.website"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|url",
                        expression: "'required|url'"
                      }
                    ],
                    class: {
                      "form-control": true,
                      "is-invalid": _vm.errors.has("website")
                    },
                    attrs: {
                      "data-vv-delay": "20",
                      name: "website",
                      type: "text",
                      placeholder: "Insert your website link(optional)"
                    },
                    domProps: { value: _vm.formData.website },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.formData, "website", $event.target.value)
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
                          value: _vm.errors.has("website"),
                          expression: "errors.has('website')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.errors.first("website")) +
                          "\n      "
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
                          value: _vm.websiteLinkError != "",
                          expression: "websiteLinkError != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [
                      _vm._v(
                        "\n        " + _vm._s(_vm.websiteLinkError) + "\n      "
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _vm.websiteLinkFromServer != ""
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-success mt-n2 p-1",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.goBack()
                        }
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-long-arrow-left",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" Back\n    ")
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btnsubmit mt-n3",
                  attrs: { type: "submit" }
                },
                [_vm._v("Submit")]
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
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

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_17_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_17_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader!../../css-loader??ref--17-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--17-2!./vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_17_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_17_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_17_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_17_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_17_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_17_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_17_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_17_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_17_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_17_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.min.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=60)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var i=n(49)("wks"),r=n(30),o=n(0).Symbol,s="function"==typeof o;(t.exports=function(t){return i[t]||(i[t]=s&&o[t]||(s?o:r)("Symbol."+t))}).store=i},function(t,e,n){var i=n(5);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var i=n(0),r=n(10),o=n(8),s=n(6),u=n(11),a=function(t,e,n){var l,c,f,p,h=t&a.F,d=t&a.G,v=t&a.S,g=t&a.P,y=t&a.B,m=d?i:v?i[e]||(i[e]={}):(i[e]||{}).prototype,b=d?r:r[e]||(r[e]={}),_=b.prototype||(b.prototype={});d&&(n=e);for(l in n)c=!h&&m&&void 0!==m[l],f=(c?m:n)[l],p=y&&c?u(f,i):g&&"function"==typeof f?u(Function.call,f):f,m&&s(m,l,f,t&a.U),b[l]!=f&&o(b,l,p),g&&_[l]!=f&&(_[l]=f)};i.core=r,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){t.exports=!n(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var i=n(0),r=n(8),o=n(12),s=n(30)("src"),u=Function.toString,a=(""+u).split("toString");n(10).inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,n,u){var l="function"==typeof n;l&&(o(n,"name")||r(n,"name",e)),t[e]!==n&&(l&&(o(n,s)||r(n,s,t[e]?""+t[e]:a.join(String(e)))),t===i?t[e]=n:u?t[e]?t[e]=n:r(t,e,n):(delete t[e],r(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||u.call(this)})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var i=n(13),r=n(25);t.exports=n(4)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(14);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var i=n(2),r=n(41),o=n(29),s=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports={}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var i=n(7);t.exports=function(t,e){return!!t&&i(function(){e?t.call(null,function(){},1):t.call(null)})}},function(t,e,n){var i=n(23),r=n(16);t.exports=function(t){return i(r(t))}},function(t,e,n){var i=n(53),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e,n){var i=n(11),r=n(23),o=n(28),s=n(19),u=n(64);t.exports=function(t,e){var n=1==t,a=2==t,l=3==t,c=4==t,f=6==t,p=5==t||f,h=e||u;return function(e,u,d){for(var v,g,y=o(e),m=r(y),b=i(u,d,3),_=s(m.length),x=0,w=n?h(e,_):a?h(e,0):void 0;_>x;x++)if((p||x in m)&&(v=m[x],g=b(v,x,y),t))if(n)w[x]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return x;case 2:w.push(v)}else if(c)return!1;return f?-1:l||c?c:w}}},function(t,e,n){var i=n(5),r=n(0).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var i=n(9);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e){t.exports=!1},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(13).f,r=n(12),o=n(1)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},function(t,e,n){var i=n(49)("keys"),r=n(30);t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e,n){var i=n(16);t.exports=function(t){return Object(i(t))}},function(t,e,n){var i=n(5);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e,n){"use strict";var i=n(0),r=n(12),o=n(9),s=n(67),u=n(29),a=n(7),l=n(77).f,c=n(45).f,f=n(13).f,p=n(51).trim,h=i.Number,d=h,v=h.prototype,g="Number"==o(n(44)(v)),y="trim"in String.prototype,m=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():p(e,3);var n,i,r,o=e.charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+e}for(var s,a=e.slice(2),l=0,c=a.length;l<c;l++)if((s=a.charCodeAt(l))<48||s>r)return NaN;return parseInt(a,i)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(g?a(function(){v.valueOf.call(n)}):"Number"!=o(n))?s(new d(m(e)),n,h):m(e)};for(var b,_=n(4)?l(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;_.length>x;x++)r(d,b=_[x])&&!r(h,b)&&f(h,b,c(d,b));h.prototype=v,v.constructor=h,n(6)(i,"Number",h)}},function(t,e,n){"use strict";function i(t){return 0!==t&&(!(!Array.isArray(t)||0!==t.length)||!t)}function r(t){return function(){return!t.apply(void 0,arguments)}}function o(t,e){return void 0===t&&(t="undefined"),null===t&&(t="null"),!1===t&&(t="false"),-1!==t.toString().toLowerCase().indexOf(e.trim())}function s(t,e,n,i){return t.filter(function(t){return o(i(t,n),e)})}function u(t){return t.filter(function(t){return!t.$isLabel})}function a(t,e){return function(n){return n.reduce(function(n,i){return i[t]&&i[t].length?(n.push({$groupLabel:i[e],$isLabel:!0}),n.concat(i[t])):n},[])}}function l(t,e,i,r,o){return function(u){return u.map(function(u){var a;if(!u[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var l=s(u[i],t,e,o);return l.length?(a={},n.i(d.a)(a,r,u[r]),n.i(d.a)(a,i,l),a):[]})}}var c=n(59),f=n(54),p=(n.n(f),n(95)),h=(n.n(p),n(31)),d=(n.n(h),n(58)),v=n(91),g=(n.n(v),n(98)),y=(n.n(g),n(92)),m=(n.n(y),n(88)),b=(n.n(m),n(97)),_=(n.n(b),n(89)),x=(n.n(_),n(96)),w=(n.n(x),n(93)),S=(n.n(w),n(90)),O=(n.n(S),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduce(function(t,e){return e(t)},t)}});e.a={data:function(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(t,e){return i(t)?"":e?t[e]:t}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1}},mounted:function(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue:function(){return this.value||0===this.value?Array.isArray(this.value)?this.value:[this.value]:[]},filteredOptions:function(){var t=this.search||"",e=t.toLowerCase().trim(),n=this.options.concat();return n=this.internalSearch?this.groupValues?this.filterAndFlat(n,e,this.label):s(n,e,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(n):n,n=this.hideSelected?n.filter(r(this.isSelected)):n,this.taggable&&e.length&&!this.isExistingOption(e)&&("bottom"===this.tagPosition?n.push({isTag:!0,label:t}):n.unshift({isTag:!0,label:t})),n.slice(0,this.optionsLimit)},valueKeys:function(){var t=this;return this.trackBy?this.internalValue.map(function(e){return e[t.trackBy]}):this.internalValue},optionKeys:function(){var t=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(e){return t.customLabel(e,t.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("input",this.multiple?[]:null))},search:function(){this.$emit("search-change",this.search,this.id)}},methods:{getValue:function(){return this.multiple?this.internalValue:0===this.internalValue.length?null:this.internalValue[0]},filterAndFlat:function(t,e,n){return O(l(e,n,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(t)},flatAndStrip:function(t){return O(a(this.groupValues,this.groupLabel),u)(t)},updateSearch:function(t){this.search=t},isExistingOption:function(t){return!!this.options&&this.optionKeys.indexOf(t)>-1},isSelected:function(t){var e=this.trackBy?t[this.trackBy]:t;return this.valueKeys.indexOf(e)>-1},isOptionDisabled:function(t){return!!t.$isDisabled},getOptionLabel:function(t){if(i(t))return"";if(t.isTag)return t.label;if(t.$isLabel)return t.$groupLabel;var e=this.customLabel(t,this.label);return i(e)?"":e},select:function(t,e){if(t.$isLabel&&this.groupSelect)return void this.selectGroup(t);if(!(-1!==this.blockKeys.indexOf(e)||this.disabled||t.$isDisabled||t.$isLabel)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==e||this.pointerDirty)){if(t.isTag)this.$emit("tag",t.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(t))return void("Tab"!==e&&this.removeElement(t));this.$emit("select",t,this.id),this.multiple?this.$emit("input",this.internalValue.concat([t]),this.id):this.$emit("input",t,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup:function(t){var e=this,n=this.options.find(function(n){return n[e.groupLabel]===t.$groupLabel});if(n)if(this.wholeGroupSelected(n)){this.$emit("remove",n[this.groupValues],this.id);var i=this.internalValue.filter(function(t){return-1===n[e.groupValues].indexOf(t)});this.$emit("input",i,this.id)}else{var r=n[this.groupValues].filter(function(t){return!(e.isOptionDisabled(t)||e.isSelected(t))});this.$emit("select",r,this.id),this.$emit("input",this.internalValue.concat(r),this.id)}},wholeGroupSelected:function(t){var e=this;return t[this.groupValues].every(function(t){return e.isSelected(t)||e.isOptionDisabled(t)})},wholeGroupDisabled:function(t){return t[this.groupValues].every(this.isOptionDisabled)},removeElement:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled&&!t.$isDisabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===n.i(c.a)(t)?this.valueKeys.indexOf(t[this.trackBy]):this.valueKeys.indexOf(t);if(this.$emit("remove",t,this.id),this.multiple){var r=this.internalValue.slice(0,i).concat(this.internalValue.slice(i+1));this.$emit("input",r,this.id)}else this.$emit("input",null,this.id);this.closeOnSelect&&e&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var t=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return t.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var t=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>t||"below"===this.openDirection||"bottom"===this.openDirection?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(t-40,this.maxHeight))}}}}},function(t,e,n){"use strict";var i=n(54),r=(n.n(i),n(31));n.n(r);e.a={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(t,e){return{"multiselect__option--highlight":t===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},groupHighlight:function(t,e){var n=this;if(!this.groupSelect)return["multiselect__option--group","multiselect__option--disabled"];var i=this.options.find(function(t){return t[n.groupLabel]===e.$groupLabel});return i&&!this.wholeGroupDisabled(i)?["multiselect__option--group",{"multiselect__option--highlight":t===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(i)}]:"multiselect__option--disabled"},addPointerElement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",e=t.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet:function(t){this.pointer=t,this.pointerDirty=!0}}}},function(t,e,n){"use strict";var i=n(36),r=n(74),o=n(15),s=n(18);t.exports=n(72)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},function(t,e,n){"use strict";var i=n(31),r=(n.n(i),n(32)),o=n(33);e.a={name:"vue-multiselect",mixins:[r.a,o.a],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(t){return"and ".concat(t," more")}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{isSingleLabelVisible:function(){return(this.singleValue||0===this.singleValue)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible:function(){return!(this.internalValue.length||this.searchable&&this.isOpen)},visibleValues:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue:function(){return this.internalValue[0]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText:function(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectGroupLabelText:function(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.searchable||this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.preferredOpenDirection},showSearchInput:function(){return this.searchable&&(!this.hasSingleSelectedSlot||!this.visibleSingleValue&&0!==this.visibleSingleValue||this.isOpen)}}}},function(t,e,n){var i=n(1)("unscopables"),r=Array.prototype;void 0==r[i]&&n(8)(r,i,{}),t.exports=function(t){r[i][t]=!0}},function(t,e,n){var i=n(18),r=n(19),o=n(85);t.exports=function(t){return function(e,n,s){var u,a=i(e),l=r(a.length),c=o(s,l);if(t&&n!=n){for(;l>c;)if((u=a[c++])!=u)return!0}else for(;l>c;c++)if((t||c in a)&&a[c]===n)return t||c||0;return!t&&-1}}},function(t,e,n){var i=n(9),r=n(1)("toStringTag"),o="Arguments"==i(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),r))?n:o?i(e):"Object"==(u=i(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){"use strict";var i=n(2);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var i=n(0).document;t.exports=i&&i.documentElement},function(t,e,n){t.exports=!n(4)&&!n(7)(function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(9);t.exports=Array.isArray||function(t){return"Array"==i(t)}},function(t,e,n){"use strict";function i(t){var e,n;this.promise=new t(function(t,i){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=i}),this.resolve=r(e),this.reject=r(n)}var r=n(14);t.exports.f=function(t){return new i(t)}},function(t,e,n){var i=n(2),r=n(76),o=n(22),s=n(27)("IE_PROTO"),u=function(){},a=function(){var t,e=n(21)("iframe"),i=o.length;for(e.style.display="none",n(40).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;i--;)delete a.prototype[o[i]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=i(t),n=new u,u.prototype=null,n[s]=t):n=a(),void 0===e?n:r(n,e)}},function(t,e,n){var i=n(79),r=n(25),o=n(18),s=n(29),u=n(12),a=n(41),l=Object.getOwnPropertyDescriptor;e.f=n(4)?l:function(t,e){if(t=o(t),e=s(e,!0),a)try{return l(t,e)}catch(t){}if(u(t,e))return r(!i.f.call(t,e),t[e])}},function(t,e,n){var i=n(12),r=n(18),o=n(37)(!1),s=n(27)("IE_PROTO");t.exports=function(t,e){var n,u=r(t),a=0,l=[];for(n in u)n!=s&&i(u,n)&&l.push(n);for(;e.length>a;)i(u,n=e[a++])&&(~o(l,n)||l.push(n));return l}},function(t,e,n){var i=n(46),r=n(22);t.exports=Object.keys||function(t){return i(t,r)}},function(t,e,n){var i=n(2),r=n(5),o=n(43);t.exports=function(t,e){if(i(t),r(e)&&e.constructor===t)return e;var n=o.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var i=n(10),r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n(24)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var i=n(2),r=n(14),o=n(1)("species");t.exports=function(t,e){var n,s=i(t).constructor;return void 0===s||void 0==(n=i(s)[o])?e:r(n)}},function(t,e,n){var i=n(3),r=n(16),o=n(7),s=n(84),u="["+s+"]",a="​",l=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),f=function(t,e,n){var r={},u=o(function(){return!!s[t]()||a[t]()!=a}),l=r[t]=u?e(p):s[t];n&&(r[n]=l),i(i.P+i.F*u,"String",r)},p=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(c,"")),t};t.exports=f},function(t,e,n){var i,r,o,s=n(11),u=n(68),a=n(40),l=n(21),c=n(0),f=c.process,p=c.setImmediate,h=c.clearImmediate,d=c.MessageChannel,v=c.Dispatch,g=0,y={},m=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},b=function(t){m.call(t.data)};p&&h||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return y[++g]=function(){u("function"==typeof t?t:Function(t),e)},i(g),g},h=function(t){delete y[t]},"process"==n(9)(f)?i=function(t){f.nextTick(s(m,t,1))}:v&&v.now?i=function(t){v.now(s(m,t,1))}:d?(r=new d,o=r.port2,r.port1.onmessage=b,i=s(o.postMessage,o,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts?(i=function(t){c.postMessage(t+"","*")},c.addEventListener("message",b,!1)):i="onreadystatechange"in l("script")?function(t){a.appendChild(l("script")).onreadystatechange=function(){a.removeChild(this),m.call(t)}}:function(t){setTimeout(s(m,t,1),0)}),t.exports={set:p,clear:h}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){"use strict";var i=n(3),r=n(20)(5),o=!0;"find"in[]&&Array(1).find(function(){o=!1}),i(i.P+i.F*o,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(36)("find")},function(t,e,n){"use strict";var i,r,o,s,u=n(24),a=n(0),l=n(11),c=n(38),f=n(3),p=n(5),h=n(14),d=n(61),v=n(66),g=n(50),y=n(52).set,m=n(75)(),b=n(43),_=n(80),x=n(86),w=n(48),S=a.TypeError,O=a.process,L=O&&O.versions,k=L&&L.v8||"",P=a.Promise,T="process"==c(O),V=function(){},E=r=b.f,A=!!function(){try{var t=P.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(V,V)};return(T||"function"==typeof PromiseRejectionEvent)&&t.then(V)instanceof e&&0!==k.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),C=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},D=function(t,e){if(!t._n){t._n=!0;var n=t._c;m(function(){for(var i=t._v,r=1==t._s,o=0;n.length>o;)!function(e){var n,o,s,u=r?e.ok:e.fail,a=e.resolve,l=e.reject,c=e.domain;try{u?(r||(2==t._h&&$(t),t._h=1),!0===u?n=i:(c&&c.enter(),n=u(i),c&&(c.exit(),s=!0)),n===e.promise?l(S("Promise-chain cycle")):(o=C(n))?o.call(n,a,l):a(n)):l(i)}catch(t){c&&!s&&c.exit(),l(t)}}(n[o++]);t._c=[],t._n=!1,e&&!t._h&&j(t)})}},j=function(t){y.call(a,function(){var e,n,i,r=t._v,o=N(t);if(o&&(e=_(function(){T?O.emit("unhandledRejection",r,t):(n=a.onunhandledrejection)?n({promise:t,reason:r}):(i=a.console)&&i.error&&i.error("Unhandled promise rejection",r)}),t._h=T||N(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},N=function(t){return 1!==t._h&&0===(t._a||t._c).length},$=function(t){y.call(a,function(){var e;T?O.emit("rejectionHandled",t):(e=a.onrejectionhandled)&&e({promise:t,reason:t._v})})},F=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),D(e,!0))},M=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw S("Promise can't be resolved itself");(e=C(t))?m(function(){var i={_w:n,_d:!1};try{e.call(t,l(M,i,1),l(F,i,1))}catch(t){F.call(i,t)}}):(n._v=t,n._s=1,D(n,!1))}catch(t){F.call({_w:n,_d:!1},t)}}};A||(P=function(t){d(this,P,"Promise","_h"),h(t),i.call(this);try{t(l(M,this,1),l(F,this,1))}catch(t){F.call(this,t)}},i=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},i.prototype=n(81)(P.prototype,{then:function(t,e){var n=E(g(this,P));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=T?O.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&D(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new i;this.promise=t,this.resolve=l(M,t,1),this.reject=l(F,t,1)},b.f=E=function(t){return t===P||t===s?new o(t):r(t)}),f(f.G+f.W+f.F*!A,{Promise:P}),n(26)(P,"Promise"),n(83)("Promise"),s=n(10).Promise,f(f.S+f.F*!A,"Promise",{reject:function(t){var e=E(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(u||!A),"Promise",{resolve:function(t){return w(u&&this===s?P:this,t)}}),f(f.S+f.F*!(A&&n(73)(function(t){P.all(t).catch(V)})),"Promise",{all:function(t){var e=this,n=E(e),i=n.resolve,r=n.reject,o=_(function(){var n=[],o=0,s=1;v(t,!1,function(t){var u=o++,a=!1;n.push(void 0),s++,e.resolve(t).then(function(t){a||(a=!0,n[u]=t,--s||i(n))},r)}),--s||i(n)});return o.e&&r(o.v),n.promise},race:function(t){var e=this,n=E(e),i=n.reject,r=_(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,i)})});return r.e&&i(r.v),n.promise}})},function(t,e,n){"use strict";var i=n(3),r=n(10),o=n(0),s=n(50),u=n(48);i(i.P+i.R,"Promise",{finally:function(t){var e=s(this,r.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return u(e,t()).then(function(){return n})}:t,n?function(n){return u(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";function i(t){n(99)}var r=n(35),o=n(101),s=n(100),u=i,a=s(r.a,o.a,!1,u,null,null);e.a=a.exports},function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a=i},function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(t){return i(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)})(t)}e.a=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(34),r=(n.n(i),n(55)),o=(n.n(r),n(56)),s=(n.n(o),n(57)),u=n(32),a=n(33);n.d(e,"Multiselect",function(){return s.a}),n.d(e,"multiselectMixin",function(){return u.a}),n.d(e,"pointerMixin",function(){return a.a}),e.default=s.a},function(t,e){t.exports=function(t,e,n,i){if(!(t instanceof e)||void 0!==i&&i in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var i=n(14),r=n(28),o=n(23),s=n(19);t.exports=function(t,e,n,u,a){i(e);var l=r(t),c=o(l),f=s(l.length),p=a?f-1:0,h=a?-1:1;if(n<2)for(;;){if(p in c){u=c[p],p+=h;break}if(p+=h,a?p<0:f<=p)throw TypeError("Reduce of empty array with no initial value")}for(;a?p>=0:f>p;p+=h)p in c&&(u=e(u,c[p],p,l));return u}},function(t,e,n){var i=n(5),r=n(42),o=n(1)("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)||(e=void 0),i(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var i=n(63);t.exports=function(t,e){return new(i(t))(e)}},function(t,e,n){"use strict";var i=n(8),r=n(6),o=n(7),s=n(16),u=n(1);t.exports=function(t,e,n){var a=u(t),l=n(s,a,""[t]),c=l[0],f=l[1];o(function(){var e={};return e[a]=function(){return 7},7!=""[t](e)})&&(r(String.prototype,t,c),i(RegExp.prototype,a,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}))}},function(t,e,n){var i=n(11),r=n(70),o=n(69),s=n(2),u=n(19),a=n(87),l={},c={},e=t.exports=function(t,e,n,f,p){var h,d,v,g,y=p?function(){return t}:a(t),m=i(n,f,e?2:1),b=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(o(y)){for(h=u(t.length);h>b;b++)if((g=e?m(s(d=t[b])[0],d[1]):m(t[b]))===l||g===c)return g}else for(v=y.call(t);!(d=v.next()).done;)if((g=r(v,m,d.value,e))===l||g===c)return g};e.BREAK=l,e.RETURN=c},function(t,e,n){var i=n(5),r=n(82).set;t.exports=function(t,e,n){var o,s=e.constructor;return s!==n&&"function"==typeof s&&(o=s.prototype)!==n.prototype&&i(o)&&r&&r(t,o),t}},function(t,e){t.exports=function(t,e,n){var i=void 0===n;switch(e.length){case 0:return i?t():t.call(n);case 1:return i?t(e[0]):t.call(n,e[0]);case 2:return i?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return i?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return i?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var i=n(15),r=n(1)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[r]===t)}},function(t,e,n){var i=n(2);t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&i(o.call(t)),e}}},function(t,e,n){"use strict";var i=n(44),r=n(25),o=n(26),s={};n(8)(s,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(s,{next:r(1,n)}),o(t,e+" Iterator")}},function(t,e,n){"use strict";var i=n(24),r=n(3),o=n(6),s=n(8),u=n(15),a=n(71),l=n(26),c=n(78),f=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,d,v,g,y){a(n,e,d);var m,b,_,x=function(t){if(!p&&t in L)return L[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",S="values"==v,O=!1,L=t.prototype,k=L[f]||L["@@iterator"]||v&&L[v],P=k||x(v),T=v?S?x("entries"):P:void 0,V="Array"==e?L.entries||k:k;if(V&&(_=c(V.call(new t)))!==Object.prototype&&_.next&&(l(_,w,!0),i||"function"==typeof _[f]||s(_,f,h)),S&&k&&"values"!==k.name&&(O=!0,P=function(){return k.call(this)}),i&&!y||!p&&!O&&L[f]||s(L,f,P),u[e]=P,u[w]=h,v)if(m={values:S?P:x("values"),keys:g?P:x("keys"),entries:T},y)for(b in m)b in L||o(L,b,m[b]);else r(r.P+r.F*(p||O),e,m);return m}},function(t,e,n){var i=n(1)("iterator"),r=!1;try{var o=[7][i]();o.return=function(){r=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var o=[7],s=o[i]();s.next=function(){return{done:n=!0}},o[i]=function(){return s},t(o)}catch(t){}return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var i=n(0),r=n(52).set,o=i.MutationObserver||i.WebKitMutationObserver,s=i.process,u=i.Promise,a="process"==n(9)(s);t.exports=function(){var t,e,n,l=function(){var i,r;for(a&&(i=s.domain)&&i.exit();t;){r=t.fn,t=t.next;try{r()}catch(i){throw t?n():e=void 0,i}}e=void 0,i&&i.enter()};if(a)n=function(){s.nextTick(l)};else if(!o||i.navigator&&i.navigator.standalone)if(u&&u.resolve){var c=u.resolve(void 0);n=function(){c.then(l)}}else n=function(){r.call(i,l)};else{var f=!0,p=document.createTextNode("");new o(l).observe(p,{characterData:!0}),n=function(){p.data=f=!f}}return function(i){var r={fn:i,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r}}},function(t,e,n){var i=n(13),r=n(2),o=n(47);t.exports=n(4)?Object.defineProperties:function(t,e){r(t);for(var n,s=o(e),u=s.length,a=0;u>a;)i.f(t,n=s[a++],e[n]);return t}},function(t,e,n){var i=n(46),r=n(22).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},function(t,e,n){var i=n(12),r=n(28),o=n(27)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var i=n(6);t.exports=function(t,e,n){for(var r in e)i(t,r,e[r],n);return t}},function(t,e,n){var i=n(5),r=n(2),o=function(t,e){if(r(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n(11)(Function.call,n(45).f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:o}},function(t,e,n){"use strict";var i=n(0),r=n(13),o=n(4),s=n(1)("species");t.exports=function(t){var e=i[t];o&&e&&!e[s]&&r.f(e,s,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var i=n(53),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)}},function(t,e,n){var i=n(0),r=i.navigator;t.exports=r&&r.userAgent||""},function(t,e,n){var i=n(38),r=n(1)("iterator"),o=n(15);t.exports=n(10).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||o[i(t)]}},function(t,e,n){"use strict";var i=n(3),r=n(20)(2);i(i.P+i.F*!n(17)([].filter,!0),"Array",{filter:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var i=n(3),r=n(37)(!1),o=[].indexOf,s=!!o&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(s||!n(17)(o)),"Array",{indexOf:function(t){return s?o.apply(this,arguments)||0:r(this,t,arguments[1])}})},function(t,e,n){var i=n(3);i(i.S,"Array",{isArray:n(42)})},function(t,e,n){"use strict";var i=n(3),r=n(20)(1);i(i.P+i.F*!n(17)([].map,!0),"Array",{map:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var i=n(3),r=n(62);i(i.P+i.F*!n(17)([].reduce,!0),"Array",{reduce:function(t){return r(this,t,arguments.length,arguments[1],!1)}})},function(t,e,n){var i=Date.prototype,r=i.toString,o=i.getTime;new Date(NaN)+""!="Invalid Date"&&n(6)(i,"toString",function(){var t=o.call(this);return t===t?r.call(this):"Invalid Date"})},function(t,e,n){n(4)&&"g"!=/./g.flags&&n(13).f(RegExp.prototype,"flags",{configurable:!0,get:n(39)})},function(t,e,n){n(65)("search",1,function(t,e,n){return[function(n){"use strict";var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},n]})},function(t,e,n){"use strict";n(94);var i=n(2),r=n(39),o=n(4),s=/./.toString,u=function(t){n(6)(RegExp.prototype,"toString",t,!0)};n(7)(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?u(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?r.call(t):void 0)}):"toString"!=s.name&&u(function(){return s.call(this)})},function(t,e,n){"use strict";n(51)("trim",function(t){return function(){return t(this,3)}})},function(t,e,n){for(var i=n(34),r=n(47),o=n(6),s=n(0),u=n(8),a=n(15),l=n(1),c=l("iterator"),f=l("toStringTag"),p=a.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=r(h),v=0;v<d.length;v++){var g,y=d[v],m=h[y],b=s[y],_=b&&b.prototype;if(_&&(_[c]||u(_,c,p),_[f]||u(_,f,y),a[y]=p,m))for(g in i)_[g]||o(_,g,i[g],!0)}},function(t,e){},function(t,e){t.exports=function(t,e,n,i,r,o){var s,u=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,u=t.default);var l="function"==typeof u?u.options:u;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):i&&(c=i),c){var f=l.functional,p=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(t,e){return c.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:s,exports:u,options:l}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"multiselect",class:{"multiselect--active":t.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":t.isAbove},attrs:{tabindex:t.searchable?-1:t.tabindex},on:{focus:function(e){t.activate()},blur:function(e){!t.searchable&&t.deactivate()},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerForward()):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerBackward()):null}],keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")||!t._k(e.keyCode,"tab",9,e.key,"Tab")?(e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.deactivate()}}},[t._t("caret",[n("div",{staticClass:"multiselect__select",on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}}})],{toggle:t.toggle}),t._v(" "),t._t("clear",null,{search:t.search}),t._v(" "),n("div",{ref:"tags",staticClass:"multiselect__tags"},[t._t("selection",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleValues.length>0,expression:"visibleValues.length > 0"}],staticClass:"multiselect__tags-wrap"},[t._l(t.visibleValues,function(e,i){return[t._t("tag",[n("span",{key:i,staticClass:"multiselect__tag"},[n("span",{domProps:{textContent:t._s(t.getOptionLabel(e))}}),t._v(" "),n("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keypress:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;n.preventDefault(),t.removeElement(e)},mousedown:function(n){n.preventDefault(),t.removeElement(e)}}})])],{option:e,search:t.search,remove:t.removeElement})]})],2),t._v(" "),t.internalValue&&t.internalValue.length>t.limit?[t._t("limit",[n("strong",{staticClass:"multiselect__strong",domProps:{textContent:t._s(t.limitText(t.internalValue.length-t.limit))}})])]:t._e()],{search:t.search,remove:t.removeElement,values:t.visibleValues,isOpen:t.isOpen}),t._v(" "),n("transition",{attrs:{name:"multiselect__loading"}},[t._t("loading",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),t._v(" "),t.searchable?n("input",{ref:"search",staticClass:"multiselect__input",style:t.inputStyle,attrs:{name:t.name,id:t.id,type:"text",autocomplete:"nope",placeholder:t.placeholder,disabled:t.disabled,tabindex:t.tabindex},domProps:{value:t.search},on:{input:function(e){t.updateSearch(e.target.value)},focus:function(e){e.preventDefault(),t.activate()},blur:function(e){e.preventDefault(),t.deactivate()},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.deactivate()},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"]))return null;e.preventDefault(),t.pointerForward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"]))return null;e.preventDefault(),t.pointerBackward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete"]))return null;e.stopPropagation(),t.removeLastElement()}],keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?(e.preventDefault(),e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null}}}):t._e(),t._v(" "),t.isSingleLabelVisible?n("span",{staticClass:"multiselect__single",on:{mousedown:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("singleLabel",[[t._v(t._s(t.currentOptionLabel))]],{option:t.singleValue})],2):t._e(),t._v(" "),t.isPlaceholderVisible?n("span",{staticClass:"multiselect__placeholder",on:{mousedown:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("placeholder",[t._v("\n          "+t._s(t.placeholder)+"\n        ")])],2):t._e()],2),t._v(" "),n("transition",{attrs:{name:"multiselect"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:t.optimizedHeight+"px"},attrs:{tabindex:"-1"},on:{focus:t.activate,mousedown:function(t){t.preventDefault()}}},[n("ul",{staticClass:"multiselect__content",style:t.contentStyle},[t._t("beforeList"),t._v(" "),t.multiple&&t.max===t.internalValue.length?n("li",[n("span",{staticClass:"multiselect__option"},[t._t("maxElements",[t._v("Maximum of "+t._s(t.max)+" options selected. First remove a selected option to select another.")])],2)]):t._e(),t._v(" "),!t.max||t.internalValue.length<t.max?t._l(t.filteredOptions,function(e,i){return n("li",{key:i,staticClass:"multiselect__element"},[e&&(e.$isLabel||e.$isDisabled)?t._e():n("span",{staticClass:"multiselect__option",class:t.optionHighlight(i,e),attrs:{"data-select":e&&e.isTag?t.tagPlaceholder:t.selectLabelText,"data-selected":t.selectedLabelText,"data-deselect":t.deselectLabelText},on:{click:function(n){n.stopPropagation(),t.select(e)},mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.pointerSet(i)}}},[t._t("option",[n("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2),t._v(" "),e&&(e.$isLabel||e.$isDisabled)?n("span",{staticClass:"multiselect__option",class:t.groupHighlight(i,e),attrs:{"data-select":t.groupSelect&&t.selectGroupLabelText,"data-deselect":t.groupSelect&&t.deselectGroupLabelText},on:{mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.groupSelect&&t.pointerSet(i)},mousedown:function(n){n.preventDefault(),t.selectGroup(e)}}},[t._t("option",[n("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2):t._e()])}):t._e(),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoResults&&0===t.filteredOptions.length&&t.search&&!t.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noResult",[t._v("No elements found. Consider changing the search query.")],{search:t.search})],2)]),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoOptions&&0===t.options.length&&!t.search&&!t.loading,expression:"showNoOptions && (options.length === 0 && !search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noOptions",[t._v("List is empty.")])],2)]),t._v(" "),t._t("afterList")],2)])])],2)},r=[],o={render:i,staticRenderFns:r};e.a=o}])});

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

/***/ "./resources/js/components/EditChannel.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/EditChannel.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditChannel_vue_vue_type_template_id_5ccc2dfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditChannel.vue?vue&type=template&id=5ccc2dfe& */ "./resources/js/components/EditChannel.vue?vue&type=template&id=5ccc2dfe&");
/* harmony import */ var _EditChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditChannel.vue?vue&type=script&lang=js& */ "./resources/js/components/EditChannel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditChannel_vue_vue_type_template_id_5ccc2dfe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditChannel_vue_vue_type_template_id_5ccc2dfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditChannel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditChannel.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/EditChannel.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EditChannel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditChannel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditChannel.vue?vue&type=template&id=5ccc2dfe&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/EditChannel.vue?vue&type=template&id=5ccc2dfe& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditChannel_vue_vue_type_template_id_5ccc2dfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EditChannel.vue?vue&type=template&id=5ccc2dfe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditChannel.vue?vue&type=template&id=5ccc2dfe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditChannel_vue_vue_type_template_id_5ccc2dfe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditChannel_vue_vue_type_template_id_5ccc2dfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channel/board.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/channel/board.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board_vue_vue_type_template_id_7833fcc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.vue?vue&type=template&id=7833fcc2& */ "./resources/js/components/channel/board.vue?vue&type=template&id=7833fcc2&");
/* harmony import */ var _board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.vue?vue&type=script&lang=js& */ "./resources/js/components/channel/board.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _board_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board.vue?vue&type=style&index=1&lang=css& */ "./resources/js/components/channel/board.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _board_vue_vue_type_template_id_7833fcc2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _board_vue_vue_type_template_id_7833fcc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channel/board.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channel/board.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/channel/board.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./board.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/board.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channel/board.vue?vue&type=style&index=1&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/channel/board.vue?vue&type=style&index=1&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--17-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--17-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./board.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/board.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/channel/board.vue?vue&type=template&id=7833fcc2&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/channel/board.vue?vue&type=template&id=7833fcc2& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_template_id_7833fcc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./board.vue?vue&type=template&id=7833fcc2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/board.vue?vue&type=template&id=7833fcc2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_template_id_7833fcc2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_template_id_7833fcc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channel/college.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/channel/college.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _college_vue_vue_type_template_id_7c156f90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./college.vue?vue&type=template&id=7c156f90& */ "./resources/js/components/channel/college.vue?vue&type=template&id=7c156f90&");
/* harmony import */ var _college_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./college.vue?vue&type=script&lang=js& */ "./resources/js/components/channel/college.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _college_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _college_vue_vue_type_template_id_7c156f90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _college_vue_vue_type_template_id_7c156f90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channel/college.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channel/college.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/channel/college.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_college_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./college.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/college.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_college_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channel/college.vue?vue&type=template&id=7c156f90&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/channel/college.vue?vue&type=template&id=7c156f90& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_college_vue_vue_type_template_id_7c156f90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./college.vue?vue&type=template&id=7c156f90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/college.vue?vue&type=template&id=7c156f90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_college_vue_vue_type_template_id_7c156f90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_college_vue_vue_type_template_id_7c156f90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channel/cover.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/channel/cover.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cover_vue_vue_type_template_id_ccb8d420_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cover.vue?vue&type=template&id=ccb8d420&scoped=true& */ "./resources/js/components/channel/cover.vue?vue&type=template&id=ccb8d420&scoped=true&");
/* harmony import */ var _cover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cover.vue?vue&type=script&lang=js& */ "./resources/js/components/channel/cover.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _cover_vue_vue_type_style_index_0_id_ccb8d420_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cover.vue?vue&type=style&index=0&id=ccb8d420&scoped=true&lang=css& */ "./resources/js/components/channel/cover.vue?vue&type=style&index=0&id=ccb8d420&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cover_vue_vue_type_template_id_ccb8d420_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cover_vue_vue_type_template_id_ccb8d420_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ccb8d420",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channel/cover.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channel/cover.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/channel/cover.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cover.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/cover.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channel/cover.vue?vue&type=style&index=0&id=ccb8d420&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/channel/cover.vue?vue&type=style&index=0&id=ccb8d420&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cover_vue_vue_type_style_index_0_id_ccb8d420_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--17-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--17-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./cover.vue?vue&type=style&index=0&id=ccb8d420&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/cover.vue?vue&type=style&index=0&id=ccb8d420&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cover_vue_vue_type_style_index_0_id_ccb8d420_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cover_vue_vue_type_style_index_0_id_ccb8d420_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cover_vue_vue_type_style_index_0_id_ccb8d420_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cover_vue_vue_type_style_index_0_id_ccb8d420_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cover_vue_vue_type_style_index_0_id_ccb8d420_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/channel/cover.vue?vue&type=template&id=ccb8d420&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/channel/cover.vue?vue&type=template&id=ccb8d420&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cover_vue_vue_type_template_id_ccb8d420_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./cover.vue?vue&type=template&id=ccb8d420&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/cover.vue?vue&type=template&id=ccb8d420&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cover_vue_vue_type_template_id_ccb8d420_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cover_vue_vue_type_template_id_ccb8d420_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channel/description.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/channel/description.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _description_vue_vue_type_template_id_4ad50216_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./description.vue?vue&type=template&id=4ad50216&scoped=true& */ "./resources/js/components/channel/description.vue?vue&type=template&id=4ad50216&scoped=true&");
/* harmony import */ var _description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description.vue?vue&type=script&lang=js& */ "./resources/js/components/channel/description.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _description_vue_vue_type_style_index_0_id_4ad50216_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./description.vue?vue&type=style&index=0&id=4ad50216&scoped=true&lang=css& */ "./resources/js/components/channel/description.vue?vue&type=style&index=0&id=4ad50216&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _description_vue_vue_type_template_id_4ad50216_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _description_vue_vue_type_template_id_4ad50216_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4ad50216",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channel/description.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channel/description.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/channel/description.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./description.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/description.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channel/description.vue?vue&type=style&index=0&id=4ad50216&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/channel/description.vue?vue&type=style&index=0&id=4ad50216&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_style_index_0_id_4ad50216_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--17-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--17-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./description.vue?vue&type=style&index=0&id=4ad50216&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/description.vue?vue&type=style&index=0&id=4ad50216&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_style_index_0_id_4ad50216_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_style_index_0_id_4ad50216_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_style_index_0_id_4ad50216_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_style_index_0_id_4ad50216_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_style_index_0_id_4ad50216_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/channel/description.vue?vue&type=template&id=4ad50216&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/channel/description.vue?vue&type=template&id=4ad50216&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_template_id_4ad50216_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./description.vue?vue&type=template&id=4ad50216&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/description.vue?vue&type=template&id=4ad50216&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_template_id_4ad50216_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_template_id_4ad50216_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channel/icon.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/channel/icon.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_vue_vue_type_template_id_d9ed4160_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.vue?vue&type=template&id=d9ed4160&scoped=true& */ "./resources/js/components/channel/icon.vue?vue&type=template&id=d9ed4160&scoped=true&");
/* harmony import */ var _icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.vue?vue&type=script&lang=js& */ "./resources/js/components/channel/icon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _icon_vue_vue_type_style_index_0_id_d9ed4160_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.vue?vue&type=style&index=0&id=d9ed4160&scoped=true&lang=css& */ "./resources/js/components/channel/icon.vue?vue&type=style&index=0&id=d9ed4160&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _icon_vue_vue_type_template_id_d9ed4160_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _icon_vue_vue_type_template_id_d9ed4160_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d9ed4160",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channel/icon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channel/icon.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/channel/icon.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./icon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/icon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channel/icon.vue?vue&type=style&index=0&id=d9ed4160&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/channel/icon.vue?vue&type=style&index=0&id=d9ed4160&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_style_index_0_id_d9ed4160_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--17-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--17-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./icon.vue?vue&type=style&index=0&id=d9ed4160&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/icon.vue?vue&type=style&index=0&id=d9ed4160&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_style_index_0_id_d9ed4160_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_style_index_0_id_d9ed4160_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_style_index_0_id_d9ed4160_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_style_index_0_id_d9ed4160_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_style_index_0_id_d9ed4160_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/channel/icon.vue?vue&type=template&id=d9ed4160&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/channel/icon.vue?vue&type=template&id=d9ed4160&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_template_id_d9ed4160_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./icon.vue?vue&type=template&id=d9ed4160&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/icon.vue?vue&type=template&id=d9ed4160&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_template_id_d9ed4160_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_template_id_d9ed4160_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channel/infrastructure.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/channel/infrastructure.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _infrastructure_vue_vue_type_template_id_3138e0ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infrastructure.vue?vue&type=template&id=3138e0ba& */ "./resources/js/components/channel/infrastructure.vue?vue&type=template&id=3138e0ba&");
/* harmony import */ var _infrastructure_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infrastructure.vue?vue&type=script&lang=js& */ "./resources/js/components/channel/infrastructure.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _infrastructure_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _infrastructure_vue_vue_type_template_id_3138e0ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _infrastructure_vue_vue_type_template_id_3138e0ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channel/infrastructure.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channel/infrastructure.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/channel/infrastructure.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_infrastructure_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./infrastructure.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/infrastructure.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_infrastructure_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channel/infrastructure.vue?vue&type=template&id=3138e0ba&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/channel/infrastructure.vue?vue&type=template&id=3138e0ba& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_infrastructure_vue_vue_type_template_id_3138e0ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./infrastructure.vue?vue&type=template&id=3138e0ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/infrastructure.vue?vue&type=template&id=3138e0ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_infrastructure_vue_vue_type_template_id_3138e0ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_infrastructure_vue_vue_type_template_id_3138e0ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channel/phone.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/channel/phone.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _phone_vue_vue_type_template_id_336467b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.vue?vue&type=template&id=336467b2& */ "./resources/js/components/channel/phone.vue?vue&type=template&id=336467b2&");
/* harmony import */ var _phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone.vue?vue&type=script&lang=js& */ "./resources/js/components/channel/phone.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _phone_vue_vue_type_template_id_336467b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _phone_vue_vue_type_template_id_336467b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channel/phone.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channel/phone.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/channel/phone.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./phone.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/phone.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channel/phone.vue?vue&type=template&id=336467b2&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/channel/phone.vue?vue&type=template&id=336467b2& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_phone_vue_vue_type_template_id_336467b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./phone.vue?vue&type=template&id=336467b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/phone.vue?vue&type=template&id=336467b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_phone_vue_vue_type_template_id_336467b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_phone_vue_vue_type_template_id_336467b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channel/social.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/channel/social.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _social_vue_vue_type_template_id_38e126f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social.vue?vue&type=template&id=38e126f8& */ "./resources/js/components/channel/social.vue?vue&type=template&id=38e126f8&");
/* harmony import */ var _social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social.vue?vue&type=script&lang=js& */ "./resources/js/components/channel/social.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _social_vue_vue_type_template_id_38e126f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _social_vue_vue_type_template_id_38e126f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channel/social.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channel/social.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/channel/social.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./social.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/social.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channel/social.vue?vue&type=template&id=38e126f8&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/channel/social.vue?vue&type=template&id=38e126f8& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_social_vue_vue_type_template_id_38e126f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./social.vue?vue&type=template&id=38e126f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/social.vue?vue&type=template&id=38e126f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_social_vue_vue_type_template_id_38e126f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_social_vue_vue_type_template_id_38e126f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channel/standard.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/channel/standard.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _standard_vue_vue_type_template_id_f167efd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./standard.vue?vue&type=template&id=f167efd8&scoped=true& */ "./resources/js/components/channel/standard.vue?vue&type=template&id=f167efd8&scoped=true&");
/* harmony import */ var _standard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./standard.vue?vue&type=script&lang=js& */ "./resources/js/components/channel/standard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _standard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _standard_vue_vue_type_template_id_f167efd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _standard_vue_vue_type_template_id_f167efd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f167efd8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channel/standard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channel/standard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/channel/standard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_standard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./standard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/standard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_standard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channel/standard.vue?vue&type=template&id=f167efd8&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/channel/standard.vue?vue&type=template&id=f167efd8&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_standard_vue_vue_type_template_id_f167efd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./standard.vue?vue&type=template&id=f167efd8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/standard.vue?vue&type=template&id=f167efd8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_standard_vue_vue_type_template_id_f167efd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_standard_vue_vue_type_template_id_f167efd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channel/website.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/channel/website.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website_vue_vue_type_template_id_ed4e66d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.vue?vue&type=template&id=ed4e66d8&scoped=true& */ "./resources/js/components/channel/website.vue?vue&type=template&id=ed4e66d8&scoped=true&");
/* harmony import */ var _website_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website.vue?vue&type=script&lang=js& */ "./resources/js/components/channel/website.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _website_vue_vue_type_style_index_0_id_ed4e66d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./website.vue?vue&type=style&index=0&id=ed4e66d8&scoped=true&lang=css& */ "./resources/js/components/channel/website.vue?vue&type=style&index=0&id=ed4e66d8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _website_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _website_vue_vue_type_template_id_ed4e66d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _website_vue_vue_type_template_id_ed4e66d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ed4e66d8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channel/website.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channel/website.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/channel/website.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_website_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./website.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/website.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_website_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channel/website.vue?vue&type=style&index=0&id=ed4e66d8&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/channel/website.vue?vue&type=style&index=0&id=ed4e66d8&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_website_vue_vue_type_style_index_0_id_ed4e66d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--17-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--17-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./website.vue?vue&type=style&index=0&id=ed4e66d8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/website.vue?vue&type=style&index=0&id=ed4e66d8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_website_vue_vue_type_style_index_0_id_ed4e66d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_website_vue_vue_type_style_index_0_id_ed4e66d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_website_vue_vue_type_style_index_0_id_ed4e66d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_website_vue_vue_type_style_index_0_id_ed4e66d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_17_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_17_2_node_modules_vue_loader_lib_index_js_vue_loader_options_website_vue_vue_type_style_index_0_id_ed4e66d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/channel/website.vue?vue&type=template&id=ed4e66d8&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/channel/website.vue?vue&type=template&id=ed4e66d8&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_website_vue_vue_type_template_id_ed4e66d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./website.vue?vue&type=template&id=ed4e66d8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channel/website.vue?vue&type=template&id=ed4e66d8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_website_vue_vue_type_template_id_ed4e66d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_website_vue_vue_type_template_id_ed4e66d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/editChannel.js":
/*!*************************************!*\
  !*** ./resources/js/editChannel.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// import VeeValidate from "vee-validate";
// window.Vue = require("vue");
// Vue.use(VeeValidate, { events: "blur" });
Vue.component("edit-channel", __webpack_require__(/*! ./components/EditChannel.vue */ "./resources/js/components/EditChannel.vue")["default"]);
var element = document.getElementById("edit_channel");

if (typeof element != "undefined" && element != null) {
  var cart = new Vue({
    el: "#edit_channel"
  });
}

/***/ }),

/***/ 5:
/*!*******************************************!*\
  !*** multi ./resources/js/editChannel.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\bridyc\resources\js\editChannel.js */"./resources/js/editChannel.js");


/***/ })

/******/ });
=======
/*! For license information please see editChannel.js.LICENSE.txt */
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=5)}({"+9Zo":function(e,t,r){"use strict";var n=r("8Qpl");r.n(n).a},"08c9":function(e,t,r){(e.exports=r("I1BE")(!1)).push([e.i,"\n.btn-success {\n  border-radius: 0;\n  padding: 5px;\n}\n",""])},"15tO":function(e,t,r){var n=r("hcby");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,i);n.locals&&(e.exports=n.locals)},"2q5W":function(e,t,r){var n=r("cTAZ");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,i);n.locals&&(e.exports=n.locals)},"4PEM":function(e,t,r){var n=r("R21m");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,i);n.locals&&(e.exports=n.locals)},5:function(e,t,r){e.exports=r("nNAk")},"5Mzr":function(e,t,r){"use strict";r.r(t);var n={data:function(){return{websiteLinkFromServer:"",formData:{website:""},websiteLinkError:"",websiteOnPresent:!1,url:"/api/website/"}},mounted:function(){this.getWebsiteData()},methods:{getFormData:function(){var e=this;this.$validator.validate().then((function(t){t&&(""!=e.websiteLinkFromServer&&(e.url="/api/website/edit"),axios.post(e.url,e.formData).then((function(t){!0===t.data.message&&(Vue.toasted.success("Website is updated",{position:"top-center",duration:5e3}),e.websiteLinkFromServer=t.data.data.website_link,e.websiteOnPresent=!0)})).catch((function(t){e.websiteLinkError=t.response.data.message})))}))},getWebsiteData:function(){var e=this;axios.get("/api/website").then((function(t){200===t.status&&null!=t.data.data.website_link&&(e.websiteLinkFromServer=t.data.data.website_link,e.websiteOnPresent=!0)})).catch((function(e){console.log(e)}))},editMyWebsiteLink:function(){this.formData.website=this.websiteLinkFromServer,this.websiteOnPresent=!1},goBack:function(){this.websiteOnPresent=!0}}},i=(r("H3Ze"),r("KHd+")),a=Object(i.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("transition",{attrs:{name:"slide-fade"}},[e.websiteOnPresent?r("div",[r("h4",[e._v("Your website link")]),e._v(" "),r("p",{staticStyle:{color:"blue"}},[e._v("\n        "+e._s(e.websiteLinkFromServer)+"\n      ")]),e._v(" "),r("button",{staticClass:"btn btnwebdes rounded-0",on:{click:function(t){return e.editMyWebsiteLink()}}},[r("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}}),e._v(" Change website url\n      ")])]):e._e()]),e._v(" "),e.websiteOnPresent?e._e():r("form",{on:{submit:function(t){return t.preventDefault(),e.getFormData()}}},[r("div",{staticClass:"form-group",class:{"has-error":e.errors.has("websiteLinkError")||""!=e.websiteLinkError}},[r("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Website")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.website,expression:"formData.website"},{name:"validate",rawName:"v-validate",value:"required|url",expression:"'required|url'"}],class:{"form-control":!0,"is-invalid":e.errors.has("website")},attrs:{"data-vv-delay":"20",name:"website",type:"text",placeholder:"Insert your website link(optional)"},domProps:{value:e.formData.website},on:{input:function(t){t.target.composing||e.$set(e.formData,"website",t.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("website"),expression:"errors.has('website')"}],staticClass:"text-danger"},[e._v("\n        "+e._s(e.errors.first("website"))+"\n      ")]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.websiteLinkError,expression:"websiteLinkError != ''"}],staticClass:"text-danger"},[e._v("\n        "+e._s(e.websiteLinkError)+"\n      ")])]),e._v(" "),""!=e.websiteLinkFromServer?r("button",{staticClass:"btn btn-success mt-n2 p-1",attrs:{type:"button"},on:{click:function(t){return e.goBack()}}},[r("i",{staticClass:"fa fa-long-arrow-left",attrs:{"aria-hidden":"true"}}),e._v(" Back\n    ")]):e._e(),e._v(" "),r("button",{staticClass:"btn btnsubmit mt-n3",attrs:{type:"submit"}},[e._v("Submit")])])],1)}),[],!1,null,"18308190",null).exports,s={data:function(){return{descriptionFromServer:"",descriptionStatus:!1,formData:{description:""},url:"/api/description",descriptionError:""}},mounted:function(){this.getDescriptionDataFromServer()},methods:{getDescriptionDataFromServer:function(){var e=this;axios.get(this.url).then((function(t){null!=t.data.data.description&&(e.descriptionFromServer=t.data.data.description,e.descriptionStatus=!0)})).catch((function(e){console.log(e)}))},getFormData:function(){var e=this;this.$validator.validate().then((function(t){t&&(""!=e.descriptionFromServer&&(e.url="/api/description/edit"),axios.post(e.url,e.formData).then((function(t){!0===t.data.message&&(Vue.toasted.success("Description is updated",{position:"top-center",duration:5e3}),e.descriptionFromServer=t.data.data.description,e.descriptionStatus=!0)})).catch((function(t){e.descriptionError=t.response.data.description[0]})))}))},editDescription:function(){this.formData.description=this.descriptionFromServer,this.descriptionStatus=!1},goBack:function(){this.descriptionStatus=!0}}},o=(r("zl8d"),Object(i.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.descriptionStatus?r("div",{staticClass:"desctext shadow"},[r("h4",{staticClass:"pl-2"},[e._v("Institute Description:")]),e._v(" "),r("p",{staticClass:"pl-2"},[e._v(e._s(e.descriptionFromServer))]),e._v(" "),r("button",{staticClass:"btn btnwebdes rounded-0",attrs:{type:"button"},on:{click:function(t){return e.editDescription()}}},[r("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}}),e._v(" Edit Description\n    ")])]):e._e(),e._v(" "),!1===e.descriptionStatus?r("form",{on:{submit:function(t){return t.preventDefault(),e.getFormData()}}},[r("div",{staticClass:"form-group",class:{"has-error":e.errors.has("descriptionError")||""!=e.descriptionError}},[r("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Describe Your Institute")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.formData.description,expression:"formData.description"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"is-invalid":e.errors.has("description")},attrs:{rows:"5",id:"description","data-vv-delay":"20",name:"description",type:"text",placeholder:"Briefly describe your institute"},domProps:{value:e.formData.description},on:{input:function(t){t.target.composing||e.$set(e.formData,"description",t.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("description"),expression:"errors.has('description')"}],staticClass:"text-danger"},[e._v("\n        "+e._s(e.errors.first("description"))+"\n      ")]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.descriptionError,expression:"descriptionError != ''"}],staticClass:"help is-danger"},[e._v("\n        "+e._s(e.descriptionError)+"\n      ")])]),e._v(" "),""!=e.descriptionFromServer?r("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(t){return e.goBack()}}},[r("i",{staticClass:"fa fa-long-arrow-left mt-n2 p-1",attrs:{"aria-hidden":"true"}}),e._v("Back\n    ")]):e._e(),e._v(" "),r("button",{staticClass:"btn btnsubmit mt-n3",attrs:{type:"submit"}},[e._v("Submit")])]):e._e()])}),[],!1,null,"91de0950",null).exports),u=r("5ZeN"),l={data:function(){return{userImage:"",userImageStatus:!1,userId:null,imageData:"",selectedImagefile:null,imageError:"",url:"/api/cover/upload",domainUrl:location.origin}},components:{PictureInput:u.a},mounted:function(){this.getCoverData()},methods:{getCoverData:function(){var e=this;axios.get("/api/cover").then((function(t){e.userImage=t.data.image,e.userId=t.data.userId,e.userImageStatus=!0})).catch((function(e){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})}))},onImageSubmit:function(){var e=this;if(""!=this.imageData){var t=new FormData;t.append("image",this.imageData),axios.post(this.url,t).then((function(t){e.userImage=t.data.image,e.userImageStatus=!0})).catch((function(t){t.response.data.errors.image&&(e.imageError=t.response.data.errors.image[0])}))}},onChange:function(e){this.$refs.pictureInput.image&&(this.imageData=this.$refs.pictureInput.image)},editTheIcon:function(){this.userImageStatus=!1},canTheEdit:function(){this.userImageStatus=!0}}},c=(r("eIzz"),Object(i.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.userImageStatus?r("div",[r("img",{attrs:{height:"150",width:"250",src:"institute-cover-default.jpg"===e.userImage?"/images/"+e.userImage:"/media/channel/"+e.userId+"/cover/"+e.userImage,alt:"icon image"}}),e._v(" "),r("button",{staticClass:"btn",on:{click:function(t){return e.editTheIcon()}}},[r("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}}),e._v(" Change Cover Photo\n    ")])]):e._e(),e._v(" "),!1===e.userImageStatus?r("div",[r("picture-input",{ref:"pictureInput",attrs:{width:"250",height:"150",margin:"16",accept:"image/jpeg, image/png",size:"10","button-class":"btn","custom-strings":{upload:"<h1>Bummer!</h1>",drag:"Upload a cover picture"}},on:{change:e.onChange}}),e._v(" "),r("div",{staticClass:"btnsuca mt-2"},[""!=e.imageData?r("button",{staticClass:"btn btnsubmitcover rounded-0",attrs:{type:"button"},on:{click:function(t){return e.onImageSubmit()}}},[e._v("\n        Submit\n      ")]):e._e(),e._v(" "),null!=e.userImage?r("button",{staticClass:"btn btn-success",on:{click:function(t){return e.canTheEdit()}}},[r("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}}),e._v("Cancel\n      ")]):e._e()]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.imageError,expression:"imageError"}],staticClass:"text-danger"},[e._v(e._s(e.imageError))])],1):e._e()])}),[],!1,null,"cc00b5d4",null).exports);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f={data:function(){var e;return d(e={imageData:"",url:"api/icon",imageError:"",userImage:"",userImageStatus:!1,userId:null},"url","/api/icon/upload"),d(e,"domainUrl",location.origin),e},mounted:function(){this.getImageData()},methods:{getImageData:function(){var e=this;axios.get("/api/icon").then((function(t){e.userImage=t.data.image,e.userId=t.data.userId,e.userImageStatus=!0})).catch((function(e){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})}))},onChange:function(e){this.$refs.pictureInput.image&&(this.imageData=this.$refs.pictureInput.image)},onImageSubmit:function(){var e=this;if(""!=this.imageData){var t=new FormData;t.append("image",this.imageData),axios.post(this.url,t).then((function(t){e.userImage=t.data.image,e.userImageStatus=!0})).catch((function(t){t.response.data.errors.image&&(e.imageError=t.response.data.errors.image[0])}))}},editTheIcon:function(){this.userImageStatus=!1,this.imageData=this.userImage},canTheEdit:function(){this.userImageStatus=!0}},components:{PictureInput:u.a}},h=(r("w3U2"),Object(i.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mb-3"},[e.userImageStatus?r("div",[r("img",{attrs:{height:"150",width:"152",src:"institute-logo-default.jpg"===e.userImage?"/images/"+e.userImage:"/media/channel/"+e.userId+"/avatar/"+e.userImage,alt:"icon image"}}),e._v(" "),r("button",{staticClass:"btn",on:{click:function(t){return e.editTheIcon()}}},[r("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}}),e._v(" Change Logo\n    ")])]):e._e(),e._v(" "),!1===e.userImageStatus?r("div",[r("picture-input",{ref:"pictureInput",attrs:{width:"152",height:"150",margin:"16",accept:"image/jpeg, image/png",size:"10","button-class":"btn","custom-strings":{upload:"<h1>Bummer!</h1>",drag:"Upload your logo"},name:"image"},on:{change:e.onChange}}),e._v(" "),r("div",{staticClass:"btnsuca mt-2"},[""!=e.imageData?r("button",{staticClass:"btn btnsubmiticon rounded-0",attrs:{type:"button"},on:{click:function(t){return e.onImageSubmit()}}},[e._v("\n        Submit\n      ")]):e._e(),e._v(" "),null!=e.userImage?r("button",{staticClass:"btn btn-success",on:{click:function(t){return e.canTheEdit()}}},[r("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}}),e._v("Cancel\n      ")]):e._e()]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.imageError,expression:"imageError"}],staticClass:"text-danger"},[e._v(e._s(e.imageError))])],1):e._e()])}),[],!1,null,"59946390",null).exports),p={data:function(){return{infrastructure:{},infrastructureStatus:!0,formData:{no_of_class:"",canteen:"",stationary:"",boys_hostel:"",girls_hostel:"",computer_learning:"",wall:"",library:"",no_of_books:"",playground:"",hostel:"",bus_services:""},serverErrors:{no_of_class:"",canteen:"",stationary:"",boys_hostel:"",girls_hostel:"",computer_learning:"",wall:"",library:"",no_of_books:"",playground:"",hostel:"",bus_services:""}}},mounted:function(){this.getUserData()},methods:{getUserData:function(){var e=this;axios.get("/api/getUserData").then((function(t){200===t.status&&(e.infrastructure=t.data.user,null!=e.infrastructure.canteen&&(e.infrastructureStatus=!1))})).catch((function(e){console.log(errros)}))},validateForm:function(){var e=this;this.$validator.validate().then((function(t){t&&axios.post("/api/infra/store/"+e.infrastructure.id,e.formData).then((function(t){e.infrastructureStatus=!1,e.infrastructure=t.data.channel})).catch((function(t){t.response.data.errors.no_of_class&&(e.serverErrors.no_of_class=t.response.data.errors.no_of_class[0]),t.response.data.errors.canteen&&(e.serverErrors.canteen=t.response.data.errors.canteen[0]),t.response.data.errors.stationary&&(e.serverErrors.stationary=t.response.data.errors.stationary[0]),t.response.data.errors.computer_learning&&(e.serverErrors.computer_learning=t.response.data.errors.computer_learning[0]),t.response.data.errors.boys_hostel&&(e.serverErrors.boys_hostel=t.response.data.errors.boys_hostel[0]),t.response.data.errors.wall&&(e.serverErrors.wall=t.response.data.errors.wall[0]),t.response.data.errors.library&&(e.serverErrors.library=t.response.data.errors.library[0]),t.response.data.errors.no_of_books&&(e.serverErrors.no_of_books=t.response.data.errors.no_of_books[0]),t.response.data.errors.playground&&(e.serverErrors.playground=t.response.data.errors.playground[0]),t.response.data.errors.girls_hostel&&(e.serverErrors.girls_hostel=t.response.data.errors.girls_hostel[0])}))}))}}},v=Object(i.a)(p,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),e._v(" "),e.infrastructureStatus?e._e():r("div",[r("div",{staticClass:"row infrastructure-display mt-5 py-3"},[r("div",{staticClass:"col-sm-4"},[r("p",[r("img",{staticClass:"mr-2",attrs:{src:"/images/stationery.svg",alt:"Stationery Image"}}),e._v("\n                 Stationery : "),r("strong",{staticClass:"ml-1 text-capitalize"},[e._v("\n                   "+e._s(e.infrastructure.stationary)+"\n                 ")])]),e._v(" "),r("p",[r("img",{staticClass:"mr-2",attrs:{src:"/images/computer.svg",alt:"computer Image"}}),e._v("\n                 Computer : "),r("strong",{staticClass:"ml-1 text-capitalize"},[e._v("\n                   "+e._s(e.infrastructure.computer_learning)+"\n                 ")])]),e._v(" "),r("p",[r("img",{staticClass:"mr-2",attrs:{src:"/images/hostel.svg",alt:"Hostel Image"}}),e._v("\n                 Boys Hostel : "),r("strong",{staticClass:"ml-1 text-capitalize"},[e._v("\n                   "+e._s(e.infrastructure.boys_hostel)+"\n                 ")])]),e._v(" "),r("p",[r("img",{staticClass:"mr-2",attrs:{src:"/images/bus.svg",alt:"Bus Image"}}),e._v("\n                 Girls Hostel : "),r("strong",{staticClass:"ml-1 text-capitalize"},[e._v("\n                   "+e._s(e.infrastructure.girls_hostel)+"\n                 ")])])]),e._v(" "),r("div",{staticClass:"col-sm-4"},[r("p",[r("img",{staticClass:"mr-2",attrs:{src:"/images/playground.svg",alt:"playground Image"}}),e._v("\n                 Playground : "),r("strong",{staticClass:"ml-1 text-capitalize"},[e._v("\n                   "+e._s(e.infrastructure.playground)+"\n                 ")])]),e._v(" "),r("p",[r("img",{staticClass:"mr-2",attrs:{src:"/images/library.svg",alt:"Library Image"}}),e._v("\n                 Library : "),r("strong",{staticClass:"ml-1 text-capitalize"},[e._v("\n                   "+e._s(e.infrastructure.library)+"\n                 ")])]),e._v(" "),r("p",[r("img",{staticClass:"mr-2",attrs:{src:"/images/book.svg",alt:"Books Image"}}),e._v("\n                 No of Books : "),r("strong",{staticClass:"ml-1 text-capitalize"},[e._v("\n                   "+e._s(e.infrastructure.no_of_books)+"\n                 ")])])]),e._v(" "),r("div",{staticClass:"col-sm-4"},[r("p",[r("img",{staticClass:"mr-2",attrs:{src:"/images/canteen.svg",alt:"Canteen Image"}}),e._v("\n                 Canteen : "),r("strong",{staticClass:"ml-1 text-capitalize"},[e._v("\n                   "+e._s(e.infrastructure.canteen)+"\n                 ")])]),e._v(" "),r("p",[r("img",{staticClass:"mr-2",attrs:{src:"/images/bus.svg",alt:"Bus Image"}}),e._v(" Bus\n                 Services : "),r("strong",{staticClass:"ml-1 text-capitalize"},[e._v("\n                   "+e._s(e.infrastructure.bus_services)+"\n                 ")])]),e._v(" "),r("p",[r("img",{staticClass:"mr-2",attrs:{src:"/images/fence.svg",alt:"fence Image"}}),e._v("\n                 Boundary : "),r("strong",{staticClass:"ml-1 text-capitalize"},[e._v("\n                  "+e._s(e.infrastructure.wall)+"\n                 ")])])])])]),e._v(" "),e.infrastructureStatus?r("div",[r("form",{on:{submit:function(t){return t.preventDefault(),e.validateForm()}}},[r("div",{staticClass:"form-group row mx-lg-5",class:{"has-error":e.errors.has("class")||""!=e.serverErrors.no_of_class}},[r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"exampleInputEmail1"}},[e._v("Total Class Room:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.no_of_class,expression:"formData.no_of_class"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"col-sm-10",class:{"form-control":!0,"is-invalid":e.errors.has("class")},attrs:{id:"class","data-vv-delay":"20",name:"class",type:"text",placeholder:"Total number of Class room"},domProps:{value:e.formData.no_of_class},on:{input:function(t){t.target.composing||e.$set(e.formData,"no_of_class",t.target.value)}}}),e._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("class"),expression:"errors.has('class')"}],staticClass:"is-invalid"}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("class"),expression:"errors.has('class')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("class")))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.class,expression:"serverErrors.class != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverErrors.class))])]),e._v(" "),r("div",{staticClass:"form-group row mx-lg-5",class:{"has-error":e.errors.has("canteen")||""!=e.serverErrors.canteen}},[r("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Canteen")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.formData.canteen,expression:"formData.canteen"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"col-sm-10 form-control",attrs:{name:"canteen"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.formData,"canteen",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("Select your choice")]),e._v(" "),r("option",{attrs:{value:"yes"}},[e._v("Yes")]),e._v(" "),r("option",{attrs:{value:"no"}},[e._v("No")])]),e._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("canteen"),expression:"errors.has('canteen')"}],staticClass:"is-invalid"}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("canteen"),expression:"errors.has('canteen')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("canteen")))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.canteen,expression:"serverErrors.canteen != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverErrors.canteen))])]),e._v(" "),r("div",{staticClass:"form-group row mx-lg-5",class:{"has-error":e.errors.has("stationary")||""!=e.serverErrors.stationary}},[r("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Stationary")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.formData.stationary,expression:"formData.stationary"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"col-sm-10 form-control",attrs:{name:"stationary"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.formData,"stationary",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("Select your choice")]),e._v(" "),r("option",{attrs:{value:"yes"}},[e._v("Yes")]),e._v(" "),r("option",{attrs:{value:"no"}},[e._v("No")])]),e._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("stationary"),expression:"errors.has('stationary')"}],staticClass:"is-invalid"}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("stationary"),expression:"errors.has('stationary')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("stationary")))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.stationary,expression:"serverErrors.stationary != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverErrors.stationary))])]),e._v(" "),r("div",{staticClass:"form-group row mx-lg-5",class:{"has-error":e.errors.has("computer_learning")||""!=e.serverErrors.computer_learning}},[r("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Computer Learning:")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.formData.computer_learning,expression:"formData.computer_learning"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"col-sm-9 form-control",attrs:{name:"computer_learning"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.formData,"computer_learning",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("Select your choice")]),e._v(" "),r("option",{attrs:{value:"yes"}},[e._v("Yes")]),e._v(" "),r("option",{attrs:{value:"no"}},[e._v("No")])]),e._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("computer_learning"),expression:"errors.has('computer_learning')"}],staticClass:"is-invalid"}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("computer_learning"),expression:"errors.has('computer_learning')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("computer_learning")))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.computer_learning,expression:"serverErrors.computer_learning != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverErrors.computer_learning))])]),e._v(" "),r("div",{staticClass:"form-group row mx-lg-5",class:{"has-error":e.errors.has("boys_hostel")||""!=e.serverErrors.boys_hostel}},[r("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Boys Hostel")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.formData.boys_hostel,expression:"formData.boys_hostel"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"col-sm-10 form-control",attrs:{name:"boys_hostel"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.formData,"boys_hostel",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("Select your choice")]),e._v(" "),r("option",{attrs:{value:"yes"}},[e._v("Yes")]),e._v(" "),r("option",{attrs:{value:"no"}},[e._v("No")])]),e._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("boys_hostel"),expression:"errors.has('boys_hostel')"}],staticClass:"is-invalid"}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("boys_hostel"),expression:"errors.has('boys_hostel')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("boys_hostel")))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.boys_hostel,expression:"serverErrors.boys_hostel != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverErrors.boys_hostel))])]),e._v(" "),r("div",{staticClass:"form-group row mx-lg-5",class:{"has-error":e.errors.has("girls_hostel")||""!=e.serverErrors.girls_hostel}},[r("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Girls Hostel")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.formData.girls_hostel,expression:"formData.girls_hostel"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"col-sm-10 form-control",attrs:{name:"girls_hostel"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.formData,"girls_hostel",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("Select your choice")]),e._v(" "),r("option",{attrs:{value:"yes"}},[e._v("Yes")]),e._v(" "),r("option",{attrs:{value:"no"}},[e._v("No")])]),e._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("girls_hostel"),expression:"errors.has('girls_hostel')"}],staticClass:"is-invalid"}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("girls_hostel"),expression:"errors.has('girls_hostel')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("girls_hostel")))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.girls_hostel,expression:"serverErrors.girls_hostel != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverErrors.girls_hostel))])]),e._v(" "),r("div",{staticClass:"form-group row mx-lg-5",class:{"has-error":e.errors.has("wall")||""!=e.serverErrors.wall}},[r("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Campus Boundary")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.formData.wall,expression:"formData.wall"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"col-sm-9 form-control",attrs:{name:"wall"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.formData,"wall",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("Select your choice")]),e._v(" "),r("option",{attrs:{value:"no_wall"}},[e._v("No wall")]),e._v(" "),r("option",{attrs:{value:"fence"}},[e._v("Fence")]),e._v(" "),r("option",{attrs:{value:"wall"}},[e._v("Wall boundary")])]),e._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("wall"),expression:"errors.has('wall')"}],staticClass:"is-invalid"}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("wall"),expression:"errors.has('wall')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("wall")))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.wall,expression:"serverErrors.wall != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverErrors.wall))])]),e._v(" "),r("div",{staticClass:"form-group row mx-lg-5",class:{"has-error":e.errors.has("library")||""!=e.serverErrors.library}},[r("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Library Availability:")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.formData.library,expression:"formData.library"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"col-sm-9 form-control",attrs:{name:"library"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.formData,"library",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("Select your choice")]),e._v(" "),r("option",{attrs:{value:"yes"}},[e._v("Yes")]),e._v(" "),r("option",{attrs:{value:"no"}},[e._v("No")])]),e._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("library"),expression:"errors.has('library')"}],staticClass:"is-invalid"}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("library"),expression:"errors.has('library')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("library")))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.library,expression:"serverErrors.library != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverErrors.library))])]),e._v(" "),r("div",{staticClass:"form-group row mx-lg-5",class:{"has-error":e.errors.has("books")||""!=e.serverErrors.no_of_books}},[r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"exampleInputEmail1"}},[e._v("Total Books:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.no_of_books,expression:"formData.no_of_books"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"col-sm-10",class:{"form-control":!0,"is-invalid":e.errors.has("books")},attrs:{id:"books","data-vv-delay":"20",name:"books",type:"text",placeholder:"Total number of books in library"},domProps:{value:e.formData.no_of_books},on:{input:function(t){t.target.composing||e.$set(e.formData,"no_of_books",t.target.value)}}}),e._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("class"),expression:"errors.has('class')"}],staticClass:"is-invalid"}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("books"),expression:"errors.has('books')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("books")))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.no_of_books,expression:"serverErrors.no_of_books != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverErrors.no_of_books))])]),e._v(" "),r("div",{staticClass:"form-group row mx-lg-5",class:{"has-error":e.errors.has("playground")||""!=e.serverErrors.playground}},[r("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Playground:")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.formData.playground,expression:"formData.playground"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"col-sm-10 form-control",attrs:{name:"playground"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.formData,"playground",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("Select your choice")]),e._v(" "),r("option",{attrs:{value:"yes"}},[e._v("Yes")]),e._v(" "),r("option",{attrs:{value:"no"}},[e._v("No")])]),e._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("playground"),expression:"errors.has('playground')"}],staticClass:"is-invalid"}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("playground"),expression:"errors.has('playground')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("playground")))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.playground,expression:"serverErrors.playground != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverErrors.playground))])]),e._v(" "),r("div",{staticClass:"form-group row mx-lg-5",class:{"has-error":e.errors.has("bus_services")||""!=e.serverErrors.bus_services}},[r("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Bus Services:")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.formData.bus_services,expression:"formData.bus_services"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"col-sm-10 form-control",attrs:{name:"bus_services"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.formData,"bus_services",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("Select your choice")]),e._v(" "),r("option",{attrs:{value:"yes"}},[e._v("Yes")]),e._v(" "),r("option",{attrs:{value:"no"}},[e._v("No")])]),e._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("bus_services"),expression:"errors.has('bus_services')"}],staticClass:"is-invalid"}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("bus_services"),expression:"errors.has('bus_services')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("bus_services")))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.bus_services,expression:"serverErrors.bus_services != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverErrors.bus_services))])]),e._v(" "),r("button",{staticClass:"btn infrabtn",attrs:{type:"submit"}},[e._v("Submit")])])]):e._e()])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"infraheader mb-3 p-1",attrs:{id:"infrastrucuter"}},[t("h3",[this._v("Let's talk about Infrastructure")])])}],!1,null,null,null).exports,m=r("jl8+"),g=r.n(m),b={data:function(){return{userData:[],userDataLength:0,standardData:[],standardDataStatus:!1,standardDataDecider:[],value:[]}},mounted:function(){this.getStandardData()},components:{Multiselect:g.a},methods:{getStandardData:function(){var e=this;axios.get("/api/standard").then((function(t){e.userData=t.data.channel[0].standard,e.userDataLength=e.userData.length,e.standardData=t.data.standard,e.userData.length>0&&(e.standardDataStatus=!0),e.theStandardDecider()})).catch((function(e){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})}))},editTheStandard:function(){this.standardDataStatus=!1},theStandardDecider:function(){var e=this;this.value=[],null!=this.userData&&this.standardData.map((function(t){e.userData.map((function(r){r.standard_name===t.standard_name&&e.value.push(t)}))}))},submitStandardData:function(){var e=this;if(this.value.length>0){var t={standard:[]};this.value.map((function(e){t.standard.push(e.id)})),axios.post("/api/standard",t).then((function(t){e.userData=[],e.userData=t.data.data,e.standardDataStatus=!0,e.theStandardDecider()})).catch((function(e){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})}))}else Vue.toasted.error("Field is empty",{position:"top-center",duration:5e3})},standardNameOnly:function(e){return"".concat(e.standard_name)}}},y=(r("YLx5"),Object(i.a)(b,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h4",[e._v("School Standards")]),e._v(" "),null!=e.userData&&e.standardDataStatus?r("div",[r("h5",[e._v("List of standard available :")]),e._v(" "),e._l(e.userData,(function(t,n){return r("button",{key:n,staticClass:"btn btn-success m-1"},[e._v("\n      "+e._s(t.standard_name)+"\n    ")])})),e._v(" "),r("button",{staticClass:"btn",on:{click:function(t){return e.editTheStandard()}}},[r("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}})])],2):e._e(),e._v(" "),e.standardDataStatus?e._e():r("div",[r("multiselect",{attrs:{options:e.standardData,"track-by":"standard_name","custom-label":e.standardNameOnly,multiple:!0,"tag-placeholder":"Select classes of your institute","option-height":104},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),r("button",{staticClass:"btn btnsubmit",attrs:{type:"submit"},on:{click:function(t){return e.submitStandardData()}}},[e._v("\n      Submit\n    ")])],1),e._v(" "),r("br"),e._v(" "),r("br")])}),[],!1,null,"fb5a6ec2",null).exports),w={data:function(){return{userData:[],boardData:[],boardDataStatus:!1,value:[]}},mounted:function(){this.getBoardData()},methods:{getBoardData:function(){var e=this;axios.get("/api/board").then((function(t){e.userData=t.data.channel[0].board,e.boardData=t.data.board,e.userData.length>0&&(e.boardDataStatus=!0),e.theBoardDecider()})).catch((function(e){console.log("i am error"+e),Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})}))},theBoardDecider:function(){var e=this;this.value=[],null!=this.userData&&this.boardData.map((function(t){e.userData.map((function(r){r.name===t.name&&e.value.push(t)}))}))},boardNameOnly:function(e){return"".concat(e.name)},editTheboard:function(){this.boardDataStatus=!1},submitStandardData:function(){var e=this;if(this.value.length){var t={board:[]};this.value.map((function(e){t.board.push(e.id)})),axios.post("/api/board",t).then((function(t){e.userData=[],e.userData=t.data.data,console.log(e.userData),e.streamDataStatus=!0,e.theBoardDecider()})).catch((function(e){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})}))}else Vue.toasted.error("Field is empty",{position:"top-center",duration:5e3});this.boardDataStatus=!0}},components:{Multiselect:g.a}},x=(r("+9Zo"),Object(i.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h4",[e._v("School Boards")]),e._v(" "),null!=e.userData&&!0===e.boardDataStatus?r("div",[e._l(e.userData,(function(t,n){return r("button",{key:n,staticClass:"btn btn-info m-1"},[e._v("\n      "+e._s(t.name)+"\n    ")])})),e._v(" "),r("button",{staticClass:"btn",on:{click:function(t){return e.editTheboard()}}},[r("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}})])],2):e._e(),e._v(" "),!1===e.boardDataStatus?r("div",[r("multiselect",{attrs:{options:e.boardData,"track-by":"name","custom-label":e.boardNameOnly,multiple:!0,"tag-placeholder":"Select classes of your institute","option-height":104},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),r("button",{staticClass:"btn btnsubmit",attrs:{type:"submit"},on:{click:function(t){return e.submitStandardData()}}},[e._v("\n      Submit\n    ")])],1):e._e(),e._v(" "),r("br"),e._v(" "),r("br")])}),[],!1,null,null,null).exports),C=(r("e7F3"),{data:function(){return{getTheModel:!1,socialData:[],formData:{facebook:"",instagram:"",linkedin:"",youtube:""},serverErrors:{facebook:"",instagram:"",linkedin:"",youtube:""}}},mounted:function(){this.getSocailData()},methods:{getSocailData:function(){var e=this;axios.get("/api/social").then((function(t){e.socialData=t.data.channel.extra_attributes.social})).catch((function(e){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})}))},validateForm:function(){var e=this;this.$validator.validate().then((function(t){t&&axios.post("/api/social",e.formData).then((function(t){e.socialData=t.data.data.extra_attributes.social,e.getTheModel=!1})).catch((function(t){t.response.data.errors.facebook&&(e.serverErrors.facebook=t.response.data.errors.facebook[0]),t.response.data.errors.instagram&&(e.serverErrors.instagram=t.response.data.errors.instagram[0]),t.response.data.errors.linkedIn&&(e.serverErrors.linkedIn=t.response.data.errors.linkedIn[0]),t.response.data.errors.youtube&&(e.serverErrors.youtube=t.response.data.errors.youtube[0])}))}))},editTheSocial:function(){this.getTheModel=!this.getTheModel,null!=this.socialData.facebook&&(this.formData.facebook=this.socialData.facebook),null!=this.socialData.instagram&&(this.formData.instagram=this.socialData.instagram),null!=this.socialData.linkedin&&(this.formData.linkedin=this.socialData.linkedin),null!=this.socialData.youtube&&(this.formData.youtube=this.socialData.youtube)}}}),D=Object(i.a)(C,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h4",[e._v("Social Media handles")]),e._v(" "),!1===e.getTheModel?r("ul",{staticClass:"edit-social"},[null!=e.socialData.facebook?r("li",[r("a",{attrs:{href:e.socialData.facebook,target:"_blank"}},[r("span",[e._v(" Facebook")])])]):e._e(),e._v(" "),null!=e.socialData.instagram?r("li",[r("a",{attrs:{href:e.socialData.instagram,target:"_blank"}},[r("span",[e._v(" Instagram")])])]):e._e(),e._v(" "),null!=e.socialData.linkedin?r("li",[r("a",{attrs:{href:e.socialData.linkedin,target:"_blank"}},[r("span",[e._v(" LinkedIn")])])]):e._e(),e._v(" "),null!=e.socialData.youtube?r("li",[r("a",{attrs:{href:e.socialData.youtube,target:"_blank"}},[r("span",[e._v(" Youtube")])])]):e._e()]):e._e(),e._v(" "),r("button",{staticClass:"btn btnwebdes",on:{click:function(t){return e.editTheSocial()}}},[e._v("Edit")]),e._v(" "),e.getTheModel?r("div",[r("form",{on:{submit:function(t){return t.preventDefault(),e.validateForm()}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-sm-6",class:{"has-error":e.errors.has("facebook")||""!=e.serverErrors.facebook}},[r("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Facebook")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.facebook,expression:"formData.facebook"}],class:{"form-control":!0,"is-invalid":e.errors.has("facebook")},attrs:{id:"facebook","data-vv-delay":"20",name:"facebook",type:"text",placeholder:"facebook (optional)"},domProps:{value:e.formData.facebook},on:{focus:function(t){e.serverErrors.facebook=""},input:function(t){t.target.composing||e.$set(e.formData,"facebook",t.target.value)}}}),e._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("facebook"),expression:"errors.has('facebook')"}],staticClass:"is-invalid"}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("facebook"),expression:"errors.has('facebook')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("facebook")))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.facebook,expression:"serverErrors.facebook != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverErrors.facebook))])]),e._v(" "),r("div",{staticClass:"form-group col-sm-6",class:{"has-error":e.errors.has("instagram")||""!=e.serverErrors.instagram}},[r("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Instagram")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.instagram,expression:"formData.instagram"}],class:{"form-control":!0,"is-invalid":e.errors.has("instagram")},attrs:{id:"instagram","data-vv-delay":"20",name:"instagram",type:"text",placeholder:"instagram (optional)"},domProps:{value:e.formData.instagram},on:{focus:function(t){e.serverErrors.instagram=""},input:function(t){t.target.composing||e.$set(e.formData,"instagram",t.target.value)}}}),e._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("instagram"),expression:"errors.has('instagram')"}],staticClass:"is-invalid"}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("instagram"),expression:"errors.has('instagram')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("instagram")))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.instagram,expression:"serverErrors.instagram != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverErrors.instagram))])])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-md-6",class:{"has-error":e.errors.has("linkedIn")||""!=e.serverErrors.linkedIn}},[r("label",{attrs:{for:"exampleInputEmail1"}},[e._v("LinkedIn")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.linkedin,expression:"formData.linkedin"}],class:{"form-control":!0,"is-invalid":e.errors.has("linkedIn")},attrs:{id:"linkedIn","data-vv-delay":"20",name:"linkedIn",type:"text",placeholder:"linkedIn (optional)"},domProps:{value:e.formData.linkedin},on:{focus:function(t){e.serverErrors.linkedin=""},input:function(t){t.target.composing||e.$set(e.formData,"linkedin",t.target.value)}}}),e._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("linkedIn"),expression:"errors.has('linkedIn')"}],staticClass:"is-invalid"}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("linkedIn"),expression:"errors.has('linkedIn')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("linkedIn")))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.linkedin,expression:"serverErrors.linkedin != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverErrors.linkedin))])]),e._v(" "),r("div",{staticClass:"form-group col-md-6",class:{"has-error":e.errors.has("youtube")||""!=e.serverErrors.youtube}},[r("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Youtube")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.youtube,expression:"formData.youtube"}],class:{"form-control":!0,"is-invalid":e.errors.has("youtube")},attrs:{id:"youtube","data-vv-delay":"20",name:"youtube",type:"text",placeholder:"youtube (optional)"},domProps:{value:e.formData.youtube},on:{focus:function(t){e.serverErrors.youtube=""},input:function(t){t.target.composing||e.$set(e.formData,"youtube",t.target.value)}}}),e._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("youtube"),expression:"errors.has('youtube')"}],staticClass:"is-invalid"}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("youtube"),expression:"errors.has('youtube')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("youtube")))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.youtube,expression:"serverErrors.youtube != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverErrors.youtube))])])]),e._v(" "),r("button",{staticClass:"btn btnsubmit",attrs:{type:"submit"}},[e._v("Submit")])])]):e._e()])}),[],!1,null,null,null).exports,S={data:function(){return{imageData:"",imageError:"",collegeImageData:{},collegeImageEntry:!1,channelData:[],userId:"",domainUrl:location.origin}},props:{channel:{type:Array,default:null}},created:function(){this.channelData=this.channel[0],console.log(this.channelData),this.userId=this.channel[0].user_id},mounted:function(){},components:{PictureInput:u.a},methods:{onChange:function(e){this.$refs.pictureInput.image&&(this.imageData=this.$refs.pictureInput.image)},onImageSubmit:_.debounce((function(){var e=this;if(""!=this.imageData){var t=new FormData;t.append("image",this.imageData),axios.post("/api/college/image/upload/"+this.channelData.id,t).then((function(t){e.channelData.college_image=t.data.image,e.collegeImageEntry=!1,e.imageData=""})).catch((function(t){t.response.data.errors.image&&(e.imageError=t.response.data.errors.image[0])}))}}),500),deleteCollege:function(e,t){var r=this;axios.post("/api/delete/college/image/"+e.id).then((function(e){e.data.message&&(r.channelData.college_image.splice(t,1),Vue.toasted.success("Image successfully deleted",{position:"top-center",duration:5e3}))})).catch((function(e){Vue.toasted.error("Image successfully deleted",{position:"top-center",duration:5e3})}))},insertImage:function(){this.collegeImageEntry=!0},canTheEdit:function(){this.collegeImageEntry=!1}}},E=Object(i.a)(S,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("h4",[e._v("Your Gallery (First five photos will be displayed)")]),e._v(" "),r("ul",{staticClass:"nav"},e._l(e.channelData.college_image,(function(t,n){return r("li",{key:n,staticClass:"m-2"},[r("img",{staticClass:"border border-light m-1",attrs:{src:e.domainUrl+"/media/channel/"+e.userId+"/college/"+t.image_path,height:"120",width:"120",alt:"college infrastructure"}}),e._v(" "),r("button",{staticClass:"btn btn-danger",on:{click:function(r){return e.deleteCollege(t,n)}}},[e._v("\n          Delete\n        ")])])})),0)]),e._v(" "),r("br"),e._v(" "),e.collegeImageEntry?e._e():r("button",{staticClass:"btn btnsubmit rounded-0",on:{click:function(t){return e.insertImage()}}},[e._v("\n    Insert images\n  ")]),e._v(" "),e.collegeImageEntry?r("div",[r("picture-input",{ref:"pictureInput",attrs:{width:"152",height:"150",margin:"16",accept:"image/jpeg, image/png",size:"10","button-class":"btn","custom-strings":{upload:"<h1>Bummer!</h1>",drag:"Upload Infrastructure images"},name:"image"},on:{change:e.onChange}}),e._v(" "),r("div",{staticClass:"btnsuca mt-2 text-center"},[""!=e.imageData?r("button",{staticClass:"btn btnsubmit mt-n2",attrs:{type:"button"},on:{click:function(t){return e.onImageSubmit()}}},[e._v("\n        Submit\n      ")]):e._e(),e._v(" "),e.collegeImageEntry?r("button",{staticClass:"btn btn-success",on:{click:function(t){return e.canTheEdit()}}},[r("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}}),e._v(" Cancel\n      ")]):e._e()]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.imageError,expression:"imageError"}],staticClass:"text-danger text-center"},[e._v(e._s(e.imageError))])],1):e._e()])}),[],!1,null,null,null).exports,k={data:function(){return{userData:{},phoneData:{phone:""},serverError:{phone:""},otpData:{otp:""},serverOtpError:{otp:""},phoneVerificationChecker:!0,otpVerificationCheck:!1}},props:{user:{type:Object,default:null}},created:function(){this.userData=this.user,null==this.userData.phone&&(this.phoneVerificationChecker=!1)},mounted:function(){console.log("Phone Mounted")},methods:{phoneVerificationForm:function(){var e=this;this.$validator.validate().then((function(t){t&&axios.post("/api/edit/channel/phone/number/"+e.userData.id,e.phoneData).then((function(t){!0===t.data.message&&(Vue.toasted.success("Phone number is succefully created",{position:"top-center",duration:5e3}),e.userData=t.data.user,e.phoneVerificationChecker=!0)})).catch((function(t){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3}),t.response.data.errors.phone&&(e.serverError.phone=t.response.data.errors.phone[0])}))}))},otpVerificationForm:function(){},verifyPhoneNumber:function(){axios.post("/api/edit/channel/phone/number"+this.userData.id).then((function(e){e.data.message}),(function(e){e.status})).catch((function(e){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})}))}}},T=Object(i.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.phoneVerificationChecker?r("div",[r("label",{attrs:{col:"col-sm-3 col-form-label"}},[e._v("Phone: ")]),e._v(" "),r("button",{staticClass:"btn btn-info"},[e._v("\n      +91 "+e._s(e.userData.phone)+"\n      "),null!=e.userData.phone_verified?r("span",{staticClass:"text-success text-center"},[e._v("verified")]):e._e()])]):e._e(),e._v(" "),r("div",[e.phoneVerificationChecker?e._e():r("div",[r("form",{on:{submit:function(t){return t.preventDefault(),e.phoneVerificationForm()}}},[r("div",{staticClass:"form-group row mx-5",class:{"has-error":e.errors.has("serverError.phone")||""!=e.serverError.phone}},[r("label",{attrs:{col:"col-sm-3 col-form-label"}},[e._v("Phone: ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneData.phone,expression:"phoneData.phone"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:10|min:10",expression:"'required|numeric|max:10|min:10'"}],staticClass:"col-sm-9 ml-md-4",class:{"form-control":!0,"is-invalid":e.errors.has("phone")},attrs:{"data-vv-delay":"20",name:"phone",type:"text",placeholder:"Verify your phone"},domProps:{value:e.phoneData.phone},on:{input:function(t){t.target.composing||e.$set(e.phoneData,"phone",t.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("phone"),expression:"errors.has('phone')"}],staticClass:"text-danger text-center"},[e._v(e._s(e.errors.first("phone")))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverError.phone,expression:"serverError.phone != ''"}],staticClass:"text-danger text-center"},[e._v(e._s(e.serverError.phone))])]),e._v(" "),e._m(0)])]),e._v(" "),e.otpVerificationCheck?r("div",[r("form",{on:{submit:function(t){return t.preventDefault(),e.otpVerificationForm()}}},[r("div",{staticClass:"form-group row mx-5",class:{"has-error":e.errors.has("serverOtpError.otp")||""!=e.serverOtpError.otp}},[r("label",{attrs:{col:"col-sm-3 col-form-label"}},[e._v("Phone: ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.otpData.otp,expression:"otpData.otp"},{name:"validate",rawName:"v-validate",value:"required|numeric|min:6|max:6",expression:"'required|numeric|min:6|max:6'"}],staticClass:"col-sm-9 ml-4",class:{"form-control":!0,"is-invalid":e.errors.has("otp")},attrs:{"data-vv-delay":"20",name:"otp",type:"text",placeholder:"Verify your otp"},domProps:{value:e.otpData.otp},on:{input:function(t){t.target.composing||e.$set(e.otpData,"otp",t.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("otp"),expression:"errors.has('otp')"}],staticClass:"text-danger text-center"},[e._v(e._s(e.errors.first("otp")))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverOtpError.otp,expression:"serverOtpError.otp != ''"}],staticClass:"help is-danger text-center"},[e._v(e._s(e.serverOtpError.otp))])]),e._v(" "),e._m(1)])]):e._e()])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ml-5"},[t("button",{staticClass:"btn btnsubmit mt-n2 rounded-0",attrs:{type:"submit"}},[this._v("Verify")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ml-5"},[t("button",{staticClass:"btn btnsubmit mt-n2",attrs:{type:"submit"}},[this._v("Submit")])])}],!1,null,null,null).exports;var $={data:function(){return r={},(t="userData")in(e={websiteLink:"",websiteLinkError:"",userData:{},channelData:[]})?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e;var e,t,r},props:{channel:{type:Array,default:null},user:{type:Object,default:null}},created:function(){this.channelData=this.channel,this.userData=this.user},mounted:function(){},methods:{},components:{website:a,description:o,cover:c,icon:h,infrastructure:v,standard:y,board:x,social:D,college:E,phone:T}},O=Object(i.a)($,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"row mb-5 mx-auto"},[r("div",{staticClass:"col-sm-4"},[r("icon")],1),e._v(" "),r("div",{staticClass:"col-sm-8"},[r("cover")],1)]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4 mb-5"},[r("website")],1),e._v(" "),r("div",{staticClass:"col-sm-8"},[r("description")],1)]),e._v(" "),r("div",{staticClass:"container mt-5"},[r("infrastructure")],1),e._v(" "),r("div",{staticClass:"row mt-5"},[r("div",{staticClass:"col-sm-6"},[r("standard")],1),e._v(" "),r("div",{staticClass:"col-sm-6"},[r("board")],1)]),e._v(" "),r("div",{staticClass:"row mt-5"},[r("div",{staticClass:"col-sm-6 mb-5"},[r("social")],1),e._v(" "),r("div",{staticClass:"col-sm-6"},[r("college",{attrs:{channel:e.channelData}})],1)])])}),[],!1,null,null,null);t.default=O.exports},"5ZeN":function(e,t,r){"use strict";var n={name:"picture-input",props:{width:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},height:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},margin:{type:[String,Number],default:0},accept:{type:String,default:"image/*"},size:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},name:{type:String,default:null},id:{type:[String,Number],default:null},buttonClass:{type:String,default:"btn btn-primary button"},removeButtonClass:{type:String,default:"btn btn-secondary button secondary"},aspectButtonClass:{type:String,default:"btn btn-secondary button secondary"},prefill:{type:[String,File],default:""},prefillOptions:{type:Object,default:()=>({})},crop:{type:Boolean,default:!0},radius:{type:[String,Number],default:0},removable:{type:Boolean,default:!1},hideChangeButton:{type:Boolean,default:!1},autoToggleAspectRatio:{type:Boolean,default:!1},toggleAspectRatio:{type:Boolean,default:!1},changeOnClick:{type:Boolean,default:!0},plain:{type:Boolean,default:!1},zIndex:{type:Number,default:1e4},alertOnError:{type:Boolean,default:!0},customStrings:{type:Object,default:()=>({})}},watch:{prefill(){this.prefill?this.preloadImage(this.prefill,this.prefillOptions):this.removeImage()}},data:()=>({imageSelected:!1,previewHeight:0,previewWidth:0,draggingOver:!1,canvasWidth:0,canvasHeight:0,strings:{upload:"<p>Your device does not support file uploading.</p>",drag:"Drag an image or <br>click here to select a file",tap:"Tap here to select a photo <br>from your gallery",change:"Change Photo",aspect:"Landscape/Portrait",remove:"Remove Photo",select:"Select a Photo",selected:"<p>Photo successfully selected!</p>",fileSize:"The file size exceeds the limit",fileType:"This file type is not supported."}}),mounted(){if(this.updateStrings(),this.prefill&&this.preloadImage(this.prefill,this.prefillOptions),this.$nextTick(()=>{window.addEventListener("resize",this.onResize),this.onResize()}),this.supportsPreview){this.pixelRatio=Math.round(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI);const e=this.$refs.previewCanvas;e.getContext&&(this.context=e.getContext("2d"),this.context.scale(this.pixelRatio,this.pixelRatio))}"image/*"!==this.accept&&(this.fileTypes=this.accept.split(","),this.fileTypes=this.fileTypes.map(e=>e.trim())),this.canvasWidth=this.width,this.canvasHeight=this.height,this.$on("error",this.onError)},beforeDestroy(){window.removeEventListener("resize",this.onResize),this.$off("error",this.onError)},methods:{updateStrings(){for(let e in this.customStrings)e in this.strings&&"string"==typeof this.customStrings[e]&&(this.strings[e]=this.customStrings[e])},onClick(){this.imageSelected?(this.changeOnClick&&this.selectImage(),this.$emit("click")):this.selectImage()},onResize(){this.resizeCanvas(),this.imageObject&&this.drawImage(this.imageObject)},onDragStart(){this.supportsDragAndDrop&&(this.draggingOver=!0)},onDragStop(){this.supportsDragAndDrop&&(this.draggingOver=!1)},onFileDrop(e){this.onDragStop(),this.onFileChange(e)},onFileChange(e,t){let r=e.target.files||e.dataTransfer.files;if(r.length)if(r[0].size<=0||r[0].size>1024*this.size*1024)this.$emit("error",{type:"fileSize",fileSize:r[0].size,fileType:r[0].type,fileName:r[0].name,message:this.strings.fileSize+" ("+this.size+"MB)"});else if(r[0].name!==this.fileName||r[0].size!==this.fileSize||this.fileModified!==r[0].lastModified){if(this.file=r[0],this.fileName=r[0].name,this.fileSize=r[0].size,this.fileModified=r[0].lastModified,this.fileType=r[0].type,"image/*"===this.accept){if("image/"!==r[0].type.substr(0,6))return}else if(-1===this.fileTypes.indexOf(r[0].type))return void this.$emit("error",{type:"fileType",fileSize:r[0].size,fileType:r[0].type,fileName:r[0].name,message:this.strings.fileType});this.imageSelected=!0,this.image="",this.supportsPreview?this.loadImage(r[0],t||!1):t?this.$emit("prefill"):this.$emit("change",this.image)}},onError(e){this.alertOnError&&alert(e.message)},loadImage(e,t){this.getEXIFOrientation(e,r=>{this.setOrientation(r);let n=new FileReader;n.onload=e=>{this.image=e.target.result,t?this.$emit("prefill"):this.$emit("change",this.image),this.imageObject=new Image,this.imageObject.onload=()=>{if(this.autoToggleAspectRatio){this.getOrientation(this.canvasWidth,this.canvasHeight)!==this.getOrientation(this.imageObject.width,this.imageObject.height)&&this.rotateCanvas()}this.drawImage(this.imageObject)},this.imageObject.src=this.image},n.readAsDataURL(e)})},drawImage(e){this.imageWidth=e.width,this.imageHeight=e.height,this.imageRatio=e.width/e.height;let t=0,r=0,n=this.previewWidth,i=this.previewHeight;const a=this.previewWidth/this.previewHeight;this.crop?this.imageRatio>=a?(n=i*this.imageRatio,t=(this.previewWidth-n)/2):(i=n/this.imageRatio,r=(this.previewHeight-i)/2):this.imageRatio>=a?(i=n/this.imageRatio,r=(this.previewHeight-i)/2):(n=i*this.imageRatio,t=(this.previewWidth-n)/2);const s=this.$refs.previewCanvas;s.style.background="none",s.width=this.previewWidth*this.pixelRatio,s.height=this.previewHeight*this.pixelRatio,this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,s.width,s.height),this.rotate&&(this.context.translate(t*this.pixelRatio,r*this.pixelRatio),this.context.translate(n/2*this.pixelRatio,i/2*this.pixelRatio),this.context.rotate(this.rotate),t=-n/2,r=-i/2),this.context.drawImage(e,t*this.pixelRatio,r*this.pixelRatio,n*this.pixelRatio,i*this.pixelRatio)},selectImage(){this.$refs.fileInput.click()},removeImage(){this.$refs.fileInput.value="",this.$refs.fileInput.type="",this.$refs.fileInput.type="file",this.fileName="",this.fileType="",this.fileSize=0,this.fileModified=0,this.imageSelected=!1,this.image="",this.file=null,this.imageObject=null,this.$refs.previewCanvas.style.backgroundColor="rgba(200,200,200,.25)",this.$refs.previewCanvas.width=this.previewWidth*this.pixelRatio,this.$emit("remove")},rotateImage(){this.rotateCanvas(),this.imageObject&&this.drawImage(this.imageObject);let e=this.getOrientation(this.canvasWidth,this.canvasHeight);this.$emit("aspectratiochange",e)},resizeCanvas(){let e=this.canvasWidth/this.canvasHeight,t=this.$refs.container.clientWidth;(this.toggleAspectRatio||t!==this.containerWidth)&&(this.containerWidth=t,this.previewWidth=Math.min(this.containerWidth-2*this.margin,this.canvasWidth),this.previewHeight=this.previewWidth/e)},getOrientation(e,t){let r="square";return e>t?r="landscape":e<t&&(r="portrait"),r},switchCanvasOrientation(){const e=this.canvasWidth,t=this.canvasHeight;this.canvasWidth=t,this.canvasHeight=e},rotateCanvas(){this.switchCanvasOrientation(),this.resizeCanvas()},setOrientation(e){this.rotate=!1,8===e?this.rotate=-Math.PI/2:6===e?this.rotate=Math.PI/2:3===e&&(this.rotate=-Math.PI)},getEXIFOrientation(e,t){var r=new FileReader;r.onload=e=>{var r=new DataView(e.target.result);if(65496!==r.getUint16(0,!1))return t(-2);for(var n=r.byteLength,i=2;i<n;){var a=r.getUint16(i,!1);if(i+=2,65505===a){if(1165519206!==r.getUint32(i+=2,!1))return t(-1);var s=18761===r.getUint16(i+=6,!1);i+=r.getUint32(i+4,s);var o=r.getUint16(i,s);i+=2;for(var u=0;u<o;u++)if(274===r.getUint16(i+12*u,s))return t(r.getUint16(i+12*u+8,s))}else{if(65280!=(65280&a))break;i+=r.getUint16(i,!1)}}return t(-1)},r.readAsArrayBuffer(e.slice(0,65536))},preloadImage(e,t){let r=window.File;try{new r([],"")}catch(e){r=class extends Blob{constructor(e,t,r={}){super(e,r),this.lastModifiedDate=new Date,this.lastModified=+this.lastModifiedDate,this.name=t}}}if(t=Object.assign({},t),"object"==typeof e)return this.imageSelected=!0,this.image="",void(this.supportsPreview?this.loadImage(e,!0):this.$emit("prefill"));let n=new Headers;n.append("Accept","image/*"),fetch(e,{method:"GET",mode:"cors",headers:n}).then(e=>e.blob()).then(n=>{let i={target:{files:[]}};const a=t.fileName||e.split("/").slice(-1)[0];let s=t.mediaType||"image/"+(t.fileType||a.split(".").slice(-1)[0]);s=s.replace("jpg","jpeg"),i.target.files[0]=new r([n],a,{type:s}),this.onFileChange(i,!0)}).catch(e=>{this.$emit("error",{type:"failedPrefill",message:"Failed loading prefill image: "+e})})}},computed:{supportsUpload(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;const e=document.createElement("input");return e.type="file",!e.disabled},supportsPreview:()=>window.FileReader&&!!window.CanvasRenderingContext2D,supportsDragAndDrop(){const e=document.createElement("div");return("draggable"in e||"ondragstart"in e&&"ondrop"in e)&&!("ontouchstart"in window||navigator.msMaxTouchPoints)},computedClasses(){const e={};return e["dragging-over"]=this.draggingOver,e},fontSize(){return Math.min(.04*this.previewWidth,21)+"px"}}},i=(r("FD01"),r("KHd+")),a=Object(i.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"container",staticClass:"picture-input",attrs:{id:"picture-input"}},[e.supportsUpload?e.supportsPreview?r("div",[r("div",{staticClass:"preview-container",style:{maxWidth:e.previewWidth+"px",height:e.previewHeight+"px",borderRadius:e.radius+"%"}},[r("canvas",{ref:"previewCanvas",staticClass:"picture-preview",class:e.computedClasses,style:{height:e.previewHeight+"px",zIndex:e.zIndex+1},on:{drag:function(e){e.stopPropagation(),e.preventDefault()},dragover:function(e){e.stopPropagation(),e.preventDefault()},dragstart:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStart(t)},dragenter:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStart(t)},dragend:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStop(t)},dragleave:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStop(t)},drop:function(t){return t.stopPropagation(),t.preventDefault(),e.onFileDrop(t)},click:function(t){return t.preventDefault(),e.onClick(t)}}}),e._v(" "),e.imageSelected||e.plain?e._e():r("div",{staticClass:"picture-inner",style:{top:-e.previewHeight+"px",marginBottom:-e.previewHeight+"px",fontSize:e.fontSize,borderRadius:e.radius+"%",zIndex:e.zIndex+2}},[e.supportsDragAndDrop?r("span",{staticClass:"picture-inner-text",domProps:{innerHTML:e._s(e.strings.drag)}}):r("span",{staticClass:"picture-inner-text",domProps:{innerHTML:e._s(e.strings.tap)}})])]),e._v(" "),e.imageSelected&&!e.hideChangeButton?r("button",{class:e.buttonClass,on:{click:function(t){return t.preventDefault(),e.selectImage(t)}}},[e._v(e._s(e.strings.change))]):e._e(),e._v(" "),e.imageSelected&&e.removable?r("button",{class:e.removeButtonClass,on:{click:function(t){return t.preventDefault(),e.removeImage(t)}}},[e._v(e._s(e.strings.remove))]):e._e(),e._v(" "),e.imageSelected&&e.toggleAspectRatio&&e.width!==e.height?r("button",{class:e.aspectButtonClass,on:{click:function(t){return t.preventDefault(),e.rotateImage(t)}}},[e._v(e._s(e.strings.aspect))]):e._e()]):r("div",[e.imageSelected?r("div",[r("div",{domProps:{innerHTML:e._s(e.strings.selected)}}),e._v(" "),e.hideChangeButton?e._e():r("button",{class:e.buttonClass,on:{click:function(t){return t.preventDefault(),e.selectImage(t)}}},[e._v(e._s(e.strings.change))]),e._v(" "),e.removable?r("button",{class:e.removeButtonClass,on:{click:function(t){return t.preventDefault(),e.removeImage(t)}}},[e._v(e._s(e.strings.remove))]):e._e()]):r("button",{class:e.buttonClass,on:{click:function(t){return t.preventDefault(),e.selectImage(t)}}},[e._v(e._s(e.strings.select))])]):r("div",{domProps:{innerHTML:e._s(e.strings.upload)}}),e._v(" "),r("input",{ref:"fileInput",attrs:{type:"file",name:e.name,id:e.id,accept:e.accept},on:{change:e.onFileChange}})])}),[],!1,null,"5080a0f2",null);t.a=a.exports},"8Qpl":function(e,t,r){var n=r("08c9");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,i);n.locals&&(e.exports=n.locals)},"9tPo":function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var i,a=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?r+a:n+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},FD01:function(e,t,r){"use strict";var n=r("15tO");r.n(n).a},H3Ze:function(e,t,r){"use strict";var n=r("K6bV");r.n(n).a},I1BE:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var i=(s=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),a=n.sources.map((function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"}));return[r].concat(a).concat([i]).join("\n")}var s;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(n[a]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),t.push(s))}},t}},K6bV:function(e,t,r){var n=r("NWRV");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,i);n.locals&&(e.exports=n.locals)},"KHd+":function(e,t,r){"use strict";function n(e,t,r,n,i,a,s,o){var u,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=r,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=u):i&&(u=o?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(e,t){return u.call(t),c(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:l}}r.d(t,"a",(function(){return n}))},L2h2:function(e,t,r){var n=r("bjTj");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,i);n.locals&&(e.exports=n.locals)},MwJ6:function(e,t,r){var n=r("ocMQ");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,i);n.locals&&(e.exports=n.locals)},NWRV:function(e,t,r){(e.exports=r("I1BE")(!1)).push([e.i,"\n.slide-fade-enter-active[data-v-18308190] {\n  transition: all 0.5s ease;\n}\n.slide-fade-leave-active[data-v-18308190] {\n  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.slide-fade-enter[data-v-18308190],\n.slide-fade-leave-to[data-v-18308190] {\n  transform: translateX(10px);\n  opacity: 0;\n}\n",""])},R21m:function(e,t,r){(e.exports=r("I1BE")(!1)).push([e.i,'fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:"";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#41b883;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{-webkit-animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__spinner:after{-webkit-animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input:-ms-input-placeholder{color:#35495e}.multiselect__input::-moz-placeholder{color:#35495e}.multiselect__input::-ms-input-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:"\\D7";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:""}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@-webkit-keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}@keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}',""])},YLx5:function(e,t,r){"use strict";var n=r("4PEM");r.n(n).a},"aET+":function(e,t,r){var n,i,a={},s=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=n.apply(this,arguments)),i}),o=function(e,t){return t?t.querySelector(e):document.querySelector(e)},u=function(e){var t={};return function(e,r){if("function"==typeof e)return e();if(void 0===t[e]){var n=o.call(this,e,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),l=null,c=0,d=[],f=r("9tPo");function h(e,t){for(var r=0;r<e.length;r++){var n=e[r],i=a[n.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](n.parts[s]);for(;s<n.parts.length;s++)i.parts.push(y(n.parts[s],t))}else{var o=[];for(s=0;s<n.parts.length;s++)o.push(y(n.parts[s],t));a[n.id]={id:n.id,refs:1,parts:o}}}}function p(e,t){for(var r=[],n={},i=0;i<e.length;i++){var a=e[i],s=t.base?a[0]+t.base:a[0],o={css:a[1],media:a[2],sourceMap:a[3]};n[s]?n[s].parts.push(o):r.push(n[s]={id:s,parts:[o]})}return r}function v(e,t){var r=u(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=d[d.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),d.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=u(e.insertAt.before,r);r.insertBefore(t,i)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function g(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return r.nc}();n&&(e.attrs.nonce=n)}return b(t,e.attrs),v(e,t),t}function b(e,t){Object.keys(t).forEach((function(r){e.setAttribute(r,t[r])}))}function y(e,t){var r,n,i,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var s=c++;r=l||(l=g(t)),n=x.bind(null,r,s,!1),i=x.bind(null,r,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),v(e,t),t}(t),n=D.bind(null,r,t),i=function(){m(r),r.href&&URL.revokeObjectURL(r.href)}):(r=g(t),n=C.bind(null,r),i=function(){m(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=p(e,t);return h(r,t),function(e){for(var n=[],i=0;i<r.length;i++){var s=r[i];(o=a[s.id]).refs--,n.push(o)}e&&h(p(e,t),t);for(i=0;i<n.length;i++){var o;if(0===(o=n[i]).refs){for(var u=0;u<o.parts.length;u++)o.parts[u]();delete a[o.id]}}}};var _,w=(_=[],function(e,t){return _[e]=t,_.filter(Boolean).join("\n")});function x(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=w(t,i);else{var a=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function C(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function D(e,t,r){var n=r.css,i=r.sourceMap,a=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||a)&&(n=f(n)),i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(s),o&&URL.revokeObjectURL(o)}},bjTj:function(e,t,r){(e.exports=r("I1BE")(!1)).push([e.i,"\n.btnsubmiticon[data-v-59946390] {\n  background-color: #013737;\n  color: white;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  border-radius: 0;\n  z-index: 100;\n}\n.btnsuca[data-v-59946390] {\n  text-align: center;\n}\n.btn-success[data-v-59946390] {\n  padding-top: 0.1rem !important;\n  padding-bottom: 0.1rem !important;\n}\n",""])},cTAZ:function(e,t,r){(e.exports=r("I1BE")(!1)).push([e.i,"\n.desctext[data-v-91de0950] {\n  background-color: white;\n  color: black;\n}\n",""])},e7F3:function(e,t,r){"use strict";var n=function(e){return N(["text","password","search","email","tel","url","textarea","number"],e.type)},i=function(e){return N(["radio","checkbox"],e.type)},a=function(e,t){return e.getAttribute("data-vv-"+t)},s=function(e){return"isNaN"in Number?Number.isNaN(e):"number"==typeof e&&e!=e},o=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return e.every((function(e){return null==e}))},u=function(e,t){if(e instanceof RegExp&&t instanceof RegExp)return u(e.source,t.source)&&u(e.flags,t.flags);if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!u(e[r],t[r]))return!1;return!0}return m(e)&&m(t)?Object.keys(e).every((function(r){return u(e[r],t[r])}))&&Object.keys(t).every((function(r){return u(e[r],t[r])})):!(!s(e)||!s(t))||e===t},l=function(e){return o(e)?null:"FORM"===e.tagName?e:o(e.form)?o(e.parentNode)?null:l(e.parentNode):e.form},c=function(e,t,r){if(void 0===r&&(r=void 0),!e||!t)return r;var n=t;return e.split(".").every((function(e){return e in n?(n=n[e],!0):(n=r,!1)})),n},d=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r={cancelled:!1}),0===t?e:function(){for(var i=[],a=arguments.length;a--;)i[a]=arguments[a];var s=function(){n=null,r.cancelled||e.apply(void 0,i)};clearTimeout(n),(n=setTimeout(s,t))||e.apply(void 0,i)};var n},f=function(e,t){return t?e?("string"==typeof t&&(t=h(t)),x({},t,h(e))):h(t):h(e)},h=function(e){return e?m(e)?Object.keys(e).reduce((function(t,r){var n=[];return n=!0===e[r]?[]:Array.isArray(e[r])||m(e[r])?e[r]:[e[r]],!1!==e[r]&&(t[r]=n),t}),{}):"string"!=typeof e?(p("rules must be either a string or an object."),{}):e.split("|").reduce((function(e,t){var r=function(e){var t=[],r=e.split(":")[0];return N(e,":")&&(t=e.split(":").slice(1).join(":").split(",")),{name:r,params:t}}(t);return r.name?(e[r.name]=r.params,e):e}),{}):{}},p=function(e){console.warn("[vee-validate] "+e)},v=function(e){return new Error("[vee-validate] "+e)},m=function(e){return null!==e&&e&&"object"==typeof e&&!Array.isArray(e)},g=function(e){return"function"==typeof e},b=function(e,t){return e.classList?e.classList.contains(t):!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},y=function(e,t,r){if(e&&t){if(!Array.isArray(t))return r?function(e,t){e.classList?e.classList.add(t):b(e,t)||(e.className+=" "+t)}(e,t):void function(e,t){if(e.classList)e.classList.remove(t);else if(b(e,t)){var r=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(r," ")}}(e,t);t.forEach((function(t){return y(e,t,r)}))}},_=function(e){if(g(Array.from))return Array.from(e);for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t},w=function(e){if(Array.isArray(e))return[].concat(e);var t=_(e);return A(t)?[e]:t},x=function(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(g(Object.assign))return Object.assign.apply(Object,[e].concat(t));if(null==e)throw new TypeError("Cannot convert undefined or null to object");var n=Object(e);return t.forEach((function(e){null!=e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))})),n},C=0,D="{id}",S=function(e,t){for(var r=Array.isArray(e)?e:_(e),n=0;n<r.length;n++)if(t(r[n]))return n;return-1},E=function(e,t){var r=Array.isArray(e)?e:_(e),n=S(r,t);return-1===n?void 0:r[n]},k=function(e){if(!e)return!1;var t=e.componentOptions.tag;return/^(keep-alive|transition|transition-group)$/.test(t)},T=function(e){if("number"==typeof e)return e;if("string"==typeof e)return parseInt(e);var t={};for(var r in e)t[r]=parseInt(e[r]);return t},$=function(e,t){return m(e)&&m(t)?(Object.keys(t).forEach((function(r){var n,i;if(m(t[r]))return e[r]||x(e,((n={})[r]={},n)),void $(e[r],t[r]);x(e,((i={})[r]=t[r],i))})),e):e},O=function(e,t){if(e.required&&(t=f("required",t)),n(e))return"email"===e.type&&(t=f("email"+(e.multiple?":multiple":""),t)),e.pattern&&(t=f({regex:e.pattern},t)),e.maxLength>=0&&e.maxLength<524288&&(t=f("max:"+e.maxLength,t)),e.minLength>0&&(t=f("min:"+e.minLength,t)),"number"===e.type&&(t=f("decimal",t),""!==e.min&&(t=f("min_value:"+e.min,t)),""!==e.max&&(t=f("max_value:"+e.max,t))),t;if(function(e){return N(["date","week","month","datetime-local","time"],e.type)}(e)){var r=e.step&&Number(e.step)<60?"HH:mm:ss":"HH:mm";if("date"===e.type)return f("date_format:yyyy-MM-dd",t);if("datetime-local"===e.type)return f("date_format:yyyy-MM-ddT"+r,t);if("month"===e.type)return f("date_format:yyyy-MM",t);if("week"===e.type)return f("date_format:yyyy-[W]WW",t);if("time"===e.type)return f("date_format:"+r,t)}return t},I=function(e){return g(Object.values)?Object.values(e):Object.keys(e).map((function(t){return e[t]}))},N=function(e,t){return-1!==e.indexOf(t)},A=function(e){return Array.isArray(e)&&0===e.length},P=function(e,t,r){Object.defineProperty(e,t,{configurable:!1,writable:!0,value:r})},M="en",F=function(e){void 0===e&&(e={}),this.container={},this.merge(e)},j={locale:{configurable:!0}};j.locale.get=function(){return M},j.locale.set=function(e){M=e||"en"},F.prototype.hasLocale=function(e){return!!this.container[e]},F.prototype.setDateFormat=function(e,t){this.container[e]||(this.container[e]={}),this.container[e].dateFormat=t},F.prototype.getDateFormat=function(e){return this.container[e]&&this.container[e].dateFormat?this.container[e].dateFormat:null},F.prototype.getMessage=function(e,t,r){var n=null;return n=this.hasMessage(e,t)?this.container[e].messages[t]:this._getDefaultMessage(e),g(n)?n.apply(void 0,r):n},F.prototype.getFieldMessage=function(e,t,r,n){if(!this.hasLocale(e))return this.getMessage(e,r,n);var i=this.container[e].custom&&this.container[e].custom[t];if(!i||!i[r])return this.getMessage(e,r,n);var a=i[r];return g(a)?a.apply(void 0,n):a},F.prototype._getDefaultMessage=function(e){return this.hasMessage(e,"_default")?this.container[e].messages._default:this.container.en.messages._default},F.prototype.getAttribute=function(e,t,r){return void 0===r&&(r=""),this.hasAttribute(e,t)?this.container[e].attributes[t]:r},F.prototype.hasMessage=function(e,t){return!!(this.hasLocale(e)&&this.container[e].messages&&this.container[e].messages[t])},F.prototype.hasAttribute=function(e,t){return!!(this.hasLocale(e)&&this.container[e].attributes&&this.container[e].attributes[t])},F.prototype.merge=function(e){$(this.container,e)},F.prototype.setMessage=function(e,t,r){this.hasLocale(e)||(this.container[e]={messages:{},attributes:{}}),this.container[e].messages||(this.container[e].messages={}),this.container[e].messages[t]=r},F.prototype.setAttribute=function(e,t,r){this.hasLocale(e)||(this.container[e]={messages:{},attributes:{}}),this.container[e].attributes[t]=r},Object.defineProperties(F.prototype,j);var L={default:new F({en:{messages:{},attributes:{},custom:{}}})},q="default",R=function(){};R._checkDriverName=function(e){if(!e)throw v("you must provide a name to the dictionary driver")},R.setDriver=function(e,t){void 0===t&&(t=null),this._checkDriverName(e),t&&(L[e]=t),q=e},R.getDriver=function(){return L[q]};var V=function e(t,r){void 0===t&&(t=null),void 0===r&&(r=null),this.vmId=r||null,this.items=t&&t instanceof e?t.items:[]};V.prototype["function"==typeof Symbol?Symbol.iterator:"@@iterator"]=function(){var e=this,t=0;return{next:function(){return{value:e.items[t++],done:t>e.items.length}}}},V.prototype.add=function(e){var t;(t=this.items).push.apply(t,this._normalizeError(e))},V.prototype._normalizeError=function(e){var t=this;return Array.isArray(e)?e.map((function(e){return e.scope=o(e.scope)?null:e.scope,e.vmId=o(e.vmId)?t.vmId||null:e.vmId,e})):(e.scope=o(e.scope)?null:e.scope,e.vmId=o(e.vmId)?this.vmId||null:e.vmId,[e])},V.prototype.regenerate=function(){this.items.forEach((function(e){e.msg=g(e.regenerate)?e.regenerate():e.msg}))},V.prototype.update=function(e,t){var r=E(this.items,(function(t){return t.id===e}));if(r){var n=this.items.indexOf(r);this.items.splice(n,1),r.scope=t.scope,this.items.push(r)}},V.prototype.all=function(e){var t=this;return this.items.filter((function(r){var n=!0,i=!0;return o(e)||(n=r.scope===e),o(t.vmId)||(i=r.vmId===t.vmId),i&&n})).map((function(e){return e.msg}))},V.prototype.any=function(e){var t=this;return!!this.items.filter((function(r){var n=!0,i=!0;return o(e)||(n=r.scope===e),o(t.vmId)||(i=r.vmId===t.vmId),i&&n})).length},V.prototype.clear=function(e){var t=this,r=o(this.vmId)?function(){return!0}:function(e){return e.vmId===t.vmId},n=function(t){return t.scope===e};0===arguments.length?n=function(){return!0}:o(e)&&(e=null);for(var i=0;i<this.items.length;++i)r(this.items[i])&&n(this.items[i])&&(this.items.splice(i,1),--i)},V.prototype.collect=function(e,t,r){var n=this;void 0===r&&(r=!0);var i=!o(e)&&!e.includes("*"),a=function(e){var t=e.reduce((function(e,t){return o(n.vmId)||t.vmId===n.vmId?(e[t.field]||(e[t.field]=[]),e[t.field].push(r?t.msg:t),e):e}),{});return i?I(t)[0]||[]:t};if(o(e))return a(this.items);var s=o(t)?String(e):t+"."+e,u=this._makeCandidateFilters(s),l=u.isPrimary,c=u.isAlt,d=this.items.reduce((function(e,t){return l(t)&&e.primary.push(t),c(t)&&e.alt.push(t),e}),{primary:[],alt:[]});return a(d=d.primary.length?d.primary:d.alt)},V.prototype.count=function(){var e=this;return this.vmId?this.items.filter((function(t){return t.vmId===e.vmId})).length:this.items.length},V.prototype.firstById=function(e){var t=E(this.items,(function(t){return t.id===e}));return t?t.msg:void 0},V.prototype.first=function(e,t){void 0===t&&(t=null);var r=o(t)?e:t+"."+e,n=this._match(r);return n&&n.msg},V.prototype.firstRule=function(e,t){var r=this.collect(e,t,!1);return r.length&&r[0].rule||void 0},V.prototype.has=function(e,t){return void 0===t&&(t=null),!!this.first(e,t)},V.prototype.firstByRule=function(e,t,r){void 0===r&&(r=null);var n=this.collect(e,r,!1).filter((function(e){return e.rule===t}))[0];return n&&n.msg||void 0},V.prototype.firstNot=function(e,t,r){void 0===t&&(t="required"),void 0===r&&(r=null);var n=this.collect(e,r,!1).filter((function(e){return e.rule!==t}))[0];return n&&n.msg||void 0},V.prototype.removeById=function(e){var t=function(t){return t.id===e};Array.isArray(e)&&(t=function(t){return-1!==e.indexOf(t.id)});for(var r=0;r<this.items.length;++r)t(this.items[r])&&(this.items.splice(r,1),--r)},V.prototype.remove=function(e,t,r){if(!o(e))for(var n,i=o(t)?String(e):t+"."+e,a=this._makeCandidateFilters(i),s=a.isPrimary,u=a.isAlt,l=function(e){return s(e)||u(e)},c=0;c<this.items.length;++c)n=this.items[c],(o(r)?l(n):l(n)&&n.vmId===r)&&(this.items.splice(c,1),--c)},V.prototype._makeCandidateFilters=function(e){var t=this,r=function(){return!0},n=function(){return!0},i=function(){return!0},a=function(){return!0},s=function(e){var t=null;if(N(e,":")&&(t=e.split(":").pop(),e=e.replace(":"+t,"")),"#"===e[0])return{id:e.slice(1),rule:t,name:null,scope:null};var r=null,n=e;if(N(e,".")){var i=e.split(".");r=i[0],n=i.slice(1).join(".")}return{id:null,scope:r,name:n,rule:t}}(e),u=s.id,l=s.rule,c=s.scope,d=s.name;if(l&&(r=function(e){return e.rule===l}),u)return{isPrimary:function(e){return r(e)&&function(e){return u===e.id}},isAlt:function(){return!1}};n=o(c)?function(e){return o(e.scope)}:function(e){return e.scope===c},o(d)||"*"===d||(i=function(e){return e.field===d}),o(this.vmId)||(a=function(e){return e.vmId===t.vmId});return{isPrimary:function(e){return a(e)&&i(e)&&r(e)&&n(e)},isAlt:function(e){return a(e)&&r(e)&&e.field===c+"."+d}}},V.prototype._match=function(e){if(!o(e)){var t=this._makeCandidateFilters(e),r=t.isPrimary,n=t.isAlt;return this.items.reduce((function(e,t,i,a){var s=i===a.length-1;return e.primary?s?e.primary:e:(r(t)&&(e.primary=t),n(t)&&(e.alt=t),s?e.primary||e.alt:e)}),{})}};var U=x({},{locale:"en",delay:0,errorBagName:"errors",dictionary:null,fieldsBagName:"fields",classes:!1,classNames:null,events:"input",inject:!0,fastExit:!0,aria:!0,validity:!1,mode:"aggressive",useConstraintAttrs:!0,i18n:null,i18nRootKey:"validation"}),B=function(e){var t=c("$options.$_veeValidate",e,{});return x({},U,t)},z=function(){return U},H=function(e){U=x({},U,e)};function W(e){return e.data?e.data.model?e.data.model:!!e.data.directives&&E(e.data.directives,(function(e){return"model"===e.name})):null}function Y(e){return W(e)?[e]:function(e){return Array.isArray(e)?e:Array.isArray(e.children)?e.children:e.componentOptions&&Array.isArray(e.componentOptions.children)?e.componentOptions.children:[]}(e).reduce((function(e,t){var r=Y(t);return r.length&&e.push.apply(e,r),e}),[])}function Z(e){return e.componentOptions?e.componentOptions.Ctor.options.model:null}function G(e,t,r){if(g(e[t])){var n=e[t];e[t]=[n]}o(e[t])&&(e[t]=[]),e[t].push(r)}function X(e,t,r){e.componentOptions?function(e,t,r){e.componentOptions.listeners||(e.componentOptions.listeners={}),G(e.componentOptions.listeners,t,r)}(e,t,r):function(e,t,r){o(e.data.on)&&(e.data.on={}),G(e.data.on,t,r)}(e,t,r)}function Q(e,t){return e.componentOptions?(Z(e)||{event:"input"}).event:t&&t.modifiers&&t.modifiers.lazy||"select"===e.tag?"change":e.data.attrs&&n({type:e.data.attrs.type||"text"})?"input":"change"}function K(e,t){return Array.isArray(t)&&t[0]?t[0]:t||e()}var J=function(){};J.generate=function(e,t,r){var n=J.resolveModel(t,r),i=B(r.context);return{name:J.resolveName(e,r),el:e,listen:!t.modifiers.disable,bails:!!t.modifiers.bails||!0!==t.modifiers.continues&&void 0,scope:J.resolveScope(e,t,r),vm:r.context,expression:t.value,component:r.componentInstance,classes:i.classes,classNames:i.classNames,getter:J.resolveGetter(e,r,n),events:J.resolveEvents(e,r)||i.events,model:n,delay:J.resolveDelay(e,r,i),rules:J.resolveRules(e,t,r),immediate:!!t.modifiers.initial||!!t.modifiers.immediate,persist:!!t.modifiers.persist,validity:i.validity&&!r.componentInstance,aria:i.aria&&!r.componentInstance,initialValue:J.resolveInitialValue(r)}},J.getCtorConfig=function(e){return e.componentInstance?c("componentInstance.$options.$_veeValidate",e):null},J.resolveRules=function(e,t,r){var n="";if(t.value||t&&t.expression||(n=a(e,"rules")),t.value&&N(["string","object"],typeof t.value.rules)?n=t.value.rules:t.value&&(n=t.value),r.componentInstance)return n;var i=h(n);return z().useConstraintAttrs?x({},O(e,{}),i):i},J.resolveInitialValue=function(e){var t=e.data.model||E(e.data.directives,(function(e){return"model"===e.name}));return t&&t.value},J.resolveDelay=function(e,t,r){var n=a(e,"delay"),i=r&&"delay"in r?r.delay:0;return!n&&t.componentInstance&&t.componentInstance.$attrs&&(n=t.componentInstance.$attrs["data-vv-delay"]),m(i)?(o(n)||(i.input=n),T(i)):T(n||i)},J.resolveEvents=function(e,t){var r=a(e,"validate-on");if(!r&&t.componentInstance&&t.componentInstance.$attrs&&(r=t.componentInstance.$attrs["data-vv-validate-on"]),!r&&t.componentInstance){var n=J.getCtorConfig(t);r=n&&n.events}if(!r&&z().events&&(r=z().events),r&&t.componentInstance&&N(r,"input")){var i=(t.componentInstance.$options.model||{event:"input"}).event;if(!i)return r;r=r.replace("input",i)}return r},J.resolveScope=function(e,t,r){void 0===r&&(r={});var n=null;return r.componentInstance&&o(n)&&(n=r.componentInstance.$attrs&&r.componentInstance.$attrs["data-vv-scope"]),o(n)?function(e){var t=a(e,"scope");if(o(t)){var r=l(e);r&&(t=a(r,"scope"))}return o(t)?null:t}(e):n},J.resolveModel=function(e,t){if(e.arg)return{expression:e.arg};var r=W(t);if(!r)return null;var n=!/[^\w.$]/.test(r.expression)&&function(e,t){var r=t,n=null;return e.split(".").reduce((function(e,t){return null==r||"object"!=typeof r?(!0,e&&!1):t in r?(r=r[t],n=null===n?t:n+"."+t,e&&!0):e&&!1}),!0)}(r.expression,t.context),i=!(!r.modifiers||!r.modifiers.lazy);return n?{expression:r.expression,lazy:i}:{expression:null,lazy:i}},J.resolveName=function(e,t){var r=a(e,"name");if(!r&&!t.componentInstance)return e.name;if(!r&&t.componentInstance&&t.componentInstance.$attrs&&(r=t.componentInstance.$attrs["data-vv-name"]||t.componentInstance.$attrs.name),!r&&t.componentInstance){var n=J.getCtorConfig(t);return n&&g(n.name)?n.name.bind(t.componentInstance)():t.componentInstance.name}return r},J.resolveGetter=function(e,t,r){if(r&&r.expression)return function(){return c(r.expression,t.context)};if(t.componentInstance){var n=a(e,"value-path")||t.componentInstance.$attrs&&t.componentInstance.$attrs["data-vv-value-path"];if(n)return function(){return c(n,t.componentInstance)};var i=J.getCtorConfig(t);if(i&&g(i.value)){var s=i.value.bind(t.componentInstance);return function(){return s()}}var o=(t.componentInstance.$options.model||{prop:"value"}).prop;return function(){return t.componentInstance[o]}}switch(e.type){case"checkbox":return function(){var t=document.querySelectorAll('input[name="'+e.name+'"]');if((t=_(t).filter((function(e){return e.checked}))).length)return t.map((function(e){return e.value}))};case"radio":return function(){var t=document.querySelectorAll('input[name="'+e.name+'"]'),r=E(t,(function(e){return e.checked}));return r&&r.value};case"file":return function(t){return _(e.files)};case"select-multiple":return function(){return _(e.options).filter((function(e){return e.selected})).map((function(e){return e.value}))};default:return function(){return e&&e.value}}};var ee={},te=function(){},re={rules:{configurable:!0}};te.add=function(e,t){var r=t.validate,n=t.options,i=t.paramNames;ee[e]={validate:r,options:n,paramNames:i}},re.rules.get=function(){return ee},te.has=function(e){return!!ee[e]},te.isImmediate=function(e){return!(!ee[e]||!ee[e].options.immediate)},te.isRequireRule=function(e){return!(!ee[e]||!ee[e].options.computesRequired)},te.isTargetRule=function(e){return!(!ee[e]||!ee[e].options.hasTarget)},te.remove=function(e){delete ee[e]},te.getParamNames=function(e){return ee[e]&&ee[e].paramNames},te.getOptions=function(e){return ee[e]&&ee[e].options},te.getValidatorMethod=function(e){return ee[e]?ee[e].validate:null},Object.defineProperties(te,re);var ne=function(e){return"undefined"!=typeof Event&&g(Event)&&e instanceof Event||e&&e.srcElement},ie=function(e){return e?"string"==typeof e?e.split("|"):e:[]},ae=!0,se=function(e,t,r){e.addEventListener(t,r,!!ae&&{passive:!0})},oe={targetOf:null,immediate:!1,persist:!1,scope:null,listen:!0,name:null,rules:{},vm:null,classes:!1,validity:!0,aria:!0,events:"input|blur",delay:0,classNames:{touched:"touched",untouched:"untouched",valid:"valid",invalid:"invalid",pristine:"pristine",dirty:"dirty"}},ue=function(e){void 0===e&&(e={}),this.id=(C>=9999&&(C=0,D=D.replace("{id}","_{id}")),C++,D.replace("{id}",String(C))),this.el=e.el,this.updated=!1,this.vmId=e.vmId,P(this,"dependencies",[]),P(this,"watchers",[]),P(this,"events",[]),this.delay=0,this.rules={},this.forceRequired=!1,this._cacheId(e),this.classNames=x({},oe.classNames),e=x({},oe,e),this._delay=o(e.delay)?0:e.delay,this.validity=e.validity,this.aria=e.aria,this.flags=e.flags||{untouched:!0,touched:!1,dirty:!1,pristine:!0,valid:null,invalid:null,validated:!1,pending:!1,required:!1,changed:!1},P(this,"vm",e.vm),P(this,"componentInstance",e.component),this.ctorConfig=this.componentInstance?c("$options.$_veeValidate",this.componentInstance):void 0,this.update(e),this.initialValue=this.value,this.updated=!1},le={validator:{configurable:!0},isRequired:{configurable:!0},isDisabled:{configurable:!0},alias:{configurable:!0},value:{configurable:!0},bails:{configurable:!0},rejectsFalse:{configurable:!0}};le.validator.get=function(){return this.vm&&this.vm.$validator?this.vm.$validator:{validate:function(){return Promise.resolve(!0)}}},le.isRequired.get=function(){return!!this.rules.required||this.forceRequired},le.isDisabled.get=function(){return!(!this.el||!this.el.disabled)},le.alias.get=function(){if(this._alias)return this._alias;var e=null;return this.ctorConfig&&this.ctorConfig.alias&&(e=g(this.ctorConfig.alias)?this.ctorConfig.alias.call(this.componentInstance):this.ctorConfig.alias),!e&&this.el&&(e=a(this.el,"as")),!e&&this.componentInstance?this.componentInstance.$attrs&&this.componentInstance.$attrs["data-vv-as"]:e},le.value.get=function(){if(g(this.getter))return this.getter()},le.bails.get=function(){return this._bails},le.rejectsFalse.get=function(){return this.componentInstance&&this.ctorConfig?!!this.ctorConfig.rejectsFalse:!!this.el&&"checkbox"===this.el.type},ue.prototype.matches=function(e){var t=this;return!e||(e.id?this.id===e.id:!!(o(e.vmId)?function(){return!0}:function(e){return e===t.vmId})(e.vmId)&&(void 0===e.name&&void 0===e.scope||(void 0===e.scope?this.name===e.name:void 0===e.name?this.scope===e.scope:e.name===this.name&&e.scope===this.scope)))},ue.prototype._cacheId=function(e){this.el&&!e.targetOf&&(this.el._veeValidateId=this.id)},ue.prototype.waitFor=function(e){this._waitingFor=e},ue.prototype.isWaitingFor=function(e){return this._waitingFor===e},ue.prototype.update=function(e){var t,r,n,i=this;if(this.targetOf=e.targetOf||null,this.immediate=e.immediate||this.immediate||!1,this.persist=e.persist||this.persist||!1,!o(e.scope)&&e.scope!==this.scope&&g(this.validator.update)&&this.validator.update(this.id,{scope:e.scope}),this.scope=o(e.scope)?o(this.scope)?null:this.scope:e.scope,this.name=(o(e.name)?e.name:String(e.name))||this.name||null,this.rules=void 0!==e.rules?h(e.rules):this.rules,this._bails=void 0!==e.bails?e.bails:this._bails,this.model=e.model||this.model,this.listen=void 0!==e.listen?e.listen:this.listen,this.classes=!(!e.classes&&!this.classes)&&!this.componentInstance,this.classNames=m(e.classNames)?$(this.classNames,e.classNames):this.classNames,this.getter=g(e.getter)?e.getter:this.getter,this._alias=e.alias||this._alias,this.events=e.events?ie(e.events):this.events,this.delay=(t=this.events,r=e.delay||this.delay,n=this._delay,"number"==typeof r?t.reduce((function(e,t){return e[t]=r,e}),{}):t.reduce((function(e,t){return"object"==typeof r&&t in r?(e[t]=r[t],e):"number"==typeof n?(e[t]=n,e):(e[t]=n&&n[t]||0,e)}),{})),this.updateDependencies(),this.addActionListeners(),void 0!==e.rules&&(this.flags.required=this.isRequired),0===Object.keys(e.rules||{}).length&&this.updated){var a=this.flags.validated;this.validator.validate("#"+this.id).then((function(){i.flags.validated=a}))}this.flags.validated&&void 0!==e.rules&&this.updated&&this.validator.validate("#"+this.id),this.updated=!0,this.addValueListeners(),this.el&&(this.updateClasses(),this.updateAriaAttrs())},ue.prototype.reset=function(){var e=this;this._cancellationToken&&(this._cancellationToken.cancelled=!0,delete this._cancellationToken);var t={untouched:!0,touched:!1,dirty:!1,pristine:!0,valid:null,invalid:null,validated:!1,pending:!1,required:!1,changed:!1};Object.keys(this.flags).filter((function(e){return"required"!==e})).forEach((function(r){e.flags[r]=t[r]})),this.initialValue=this.value,this.flags.changed=!1,this.addValueListeners(),this.addActionListeners(),this.updateClasses(!0),this.updateAriaAttrs(),this.updateCustomValidity()},ue.prototype.setFlags=function(e){var t=this,r={pristine:"dirty",dirty:"pristine",valid:"invalid",invalid:"valid",touched:"untouched",untouched:"touched"};Object.keys(e).forEach((function(n){t.flags[n]=e[n],r[n]&&void 0===e[r[n]]&&(t.flags[r[n]]=!e[n])})),void 0===e.untouched&&void 0===e.touched&&void 0===e.dirty&&void 0===e.pristine||this.addActionListeners(),this.updateClasses(),this.updateAriaAttrs(),this.updateCustomValidity()},ue.prototype.updateDependencies=function(){var e=this;this.dependencies.forEach((function(e){return e.field.destroy()})),this.dependencies=[];var t=Object.keys(this.rules).reduce((function(t,r){return te.isTargetRule(r)&&t.push({selector:e.rules[r][0],name:r}),t}),[]);t.length&&this.vm&&this.vm.$el&&t.forEach((function(t){var r=t.selector,n=t.name,i=e.vm.$refs[r],a=Array.isArray(i)?i[0]:i;if(a){var s={vm:e.vm,classes:e.classes,classNames:e.classNames,delay:e.delay,scope:e.scope,events:e.events.join("|"),immediate:e.immediate,targetOf:e.id};g(a.$watch)?(s.component=a,s.el=a.$el,s.getter=J.resolveGetter(a.$el,a.$vnode)):(s.el=a,s.getter=J.resolveGetter(a,{})),e.dependencies.push({name:n,field:new ue(s)})}}))},ue.prototype.unwatch=function(e){if(void 0===e&&(e=null),!e)return this.watchers.forEach((function(e){return e.unwatch()})),void(this.watchers=[]);this.watchers.filter((function(t){return e.test(t.tag)})).forEach((function(e){return e.unwatch()})),this.watchers=this.watchers.filter((function(t){return!e.test(t.tag)}))},ue.prototype.updateClasses=function(e){var t=this;if(void 0===e&&(e=!1),this.classes&&!this.isDisabled){var r=function(r){y(r,t.classNames.dirty,t.flags.dirty),y(r,t.classNames.pristine,t.flags.pristine),y(r,t.classNames.touched,t.flags.touched),y(r,t.classNames.untouched,t.flags.untouched),e&&(y(r,t.classNames.valid,!1),y(r,t.classNames.invalid,!1)),!o(t.flags.valid)&&t.flags.validated&&y(r,t.classNames.valid,t.flags.valid),!o(t.flags.invalid)&&t.flags.validated&&y(r,t.classNames.invalid,t.flags.invalid)};if(i(this.el)){var n=document.querySelectorAll('input[name="'+this.el.name+'"]');_(n).forEach(r)}else r(this.el)}},ue.prototype.addActionListeners=function(){var e=this;if(this.unwatch(/class/),this.el){var t=function(){e.flags.touched=!0,e.flags.untouched=!1,e.classes&&(y(e.el,e.classNames.touched,!0),y(e.el,e.classNames.untouched,!1)),e.unwatch(/^class_blur$/)},r=n(this.el)?"input":"change",a=function(){e.flags.dirty=!0,e.flags.pristine=!1,e.classes&&(y(e.el,e.classNames.pristine,!1),y(e.el,e.classNames.dirty,!0)),e.unwatch(/^class_input$/)};if(this.componentInstance&&g(this.componentInstance.$once))return this.componentInstance.$once("input",a),this.componentInstance.$once("blur",t),this.watchers.push({tag:"class_input",unwatch:function(){e.componentInstance.$off("input",a)}}),void this.watchers.push({tag:"class_blur",unwatch:function(){e.componentInstance.$off("blur",t)}});if(this.el){se(this.el,r,a);var s=i(this.el)?"change":"blur";se(this.el,s,t),this.watchers.push({tag:"class_input",unwatch:function(){e.el.removeEventListener(r,a)}}),this.watchers.push({tag:"class_blur",unwatch:function(){e.el.removeEventListener(s,t)}})}}},ue.prototype.checkValueChanged=function(){return(null!==this.initialValue||""!==this.value||!n(this.el))&&this.value!==this.initialValue},ue.prototype._determineInputEvent=function(){return this.componentInstance?this.componentInstance.$options.model&&this.componentInstance.$options.model.event||"input":this.model&&this.model.lazy?"change":n(this.el)?"input":"change"},ue.prototype._determineEventList=function(e){var t=this;return!this.events.length||this.componentInstance||n(this.el)?[].concat(this.events).map((function(e){return"input"===e&&t.model&&t.model.lazy?"change":e})):this.events.map((function(t){return"input"===t?e:t}))},ue.prototype.addValueListeners=function(){var e=this;if(this.unwatch(/^input_.+/),this.listen&&this.el){var t={cancelled:!1},r=this.targetOf?function(){var t=e.validator._resolveField("#"+e.targetOf);t&&t.flags.validated&&e.validator.validate("#"+e.targetOf)}:function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];(0===r.length||ne(r[0]))&&(r[0]=e.value),e.flags.pending=!0,e._cancellationToken=t,e.validator.validate("#"+e.id,r[0])},n=this._determineInputEvent(),i=this._determineEventList(n);if(N(i,n)){var a=null,s=null,o=!1;if(this.model&&this.model.expression&&(a=this.vm,s=this.model.expression,o=!0),!s&&this.componentInstance&&this.componentInstance.$options.model&&(a=this.componentInstance,s=this.componentInstance.$options.model.prop||"value"),a&&s){var u=d(r,this.delay[n],t),l=a.$watch(s,u);this.watchers.push({tag:"input_model",unwatch:function(){e.vm.$nextTick((function(){l()}))}}),o&&(i=i.filter((function(e){return e!==n})))}}i.forEach((function(n){var i=d(r,e.delay[n],t);e._addComponentEventListener(n,i),e._addHTMLEventListener(n,i)}))}},ue.prototype._addComponentEventListener=function(e,t){var r=this;this.componentInstance&&(this.componentInstance.$on(e,t),this.watchers.push({tag:"input_vue",unwatch:function(){r.componentInstance.$off(e,t)}}))},ue.prototype._addHTMLEventListener=function(e,t){var r=this;if(this.el&&!this.componentInstance){var n=function(n){se(n,e,t),r.watchers.push({tag:"input_native",unwatch:function(){n.removeEventListener(e,t)}})};if(n(this.el),i(this.el)){var a=document.querySelectorAll('input[name="'+this.el.name+'"]');_(a).forEach((function(e){e._veeValidateId&&e!==r.el||n(e)}))}}},ue.prototype.updateAriaAttrs=function(){var e=this;if(this.aria&&this.el&&g(this.el.setAttribute)){var t=function(t){t.setAttribute("aria-required",e.isRequired?"true":"false"),t.setAttribute("aria-invalid",e.flags.invalid?"true":"false")};if(i(this.el)){var r=document.querySelectorAll('input[name="'+this.el.name+'"]');_(r).forEach(t)}else t(this.el)}},ue.prototype.updateCustomValidity=function(){this.validity&&this.el&&g(this.el.setCustomValidity)&&this.validator.errors&&this.el.setCustomValidity(this.flags.valid?"":this.validator.errors.firstById(this.id)||"")},ue.prototype.destroy=function(){this._cancellationToken&&(this._cancellationToken.cancelled=!0),this.unwatch(),this.dependencies.forEach((function(e){return e.field.destroy()})),this.dependencies=[]},Object.defineProperties(ue.prototype,le);var ce=function(e){void 0===e&&(e=[]),this.items=e||[],this.itemsById=this.items.reduce((function(e,t){return e[t.id]=t,e}),{})},de={length:{configurable:!0}};ce.prototype["function"==typeof Symbol?Symbol.iterator:"@@iterator"]=function(){var e=this,t=0;return{next:function(){return{value:e.items[t++],done:t>e.items.length}}}},de.length.get=function(){return this.items.length},ce.prototype.find=function(e){return E(this.items,(function(t){return t.matches(e)}))},ce.prototype.findById=function(e){return this.itemsById[e]||null},ce.prototype.filter=function(e){return Array.isArray(e)?this.items.filter((function(t){return e.some((function(e){return t.matches(e)}))})):this.items.filter((function(t){return t.matches(e)}))},ce.prototype.map=function(e){return this.items.map(e)},ce.prototype.remove=function(e){var t=null;if(!(t=e instanceof ue?e:this.find(e)))return null;var r=this.items.indexOf(t);return this.items.splice(r,1),delete this.itemsById[t.id],t},ce.prototype.push=function(e){if(!(e instanceof ue))throw v("FieldBag only accepts instances of Field that has an id defined.");if(!e.id)throw v("Field id must be defined.");if(this.findById(e.id))throw v("Field with id "+e.id+" is already added.");this.items.push(e),this.itemsById[e.id]=e},Object.defineProperties(ce.prototype,de);var fe=function(e,t){this.id=t._uid,this._base=e,this._paused=!1,this.errors=new V(e.errors,this.id)},he={flags:{configurable:!0},rules:{configurable:!0},fields:{configurable:!0},dictionary:{configurable:!0},locale:{configurable:!0}};he.flags.get=function(){var e=this;return this._base.fields.items.filter((function(t){return t.vmId===e.id})).reduce((function(e,t){return t.scope&&(e["$"+t.scope]||(e["$"+t.scope]={}),e["$"+t.scope][t.name]=t.flags),e[t.name]=t.flags,e}),{})},he.rules.get=function(){return this._base.rules},he.fields.get=function(){return new ce(this._base.fields.filter({vmId:this.id}))},he.dictionary.get=function(){return this._base.dictionary},he.locale.get=function(){return this._base.locale},he.locale.set=function(e){this._base.locale=e},fe.prototype.localize=function(){for(var e,t=[],r=arguments.length;r--;)t[r]=arguments[r];return(e=this._base).localize.apply(e,t)},fe.prototype.update=function(){for(var e,t=[],r=arguments.length;r--;)t[r]=arguments[r];return(e=this._base).update.apply(e,t)},fe.prototype.attach=function(e){var t=x({},e,{vmId:this.id});return this._base.attach(t)},fe.prototype.pause=function(){this._paused=!0},fe.prototype.resume=function(){this._paused=!1},fe.prototype.remove=function(e){return this._base.remove(e)},fe.prototype.detach=function(e,t){return this._base.detach(e,t,this.id)},fe.prototype.extend=function(){for(var e,t=[],r=arguments.length;r--;)t[r]=arguments[r];return(e=this._base).extend.apply(e,t)},fe.prototype.validate=function(e,t,r){return void 0===r&&(r={}),this._paused?Promise.resolve(!0):this._base.validate(e,t,x({},{vmId:this.id},r||{}))},fe.prototype.verify=function(){for(var e,t=[],r=arguments.length;r--;)t[r]=arguments[r];return(e=this._base).verify.apply(e,t)},fe.prototype.validateAll=function(e,t){return void 0===t&&(t={}),this._paused?Promise.resolve(!0):this._base.validateAll(e,x({},{vmId:this.id},t||{}))},fe.prototype.validateScopes=function(e){return void 0===e&&(e={}),this._paused?Promise.resolve(!0):this._base.validateScopes(x({},{vmId:this.id},e||{}))},fe.prototype.destroy=function(){delete this.id,delete this._base},fe.prototype.reset=function(e){return this._base.reset(Object.assign({},e||{},{vmId:this.id}))},fe.prototype.flag=function(){for(var e,t=[],r=arguments.length;r--;)t[r]=arguments[r];return(e=this._base).flag.apply(e,t.concat([this.id]))},fe.prototype._resolveField=function(){for(var e,t=[],r=arguments.length;r--;)t[r]=arguments[r];return(e=this._base)._resolveField.apply(e,t)},Object.defineProperties(fe.prototype,he);var pe=null,ve=function(){return pe},me={provide:function(){return this.$validator&&!k(this.$vnode)?{$validator:this.$validator}:{}},beforeCreate:function(){if(!k(this.$vnode)&&!1!==this.$options.$__veeInject){this.$parent||H(this.$options.$_veeValidate||{});var e=B(this);(!this.$parent||this.$options.$_veeValidate&&/new/.test(this.$options.$_veeValidate.validator))&&(this.$validator=new fe(ve(),this));var t,r=(t=this.$options.inject,!(!m(t)||!t.$validator));if(this.$validator||!e.inject||r||(this.$validator=new fe(ve(),this)),r||this.$validator){if(!r&&this.$validator)this.$options._base.util.defineReactive(this.$validator,"errors",this.$validator.errors);this.$options.computed||(this.$options.computed={}),this.$options.computed[e.errorBagName||"errors"]=function(){return this.$validator.errors},this.$options.computed[e.fieldsBagName||"fields"]=function(){return this.$validator.fields.items.reduce((function(e,t){return t.scope?(e["$"+t.scope]||(e["$"+t.scope]={}),e["$"+t.scope][t.name]=t.flags,e):(e[t.name]=t.flags,e)}),{})}}}},beforeDestroy:function(){this.$validator&&this._uid===this.$validator.id&&this.$validator.errors.clear()}};function ge(e,t){return t&&t.$validator?t.$validator.fields.findById(e._veeValidateId):null}var be={bind:function(e,t,r){var n=r.context.$validator;if(n){var i=J.generate(e,t,r);n.attach(i)}},inserted:function(e,t,r){var n=ge(e,r.context),i=J.resolveScope(e,t,r);n&&i!==n.scope&&(n.update({scope:i}),n.updated=!1)},update:function(e,t,r){var n=ge(e,r.context);if(!(!n||n.updated&&u(t.value,t.oldValue))){var i=J.resolveScope(e,t,r),a=J.resolveRules(e,t,r);n.update({scope:i,rules:a})}},unbind:function(e,t,r){var n=r.context,i=ge(e,n);i&&n.$validator.detach(i)}},ye=function(e,t,r){void 0===t&&(t={fastExit:!0}),void 0===r&&(r=null),this.errors=new V,this.fields=new ce,this._createFields(e),this.paused=!1,this.fastExit=!!o(t&&t.fastExit)||t.fastExit,this.$vee=r||{_vm:{$nextTick:function(e){return g(e)?e():Promise.resolve()},$emit:function(){},$off:function(){}}}},_e={rules:{configurable:!0},dictionary:{configurable:!0},flags:{configurable:!0},locale:{configurable:!0}},we={rules:{configurable:!0},dictionary:{configurable:!0},locale:{configurable:!0}};we.rules.get=function(){return te.rules},_e.rules.get=function(){return te.rules},_e.dictionary.get=function(){return R.getDriver()},we.dictionary.get=function(){return R.getDriver()},_e.flags.get=function(){return this.fields.items.reduce((function(e,t){var r;return t.scope?(e["$"+t.scope]=((r={})[t.name]=t.flags,r),e):(e[t.name]=t.flags,e)}),{})},_e.locale.get=function(){return ye.locale},_e.locale.set=function(e){ye.locale=e},we.locale.get=function(){return R.getDriver().locale},we.locale.set=function(e){var t=e!==R.getDriver().locale;R.getDriver().locale=e,t&&ye.$vee&&ye.$vee._vm&&ye.$vee._vm.$emit("localeChanged")},ye.create=function(e,t){return new ye(e,t)},ye.extend=function(e,t,r){void 0===r&&(r={}),ye._guardExtend(e,t);var n=t.options||{};ye._merge(e,{validator:t,paramNames:r&&r.paramNames||t.paramNames,options:x({hasTarget:!1,immediate:!0},n,r||{})})},ye.remove=function(e){te.remove(e)},ye.prototype.localize=function(e,t){ye.localize(e,t)},ye.localize=function(e,t){var r;if(m(e))R.getDriver().merge(e);else{if(t){var n=e||t.name;t=x({},t),R.getDriver().merge(((r={})[n]=t,r))}e&&(ye.locale=e)}},ye.prototype.attach=function(e){var t=this,r={name:e.name,scope:e.scope,persist:!0},n=e.persist?this.fields.find(r):null;n&&(e.flags=n.flags,n.destroy(),this.fields.remove(n));var i=e.initialValue,a=new ue(e);return this.fields.push(a),a.immediate?this.$vee._vm.$nextTick((function(){return t.validate("#"+a.id,i||a.value,{vmId:e.vmId})})):this._validate(a,i||a.value,{initial:!0}).then((function(e){a.flags.valid=e.valid,a.flags.invalid=!e.valid})),a},ye.prototype.flag=function(e,t,r){void 0===r&&(r=null);var n=this._resolveField(e,void 0,r);n&&t&&n.setFlags(t)},ye.prototype.detach=function(e,t,r){var n=g(e.destroy)?e:this._resolveField(e,t,r);n&&(n.persist||(n.destroy(),this.errors.remove(n.name,n.scope,n.vmId),this.fields.remove(n)))},ye.prototype.extend=function(e,t,r){void 0===r&&(r={}),ye.extend(e,t,r)},ye.prototype.reset=function(e){var t=this;return this.$vee._vm.$nextTick().then((function(){return t.$vee._vm.$nextTick()})).then((function(){t.fields.filter(e).forEach((function(r){r.waitFor(null),r.reset(),t.errors.remove(r.name,r.scope,e&&e.vmId)}))}))},ye.prototype.update=function(e,t){var r=t.scope;this._resolveField("#"+e)&&this.errors.update(e,{scope:r})},ye.prototype.remove=function(e){ye.remove(e)},ye.prototype.validate=function(e,t,r){var n=this;void 0===r&&(r={});var i=r.silent,a=r.vmId;if(this.paused)return Promise.resolve(!0);if(o(e))return this.validateScopes({silent:i,vmId:a});if("*"===e)return this.validateAll(void 0,{silent:i,vmId:a});if(/^(.+)\.\*$/.test(e)){var s=e.match(/^(.+)\.\*$/)[1];return this.validateAll(s)}var u=this._resolveField(e);if(!u)return this._handleFieldNotFound(e);i||(u.flags.pending=!0),void 0===t&&(t=u.value);var l=this._validate(u,t);return u.waitFor(l),l.then((function(e){return!i&&u.isWaitingFor(l)&&(u.waitFor(null),n._handleValidationResults([e],a)),e.valid}))},ye.prototype.pause=function(){return this.paused=!0,this},ye.prototype.resume=function(){return this.paused=!1,this},ye.prototype.validateAll=function(e,t){var r=this;void 0===t&&(t={});var n=t.silent,i=t.vmId;if(this.paused)return Promise.resolve(!0);var a=null,s=!1;return"string"==typeof e?a={scope:e,vmId:i}:m(e)?(a=Object.keys(e).map((function(e){return{name:e,vmId:i,scope:null}})),s=!0):a=Array.isArray(e)?e.map((function(e){return"object"==typeof e?Object.assign({vmId:i},e):{name:e,vmId:i}})):{scope:null,vmId:i},Promise.all(this.fields.filter(a).map((function(t){return r._validate(t,s?e[t.name]:t.value)}))).then((function(e){return n||r._handleValidationResults(e,i),e.every((function(e){return e.valid}))}))},ye.prototype.validateScopes=function(e){var t=this;void 0===e&&(e={});var r=e.silent,n=e.vmId;return this.paused?Promise.resolve(!0):Promise.all(this.fields.filter({vmId:n}).map((function(e){return t._validate(e,e.value)}))).then((function(e){return r||t._handleValidationResults(e,n),e.every((function(e){return e.valid}))}))},ye.prototype.verify=function(e,t,r){void 0===r&&(r={});var n={name:r&&r.name||"{field}",rules:h(t),bails:c("bails",r,!0),forceRequired:!1,get isRequired(){return!!this.rules.required||this.forceRequired}},i=Object.keys(n.rules).filter(te.isTargetRule);return i.length&&r&&m(r.values)&&(n.dependencies=i.map((function(e){var t=n.rules[e][0];return{name:e,field:{value:r.values[t]}}}))),this._validate(n,e).then((function(e){var t=[],r={};return e.errors.forEach((function(e){t.push(e.msg),r[e.rule]=e.msg})),{valid:e.valid,errors:t,failedRules:r}}))},ye.prototype.destroy=function(){this.$vee._vm.$off("localeChanged")},ye.prototype._createFields=function(e){var t=this;e&&Object.keys(e).forEach((function(r){var n=x({},{name:r,rules:e[r]});t.attach(n)}))},ye.prototype._getDateFormat=function(e){var t=null;return e.date_format&&Array.isArray(e.date_format)&&(t=e.date_format[0]),t||R.getDriver().getDateFormat(this.locale)},ye.prototype._formatErrorMessage=function(e,t,r,n){void 0===r&&(r={}),void 0===n&&(n=null);var i=this._getFieldDisplayName(e),a=this._getLocalizedParams(t,n);return R.getDriver().getFieldMessage(this.locale,e.name,t.name,[i,a,r])},ye.prototype._convertParamObjectToArray=function(e,t){if(Array.isArray(e))return e;var r=te.getParamNames(t);return r&&m(e)?r.reduce((function(t,r){return r in e&&t.push(e[r]),t}),[]):e},ye.prototype._getLocalizedParams=function(e,t){void 0===t&&(t=null);var r=this._convertParamObjectToArray(e.params,e.name);return e.options.hasTarget&&r&&r[0]?[t||R.getDriver().getAttribute(this.locale,r[0],r[0])].concat(r.slice(1)):r},ye.prototype._getFieldDisplayName=function(e){return e.alias||R.getDriver().getAttribute(this.locale,e.name,e.name)},ye.prototype._convertParamArrayToObj=function(e,t){var r=te.getParamNames(t);if(!r)return e;if(m(e)){if(r.some((function(t){return-1!==Object.keys(e).indexOf(t)})))return e;e=[e]}return e.reduce((function(e,t,n){return e[r[n]]=t,e}),{})},ye.prototype._test=function(e,t,r){var n=this,i=te.getValidatorMethod(r.name),a=Array.isArray(r.params)?_(r.params):r.params;a||(a=[]);var s=null;if(!i||"function"!=typeof i)return Promise.reject(v("No such validator '"+r.name+"' exists."));if(r.options.hasTarget&&e.dependencies){var o=E(e.dependencies,(function(e){return e.name===r.name}));o&&(s=o.field.alias,a=[o.field.value].concat(a.slice(1)))}else"required"===r.name&&e.rejectsFalse&&(a=a.length?a:[!0]);if(r.options.isDate){var u=this._getDateFormat(e.rules);"date_format"!==r.name&&a.push(u)}var l=i(t,this._convertParamArrayToObj(a,r.name));return g(l.then)?l.then((function(t){var i=!0,a={};return Array.isArray(t)?i=t.every((function(e){return m(e)?e.valid:e})):(i=m(t)?t.valid:t,a=t.data),{valid:i,data:l.data,errors:i?[]:[n._createFieldError(e,r,a,s)]}})):(m(l)||(l={valid:l,data:{}}),{valid:l.valid,data:l.data,errors:l.valid?[]:[this._createFieldError(e,r,l.data,s)]})},ye._merge=function(e,t){var r=t.validator,n=t.options,i=t.paramNames,a=g(r)?r:r.validate;r.getMessage&&R.getDriver().setMessage(ye.locale,e,r.getMessage),te.add(e,{validate:a,options:n,paramNames:i})},ye._guardExtend=function(e,t){if(!g(t)&&!g(t.validate))throw v("Extension Error: The validator '"+e+"' must be a function or have a 'validate' method.")},ye.prototype._createFieldError=function(e,t,r,n){var i=this;return{id:e.id,vmId:e.vmId,field:e.name,msg:this._formatErrorMessage(e,t,r,n),rule:t.name,scope:e.scope,regenerate:function(){return i._formatErrorMessage(e,t,r,n)}}},ye.prototype._resolveField=function(e,t,r){if("#"===e[0])return this.fields.findById(e.slice(1));if(!o(t))return this.fields.find({name:e,scope:t,vmId:r});if(N(e,".")){var n=e.split("."),i=n[0],a=n.slice(1),s=this.fields.find({name:a.join("."),scope:i,vmId:r});if(s)return s}return this.fields.find({name:e,scope:null,vmId:r})},ye.prototype._handleFieldNotFound=function(e,t){var r=o(t)?e:(o(t)?"":t+".")+e;return Promise.reject(v('Validating a non-existent field: "'+r+'". Use "attach()" first.'))},ye.prototype._handleValidationResults=function(e,t){var r=this,n=e.map((function(e){return{id:e.id}}));this.errors.removeById(n.map((function(e){return e.id}))),e.forEach((function(e){r.errors.remove(e.field,e.scope,t)}));var i=e.reduce((function(e,t){return e.push.apply(e,t.errors),e}),[]);this.errors.add(i),this.fields.filter(n).forEach((function(t){var r=E(e,(function(e){return e.id===t.id}));t.setFlags({pending:!1,valid:r.valid,validated:!0})}))},ye.prototype._shouldSkip=function(e,t){return!1!==e.bails&&(!(!e.isDisabled||!z().useConstraintAttrs)||!e.isRequired&&(o(t)||""===t||A(t)))},ye.prototype._shouldBail=function(e){return void 0!==e.bails?e.bails:this.fastExit},ye.prototype._validate=function(e,t,r){var n=this;void 0===r&&(r={});var i=r.initial,a=Object.keys(e.rules).filter(te.isRequireRule);if(e.forceRequired=!1,a.forEach((function(r){var i=te.getOptions(r),a=n._test(e,t,{name:r,params:e.rules[r],options:i});if(g(a.then))throw v("Require rules cannot be async");if(!m(a))throw v("Require rules has to return an object (see docs)");!0===a.data.required&&(e.forceRequired=!0)})),this._shouldSkip(e,t))return Promise.resolve({valid:!0,id:e.id,field:e.name,scope:e.scope,errors:[]});var s=[],o=[],u=!1;return g(e.checkValueChanged)&&(e.flags.changed=e.checkValueChanged()),Object.keys(e.rules).filter((function(e){return!i||!te.has(e)||te.isImmediate(e)})).some((function(r){var i=te.getOptions(r),a=n._test(e,t,{name:r,params:e.rules[r],options:i});return g(a.then)?s.push(a):!a.valid&&n._shouldBail(e)?(o.push.apply(o,a.errors),u=!0):s.push(new Promise((function(e){return e(a)}))),u})),u?Promise.resolve({valid:!1,errors:o,id:e.id,field:e.name,scope:e.scope}):Promise.all(s).then((function(t){return t.reduce((function(e,t){var r;return t.valid||(r=e.errors).push.apply(r,t.errors),e.valid=e.valid&&t.valid,e}),{valid:!0,errors:o,id:e.id,field:e.name,scope:e.scope})}))},Object.defineProperties(ye.prototype,_e),Object.defineProperties(ye,we);var xe=function(e){return m(e)?Object.keys(e).reduce((function(t,r){return t[r]=xe(e[r]),t}),{}):g(e)?e("{0}",["{1}","{2}","{3}"]):e},Ce=function(e,t){this.i18n=e,this.rootKey=t},De={locale:{configurable:!0}};De.locale.get=function(){return this.i18n.locale},De.locale.set=function(e){p("Cannot set locale from the validator when using vue-i18n, use i18n.locale setter instead")},Ce.prototype.getDateFormat=function(e){return this.i18n.getDateTimeFormat(e||this.locale)},Ce.prototype.setDateFormat=function(e,t){this.i18n.setDateTimeFormat(e||this.locale,t)},Ce.prototype.getMessage=function(e,t,r){var n=this.rootKey+".messages."+t,i=r;return Array.isArray(r)&&(i=[].concat.apply([],r)),this.i18n.te(n)?this.i18n.t(n,i):this.i18n.te(n,this.i18n.fallbackLocale)?this.i18n.t(n,this.i18n.fallbackLocale,i):this.i18n.t(this.rootKey+".messages._default",i)},Ce.prototype.getAttribute=function(e,t,r){void 0===r&&(r="");var n=this.rootKey+".attributes."+t;return this.i18n.te(n)?this.i18n.t(n):r},Ce.prototype.getFieldMessage=function(e,t,r,n){var i=this.rootKey+".custom."+t+"."+r;return this.i18n.te(i)?this.i18n.t(i,n):this.getMessage(e,r,n)},Ce.prototype.merge=function(e){var t=this;Object.keys(e).forEach((function(r){var n,i=$({},c(r+"."+t.rootKey,t.i18n.messages,{})),a=$(i,function(e){var t={};return e.messages&&(t.messages=xe(e.messages)),e.custom&&(t.custom=xe(e.custom)),e.attributes&&(t.attributes=e.attributes),o(e.dateFormat)||(t.dateFormat=e.dateFormat),t}(e[r]));t.i18n.mergeLocaleMessage(r,((n={})[t.rootKey]=a,n)),a.dateFormat&&t.i18n.setDateTimeFormat(r,a.dateFormat)}))},Ce.prototype.setMessage=function(e,t,r){var n,i;this.merge(((i={})[e]={messages:(n={},n[t]=r,n)},i))},Ce.prototype.setAttribute=function(e,t,r){var n,i;this.merge(((i={})[e]={attributes:(n={},n[t]=r,n)},i))},Object.defineProperties(Ce.prototype,De);var Se,Ee,ke,Te={aggressive:function(){return{on:["input"]}},eager:function(e){return e.errors.length?{on:["input"]}:{on:["change","blur"]}},passive:function(){return{on:[]}},lazy:function(){return{on:["change"]}}},$e=function(e,t){var r;this.configure(e),ke=this,t&&(Se=t),this._validator=(r=new ye(null,{fastExit:e&&e.fastExit},this),pe=r,r),this._initVM(this.config),this._initI18n(this.config)},Oe={i18nDriver:{configurable:!0},config:{configurable:!0}},Ie={i18nDriver:{configurable:!0},config:{configurable:!0}};$e.setI18nDriver=function(e,t){R.setDriver(e,t)},$e.configure=function(e){H(e)},$e.setMode=function(e,t){if(H({mode:e}),t){if(!g(t))throw new Error("A mode implementation must be a function");Te[e]=t}},$e.use=function(e,t){return void 0===t&&(t={}),g(e)?ke?void e({Validator:ye,ErrorBag:V,Rules:ye.rules},t):(Ee||(Ee=[]),void Ee.push({plugin:e,options:t})):p("The plugin must be a callable function")},$e.install=function(e,t){Se&&e===Se||(Se=e,ke=new $e(t),ye.$vee=ke,function(){try{var e=Object.defineProperty({},"passive",{get:function(){ae=!0}});window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}catch(e){ae=!1}}(),Se.mixin(me),Se.directive("validate",be),Ee&&(Ee.forEach((function(e){var t=e.plugin,r=e.options;$e.use(t,r)})),Ee=null))},Oe.i18nDriver.get=function(){return R.getDriver()},Ie.i18nDriver.get=function(){return R.getDriver()},Oe.config.get=function(){return z()},Ie.config.get=function(){return z()},$e.prototype._initVM=function(e){var t=this;this._vm=new Se({data:function(){return{errors:t._validator.errors,fields:t._validator.fields}}})},$e.prototype._initI18n=function(e){var t=this,r=e.dictionary,n=e.i18n,i=e.i18nRootKey,a=e.locale,s=function(){r&&t.i18nDriver.merge(r),t._validator.errors.regenerate()};n?($e.setI18nDriver("i18n",new Ce(n,i)),n._vm.$watch("locale",s)):"undefined"!=typeof window&&this._vm.$on("localeChanged",s),r&&this.i18nDriver.merge(r),a&&!n&&this._validator.localize(a)},$e.prototype.configure=function(e){H(e)},Object.defineProperties($e.prototype,Oe),Object.defineProperties($e,Ie),$e.mixin=me,$e.directive=be,$e.Validator=ye,$e.ErrorBag=V;var Ne,Ae={name:"en",messages:{_default:function(e){return"The "+e+" value is not valid"},after:function(e,t){var r=t[0];return"The "+e+" must be after "+(t[1]?"or equal to ":"")+r},alpha:function(e){return"The "+e+" field may only contain alphabetic characters"},alpha_dash:function(e){return"The "+e+" field may contain alpha-numeric characters as well as dashes and underscores"},alpha_num:function(e){return"The "+e+" field may only contain alpha-numeric characters"},alpha_spaces:function(e){return"The "+e+" field may only contain alphabetic characters as well as spaces"},before:function(e,t){var r=t[0];return"The "+e+" must be before "+(t[1]?"or equal to ":"")+r},between:function(e,t){return"The "+e+" field must be between "+t[0]+" and "+t[1]},confirmed:function(e){return"The "+e+" confirmation does not match"},credit_card:function(e){return"The "+e+" field is invalid"},date_between:function(e,t){return"The "+e+" must be between "+t[0]+" and "+t[1]},date_format:function(e,t){return"The "+e+" must be in the format "+t[0]},decimal:function(e,t){void 0===t&&(t=[]);var r=t[0];return void 0===r&&(r="*"),"The "+e+" field must be numeric and may contain"+(r&&"*"!==r?" "+r:"")+" decimal points"},digits:function(e,t){return"The "+e+" field must be numeric and contains exactly "+t[0]+" digits"},dimensions:function(e,t){return"The "+e+" field must be "+t[0]+" pixels by "+t[1]+" pixels"},email:function(e){return"The "+e+" field must be a valid email"},excluded:function(e){return"The "+e+" field must be a valid value"},ext:function(e){return"The "+e+" field must be a valid file"},image:function(e){return"The "+e+" field must be an image"},included:function(e){return"The "+e+" field must be a valid value"},integer:function(e){return"The "+e+" field must be an integer"},ip:function(e){return"The "+e+" field must be a valid ip address"},ip_or_fqdn:function(e){return"The "+e+" field must be a valid ip address or FQDN"},length:function(e,t){var r=t[0],n=t[1];return n?"The "+e+" length must be between "+r+" and "+n:"The "+e+" length must be "+r},max:function(e,t){return"The "+e+" field may not be greater than "+t[0]+" characters"},max_value:function(e,t){return"The "+e+" field must be "+t[0]+" or less"},mimes:function(e){return"The "+e+" field must have a valid file type"},min:function(e,t){return"The "+e+" field must be at least "+t[0]+" characters"},min_value:function(e,t){return"The "+e+" field must be "+t[0]+" or more"},numeric:function(e){return"The "+e+" field may only contain numeric characters"},regex:function(e){return"The "+e+" field format is invalid"},required:function(e){return"The "+e+" field is required"},required_if:function(e,t){return"The "+e+" field is required when the "+t[0]+" field has this value"},size:function(e,t){return"The "+e+" size must be less than "+function(e){var t=0===(e=1024*Number(e))?0:Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,t)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}(t[0])},url:function(e){return"The "+e+" field is not a valid URL"}},attributes:{}};function Pe(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((Ne={})[Ae.name]=Ae,Ne));function Me(e){var t=new Date(e.getTime()),r=t.getTimezoneOffset();return t.setSeconds(0,0),6e4*r+t.getTime()%6e4}var Fe={dateTimeDelimeter:/[T ]/,plainTime:/:/,timeZoneDelimeter:/[Z ]/i,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-])(\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function je(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(null===e)return new Date(NaN);var r=t||{},n=null==r.additionalDigits?2:Pe(r.additionalDigits);if(2!==n&&1!==n&&0!==n)throw new RangeError("additionalDigits must be 0, 1 or 2");if(e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))return new Date(e.getTime());if("number"==typeof e||"[object Number]"===Object.prototype.toString.call(e))return new Date(e);if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i=Le(e),a=qe(i.date,n),s=a.year,o=a.restDateString,u=Re(o,s);if(isNaN(u))return new Date(NaN);if(u){var l,c=u.getTime(),d=0;if(i.time&&(d=Ve(i.time),isNaN(d)))return new Date(NaN);if(i.timezone){if(l=Ue(i.timezone),isNaN(l))return new Date(NaN)}else l=Me(new Date(c+d)),l=Me(new Date(c+d+l));return new Date(c+d+l)}return new Date(NaN)}function Le(e){var t,r={},n=e.split(Fe.dateTimeDelimeter);if(Fe.plainTime.test(n[0])?(r.date=null,t=n[0]):(r.date=n[0],t=n[1],Fe.timeZoneDelimeter.test(r.date)&&(r.date=e.split(Fe.timeZoneDelimeter)[0],t=e.substr(r.date.length,e.length))),t){var i=Fe.timezone.exec(t);i?(r.time=t.replace(i[1],""),r.timezone=i[1]):r.time=t}return r}function qe(e,t){var r,n=Fe.YYY[t],i=Fe.YYYYY[t];if(r=Fe.YYYY.exec(e)||i.exec(e)){var a=r[1];return{year:parseInt(a,10),restDateString:e.slice(a.length)}}if(r=Fe.YY.exec(e)||n.exec(e)){var s=r[1];return{year:100*parseInt(s,10),restDateString:e.slice(s.length)}}return{year:null}}function Re(e,t){if(null===t)return null;var r,n,i,a;if(0===e.length)return(n=new Date(0)).setUTCFullYear(t),n;if(r=Fe.MM.exec(e))return n=new Date(0),Ye(t,i=parseInt(r[1],10)-1)?(n.setUTCFullYear(t,i),n):new Date(NaN);if(r=Fe.DDD.exec(e)){n=new Date(0);var s=parseInt(r[1],10);return function(e,t){if(t<1)return!1;var r=We(e);if(r&&t>366)return!1;if(!r&&t>365)return!1;return!0}(t,s)?(n.setUTCFullYear(t,0,s),n):new Date(NaN)}if(r=Fe.MMDD.exec(e)){n=new Date(0),i=parseInt(r[1],10)-1;var o=parseInt(r[2],10);return Ye(t,i,o)?(n.setUTCFullYear(t,i,o),n):new Date(NaN)}if(r=Fe.Www.exec(e))return Ze(t,a=parseInt(r[1],10)-1)?Be(t,a):new Date(NaN);if(r=Fe.WwwD.exec(e)){a=parseInt(r[1],10)-1;var u=parseInt(r[2],10)-1;return Ze(t,a,u)?Be(t,a,u):new Date(NaN)}return null}function Ve(e){var t,r,n;if(t=Fe.HH.exec(e))return Ge(r=parseFloat(t[1].replace(",",".")))?r%24*36e5:NaN;if(t=Fe.HHMM.exec(e))return Ge(r=parseInt(t[1],10),n=parseFloat(t[2].replace(",",".")))?r%24*36e5+6e4*n:NaN;if(t=Fe.HHMMSS.exec(e)){r=parseInt(t[1],10),n=parseInt(t[2],10);var i=parseFloat(t[3].replace(",","."));return Ge(r,n,i)?r%24*36e5+6e4*n+1e3*i:NaN}return null}function Ue(e){var t,r,n;if(t=Fe.timezoneZ.exec(e))return 0;if(t=Fe.timezoneHH.exec(e))return n=parseInt(t[2],10),Xe()?(r=36e5*n,"+"===t[1]?-r:r):NaN;if(t=Fe.timezoneHHMM.exec(e)){n=parseInt(t[2],10);var i=parseInt(t[3],10);return Xe(n,i)?(r=36e5*n+6e4*i,"+"===t[1]?-r:r):NaN}return 0}function Be(e,t,r){t=t||0,r=r||0;var n=new Date(0);n.setUTCFullYear(e,0,4);var i=7*t+r+1-(n.getUTCDay()||7);return n.setUTCDate(n.getUTCDate()+i),n}var ze=[31,28,31,30,31,30,31,31,30,31,30,31],He=[31,29,31,30,31,30,31,31,30,31,30,31];function We(e){return e%400==0||e%4==0&&e%100!=0}function Ye(e,t,r){if(t<0||t>11)return!1;if(null!=r){if(r<1)return!1;var n=We(e);if(n&&r>He[t])return!1;if(!n&&r>ze[t])return!1}return!0}function Ze(e,t,r){return!(t<0||t>52)&&(null==r||!(r<0||r>6))}function Ge(e,t,r){return(null==e||!(e<0||e>=25))&&((null==t||!(t<0||t>=60))&&(null==r||!(r<0||r>=60)))}function Xe(e,t){return null==t||!(t<0||t>59)}function Qe(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=je(e,r).getTime(),i=Pe(t);return new Date(n+i)}function Ke(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=je(e,t);return!isNaN(r)}var Je={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function et(e){return function(t){var r=t||{},n=r.width?String(r.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var tt={date:et({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:et({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:et({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},rt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function nt(e){return function(t,r){var n=r||{},i=n.width?String(n.width):e.defaultWidth;return("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues?e.formattingValues[i]||e.formattingValues[e.defaultFormattingWidth]:e.values[i]||e.values[e.defaultWidth])[e.argumentCallback?e.argumentCallback(t):t]}}function it(e){return function(t,r){var n=String(t),i=r||{},a=i.width,s=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=n.match(s);if(!o)return null;var u,l=o[0],c=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(c)?c.findIndex((function(e){return e.test(n)})):function(e,t){for(var r in e)if(e.hasOwnProperty(r)&&t(e[r]))return r}(c,(function(e){return e.test(n)})),u=e.valueCallback?e.valueCallback(u):u,{value:u=i.valueCallback?i.valueCallback(u):u,rest:n.slice(l.length)}}}var at,st={formatDistance:function(e,t,r){var n;return r=r||{},n="string"==typeof Je[e]?Je[e]:1===t?Je[e].one:Je[e].other.replace("{{count}}",t),r.addSuffix?r.comparison>0?"in "+n:n+" ago":n},formatLong:tt,formatRelative:function(e,t,r,n){return rt[e]},localize:{ordinalNumber:function(e,t){var r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},era:nt({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:nt({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:nt({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:nt({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:nt({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaulFormattingWidth:"wide"})},match:{ordinalNumber:(at={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var r=String(e),n=t||{},i=r.match(at.matchPattern);if(!i)return null;var a=i[0],s=r.match(at.parsePattern);if(!s)return null;var o=at.valueCallback?at.valueCallback(s[0]):s[0];return{value:o=n.valueCallback?n.valueCallback(o):o,rest:r.slice(a.length)}}),era:it({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:it({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:it({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:it({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:it({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function ot(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=1,n=je(e,t),i=n.getUTCDay(),a=(i<r?7:0)+i-r;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function ut(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=je(e,t),n=r.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(n+1,0,4),i.setUTCHours(0,0,0,0);var a=ot(i,t),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var o=ot(s,t);return r.getTime()>=a.getTime()?n+1:r.getTime()>=o.getTime()?n:n-1}function lt(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=ut(e,t),n=new Date(0);n.setUTCFullYear(r,0,4),n.setUTCHours(0,0,0,0);var i=ot(n,t);return i}function ct(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=je(e,t),n=ot(r,t).getTime()-lt(r,t).getTime();return Math.round(n/6048e5)+1}function dt(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=t||{},n=r.locale,i=n&&n.options&&n.options.weekStartsOn,a=null==i?0:Pe(i),s=null==r.weekStartsOn?a:Pe(r.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var o=je(e,r),u=o.getUTCDay(),l=(u<s?7:0)+u-s;return o.setUTCDate(o.getUTCDate()-l),o.setUTCHours(0,0,0,0),o}function ft(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=je(e,t),n=r.getUTCFullYear(),i=t||{},a=i.locale,s=a&&a.options&&a.options.firstWeekContainsDate,o=null==s?1:Pe(s),u=null==i.firstWeekContainsDate?o:Pe(i.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(n+1,0,u),l.setUTCHours(0,0,0,0);var c=dt(l,t),d=new Date(0);d.setUTCFullYear(n,0,u),d.setUTCHours(0,0,0,0);var f=dt(d,t);return r.getTime()>=c.getTime()?n+1:r.getTime()>=f.getTime()?n:n-1}function ht(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=t||{},n=r.locale,i=n&&n.options&&n.options.firstWeekContainsDate,a=null==i?1:Pe(i),s=null==r.firstWeekContainsDate?a:Pe(r.firstWeekContainsDate),o=ft(e,t),u=new Date(0);u.setUTCFullYear(o,0,s),u.setUTCHours(0,0,0,0);var l=dt(u,t);return l}function pt(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=je(e,t),n=dt(r,t).getTime()-ht(r,t).getTime();return Math.round(n/6048e5)+1}var vt="midnight",mt="noon",gt="morning",bt="afternoon",yt="evening",_t="night",wt={G:function(e,t,r){var n=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,t,r,n){var i=e.getUTCFullYear(),a=i>0?i:1-i;return"yy"===t?xt(a%100,2):"yo"===t?r.ordinalNumber(a,{unit:"year"}):xt(a,t.length)},Y:function(e,t,r,n){var i=ft(e,n),a=i>0?i:1-i;return"YY"===t?xt(a%100,2):"Yo"===t?r.ordinalNumber(a,{unit:"year"}):xt(a,t.length)},R:function(e,t,r,n){return xt(ut(e,n),t.length)},u:function(e,t,r,n){return xt(e.getUTCFullYear(),t.length)},Q:function(e,t,r,n){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(i);case"QQ":return xt(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,t,r,n){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(i);case"qq":return xt(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,t,r,n){var i=e.getUTCMonth();switch(t){case"M":return String(i+1);case"MM":return xt(i+1,2);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,t,r,n){var i=e.getUTCMonth();switch(t){case"L":return String(i+1);case"LL":return xt(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){var i=pt(e,n);return"wo"===t?r.ordinalNumber(i,{unit:"week"}):xt(i,t.length)},I:function(e,t,r,n){var i=ct(e,n);return"Io"===t?r.ordinalNumber(i,{unit:"week"}):xt(i,t.length)},d:function(e,t,r,n){var i=e.getUTCDate();return"do"===t?r.ordinalNumber(i,{unit:"date"}):xt(i,t.length)},D:function(e,t,r,n){var i=function(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=je(e,t),n=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var i=r.getTime(),a=n-i;return Math.floor(a/864e5)+1}(e,n);return"Do"===t?r.ordinalNumber(i,{unit:"dayOfYear"}):xt(i,t.length)},E:function(e,t,r,n){var i=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){var i=e.getUTCDay(),a=(i-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return xt(a,2);case"eo":return r.ordinalNumber(a,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){var i=e.getUTCDay(),a=(i-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return xt(a,t.length);case"co":return r.ordinalNumber(a,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,r,n){var i=e.getUTCDay(),a=0===i?7:i;switch(t){case"i":return String(a);case"ii":return xt(a,t.length);case"io":return r.ordinalNumber(a,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,t,r){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,t,r){var n,i=e.getUTCHours();switch(n=12===i?mt:0===i?vt:i/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,t,r){var n,i=e.getUTCHours();switch(n=i>=17?yt:i>=12?bt:i>=4?gt:_t,t){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(e,t,r,n){var i=e.getUTCHours()%12;return 0===i&&(i=12),"ho"===t?r.ordinalNumber(i,{unit:"hour"}):xt(i,t.length)},H:function(e,t,r,n){var i=e.getUTCHours();return"Ho"===t?r.ordinalNumber(i,{unit:"hour"}):xt(i,t.length)},K:function(e,t,r,n){var i=e.getUTCHours()%12;return"Ko"===t?r.ordinalNumber(i,{unit:"hour"}):xt(i,t.length)},k:function(e,t,r,n){var i=e.getUTCHours();return 0===i&&(i=24),"ko"===t?r.ordinalNumber(i,{unit:"hour"}):xt(i,t.length)},m:function(e,t,r,n){var i=e.getUTCMinutes();return"mo"===t?r.ordinalNumber(i,{unit:"minute"}):xt(i,t.length)},s:function(e,t,r,n){var i=e.getUTCSeconds();return"so"===t?r.ordinalNumber(i,{unit:"second"}):xt(i,t.length)},S:function(e,t,r,n){var i=t.length,a=e.getUTCMilliseconds();return xt(Math.floor(a*Math.pow(10,i-3)),i)},X:function(e,t,r,n){var i=(n._originalDate||e).getTimezoneOffset();if(0===i)return"Z";switch(t){case"X":return Dt(i);case"XXXX":case"XX":return Ct(i);case"XXXXX":case"XXX":default:return Ct(i,":")}},x:function(e,t,r,n){var i=(n._originalDate||e).getTimezoneOffset();switch(t){case"x":return Dt(i);case"xxxx":case"xx":return Ct(i);case"xxxxx":case"xxx":default:return Ct(i,":")}},O:function(e,t,r,n){var i=(n._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+St(i,":");case"OOOO":default:return"GMT"+Ct(i,":")}},z:function(e,t,r,n){var i=(n._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+St(i,":");case"zzzz":default:return"GMT"+Ct(i,":")}},t:function(e,t,r,n){var i=n._originalDate||e;return xt(Math.floor(i.getTime()/1e3),t.length)},T:function(e,t,r,n){return xt((n._originalDate||e).getTime(),t.length)}};function xt(e,t){for(var r=e<0?"-":"",n=Math.abs(e).toString();n.length<t;)n="0"+n;return r+n}function Ct(e,t){var r=t||"",n=e>0?"-":"+",i=Math.abs(e);return n+xt(Math.floor(i/60),2)+r+xt(i%60,2)}function Dt(e,t){return e%60==0?(e>0?"-":"+")+xt(Math.abs(e)/60,2):Ct(e,t)}function St(e,t){var r=e>0?"-":"+",n=Math.abs(e),i=Math.floor(n/60),a=n%60;if(0===a)return r+String(i);var s=t||"";return r+String(i)+s+xt(a,2)}function Et(e,t,r){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function kt(e,t,r){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var Tt={p:kt,P:function(e,t,r){var n,i=e.match(/(P+)(p+)?/),a=i[1],s=i[2];if(!s)return Et(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",Et(a,t)).replace("{{time}}",kt(s,t))}};function $t(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Pe(t);return Qe(e,-n,r)}var Ot=["D","DD","YY","YYYY"];function It(e){return-1!==Ot.indexOf(e)}function Nt(e){throw new RangeError("`options.awareOfUnicodeTokens` must be set to `true` to use `"+e+"` token; see: https://git.io/fxCyr")}var At=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Pt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Mt=/^'(.*?)'?$/,Ft=/''/g;function jt(e){return e.match(Mt)[1].replace(Ft,"'")}function Lt(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=je(e,r),i=je(t,r);return n.getTime()>i.getTime()}function qt(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=je(e,r),i=je(t,r);return n.getTime()<i.getTime()}function Rt(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=je(e,r),i=je(t,r);return n.getTime()===i.getTime()}function Vt(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=r||{},i=n.locale,a=i&&i.options&&i.options.weekStartsOn,s=null==a?0:Pe(a),o=null==n.weekStartsOn?s:Pe(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=je(e,r),l=Pe(t),c=u.getUTCDay(),d=l%7,f=(d+7)%7,h=(f<o?7:0)+l-c;return u.setUTCDate(u.getUTCDate()+h),u}var Ut=/^(1[0-2]|0?\d)/,Bt=/^(3[0-1]|[0-2]?\d)/,zt=/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,Ht=/^(5[0-3]|[0-4]?\d)/,Wt=/^(2[0-3]|[0-1]?\d)/,Yt=/^(2[0-4]|[0-1]?\d)/,Zt=/^(1[0-1]|0?\d)/,Gt=/^(1[0-2]|0?\d)/,Xt=/^[0-5]?\d/,Qt=/^[0-5]?\d/,Kt=/^\d/,Jt=/^\d{1,2}/,er=/^\d{1,3}/,tr=/^\d{1,4}/,rr=/^-?\d+/,nr=/^-?\d/,ir=/^-?\d{1,2}/,ar=/^-?\d{1,3}/,sr=/^-?\d{1,4}/,or=/^([+-])(\d{2})(\d{2})?|Z/,ur=/^([+-])(\d{2})(\d{2})|Z/,lr=/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,cr=/^([+-])(\d{2}):(\d{2})|Z/,dr=/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;function fr(e,t,r){var n=t.match(e);if(!n)return null;var i=parseInt(n[0],10);return{value:r?r(i):i,rest:t.slice(n[0].length)}}function hr(e,t){var r=t.match(e);return r?"Z"===r[0]?{value:0,rest:t.slice(1)}:{value:("+"===r[1]?1:-1)*(36e5*(r[2]?parseInt(r[2],10):0)+6e4*(r[3]?parseInt(r[3],10):0)+1e3*(r[5]?parseInt(r[5],10):0)),rest:t.slice(r[0].length)}:null}function pr(e,t){return fr(rr,e,t)}function vr(e,t,r){switch(e){case 1:return fr(Kt,t,r);case 2:return fr(Jt,t,r);case 3:return fr(er,t,r);case 4:return fr(tr,t,r);default:return fr(new RegExp("^\\d{1,"+e+"}"),t,r)}}function mr(e,t,r){switch(e){case 1:return fr(nr,t,r);case 2:return fr(ir,t,r);case 3:return fr(ar,t,r);case 4:return fr(sr,t,r);default:return fr(new RegExp("^-?\\d{1,"+e+"}"),t,r)}}function gr(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function br(e,t){var r,n=t>0,i=n?t:1-t;if(i<=50)r=e||100;else{var a=i+50;r=e+100*Math.floor(a/100)-(e>=a%100?100:0)}return n?r:1-r}var yr=[31,28,31,30,31,30,31,31,30,31,30,31],_r=[31,29,31,30,31,30,31,31,30,31,30,31];function wr(e){return e%400==0||e%4==0&&e%100!=0}var xr={G:{priority:140,parse:function(e,t,r,n){switch(t){case"G":case"GG":case"GGG":return r.era(e,{width:"abbreviated"})||r.era(e,{width:"narrow"});case"GGGGG":return r.era(e,{width:"narrow"});case"GGGG":default:return r.era(e,{width:"wide"})||r.era(e,{width:"abbreviated"})||r.era(e,{width:"narrow"})}},set:function(e,t,r){return e.setUTCFullYear(1===t?10:-9,0,1),e.setUTCHours(0,0,0,0),e}},y:{priority:130,parse:function(e,t,r,n){var i=function(e){return{year:e,isTwoDigitYear:"yy"===t}};switch(t){case"y":return vr(4,e,i);case"yo":return r.ordinalNumber(e,{unit:"year",valueCallback:i});default:return vr(t.length,e,i)}},validate:function(e,t,r){return t.isTwoDigitYear||t.year>0},set:function(e,t,r){var n=ft(e,r);if(t.isTwoDigitYear){var i=br(t.year,n);return e.setUTCFullYear(i,0,1),e.setUTCHours(0,0,0,0),e}var a=n>0?t.year:1-t.year;return e.setUTCFullYear(a,0,1),e.setUTCHours(0,0,0,0),e}},Y:{priority:130,parse:function(e,t,r,n){var i=function(e){return{year:e,isTwoDigitYear:"YY"===t}};switch(t){case"Y":return vr(4,e,i);case"Yo":return r.ordinalNumber(e,{unit:"year",valueCallback:i});default:return vr(t.length,e,i)}},validate:function(e,t,r){return t.isTwoDigitYear||t.year>0},set:function(e,t,r){var n=e.getUTCFullYear();if(t.isTwoDigitYear){var i=br(t.year,n);return e.setUTCFullYear(i,0,r.firstWeekContainsDate),e.setUTCHours(0,0,0,0),dt(e,r)}var a=n>0?t.year:1-t.year;return e.setUTCFullYear(a,0,r.firstWeekContainsDate),e.setUTCHours(0,0,0,0),dt(e,r)}},R:{priority:130,parse:function(e,t,r,n){return mr("R"===t?4:t.length,e)},set:function(e,t,r){var n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),ot(n)}},u:{priority:130,parse:function(e,t,r,n){return mr("u"===t?4:t.length,e)},set:function(e,t,r){return e.setUTCFullYear(t,0,1),e.setUTCHours(0,0,0,0),e}},Q:{priority:120,parse:function(e,t,r,n){switch(t){case"Q":case"QQ":return vr(t.length,e);case"Qo":return r.ordinalNumber(e,{unit:"quarter"});case"QQQ":return r.quarter(e,{width:"abbreviated",context:"formatting"})||r.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return r.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(e,{width:"wide",context:"formatting"})||r.quarter(e,{width:"abbreviated",context:"formatting"})||r.quarter(e,{width:"narrow",context:"formatting"})}},validate:function(e,t,r){return t>=1&&t<=4},set:function(e,t,r){return e.setUTCMonth(3*(t-1),1),e.setUTCHours(0,0,0,0),e}},q:{priority:120,parse:function(e,t,r,n){switch(t){case"q":case"qq":return vr(t.length,e);case"qo":return r.ordinalNumber(e,{unit:"quarter"});case"qqq":return r.quarter(e,{width:"abbreviated",context:"standalone"})||r.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return r.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(e,{width:"wide",context:"standalone"})||r.quarter(e,{width:"abbreviated",context:"standalone"})||r.quarter(e,{width:"narrow",context:"standalone"})}},validate:function(e,t,r){return t>=1&&t<=4},set:function(e,t,r){return e.setUTCMonth(3*(t-1),1),e.setUTCHours(0,0,0,0),e}},M:{priority:110,parse:function(e,t,r,n){var i=function(e){return e-1};switch(t){case"M":return fr(Ut,e,i);case"MM":return vr(2,e,i);case"Mo":return r.ordinalNumber(e,{unit:"month",valueCallback:i});case"MMM":return r.month(e,{width:"abbreviated",context:"formatting"})||r.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return r.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(e,{width:"wide",context:"formatting"})||r.month(e,{width:"abbreviated",context:"formatting"})||r.month(e,{width:"narrow",context:"formatting"})}},validate:function(e,t,r){return t>=0&&t<=11},set:function(e,t,r){return e.setUTCMonth(t,1),e.setUTCHours(0,0,0,0),e}},L:{priority:110,parse:function(e,t,r,n){var i=function(e){return e-1};switch(t){case"L":return fr(Ut,e,i);case"LL":return vr(2,e,i);case"Lo":return r.ordinalNumber(e,{unit:"month",valueCallback:i});case"LLL":return r.month(e,{width:"abbreviated",context:"standalone"})||r.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return r.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(e,{width:"wide",context:"standalone"})||r.month(e,{width:"abbreviated",context:"standalone"})||r.month(e,{width:"narrow",context:"standalone"})}},validate:function(e,t,r){return t>=0&&t<=11},set:function(e,t,r){return e.setUTCMonth(t,1),e.setUTCHours(0,0,0,0),e}},w:{priority:100,parse:function(e,t,r,n){switch(t){case"w":return fr(Ht,e);case"wo":return r.ordinalNumber(e,{unit:"week"});default:return vr(t.length,e)}},validate:function(e,t,r){return t>=1&&t<=53},set:function(e,t,r){return dt(function(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=je(e,r),i=Pe(t),a=pt(n,r)-i;return n.setUTCDate(n.getUTCDate()-7*a),n}(e,t,r),r)}},I:{priority:100,parse:function(e,t,r,n){switch(t){case"I":return fr(Ht,e);case"Io":return r.ordinalNumber(e,{unit:"week"});default:return vr(t.length,e)}},validate:function(e,t,r){return t>=1&&t<=53},set:function(e,t,r){return ot(function(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=je(e,r),i=Pe(t),a=ct(n,r)-i;return n.setUTCDate(n.getUTCDate()-7*a),n}(e,t,r),r)}},d:{priority:90,parse:function(e,t,r,n){switch(t){case"d":return fr(Bt,e);case"do":return r.ordinalNumber(e,{unit:"date"});default:return vr(t.length,e)}},validate:function(e,t,r){var n=wr(e.getUTCFullYear()),i=e.getUTCMonth();return n?t>=1&&t<=_r[i]:t>=1&&t<=yr[i]},set:function(e,t,r){return e.setUTCDate(t),e.setUTCHours(0,0,0,0),e}},D:{priority:90,parse:function(e,t,r,n){switch(t){case"D":case"DD":return fr(zt,e);case"Do":return r.ordinalNumber(e,{unit:"date"});default:return vr(t.length,e)}},validate:function(e,t,r){return wr(e.getUTCFullYear())?t>=1&&t<=366:t>=1&&t<=365},set:function(e,t,r){return e.setUTCMonth(0,t),e.setUTCHours(0,0,0,0),e}},E:{priority:90,parse:function(e,t,r,n){switch(t){case"E":case"EE":case"EEE":return r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return r.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"})}},validate:function(e,t,r){return t>=0&&t<=6},set:function(e,t,r){return(e=Vt(e,t,r)).setUTCHours(0,0,0,0),e}},e:{priority:90,parse:function(e,t,r,n){var i=function(e){var t=7*Math.floor((e-1)/7);return(e+n.weekStartsOn+6)%7+t};switch(t){case"e":case"ee":return vr(t.length,e,i);case"eo":return r.ordinalNumber(e,{unit:"day",valueCallback:i});case"eee":return r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"eeeee":return r.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"})}},validate:function(e,t,r){return t>=0&&t<=6},set:function(e,t,r){return(e=Vt(e,t,r)).setUTCHours(0,0,0,0),e}},c:{priority:90,parse:function(e,t,r,n){var i=function(e){var t=7*Math.floor((e-1)/7);return(e+n.weekStartsOn+6)%7+t};switch(t){case"c":case"cc":return vr(t.length,e,i);case"co":return r.ordinalNumber(e,{unit:"day",valueCallback:i});case"ccc":return r.day(e,{width:"abbreviated",context:"standalone"})||r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"});case"ccccc":return r.day(e,{width:"narrow",context:"standalone"});case"cccccc":return r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return r.day(e,{width:"wide",context:"standalone"})||r.day(e,{width:"abbreviated",context:"standalone"})||r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"})}},validate:function(e,t,r){return t>=0&&t<=6},set:function(e,t,r){return(e=Vt(e,t,r)).setUTCHours(0,0,0,0),e}},i:{priority:90,parse:function(e,t,r,n){var i=function(e){return 0===e?7:e};switch(t){case"i":case"ii":return vr(t.length,e);case"io":return r.ordinalNumber(e,{unit:"day"});case"iii":return r.day(e,{width:"abbreviated",context:"formatting",valueCallback:i})||r.day(e,{width:"short",context:"formatting",valueCallback:i})||r.day(e,{width:"narrow",context:"formatting",valueCallback:i});case"iiiii":return r.day(e,{width:"narrow",context:"formatting",valueCallback:i});case"iiiiii":return r.day(e,{width:"short",context:"formatting",valueCallback:i})||r.day(e,{width:"narrow",context:"formatting",valueCallback:i});case"iiii":default:return r.day(e,{width:"wide",context:"formatting",valueCallback:i})||r.day(e,{width:"abbreviated",context:"formatting",valueCallback:i})||r.day(e,{width:"short",context:"formatting",valueCallback:i})||r.day(e,{width:"narrow",context:"formatting",valueCallback:i})}},validate:function(e,t,r){return t>=1&&t<=7},set:function(e,t,r){return(e=function(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Pe(t);n%7==0&&(n-=7);var i=1,a=je(e,r),s=a.getUTCDay(),o=n%7,u=(o+7)%7,l=(u<i?7:0)+n-s;return a.setUTCDate(a.getUTCDate()+l),a}(e,t,r)).setUTCHours(0,0,0,0),e}},a:{priority:80,parse:function(e,t,r,n){switch(t){case"a":case"aa":case"aaa":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}},set:function(e,t,r){return e.setUTCHours(gr(t),0,0,0),e}},b:{priority:80,parse:function(e,t,r,n){switch(t){case"b":case"bb":case"bbb":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}},set:function(e,t,r){return e.setUTCHours(gr(t),0,0,0),e}},B:{priority:80,parse:function(e,t,r,n){switch(t){case"B":case"BB":case"BBB":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}},set:function(e,t,r){return e.setUTCHours(gr(t),0,0,0),e}},h:{priority:70,parse:function(e,t,r,n){switch(t){case"h":return fr(Gt,e);case"ho":return r.ordinalNumber(e,{unit:"hour"});default:return vr(t.length,e)}},validate:function(e,t,r){return t>=1&&t<=12},set:function(e,t,r){var n=e.getUTCHours()>=12;return n&&t<12?e.setUTCHours(t+12,0,0,0):n||12!==t?e.setUTCHours(t,0,0,0):e.setUTCHours(0,0,0,0),e}},H:{priority:70,parse:function(e,t,r,n){switch(t){case"H":return fr(Wt,e);case"Ho":return r.ordinalNumber(e,{unit:"hour"});default:return vr(t.length,e)}},validate:function(e,t,r){return t>=0&&t<=23},set:function(e,t,r){return e.setUTCHours(t,0,0,0),e}},K:{priority:70,parse:function(e,t,r,n){switch(t){case"K":return fr(Zt,e);case"Ko":return r.ordinalNumber(e,{unit:"hour"});default:return vr(t.length,e)}},validate:function(e,t,r){return t>=0&&t<=11},set:function(e,t,r){return e.getUTCHours()>=12&&t<12?e.setUTCHours(t+12,0,0,0):e.setUTCHours(t,0,0,0),e}},k:{priority:70,parse:function(e,t,r,n){switch(t){case"k":return fr(Yt,e);case"ko":return r.ordinalNumber(e,{unit:"hour"});default:return vr(t.length,e)}},validate:function(e,t,r){return t>=1&&t<=24},set:function(e,t,r){var n=t<=24?t%24:t;return e.setUTCHours(n,0,0,0),e}},m:{priority:60,parse:function(e,t,r,n){switch(t){case"m":return fr(Xt,e);case"mo":return r.ordinalNumber(e,{unit:"minute"});default:return vr(t.length,e)}},validate:function(e,t,r){return t>=0&&t<=59},set:function(e,t,r){return e.setUTCMinutes(t,0,0),e}},s:{priority:50,parse:function(e,t,r,n){switch(t){case"s":return fr(Qt,e);case"so":return r.ordinalNumber(e,{unit:"second"});default:return vr(t.length,e)}},validate:function(e,t,r){return t>=0&&t<=59},set:function(e,t,r){return e.setUTCSeconds(t,0),e}},S:{priority:40,parse:function(e,t,r,n){return vr(t.length,e,(function(e){return Math.floor(e*Math.pow(10,3-t.length))}))},set:function(e,t,r){return e.setUTCMilliseconds(t),e}},X:{priority:20,parse:function(e,t,r,n){switch(t){case"X":return hr(or,e);case"XX":return hr(ur,e);case"XXXX":return hr(lr,e);case"XXXXX":return hr(dr,e);case"XXX":default:return hr(cr,e)}},set:function(e,t,r){return new Date(e.getTime()-t)}},x:{priority:20,parse:function(e,t,r,n){switch(t){case"x":return hr(or,e);case"xx":return hr(ur,e);case"xxxx":return hr(lr,e);case"xxxxx":return hr(dr,e);case"xxx":default:return hr(cr,e)}},set:function(e,t,r){return new Date(e.getTime()-t)}},t:{priority:10,parse:function(e,t,r,n){return pr(e)},set:function(e,t,r){return new Date(1e3*t)}},T:{priority:10,parse:function(e,t,r,n){return pr(e)},set:function(e,t,r){return new Date(t)}}},Cr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Dr=/^'(.*?)'?$/,Sr=/''/g,Er=/\S/;function kr(e){var t=new Date(0);return t.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),t.setHours(e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()),t}function Tr(e){return e.match(Dr)[1].replace(Sr,"'")}function $r(e,t){if("string"!=typeof e)return Ke(e)?e:null;var r=function(e,t,r,n){if(arguments.length<3)throw new TypeError("3 arguments required, but only "+arguments.length+" present");var i=String(e),a=String(t),s=n||{},o=s.locale||st;if(!o.match)throw new RangeError("locale must contain match property");var u=o.options&&o.options.firstWeekContainsDate,l=null==u?1:Pe(u),c=null==s.firstWeekContainsDate?l:Pe(s.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=o.options&&o.options.weekStartsOn,f=null==d?0:Pe(d),h=null==s.weekStartsOn?f:Pe(s.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(""===a)return""===i?je(r,s):new Date(NaN);var p,v={firstWeekContainsDate:c,weekStartsOn:h,locale:o},m=[{priority:20,set:kr,index:0}],g=a.match(Cr);for(p=0;p<g.length;p++){var b=g[p];!s.awareOfUnicodeTokens&&It(b)&&Nt(b);var y=b[0],_=xr[y];if(_){var w=_.parse(i,b,o.match,v);if(!w)return new Date(NaN);m.push({priority:_.priority,set:_.set,validate:_.validate,value:w.value,index:m.length}),i=w.rest}else{if("''"===b?b="'":"'"===y&&(b=Tr(b)),0!==i.indexOf(b))return new Date(NaN);i=i.slice(b.length)}}if(i.length>0&&Er.test(i))return new Date(NaN);var x=m.map((function(e){return e.priority})).sort((function(e,t){return t-e})).filter((function(e,t,r){return r.indexOf(e)===t})).map((function(e){return m.filter((function(t){return t.priority===e})).reverse()})).map((function(e){return e[0]})),C=je(r,s);if(isNaN(C))return new Date(NaN);var D=$t(C,Me(C));for(p=0;p<x.length;p++){var S=x[p];if(S.validate&&!S.validate(D,S.value,v))return new Date(NaN);D=S.set(D,S.value,v)}return D}(e,t,new Date);return Ke(r)&&function(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=String(t),i=r||{},a=i.locale||st,s=a.options&&a.options.firstWeekContainsDate,o=null==s?1:Pe(s),u=null==i.firstWeekContainsDate?o:Pe(i.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=a.options&&a.options.weekStartsOn,c=null==l?0:Pe(l),d=null==i.weekStartsOn?c:Pe(i.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!a.localize)throw new RangeError("locale must contain localize property");if(!a.formatLong)throw new RangeError("locale must contain formatLong property");var f=je(e,i);if(!Ke(f,i))return"Invalid Date";var h=Me(f),p=$t(f,h,i),v={firstWeekContainsDate:u,weekStartsOn:d,locale:a,_originalDate:f},m=n.match(Pt).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,Tt[t])(e,a.formatLong,v):e})).join("").match(At).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return jt(e);var r=wt[t];return r?(!i.awareOfUnicodeTokens&&It(e)&&Nt(e),r(p,e,a.localize,v)):e})).join("");return m}(r,t)===e?r:null}var Or={validate:function(e,t){void 0===t&&(t={});var r=t.targetValue,n=t.inclusion;void 0===n&&(n=!1);var i=t.format;return void 0===i&&(i=n,n=!1),e=$r(e,i),r=$r(r,i),!(!e||!r)&&(Lt(e,r)||n&&Rt(e,r))},options:{hasTarget:!0,isDate:!0},paramNames:["targetValue","inclusion","format"]},Ir={en:/^[A-Z]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,da:/^[A-ZÆØÅ]*$/i,de:/^[A-ZÄÖÜß]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ]*$/i,fa:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,it:/^[A-Z\xC0-\xFF]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,nl:/^[A-ZÉËÏÓÖÜ]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,ru:/^[А-ЯЁ]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,sr:/^[A-ZČĆŽŠĐ]*$/i,sv:/^[A-ZÅÄÖ]*$/i,tr:/^[A-ZÇĞİıÖŞÜ]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,az:/^[A-ZÇƏĞİıÖŞÜ]*$/i},Nr={en:/^[A-Z\s]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,da:/^[A-ZÆØÅ\s]*$/i,de:/^[A-ZÄÖÜß\s]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ\s]*$/i,fa:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی\s]*$/,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,it:/^[A-Z\xC0-\xFF\s]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,nl:/^[A-ZÉËÏÓÖÜ\s]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,ru:/^[А-ЯЁ\s]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,sr:/^[A-ZČĆŽŠĐ\s]*$/i,sv:/^[A-ZÅÄÖ\s]*$/i,tr:/^[A-ZÇĞİıÖŞÜ\s]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ\s]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,az:/^[A-ZÇƏĞİıÖŞÜ\s]*$/i},Ar={en:/^[0-9A-Z]*$/i,cs:/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,da:/^[0-9A-ZÆØÅ]$/i,de:/^[0-9A-ZÄÖÜß]*$/i,es:/^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,fa:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,fr:/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,it:/^[0-9A-Z\xC0-\xFF]*$/i,lt:/^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,hu:/^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,nl:/^[0-9A-ZÉËÏÓÖÜ]*$/i,pl:/^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,pt:/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,ru:/^[0-9А-ЯЁ]*$/i,sk:/^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,sr:/^[0-9A-ZČĆŽŠĐ]*$/i,sv:/^[0-9A-ZÅÄÖ]*$/i,tr:/^[0-9A-ZÇĞİıÖŞÜ]*$/i,uk:/^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,az:/^[0-9A-ZÇƏĞİıÖŞÜ]*$/i},Pr={en:/^[0-9A-Z_-]*$/i,cs:/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,da:/^[0-9A-ZÆØÅ_-]*$/i,de:/^[0-9A-ZÄÖÜß_-]*$/i,es:/^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,fa:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی_-]*$/,fr:/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,it:/^[0-9A-Z\xC0-\xFF_-]*$/i,lt:/^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,nl:/^[0-9A-ZÉËÏÓÖÜ_-]*$/i,hu:/^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,pl:/^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,pt:/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,ru:/^[0-9А-ЯЁ_-]*$/i,sk:/^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,sr:/^[0-9A-ZČĆŽŠĐ_-]*$/i,sv:/^[0-9A-ZÅÄÖ_-]*$/i,tr:/^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,uk:/^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,az:/^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i},Mr=function(e,t){void 0===t&&(t={});var r=t.locale;return Array.isArray(e)?e.every((function(e){return Mr(e,[r])})):r?(Ir[r]||Ir.en).test(e):Object.keys(Ir).some((function(t){return Ir[t].test(e)}))},Fr={validate:Mr,paramNames:["locale"]},jr=function(e,t){void 0===t&&(t={});var r=t.locale;return Array.isArray(e)?e.every((function(e){return jr(e,[r])})):r?(Pr[r]||Pr.en).test(e):Object.keys(Pr).some((function(t){return Pr[t].test(e)}))},Lr={validate:jr,paramNames:["locale"]},qr=function(e,t){void 0===t&&(t={});var r=t.locale;return Array.isArray(e)?e.every((function(e){return qr(e,[r])})):r?(Ar[r]||Ar.en).test(e):Object.keys(Ar).some((function(t){return Ar[t].test(e)}))},Rr={validate:qr,paramNames:["locale"]},Vr=function(e,t){void 0===t&&(t={});var r=t.locale;return Array.isArray(e)?e.every((function(e){return Vr(e,[r])})):r?(Nr[r]||Nr.en).test(e):Object.keys(Nr).some((function(t){return Nr[t].test(e)}))},Ur={validate:Vr,paramNames:["locale"]},Br={validate:function(e,t){void 0===t&&(t={});var r=t.targetValue,n=t.inclusion;void 0===n&&(n=!1);var i=t.format;return void 0===i&&(i=n,n=!1),e=$r(e,i),r=$r(r,i),!(!e||!r)&&(qt(e,r)||n&&Rt(e,r))},options:{hasTarget:!0,isDate:!0},paramNames:["targetValue","inclusion","format"]},zr=function(e,t){void 0===t&&(t={});var r=t.min,n=t.max;return Array.isArray(e)?e.every((function(e){return zr(e,{min:r,max:n})})):Number(r)<=e&&Number(n)>=e},Hr={validate:zr,paramNames:["min","max"]},Wr={validate:function(e,t){var r=t.targetValue;return String(e)===String(r)},options:{hasTarget:!0},paramNames:["targetValue"]};function Yr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Zr(e,t){return e(t={exports:{}},t.exports),t.exports}var Gr=Zr((function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!("string"==typeof e||e instanceof String)){var t;throw t=null===e?"null":"object"===(t=r(e))&&e.constructor&&e.constructor.hasOwnProperty("name")?e.constructor.name:"a ".concat(t),new TypeError("Expected string but received ".concat(t,"."))}},e.exports=t.default,e.exports.default=t.default}));Yr(Gr);var Xr=Yr(Zr((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,r.default)(e);var t=e.replace(/[- ]+/g,"");if(!n.test(t))return!1;for(var i,a,s,o=0,u=t.length-1;u>=0;u--)i=t.substring(u,u+1),a=parseInt(i,10),o+=s&&(a*=2)>=10?a%10+1:a,s=!s;return!(o%10!=0||!t)};var r=function(e){return e&&e.__esModule?e:{default:e}}(Gr);var n=/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;e.exports=t.default,e.exports.default=t.default}))),Qr={validate:function(e){return Xr(String(e))}},Kr={validate:function(e,t){void 0===t&&(t={});var r=t.min,n=t.max,i=t.inclusivity;void 0===i&&(i="()");var a=t.format;void 0===a&&(a=i,i="()");var s=$r(String(r),a),o=$r(String(n),a),u=$r(String(e),a);return!!(s&&o&&u)&&("()"===i?Lt(u,s)&&qt(u,o):"(]"===i?Lt(u,s)&&(Rt(u,o)||qt(u,o)):"[)"===i?qt(u,o)&&(Rt(u,s)||Lt(u,s)):Rt(u,o)||Rt(u,s)||qt(u,o)&&Lt(u,s))},options:{isDate:!0},paramNames:["min","max","inclusivity","format"]},Jr={validate:function(e,t){return!!$r(e,t.format)},options:{isDate:!0},paramNames:["format"]},en=function(e,t){void 0===t&&(t={});var r=t.decimals;void 0===r&&(r="*");var n=t.separator;if(void 0===n&&(n="."),o(e)||""===e)return!1;if(Array.isArray(e))return e.every((function(e){return en(e,{decimals:r,separator:n})}));if(0===Number(r))return/^-?\d*$/.test(e);if(!new RegExp("^[-+]?\\d*(\\"+n+"\\d"+("*"===r?"+":"{1,"+r+"}")+")?([eE]{1}[-]?\\d+)?$").test(e))return!1;var i=parseFloat(e);return i==i},tn={validate:en,paramNames:["decimals","separator"]},rn=function(e,t){var r=t[0];if(Array.isArray(e))return e.every((function(e){return rn(e,[r])}));var n=String(e);return/^[0-9]*$/.test(n)&&n.length===Number(r)},nn={validate:rn},an=/\.(jpg|svg|jpeg|png|bmp|gif)$/i,sn={validate:function(e,t){var r=t[0],n=t[1],i=w(e).filter((function(e){return an.test(e.name)}));return 0!==i.length&&Promise.all(i.map((function(e){return function(e,t,r){var n=window.URL||window.webkitURL;return new Promise((function(i){var a=new Image;a.onerror=function(){return i({valid:!1})},a.onload=function(){return i({valid:a.width===Number(t)&&a.height===Number(r)})},a.src=n.createObjectURL(e)}))}(e,r,n)})))}},on=Zr((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;for(var r in t)void 0===e[r]&&(e[r]=t[r]);return e},e.exports=t.default,e.exports.default=t.default}));Yr(on);var un=Zr((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var i,a;(0,r.default)(e),"object"===n(t)?(i=t.min||0,a=t.max):(i=arguments[1],a=arguments[2]);var s=encodeURI(e).split(/%..|./).length-1;return s>=i&&(void 0===a||s<=a)};var r=function(e){return e&&e.__esModule?e:{default:e}}(Gr);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e.exports=t.default,e.exports.default=t.default}));Yr(un);var ln=Zr((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,r.default)(e),(t=(0,n.default)(t,a)).allow_trailing_dot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));for(var i=e.split("."),s=0;s<i.length;s++)if(i[s].length>63)return!1;if(t.require_tld){var o=i.pop();if(!i.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(o))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(o))return!1}for(var u,l=0;l<i.length;l++){if(u=i[l],t.allow_underscores&&(u=u.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(u))return!1;if(/[\uff01-\uff5e]/.test(u))return!1;if("-"===u[0]||"-"===u[u.length-1])return!1}return!0};var r=i(Gr),n=i(on);function i(e){return e&&e.__esModule?e:{default:e}}var a={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};e.exports=t.default,e.exports.default=t.default})),cn=Yr(ln),dn=Zr((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if((0,r.default)(t),!(a=String(a)))return e(t,4)||e(t,6);if("4"===a){if(!n.test(t))return!1;var s=t.split(".").sort((function(e,t){return e-t}));return s[3]<=255}if("6"===a){var o=t.split(":"),u=!1,l=e(o[o.length-1],4),c=l?7:8;if(o.length>c)return!1;if("::"===t)return!0;"::"===t.substr(0,2)?(o.shift(),o.shift(),u=!0):"::"===t.substr(t.length-2)&&(o.pop(),o.pop(),u=!0);for(var d=0;d<o.length;++d)if(""===o[d]&&d>0&&d<o.length-1){if(u)return!1;u=!0}else if(l&&d===o.length-1);else if(!i.test(o[d]))return!1;return u?o.length>=1:o.length===c}return!1};var r=function(e){return e&&e.__esModule?e:{default:e}}(Gr);var n=/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,i=/^[0-9A-F]{1,4}$/i;e.exports=t.default,e.exports.default=t.default})),fn=Yr(dn),hn=Yr(Zr((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if((0,r.default)(e),(t=(0,n.default)(t,u)).require_display_name||t.allow_display_name){var o=e.match(l);if(o)e=o[1];else if(t.require_display_name)return!1}var v=e.split("@"),m=v.pop(),g=v.join("@"),b=m.toLowerCase();if(t.domain_specific_validation&&("gmail.com"===b||"googlemail.com"===b)){var y=(g=g.toLowerCase()).split("+")[0];if(!(0,i.default)(y.replace(".",""),{min:6,max:30}))return!1;for(var _=y.split("."),w=0;w<_.length;w++)if(!d.test(_[w]))return!1}if(!(0,i.default)(g,{max:64})||!(0,i.default)(m,{max:254}))return!1;if(!(0,a.default)(m,{require_tld:t.require_tld})){if(!t.allow_ip_domain)return!1;if(!(0,s.default)(m)){if(!m.startsWith("[")||!m.endsWith("]"))return!1;var x=m.substr(1,m.length-2);if(0===x.length||!(0,s.default)(x))return!1}}if('"'===g[0])return g=g.slice(1,g.length-1),t.allow_utf8_local_part?p.test(g):f.test(g);for(var C=t.allow_utf8_local_part?h:c,D=g.split("."),S=0;S<D.length;S++)if(!C.test(D[S]))return!1;return!0};var r=o(Gr),n=o(on),i=o(un),a=o(ln),s=o(dn);function o(e){return e&&e.__esModule?e:{default:e}}var u={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},l=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,c=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,d=/^[a-z\d]+$/,f=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,h=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,p=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;e.exports=t.default,e.exports.default=t.default})));var pn={validate:function(e,t){void 0===t&&(t={});var r=t.multiple;void 0===r&&(r=!1);var n=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(t,["multiple"]);r&&!Array.isArray(e)&&(e=String(e).split(",").map((function(e){return e.trim()})));var i=x({},n);return Array.isArray(e)?e.every((function(e){return hn(String(e),i)})):hn(String(e),i)}},vn=function(e,t){return Array.isArray(e)?e.every((function(e){return vn(e,t)})):_(t).some((function(t){return t==e}))},mn={validate:vn},gn={validate:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return!vn.apply(void 0,e)}},bn={validate:function(e,t){var r=new RegExp(".("+t.join("|")+")$","i");return w(e).every((function(e){return r.test(e.name)}))}},yn={validate:function(e){return(Array.isArray(e)?e:[e]).every((function(e){return/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(e.name)}))}},_n={validate:function(e){return Array.isArray(e)?e.every((function(e){return/^-?[0-9]+$/.test(String(e))})):/^-?[0-9]+$/.test(String(e))}},wn={validate:function(e,t){void 0===t&&(t={});var r=t.version;return void 0===r&&(r=4),o(e)&&(e=""),Array.isArray(e)?e.every((function(e){return fn(e,r)})):fn(e,r)},paramNames:["version"]},xn={validate:function(e){return o(e)&&(e=""),Array.isArray(e)?e.every((function(e){return fn(e,"")||cn(e)})):fn(e,"")||cn(e)}},Cn={validate:function(e,t){return void 0===t&&(t=[]),e===t[0]}},Dn={validate:function(e,t){return void 0===t&&(t=[]),e!==t[0]}},Sn={validate:function(e,t){var r=t[0],n=t[1];return void 0===n&&(n=void 0),!o(e)&&(r=Number(r),"number"==typeof e&&(e=String(e)),e.length||(e=_(e)),function(e,t,r){return void 0===r?e.length===t:(r=Number(r),e.length>=t&&e.length<=r)}(e,r,n))}},En=function(e,t){var r=t[0];return o(e)?r>=0:Array.isArray(e)?e.every((function(e){return En(e,[r])})):String(e).length<=r},kn={validate:En},Tn=function(e,t){var r=t[0];return!o(e)&&""!==e&&(Array.isArray(e)?e.length>0&&e.every((function(e){return Tn(e,[r])})):Number(e)<=r)},$n={validate:Tn},On={validate:function(e,t){var r=new RegExp(t.join("|").replace("*",".+")+"$","i");return w(e).every((function(e){return r.test(e.type)}))}},In=function(e,t){var r=t[0];return!o(e)&&(Array.isArray(e)?e.every((function(e){return In(e,[r])})):String(e).length>=r)},Nn={validate:In},An=function(e,t){var r=t[0];return!o(e)&&""!==e&&(Array.isArray(e)?e.length>0&&e.every((function(e){return An(e,[r])})):Number(e)>=r)},Pn={validate:An},Mn=/^[٠١٢٣٤٥٦٧٨٩]+$/,Fn=/^[0-9]+$/,jn={validate:function(e){var t=function(e){var t=String(e);return Fn.test(t)||Mn.test(t)};return Array.isArray(e)?e.every(t):t(e)}},Ln=function(e,t){var r=t.expression;return"string"==typeof r&&(r=new RegExp(r)),Array.isArray(e)?e.every((function(e){return Ln(e,{expression:r})})):r.test(String(e))},qn={validate:Ln,paramNames:["expression"]},Rn={validate:function(e,t){void 0===t&&(t=[]);var r=t[0];return void 0===r&&(r=!1),!o(e)&&!A(e)&&((!1!==e||!r)&&!!String(e).trim().length)}},Vn={validate:function(e,t){void 0===t&&(t=[]);var r=t[0],n=t.slice(1).includes(String(r).trim());if(!n)return{valid:!0,data:{required:n}};var i=A(e)||[!1,null,void 0].includes(e);return{valid:!(i=i||!String(e).trim().length),data:{required:n}}},options:{hasTarget:!0,computesRequired:!0}},Un={validate:function(e,t){var r=t[0];if(isNaN(r))return!1;var n=1024*Number(r);return w(e).every((function(e){return e.size<=n}))}},Bn=Yr(Zr((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if((0,r.default)(e),!e||e.length>=2083||/[\s<>]/.test(e))return!1;if(0===e.indexOf("mailto:"))return!1;var s,l,d,f,h,p,v,m;if(t=(0,a.default)(t,o),v=e.split("#"),e=v.shift(),v=e.split("?"),e=v.shift(),(v=e.split("://")).length>1){if(s=v.shift().toLowerCase(),t.require_valid_protocol&&-1===t.protocols.indexOf(s))return!1}else{if(t.require_protocol)return!1;if("//"===e.substr(0,2)){if(!t.allow_protocol_relative_urls)return!1;v[0]=e.substr(2)}}if(""===(e=v.join("://")))return!1;if(v=e.split("/"),""===(e=v.shift())&&!t.require_host)return!0;if((v=e.split("@")).length>1){if(t.disallow_auth)return!1;if((l=v.shift()).indexOf(":")>=0&&l.split(":").length>2)return!1}f=v.join("@"),p=null,m=null;var g=f.match(u);g?(d="",m=g[1],p=g[2]||null):(v=f.split(":"),d=v.shift(),v.length&&(p=v.join(":")));if(null!==p&&(h=parseInt(p,10),!/^[0-9]+$/.test(p)||h<=0||h>65535))return!1;if(!((0,i.default)(d)||(0,n.default)(d,t)||m&&(0,i.default)(m,6)))return!1;if(d=d||m,t.host_whitelist&&!c(d,t.host_whitelist))return!1;if(t.host_blacklist&&c(d,t.host_blacklist))return!1;return!0};var r=s(Gr),n=s(ln),i=s(dn),a=s(on);function s(e){return e&&e.__esModule?e:{default:e}}var o={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1},u=/^\[([^\]]+)\](?::([0-9]+))?$/;function l(e){return"[object RegExp]"===Object.prototype.toString.call(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];if(e===n||l(n)&&n.test(e))return!0}return!1}e.exports=t.default,e.exports.default=t.default}))),zn={validate:function(e,t){void 0===t&&(t={}),o(e)&&(e="");var r=x({},t);return Array.isArray(e)?e.every((function(e){return Bn(e,r)})):Bn(e,r)}},Hn=Object.freeze({after:Or,alpha_dash:Lr,alpha_num:Rr,alpha_spaces:Ur,alpha:Fr,before:Br,between:Hr,confirmed:Wr,credit_card:Qr,date_between:Kr,date_format:Jr,decimal:tn,digits:nn,dimensions:sn,email:pn,ext:bn,image:yn,included:mn,integer:_n,length:Sn,ip:wn,ip_or_fqdn:xn,is_not:Dn,is:Cn,max:kn,max_value:$n,mimes:On,min:Nn,min_value:Pn,excluded:gn,numeric:jn,regex:qn,required:Rn,required_if:Vn,size:Un,url:zn}),Wn=function(e,t){var r={pristine:function(e,t){return e&&t},dirty:function(e,t){return e||t},touched:function(e,t){return e||t},untouched:function(e,t){return e&&t},valid:function(e,t){return e&&t},invalid:function(e,t){return e||t},pending:function(e,t){return e||t},required:function(e,t){return e||t},validated:function(e,t){return e&&t}};return Object.keys(r).reduce((function(n,i){return n[i]=r[i](e[i],t[i]),n}),{})},Yn=function(e,t){return void 0===t&&(t=!0),Object.keys(e).reduce((function(r,n){if(!r)return r=x({},e[n]);var i=0===n.indexOf("$");return t&&i?Wn(Yn(e[n]),r):!t&&i?r:r=Wn(r,e[n])}),null)},Zn=null,Gn=0,Xn={$__veeInject:!1,inject:{$_veeObserver:{from:"$_veeObserver",default:function(){return this.$vnode.context.$_veeObserver||(this.$vnode.context.$_veeObserver={refs:{},subscribe:function(e){this.refs[e.vid]=e},unsubscribe:function(e){delete this.refs[e.vid]}}),this.$vnode.context.$_veeObserver}}},props:{vid:{type:[String,Number],default:function(){return"_vee_"+ ++Gn}},name:{type:String,default:null},mode:{type:[String,Function],default:function(){return z().mode}},events:{type:Array,validate:function(){return!0},default:function(){var e=z().events;return"string"==typeof e?e.split("|"):e}},rules:{type:[Object,String],default:null},immediate:{type:Boolean,default:!1},persist:{type:Boolean,default:!1},bails:{type:Boolean,default:function(){return z().fastExit}},debounce:{type:Number,default:function(){return z().delay||0}},tag:{type:String,default:"span"},slim:{type:Boolean,default:!1}},watch:{rules:{deep:!0,handler:function(e,t){this._needsValidation=!u(e,t)}}},data:function(){return{messages:[],value:void 0,initialized:!1,initialValue:void 0,flags:{untouched:!0,touched:!1,dirty:!1,pristine:!0,valid:null,invalid:null,validated:!1,pending:!1,required:!1,changed:!1},failedRules:{},forceRequired:!1,isDeactivated:!1,id:null}},computed:{isValid:function(){return this.flags.valid},fieldDeps:function(){var e=this,t=h(this.rules);return Object.keys(t).filter(te.isTargetRule).map((function(r){var n=t[r][0];return function e(t,r,n){void 0===n&&(n=!0);var i=t.$_veeObserver.refs;t._veeWatchers||(t._veeWatchers={});if(!i[r]&&n)return t.$once("hook:mounted",(function(){e(t,r,!1)}));!g(t._veeWatchers[r])&&i[r]&&(t._veeWatchers[r]=i[r].$watch("value",(function(){t.flags.validated&&(t._needsValidation=!0,t.validate())})))}(e,n),n}))},normalizedEvents:function(){var e=this,t=Kn(this).on;return ie(t||this.events||[]).map((function(t){return"input"===t?e._inputEventName:t}))},isRequired:function(){var e=h(this.rules),t=this.forceRequired,r=e.required||t;return this.flags.required=r,r},classes:function(){var e=this,t=z().classNames;return Object.keys(this.flags).reduce((function(r,n){var i=t&&t[n]||n;return o(e.flags[n])||i&&(r[i]=e.flags[n]),r}),{})}},render:function(e){var t=this;this.registerField();var r=Qn(this),n=this.$scopedSlots.default;if(!g(n))return e(this.tag,this.$slots.default);var i=n(r);return Y(i).forEach((function(e){ti.call(t,e)})),this.slim?K(e,i):e(this.tag,i)},beforeDestroy:function(){this.$_veeObserver.unsubscribe(this)},activated:function(){this.$_veeObserver.subscribe(this),this.isDeactivated=!1},deactivated:function(){this.$_veeObserver.unsubscribe(this),this.isDeactivated=!0},methods:{setFlags:function(e){var t=this;Object.keys(e).forEach((function(r){t.flags[r]=e[r]}))},syncValue:function(e){var t=function(e){if(ne(e))return"file"===e.target.type?_(e.target.files):e.target.value;return e}(e);this.value=t,this.flags.changed=this.initialValue!==t},reset:function(){this.messages=[],this._pendingValidation=null,this.initialValue=this.value;var e={untouched:!0,touched:!1,dirty:!1,pristine:!0,valid:null,invalid:null,validated:!1,pending:!1,required:!1,changed:!1};this.setFlags(e)},validate:function(){for(var e=this,t=[],r=arguments.length;r--;)t[r]=arguments[r];return t.length>0&&this.syncValue(t[0]),this.validateSilent().then((function(t){return e.applyResult(t),t}))},validateSilent:function(){var e,t,r=this;return this.setFlags({pending:!0}),Zn.verify(this.value,this.rules,{name:this.name,values:(e=this,t=e.$_veeObserver.refs,e.fieldDeps.reduce((function(e,r){return t[r]?(e[r]=t[r].value,e):e}),{})),bails:this.bails}).then((function(e){return r.setFlags({pending:!1}),r.isRequired||r.setFlags({valid:e.valid,invalid:!e.valid}),e}))},applyResult:function(e){var t=e.errors,r=e.failedRules;this.messages=t,this.failedRules=x({},r),this.setFlags({valid:!t.length,changed:this.value!==this.initialValue,invalid:!!t.length,validated:!0})},registerField:function(){Zn||(Zn=ve()||new ye(null,{fastExit:z().fastExit})),function(e){o(e.id)&&e.id===e.vid&&(e.id=Gn,Gn++);var t=e.id,r=e.vid;if(e.isDeactivated||t===r&&e.$_veeObserver.refs[t])return;t!==r&&e.$_veeObserver.refs[t]===e&&e.$_veeObserver.unsubscribe({vid:t});e.$_veeObserver.subscribe(e),e.id=r}(this)}}};function Qn(e){return{errors:e.messages,flags:e.flags,classes:e.classes,valid:e.isValid,failedRules:e.failedRules,reset:function(){return e.reset()},validate:function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e.validate.apply(e,t)},aria:{"aria-invalid":e.flags.invalid?"true":"false","aria-required":e.isRequired?"true":"false"}}}function Kn(e){return(g(e.mode)?e.mode:Te[e.mode])({errors:e.messages,value:e.value,flags:e.flags})}function Jn(e){this.initialized||(this.initialValue=e.value);var t=function(e,t){return!(e._ignoreImmediate||!e.immediate)||(e.value!==t.value||(!!e._needsValidation||!e.initialized&&void 0===t.value))}(this,e);this._needsValidation=!1,this.value=e.value,this._ignoreImmediate=!0,t&&this.validateSilent().then(this.immediate||this.flags.validated?this.applyResult:function(e){return e})}function ei(e){var t=e.$veeHandler,r=Kn(e);return t&&e.$veeDebounce===e.debounce||(t=d((function(){e.$nextTick((function(){var t=e.validateSilent();e._pendingValidation=t,t.then((function(r){t===e._pendingValidation&&(e.applyResult(r),e._pendingValidation=null)}))}))}),r.debounce||e.debounce),e.$veeHandler=t,e.$veeDebounce=e.debounce),{onInput:function(t){e.syncValue(t),e.setFlags({dirty:!0,pristine:!1})},onBlur:function(){e.setFlags({touched:!0,untouched:!1})},onValidate:t}}function ti(e){var t=W(e);this._inputEventName=this._inputEventName||Q(e,t),Jn.call(this,t);var r=ei(this),n=r.onInput,i=r.onBlur,a=r.onValidate;X(e,this._inputEventName,n),X(e,"blur",i),this.normalizedEvents.forEach((function(t){X(e,t,a)})),this.initialized=!0}var ri={pristine:"every",dirty:"some",touched:"some",untouched:"every",valid:"every",invalid:"some",pending:"some",validated:"every"};var ni=0,ii={name:"ValidationObserver",provide:function(){return{$_veeObserver:this}},inject:{$_veeObserver:{from:"$_veeObserver",default:function(){return this.$vnode.context.$_veeObserver?this.$vnode.context.$_veeObserver:null}}},props:{tag:{type:String,default:"span"},slim:{type:Boolean,default:!1}},data:function(){return{vid:"obs_"+ni++,refs:{},observers:[],persistedStore:{}}},computed:{ctx:function(){var e=this,t={errors:{},validate:function(t){var r=e.validate(t);return{then:function(e){return r.then((function(t){return t&&g(e)?Promise.resolve(e()):Promise.resolve(t)}))}}},reset:function(){return e.reset()}};return I(this.refs).concat(Object.keys(this.persistedStore).map((function(t){return{vid:t,flags:e.persistedStore[t].flags,messages:e.persistedStore[t].errors}})),this.observers).reduce((function(e,t){return Object.keys(ri).forEach((function(r){var n,i,a=t.flags||t.ctx;r in e?e[r]=(n=e[r],i=a[r],[n,i][ri[r]]((function(e){return e}))):e[r]=a[r]})),e.errors[t.vid]=t.messages||I(t.ctx.errors).reduce((function(e,t){return e.concat(t)}),[]),e}),t)}},created:function(){this.$_veeObserver&&this.$_veeObserver.subscribe(this,"observer")},activated:function(){this.$_veeObserver&&this.$_veeObserver.subscribe(this,"observer")},deactivated:function(){this.$_veeObserver&&this.$_veeObserver.unsubscribe(this,"observer")},beforeDestroy:function(){this.$_veeObserver&&this.$_veeObserver.unsubscribe(this,"observer")},render:function(e){var t=this.$slots.default||this.$scopedSlots.default||[];return g(t)&&(t=t(this.ctx)),this.slim?K(e,t):e(this.tag,{on:this.$listeners,attrs:this.$attrs},t)},methods:{subscribe:function(e,t){var r;void 0===t&&(t="provider"),"observer"!==t?(this.refs=Object.assign({},this.refs,((r={})[e.vid]=e,r)),e.persist&&this.persistedStore[e.vid]&&this.restoreProviderState(e)):this.observers.push(e)},unsubscribe:function(e,t){var r=e.vid;void 0===t&&(t="provider"),"provider"===t&&this.removeProvider(r);var n=S(this.observers,(function(e){return e.vid===r}));-1!==n&&this.observers.splice(n,1)},validate:function(e){void 0===e&&(e={silent:!1});var t=e.silent;return Promise.all(I(this.refs).map((function(e){return e[t?"validateSilent":"validate"]().then((function(e){return e.valid}))})).concat(this.observers.map((function(e){return e.validate({silent:t})})))).then((function(e){return e.every((function(e){return e}))}))},reset:function(){var e=this;return Object.keys(this.persistedStore).forEach((function(t){e.$delete(e.persistedStore,t)})),I(this.refs).concat(this.observers).forEach((function(e){return e.reset()}))},restoreProviderState:function(e){var t=this.persistedStore[e.vid];e.setFlags(t.flags),e.applyResult(t),this.$delete(this.persistedStore,e.vid)},removeProvider:function(e){var t,r=this.refs[e];r&&r.persist&&(this.persistedStore=x({},this.persistedStore,((t={})[e]={flags:r.flags,errors:r.messages,failedRules:r.failedRules},t))),this.$delete(this.refs,e)}}};Object.keys(Hn).forEach((function(e){ye.extend(e,Hn[e].validate,x({},Hn[e].options,{paramNames:Hn[e].paramNames}))})),ye.localize({en:Ae});$e.version="2.2.15",$e.mapFields=function(e){if(!e)return function(){return Yn(this.$validator.flags)};var t=function(e){return Array.isArray(e)?e.reduce((function(e,t){return N(t,".")?e[t.split(".")[1]]=t:e[t]=t,e}),{}):e}(e);return Object.keys(t).reduce((function(e,r){var n=t[r];return e[r]=function(){if(this.$validator.flags[n])return this.$validator.flags[n];if("*"===t[r])return Yn(this.$validator.flags,!1);if(n.indexOf(".")<=0)return{};var e=n.split("."),i=e[0],a=e.slice(1);return i=this.$validator.flags["$"+i],"*"===(a=a.join("."))&&i?Yn(i):i&&i[a]?i[a]:{}},e}),{})},$e.ValidationProvider=Xn,$e.ValidationObserver=ii,$e.withValidation=function(e,t){void 0===t&&(t=null);var r=g(e)?e.options:e;r.$__veeInject=!1;var n={name:(r.name||"AnonymousHoc")+"WithValidation",props:x({},Xn.props),data:Xn.data,computed:x({},Xn.computed),methods:x({},Xn.methods),$__veeInject:!1,beforeDestroy:Xn.beforeDestroy,inject:Xn.inject};t||(t=function(e){return e});var i=r.model&&r.model.event||"input";return n.render=function(e){var n;this.registerField();var a=Qn(this),s=x({},this.$listeners),o=W(this.$vnode);this._inputEventName=this._inputEventName||Q(this.$vnode,o),Jn.call(this,o);var u=ei(this),l=u.onInput,c=u.onBlur,d=u.onValidate;G(s,i,l),G(s,"blur",c),this.normalizedEvents.forEach((function(e,t){G(s,e,d)}));var f,h,p=(Z(this.$vnode)||{prop:"value"}).prop,v=x({},this.$attrs,((n={})[p]=o.value,n),t(a));return e(r,{attrs:this.$attrs,props:v,on:s},(f=this.$slots,h=this.$vnode.context,Object.keys(f).reduce((function(e,t){return f[t].forEach((function(e){e.context||(f[t].context=h,e.data||(e.data={}),e.data.slot=t)})),e.concat(f[t])}),[])))},n},t.a=$e},eIzz:function(e,t,r){"use strict";var n=r("MwJ6");r.n(n).a},hcby:function(e,t,r){(e.exports=r("I1BE")(!1)).push([e.i,"\n.picture-input[data-v-5080a0f2] {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n}\n.preview-container[data-v-5080a0f2] {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 auto;\n  cursor: pointer;\n  overflow: hidden;\n}\n.picture-preview[data-v-5080a0f2] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 10001;\n  box-sizing: border-box;\n  background-color: rgba(200,200,200,.25);\n}\n.picture-preview.dragging-over[data-v-5080a0f2] {\n  -webkit-filter: brightness(0.5);\n          filter: brightness(0.5);\n}\n.picture-inner[data-v-5080a0f2] {\n  position: relative;\n  z-index: 10002;\n  pointer-events: none;\n  box-sizing: border-box;\n  margin: 1em auto;\n  padding: 0.5em;\n  border: .3em dashed rgba(66,66,66,.15);\n  border-radius: 8px;\n  width: calc(100% - 2.5em);\n  height: calc(100% - 2.5em);\n  display: table;\n}\n.picture-inner .picture-inner-text[data-v-5080a0f2] {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 2em;\n  line-height: 1.5;\n}\nbutton[data-v-5080a0f2] {\n  margin: 1em .25em;\n  cursor: pointer;\n}\ninput[type=file][data-v-5080a0f2] {\n  display: none;\n}\n",""])},"jl8+":function(e,t,r){e.exports=function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=60)}([function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t,r){var n=r(49)("wks"),i=r(30),a=r(0).Symbol,s="function"==typeof a;(e.exports=function(e){return n[e]||(n[e]=s&&a[e]||(s?a:i)("Symbol."+e))}).store=n},function(e,t,r){var n=r(5);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t,r){var n=r(0),i=r(10),a=r(8),s=r(6),o=r(11),u=function(e,t,r){var l,c,d,f,h=e&u.F,p=e&u.G,v=e&u.S,m=e&u.P,g=e&u.B,b=p?n:v?n[t]||(n[t]={}):(n[t]||{}).prototype,y=p?i:i[t]||(i[t]={}),_=y.prototype||(y.prototype={});for(l in p&&(r=t),r)d=((c=!h&&b&&void 0!==b[l])?b:r)[l],f=g&&c?o(d,n):m&&"function"==typeof d?o(Function.call,d):d,b&&s(b,l,d,e&u.U),y[l]!=d&&a(y,l,f),m&&_[l]!=d&&(_[l]=d)};n.core=i,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},function(e,t,r){e.exports=!r(7)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,r){var n=r(0),i=r(8),a=r(12),s=r(30)("src"),o=Function.toString,u=(""+o).split("toString");r(10).inspectSource=function(e){return o.call(e)},(e.exports=function(e,t,r,o){var l="function"==typeof r;l&&(a(r,"name")||i(r,"name",t)),e[t]!==r&&(l&&(a(r,s)||i(r,s,e[t]?""+e[t]:u.join(String(t)))),e===n?e[t]=r:o?e[t]?e[t]=r:i(e,t,r):(delete e[t],i(e,t,r)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[s]||o.call(this)}))},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,r){var n=r(13),i=r(25);e.exports=r(4)?function(e,t,r){return n.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t){var r=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},function(e,t,r){var n=r(14);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t,r){var n=r(2),i=r(41),a=r(29),s=Object.defineProperty;t.f=r(4)?Object.defineProperty:function(e,t,r){if(n(e),t=a(t,!0),n(r),i)try{return s(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t){e.exports={}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,r){"use strict";var n=r(7);e.exports=function(e,t){return!!e&&n((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},function(e,t,r){var n=r(23),i=r(16);e.exports=function(e){return n(i(e))}},function(e,t,r){var n=r(53),i=Math.min;e.exports=function(e){return e>0?i(n(e),9007199254740991):0}},function(e,t,r){var n=r(11),i=r(23),a=r(28),s=r(19),o=r(64);e.exports=function(e,t){var r=1==e,u=2==e,l=3==e,c=4==e,d=6==e,f=5==e||d,h=t||o;return function(t,o,p){for(var v,m,g=a(t),b=i(g),y=n(o,p,3),_=s(b.length),w=0,x=r?h(t,_):u?h(t,0):void 0;_>w;w++)if((f||w in b)&&(m=y(v=b[w],w,g),e))if(r)x[w]=m;else if(m)switch(e){case 3:return!0;case 5:return v;case 6:return w;case 2:x.push(v)}else if(c)return!1;return d?-1:l||c?c:x}}},function(e,t,r){var n=r(5),i=r(0).document,a=n(i)&&n(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,r){var n=r(9);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t){e.exports=!1},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var n=r(13).f,i=r(12),a=r(1)("toStringTag");e.exports=function(e,t,r){e&&!i(e=r?e:e.prototype,a)&&n(e,a,{configurable:!0,value:t})}},function(e,t,r){var n=r(49)("keys"),i=r(30);e.exports=function(e){return n[e]||(n[e]=i(e))}},function(e,t,r){var n=r(16);e.exports=function(e){return Object(n(e))}},function(e,t,r){var n=r(5);e.exports=function(e,t){if(!n(e))return e;var r,i;if(t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;if("function"==typeof(r=e.valueOf)&&!n(i=r.call(e)))return i;if(!t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},function(e,t,r){"use strict";var n=r(0),i=r(12),a=r(9),s=r(67),o=r(29),u=r(7),l=r(77).f,c=r(45).f,d=r(13).f,f=r(51).trim,h=n.Number,p=h,v=h.prototype,m="Number"==a(r(44)(v)),g="trim"in String.prototype,b=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){var r,n,i,a=(t=g?t.trim():f(t,3)).charCodeAt(0);if(43===a||45===a){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+t}for(var s,u=t.slice(2),l=0,c=u.length;l<c;l++)if((s=u.charCodeAt(l))<48||s>i)return NaN;return parseInt(u,n)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof h&&(m?u((function(){v.valueOf.call(r)})):"Number"!=a(r))?s(new p(b(t)),r,h):b(t)};for(var y,_=r(4)?l(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;_.length>w;w++)i(p,y=_[w])&&!i(h,y)&&d(h,y,c(p,y));h.prototype=v,v.constructor=h,r(6)(n,"Number",h)}},function(e,t,r){"use strict";function n(e){return!(0===e||(!Array.isArray(e)||0!==e.length)&&e)}function i(e,t,r,n){return e.filter((function(e){return function(e,t){return void 0===e&&(e="undefined"),null===e&&(e="null"),!1===e&&(e="false"),-1!==e.toString().toLowerCase().indexOf(t.trim())}(n(e,r),t)}))}function a(e){return e.filter((function(e){return!e.$isLabel}))}function s(e,t){return function(r){return r.reduce((function(r,n){return n[e]&&n[e].length?(r.push({$groupLabel:n[t],$isLabel:!0}),r.concat(n[e])):r}),[])}}function o(e,t,n,a,s){return function(o){return o.map((function(o){var u;if(!o[n])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var l=i(o[n],e,t,s);return l.length?(u={},r.i(f.a)(u,a,o[a]),r.i(f.a)(u,n,l),u):[]}))}}var u=r(59),l=r(54),c=(r.n(l),r(95)),d=(r.n(c),r(31)),f=(r.n(d),r(58)),h=r(91),p=(r.n(h),r(98)),v=(r.n(p),r(92)),m=(r.n(v),r(88)),g=(r.n(m),r(97)),b=(r.n(g),r(89)),y=(r.n(b),r(96)),_=(r.n(y),r(93)),w=(r.n(_),r(90)),x=(r.n(w),function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduce((function(e,t){return t(e)}),e)}});t.a={data:function(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(e,t){return n(e)?"":t?e[t]:e}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1}},mounted:function(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue:function(){return this.value||0===this.value?Array.isArray(this.value)?this.value:[this.value]:[]},filteredOptions:function(){var e=this.search||"",t=e.toLowerCase().trim(),r=this.options.concat();return r=this.internalSearch?this.groupValues?this.filterAndFlat(r,t,this.label):i(r,t,this.label,this.customLabel):this.groupValues?s(this.groupValues,this.groupLabel)(r):r,r=this.hideSelected?r.filter(function(e){return function(){return!e.apply(void 0,arguments)}}(this.isSelected)):r,this.taggable&&t.length&&!this.isExistingOption(t)&&("bottom"===this.tagPosition?r.push({isTag:!0,label:e}):r.unshift({isTag:!0,label:e})),r.slice(0,this.optionsLimit)},valueKeys:function(){var e=this;return this.trackBy?this.internalValue.map((function(t){return t[e.trackBy]})):this.internalValue},optionKeys:function(){var e=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map((function(t){return e.customLabel(t,e.label).toString().toLowerCase()}))},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("input",this.multiple?[]:null))},search:function(){this.$emit("search-change",this.search,this.id)}},methods:{getValue:function(){return this.multiple?this.internalValue:0===this.internalValue.length?null:this.internalValue[0]},filterAndFlat:function(e,t,r){return x(o(t,r,this.groupValues,this.groupLabel,this.customLabel),s(this.groupValues,this.groupLabel))(e)},flatAndStrip:function(e){return x(s(this.groupValues,this.groupLabel),a)(e)},updateSearch:function(e){this.search=e},isExistingOption:function(e){return!!this.options&&this.optionKeys.indexOf(e)>-1},isSelected:function(e){var t=this.trackBy?e[this.trackBy]:e;return this.valueKeys.indexOf(t)>-1},isOptionDisabled:function(e){return!!e.$isDisabled},getOptionLabel:function(e){if(n(e))return"";if(e.isTag)return e.label;if(e.$isLabel)return e.$groupLabel;var t=this.customLabel(e,this.label);return n(t)?"":t},select:function(e,t){if(e.$isLabel&&this.groupSelect)this.selectGroup(e);else if(!(-1!==this.blockKeys.indexOf(t)||this.disabled||e.$isDisabled||e.$isLabel)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==t||this.pointerDirty)){if(e.isTag)this.$emit("tag",e.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(e))return void("Tab"!==t&&this.removeElement(e));this.$emit("select",e,this.id),this.multiple?this.$emit("input",this.internalValue.concat([e]),this.id):this.$emit("input",e,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup:function(e){var t=this,r=this.options.find((function(r){return r[t.groupLabel]===e.$groupLabel}));if(r)if(this.wholeGroupSelected(r)){this.$emit("remove",r[this.groupValues],this.id);var n=this.internalValue.filter((function(e){return-1===r[t.groupValues].indexOf(e)}));this.$emit("input",n,this.id)}else{var i=r[this.groupValues].filter((function(e){return!(t.isOptionDisabled(e)||t.isSelected(e))}));this.$emit("select",i,this.id),this.$emit("input",this.internalValue.concat(i),this.id)}},wholeGroupSelected:function(e){var t=this;return e[this.groupValues].every((function(e){return t.isSelected(e)||t.isOptionDisabled(e)}))},wholeGroupDisabled:function(e){return e[this.groupValues].every(this.isOptionDisabled)},removeElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled&&!e.$isDisabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var n="object"===r.i(u.a)(e)?this.valueKeys.indexOf(e[this.trackBy]):this.valueKeys.indexOf(e);if(this.$emit("remove",e,this.id),this.multiple){var i=this.internalValue.slice(0,n).concat(this.internalValue.slice(n+1));this.$emit("input",i,this.id)}else this.$emit("input",null,this.id);this.closeOnSelect&&t&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var e=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick((function(){return e.$refs.search.focus()}))):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var e=this.$el.getBoundingClientRect().top,t=window.innerHeight-this.$el.getBoundingClientRect().bottom;t>this.maxHeight||t>e||"below"===this.openDirection||"bottom"===this.openDirection?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(t-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(e-40,this.maxHeight))}}}}},function(e,t,r){"use strict";var n=r(54),i=(r.n(n),r(31));r.n(i),t.a={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(e,t){return{"multiselect__option--highlight":e===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(t)}},groupHighlight:function(e,t){var r=this;if(!this.groupSelect)return["multiselect__option--group","multiselect__option--disabled"];var n=this.options.find((function(e){return e[r.groupLabel]===t.$groupLabel}));return n&&!this.wholeGroupDisabled(n)?["multiselect__option--group",{"multiselect__option--highlight":e===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(n)}]:"multiselect__option--disabled"},addPointerElement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",t=e.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],t),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet:function(e){this.pointer=e,this.pointerDirty=!0}}}},function(e,t,r){"use strict";var n=r(36),i=r(74),a=r(15),s=r(18);e.exports=r(72)(Array,"Array",(function(e,t){this._t=s(e),this._i=0,this._k=t}),(function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,i(1)):i(0,"keys"==t?r:"values"==t?e[r]:[r,e[r]])}),"values"),a.Arguments=a.Array,n("keys"),n("values"),n("entries")},function(e,t,r){"use strict";var n=r(31),i=(r.n(n),r(32)),a=r(33);t.a={name:"vue-multiselect",mixins:[i.a,a.a],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(e){return"and ".concat(e," more")}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{isSingleLabelVisible:function(){return(this.singleValue||0===this.singleValue)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible:function(){return!(this.internalValue.length||this.searchable&&this.isOpen)},visibleValues:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue:function(){return this.internalValue[0]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText:function(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectGroupLabelText:function(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.searchable||this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.preferredOpenDirection},showSearchInput:function(){return this.searchable&&(!this.hasSingleSelectedSlot||!this.visibleSingleValue&&0!==this.visibleSingleValue||this.isOpen)}}}},function(e,t,r){var n=r(1)("unscopables"),i=Array.prototype;null==i[n]&&r(8)(i,n,{}),e.exports=function(e){i[n][e]=!0}},function(e,t,r){var n=r(18),i=r(19),a=r(85);e.exports=function(e){return function(t,r,s){var o,u=n(t),l=i(u.length),c=a(s,l);if(e&&r!=r){for(;l>c;)if((o=u[c++])!=o)return!0}else for(;l>c;c++)if((e||c in u)&&u[c]===r)return e||c||0;return!e&&-1}}},function(e,t,r){var n=r(9),i=r(1)("toStringTag"),a="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,r,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),i))?r:a?n(t):"Object"==(s=n(t))&&"function"==typeof t.callee?"Arguments":s}},function(e,t,r){"use strict";var n=r(2);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},function(e,t,r){var n=r(0).document;e.exports=n&&n.documentElement},function(e,t,r){e.exports=!r(4)&&!r(7)((function(){return 7!=Object.defineProperty(r(21)("div"),"a",{get:function(){return 7}}).a}))},function(e,t,r){var n=r(9);e.exports=Array.isArray||function(e){return"Array"==n(e)}},function(e,t,r){"use strict";function n(e){var t,r;this.promise=new e((function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n})),this.resolve=i(t),this.reject=i(r)}var i=r(14);e.exports.f=function(e){return new n(e)}},function(e,t,r){var n=r(2),i=r(76),a=r(22),s=r(27)("IE_PROTO"),o=function(){},u=function(){var e,t=r(21)("iframe"),n=a.length;for(t.style.display="none",r(40).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;n--;)delete u.prototype[a[n]];return u()};e.exports=Object.create||function(e,t){var r;return null!==e?(o.prototype=n(e),r=new o,o.prototype=null,r[s]=e):r=u(),void 0===t?r:i(r,t)}},function(e,t,r){var n=r(79),i=r(25),a=r(18),s=r(29),o=r(12),u=r(41),l=Object.getOwnPropertyDescriptor;t.f=r(4)?l:function(e,t){if(e=a(e),t=s(t,!0),u)try{return l(e,t)}catch(e){}if(o(e,t))return i(!n.f.call(e,t),e[t])}},function(e,t,r){var n=r(12),i=r(18),a=r(37)(!1),s=r(27)("IE_PROTO");e.exports=function(e,t){var r,o=i(e),u=0,l=[];for(r in o)r!=s&&n(o,r)&&l.push(r);for(;t.length>u;)n(o,r=t[u++])&&(~a(l,r)||l.push(r));return l}},function(e,t,r){var n=r(46),i=r(22);e.exports=Object.keys||function(e){return n(e,i)}},function(e,t,r){var n=r(2),i=r(5),a=r(43);e.exports=function(e,t){if(n(e),i(t)&&t.constructor===e)return t;var r=a.f(e);return(0,r.resolve)(t),r.promise}},function(e,t,r){var n=r(10),i=r(0),a=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:r(24)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,t,r){var n=r(2),i=r(14),a=r(1)("species");e.exports=function(e,t){var r,s=n(e).constructor;return void 0===s||null==(r=n(s)[a])?t:i(r)}},function(e,t,r){var n=r(3),i=r(16),a=r(7),s=r(84),o="["+s+"]",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),c=function(e,t,r){var i={},o=a((function(){return!!s[e]()||"​"!="​"[e]()})),u=i[e]=o?t(d):s[e];r&&(i[r]=u),n(n.P+n.F*o,"String",i)},d=c.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(l,"")),e};e.exports=c},function(e,t,r){var n,i,a,s=r(11),o=r(68),u=r(40),l=r(21),c=r(0),d=c.process,f=c.setImmediate,h=c.clearImmediate,p=c.MessageChannel,v=c.Dispatch,m=0,g={},b=function(){var e=+this;if(g.hasOwnProperty(e)){var t=g[e];delete g[e],t()}},y=function(e){b.call(e.data)};f&&h||(f=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return g[++m]=function(){o("function"==typeof e?e:Function(e),t)},n(m),m},h=function(e){delete g[e]},"process"==r(9)(d)?n=function(e){d.nextTick(s(b,e,1))}:v&&v.now?n=function(e){v.now(s(b,e,1))}:p?(a=(i=new p).port2,i.port1.onmessage=y,n=s(a.postMessage,a,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts?(n=function(e){c.postMessage(e+"","*")},c.addEventListener("message",y,!1)):n="onreadystatechange"in l("script")?function(e){u.appendChild(l("script")).onreadystatechange=function(){u.removeChild(this),b.call(e)}}:function(e){setTimeout(s(b,e,1),0)}),e.exports={set:f,clear:h}},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t,r){"use strict";var n=r(3),i=r(20)(5),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),n(n.P+n.F*a,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r(36)("find")},function(e,t,r){"use strict";var n,i,a,s,o=r(24),u=r(0),l=r(11),c=r(38),d=r(3),f=r(5),h=r(14),p=r(61),v=r(66),m=r(50),g=r(52).set,b=r(75)(),y=r(43),_=r(80),w=r(86),x=r(48),C=u.TypeError,D=u.process,S=D&&D.versions,E=S&&S.v8||"",k=u.Promise,T="process"==c(D),$=function(){},O=i=y.f,I=!!function(){try{var e=k.resolve(1),t=(e.constructor={})[r(1)("species")]=function(e){e($,$)};return(T||"function"==typeof PromiseRejectionEvent)&&e.then($)instanceof t&&0!==E.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(e){}}(),N=function(e){var t;return!(!f(e)||"function"!=typeof(t=e.then))&&t},A=function(e,t){if(!e._n){e._n=!0;var r=e._c;b((function(){for(var n=e._v,i=1==e._s,a=0;r.length>a;)!function(t){var r,a,s,o=i?t.ok:t.fail,u=t.resolve,l=t.reject,c=t.domain;try{o?(i||(2==e._h&&F(e),e._h=1),!0===o?r=n:(c&&c.enter(),r=o(n),c&&(c.exit(),s=!0)),r===t.promise?l(C("Promise-chain cycle")):(a=N(r))?a.call(r,u,l):u(r)):l(n)}catch(e){c&&!s&&c.exit(),l(e)}}(r[a++]);e._c=[],e._n=!1,t&&!e._h&&P(e)}))}},P=function(e){g.call(u,(function(){var t,r,n,i=e._v,a=M(e);if(a&&(t=_((function(){T?D.emit("unhandledRejection",i,e):(r=u.onunhandledrejection)?r({promise:e,reason:i}):(n=u.console)&&n.error&&n.error("Unhandled promise rejection",i)})),e._h=T||M(e)?2:1),e._a=void 0,a&&t.e)throw t.v}))},M=function(e){return 1!==e._h&&0===(e._a||e._c).length},F=function(e){g.call(u,(function(){var t;T?D.emit("rejectionHandled",e):(t=u.onrejectionhandled)&&t({promise:e,reason:e._v})}))},j=function(e){var t=this;t._d||(t._d=!0,(t=t._w||t)._v=e,t._s=2,t._a||(t._a=t._c.slice()),A(t,!0))},L=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===e)throw C("Promise can't be resolved itself");(t=N(e))?b((function(){var n={_w:r,_d:!1};try{t.call(e,l(L,n,1),l(j,n,1))}catch(e){j.call(n,e)}})):(r._v=e,r._s=1,A(r,!1))}catch(e){j.call({_w:r,_d:!1},e)}}};I||(k=function(e){p(this,k,"Promise","_h"),h(e),n.call(this);try{e(l(L,this,1),l(j,this,1))}catch(e){j.call(this,e)}},(n=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(81)(k.prototype,{then:function(e,t){var r=O(m(this,k));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=T?D.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&A(this,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),a=function(){var e=new n;this.promise=e,this.resolve=l(L,e,1),this.reject=l(j,e,1)},y.f=O=function(e){return e===k||e===s?new a(e):i(e)}),d(d.G+d.W+d.F*!I,{Promise:k}),r(26)(k,"Promise"),r(83)("Promise"),s=r(10).Promise,d(d.S+d.F*!I,"Promise",{reject:function(e){var t=O(this);return(0,t.reject)(e),t.promise}}),d(d.S+d.F*(o||!I),"Promise",{resolve:function(e){return x(o&&this===s?k:this,e)}}),d(d.S+d.F*!(I&&r(73)((function(e){k.all(e).catch($)}))),"Promise",{all:function(e){var t=this,r=O(t),n=r.resolve,i=r.reject,a=_((function(){var r=[],a=0,s=1;v(e,!1,(function(e){var o=a++,u=!1;r.push(void 0),s++,t.resolve(e).then((function(e){u||(u=!0,r[o]=e,--s||n(r))}),i)})),--s||n(r)}));return a.e&&i(a.v),r.promise},race:function(e){var t=this,r=O(t),n=r.reject,i=_((function(){v(e,!1,(function(e){t.resolve(e).then(r.resolve,n)}))}));return i.e&&n(i.v),r.promise}})},function(e,t,r){"use strict";var n=r(3),i=r(10),a=r(0),s=r(50),o=r(48);n(n.P+n.R,"Promise",{finally:function(e){var t=s(this,i.Promise||a.Promise),r="function"==typeof e;return this.then(r?function(r){return o(t,e()).then((function(){return r}))}:e,r?function(r){return o(t,e()).then((function(){throw r}))}:e)}})},function(e,t,r){"use strict";var n=r(35),i=r(101),a=function(e){r(99)},s=r(100)(n.a,i.a,!1,a,null,null);t.a=s.exports},function(e,t,r){"use strict";t.a=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return(i="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}t.a=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(34),i=(r.n(n),r(55)),a=(r.n(i),r(56)),s=(r.n(a),r(57)),o=r(32),u=r(33);r.d(t,"Multiselect",(function(){return s.a})),r.d(t,"multiselectMixin",(function(){return o.a})),r.d(t,"pointerMixin",(function(){return u.a})),t.default=s.a},function(e,t){e.exports=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!");return e}},function(e,t,r){var n=r(14),i=r(28),a=r(23),s=r(19);e.exports=function(e,t,r,o,u){n(t);var l=i(e),c=a(l),d=s(l.length),f=u?d-1:0,h=u?-1:1;if(r<2)for(;;){if(f in c){o=c[f],f+=h;break}if(f+=h,u?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;u?f>=0:d>f;f+=h)f in c&&(o=t(o,c[f],f,l));return o}},function(e,t,r){var n=r(5),i=r(42),a=r(1)("species");e.exports=function(e){var t;return i(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!i(t.prototype)||(t=void 0),n(t)&&null===(t=t[a])&&(t=void 0)),void 0===t?Array:t}},function(e,t,r){var n=r(63);e.exports=function(e,t){return new(n(e))(t)}},function(e,t,r){"use strict";var n=r(8),i=r(6),a=r(7),s=r(16),o=r(1);e.exports=function(e,t,r){var u=o(e),l=r(s,u,""[e]),c=l[0],d=l[1];a((function(){var t={};return t[u]=function(){return 7},7!=""[e](t)}))&&(i(String.prototype,e,c),n(RegExp.prototype,u,2==t?function(e,t){return d.call(e,this,t)}:function(e){return d.call(e,this)}))}},function(e,t,r){var n=r(11),i=r(70),a=r(69),s=r(2),o=r(19),u=r(87),l={},c={};(t=e.exports=function(e,t,r,d,f){var h,p,v,m,g=f?function(){return e}:u(e),b=n(r,d,t?2:1),y=0;if("function"!=typeof g)throw TypeError(e+" is not iterable!");if(a(g)){for(h=o(e.length);h>y;y++)if((m=t?b(s(p=e[y])[0],p[1]):b(e[y]))===l||m===c)return m}else for(v=g.call(e);!(p=v.next()).done;)if((m=i(v,b,p.value,t))===l||m===c)return m}).BREAK=l,t.RETURN=c},function(e,t,r){var n=r(5),i=r(82).set;e.exports=function(e,t,r){var a,s=t.constructor;return s!==r&&"function"==typeof s&&(a=s.prototype)!==r.prototype&&n(a)&&i&&i(e,a),e}},function(e,t){e.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},function(e,t,r){var n=r(15),i=r(1)("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(n.Array===e||a[i]===e)}},function(e,t,r){var n=r(2);e.exports=function(e,t,r,i){try{return i?t(n(r)[0],r[1]):t(r)}catch(t){var a=e.return;throw void 0!==a&&n(a.call(e)),t}}},function(e,t,r){"use strict";var n=r(44),i=r(25),a=r(26),s={};r(8)(s,r(1)("iterator"),(function(){return this})),e.exports=function(e,t,r){e.prototype=n(s,{next:i(1,r)}),a(e,t+" Iterator")}},function(e,t,r){"use strict";var n=r(24),i=r(3),a=r(6),s=r(8),o=r(15),u=r(71),l=r(26),c=r(78),d=r(1)("iterator"),f=!([].keys&&"next"in[].keys()),h=function(){return this};e.exports=function(e,t,r,p,v,m,g){u(r,t,p);var b,y,_,w=function(e){if(!f&&e in S)return S[e];switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},x=t+" Iterator",C="values"==v,D=!1,S=e.prototype,E=S[d]||S["@@iterator"]||v&&S[v],k=E||w(v),T=v?C?w("entries"):k:void 0,$="Array"==t&&S.entries||E;if($&&(_=c($.call(new e)))!==Object.prototype&&_.next&&(l(_,x,!0),n||"function"==typeof _[d]||s(_,d,h)),C&&E&&"values"!==E.name&&(D=!0,k=function(){return E.call(this)}),n&&!g||!f&&!D&&S[d]||s(S,d,k),o[t]=k,o[x]=h,v)if(b={values:C?k:w("values"),keys:m?k:w("keys"),entries:T},g)for(y in b)y in S||a(S,y,b[y]);else i(i.P+i.F*(f||D),t,b);return b}},function(e,t,r){var n=r(1)("iterator"),i=!1;try{var a=[7][n]();a.return=function(){i=!0},Array.from(a,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var r=!1;try{var a=[7],s=a[n]();s.next=function(){return{done:r=!0}},a[n]=function(){return s},e(a)}catch(e){}return r}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,r){var n=r(0),i=r(52).set,a=n.MutationObserver||n.WebKitMutationObserver,s=n.process,o=n.Promise,u="process"==r(9)(s);e.exports=function(){var e,t,r,l=function(){var n,i;for(u&&(n=s.domain)&&n.exit();e;){i=e.fn,e=e.next;try{i()}catch(n){throw e?r():t=void 0,n}}t=void 0,n&&n.enter()};if(u)r=function(){s.nextTick(l)};else if(!a||n.navigator&&n.navigator.standalone)if(o&&o.resolve){var c=o.resolve(void 0);r=function(){c.then(l)}}else r=function(){i.call(n,l)};else{var d=!0,f=document.createTextNode("");new a(l).observe(f,{characterData:!0}),r=function(){f.data=d=!d}}return function(n){var i={fn:n,next:void 0};t&&(t.next=i),e||(e=i,r()),t=i}}},function(e,t,r){var n=r(13),i=r(2),a=r(47);e.exports=r(4)?Object.defineProperties:function(e,t){i(e);for(var r,s=a(t),o=s.length,u=0;o>u;)n.f(e,r=s[u++],t[r]);return e}},function(e,t,r){var n=r(46),i=r(22).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},function(e,t,r){var n=r(12),i=r(28),a=r(27)("IE_PROTO"),s=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),n(e,a)?e[a]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},function(e,t){t.f={}.propertyIsEnumerable},function(e,t){e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},function(e,t,r){var n=r(6);e.exports=function(e,t,r){for(var i in t)n(e,i,t[i],r);return e}},function(e,t,r){var n=r(5),i=r(2),a=function(e,t){if(i(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=r(11)(Function.call,r(45).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,r){return a(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:a}},function(e,t,r){"use strict";var n=r(0),i=r(13),a=r(4),s=r(1)("species");e.exports=function(e){var t=n[e];a&&t&&!t[s]&&i.f(t,s,{configurable:!0,get:function(){return this}})}},function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(e,t,r){var n=r(53),i=Math.max,a=Math.min;e.exports=function(e,t){return(e=n(e))<0?i(e+t,0):a(e,t)}},function(e,t,r){var n=r(0).navigator;e.exports=n&&n.userAgent||""},function(e,t,r){var n=r(38),i=r(1)("iterator"),a=r(15);e.exports=r(10).getIteratorMethod=function(e){if(null!=e)return e[i]||e["@@iterator"]||a[n(e)]}},function(e,t,r){"use strict";var n=r(3),i=r(20)(2);n(n.P+n.F*!r(17)([].filter,!0),"Array",{filter:function(e){return i(this,e,arguments[1])}})},function(e,t,r){"use strict";var n=r(3),i=r(37)(!1),a=[].indexOf,s=!!a&&1/[1].indexOf(1,-0)<0;n(n.P+n.F*(s||!r(17)(a)),"Array",{indexOf:function(e){return s?a.apply(this,arguments)||0:i(this,e,arguments[1])}})},function(e,t,r){var n=r(3);n(n.S,"Array",{isArray:r(42)})},function(e,t,r){"use strict";var n=r(3),i=r(20)(1);n(n.P+n.F*!r(17)([].map,!0),"Array",{map:function(e){return i(this,e,arguments[1])}})},function(e,t,r){"use strict";var n=r(3),i=r(62);n(n.P+n.F*!r(17)([].reduce,!0),"Array",{reduce:function(e){return i(this,e,arguments.length,arguments[1],!1)}})},function(e,t,r){var n=Date.prototype,i=n.toString,a=n.getTime;new Date(NaN)+""!="Invalid Date"&&r(6)(n,"toString",(function(){var e=a.call(this);return e==e?i.call(this):"Invalid Date"}))},function(e,t,r){r(4)&&"g"!=/./g.flags&&r(13).f(RegExp.prototype,"flags",{configurable:!0,get:r(39)})},function(e,t,r){r(65)("search",1,(function(e,t,r){return[function(r){"use strict";var n=e(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,n):new RegExp(r)[t](String(n))},r]}))},function(e,t,r){"use strict";r(94);var n=r(2),i=r(39),a=r(4),s=/./.toString,o=function(e){r(6)(RegExp.prototype,"toString",e,!0)};r(7)((function(){return"/a/b"!=s.call({source:"a",flags:"b"})}))?o((function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!a&&e instanceof RegExp?i.call(e):void 0)})):"toString"!=s.name&&o((function(){return s.call(this)}))},function(e,t,r){"use strict";r(51)("trim",(function(e){return function(){return e(this,3)}}))},function(e,t,r){for(var n=r(34),i=r(47),a=r(6),s=r(0),o=r(8),u=r(15),l=r(1),c=l("iterator"),d=l("toStringTag"),f=u.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(h),v=0;v<p.length;v++){var m,g=p[v],b=h[g],y=s[g],_=y&&y.prototype;if(_&&(_[c]||o(_,c,f),_[d]||o(_,d,g),u[g]=f,b))for(m in n)_[m]||a(_,m,n[m],!0)}},function(e,t){},function(e,t){e.exports=function(e,t,r,n,i,a){var s,o=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,o=e.default);var l,c="function"==typeof o?o.options:o;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId=i),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):n&&(l=n),l){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(e,t){return l.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:s,exports:o,options:c}}},function(e,t,r){"use strict";var n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"multiselect",class:{"multiselect--active":e.isOpen,"multiselect--disabled":e.disabled,"multiselect--above":e.isAbove},attrs:{tabindex:e.searchable?-1:e.tabindex},on:{focus:function(t){e.activate()},blur:function(t){!e.searchable&&e.deactivate()},keydown:[function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?t.target!==t.currentTarget?null:(t.preventDefault(),void e.pointerForward()):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?t.target!==t.currentTarget?null:(t.preventDefault(),void e.pointerBackward()):null}],keypress:function(t){return!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:(t.stopPropagation(),t.target!==t.currentTarget?null:void e.addPointerElement(t))},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key,"Escape"))return null;e.deactivate()}}},[e._t("caret",[r("div",{staticClass:"multiselect__select",on:{mousedown:function(t){t.preventDefault(),t.stopPropagation(),e.toggle()}}})],{toggle:e.toggle}),e._v(" "),e._t("clear",null,{search:e.search}),e._v(" "),r("div",{ref:"tags",staticClass:"multiselect__tags"},[e._t("selection",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.visibleValues.length>0,expression:"visibleValues.length > 0"}],staticClass:"multiselect__tags-wrap"},[e._l(e.visibleValues,(function(t,n){return[e._t("tag",[r("span",{key:n,staticClass:"multiselect__tag"},[r("span",{domProps:{textContent:e._s(e.getOptionLabel(t))}}),e._v(" "),r("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keypress:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13,r.key,"Enter"))return null;r.preventDefault(),e.removeElement(t)},mousedown:function(r){r.preventDefault(),e.removeElement(t)}}})])],{option:t,search:e.search,remove:e.removeElement})]}))],2),e._v(" "),e.internalValue&&e.internalValue.length>e.limit?[e._t("limit",[r("strong",{staticClass:"multiselect__strong",domProps:{textContent:e._s(e.limitText(e.internalValue.length-e.limit))}})])]:e._e()],{search:e.search,remove:e.removeElement,values:e.visibleValues,isOpen:e.isOpen}),e._v(" "),r("transition",{attrs:{name:"multiselect__loading"}},[e._t("loading",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),e._v(" "),e.searchable?r("input",{ref:"search",staticClass:"multiselect__input",style:e.inputStyle,attrs:{name:e.name,id:e.id,type:"text",autocomplete:"nope",placeholder:e.placeholder,disabled:e.disabled,tabindex:e.tabindex},domProps:{value:e.search},on:{input:function(t){e.updateSearch(t.target.value)},focus:function(t){t.preventDefault(),e.activate()},blur:function(t){t.preventDefault(),e.deactivate()},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key,"Escape"))return null;e.deactivate()},keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"]))return null;t.preventDefault(),e.pointerForward()},function(t){if(!("button"in t)&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"]))return null;t.preventDefault(),e.pointerBackward()},function(t){if(!("button"in t)&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete"]))return null;t.stopPropagation(),e.removeLastElement()}],keypress:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?(t.preventDefault(),t.stopPropagation(),t.target!==t.currentTarget?null:void e.addPointerElement(t)):null}}}):e._e(),e._v(" "),e.isSingleLabelVisible?r("span",{staticClass:"multiselect__single",on:{mousedown:function(t){return t.preventDefault(),e.toggle(t)}}},[e._t("singleLabel",[[e._v(e._s(e.currentOptionLabel))]],{option:e.singleValue})],2):e._e(),e._v(" "),e.isPlaceholderVisible?r("span",{staticClass:"multiselect__placeholder",on:{mousedown:function(t){return t.preventDefault(),e.toggle(t)}}},[e._t("placeholder",[e._v("\n          "+e._s(e.placeholder)+"\n        ")])],2):e._e()],2),e._v(" "),r("transition",{attrs:{name:"multiselect"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:e.optimizedHeight+"px"},attrs:{tabindex:"-1"},on:{focus:e.activate,mousedown:function(e){e.preventDefault()}}},[r("ul",{staticClass:"multiselect__content",style:e.contentStyle},[e._t("beforeList"),e._v(" "),e.multiple&&e.max===e.internalValue.length?r("li",[r("span",{staticClass:"multiselect__option"},[e._t("maxElements",[e._v("Maximum of "+e._s(e.max)+" options selected. First remove a selected option to select another.")])],2)]):e._e(),e._v(" "),!e.max||e.internalValue.length<e.max?e._l(e.filteredOptions,(function(t,n){return r("li",{key:n,staticClass:"multiselect__element"},[t&&(t.$isLabel||t.$isDisabled)?e._e():r("span",{staticClass:"multiselect__option",class:e.optionHighlight(n,t),attrs:{"data-select":t&&t.isTag?e.tagPlaceholder:e.selectLabelText,"data-selected":e.selectedLabelText,"data-deselect":e.deselectLabelText},on:{click:function(r){r.stopPropagation(),e.select(t)},mouseenter:function(t){if(t.target!==t.currentTarget)return null;e.pointerSet(n)}}},[e._t("option",[r("span",[e._v(e._s(e.getOptionLabel(t)))])],{option:t,search:e.search})],2),e._v(" "),t&&(t.$isLabel||t.$isDisabled)?r("span",{staticClass:"multiselect__option",class:e.groupHighlight(n,t),attrs:{"data-select":e.groupSelect&&e.selectGroupLabelText,"data-deselect":e.groupSelect&&e.deselectGroupLabelText},on:{mouseenter:function(t){if(t.target!==t.currentTarget)return null;e.groupSelect&&e.pointerSet(n)},mousedown:function(r){r.preventDefault(),e.selectGroup(t)}}},[e._t("option",[r("span",[e._v(e._s(e.getOptionLabel(t)))])],{option:t,search:e.search})],2):e._e()])})):e._e(),e._v(" "),r("li",{directives:[{name:"show",rawName:"v-show",value:e.showNoResults&&0===e.filteredOptions.length&&e.search&&!e.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[r("span",{staticClass:"multiselect__option"},[e._t("noResult",[e._v("No elements found. Consider changing the search query.")],{search:e.search})],2)]),e._v(" "),r("li",{directives:[{name:"show",rawName:"v-show",value:e.showNoOptions&&0===e.options.length&&!e.search&&!e.loading,expression:"showNoOptions && (options.length === 0 && !search && !loading)"}]},[r("span",{staticClass:"multiselect__option"},[e._t("noOptions",[e._v("List is empty.")])],2)]),e._v(" "),e._t("afterList")],2)])])],2)},staticRenderFns:[]};t.a=n}])},nNAk:function(e,t,r){Vue.component("edit-channel",r("5Mzr").default);var n=document.getElementById("edit_channel");if(void 0!==n&&null!=n)new Vue({el:"#edit_channel"})},ocMQ:function(e,t,r){(e.exports=r("I1BE")(!1)).push([e.i,"\n.btnsubmitcover[data-v-cc00b5d4] {\n  background-color: #013737;\n  color: white;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  border-radius: 0;\n  z-index: 100;\n}\n.btnsuca[data-v-cc00b5d4] {\n  text-align: center;\n}\n.btn-success[data-v-cc00b5d4] {\n  padding-top: 0.1rem !important;\n  padding-bottom: 0.1rem !important;\n}\n",""])},w3U2:function(e,t,r){"use strict";var n=r("L2h2");r.n(n).a},zl8d:function(e,t,r){"use strict";var n=r("2q5W");r.n(n).a}});
>>>>>>> 499710a687753338cb3a7a47de2288e27cdd0116
