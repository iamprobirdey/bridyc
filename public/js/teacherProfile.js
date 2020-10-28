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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TeacherProfile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TeacherProfile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _teacher_profile_username_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teacher/profile/username.vue */ "./resources/js/components/teacher/profile/username.vue");
/* harmony import */ var _teacher_profile_address_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacher/profile/address.vue */ "./resources/js/components/teacher/profile/address.vue");
/* harmony import */ var _teacher_profile_subject_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teacher/profile/subject.vue */ "./resources/js/components/teacher/profile/subject.vue");
/* harmony import */ var _teacher_profile_avatar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacher/profile/avatar.vue */ "./resources/js/components/teacher/profile/avatar.vue");
/* harmony import */ var _teacher_profile_channel_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teacher/profile/channel.vue */ "./resources/js/components/teacher/profile/channel.vue");
/* harmony import */ var _teacher_profile_phone_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teacher/profile/phone.vue */ "./resources/js/components/teacher/profile/phone.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      channelsData: [],
      statesData: [],
      districtsData: [],
      villagesData: [],
      subjectsData: [],
      studentsubjectsData: [],
      userInformationData: {},
      userinstituteData: {}
    };
  },
  props: {
    user: {
      type: Object,
      "default": null
    },
    channels: {
      type: Array,
      "default": null
    },
    states: {
      type: Array,
      "default": null
    },
    districts: {
      type: Array,
      "default": null
    },
    villages: {
      type: Array,
      "default": null
    },
    subjects: {
      type: Array,
      "default": null
    },
    studentsubjects: {
      type: Array,
      "default": null
    },
    userinformation: {
      type: Object,
      "default": null
    },
    userinstitute: {
      type: Object,
      "default": null
    }
  },
  created: function created() {
    this.userData = this.user;
    this.channelsData = this.channels;
    this.statesData = this.states;
    this.districtsData = this.districts;
    this.villagesData = this.villages; //this.standardsData = this.standards;

    this.subjectsData = this.subjects;
    this.studentsubjectsData = this.studentsubjects;
    this.userInformationData = this.userinformation;
    this.userinstituteData = this.userinstitute;
  },
  mounted: function mounted() {
    console.log(this.userData);
  },
  components: {
    username: _teacher_profile_username_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    "address-for-teacher": _teacher_profile_address_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    subject: _teacher_profile_subject_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    avatar: _teacher_profile_avatar_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    channel: _teacher_profile_channel_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    phone: _teacher_profile_phone_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/address.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/teacher/profile/address.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      statesData: [],
      districtsData: [],
      villagesData: [],
      userInformationData: {},
      userFormData: {
        state_id: "",
        district_id: "",
        village_id: ""
      },
      serverErrors: {
        state_id: "",
        district_id: "",
        village_id: ""
      },
      addressDataChecker: true,
      userId: ""
    };
  },
  props: {
    states: {
      type: Array,
      "default": null
    },
    districts: {
      type: Array,
      "default": null
    },
    villages: {
      type: Array,
      "default": null
    },
    userinformation: {
      type: Object,
      "default": null
    },
    id: {
      type: Number,
      "default": null
    }
  },
  created: function created() {
    this.userId = this.id;
    this.statesData = this.states;
    this.districtsData = this.districts;
    this.villagesData = this.villages;
    this.userInformationData = this.userinformation;
    if (this.userInformationData === null) this.addressDataChecker = false;
    console.log(this.channelsData);
  },
  methods: {
    addressForm: function addressForm() {
      var _this = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          axios.post("/api/profile/teacher/edit/address/" + _this.userId, _this.userFormData).then(function (response) {
            if (response.data.message === true) {
              Vue.toasted.success("Address is succefully created", {
                position: "top-center",
                duration: 5000
              });
              _this.userInformationData = {};
              _this.userInformationData = response.data.userData;
              _this.addressDataChecker = true;
            }
          })["catch"](function (errors) {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000
            });

            if (errors.response.data.errors.channel_id) {
              _this.serverErrors.channel_id = errors.response.data.errors.channel_id[0];
            }

            if (errors.response.data.errors.village_id) {
              _this.serverErrors.village_id = errors.response.data.errors.village_id[0];
            }

            if (errors.response.data.errors.district_id) {
              _this.serverErrors.district_id = errors.response.data.errors.district_id[0];
            }

            if (errors.response.data.errors.village_id) {
              _this.serverErrors.village_id = errors.response.data.errors.village_id[0];
            }
          });
        }
      });
    },
    editAddress: function editAddress() {
      this.addressDataChecker = false; //this.userFormData.channel_id = this.userInformationData.channel.id;

      this.userFormData.state_id = this.userInformationData.state.id;
      this.userFormData.district_id = this.userInformationData.district.id;
      this.userFormData.village_id = this.userInformationData.village.id;
    },
    cancelForm: function cancelForm() {
      this.addressDataChecker = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/avatar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/teacher/profile/avatar.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      url: "/api/profile/teacher/image/upload/",
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
    console.log("avatar");

    if (this.user.avatar) {
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
        axios.post(this.url + this.userId, formData).then(function (response) {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/channel.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/teacher/profile/channel.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      userInstituteData: {},
      userData: [],
      channelsData: [],
      channelChecker: false,
      userFormData: {
        channel_id: "",
        school_name: ""
      },
      serverErrors: {
        channel_id: "",
        school_name: ""
      }
    };
  },
  props: {
    user: {
      type: Object,
      "default": null
    },
    userinstitute: {
      type: Object,
      "default": null
    },
    channel: {
      type: Array,
      "default": null
    }
  },
  created: function created() {
    this.userInstituteData = this.userinstitute;
    this.userData = this.user;
    this.channelsData = this.channel;
    console.log(this.userInstituteData);

    if (this.userInstituteData != null) {
      this.channelChecker = true;
    }
  },
  methods: {
    channelForm: function channelForm() {
      var _this = this;

      this.$validator.validate().then(function (result) {
        if (_this.userFormData.school_name == "" && _this.userFormData.channel_id == "") {
          _this.serverErrors.school_name = "Any Either field name is required";
          _this.serverErrors.channel_id = "Any Either field name is required";
          result = false;
        }

        if (_this.userFormData.school_name != "" && _this.userFormData.channel_id != "") {
          Vue.toasted.error("Choose only one option", {
            position: "top-center",
            duration: 5000
          });
          _this.userFormData.school_name == "" && _this.userFormData.channel_id == "";
          result = false;
        }

        if (result) {
          console.log("Called");
          console.log(_this.userFormData);
          axios.post("/api/profile/teacher/edit/channel/" + _this.userData.id, _this.userFormData).then(function (response) {
            if (response.data.message) {
              Vue.toasted.success("School  is succefully updated", {
                position: "top-center",
                duration: 5000
              });
              _this.userInstituteData = {};
              _this.userInstituteData = response.data.data;
              console.log(_this.userInstituteData);
              _this.channelChecker = true;
            }
          })["catch"](function (errors) {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000
            });

            if (errors.response.data.errors.channel_id) {
              _this.serverErrors.channel_id = errors.response.data.errors.channel_id[0];
            }
          });
        }
      });
    },
    editAddress: function editAddress() {
      this.channelChecker = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/phone.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/teacher/profile/phone.vue?vue&type=script&lang=js& ***!
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
          axios.post("/api/profile/teacher/edit/phone/number/" + _this.userData.id, _this.phoneData).then(function (response) {
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
      axios.post("/api/profile/teacher/edit/phone/number/verify" + this.userData.id).then(function (response) {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/subject.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/teacher/profile/subject.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      value: [],
      subjectsData: [],
      studentssubjectData: [],
      subjectsEntryChecker: true,
      selectedSubjectValueStored: [],
      serverError: "",
      userId: ""
    };
  },
  props: {
    subjects: {
      type: Array,
      "default": null
    },
    studentssubject: {
      type: Array,
      "default": null
    },
    id: {
      type: Number,
      "default": null
    }
  },
  created: function created() {
    this.subjectsData = this.subjects;
    this.studentssubjectData = this.studentssubject;
    this.userId = this.id;
  },
  mounted: function mounted() {
    if (this.studentssubjectData.length > 0) {
      this.subjectsEntryChecker = true;
      this.theSubjectContainer();
    }
  },
  methods: {
    cancelTheForm: function cancelTheForm() {
      this.subjectsEntryChecker = true;
    },
    standardNameOnly: function standardNameOnly(subject) {
      return "".concat(subject.name);
    },
    submitSubjectsData: function submitSubjectsData() {
      var _this = this;

      if (this.value.length) {
        var subjectFormData = {
          subject_id: []
        };
        this.value.map(function (item) {
          subjectFormData.subject_id.push(item.id);
        });
        axios.post("/api/profile/teacher/edit/subject/" + this.userId, subjectFormData).then(function (response) {
          _this.studentssubjectData = [];
          _this.studentssubjectData = response.data.data;
          _this.subjectsEntryChecker = true;

          _this.theSubjectContainer();
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
    isEqual: function isEqual(items) {
      var _this2 = this;

      var counter = 0;
      items.map(function (item) {
        _this2.selectedSubjectValueStored.map(function (data) {
          if (item === data) {
            counter++;
          }
        });
      });
      if (items.length > this.selectedSubjectValueStored || this.selectedSubjectValueStored.length === 0 || this.selectedSubjectValueStored.length != counter) return true;
      return false;
    },
    theSubjectContainer: function theSubjectContainer() {
      var _this3 = this;

      this.value = [];

      if (this.studentssubjectData != null) {
        this.subjectsData.map(function (item) {
          _this3.studentssubjectData.map(function (data) {
            if (data.subject.name === item.name) {
              _this3.value.push(item);

              _this3.selectedSubjectValueStored.push(data.subject.id);
            }
          });
        });
      }
    },
    editTheSubject: function editTheSubject() {
      this.subjectsEntryChecker = false;
    }
  },
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/username.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/teacher/profile/username.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      usernameData: '',
      userNameEditing: false,
      userName: {
        username: ''
      },
      userNameError: {
        username: ''
      },
      userId: ''
    };
  },
  props: {
    username: {
      type: String,
      "default": null
    },
    id: {
      type: Number,
      "default": null
    }
  },
  created: function created() {
    this.usernameData = this.username;
    this.userId = this.id;
  },
  mounted: function mounted() {},
  methods: {
    editTheUserName: function editTheUserName() {
      this.userNameEditing = true;
    },
    userNameForm: function userNameForm() {
      var _this = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          axios.post('/api/profile/teacher/edit/username/' + _this.userId, _this.userName).then(function (response) {
            if (response.data.message === true) {
              Vue.toasted.success("User name is succefully created", {
                position: "top-center",
                duration: 5000
              });
              _this.usernameData = _this.userName.username;
              _this.userNameEditing = false;

              _this.urlChanger(_this.usernameData);

              window.location.reload();
            }
          })["catch"](function (errors) {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000
            });

            if (errors.response.data.errors.username) {
              _this.userNameError.username = errors.response.data.errors.username[0];
            }
          });
        }
      });
    },
    cancelEditing: function cancelEditing() {
      this.userNameEditing = false;
    },
    urlChanger: function urlChanger(username) {
      var url = window.location.origin;
      var changeUrl = window.location.pathname.split('/');
      changeUrl[4] = username;
      window.history.pushState('username', 'on-profile', url + changeUrl.join('/'));
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TeacherProfile.vue?vue&type=template&id=0a7219dc&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TeacherProfile.vue?vue&type=template&id=0a7219dc& ***!
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
    { staticClass: "profile mx-auto px-lg-5" },
    [
      _c("avatar", { attrs: { user: _vm.userData } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-5" },
        [
          _c("username", {
            attrs: { username: _vm.userData.username, id: _vm.userData.id }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "shadow py-5 mt-n4 mx-lg-5" }, [
        _c(
          "div",
          { staticClass: "container mx-lg-5 px-md-5" },
          [
            _c("address-for-teacher", {
              attrs: {
                states: _vm.statesData,
                districts: _vm.districtsData,
                villages: _vm.villagesData,
                userinformation: _vm.userInformationData,
                id: _vm.userData.id
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mt-5 pt-3 mb-5 mx-lg-5 text-center" },
          [
            _c("subject", {
              attrs: {
                subjects: _vm.subjectsData,
                studentssubject: _vm.studentsubjectsData,
                id: _vm.userData.id
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-5 mx-0" }, [
          _c(
            "div",
            [
              _c("channel", {
                attrs: {
                  userinstitute: _vm.userinstituteData,
                  user: _vm.userData,
                  channel: _vm.channelsData
                }
              })
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/address.vue?vue&type=template&id=55259c66&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/teacher/profile/address.vue?vue&type=template&id=55259c66& ***!
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
  return _c("div", { staticClass: "address" }, [
    _vm.addressDataChecker
      ? _c("div", { staticClass: "address-display" }, [
          _c("div", [
            _c("div", { staticClass: "row mx-0" }, [
              _c("div", { staticClass: "col-sm-6" }, [
                _c("strong", [_vm._v("Locality/Village :")]),
                _vm._v(" "),
                _c("span", [
                  _vm._v(_vm._s(_vm.userInformationData.village.name))
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row mx-0" }, [
              _c("div", { staticClass: "col-sm-6" }, [
                _c("strong", [_vm._v("District :")]),
                _vm._v(" "),
                _c("span", [
                  _vm._v(_vm._s(_vm.userInformationData.district.name))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6" }, [
                _c("strong", [_vm._v("State :")]),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(_vm.userInformationData.state.name))])
              ])
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn edit-btn",
                attrs: { "data-toggle": "tooltip", title: "Edit" },
                on: {
                  click: function($event) {
                    return _vm.editAddress()
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
      : _vm._e(),
    _vm._v(" "),
    !_vm.addressDataChecker
      ? _c("div", [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addressForm()
                }
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "form-group row mx-0 mx-lg-5",
                  class: {
                    "has-error":
                      _vm.errors.has("state") || _vm.serverErrors.state_id != ""
                  }
                },
                [
                  _c("label", { attrs: { col: "col-sm-3 col-form-label" } }, [
                    _vm._v("STATE:")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userFormData.state_id,
                          expression: "userFormData.state_id"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control col-sm-9 ml-auto",
                      attrs: { name: "state" },
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
                            _vm.userFormData,
                            "state_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Select State")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.statesData, function(state) {
                        return _c(
                          "option",
                          { key: state.id, domProps: { value: state.id } },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(state.name) +
                                "\n          "
                            )
                          ]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("i", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("state"),
                        expression: "errors.has('state')"
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
                          value: _vm.errors.has("state"),
                          expression: "errors.has('state')"
                        }
                      ],
                      staticClass: "text-danger text-center"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("state")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.state_id != "",
                          expression: "serverErrors.state_id != ''"
                        }
                      ],
                      staticClass: "text-danger text-center"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.state_id))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group row mx-0 mx-lg-5",
                  class: {
                    "has-error":
                      _vm.errors.has("district") ||
                      _vm.serverErrors.district_id != ""
                  }
                },
                [
                  _c("label", { attrs: { col: "col-sm-3 col-form-label" } }, [
                    _vm._v("DISTRICT:")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userFormData.district_id,
                          expression: "userFormData.district_id"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control col-sm-9 ml-auto",
                      attrs: { name: "district" },
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
                            _vm.userFormData,
                            "district_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Select District")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.districtsData, function(district) {
                        return _c(
                          "option",
                          {
                            key: district.id,
                            domProps: { value: district.id }
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(district.name) +
                                "\n          "
                            )
                          ]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("i", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("district"),
                        expression: "errors.has('district')"
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
                          value: _vm.errors.has("district"),
                          expression: "errors.has('district')"
                        }
                      ],
                      staticClass: "text-danger text-center"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("district")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.district_id != "",
                          expression: "serverErrors.district_id != ''"
                        }
                      ],
                      staticClass: "text-danger text-center"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.district_id))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group row mx-0 mx-lg-5",
                  class: {
                    "has-error":
                      _vm.errors.has("village") ||
                      _vm.serverErrors.village_id != ""
                  }
                },
                [
                  _c("label", { attrs: { col: "col-sm-3 col-form-label" } }, [
                    _vm._v("LOCALITY:")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userFormData.village_id,
                          expression: "userFormData.village_id"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control col-sm-9 ml-auto",
                      attrs: { name: "village" },
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
                            _vm.userFormData,
                            "village_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Select Locality")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.villagesData, function(village) {
                        return _c(
                          "option",
                          { key: village.id, domProps: { value: village.id } },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(village.name) +
                                "\n          "
                            )
                          ]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("i", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("village"),
                        expression: "errors.has('village')"
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
                          value: _vm.errors.has("village"),
                          expression: "errors.has('village')"
                        }
                      ],
                      staticClass: "text-danger text-center"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("village")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.village_id != "",
                          expression: "serverErrors.village_id != ''"
                        }
                      ],
                      staticClass: "text-danger text-center"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.village_id))]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "ml-5" }, [
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.userInformationData != null,
                        expression: "userInformationData != null"
                      }
                    ],
                    staticClass: "btn btn-warning",
                    on: {
                      click: function($event) {
                        return _vm.cancelForm()
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
                    attrs: { type: "submit" }
                  },
                  [_vm._v("Submit")]
                )
              ])
            ]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/avatar.vue?vue&type=template&id=379f5457&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/teacher/profile/avatar.vue?vue&type=template&id=379f5457& ***!
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
    _vm.userImageStatus
      ? _c("div", { staticClass: "text-center mt-5 pt-4" }, [
          _c("img", {
            staticClass: "profile-picture rounded-circle shadow",
            attrs: {
              src:
                _vm.userImage === "default.jpg"
                  ? "/images/" + _vm.userImage
                  : "/media/teacher/" +
                    _vm.userId +
                    "/profile/s-" +
                    _vm.userImage,
              alt: "teacher profile pictures"
            }
          }),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "profile-edit p-2 rounded teacher-edit",
              attrs: { "data-toggle": "tooltip", title: "Change Picture" },
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
          { staticClass: "upload-profile-pic mt-5 pt-4" },
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
            _c("div", { staticClass: "text-center mt-2" }, [
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
                      staticClass: "btn btn-warning",
                      on: {
                        click: function($event) {
                          return _vm.canTheEdit()
                        }
                      }
                    },
                    [_vm._v("\n        Cancel\n      ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/channel.vue?vue&type=template&id=90d74416&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/teacher/profile/channel.vue?vue&type=template&id=90d74416& ***!
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
  return _c("div", { staticClass: "channelname" }, [
    _vm.channelChecker
      ? _c("div", { staticClass: "mt-n4 mb-3 container text-center" }, [
          _c("h4", [_vm._v("Your Institute Name:")]),
          _vm._v(" "),
          _vm.userInstituteData.channel_id != null
            ? _c("span", { staticClass: "text-capitalize" }, [
                _vm._v(_vm._s(_vm.userInstituteData.channel.title))
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("span", { staticClass: "text-capitalize text-center" }, [
            _vm._v(_vm._s(_vm.userInstituteData.school_name))
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn edit-btn",
              attrs: { "data-toggle": "tooltip", title: "Edit" },
              on: {
                click: function($event) {
                  return _vm.editAddress()
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
      : _vm._e(),
    _vm._v(" "),
    !_vm.channelChecker
      ? _c("div", [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.channelForm()
                }
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "form-group row mx-2",
                  class: {
                    "has-error":
                      _vm.errors.has("channel") ||
                      _vm.serverErrors.channel_id != ""
                  }
                },
                [
                  _c(
                    "label",
                    {
                      staticClass: "mt-2",
                      attrs: { col: "col-sm-3 col-form-label" }
                    },
                    [_vm._v("Institute : ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userFormData.channel_id,
                          expression: "userFormData.channel_id"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "numeric",
                          expression: "'numeric'"
                        }
                      ],
                      staticClass: "form-control col-sm-9 mx-lg-2",
                      attrs: { name: "channel" },
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
                            _vm.userFormData,
                            "channel_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Select your Institute")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.channelsData, function(channel) {
                        return _c(
                          "option",
                          { key: channel.id, domProps: { value: channel.id } },
                          [_vm._v(_vm._s(channel.title))]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass: "text-danger mx-auto",
                      staticStyle: { "font-size": "14px" }
                    },
                    [
                      _vm._v(
                        "*If your institute is not listed here, you can always type it below."
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("i", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("channel"),
                        expression: "errors.has('channel')"
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
                          value: _vm.errors.has("channel"),
                          expression: "errors.has('channel')"
                        }
                      ],
                      staticClass: "text-danger text-center"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("channel")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.channel_id != "",
                          expression: "serverErrors.channel_id != ''"
                        }
                      ],
                      staticClass: "text-danger text-center"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.channel_id))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group row mx-2",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.school_name") ||
                      _vm.serverErrors.school_name != ""
                  }
                },
                [
                  _c(
                    "label",
                    {
                      staticClass: "mt-2",
                      attrs: { col: "col-sm-4 col-form-label" }
                    },
                    [_vm._v("Institute Name : ")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.userFormData.school_name,
                        expression: "userFormData.school_name"
                      }
                    ],
                    staticClass: "form-control col-sm-8",
                    class: {
                      "form-control": true,
                      "is-invalid": _vm.errors.has("school_name")
                    },
                    attrs: {
                      "data-vv-delay": "20",
                      name: "school_name",
                      type: "text",
                      placeholder: "Type your institute name (optional)"
                    },
                    domProps: { value: _vm.userFormData.school_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.userFormData,
                          "school_name",
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
                          value: _vm.serverErrors.school_name != "",
                          expression: "serverErrors.school_name != ''"
                        }
                      ],
                      staticClass: "help is-danger text-center"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.school_name))]
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(0)
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
    return _c("div", { staticClass: "container text-center" }, [
      _c(
        "button",
        { staticClass: "btn btnsubmit", attrs: { type: "submit" } },
        [_vm._v("Submit")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/phone.vue?vue&type=template&id=3397c140&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/teacher/profile/phone.vue?vue&type=template&id=3397c140& ***!
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
  return _c("div", [
    _vm.phoneVerificationChecker
      ? _c("div", { staticClass: "mt-n4" }, [
          _c("h4", [_vm._v("Your Contact No :")]),
          _vm._v(" "),
          _c("p", [
            _vm._v("\n      " + _vm._s(_vm.userData.phone) + "\n      "),
            _vm.userData.phone_verified != null
              ? _c("span", { staticClass: "text-success" }, [
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
                    staticClass: "form-group row mx-auto",
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
                      staticClass: "col-sm-9 mx-md-2",
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
                    staticClass: "form-group row mx-auto",
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
                      staticClass: "col-sm-9 mx-md-2",
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
    return _c("div", { staticClass: "ml-md-5" }, [
      _c(
        "button",
        { staticClass: "btn btnsubmit mt-n2", attrs: { type: "submit" } },
        [_vm._v("Submit")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ml-md-5" }, [
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/subject.vue?vue&type=template&id=f96e0cc4&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/teacher/profile/subject.vue?vue&type=template&id=f96e0cc4& ***!
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
  return _c("div", { staticClass: "container" }, [
    _vm.subjectsEntryChecker
      ? _c("div", [
          _vm._v("\n    Subjects you teach :\n    "),
          _c(
            "button",
            {
              staticClass: "btn mt-n2 edit-btn",
              on: {
                click: function($event) {
                  return _vm.editTheSubject()
                }
              }
            },
            [
              _c("i", {
                staticClass: "fa fa-pencil",
                attrs: { "aria-hidden": "true" }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            _vm._l(_vm.studentssubjectData, function(subject, index) {
              return _c(
                "button",
                { key: index, staticClass: "btn btn-sm btnsubjects m-1" },
                [
                  _vm._v(
                    "\n              " + _vm._s(subject.subject.name) + "\n    "
                  )
                ]
              )
            }),
            0
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    !_vm.subjectsEntryChecker
      ? _c(
          "div",
          [
            _vm._v("\n    Add subjects :\n    "),
            _c("multiselect", {
              staticClass: "mt-3 mx-auto add-subject-teacher",
              attrs: {
                options: _vm.subjectsData,
                "track-by": "name",
                "custom-label": _vm.standardNameOnly,
                multiple: true,
                "tag-placeholder": "Select classes of your subjects",
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
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.serverError != "",
                    expression: "serverError != ''"
                  }
                ],
                staticClass: "text-danger text-center"
              },
              [_vm._v(_vm._s(_vm.serverError))]
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-warning",
                on: {
                  click: function($event) {
                    return _vm.cancelTheForm()
                  }
                }
              },
              [_vm._v("Cancel")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btnsubmit mt-n2",
                attrs: { type: "submit" },
                on: {
                  click: function($event) {
                    return _vm.submitSubjectsData()
                  }
                }
              },
              [_vm._v("Submit")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/username.vue?vue&type=template&id=7e8273d4&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/teacher/profile/username.vue?vue&type=template&id=7e8273d4& ***!
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
  return _c("div", { staticClass: "username" }, [
    !_vm.userNameEditing
      ? _c("div", { staticClass: "text-center" }, [
          _vm._v("\n            User Name: "),
          _c("strong", [_vm._v(_vm._s(_vm.usernameData))]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn mt-n2 edit-btn",
              attrs: { "data-toggle": "tooltip", title: "Edit" },
              on: {
                click: function($event) {
                  return _vm.editTheUserName()
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
      : _vm._e(),
    _vm._v(" "),
    _vm.userNameEditing
      ? _c("div", { staticClass: "container mx-auto" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.userNameForm()
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
                      _vm.errors.has("userNameError.username") ||
                      _vm.userNameError.username != ""
                  }
                },
                [
                  _c("label", { attrs: { col: "col-sm-3 col-form-label" } }, [
                    _vm._v("Username: ")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.userName.username,
                        expression: "userName.username"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "col-sm-9 ml-4",
                    class: {
                      "form-control": true,
                      "is-invalid": _vm.errors.has("username")
                    },
                    attrs: {
                      id: "username",
                      "data-vv-delay": "20",
                      name: "username",
                      type: "text",
                      placeholder: "Enter your favorite user-name"
                    },
                    domProps: { value: _vm.userName.username },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.userName, "username", $event.target.value)
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
                          value: _vm.errors.has("username"),
                          expression: "errors.has('username')"
                        }
                      ],
                      staticClass: "text-danger text-center"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("username")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.userNameError.username != "",
                          expression: "userNameError.username != ''"
                        }
                      ],
                      staticClass: "help is-danger text-center"
                    },
                    [_vm._v(_vm._s(_vm.userNameError.username))]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "ml-5" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-warning",
                    attrs: { type: "btn" },
                    on: {
                      click: function($event) {
                        return _vm.cancelEditing()
                      }
                    }
                  },
                  [_vm._v("Cancel")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btnsubmit mt-n2",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("Submit")]
                )
              ])
            ]
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

/***/ "./resources/js/components/TeacherProfile.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/TeacherProfile.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TeacherProfile_vue_vue_type_template_id_0a7219dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeacherProfile.vue?vue&type=template&id=0a7219dc& */ "./resources/js/components/TeacherProfile.vue?vue&type=template&id=0a7219dc&");
/* harmony import */ var _TeacherProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeacherProfile.vue?vue&type=script&lang=js& */ "./resources/js/components/TeacherProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TeacherProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TeacherProfile_vue_vue_type_template_id_0a7219dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TeacherProfile_vue_vue_type_template_id_0a7219dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TeacherProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TeacherProfile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/TeacherProfile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TeacherProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TeacherProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TeacherProfile.vue?vue&type=template&id=0a7219dc&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/TeacherProfile.vue?vue&type=template&id=0a7219dc& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherProfile_vue_vue_type_template_id_0a7219dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TeacherProfile.vue?vue&type=template&id=0a7219dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TeacherProfile.vue?vue&type=template&id=0a7219dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherProfile_vue_vue_type_template_id_0a7219dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherProfile_vue_vue_type_template_id_0a7219dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/teacher/profile/address.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/teacher/profile/address.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _address_vue_vue_type_template_id_55259c66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address.vue?vue&type=template&id=55259c66& */ "./resources/js/components/teacher/profile/address.vue?vue&type=template&id=55259c66&");
/* harmony import */ var _address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address.vue?vue&type=script&lang=js& */ "./resources/js/components/teacher/profile/address.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _address_vue_vue_type_template_id_55259c66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _address_vue_vue_type_template_id_55259c66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/teacher/profile/address.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/teacher/profile/address.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/teacher/profile/address.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./address.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/address.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/teacher/profile/address.vue?vue&type=template&id=55259c66&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/teacher/profile/address.vue?vue&type=template&id=55259c66& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_template_id_55259c66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./address.vue?vue&type=template&id=55259c66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/address.vue?vue&type=template&id=55259c66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_template_id_55259c66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_template_id_55259c66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/teacher/profile/avatar.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/teacher/profile/avatar.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _avatar_vue_vue_type_template_id_379f5457___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar.vue?vue&type=template&id=379f5457& */ "./resources/js/components/teacher/profile/avatar.vue?vue&type=template&id=379f5457&");
/* harmony import */ var _avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar.vue?vue&type=script&lang=js& */ "./resources/js/components/teacher/profile/avatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _avatar_vue_vue_type_template_id_379f5457___WEBPACK_IMPORTED_MODULE_0__["render"],
  _avatar_vue_vue_type_template_id_379f5457___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/teacher/profile/avatar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/teacher/profile/avatar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/teacher/profile/avatar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./avatar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/avatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/teacher/profile/avatar.vue?vue&type=template&id=379f5457&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/teacher/profile/avatar.vue?vue&type=template&id=379f5457& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_template_id_379f5457___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./avatar.vue?vue&type=template&id=379f5457& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/avatar.vue?vue&type=template&id=379f5457&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_template_id_379f5457___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_template_id_379f5457___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/teacher/profile/channel.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/teacher/profile/channel.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _channel_vue_vue_type_template_id_90d74416___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./channel.vue?vue&type=template&id=90d74416& */ "./resources/js/components/teacher/profile/channel.vue?vue&type=template&id=90d74416&");
/* harmony import */ var _channel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./channel.vue?vue&type=script&lang=js& */ "./resources/js/components/teacher/profile/channel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _channel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _channel_vue_vue_type_template_id_90d74416___WEBPACK_IMPORTED_MODULE_0__["render"],
  _channel_vue_vue_type_template_id_90d74416___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/teacher/profile/channel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/teacher/profile/channel.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/teacher/profile/channel.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_channel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./channel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/channel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_channel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/teacher/profile/channel.vue?vue&type=template&id=90d74416&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/teacher/profile/channel.vue?vue&type=template&id=90d74416& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_channel_vue_vue_type_template_id_90d74416___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./channel.vue?vue&type=template&id=90d74416& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/channel.vue?vue&type=template&id=90d74416&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_channel_vue_vue_type_template_id_90d74416___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_channel_vue_vue_type_template_id_90d74416___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/teacher/profile/phone.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/teacher/profile/phone.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _phone_vue_vue_type_template_id_3397c140___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.vue?vue&type=template&id=3397c140& */ "./resources/js/components/teacher/profile/phone.vue?vue&type=template&id=3397c140&");
/* harmony import */ var _phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone.vue?vue&type=script&lang=js& */ "./resources/js/components/teacher/profile/phone.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _phone_vue_vue_type_template_id_3397c140___WEBPACK_IMPORTED_MODULE_0__["render"],
  _phone_vue_vue_type_template_id_3397c140___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/teacher/profile/phone.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/teacher/profile/phone.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/teacher/profile/phone.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./phone.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/phone.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/teacher/profile/phone.vue?vue&type=template&id=3397c140&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/teacher/profile/phone.vue?vue&type=template&id=3397c140& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_phone_vue_vue_type_template_id_3397c140___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./phone.vue?vue&type=template&id=3397c140& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/phone.vue?vue&type=template&id=3397c140&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_phone_vue_vue_type_template_id_3397c140___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_phone_vue_vue_type_template_id_3397c140___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/teacher/profile/subject.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/teacher/profile/subject.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subject_vue_vue_type_template_id_f96e0cc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subject.vue?vue&type=template&id=f96e0cc4& */ "./resources/js/components/teacher/profile/subject.vue?vue&type=template&id=f96e0cc4&");
/* harmony import */ var _subject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subject.vue?vue&type=script&lang=js& */ "./resources/js/components/teacher/profile/subject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _subject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _subject_vue_vue_type_template_id_f96e0cc4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _subject_vue_vue_type_template_id_f96e0cc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/teacher/profile/subject.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/teacher/profile/subject.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/teacher/profile/subject.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./subject.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/subject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/teacher/profile/subject.vue?vue&type=template&id=f96e0cc4&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/teacher/profile/subject.vue?vue&type=template&id=f96e0cc4& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_subject_vue_vue_type_template_id_f96e0cc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./subject.vue?vue&type=template&id=f96e0cc4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/subject.vue?vue&type=template&id=f96e0cc4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_subject_vue_vue_type_template_id_f96e0cc4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_subject_vue_vue_type_template_id_f96e0cc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/teacher/profile/username.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/teacher/profile/username.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _username_vue_vue_type_template_id_7e8273d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./username.vue?vue&type=template&id=7e8273d4& */ "./resources/js/components/teacher/profile/username.vue?vue&type=template&id=7e8273d4&");
/* harmony import */ var _username_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./username.vue?vue&type=script&lang=js& */ "./resources/js/components/teacher/profile/username.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _username_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _username_vue_vue_type_template_id_7e8273d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _username_vue_vue_type_template_id_7e8273d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/teacher/profile/username.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/teacher/profile/username.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/teacher/profile/username.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_username_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./username.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/username.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_username_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/teacher/profile/username.vue?vue&type=template&id=7e8273d4&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/teacher/profile/username.vue?vue&type=template&id=7e8273d4& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_username_vue_vue_type_template_id_7e8273d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./username.vue?vue&type=template&id=7e8273d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/teacher/profile/username.vue?vue&type=template&id=7e8273d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_username_vue_vue_type_template_id_7e8273d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_username_vue_vue_type_template_id_7e8273d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/teacherProfile.js":
/*!****************************************!*\
  !*** ./resources/js/teacherProfile.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component("teacher-profile", __webpack_require__(/*! ./components/TeacherProfile.vue */ "./resources/js/components/TeacherProfile.vue")["default"]);
var element = document.getElementById("teacher-profile");

if (typeof element != "undefined" && element != null) {
  var cart = new Vue({
    el: "#teacher-profile"
  });
}

/***/ }),

/***/ 16:
/*!**********************************************!*\
  !*** multi ./resources/js/teacherProfile.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\bridyc\resources\js\teacherProfile.js */"./resources/js/teacherProfile.js");


/***/ })

/******/ });
=======
!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=16)}({"15tO":function(t,e,i){var n=i("hcby");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(n,r);n.locals&&(t.exports=n.locals)},16:function(t,e,i){t.exports=i("Adtb")},"4PEM":function(t,e,i){var n=i("R21m");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(n,r);n.locals&&(t.exports=n.locals)},"5ZeN":function(t,e,i){"use strict";var n={name:"picture-input",props:{width:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},height:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},margin:{type:[String,Number],default:0},accept:{type:String,default:"image/*"},size:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},name:{type:String,default:null},id:{type:[String,Number],default:null},buttonClass:{type:String,default:"btn btn-primary button"},removeButtonClass:{type:String,default:"btn btn-secondary button secondary"},aspectButtonClass:{type:String,default:"btn btn-secondary button secondary"},prefill:{type:[String,File],default:""},prefillOptions:{type:Object,default:()=>({})},crop:{type:Boolean,default:!0},radius:{type:[String,Number],default:0},removable:{type:Boolean,default:!1},hideChangeButton:{type:Boolean,default:!1},autoToggleAspectRatio:{type:Boolean,default:!1},toggleAspectRatio:{type:Boolean,default:!1},changeOnClick:{type:Boolean,default:!0},plain:{type:Boolean,default:!1},zIndex:{type:Number,default:1e4},alertOnError:{type:Boolean,default:!0},customStrings:{type:Object,default:()=>({})}},watch:{prefill(){this.prefill?this.preloadImage(this.prefill,this.prefillOptions):this.removeImage()}},data:()=>({imageSelected:!1,previewHeight:0,previewWidth:0,draggingOver:!1,canvasWidth:0,canvasHeight:0,strings:{upload:"<p>Your device does not support file uploading.</p>",drag:"Drag an image or <br>click here to select a file",tap:"Tap here to select a photo <br>from your gallery",change:"Change Photo",aspect:"Landscape/Portrait",remove:"Remove Photo",select:"Select a Photo",selected:"<p>Photo successfully selected!</p>",fileSize:"The file size exceeds the limit",fileType:"This file type is not supported."}}),mounted(){if(this.updateStrings(),this.prefill&&this.preloadImage(this.prefill,this.prefillOptions),this.$nextTick(()=>{window.addEventListener("resize",this.onResize),this.onResize()}),this.supportsPreview){this.pixelRatio=Math.round(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI);const t=this.$refs.previewCanvas;t.getContext&&(this.context=t.getContext("2d"),this.context.scale(this.pixelRatio,this.pixelRatio))}"image/*"!==this.accept&&(this.fileTypes=this.accept.split(","),this.fileTypes=this.fileTypes.map(t=>t.trim())),this.canvasWidth=this.width,this.canvasHeight=this.height,this.$on("error",this.onError)},beforeDestroy(){window.removeEventListener("resize",this.onResize),this.$off("error",this.onError)},methods:{updateStrings(){for(let t in this.customStrings)t in this.strings&&"string"==typeof this.customStrings[t]&&(this.strings[t]=this.customStrings[t])},onClick(){this.imageSelected?(this.changeOnClick&&this.selectImage(),this.$emit("click")):this.selectImage()},onResize(){this.resizeCanvas(),this.imageObject&&this.drawImage(this.imageObject)},onDragStart(){this.supportsDragAndDrop&&(this.draggingOver=!0)},onDragStop(){this.supportsDragAndDrop&&(this.draggingOver=!1)},onFileDrop(t){this.onDragStop(),this.onFileChange(t)},onFileChange(t,e){let i=t.target.files||t.dataTransfer.files;if(i.length)if(i[0].size<=0||i[0].size>1024*this.size*1024)this.$emit("error",{type:"fileSize",fileSize:i[0].size,fileType:i[0].type,fileName:i[0].name,message:this.strings.fileSize+" ("+this.size+"MB)"});else if(i[0].name!==this.fileName||i[0].size!==this.fileSize||this.fileModified!==i[0].lastModified){if(this.file=i[0],this.fileName=i[0].name,this.fileSize=i[0].size,this.fileModified=i[0].lastModified,this.fileType=i[0].type,"image/*"===this.accept){if("image/"!==i[0].type.substr(0,6))return}else if(-1===this.fileTypes.indexOf(i[0].type))return void this.$emit("error",{type:"fileType",fileSize:i[0].size,fileType:i[0].type,fileName:i[0].name,message:this.strings.fileType});this.imageSelected=!0,this.image="",this.supportsPreview?this.loadImage(i[0],e||!1):e?this.$emit("prefill"):this.$emit("change",this.image)}},onError(t){this.alertOnError&&alert(t.message)},loadImage(t,e){this.getEXIFOrientation(t,i=>{this.setOrientation(i);let n=new FileReader;n.onload=t=>{this.image=t.target.result,e?this.$emit("prefill"):this.$emit("change",this.image),this.imageObject=new Image,this.imageObject.onload=()=>{if(this.autoToggleAspectRatio){this.getOrientation(this.canvasWidth,this.canvasHeight)!==this.getOrientation(this.imageObject.width,this.imageObject.height)&&this.rotateCanvas()}this.drawImage(this.imageObject)},this.imageObject.src=this.image},n.readAsDataURL(t)})},drawImage(t){this.imageWidth=t.width,this.imageHeight=t.height,this.imageRatio=t.width/t.height;let e=0,i=0,n=this.previewWidth,r=this.previewHeight;const s=this.previewWidth/this.previewHeight;this.crop?this.imageRatio>=s?(n=r*this.imageRatio,e=(this.previewWidth-n)/2):(r=n/this.imageRatio,i=(this.previewHeight-r)/2):this.imageRatio>=s?(r=n/this.imageRatio,i=(this.previewHeight-r)/2):(n=r*this.imageRatio,e=(this.previewWidth-n)/2);const a=this.$refs.previewCanvas;a.style.background="none",a.width=this.previewWidth*this.pixelRatio,a.height=this.previewHeight*this.pixelRatio,this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,a.width,a.height),this.rotate&&(this.context.translate(e*this.pixelRatio,i*this.pixelRatio),this.context.translate(n/2*this.pixelRatio,r/2*this.pixelRatio),this.context.rotate(this.rotate),e=-n/2,i=-r/2),this.context.drawImage(t,e*this.pixelRatio,i*this.pixelRatio,n*this.pixelRatio,r*this.pixelRatio)},selectImage(){this.$refs.fileInput.click()},removeImage(){this.$refs.fileInput.value="",this.$refs.fileInput.type="",this.$refs.fileInput.type="file",this.fileName="",this.fileType="",this.fileSize=0,this.fileModified=0,this.imageSelected=!1,this.image="",this.file=null,this.imageObject=null,this.$refs.previewCanvas.style.backgroundColor="rgba(200,200,200,.25)",this.$refs.previewCanvas.width=this.previewWidth*this.pixelRatio,this.$emit("remove")},rotateImage(){this.rotateCanvas(),this.imageObject&&this.drawImage(this.imageObject);let t=this.getOrientation(this.canvasWidth,this.canvasHeight);this.$emit("aspectratiochange",t)},resizeCanvas(){let t=this.canvasWidth/this.canvasHeight,e=this.$refs.container.clientWidth;(this.toggleAspectRatio||e!==this.containerWidth)&&(this.containerWidth=e,this.previewWidth=Math.min(this.containerWidth-2*this.margin,this.canvasWidth),this.previewHeight=this.previewWidth/t)},getOrientation(t,e){let i="square";return t>e?i="landscape":t<e&&(i="portrait"),i},switchCanvasOrientation(){const t=this.canvasWidth,e=this.canvasHeight;this.canvasWidth=e,this.canvasHeight=t},rotateCanvas(){this.switchCanvasOrientation(),this.resizeCanvas()},setOrientation(t){this.rotate=!1,8===t?this.rotate=-Math.PI/2:6===t?this.rotate=Math.PI/2:3===t&&(this.rotate=-Math.PI)},getEXIFOrientation(t,e){var i=new FileReader;i.onload=t=>{var i=new DataView(t.target.result);if(65496!==i.getUint16(0,!1))return e(-2);for(var n=i.byteLength,r=2;r<n;){var s=i.getUint16(r,!1);if(r+=2,65505===s){if(1165519206!==i.getUint32(r+=2,!1))return e(-1);var a=18761===i.getUint16(r+=6,!1);r+=i.getUint32(r+4,a);var o=i.getUint16(r,a);r+=2;for(var l=0;l<o;l++)if(274===i.getUint16(r+12*l,a))return e(i.getUint16(r+12*l+8,a))}else{if(65280!=(65280&s))break;r+=i.getUint16(r,!1)}}return e(-1)},i.readAsArrayBuffer(t.slice(0,65536))},preloadImage(t,e){let i=window.File;try{new i([],"")}catch(t){i=class extends Blob{constructor(t,e,i={}){super(t,i),this.lastModifiedDate=new Date,this.lastModified=+this.lastModifiedDate,this.name=e}}}if(e=Object.assign({},e),"object"==typeof t)return this.imageSelected=!0,this.image="",void(this.supportsPreview?this.loadImage(t,!0):this.$emit("prefill"));let n=new Headers;n.append("Accept","image/*"),fetch(t,{method:"GET",mode:"cors",headers:n}).then(t=>t.blob()).then(n=>{let r={target:{files:[]}};const s=e.fileName||t.split("/").slice(-1)[0];let a=e.mediaType||"image/"+(e.fileType||s.split(".").slice(-1)[0]);a=a.replace("jpg","jpeg"),r.target.files[0]=new i([n],s,{type:a}),this.onFileChange(r,!0)}).catch(t=>{this.$emit("error",{type:"failedPrefill",message:"Failed loading prefill image: "+t})})}},computed:{supportsUpload(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;const t=document.createElement("input");return t.type="file",!t.disabled},supportsPreview:()=>window.FileReader&&!!window.CanvasRenderingContext2D,supportsDragAndDrop(){const t=document.createElement("div");return("draggable"in t||"ondragstart"in t&&"ondrop"in t)&&!("ontouchstart"in window||navigator.msMaxTouchPoints)},computedClasses(){const t={};return t["dragging-over"]=this.draggingOver,t},fontSize(){return Math.min(.04*this.previewWidth,21)+"px"}}},r=(i("FD01"),i("KHd+")),s=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"container",staticClass:"picture-input",attrs:{id:"picture-input"}},[t.supportsUpload?t.supportsPreview?i("div",[i("div",{staticClass:"preview-container",style:{maxWidth:t.previewWidth+"px",height:t.previewHeight+"px",borderRadius:t.radius+"%"}},[i("canvas",{ref:"previewCanvas",staticClass:"picture-preview",class:t.computedClasses,style:{height:t.previewHeight+"px",zIndex:t.zIndex+1},on:{drag:function(t){t.stopPropagation(),t.preventDefault()},dragover:function(t){t.stopPropagation(),t.preventDefault()},dragstart:function(e){return e.stopPropagation(),e.preventDefault(),t.onDragStart(e)},dragenter:function(e){return e.stopPropagation(),e.preventDefault(),t.onDragStart(e)},dragend:function(e){return e.stopPropagation(),e.preventDefault(),t.onDragStop(e)},dragleave:function(e){return e.stopPropagation(),e.preventDefault(),t.onDragStop(e)},drop:function(e){return e.stopPropagation(),e.preventDefault(),t.onFileDrop(e)},click:function(e){return e.preventDefault(),t.onClick(e)}}}),t._v(" "),t.imageSelected||t.plain?t._e():i("div",{staticClass:"picture-inner",style:{top:-t.previewHeight+"px",marginBottom:-t.previewHeight+"px",fontSize:t.fontSize,borderRadius:t.radius+"%",zIndex:t.zIndex+2}},[t.supportsDragAndDrop?i("span",{staticClass:"picture-inner-text",domProps:{innerHTML:t._s(t.strings.drag)}}):i("span",{staticClass:"picture-inner-text",domProps:{innerHTML:t._s(t.strings.tap)}})])]),t._v(" "),t.imageSelected&&!t.hideChangeButton?i("button",{class:t.buttonClass,on:{click:function(e){return e.preventDefault(),t.selectImage(e)}}},[t._v(t._s(t.strings.change))]):t._e(),t._v(" "),t.imageSelected&&t.removable?i("button",{class:t.removeButtonClass,on:{click:function(e){return e.preventDefault(),t.removeImage(e)}}},[t._v(t._s(t.strings.remove))]):t._e(),t._v(" "),t.imageSelected&&t.toggleAspectRatio&&t.width!==t.height?i("button",{class:t.aspectButtonClass,on:{click:function(e){return e.preventDefault(),t.rotateImage(e)}}},[t._v(t._s(t.strings.aspect))]):t._e()]):i("div",[t.imageSelected?i("div",[i("div",{domProps:{innerHTML:t._s(t.strings.selected)}}),t._v(" "),t.hideChangeButton?t._e():i("button",{class:t.buttonClass,on:{click:function(e){return e.preventDefault(),t.selectImage(e)}}},[t._v(t._s(t.strings.change))]),t._v(" "),t.removable?i("button",{class:t.removeButtonClass,on:{click:function(e){return e.preventDefault(),t.removeImage(e)}}},[t._v(t._s(t.strings.remove))]):t._e()]):i("button",{class:t.buttonClass,on:{click:function(e){return e.preventDefault(),t.selectImage(e)}}},[t._v(t._s(t.strings.select))])]):i("div",{domProps:{innerHTML:t._s(t.strings.upload)}}),t._v(" "),i("input",{ref:"fileInput",attrs:{type:"file",name:t.name,id:t.id,accept:t.accept},on:{change:t.onFileChange}})])}),[],!1,null,"5080a0f2",null);e.a=s.exports},"9tPo":function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var i=e.protocol+"//"+e.host,n=i+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var r,s=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?t:(r=0===s.indexOf("//")?s:0===s.indexOf("/")?i+s:n+s.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}},Adtb:function(t,e,i){Vue.component("teacher-profile",i("flvn").default);var n=document.getElementById("teacher-profile");if(void 0!==n&&null!=n)new Vue({el:"#teacher-profile"})},FD01:function(t,e,i){"use strict";var n=i("15tO");i.n(n).a},I1BE:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var r=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),s=n.sources.map((function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"}));return[i].concat(s).concat([r]).join("\n")}var a;return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i})).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(n[s]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),e.push(a))}},e}},"KHd+":function(t,e,i){"use strict";function n(t,e,i,n,r,s,a,o){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=i,u._compiled=!0),n&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=l):r&&(l=o?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:u}}i.d(e,"a",(function(){return n}))},R21m:function(t,e,i){(t.exports=i("I1BE")(!1)).push([t.i,'fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:"";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#41b883;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{-webkit-animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__spinner:after{-webkit-animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input:-ms-input-placeholder{color:#35495e}.multiselect__input::-moz-placeholder{color:#35495e}.multiselect__input::-ms-input-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:"\\D7";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:""}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@-webkit-keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}@keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}',""])},YLx5:function(t,e,i){"use strict";var n=i("4PEM");i.n(n).a},"aET+":function(t,e,i){var n,r,s={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=n.apply(this,arguments)),r}),o=function(t,e){return e?e.querySelector(t):document.querySelector(t)},l=function(t){var e={};return function(t,i){if("function"==typeof t)return t();if(void 0===e[t]){var n=o.call(this,t,i);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),u=null,c=0,p=[],h=i("9tPo");function d(t,e){for(var i=0;i<t.length;i++){var n=t[i],r=s[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(b(n.parts[a],e))}else{var o=[];for(a=0;a<n.parts.length;a++)o.push(b(n.parts[a],e));s[n.id]={id:n.id,refs:1,parts:o}}}}function f(t,e){for(var i=[],n={},r=0;r<t.length;r++){var s=t[r],a=e.base?s[0]+e.base:s[0],o={css:s[1],media:s[2],sourceMap:s[3]};n[a]?n[a].parts.push(o):i.push(n[a]={id:a,parts:[o]})}return i}function m(t,e){var i=l(t.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=p[p.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),p.push(e);else if("bottom"===t.insertAt)i.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=l(t.insertAt.before,i);i.insertBefore(e,r)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=p.indexOf(t);e>=0&&p.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return i.nc}();n&&(t.attrs.nonce=n)}return _(e,t.attrs),m(t,e),e}function _(t,e){Object.keys(e).forEach((function(i){t.setAttribute(i,e[i])}))}function b(t,e){var i,n,r,s;if(e.transform&&t.css){if(!(s="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=s}if(e.singleton){var a=c++;i=u||(u=g(e)),n=w.bind(null,i,a,!1),r=w.bind(null,i,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",_(e,t.attrs),m(t,e),e}(e),n=C.bind(null,i,e),r=function(){v(i),i.href&&URL.revokeObjectURL(i.href)}):(i=g(e),n=S.bind(null,i),r=function(){v(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var i=f(t,e);return d(i,e),function(t){for(var n=[],r=0;r<i.length;r++){var a=i[r];(o=s[a.id]).refs--,n.push(o)}t&&d(f(t,e),e);for(r=0;r<n.length;r++){var o;if(0===(o=n[r]).refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete s[o.id]}}}};var y,x=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function w(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var s=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function S(t,e){var i=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}function C(t,e,i){var n=i.css,r=i.sourceMap,s=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||s)&&(n=h(n)),r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([n],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(a),o&&URL.revokeObjectURL(o)}},flvn:function(t,e,i){"use strict";i.r(e);var n={data:function(){return{usernameData:"",userNameEditing:!1,userName:{username:""},userNameError:{username:""},userId:""}},props:{username:{type:String,default:null},id:{type:Number,default:null}},created:function(){this.usernameData=this.username,this.userId=this.id},mounted:function(){},methods:{editTheUserName:function(){this.userNameEditing=!0},userNameForm:function(){var t=this;this.$validator.validate().then((function(e){e&&axios.post("/api/profile/teacher/edit/username/"+t.userId,t.userName).then((function(e){!0===e.data.message&&(Vue.toasted.success("User name is succefully created",{position:"top-center",duration:5e3}),t.usernameData=t.userName.username,t.userNameEditing=!1,t.urlChanger(t.usernameData),window.location.reload())})).catch((function(e){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3}),e.response.data.errors.username&&(t.userNameError.username=e.response.data.errors.username[0])}))}))},cancelEditing:function(){this.userNameEditing=!1},urlChanger:function(t){var e=window.location.origin,i=window.location.pathname.split("/");i[4]=t,window.history.pushState("username","on-profile",e+i.join("/"))}}},r=i("KHd+"),s=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"username"},[t.userNameEditing?t._e():i("div",{staticClass:"text-center"},[t._v("\n            User Name: "),i("strong",[t._v(t._s(t.usernameData))]),t._v(" "),i("button",{staticClass:"btn mt-n2 edit-btn",attrs:{"data-toggle":"tooltip",title:"Edit"},on:{click:function(e){return t.editTheUserName()}}},[i("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}})])]),t._v(" "),t.userNameEditing?i("div",{staticClass:"container mx-auto"},[i("form",{on:{submit:function(e){return e.preventDefault(),t.userNameForm()}}},[i("div",{staticClass:"form-group row mx-5",class:{"has-error":t.errors.has("userNameError.username")||""!=t.userNameError.username}},[i("label",{attrs:{col:"col-sm-3 col-form-label"}},[t._v("Username: ")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.userName.username,expression:"userName.username"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"col-sm-9 ml-4",class:{"form-control":!0,"is-invalid":t.errors.has("username")},attrs:{id:"username","data-vv-delay":"20",name:"username",type:"text",placeholder:"Enter your favorite user-name"},domProps:{value:t.userName.username},on:{input:function(e){e.target.composing||t.$set(t.userName,"username",e.target.value)}}}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("username"),expression:"errors.has('username')"}],staticClass:"text-danger text-center"},[t._v(t._s(t.errors.first("username")))]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.userNameError.username,expression:"userNameError.username != ''"}],staticClass:"help is-danger text-center"},[t._v(t._s(t.userNameError.username))])]),t._v(" "),i("div",{staticClass:"ml-5"},[i("button",{staticClass:"btn btn-warning",attrs:{type:"btn"},on:{click:function(e){return t.cancelEditing()}}},[t._v("Cancel")]),t._v(" "),i("button",{staticClass:"btn btnsubmit mt-n2",attrs:{type:"submit"}},[t._v("Submit")])])])]):t._e()])}),[],!1,null,null,null).exports,a={data:function(){return{statesData:[],districtsData:[],villagesData:[],userInformationData:{},userFormData:{state_id:"",district_id:"",village_id:""},serverErrors:{state_id:"",district_id:"",village_id:""},addressDataChecker:!0,userId:""}},props:{states:{type:Array,default:null},districts:{type:Array,default:null},villages:{type:Array,default:null},userinformation:{type:Object,default:null},id:{type:Number,default:null}},created:function(){this.userId=this.id,this.statesData=this.states,this.districtsData=this.districts,this.villagesData=this.villages,this.userInformationData=this.userinformation,null===this.userInformationData&&(this.addressDataChecker=!1),console.log(this.channelsData)},methods:{addressForm:function(){var t=this;this.$validator.validate().then((function(e){e&&axios.post("/api/profile/teacher/edit/address/"+t.userId,t.userFormData).then((function(e){!0===e.data.message&&(Vue.toasted.success("Address is succefully created",{position:"top-center",duration:5e3}),t.userInformationData={},t.userInformationData=e.data.userData,t.addressDataChecker=!0)})).catch((function(e){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3}),e.response.data.errors.channel_id&&(t.serverErrors.channel_id=e.response.data.errors.channel_id[0]),e.response.data.errors.village_id&&(t.serverErrors.village_id=e.response.data.errors.village_id[0]),e.response.data.errors.district_id&&(t.serverErrors.district_id=e.response.data.errors.district_id[0]),e.response.data.errors.village_id&&(t.serverErrors.village_id=e.response.data.errors.village_id[0])}))}))},editAddress:function(){this.addressDataChecker=!1,this.userFormData.state_id=this.userInformationData.state.id,this.userFormData.district_id=this.userInformationData.district.id,this.userFormData.village_id=this.userInformationData.village.id},cancelForm:function(){this.addressDataChecker=!0}}},o=Object(r.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"address"},[t.addressDataChecker?i("div",{staticClass:"address-display"},[i("div",[i("div",{staticClass:"row mx-0"},[i("div",{staticClass:"col-sm-6"},[i("strong",[t._v("Locality/Village :")]),t._v(" "),i("span",[t._v(t._s(t.userInformationData.village.name))])])]),t._v(" "),i("div",{staticClass:"row mx-0"},[i("div",{staticClass:"col-sm-6"},[i("strong",[t._v("District :")]),t._v(" "),i("span",[t._v(t._s(t.userInformationData.district.name))])]),t._v(" "),i("div",{staticClass:"col-sm-6"},[i("strong",[t._v("State :")]),t._v(" "),i("span",[t._v(t._s(t.userInformationData.state.name))])])]),t._v(" "),i("button",{staticClass:"btn edit-btn",attrs:{"data-toggle":"tooltip",title:"Edit"},on:{click:function(e){return t.editAddress()}}},[i("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}})])])]):t._e(),t._v(" "),t.addressDataChecker?t._e():i("div",[i("form",{on:{submit:function(e){return e.preventDefault(),t.addressForm()}}},[i("div",{staticClass:"form-group row mx-0 mx-lg-5",class:{"has-error":t.errors.has("state")||""!=t.serverErrors.state_id}},[i("label",{attrs:{col:"col-sm-3 col-form-label"}},[t._v("STATE:")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.userFormData.state_id,expression:"userFormData.state_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control col-sm-9 ml-auto",attrs:{name:"state"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.userFormData,"state_id",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("Select State")]),t._v(" "),t._l(t.statesData,(function(e){return i("option",{key:e.id,domProps:{value:e.id}},[t._v("\n            "+t._s(e.name)+"\n          ")])}))],2),t._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("state"),expression:"errors.has('state')"}],staticClass:"is-invalid"}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("state"),expression:"errors.has('state')"}],staticClass:"text-danger text-center"},[t._v(t._s(t.errors.first("state")))]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.serverErrors.state_id,expression:"serverErrors.state_id != ''"}],staticClass:"text-danger text-center"},[t._v(t._s(t.serverErrors.state_id))])]),t._v(" "),i("div",{staticClass:"form-group row mx-0 mx-lg-5",class:{"has-error":t.errors.has("district")||""!=t.serverErrors.district_id}},[i("label",{attrs:{col:"col-sm-3 col-form-label"}},[t._v("DISTRICT:")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.userFormData.district_id,expression:"userFormData.district_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control col-sm-9 ml-auto",attrs:{name:"district"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.userFormData,"district_id",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("Select District")]),t._v(" "),t._l(t.districtsData,(function(e){return i("option",{key:e.id,domProps:{value:e.id}},[t._v("\n            "+t._s(e.name)+"\n          ")])}))],2),t._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("district"),expression:"errors.has('district')"}],staticClass:"is-invalid"}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("district"),expression:"errors.has('district')"}],staticClass:"text-danger text-center"},[t._v(t._s(t.errors.first("district")))]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.serverErrors.district_id,expression:"serverErrors.district_id != ''"}],staticClass:"text-danger text-center"},[t._v(t._s(t.serverErrors.district_id))])]),t._v(" "),i("div",{staticClass:"form-group row mx-0 mx-lg-5",class:{"has-error":t.errors.has("village")||""!=t.serverErrors.village_id}},[i("label",{attrs:{col:"col-sm-3 col-form-label"}},[t._v("LOCALITY:")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.userFormData.village_id,expression:"userFormData.village_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control col-sm-9 ml-auto",attrs:{name:"village"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.userFormData,"village_id",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("Select Locality")]),t._v(" "),t._l(t.villagesData,(function(e){return i("option",{key:e.id,domProps:{value:e.id}},[t._v("\n            "+t._s(e.name)+"\n          ")])}))],2),t._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("village"),expression:"errors.has('village')"}],staticClass:"is-invalid"}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("village"),expression:"errors.has('village')"}],staticClass:"text-danger text-center"},[t._v(t._s(t.errors.first("village")))]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.serverErrors.village_id,expression:"serverErrors.village_id != ''"}],staticClass:"text-danger text-center"},[t._v(t._s(t.serverErrors.village_id))])]),t._v(" "),i("div",{staticClass:"ml-5"},[i("button",{directives:[{name:"show",rawName:"v-show",value:null!=t.userInformationData,expression:"userInformationData != null"}],staticClass:"btn btn-warning",on:{click:function(e){return t.cancelForm()}}},[t._v("\n          Cancel\n        ")]),t._v(" "),i("button",{staticClass:"btn btnsubmit mt-n2",attrs:{type:"submit"}},[t._v("Submit")])])])])])}),[],!1,null,null,null).exports,l=i("jl8+"),u={data:function(){return{value:[],subjectsData:[],studentssubjectData:[],subjectsEntryChecker:!0,selectedSubjectValueStored:[],serverError:"",userId:""}},props:{subjects:{type:Array,default:null},studentssubject:{type:Array,default:null},id:{type:Number,default:null}},created:function(){this.subjectsData=this.subjects,this.studentssubjectData=this.studentssubject,this.userId=this.id},mounted:function(){this.studentssubjectData.length>0&&(this.subjectsEntryChecker=!0,this.theSubjectContainer())},methods:{cancelTheForm:function(){this.subjectsEntryChecker=!0},standardNameOnly:function(t){return"".concat(t.name)},submitSubjectsData:function(){var t=this;if(this.value.length){var e={subject_id:[]};this.value.map((function(t){e.subject_id.push(t.id)})),axios.post("/api/profile/teacher/edit/subject/"+this.userId,e).then((function(e){t.studentssubjectData=[],t.studentssubjectData=e.data.data,t.subjectsEntryChecker=!0,t.theSubjectContainer()})).catch((function(t){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})}))}else Vue.toasted.error("Field is empty",{position:"top-center",duration:5e3})},isEqual:function(t){var e=this,i=0;return t.map((function(t){e.selectedSubjectValueStored.map((function(e){t===e&&i++}))})),t.length>this.selectedSubjectValueStored||0===this.selectedSubjectValueStored.length||this.selectedSubjectValueStored.length!=i},theSubjectContainer:function(){var t=this;this.value=[],null!=this.studentssubjectData&&this.subjectsData.map((function(e){t.studentssubjectData.map((function(i){i.subject.name===e.name&&(t.value.push(e),t.selectedSubjectValueStored.push(i.subject.id))}))}))},editTheSubject:function(){this.subjectsEntryChecker=!1}},components:{Multiselect:i.n(l).a}},c=(i("YLx5"),Object(r.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[t.subjectsEntryChecker?i("div",[t._v("\n    Subjects you teach :\n    "),i("button",{staticClass:"btn mt-n2 edit-btn",on:{click:function(e){return t.editTheSubject()}}},[i("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}})]),t._v(" "),i("div",t._l(t.studentssubjectData,(function(e,n){return i("button",{key:n,staticClass:"btn btn-sm btnsubjects m-1"},[t._v("\n              "+t._s(e.subject.name)+"\n    ")])})),0)]):t._e(),t._v(" "),t.subjectsEntryChecker?t._e():i("div",[t._v("\n    Add subjects :\n    "),i("multiselect",{staticClass:"mt-3 mx-auto add-subject-teacher",attrs:{options:t.subjectsData,"track-by":"name","custom-label":t.standardNameOnly,multiple:!0,"tag-placeholder":"Select classes of your subjects","option-height":104},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.serverError,expression:"serverError != ''"}],staticClass:"text-danger text-center"},[t._v(t._s(t.serverError))]),t._v(" "),i("br"),t._v(" "),i("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.cancelTheForm()}}},[t._v("Cancel")]),t._v(" "),i("button",{staticClass:"btn btnsubmit mt-n2",attrs:{type:"submit"},on:{click:function(e){return t.submitSubjectsData()}}},[t._v("Submit")])],1)])}),[],!1,null,null,null).exports),p=i("5ZeN"),h={data:function(){return{imageError:"",userImage:"",userImageStatus:!1,userId:"",url:"/api/profile/teacher/image/upload/",domainUrl:location.origin,imageData:""}},props:{user:{type:Object,default:null}},components:{PictureInput:p.a},created:function(){console.log("avatar"),this.user.avatar&&(this.userImage=this.user.avatar,this.userImageStatus=!0),this.userId=this.user.id},mounted:function(){},methods:{onChange:function(t){this.$refs.pictureInput.image&&(this.imageData=this.$refs.pictureInput.image)},onImageSubmit:function(){var t=this;if(""!=this.imageData){var e=new FormData;e.append("image",this.imageData),axios.post(this.url+this.userId,e).then((function(e){t.userImage=e.data.image,t.userImageStatus=!0})).catch((function(e){e.response.data.errors.image&&(t.imageError=e.response.data.errors.image[0])}))}},editTheIcon:function(){this.userImageStatus=!1},canTheEdit:function(){this.userImageStatus=!0}}},d=Object(r.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.userImageStatus?i("div",{staticClass:"text-center mt-5 pt-4"},[i("img",{staticClass:"profile-picture rounded-circle shadow",attrs:{src:"default.jpg"===t.userImage?"/images/"+t.userImage:"/media/teacher/"+t.userId+"/profile/s-"+t.userImage,alt:"teacher profile pictures"}}),t._v(" "),i("a",{staticClass:"profile-edit p-2 rounded teacher-edit",attrs:{"data-toggle":"tooltip",title:"Change Picture"},on:{click:function(e){return t.editTheIcon()}}},[i("i",{staticClass:"fa fa-camera",attrs:{"aria-hidden":"true"}})])]):t._e(),t._v(" "),t.userImageStatus?t._e():i("div",{staticClass:"upload-profile-pic mt-5 pt-4"},[i("picture-input",{ref:"pictureInput",attrs:{width:"152",height:"150",margin:"16",accept:"image/jpeg, image/png",size:"10","button-class":"btn","custom-strings":{upload:"<h1>Bummer!</h1>",drag:"Upload your profile picture"},name:"image"},on:{change:t.onChange}}),t._v(" "),i("div",{staticClass:"text-center mt-2"},[""!=t.imageData?i("button",{staticClass:"btn btnsubmit mt-n2",attrs:{type:"button"},on:{click:function(e){return t.onImageSubmit()}}},[t._v("\n        Submit\n      ")]):t._e(),t._v(" "),""!=t.userImage?i("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.canTheEdit()}}},[t._v("\n        Cancel\n      ")]):t._e()]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.imageError,expression:"imageError"}],staticClass:"text-danger text-center"},[t._v(t._s(t.imageError))])],1)])}),[],!1,null,null,null).exports,f={data:function(){return{userInstituteData:{},userData:[],channelsData:[],channelChecker:!1,userFormData:{channel_id:"",school_name:""},serverErrors:{channel_id:"",school_name:""}}},props:{user:{type:Object,default:null},userinstitute:{type:Object,default:null},channel:{type:Array,default:null}},created:function(){this.userInstituteData=this.userinstitute,this.userData=this.user,this.channelsData=this.channel,console.log(this.userInstituteData),null!=this.userInstituteData&&(this.channelChecker=!0)},methods:{channelForm:function(){var t=this;this.$validator.validate().then((function(e){""==t.userFormData.school_name&&""==t.userFormData.channel_id&&(t.serverErrors.school_name="Any Either field name is required",t.serverErrors.channel_id="Any Either field name is required",e=!1),""!=t.userFormData.school_name&&""!=t.userFormData.channel_id&&(Vue.toasted.error("Choose only one option",{position:"top-center",duration:5e3}),""==t.userFormData.school_name&&t.userFormData.channel_id,e=!1),e&&(console.log("Called"),console.log(t.userFormData),axios.post("/api/profile/teacher/edit/channel/"+t.userData.id,t.userFormData).then((function(e){e.data.message&&(Vue.toasted.success("School  is succefully updated",{position:"top-center",duration:5e3}),t.userInstituteData={},t.userInstituteData=e.data.data,console.log(t.userInstituteData),t.channelChecker=!0)})).catch((function(e){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3}),e.response.data.errors.channel_id&&(t.serverErrors.channel_id=e.response.data.errors.channel_id[0])})))}))},editAddress:function(){this.channelChecker=!1}}},m=Object(r.a)(f,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"channelname"},[t.channelChecker?i("div",{staticClass:"mt-n4 mb-3 container text-center"},[i("h4",[t._v("Your Institute Name:")]),t._v(" "),null!=t.userInstituteData.channel_id?i("span",{staticClass:"text-capitalize"},[t._v(t._s(t.userInstituteData.channel.title))]):t._e(),t._v(" "),i("span",{staticClass:"text-capitalize text-center"},[t._v(t._s(t.userInstituteData.school_name))]),t._v(" "),i("button",{staticClass:"btn edit-btn",attrs:{"data-toggle":"tooltip",title:"Edit"},on:{click:function(e){return t.editAddress()}}},[i("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}})])]):t._e(),t._v(" "),t.channelChecker?t._e():i("div",[i("form",{on:{submit:function(e){return e.preventDefault(),t.channelForm()}}},[i("div",{staticClass:"form-group row mx-2",class:{"has-error":t.errors.has("channel")||""!=t.serverErrors.channel_id}},[i("label",{staticClass:"mt-2",attrs:{col:"col-sm-3 col-form-label"}},[t._v("Institute : ")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.userFormData.channel_id,expression:"userFormData.channel_id"},{name:"validate",rawName:"v-validate",value:"numeric",expression:"'numeric'"}],staticClass:"form-control col-sm-9 mx-lg-2",attrs:{name:"channel"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.userFormData,"channel_id",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("Select your Institute")]),t._v(" "),t._l(t.channelsData,(function(e){return i("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.title))])}))],2),t._v(" "),i("p",{staticClass:"text-danger mx-auto",staticStyle:{"font-size":"14px"}},[t._v("*If your institute is not listed here, you can always type it below.")]),t._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("channel"),expression:"errors.has('channel')"}],staticClass:"is-invalid"}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("channel"),expression:"errors.has('channel')"}],staticClass:"text-danger text-center"},[t._v(t._s(t.errors.first("channel")))]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.serverErrors.channel_id,expression:"serverErrors.channel_id != ''"}],staticClass:"text-danger text-center"},[t._v(t._s(t.serverErrors.channel_id))])]),t._v(" "),i("div",{staticClass:"form-group row mx-2",class:{"has-error":t.errors.has("serverErrors.school_name")||""!=t.serverErrors.school_name}},[i("label",{staticClass:"mt-2",attrs:{col:"col-sm-4 col-form-label"}},[t._v("Institute Name : ")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.userFormData.school_name,expression:"userFormData.school_name"}],staticClass:"form-control col-sm-8",class:{"form-control":!0,"is-invalid":t.errors.has("school_name")},attrs:{"data-vv-delay":"20",name:"school_name",type:"text",placeholder:"Type your institute name (optional)"},domProps:{value:t.userFormData.school_name},on:{input:function(e){e.target.composing||t.$set(t.userFormData,"school_name",e.target.value)}}}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("school_name"),expression:"errors.has('school_name')"}],staticClass:"text-danger text-center"},[t._v(t._s(t.errors.first("school_name")))]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.serverErrors.school_name,expression:"serverErrors.school_name != ''"}],staticClass:"help is-danger text-center"},[t._v(t._s(t.serverErrors.school_name))])]),t._v(" "),t._m(0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container text-center"},[e("button",{staticClass:"btn btnsubmit",attrs:{type:"submit"}},[this._v("Submit")])])}],!1,null,null,null).exports,v={data:function(){return{userData:{},phoneData:{phone:""},serverError:{phone:""},otpData:{otp:""},serverOtpError:{otp:""},phoneVerificationChecker:!0,otpVerificationCheck:!1}},props:{user:{type:Object,default:null}},created:function(){this.userData=this.user,null==this.userData.phone&&(this.phoneVerificationChecker=!1)},mounted:function(){console.log("Phone Mounted")},methods:{phoneVerificationForm:function(){var t=this;this.$validator.validate().then((function(e){e&&axios.post("/api/profile/teacher/edit/phone/number/"+t.userData.id,t.phoneData).then((function(e){!0===e.data.message&&(Vue.toasted.success("Phone number is succefully created",{position:"top-center",duration:5e3}),t.userData=e.data.user,t.phoneVerificationChecker=!0)})).catch((function(e){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3}),e.response.data.errors.phone&&(t.serverError.phone=e.response.data.errors.phone[0])}))}))},otpVerificationForm:function(){},verifyPhoneNumber:function(){axios.post("/api/profile/teacher/edit/phone/number/verify"+this.userData.id).then((function(t){t.data.message}),(function(t){t.status})).catch((function(t){Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})}))}}},g=Object(r.a)(v,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.phoneVerificationChecker?i("div",{staticClass:"mt-n4"},[i("h4",[t._v("Your Contact No :")]),t._v(" "),i("p",[t._v("\n      "+t._s(t.userData.phone)+"\n      "),null!=t.userData.phone_verified?i("span",{staticClass:"text-success"},[t._v("verified")]):t._e()])]):t._e(),t._v(" "),i("div",[t.phoneVerificationChecker?t._e():i("div",[i("form",{on:{submit:function(e){return e.preventDefault(),t.phoneVerificationForm()}}},[i("div",{staticClass:"form-group row mx-auto",class:{"has-error":t.errors.has("serverError.phone")||""!=t.serverError.phone}},[i("label",{attrs:{col:"col-sm-3 col-form-label"}},[t._v("Phone: ")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneData.phone,expression:"phoneData.phone"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:10|min:10",expression:"'required|numeric|max:10|min:10'"}],staticClass:"col-sm-9 mx-md-2",class:{"form-control":!0,"is-invalid":t.errors.has("phone")},attrs:{"data-vv-delay":"20",name:"phone",type:"text",placeholder:"Verify your phone"},domProps:{value:t.phoneData.phone},on:{input:function(e){e.target.composing||t.$set(t.phoneData,"phone",e.target.value)}}}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("phone"),expression:"errors.has('phone')"}],staticClass:"text-danger text-center"},[t._v(t._s(t.errors.first("phone")))]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.serverError.phone,expression:"serverError.phone != ''"}],staticClass:"text-danger text-center"},[t._v(t._s(t.serverError.phone))])]),t._v(" "),t._m(0)])]),t._v(" "),t.otpVerificationCheck?i("div",[i("form",{on:{submit:function(e){return e.preventDefault(),t.otpVerificationForm()}}},[i("div",{staticClass:"form-group row mx-auto",class:{"has-error":t.errors.has("serverOtpError.otp")||""!=t.serverOtpError.otp}},[i("label",{attrs:{col:"col-sm-3 col-form-label"}},[t._v("Phone: ")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.otpData.otp,expression:"otpData.otp"},{name:"validate",rawName:"v-validate",value:"required|numeric|min:6|max:6",expression:"'required|numeric|min:6|max:6'"}],staticClass:"col-sm-9 mx-md-2",class:{"form-control":!0,"is-invalid":t.errors.has("otp")},attrs:{"data-vv-delay":"20",name:"otp",type:"text",placeholder:"Verify your otp"},domProps:{value:t.otpData.otp},on:{input:function(e){e.target.composing||t.$set(t.otpData,"otp",e.target.value)}}}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("otp"),expression:"errors.has('otp')"}],staticClass:"text-danger text-center"},[t._v(t._s(t.errors.first("otp")))]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.serverOtpError.otp,expression:"serverOtpError.otp != ''"}],staticClass:"help is-danger text-center"},[t._v(t._s(t.serverOtpError.otp))])]),t._v(" "),t._m(1)])]):t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ml-md-5"},[e("button",{staticClass:"btn btnsubmit mt-n2",attrs:{type:"submit"}},[this._v("Submit")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ml-md-5"},[e("button",{staticClass:"btn btnsubmit mt-n2",attrs:{type:"submit"}},[this._v("Submit")])])}],!1,null,null,null).exports,_={data:function(){return{userData:{},channelsData:[],statesData:[],districtsData:[],villagesData:[],subjectsData:[],studentsubjectsData:[],userInformationData:{},userinstituteData:{}}},props:{user:{type:Object,default:null},channels:{type:Array,default:null},states:{type:Array,default:null},districts:{type:Array,default:null},villages:{type:Array,default:null},subjects:{type:Array,default:null},studentsubjects:{type:Array,default:null},userinformation:{type:Object,default:null},userinstitute:{type:Object,default:null}},created:function(){this.userData=this.user,this.channelsData=this.channels,this.statesData=this.states,this.districtsData=this.districts,this.villagesData=this.villages,this.subjectsData=this.subjects,this.studentsubjectsData=this.studentsubjects,this.userInformationData=this.userinformation,this.userinstituteData=this.userinstitute},mounted:function(){console.log(this.userData)},components:{username:s,"address-for-teacher":o,subject:c,avatar:d,channel:m,phone:g}},b=Object(r.a)(_,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"profile mx-auto px-lg-5"},[i("avatar",{attrs:{user:t.userData}}),t._v(" "),i("div",{staticClass:"mt-5"},[i("username",{attrs:{username:t.userData.username,id:t.userData.id}})],1),t._v(" "),i("br"),t._v(" "),i("br"),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"shadow py-5 mt-n4 mx-lg-5"},[i("div",{staticClass:"container mx-lg-5 px-md-5"},[i("address-for-teacher",{attrs:{states:t.statesData,districts:t.districtsData,villages:t.villagesData,userinformation:t.userInformationData,id:t.userData.id}})],1),t._v(" "),i("div",{staticClass:"mt-5 pt-3 mb-5 mx-lg-5 text-center"},[i("subject",{attrs:{subjects:t.subjectsData,studentssubject:t.studentsubjectsData,id:t.userData.id}})],1),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"row mt-5 mx-0"},[i("div",[i("channel",{attrs:{userinstitute:t.userinstituteData,user:t.userData,channel:t.channelsData}})],1)])])],1)}),[],!1,null,null,null);e.default=b.exports},hcby:function(t,e,i){(t.exports=i("I1BE")(!1)).push([t.i,"\n.picture-input[data-v-5080a0f2] {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n}\n.preview-container[data-v-5080a0f2] {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 auto;\n  cursor: pointer;\n  overflow: hidden;\n}\n.picture-preview[data-v-5080a0f2] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 10001;\n  box-sizing: border-box;\n  background-color: rgba(200,200,200,.25);\n}\n.picture-preview.dragging-over[data-v-5080a0f2] {\n  -webkit-filter: brightness(0.5);\n          filter: brightness(0.5);\n}\n.picture-inner[data-v-5080a0f2] {\n  position: relative;\n  z-index: 10002;\n  pointer-events: none;\n  box-sizing: border-box;\n  margin: 1em auto;\n  padding: 0.5em;\n  border: .3em dashed rgba(66,66,66,.15);\n  border-radius: 8px;\n  width: calc(100% - 2.5em);\n  height: calc(100% - 2.5em);\n  display: table;\n}\n.picture-inner .picture-inner-text[data-v-5080a0f2] {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 2em;\n  line-height: 1.5;\n}\nbutton[data-v-5080a0f2] {\n  margin: 1em .25em;\n  cursor: pointer;\n}\ninput[type=file][data-v-5080a0f2] {\n  display: none;\n}\n",""])},"jl8+":function(t,e,i){t.exports=function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=60)}([function(t,e){var i=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},function(t,e,i){var n=i(49)("wks"),r=i(30),s=i(0).Symbol,a="function"==typeof s;(t.exports=function(t){return n[t]||(n[t]=a&&s[t]||(a?s:r)("Symbol."+t))}).store=n},function(t,e,i){var n=i(5);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,i){var n=i(0),r=i(10),s=i(8),a=i(6),o=i(11),l=function(t,e,i){var u,c,p,h,d=t&l.F,f=t&l.G,m=t&l.S,v=t&l.P,g=t&l.B,_=f?n:m?n[e]||(n[e]={}):(n[e]||{}).prototype,b=f?r:r[e]||(r[e]={}),y=b.prototype||(b.prototype={});for(u in f&&(i=e),i)p=((c=!d&&_&&void 0!==_[u])?_:i)[u],h=g&&c?o(p,n):v&&"function"==typeof p?o(Function.call,p):p,_&&a(_,u,p,t&l.U),b[u]!=p&&s(b,u,h),v&&y[u]!=p&&(y[u]=p)};n.core=r,l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},function(t,e,i){t.exports=!i(7)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,i){var n=i(0),r=i(8),s=i(12),a=i(30)("src"),o=Function.toString,l=(""+o).split("toString");i(10).inspectSource=function(t){return o.call(t)},(t.exports=function(t,e,i,o){var u="function"==typeof i;u&&(s(i,"name")||r(i,"name",e)),t[e]!==i&&(u&&(s(i,a)||r(i,a,t[e]?""+t[e]:l.join(String(e)))),t===n?t[e]=i:o?t[e]?t[e]=i:r(t,e,i):(delete t[e],r(t,e,i)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||o.call(this)}))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,i){var n=i(13),r=i(25);t.exports=i(4)?function(t,e,i){return n.f(t,e,r(1,i))}:function(t,e,i){return t[e]=i,t}},function(t,e){var i={}.toString;t.exports=function(t){return i.call(t).slice(8,-1)}},function(t,e){var i=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=i)},function(t,e,i){var n=i(14);t.exports=function(t,e,i){if(n(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,n){return t.call(e,i,n)};case 3:return function(i,n,r){return t.call(e,i,n,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){var i={}.hasOwnProperty;t.exports=function(t,e){return i.call(t,e)}},function(t,e,i){var n=i(2),r=i(41),s=i(29),a=Object.defineProperty;e.f=i(4)?Object.defineProperty:function(t,e,i){if(n(t),e=s(e,!0),n(i),r)try{return a(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(t[e]=i.value),t}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports={}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,i){"use strict";var n=i(7);t.exports=function(t,e){return!!t&&n((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},function(t,e,i){var n=i(23),r=i(16);t.exports=function(t){return n(r(t))}},function(t,e,i){var n=i(53),r=Math.min;t.exports=function(t){return t>0?r(n(t),9007199254740991):0}},function(t,e,i){var n=i(11),r=i(23),s=i(28),a=i(19),o=i(64);t.exports=function(t,e){var i=1==t,l=2==t,u=3==t,c=4==t,p=6==t,h=5==t||p,d=e||o;return function(e,o,f){for(var m,v,g=s(e),_=r(g),b=n(o,f,3),y=a(_.length),x=0,w=i?d(e,y):l?d(e,0):void 0;y>x;x++)if((h||x in _)&&(v=b(m=_[x],x,g),t))if(i)w[x]=v;else if(v)switch(t){case 3:return!0;case 5:return m;case 6:return x;case 2:w.push(m)}else if(c)return!1;return p?-1:u||c?c:w}}},function(t,e,i){var n=i(5),r=i(0).document,s=n(r)&&n(r.createElement);t.exports=function(t){return s?r.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,i){var n=i(9);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e){t.exports=!1},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,i){var n=i(13).f,r=i(12),s=i(1)("toStringTag");t.exports=function(t,e,i){t&&!r(t=i?t:t.prototype,s)&&n(t,s,{configurable:!0,value:e})}},function(t,e,i){var n=i(49)("keys"),r=i(30);t.exports=function(t){return n[t]||(n[t]=r(t))}},function(t,e,i){var n=i(16);t.exports=function(t){return Object(n(t))}},function(t,e,i){var n=i(5);t.exports=function(t,e){if(!n(t))return t;var i,r;if(e&&"function"==typeof(i=t.toString)&&!n(r=i.call(t)))return r;if("function"==typeof(i=t.valueOf)&&!n(r=i.call(t)))return r;if(!e&&"function"==typeof(i=t.toString)&&!n(r=i.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){var i=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++i+n).toString(36))}},function(t,e,i){"use strict";var n=i(0),r=i(12),s=i(9),a=i(67),o=i(29),l=i(7),u=i(77).f,c=i(45).f,p=i(13).f,h=i(51).trim,d=n.Number,f=d,m=d.prototype,v="Number"==s(i(44)(m)),g="trim"in String.prototype,_=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var i,n,r,s=(e=g?e.trim():h(e,3)).charCodeAt(0);if(43===s||45===s){if(88===(i=e.charCodeAt(2))||120===i)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var a,l=e.slice(2),u=0,c=l.length;u<c;u++)if((a=l.charCodeAt(u))<48||a>r)return NaN;return parseInt(l,n)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof d&&(v?l((function(){m.valueOf.call(i)})):"Number"!=s(i))?a(new f(_(e)),i,d):_(e)};for(var b,y=i(4)?u(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;y.length>x;x++)r(f,b=y[x])&&!r(d,b)&&p(d,b,c(f,b));d.prototype=m,m.constructor=d,i(6)(n,"Number",d)}},function(t,e,i){"use strict";function n(t){return!(0===t||(!Array.isArray(t)||0!==t.length)&&t)}function r(t,e,i,n){return t.filter((function(t){return function(t,e){return void 0===t&&(t="undefined"),null===t&&(t="null"),!1===t&&(t="false"),-1!==t.toString().toLowerCase().indexOf(e.trim())}(n(t,i),e)}))}function s(t){return t.filter((function(t){return!t.$isLabel}))}function a(t,e){return function(i){return i.reduce((function(i,n){return n[t]&&n[t].length?(i.push({$groupLabel:n[e],$isLabel:!0}),i.concat(n[t])):i}),[])}}function o(t,e,n,s,a){return function(o){return o.map((function(o){var l;if(!o[n])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var u=r(o[n],t,e,a);return u.length?(l={},i.i(h.a)(l,s,o[s]),i.i(h.a)(l,n,u),l):[]}))}}var l=i(59),u=i(54),c=(i.n(u),i(95)),p=(i.n(c),i(31)),h=(i.n(p),i(58)),d=i(91),f=(i.n(d),i(98)),m=(i.n(f),i(92)),v=(i.n(m),i(88)),g=(i.n(v),i(97)),_=(i.n(g),i(89)),b=(i.n(_),i(96)),y=(i.n(b),i(93)),x=(i.n(y),i(90)),w=(i.n(x),function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(t){return e.reduce((function(t,e){return e(t)}),t)}});e.a={data:function(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(t,e){return n(t)?"":e?t[e]:t}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1}},mounted:function(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue:function(){return this.value||0===this.value?Array.isArray(this.value)?this.value:[this.value]:[]},filteredOptions:function(){var t=this.search||"",e=t.toLowerCase().trim(),i=this.options.concat();return i=this.internalSearch?this.groupValues?this.filterAndFlat(i,e,this.label):r(i,e,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(i):i,i=this.hideSelected?i.filter(function(t){return function(){return!t.apply(void 0,arguments)}}(this.isSelected)):i,this.taggable&&e.length&&!this.isExistingOption(e)&&("bottom"===this.tagPosition?i.push({isTag:!0,label:t}):i.unshift({isTag:!0,label:t})),i.slice(0,this.optionsLimit)},valueKeys:function(){var t=this;return this.trackBy?this.internalValue.map((function(e){return e[t.trackBy]})):this.internalValue},optionKeys:function(){var t=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map((function(e){return t.customLabel(e,t.label).toString().toLowerCase()}))},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("input",this.multiple?[]:null))},search:function(){this.$emit("search-change",this.search,this.id)}},methods:{getValue:function(){return this.multiple?this.internalValue:0===this.internalValue.length?null:this.internalValue[0]},filterAndFlat:function(t,e,i){return w(o(e,i,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(t)},flatAndStrip:function(t){return w(a(this.groupValues,this.groupLabel),s)(t)},updateSearch:function(t){this.search=t},isExistingOption:function(t){return!!this.options&&this.optionKeys.indexOf(t)>-1},isSelected:function(t){var e=this.trackBy?t[this.trackBy]:t;return this.valueKeys.indexOf(e)>-1},isOptionDisabled:function(t){return!!t.$isDisabled},getOptionLabel:function(t){if(n(t))return"";if(t.isTag)return t.label;if(t.$isLabel)return t.$groupLabel;var e=this.customLabel(t,this.label);return n(e)?"":e},select:function(t,e){if(t.$isLabel&&this.groupSelect)this.selectGroup(t);else if(!(-1!==this.blockKeys.indexOf(e)||this.disabled||t.$isDisabled||t.$isLabel)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==e||this.pointerDirty)){if(t.isTag)this.$emit("tag",t.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(t))return void("Tab"!==e&&this.removeElement(t));this.$emit("select",t,this.id),this.multiple?this.$emit("input",this.internalValue.concat([t]),this.id):this.$emit("input",t,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup:function(t){var e=this,i=this.options.find((function(i){return i[e.groupLabel]===t.$groupLabel}));if(i)if(this.wholeGroupSelected(i)){this.$emit("remove",i[this.groupValues],this.id);var n=this.internalValue.filter((function(t){return-1===i[e.groupValues].indexOf(t)}));this.$emit("input",n,this.id)}else{var r=i[this.groupValues].filter((function(t){return!(e.isOptionDisabled(t)||e.isSelected(t))}));this.$emit("select",r,this.id),this.$emit("input",this.internalValue.concat(r),this.id)}},wholeGroupSelected:function(t){var e=this;return t[this.groupValues].every((function(t){return e.isSelected(t)||e.isOptionDisabled(t)}))},wholeGroupDisabled:function(t){return t[this.groupValues].every(this.isOptionDisabled)},removeElement:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled&&!t.$isDisabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var n="object"===i.i(l.a)(t)?this.valueKeys.indexOf(t[this.trackBy]):this.valueKeys.indexOf(t);if(this.$emit("remove",t,this.id),this.multiple){var r=this.internalValue.slice(0,n).concat(this.internalValue.slice(n+1));this.$emit("input",r,this.id)}else this.$emit("input",null,this.id);this.closeOnSelect&&e&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var t=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick((function(){return t.$refs.search.focus()}))):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var t=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>t||"below"===this.openDirection||"bottom"===this.openDirection?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(t-40,this.maxHeight))}}}}},function(t,e,i){"use strict";var n=i(54),r=(i.n(n),i(31));i.n(r),e.a={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(t,e){return{"multiselect__option--highlight":t===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},groupHighlight:function(t,e){var i=this;if(!this.groupSelect)return["multiselect__option--group","multiselect__option--disabled"];var n=this.options.find((function(t){return t[i.groupLabel]===e.$groupLabel}));return n&&!this.wholeGroupDisabled(n)?["multiselect__option--group",{"multiselect__option--highlight":t===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(n)}]:"multiselect__option--disabled"},addPointerElement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",e=t.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet:function(t){this.pointer=t,this.pointerDirty=!0}}}},function(t,e,i){"use strict";var n=i(36),r=i(74),s=i(15),a=i(18);t.exports=i(72)(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,i=this._i++;return!t||i>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?i:"values"==e?t[i]:[i,t[i]])}),"values"),s.Arguments=s.Array,n("keys"),n("values"),n("entries")},function(t,e,i){"use strict";var n=i(31),r=(i.n(n),i(32)),s=i(33);e.a={name:"vue-multiselect",mixins:[r.a,s.a],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(t){return"and ".concat(t," more")}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{isSingleLabelVisible:function(){return(this.singleValue||0===this.singleValue)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible:function(){return!(this.internalValue.length||this.searchable&&this.isOpen)},visibleValues:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue:function(){return this.internalValue[0]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText:function(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectGroupLabelText:function(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.searchable||this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.preferredOpenDirection},showSearchInput:function(){return this.searchable&&(!this.hasSingleSelectedSlot||!this.visibleSingleValue&&0!==this.visibleSingleValue||this.isOpen)}}}},function(t,e,i){var n=i(1)("unscopables"),r=Array.prototype;null==r[n]&&i(8)(r,n,{}),t.exports=function(t){r[n][t]=!0}},function(t,e,i){var n=i(18),r=i(19),s=i(85);t.exports=function(t){return function(e,i,a){var o,l=n(e),u=r(l.length),c=s(a,u);if(t&&i!=i){for(;u>c;)if((o=l[c++])!=o)return!0}else for(;u>c;c++)if((t||c in l)&&l[c]===i)return t||c||0;return!t&&-1}}},function(t,e,i){var n=i(9),r=i(1)("toStringTag"),s="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,i,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?i:s?n(e):"Object"==(a=n(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,i){"use strict";var n=i(2);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,i){var n=i(0).document;t.exports=n&&n.documentElement},function(t,e,i){t.exports=!i(4)&&!i(7)((function(){return 7!=Object.defineProperty(i(21)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,i){var n=i(9);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,e,i){"use strict";function n(t){var e,i;this.promise=new t((function(t,n){if(void 0!==e||void 0!==i)throw TypeError("Bad Promise constructor");e=t,i=n})),this.resolve=r(e),this.reject=r(i)}var r=i(14);t.exports.f=function(t){return new n(t)}},function(t,e,i){var n=i(2),r=i(76),s=i(22),a=i(27)("IE_PROTO"),o=function(){},l=function(){var t,e=i(21)("iframe"),n=s.length;for(e.style.display="none",i(40).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;n--;)delete l.prototype[s[n]];return l()};t.exports=Object.create||function(t,e){var i;return null!==t?(o.prototype=n(t),i=new o,o.prototype=null,i[a]=t):i=l(),void 0===e?i:r(i,e)}},function(t,e,i){var n=i(79),r=i(25),s=i(18),a=i(29),o=i(12),l=i(41),u=Object.getOwnPropertyDescriptor;e.f=i(4)?u:function(t,e){if(t=s(t),e=a(e,!0),l)try{return u(t,e)}catch(t){}if(o(t,e))return r(!n.f.call(t,e),t[e])}},function(t,e,i){var n=i(12),r=i(18),s=i(37)(!1),a=i(27)("IE_PROTO");t.exports=function(t,e){var i,o=r(t),l=0,u=[];for(i in o)i!=a&&n(o,i)&&u.push(i);for(;e.length>l;)n(o,i=e[l++])&&(~s(u,i)||u.push(i));return u}},function(t,e,i){var n=i(46),r=i(22);t.exports=Object.keys||function(t){return n(t,r)}},function(t,e,i){var n=i(2),r=i(5),s=i(43);t.exports=function(t,e){if(n(t),r(e)&&e.constructor===t)return e;var i=s.f(t);return(0,i.resolve)(e),i.promise}},function(t,e,i){var n=i(10),r=i(0),s=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:i(24)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,i){var n=i(2),r=i(14),s=i(1)("species");t.exports=function(t,e){var i,a=n(t).constructor;return void 0===a||null==(i=n(a)[s])?e:r(i)}},function(t,e,i){var n=i(3),r=i(16),s=i(7),a=i(84),o="["+a+"]",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t,e,i){var r={},o=s((function(){return!!a[t]()||"​"!="​"[t]()})),l=r[t]=o?e(p):a[t];i&&(r[i]=l),n(n.P+n.F*o,"String",r)},p=c.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=c},function(t,e,i){var n,r,s,a=i(11),o=i(68),l=i(40),u=i(21),c=i(0),p=c.process,h=c.setImmediate,d=c.clearImmediate,f=c.MessageChannel,m=c.Dispatch,v=0,g={},_=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},b=function(t){_.call(t.data)};h&&d||(h=function(t){for(var e=[],i=1;arguments.length>i;)e.push(arguments[i++]);return g[++v]=function(){o("function"==typeof t?t:Function(t),e)},n(v),v},d=function(t){delete g[t]},"process"==i(9)(p)?n=function(t){p.nextTick(a(_,t,1))}:m&&m.now?n=function(t){m.now(a(_,t,1))}:f?(s=(r=new f).port2,r.port1.onmessage=b,n=a(s.postMessage,s,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts?(n=function(t){c.postMessage(t+"","*")},c.addEventListener("message",b,!1)):n="onreadystatechange"in u("script")?function(t){l.appendChild(u("script")).onreadystatechange=function(){l.removeChild(this),_.call(t)}}:function(t){setTimeout(a(_,t,1),0)}),t.exports={set:h,clear:d}},function(t,e){var i=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:i)(t)}},function(t,e,i){"use strict";var n=i(3),r=i(20)(5),s=!0;"find"in[]&&Array(1).find((function(){s=!1})),n(n.P+n.F*s,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(36)("find")},function(t,e,i){"use strict";var n,r,s,a,o=i(24),l=i(0),u=i(11),c=i(38),p=i(3),h=i(5),d=i(14),f=i(61),m=i(66),v=i(50),g=i(52).set,_=i(75)(),b=i(43),y=i(80),x=i(86),w=i(48),S=l.TypeError,C=l.process,D=C&&C.versions,O=D&&D.v8||"",E=l.Promise,k="process"==c(C),j=function(){},I=r=b.f,N=!!function(){try{var t=E.resolve(1),e=(t.constructor={})[i(1)("species")]=function(t){t(j,j)};return(k||"function"==typeof PromiseRejectionEvent)&&t.then(j)instanceof e&&0!==O.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),P=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},T=function(t,e){if(!t._n){t._n=!0;var i=t._c;_((function(){for(var n=t._v,r=1==t._s,s=0;i.length>s;)!function(e){var i,s,a,o=r?e.ok:e.fail,l=e.resolve,u=e.reject,c=e.domain;try{o?(r||(2==t._h&&F(t),t._h=1),!0===o?i=n:(c&&c.enter(),i=o(n),c&&(c.exit(),a=!0)),i===e.promise?u(S("Promise-chain cycle")):(s=P(i))?s.call(i,l,u):l(i)):u(n)}catch(t){c&&!a&&c.exit(),u(t)}}(i[s++]);t._c=[],t._n=!1,e&&!t._h&&L(t)}))}},L=function(t){g.call(l,(function(){var e,i,n,r=t._v,s=A(t);if(s&&(e=y((function(){k?C.emit("unhandledRejection",r,t):(i=l.onunhandledrejection)?i({promise:t,reason:r}):(n=l.console)&&n.error&&n.error("Unhandled promise rejection",r)})),t._h=k||A(t)?2:1),t._a=void 0,s&&e.e)throw e.v}))},A=function(t){return 1!==t._h&&0===(t._a||t._c).length},F=function(t){g.call(l,(function(){var e;k?C.emit("rejectionHandled",t):(e=l.onrejectionhandled)&&e({promise:t,reason:t._v})}))},V=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),T(e,!0))},$=function(t){var e,i=this;if(!i._d){i._d=!0,i=i._w||i;try{if(i===t)throw S("Promise can't be resolved itself");(e=P(t))?_((function(){var n={_w:i,_d:!1};try{e.call(t,u($,n,1),u(V,n,1))}catch(t){V.call(n,t)}})):(i._v=t,i._s=1,T(i,!1))}catch(t){V.call({_w:i,_d:!1},t)}}};N||(E=function(t){f(this,E,"Promise","_h"),d(t),n.call(this);try{t(u($,this,1),u(V,this,1))}catch(t){V.call(this,t)}},(n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=i(81)(E.prototype,{then:function(t,e){var i=I(v(this,E));return i.ok="function"!=typeof t||t,i.fail="function"==typeof e&&e,i.domain=k?C.domain:void 0,this._c.push(i),this._a&&this._a.push(i),this._s&&T(this,!1),i.promise},catch:function(t){return this.then(void 0,t)}}),s=function(){var t=new n;this.promise=t,this.resolve=u($,t,1),this.reject=u(V,t,1)},b.f=I=function(t){return t===E||t===a?new s(t):r(t)}),p(p.G+p.W+p.F*!N,{Promise:E}),i(26)(E,"Promise"),i(83)("Promise"),a=i(10).Promise,p(p.S+p.F*!N,"Promise",{reject:function(t){var e=I(this);return(0,e.reject)(t),e.promise}}),p(p.S+p.F*(o||!N),"Promise",{resolve:function(t){return w(o&&this===a?E:this,t)}}),p(p.S+p.F*!(N&&i(73)((function(t){E.all(t).catch(j)}))),"Promise",{all:function(t){var e=this,i=I(e),n=i.resolve,r=i.reject,s=y((function(){var i=[],s=0,a=1;m(t,!1,(function(t){var o=s++,l=!1;i.push(void 0),a++,e.resolve(t).then((function(t){l||(l=!0,i[o]=t,--a||n(i))}),r)})),--a||n(i)}));return s.e&&r(s.v),i.promise},race:function(t){var e=this,i=I(e),n=i.reject,r=y((function(){m(t,!1,(function(t){e.resolve(t).then(i.resolve,n)}))}));return r.e&&n(r.v),i.promise}})},function(t,e,i){"use strict";var n=i(3),r=i(10),s=i(0),a=i(50),o=i(48);n(n.P+n.R,"Promise",{finally:function(t){var e=a(this,r.Promise||s.Promise),i="function"==typeof t;return this.then(i?function(i){return o(e,t()).then((function(){return i}))}:t,i?function(i){return o(e,t()).then((function(){throw i}))}:t)}})},function(t,e,i){"use strict";var n=i(35),r=i(101),s=function(t){i(99)},a=i(100)(n.a,r.a,!1,s,null,null);e.a=a.exports},function(t,e,i){"use strict";e.a=function(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}},function(t,e,i){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(t){return n(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)})(t)}e.a=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(34),r=(i.n(n),i(55)),s=(i.n(r),i(56)),a=(i.n(s),i(57)),o=i(32),l=i(33);i.d(e,"Multiselect",(function(){return a.a})),i.d(e,"multiselectMixin",(function(){return o.a})),i.d(e,"pointerMixin",(function(){return l.a})),e.default=a.a},function(t,e){t.exports=function(t,e,i,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(i+": incorrect invocation!");return t}},function(t,e,i){var n=i(14),r=i(28),s=i(23),a=i(19);t.exports=function(t,e,i,o,l){n(e);var u=r(t),c=s(u),p=a(u.length),h=l?p-1:0,d=l?-1:1;if(i<2)for(;;){if(h in c){o=c[h],h+=d;break}if(h+=d,l?h<0:p<=h)throw TypeError("Reduce of empty array with no initial value")}for(;l?h>=0:p>h;h+=d)h in c&&(o=e(o,c[h],h,u));return o}},function(t,e,i){var n=i(5),r=i(42),s=i(1)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),n(e)&&null===(e=e[s])&&(e=void 0)),void 0===e?Array:e}},function(t,e,i){var n=i(63);t.exports=function(t,e){return new(n(t))(e)}},function(t,e,i){"use strict";var n=i(8),r=i(6),s=i(7),a=i(16),o=i(1);t.exports=function(t,e,i){var l=o(t),u=i(a,l,""[t]),c=u[0],p=u[1];s((function(){var e={};return e[l]=function(){return 7},7!=""[t](e)}))&&(r(String.prototype,t,c),n(RegExp.prototype,l,2==e?function(t,e){return p.call(t,this,e)}:function(t){return p.call(t,this)}))}},function(t,e,i){var n=i(11),r=i(70),s=i(69),a=i(2),o=i(19),l=i(87),u={},c={};(e=t.exports=function(t,e,i,p,h){var d,f,m,v,g=h?function(){return t}:l(t),_=n(i,p,e?2:1),b=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(s(g)){for(d=o(t.length);d>b;b++)if((v=e?_(a(f=t[b])[0],f[1]):_(t[b]))===u||v===c)return v}else for(m=g.call(t);!(f=m.next()).done;)if((v=r(m,_,f.value,e))===u||v===c)return v}).BREAK=u,e.RETURN=c},function(t,e,i){var n=i(5),r=i(82).set;t.exports=function(t,e,i){var s,a=e.constructor;return a!==i&&"function"==typeof a&&(s=a.prototype)!==i.prototype&&n(s)&&r&&r(t,s),t}},function(t,e){t.exports=function(t,e,i){var n=void 0===i;switch(e.length){case 0:return n?t():t.call(i);case 1:return n?t(e[0]):t.call(i,e[0]);case 2:return n?t(e[0],e[1]):t.call(i,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(i,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(i,e[0],e[1],e[2],e[3])}return t.apply(i,e)}},function(t,e,i){var n=i(15),r=i(1)("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||s[r]===t)}},function(t,e,i){var n=i(2);t.exports=function(t,e,i,r){try{return r?e(n(i)[0],i[1]):e(i)}catch(e){var s=t.return;throw void 0!==s&&n(s.call(t)),e}}},function(t,e,i){"use strict";var n=i(44),r=i(25),s=i(26),a={};i(8)(a,i(1)("iterator"),(function(){return this})),t.exports=function(t,e,i){t.prototype=n(a,{next:r(1,i)}),s(t,e+" Iterator")}},function(t,e,i){"use strict";var n=i(24),r=i(3),s=i(6),a=i(8),o=i(15),l=i(71),u=i(26),c=i(78),p=i(1)("iterator"),h=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,i,f,m,v,g){l(i,e,f);var _,b,y,x=function(t){if(!h&&t in D)return D[t];switch(t){case"keys":case"values":return function(){return new i(this,t)}}return function(){return new i(this,t)}},w=e+" Iterator",S="values"==m,C=!1,D=t.prototype,O=D[p]||D["@@iterator"]||m&&D[m],E=O||x(m),k=m?S?x("entries"):E:void 0,j="Array"==e&&D.entries||O;if(j&&(y=c(j.call(new t)))!==Object.prototype&&y.next&&(u(y,w,!0),n||"function"==typeof y[p]||a(y,p,d)),S&&O&&"values"!==O.name&&(C=!0,E=function(){return O.call(this)}),n&&!g||!h&&!C&&D[p]||a(D,p,E),o[e]=E,o[w]=d,m)if(_={values:S?E:x("values"),keys:v?E:x("keys"),entries:k},g)for(b in _)b in D||s(D,b,_[b]);else r(r.P+r.F*(h||C),e,_);return _}},function(t,e,i){var n=i(1)("iterator"),r=!1;try{var s=[7][n]();s.return=function(){r=!0},Array.from(s,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var i=!1;try{var s=[7],a=s[n]();a.next=function(){return{done:i=!0}},s[n]=function(){return a},t(s)}catch(t){}return i}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,i){var n=i(0),r=i(52).set,s=n.MutationObserver||n.WebKitMutationObserver,a=n.process,o=n.Promise,l="process"==i(9)(a);t.exports=function(){var t,e,i,u=function(){var n,r;for(l&&(n=a.domain)&&n.exit();t;){r=t.fn,t=t.next;try{r()}catch(n){throw t?i():e=void 0,n}}e=void 0,n&&n.enter()};if(l)i=function(){a.nextTick(u)};else if(!s||n.navigator&&n.navigator.standalone)if(o&&o.resolve){var c=o.resolve(void 0);i=function(){c.then(u)}}else i=function(){r.call(n,u)};else{var p=!0,h=document.createTextNode("");new s(u).observe(h,{characterData:!0}),i=function(){h.data=p=!p}}return function(n){var r={fn:n,next:void 0};e&&(e.next=r),t||(t=r,i()),e=r}}},function(t,e,i){var n=i(13),r=i(2),s=i(47);t.exports=i(4)?Object.defineProperties:function(t,e){r(t);for(var i,a=s(e),o=a.length,l=0;o>l;)n.f(t,i=a[l++],e[i]);return t}},function(t,e,i){var n=i(46),r=i(22).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},function(t,e,i){var n=i(12),r=i(28),s=i(27)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),n(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,i){var n=i(6);t.exports=function(t,e,i){for(var r in e)n(t,r,e[r],i);return t}},function(t,e,i){var n=i(5),r=i(2),s=function(t,e){if(r(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{(n=i(11)(Function.call,i(45).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,i){return s(t,i),e?t.__proto__=i:n(t,i),t}}({},!1):void 0),check:s}},function(t,e,i){"use strict";var n=i(0),r=i(13),s=i(4),a=i(1)("species");t.exports=function(t){var e=n[t];s&&e&&!e[a]&&r.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,i){var n=i(53),r=Math.max,s=Math.min;t.exports=function(t,e){return(t=n(t))<0?r(t+e,0):s(t,e)}},function(t,e,i){var n=i(0).navigator;t.exports=n&&n.userAgent||""},function(t,e,i){var n=i(38),r=i(1)("iterator"),s=i(15);t.exports=i(10).getIteratorMethod=function(t){if(null!=t)return t[r]||t["@@iterator"]||s[n(t)]}},function(t,e,i){"use strict";var n=i(3),r=i(20)(2);n(n.P+n.F*!i(17)([].filter,!0),"Array",{filter:function(t){return r(this,t,arguments[1])}})},function(t,e,i){"use strict";var n=i(3),r=i(37)(!1),s=[].indexOf,a=!!s&&1/[1].indexOf(1,-0)<0;n(n.P+n.F*(a||!i(17)(s)),"Array",{indexOf:function(t){return a?s.apply(this,arguments)||0:r(this,t,arguments[1])}})},function(t,e,i){var n=i(3);n(n.S,"Array",{isArray:i(42)})},function(t,e,i){"use strict";var n=i(3),r=i(20)(1);n(n.P+n.F*!i(17)([].map,!0),"Array",{map:function(t){return r(this,t,arguments[1])}})},function(t,e,i){"use strict";var n=i(3),r=i(62);n(n.P+n.F*!i(17)([].reduce,!0),"Array",{reduce:function(t){return r(this,t,arguments.length,arguments[1],!1)}})},function(t,e,i){var n=Date.prototype,r=n.toString,s=n.getTime;new Date(NaN)+""!="Invalid Date"&&i(6)(n,"toString",(function(){var t=s.call(this);return t==t?r.call(this):"Invalid Date"}))},function(t,e,i){i(4)&&"g"!=/./g.flags&&i(13).f(RegExp.prototype,"flags",{configurable:!0,get:i(39)})},function(t,e,i){i(65)("search",1,(function(t,e,i){return[function(i){"use strict";var n=t(this),r=null==i?void 0:i[e];return void 0!==r?r.call(i,n):new RegExp(i)[e](String(n))},i]}))},function(t,e,i){"use strict";i(94);var n=i(2),r=i(39),s=i(4),a=/./.toString,o=function(t){i(6)(RegExp.prototype,"toString",t,!0)};i(7)((function(){return"/a/b"!=a.call({source:"a",flags:"b"})}))?o((function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?r.call(t):void 0)})):"toString"!=a.name&&o((function(){return a.call(this)}))},function(t,e,i){"use strict";i(51)("trim",(function(t){return function(){return t(this,3)}}))},function(t,e,i){for(var n=i(34),r=i(47),s=i(6),a=i(0),o=i(8),l=i(15),u=i(1),c=u("iterator"),p=u("toStringTag"),h=l.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=r(d),m=0;m<f.length;m++){var v,g=f[m],_=d[g],b=a[g],y=b&&b.prototype;if(y&&(y[c]||o(y,c,h),y[p]||o(y,p,g),l[g]=h,_))for(v in n)y[v]||s(y,v,n[v],!0)}},function(t,e){},function(t,e){t.exports=function(t,e,i,n,r,s){var a,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(a=t,o=t.default);var u,c="function"==typeof o?o.options:o;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId=r),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):n&&(u=n),u){var p=c.functional,h=p?c.render:c.beforeCreate;p?(c._injectStyles=u,c.render=function(t,e){return u.call(e),h(t,e)}):c.beforeCreate=h?[].concat(h,u):[u]}return{esModule:a,exports:o,options:c}}},function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"multiselect",class:{"multiselect--active":t.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":t.isAbove},attrs:{tabindex:t.searchable?-1:t.tabindex},on:{focus:function(e){t.activate()},blur:function(e){!t.searchable&&t.deactivate()},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerForward()):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerBackward()):null}],keypress:function(e){return!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:(e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e))},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.deactivate()}}},[t._t("caret",[i("div",{staticClass:"multiselect__select",on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}}})],{toggle:t.toggle}),t._v(" "),t._t("clear",null,{search:t.search}),t._v(" "),i("div",{ref:"tags",staticClass:"multiselect__tags"},[t._t("selection",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleValues.length>0,expression:"visibleValues.length > 0"}],staticClass:"multiselect__tags-wrap"},[t._l(t.visibleValues,(function(e,n){return[t._t("tag",[i("span",{key:n,staticClass:"multiselect__tag"},[i("span",{domProps:{textContent:t._s(t.getOptionLabel(e))}}),t._v(" "),i("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keypress:function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13,i.key,"Enter"))return null;i.preventDefault(),t.removeElement(e)},mousedown:function(i){i.preventDefault(),t.removeElement(e)}}})])],{option:e,search:t.search,remove:t.removeElement})]}))],2),t._v(" "),t.internalValue&&t.internalValue.length>t.limit?[t._t("limit",[i("strong",{staticClass:"multiselect__strong",domProps:{textContent:t._s(t.limitText(t.internalValue.length-t.limit))}})])]:t._e()],{search:t.search,remove:t.removeElement,values:t.visibleValues,isOpen:t.isOpen}),t._v(" "),i("transition",{attrs:{name:"multiselect__loading"}},[t._t("loading",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),t._v(" "),t.searchable?i("input",{ref:"search",staticClass:"multiselect__input",style:t.inputStyle,attrs:{name:t.name,id:t.id,type:"text",autocomplete:"nope",placeholder:t.placeholder,disabled:t.disabled,tabindex:t.tabindex},domProps:{value:t.search},on:{input:function(e){t.updateSearch(e.target.value)},focus:function(e){e.preventDefault(),t.activate()},blur:function(e){e.preventDefault(),t.deactivate()},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.deactivate()},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"]))return null;e.preventDefault(),t.pointerForward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"]))return null;e.preventDefault(),t.pointerBackward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete"]))return null;e.stopPropagation(),t.removeLastElement()}],keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?(e.preventDefault(),e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null}}}):t._e(),t._v(" "),t.isSingleLabelVisible?i("span",{staticClass:"multiselect__single",on:{mousedown:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("singleLabel",[[t._v(t._s(t.currentOptionLabel))]],{option:t.singleValue})],2):t._e(),t._v(" "),t.isPlaceholderVisible?i("span",{staticClass:"multiselect__placeholder",on:{mousedown:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("placeholder",[t._v("\n          "+t._s(t.placeholder)+"\n        ")])],2):t._e()],2),t._v(" "),i("transition",{attrs:{name:"multiselect"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:t.optimizedHeight+"px"},attrs:{tabindex:"-1"},on:{focus:t.activate,mousedown:function(t){t.preventDefault()}}},[i("ul",{staticClass:"multiselect__content",style:t.contentStyle},[t._t("beforeList"),t._v(" "),t.multiple&&t.max===t.internalValue.length?i("li",[i("span",{staticClass:"multiselect__option"},[t._t("maxElements",[t._v("Maximum of "+t._s(t.max)+" options selected. First remove a selected option to select another.")])],2)]):t._e(),t._v(" "),!t.max||t.internalValue.length<t.max?t._l(t.filteredOptions,(function(e,n){return i("li",{key:n,staticClass:"multiselect__element"},[e&&(e.$isLabel||e.$isDisabled)?t._e():i("span",{staticClass:"multiselect__option",class:t.optionHighlight(n,e),attrs:{"data-select":e&&e.isTag?t.tagPlaceholder:t.selectLabelText,"data-selected":t.selectedLabelText,"data-deselect":t.deselectLabelText},on:{click:function(i){i.stopPropagation(),t.select(e)},mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.pointerSet(n)}}},[t._t("option",[i("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2),t._v(" "),e&&(e.$isLabel||e.$isDisabled)?i("span",{staticClass:"multiselect__option",class:t.groupHighlight(n,e),attrs:{"data-select":t.groupSelect&&t.selectGroupLabelText,"data-deselect":t.groupSelect&&t.deselectGroupLabelText},on:{mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.groupSelect&&t.pointerSet(n)},mousedown:function(i){i.preventDefault(),t.selectGroup(e)}}},[t._t("option",[i("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2):t._e()])})):t._e(),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoResults&&0===t.filteredOptions.length&&t.search&&!t.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[i("span",{staticClass:"multiselect__option"},[t._t("noResult",[t._v("No elements found. Consider changing the search query.")],{search:t.search})],2)]),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoOptions&&0===t.options.length&&!t.search&&!t.loading,expression:"showNoOptions && (options.length === 0 && !search && !loading)"}]},[i("span",{staticClass:"multiselect__option"},[t._t("noOptions",[t._v("List is empty.")])],2)]),t._v(" "),t._t("afterList")],2)])])],2)},staticRenderFns:[]};e.a=n}])}});
>>>>>>> 499710a687753338cb3a7a47de2288e27cdd0116
