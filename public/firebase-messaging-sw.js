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
<<<<<<< HEAD
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
<<<<<<< HEAD
>>>>>>> 91565265fdf04e92c306bfd5f6d8c7a0ac7eea4c
=======
>>>>>>> b0fe97cb8205501db7684288499995a19474cf58
>>>>>>> bff7666b40bebda2bfdeaba006b8f058ebfa3f92
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/firebase-messaging-sw.js":
/*!***********************************************!*\
  !*** ./resources/js/firebase-messaging-sw.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js');
var firebaseConfig = {
  apiKey: "AIzaSyD1QOe8gYXL9bLBkxjfK9yhBOMnF80W7sg",
  authDomain: "bridyc-89d72.firebaseapp.com",
  projectId: "bridyc-89d72",
  storageBucket: "bridyc-89d72.appspot.com",
  messagingSenderId: "774509716299",
  appId: "1:774509716299:web:4a4f7f5ac5f1185287bece",
  measurementId: "G-QF5FY5Y9NT"
}; // Initialize Firebase

firebase.initializeApp(firebaseConfig);
var messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  var title = 'Hello World';
  var options = {
    body: payload.data.status
  };
  return self.registration.showNotification(title, options);
});

/***/ }),

/***/ 18:
=======
throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/home/probir/Documents/Probir/Project_bckup/Project/Bridyc stuff/bridyc/resources/js/firebase-messaging-sw.js'");

/***/ }),

/***/ 20:
<<<<<<< HEAD
>>>>>>> 91565265fdf04e92c306bfd5f6d8c7a0ac7eea4c
=======
>>>>>>> b0fe97cb8205501db7684288499995a19474cf58
>>>>>>> bff7666b40bebda2bfdeaba006b8f058ebfa3f92
/*!*****************************************************!*\
  !*** multi ./resources/js/firebase-messaging-sw.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
module.exports = __webpack_require__(/*! C:\laragon\www\bridyc\resources\js\firebase-messaging-sw.js */"./resources/js/firebase-messaging-sw.js");
=======
module.exports = __webpack_require__(/*! /home/probir/Documents/Probir/Project_bckup/Project/Bridyc stuff/bridyc/resources/js/firebase-messaging-sw.js */"./resources/js/firebase-messaging-sw.js");
>>>>>>> 91565265fdf04e92c306bfd5f6d8c7a0ac7eea4c


/***/ })

/******/ });