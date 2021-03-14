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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelSupervisor.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChannelSupervisor.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      steps: 1,
      max_steps: 9,
      finalFormData: {},
      step1: {
        institute_name: "",
        //id => number
        city: "",
        post_office: "",
        district: "",
        pin: "",
        date: "",
        bibhag: "",
        songkul: "",
        number: "",
        niketan: "",
        email: "",
        webiste: "",
        whatsapp: ""
      },
      step2: {
        ankul_1: "",
        ankul_2: "",
        ankul_3: "",
        mukul_1: "",
        mukul_2: "",
        mukul_3: "",
        muth_1: "",
        muth_2: "",
        muth_3: "",
        teacher_male_1: "",
        teacher_female_1: "",
        teacher_total_1: "",
        teacher_karmachari_1: "",
        //Next Form
        one_male: "",
        one_female: "",
        one_total: "",
        two_male: "",
        two_female: "",
        two_total: "",
        three_male: "",
        three_female: "",
        three_total: "",
        four_male: "",
        four_female: "",
        four_total: "",
        five_male: "",
        five_female: "",
        five_total: "",
        muth_male: "",
        muth_female: "",
        muth_total: "",
        teacher_male_2: "",
        teacher_female_2: "",
        teacher_total_2: "",
        teacher_karmachari_2: ""
      },
      step3: {
        six_male: "",
        six_female: "",
        six_total: "",
        seven_male: "",
        seven_female: "",
        seven_total: "",
        eight_male: "",
        eight_female: "",
        eight_total: "",
        muth_male_1: "",
        muth_female_1: "",
        muth_total_1: "",
        teacher_male_1: "",
        teacher_female_1: "",
        teacher_total_1: "",
        teacher_karmachari_1: "",
        //next form
        nine_male: "",
        nine_female: "",
        nine_total: "",
        ten_male: "",
        ten_female: "",
        ten_total: "",
        muth_male_2: "",
        muth_female_2: "",
        muth_total_2: "",
        teacher_male_2: "",
        teacher_female_2: "",
        teacher_total_2: "",
        teacher_karmachari_2: ""
      },
      step4: {
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
        six: "",
        seven: "",
        eight: "",
        nine: "",
        ten: "",
        eleven: "",
        twelve: "",
        thirteen: "",
        fourteen: "",
        fiveteen: "",
        sixteen: "",
        seventeen: "",
        eighteen: ""
      },
      step5: {
        sc_male: "",
        sc_female: "",
        sc_total: "",
        st_male: "",
        st_female: "",
        st_total: "",
        obc_male: "",
        obc_female: "",
        obc_total: "",
        muslim_male: "",
        muslim_female: "",
        muslim_total: "",
        chritian_male: "",
        chritian_female: "",
        chritian_total: ""
      },
      step6: {
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
        six: "",
        seven: "",
        eight: "",
        nine: "",
        ten: "",
        eleven: "",
        twelve: "",
        thirteen: ""
      },
      step7: {
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
        six: "",
        seven: "",
        eight: "",
        nine: "",
        ten: "",
        eleven: "",
        twelve: "",
        thirteen: "",
        fourteen: ""
      },
      step8: {
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
        six: "",
        seven: "",
        eight: "",
        nine: "",
        ten: "",
        eleven: "",
        twelve: "",
        thirteen: "",
        fourteen: "",
        fiveteen: "",
        sixteen: "",
        seventeen: "",
        eighteen: "",
        nineteen: "",
        twenty: ""
      },
      step9: {
        institute_name: "",
        //row start
        //1st row
        one_name: "",
        one_start_date: "",
        one_end_date: "",
        one_mohila: "",
        one_nondor: "",
        one_ahota: "",
        one_pathdam: "",
        one_7_diniya: "",
        one_15_diniya: "",
        //2nd row
        two_name: "",
        two_start_date: "",
        two_end_date: "",
        two_mohila: "",
        two_nondor: "",
        two_ahota: "",
        two_pathdam: "",
        two_7_diniya: "",
        two_15_diniya: "",
        //3rd row
        three_name: "",
        three_start_date: "",
        three_end_date: "",
        three_mohila: "",
        three_nondor: "",
        three_ahota: "",
        three_pathdam: "",
        three_7_diniya: "",
        three_15_diniya: "",
        //4th row
        four_name: "",
        four_start_date: "",
        four_end_date: "",
        four_mohila: "",
        four_nondor: "",
        four_ahota: "",
        four_pathdam: "",
        four_7_diniya: "",
        four_15_diniya: "",
        //5th
        five_name: "",
        five_start_date: "",
        five_end_date: "",
        five_mohila: "",
        five_nondor: "",
        five_ahota: "",
        five_pathdam: "",
        five_7_diniya: "",
        five_15_diniya: "",
        //6th
        six_name: "",
        six_start_date: "",
        six_end_date: "",
        six_mohila: "",
        six_nondor: "",
        six_ahota: "",
        six_pathdam: "",
        six_7_diniya: "",
        six_15_diniya: "",
        //7th
        seven_name: "",
        seven_start_date: "",
        seven_end_date: "",
        seven_mohila: "",
        seven_nondor: "",
        seven_ahota: "",
        seven_pathdam: "",
        seven_7_diniya: "",
        seven_15_diniya: "",
        //8th
        eight_name: "",
        eight_start_date: "",
        eight_end_date: "",
        eight_mohila: "",
        eight_nondor: "",
        eight_ahota: "",
        eight_pathdam: "",
        eight_7_diniya: "",
        eight_15_diniya: "",
        //9th row
        nine_name: "",
        nine_start_date: "",
        nine_end_date: "",
        nine_mohila: "",
        nine_nondor: "",
        nine_ahota: "",
        nine_pathdam: "",
        nine_7_diniya: "",
        nine_15_diniya: "",
        //10th row
        ten_name: "",
        ten_start_date: "",
        ten_end_date: "",
        ten_mohila: "",
        ten_nondor: "",
        ten_ahota: "",
        ten_pathdam: "",
        ten_7_diniya: "",
        ten_15_diniya: "",
        //11th row
        eleven_name: "",
        eleven_start_date: "",
        eleven_end_date: "",
        eleven_mohila: "",
        eleven_nondor: "",
        eleven_ahota: "",
        eleven_pathdam: "",
        eleven_7_diniya: "",
        eleven_15_diniya: "",
        //12th row
        twelve_name: "",
        twelve_start_date: "",
        twelve_end_date: "",
        twelve_mohila: "",
        twelve_nondor: "",
        twelve_ahota: "",
        twelve_pathdam: "",
        twelve_7_diniya: "",
        twelve_15_diniya: "",
        //13th row
        thirteen_name: "",
        thirteen_start_date: "",
        thirteen_end_date: "",
        thirteen_mohila: "",
        thirteen_nondor: "",
        thirteen_ahota: "",
        thirteen_pathdam: "",
        thirteen_7_diniya: "",
        thirteen_15_diniya: "",
        //14th row
        fourteen_name: "",
        fourteen_start_date: "",
        fourteen_end_date: "",
        fourteen_mohila: "",
        fourteen_nondor: "",
        fourteen_ahota: "",
        fourteen_pathdam: "",
        fourteen_7_diniya: "",
        fourteen_15_diniya: ""
      },
      serverErrors: {
        //step 1
        institute_name: "",
        //id => number
        city: "",
        post_office: "",
        district: "",
        pin: "",
        date: "",
        bibhag: "",
        songkul: "",
        number: "",
        niketan: "",
        email: "",
        webiste: "",
        whatsapp: "",
        //step 2
        ankul_1: "",
        ankul_2: "",
        ankul_3: "",
        mukul_1: "",
        mukul_2: "",
        mukul_3: "",
        muth_1: "",
        muth_2: "",
        muth_3: "",
        teacher_male_1: "",
        teacher_female_1: "",
        teacher_total_1: "",
        teacher_karmachari_1: "",
        //Next Form
        one_male: "",
        one_female: "",
        one_total: "",
        two_male: "",
        two_female: "",
        two_total: "",
        three_male: "",
        three_female: "",
        three_total: "",
        four_male: "",
        four_female: "",
        four_total: "",
        five_male: "",
        five_female: "",
        five_total: "",
        muth_male: "",
        muth_female: "",
        muth_total: "",
        teacher_male_2: "",
        teacher_female_2: "",
        teacher_total_2: "",
        teacher_karmachari_2: ""
      },
      channelId: ""
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
  },
  mounted: function mounted() {},
  methods: {
    validateStepForm: function validateStepForm(scope) {
      var _this = this;

      //this.$validator.validateAll(scope).then((result) => {
      this.$validator.validate().then(function (result) {
        if (result) {
          if (_this.steps != _this.max_steps) _this.steps++; //   const el = this.$el.querySelector(".steps");
          //   console.log(el);
          //   el.scrollIntoView();
        } else {
          Vue.toasted.error("Please fill the required fields!", {
            position: "top-center",
            duration: 3000
          }); //   const el = this.$el.querySelector(
          //     "[data-vv-id=" + this.$validator.errors.items[1].id + "]"
          //   );
          //   el.scrollIntoView();
          //   el.focus();
        }
      });
    },
    submitForm: function submitForm(scope) {
      var _this2 = this;

      this.$validator.validate().then(function (result) {
        if (result) {
          _this2.step1 = {
            step1: _this2.step1
          };
          _this2.step2 = {
            step2: _this2.step2
          };
          _this2.step3 = {
            step3: _this2.step3
          };
          _this2.step4 = {
            step4: _this2.step4
          };
          _this2.step5 = {
            step5: _this2.step5
          };
          _this2.step6 = {
            step6: _this2.step6
          };
          _this2.step7 = {
            step7: _this2.step7
          };
          _this2.step8 = {
            step8: _this2.step8
          };
          _this2.step9 = {
            step9: _this2.step9
          };
          _this2.finalFormData = _.merge(_this2.finalFormData, _this2.step1);
          _this2.finalFormData = _.merge(_this2.finalFormData, _this2.step2);
          _this2.finalFormData = _.merge(_this2.finalFormData, _this2.step3);
          _this2.finalFormData = _.merge(_this2.finalFormData, _this2.step4);
          _this2.finalFormData = _.merge(_this2.finalFormData, _this2.step5);
          _this2.finalFormData = _.merge(_this2.finalFormData, _this2.step6);
          _this2.finalFormData = _.merge(_this2.finalFormData, _this2.step7);
          _this2.finalFormData = _.merge(_this2.finalFormData, _this2.step8);
          _this2.finalFormData = _.merge(_this2.finalFormData, _this2.step9);
          axios.post("/api/supervisor/form/submit/" + _this2.channelId, _this2.finalFormData).then(function (response) {
            if (response.data.message === true) {
              Vue.toasted.success("Please fill the required fields!", {
                position: "top-center",
                duration: 3000
              });
            }

            _this2.steps = 1;
          })["catch"](function (errors) {});
        }
      });
    },
    goPrev: function goPrev() {
      console.log("hit");
      if (this.steps > 1) this.steps = this.steps - 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelSupervisor.vue?vue&type=template&id=6c60f470&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChannelSupervisor.vue?vue&type=template&id=6c60f470& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    _c("ul", { staticClass: "list-inline steps" }, [
      _vm.steps == 1
        ? _c("li", { class: { active: _vm.steps > 0 } }, [
            _vm._v("Basic Details")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.steps == 2
        ? _c("li", { class: { active: _vm.steps > 1 } }, [
            _vm._v("\n        Lower Class Details\n      ")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.steps == 3
        ? _c("li", { class: { active: _vm.steps > 2 } }, [
            _vm._v("\n        Middle Class Details\n      ")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.steps == 4
        ? _c("li", { class: { active: _vm.steps > 3 } }, [
            _vm._v("\n        Higher Class Details\n      ")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.steps == 5
        ? _c("li", { class: { active: _vm.steps > 4 } }, [
            _vm._v("\n        Higher Class Details\n      ")
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _vm.steps === 1
      ? _c(
          "form",
          {
            staticClass: "form-horizontal container-lg",
            attrs: { "data-vv-scope": "step1" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.validateStepForm("step1")
              }
            }
          },
          [
            _c("h1", [_vm._v("Step 1")]),
            _vm._v(" "),
            _c("div", { staticClass: "form-row" }, [
              _c(
                "div",
                {
                  staticClass: "form-group col-md-12",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.institute_name") ||
                      _vm.serverErrors.institute_name != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "inputEmail4" } }, [
                    _vm._v("নিকেতনৰ নাম")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.institute_name,
                        expression: "step1.institute_name"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "institute_name",
                      placeholder: "নিকেতনৰ নাম"
                    },
                    domProps: { value: _vm.step1.institute_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.step1,
                          "institute_name",
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
                          value: _vm.errors.has("step1.institute_name"),
                          expression: "errors.has('step1.institute_name')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.institute_name")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.institute_name != "",
                          expression: "serverErrors.institute_name != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.institute_name))]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-row" }, [
              _c(
                "div",
                {
                  staticClass: "form-group col-md-3 col-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.city") ||
                      _vm.serverErrors.city != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "inputCity" } }, [
                    _vm._v("স্থান")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.city,
                        expression: "step1.city"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "city" },
                    domProps: { value: _vm.step1.city },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "city", $event.target.value)
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
                          value: _vm.errors.has("step1.city"),
                          expression: "errors.has('step1.city')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.city")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.city != "",
                          expression: "serverErrors.city != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.city))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group col-md-3 col-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.post_office") ||
                      _vm.serverErrors.post_office != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "text" } }, [_vm._v("ডাকঘৰ")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.post_office,
                        expression: "step1.post_office"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "post_office", type: "text" },
                    domProps: { value: _vm.step1.post_office },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "post_office", $event.target.value)
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
                          value: _vm.errors.has("step1.post_office"),
                          expression: "errors.has('step1.post_office')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.post_office")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.post_office != "",
                          expression: "serverErrors.post_office != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.post_office))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group col-md-3 col-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.district") ||
                      _vm.serverErrors.district != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "inputZip" } }, [_vm._v("জিলা")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.district,
                        expression: "step1.district"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "district" },
                    domProps: { value: _vm.step1.district },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "district", $event.target.value)
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
                          value: _vm.errors.has("step1.district"),
                          expression: "errors.has('step1.district')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.district")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.district != "",
                          expression: "serverErrors.district != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.district))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group col-md-3 col-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.pin") ||
                      _vm.serverErrors.pin != ""
                  }
                },
                [
                  _c("label", [_vm._v("পিন")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.pin,
                        expression: "step1.pin"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|min:6|max:6",
                        expression: "'required|min:6|max:6'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", name: "pin" },
                    domProps: { value: _vm.step1.pin },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "pin", $event.target.value)
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
                          value: _vm.errors.has("step1.pin"),
                          expression: "errors.has('step1.pin')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.pin")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.pin != "",
                          expression: "serverErrors.pin != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.pin))]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-row" }, [
              _c(
                "div",
                {
                  staticClass: "form-group col-md-4 col-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.date") ||
                      _vm.serverErrors.date != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "inputCity" } }, [
                    _vm._v("নিকেতন স্থাপনৰ তাৰিখ")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.date,
                        expression: "step1.date"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "date", name: "date" },
                    domProps: { value: _vm.step1.date },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "date", $event.target.value)
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
                          value: _vm.errors.has("step1.date"),
                          expression: "errors.has('step1.date')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.date")))]
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
              _c(
                "div",
                {
                  staticClass: "form-group col-md-4 col-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.bibhag") ||
                      _vm.serverErrors.bibhag != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "text" } }, [_vm._v("বিভাগ")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.bibhag,
                        expression: "step1.bibhag"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "bibhag" },
                    domProps: { value: _vm.step1.bibhag },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "bibhag", $event.target.value)
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
                          value: _vm.errors.has("step1.bibhag"),
                          expression: "errors.has('step1.bibhag')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.bibhag")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.bibhag != "",
                          expression: "serverErrors.bibhag != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.bibhag))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group col-md-4",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.songkul") ||
                      _vm.serverErrors.songkul != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "inputZip" } }, [
                    _vm._v("সংকুল")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.songkul,
                        expression: "step1.songkul"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "songkul" },
                    domProps: { value: _vm.step1.songkul },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "songkul", $event.target.value)
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
                          value: _vm.errors.has("step1.songkul"),
                          expression: "errors.has('step1.songkul')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.songkul")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.songkul != "",
                          expression: "serverErrors.songkul != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.songkul))]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-row" }, [
              _c(
                "div",
                {
                  staticClass: "form-group col-md-6 col-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.number") ||
                      _vm.serverErrors.number != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "inputCity" } }, [
                    _vm._v("প্ৰধানাচাৰ্যৰ মোবাইল নং :")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.number,
                        expression: "step1.number"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|min:10|max:10",
                        expression: "'required|min:10|max:10'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", name: "number" },
                    domProps: { value: _vm.step1.number },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "number", $event.target.value)
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
                          value: _vm.errors.has("step1.number"),
                          expression: "errors.has('step1.number')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.number")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.number != "",
                          expression: "serverErrors.number != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.number))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group col-md-6 col-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.niketan") ||
                      _vm.serverErrors.niketan != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "text" } }, [
                    _vm._v("নিকেতনৰ দুৰাভাষ")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.niketan,
                        expression: "step1.niketan"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "niketan" },
                    domProps: { value: _vm.step1.niketan },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "niketan", $event.target.value)
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
                          value: _vm.errors.has("step1.niketan"),
                          expression: "errors.has('step1.niketan')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.niketan")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.niketan != "",
                          expression: "serverErrors.niketan != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.niketan))]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-row" }, [
              _c(
                "div",
                {
                  staticClass: "form-group col-md-4 col-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.email") ||
                      _vm.serverErrors.email != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "inputCity" } }, [
                    _vm._v("E-mail")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.email,
                        expression: "step1.email"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|email",
                        expression: "'required|email'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "email", name: "email" },
                    domProps: { value: _vm.step1.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "email", $event.target.value)
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
                          value: _vm.errors.has("step1.email"),
                          expression: "errors.has('step1.email')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.email")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.email != "",
                          expression: "serverErrors.email != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.email))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group col-md-4 col-6",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.website") ||
                      _vm.serverErrors.website != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "text" } }, [_vm._v("Website")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step1.website,
                        expression: "step1.website"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "url",
                        expression: "'url'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "website" },
                    domProps: { value: _vm.step1.website },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step1, "website", $event.target.value)
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
                          value: _vm.errors.has("step1.website"),
                          expression: "errors.has('step1.website')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("step1.website")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.serverErrors.website != "",
                          expression: "serverErrors.website != ''"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.serverErrors.website))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group col-md-4",
                  class: {
                    "has-error":
                      _vm.errors.has("serverErrors.whatsapp") ||
                      _vm.serverErrors.whatsapp != ""
                  }
                },
                [
                  _c("label", { attrs: { for: "text" } }, [_vm._v("WhatApp")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step1.whatsapp,
                          expression: "step1.whatsapp"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|min:10|max:10",
                          expression: "'required|min:10|max:10'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        placeholder: "Username",
                        name: "whatsapp"
                      },
                      domProps: { value: _vm.step1.whatsapp },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step1, "whatsapp", $event.target.value)
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
                            value: _vm.errors.has("step1.whatsapp"),
                            expression: "errors.has('step1.whatsapp')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("step1.whatsapp")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.whatsapp != "",
                            expression: "serverErrors.whatsapp != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.whatsapp))]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _vm._v("\n<<<<<<< HEAD\n    \n"),
            _c("link", {
              attrs: { rel: "stylesheet", href: "afterdelete.css" }
            }),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _vm._m(5),
            _vm._v(" "),
            _vm._m(6),
            _vm._v(" "),
            _vm._m(7),
            _vm._v(" "),
            _vm._m(8),
            _vm._v(" "),
            _vm._m(9),
            _vm._v(" "),
            _vm._m(10),
            _vm._v(" "),
            _vm._m(11),
            _vm._v(" "),
            _vm._m(12),
            _vm._v(" "),
            _vm._m(13),
            _vm._v(" "),
            _vm._m(14),
            _vm._v(" "),
            _vm._m(15),
            _vm._v(" "),
            _vm._m(16),
            _vm._v(" "),
            _vm._m(17),
            _vm._v(" "),
            _vm._m(18),
            _vm._v(" "),
            _vm._m(19),
            _vm._v(" "),
            _vm._m(20),
            _vm._v(" "),
            _vm._m(21),
            _vm._v(" "),
            _vm._m(22),
            _vm._v(" "),
            _vm._m(23),
            _vm._v(" "),
            _vm._m(24),
            _vm._v(" "),
            _vm._m(25),
            _vm._v(" "),
            _vm._m(26),
            _vm._v(" "),
            _vm._m(27),
            _vm._v(" "),
            _vm._m(28),
            _vm._v(
              "\n=======\n>>>>>>> ce16f3187792d163513f3c32d552d1f5ede5aa26\n\n\n\n\n      "
            ),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-row-reverse" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-secondary",
                  attrs: { disabled: _vm.steps === 1, type: "button" }
                },
                [_vm._v("\n          Back\n        ")]
              )
            ]),
            _vm._v(" "),
            _vm._m(29)
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.steps === 2
      ? _c(
          "form",
          {
            staticClass: "form-horizontal",
            attrs: { "data-vv-scope": "step2" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.validateStepForm("step2")
              }
            }
          },
          [
            _c("h1", [_vm._v("Step 2")]),
            _vm._v(" "),
            _c(
              "table",
              { staticClass: "table table-responsive-md table-bordered" },
              [
                _c("tr", [
                  _c(
                    "th",
                    { staticClass: "mx-auto", attrs: { rowspan: "4" } },
                    [
                      _vm._v(
                        "\n            শিশু বাটিকাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা - ২০২০ বৰ্ষ ।\n          "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("th", [_vm._v("শিশু বাটিকা")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("অংকুৰ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("মুকুল")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("মুঠ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("আচাৰ্য")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.teacher_male_1,
                          expression: "step2.teacher_male_1"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "teacher_male_1",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.teacher_male_1 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step2,
                            "teacher_male_1",
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
                            value: _vm.errors.has("step2.teacher_male_1"),
                            expression: "errors.has('step2.teacher_male_1')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.teacher_male_1")) +
                            "\n            "
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
                            value: _vm.serverErrors.teacher_male_1 != "",
                            expression: "serverErrors.teacher_male_1 != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.serverErrors.teacher_male_1) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("ছাত্র")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.ankul_1,
                          expression: "step2.ankul_1"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "ankul_1",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step2.ankul_1 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "ankul_1", $event.target.value)
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
                            value: _vm.errors.has("step2.ankul_1"),
                            expression: "errors.has('step2.ankul_1')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("step2.ankul_1")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.ankul_1 != "",
                            expression: "serverErrors.ankul_1 != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.ankul_1))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.mukul_1,
                          expression: "step2.mukul_1"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "mukul_1",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.mukul_1 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "mukul_1", $event.target.value)
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
                            value: _vm.errors.has("step2.mukul_1"),
                            expression: "errors.has('step2.mukul_1')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("step2.mukul_1")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.mukul_1 != "",
                            expression: "serverErrors.mukul_1 != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.mukul_1))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.muth_1,
                          expression: "step2.muth_1"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "muth_1",
                        placeholder: "Total"
                      },
                      domProps: { value: _vm.step2.muth_1 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "muth_1", $event.target.value)
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
                            value: _vm.errors.has("step2.muth_1"),
                            expression: "errors.has('step2.muth_1')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("step2.muth_1")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.muth_1 != "",
                            expression: "serverErrors.muth_1 != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.muth_1))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("আচাৰ্যা")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.teacher_female_1,
                          expression: "step2.teacher_female_1"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "teacher_female_1",
                        placeholder: "Ankul"
                      },
                      domProps: { value: _vm.step2.teacher_female_1 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step2,
                            "teacher_female_1",
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
                            value: _vm.errors.has("step2.teacher_female_1"),
                            expression: "errors.has('step2.teacher_female_1')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.errors.first("step2.teacher_female_1"))
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
                            value: _vm.serverErrors.teacher_female_1 != "",
                            expression: "serverErrors.teacher_female_1 != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.teacher_female_1))]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("ছাত্ৰী")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.ankul_2,
                          expression: "step2.ankul_2"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "ankul_2",
                        placeholder: "abc"
                      },
                      domProps: { value: _vm.step2.ankul_2 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "ankul_2", $event.target.value)
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
                            value: _vm.errors.has("step2.ankul_2"),
                            expression: "errors.has('step2.ankul_2')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("step2.ankul_2")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.ankul_2 != "",
                            expression: "serverErrors.ankul_2 != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.ankul_2))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.mukul_2,
                          expression: "step2.mukul_2"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "mukul_2",
                        placeholder: "pro"
                      },
                      domProps: { value: _vm.step2.mukul_2 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "mukul_2", $event.target.value)
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
                            value: _vm.errors.has("step2.mukul_2"),
                            expression: "errors.has('step2.mukul_2')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("step2.mukul_2")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.mukul_2 != "",
                            expression: "serverErrors.mukul_2 != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.mukul_2))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.muth_2,
                          expression: "step2.muth_2"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "muth_2",
                        placeholder: "muth"
                      },
                      domProps: { value: _vm.step2.muth_2 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "muth_2", $event.target.value)
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
                            value: _vm.errors.has("step2.muth_2"),
                            expression: "errors.has('step2.muth_2')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("step2.muth_2")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.muth_2 != "",
                            expression: "serverErrors.muth_2 != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.muth_2))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("মুঠ")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.teacher_total_1,
                          expression: "step2.teacher_total_1"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "teacher_total_1",
                        placeholder: "muth"
                      },
                      domProps: { value: _vm.step2.teacher_total_1 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step2,
                            "teacher_total_1",
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
                            value: _vm.errors.has("step2.teacher_total_1"),
                            expression: "errors.has('step2.teacher_total_1')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.errors.first("step2.teacher_total_1"))
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
                            value: _vm.serverErrors.teacher_total_1 != "",
                            expression: "serverErrors.teacher_total_1 != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.teacher_total_1))]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("মুঠ")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.ankul_3,
                          expression: "step2.ankul_3"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "ankul_3",
                        placeholder: "muth"
                      },
                      domProps: { value: _vm.step2.ankul_3 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "ankul_3", $event.target.value)
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
                            value: _vm.errors.has("step2.ankul_3"),
                            expression: "errors.has('step2.ankul_3')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("step2.ankul_3")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.ankul_3 != "",
                            expression: "serverErrors.ankul_3 != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.ankul_3))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.mukul_3,
                          expression: "step2.mukul_3"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "mukul_3",
                        placeholder: "muth"
                      },
                      domProps: { value: _vm.step2.mukul_3 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "mukul_3", $event.target.value)
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
                            value: _vm.errors.has("step2.mukul_3"),
                            expression: "errors.has('step2.mukul_3')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("step2.mukul_3")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.mukul_3 != "",
                            expression: "serverErrors.mukul_3 != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.mukul_3))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.muth_3,
                          expression: "step2.muth_3"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "muth_3",
                        placeholder: "muth"
                      },
                      domProps: { value: _vm.step2.muth_3 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "muth_3", $event.target.value)
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
                            value: _vm.errors.has("step2.muth_3"),
                            expression: "errors.has('step2.muth_3')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("step2.muth_3")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.serverErrors.muth_3 != "",
                            expression: "serverErrors.muth_3 != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.muth_3))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("অন্য কৰ্মচাৰী")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.teacher_karmachari_1,
                          expression: "step2.teacher_karmachari_1"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "teacher_karmachari_1",
                        placeholder: "muth"
                      },
                      domProps: { value: _vm.step2.teacher_karmachari_1 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step2,
                            "teacher_karmachari_1",
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
                            value: _vm.errors.has("step2.teacher_karmachari_1"),
                            expression:
                              "errors.has('step2.teacher_karmachari_1')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.errors.first("step2.teacher_karmachari_1"))
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
                            value: _vm.serverErrors.teacher_karmachari_1 != "",
                            expression:
                              "serverErrors.teacher_karmachari_1 != ''"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.serverErrors.teacher_karmachari_1))]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "table",
              { staticClass: "table table-responsive-md table-bordered" },
              [
                _c("tr", [
                  _c("th", { attrs: { colspan: "3", rowspan: "4" } }, [
                    _vm._v(
                      "\n            নিম্ন প্ৰাথমিক শাখাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা, ২০২০ বৰ্ষ ।\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("শ্ৰেণী")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("১ম")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("২য়")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("৩য়")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("৪ৰ্থ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("৫ম")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("মুঠ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("আচাৰ্য")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.teacher_male_2,
                          expression: "step2.teacher_male_2"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "teacher_male_2",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.teacher_male_2 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step2,
                            "teacher_male_2",
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
                            value: _vm.errors.has("step2.teacher_male_2"),
                            expression: "errors.has('step2.teacher_male_2')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.teacher_male_2")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("ছাত্র")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.one_male,
                          expression: "step2.one_male"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "one_male",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.one_male },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "one_male", $event.target.value)
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
                            value: _vm.errors.has("step2.one_male"),
                            expression: "errors.has('step2.one_male')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.one_male")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.two_male,
                          expression: "step2.two_male"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "two_male",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.two_male },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "two_male", $event.target.value)
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
                            value: _vm.errors.has("step2.two_male"),
                            expression: "errors.has('step2.two_male')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.two_male")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.three_male,
                          expression: "step2.three_male"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "three_male",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.three_male },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "three_male", $event.target.value)
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
                            value: _vm.errors.has("step2.three_male"),
                            expression: "errors.has('step2.three_male')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.three_male")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.four_male,
                          expression: "step2.four_male"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "four_male",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.four_male },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "four_male", $event.target.value)
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
                            value: _vm.errors.has("step2.four_male"),
                            expression: "errors.has('step2.four_male')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.four_male")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.five_male,
                          expression: "step2.five_male"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "five_male",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.five_male },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "five_male", $event.target.value)
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
                            value: _vm.errors.has("step2.five_male"),
                            expression: "errors.has('step2.five_male')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.five_male")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.muth_male,
                          expression: "step2.muth_male"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "muth_male",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.muth_male },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "muth_male", $event.target.value)
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
                            value: _vm.errors.has("step2.muth_male"),
                            expression: "errors.has('step2.muth_male')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.muth_male")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("আচাৰ্যা")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.teacher_female_2,
                          expression: "step2.teacher_female_2"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "teacher_female_2",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.teacher_female_2 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step2,
                            "teacher_female_2",
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
                            value: _vm.errors.has("step2.teacher_female_2"),
                            expression: "errors.has('step2.teacher_female_2')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.teacher_female_2")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("ছাত্ৰী")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.one_female,
                          expression: "step2.one_female"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "one_female",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.one_female },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "one_female", $event.target.value)
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
                            value: _vm.errors.has("step2.one_female"),
                            expression: "errors.has('step2.one_female')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.one_female")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.two_female,
                          expression: "step2.two_female"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "two_female",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.two_female },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "two_female", $event.target.value)
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
                            value: _vm.errors.has("step2.two_female"),
                            expression: "errors.has('step2.two_female')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.two_female")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.three_female,
                          expression: "step2.three_female"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "three_female",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.three_female },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step2,
                            "three_female",
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
                            value: _vm.errors.has("step2.three_female"),
                            expression: "errors.has('step2.three_female')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.three_female")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.four_female,
                          expression: "step2.four_female"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "four_female",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.four_female },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step2,
                            "four_female",
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
                            value: _vm.errors.has("step2.four_female"),
                            expression: "errors.has('step2.four_female')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.four_female")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.five_female,
                          expression: "step2.five_female"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "five_female",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.five_female },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step2,
                            "five_female",
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
                            value: _vm.errors.has("step2.five_female"),
                            expression: "errors.has('step2.five_female')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.five_female")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.muth_female,
                          expression: "step2.muth_female"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "muth_female",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.muth_female },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step2,
                            "muth_female",
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
                            value: _vm.errors.has("step2.muth_female"),
                            expression: "errors.has('step2.muth_female')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.muth_female")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("মুঠ")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.teacher_total_2,
                          expression: "step2.teacher_total_2"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "teacher_total_2",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.teacher_total_2 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step2,
                            "teacher_total_2",
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
                            value: _vm.errors.has("step2.teacher_total_2"),
                            expression: "errors.has('step2.teacher_total_2')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.teacher_total_2")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("মুঠ")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.one_total,
                          expression: "step2.one_total"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "one_total",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.one_total },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "one_total", $event.target.value)
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
                            value: _vm.errors.has("step2.one_total"),
                            expression: "errors.has('step2.one_total')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.one_total")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.two_total,
                          expression: "step2.two_total"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "two_total",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.two_total },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "two_total", $event.target.value)
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
                            value: _vm.errors.has("step2.two_total"),
                            expression: "errors.has('step2.two_total')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.two_total")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.three_total,
                          expression: "step2.three_total"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "three_total",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.three_total },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step2,
                            "three_total",
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
                            value: _vm.errors.has("step2.three_total"),
                            expression: "errors.has('step2.three_total')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.three_total")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.four_total,
                          expression: "step2.four_total"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "four_total",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.four_total },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "four_total", $event.target.value)
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
                            value: _vm.errors.has("step2.four_total"),
                            expression: "errors.has('step2.four_total')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.four_total")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.five_total,
                          expression: "step2.five_total"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "five_total",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.five_total },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "five_total", $event.target.value)
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
                            value: _vm.errors.has("step2.five_total"),
                            expression: "errors.has('step2.five_total')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.five_total")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.muth_total,
                          expression: "step2.muth_total"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "muth_total",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.muth_total },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step2, "muth_total", $event.target.value)
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
                            value: _vm.errors.has("step2.muth_total"),
                            expression: "errors.has('step2.muth_total')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step2.muth_total")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("অন্য কৰ্মচাৰী")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step2.teacher_karmachari_2,
                          expression: "step2.teacher_karmachari_2"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "teacher_karmachari_2",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step2.teacher_karmachari_2 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step2,
                            "teacher_karmachari_2",
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
                            value: _vm.errors.has("step2.teacher_karmachari_2"),
                            expression:
                              "errors.has('step2.teacher_karmachari_2')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(
                              _vm.errors.first("step2.teacher_karmachari_2")
                            ) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-row-reverse" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.goPrev()
                    }
                  }
                },
                [_vm._v("\n          Back\n        ")]
              )
            ]),
            _vm._v(" "),
            _vm._m(30)
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.steps === 3
      ? _c(
          "form",
          {
            staticClass: "form-horizontal",
            attrs: { "data-vv-scope": "step3" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.validateStepForm("step3")
              }
            }
          },
          [
            _c("h1", [_vm._v("Step 3")]),
            _vm._v(" "),
            _c(
              "table",
              { staticClass: "table table-responsive-md table-bordered" },
              [
                _c("tr", [
                  _c("th", { attrs: { colspan: "3", rowspan: "4" } }, [
                    _vm._v(
                      "\n            উচ্চ প্ৰাথমিক শাখাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা, ২০২০ বৰ্ষ ।\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("শ্ৰেণী")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("৬ষ্ঠ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("৭ম")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("৮ম")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("মুঠ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("আচাৰ্য")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.teacher_male_1,
                          expression: "step3.teacher_male_1"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "teacher_male_1",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.teacher_male_1 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step3,
                            "teacher_male_1",
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
                            value: _vm.errors.has("step3.teacher_male_1"),
                            expression: "errors.has('step3.teacher_male_1')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.teacher_male_1")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("ছাত্র")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.six_male,
                          expression: "step3.six_male"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "six_male",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.six_male },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step3, "six_male", $event.target.value)
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
                            value: _vm.errors.has("step3.six_male"),
                            expression: "errors.has('step3.six_male')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.six_male")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.seven_male,
                          expression: "step3.seven_male"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "seven_male",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.seven_male },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step3, "seven_male", $event.target.value)
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
                            value: _vm.errors.has("step3.seven_male"),
                            expression: "errors.has('step3.seven_male')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.seven_male")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.eight_male,
                          expression: "step3.eight_male"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "eight_male",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.eight_male },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step3, "eight_male", $event.target.value)
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
                            value: _vm.errors.has("step3.eight_male"),
                            expression: "errors.has('step3.eight_male')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.eight_male")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.muth_male_1,
                          expression: "step3.muth_male_1"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "muth_male_1",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.muth_male_1 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step3,
                            "muth_male_1",
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
                            value: _vm.errors.has("step3.muth_male_1"),
                            expression: "errors.has('step3.muth_male_1')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.muth_male_1")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("আচাৰ্যা")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.teacher_female_1,
                          expression: "step3.teacher_female_1"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "teacher_female_1",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.teacher_female_1 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step3,
                            "teacher_female_1",
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
                            value: _vm.errors.has("step3.teacher_female_1"),
                            expression: "errors.has('step3.teacher_female_1')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.teacher_female_1")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("ছাত্ৰী")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.six_female,
                          expression: "step3.six_female"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "six_female",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.six_female },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step3, "six_female", $event.target.value)
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
                            value: _vm.errors.has("step3.six_female"),
                            expression: "errors.has('step3.six_female')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.six_female")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.seven_female,
                          expression: "step3.seven_female"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "seven_female",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.seven_female },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step3,
                            "seven_female",
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
                            value: _vm.errors.has("step3.seven_female"),
                            expression: "errors.has('step3.seven_female')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.seven_female")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.eight_female,
                          expression: "step3.eight_female"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "eight_female",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.eight_female },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step3,
                            "eight_female",
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
                            value: _vm.errors.has("step3.eight_female"),
                            expression: "errors.has('step3.eight_female')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.eight_female")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.muth_female_1,
                          expression: "step3.muth_female_1"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "muth_female_1",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.muth_female_1 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step3,
                            "muth_female_1",
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
                            value: _vm.errors.has("step3.muth_female_1"),
                            expression: "errors.has('step3.muth_female_1')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.muth_female_1")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("মুঠ")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.teacher_female_1,
                          expression: "step3.teacher_female_1"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "teacher_female_1",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.teacher_female_1 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step3,
                            "teacher_female_1",
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
                            value: _vm.errors.has("step3.teacher_female_1"),
                            expression: "errors.has('step3.teacher_female_1')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.teacher_female_1")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("মুঠ")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.six_total,
                          expression: "step3.six_total"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "six_total",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.six_total },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step3, "six_total", $event.target.value)
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
                            value: _vm.errors.has("step3.six_total"),
                            expression: "errors.has('step3.six_total')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.six_total")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.seven_total,
                          expression: "step3.seven_total"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "seven_total",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.seven_total },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step3,
                            "seven_total",
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
                            value: _vm.errors.has("step3.seven_total"),
                            expression: "errors.has('step3.seven_total')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.seven_total")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.eight_total,
                          expression: "step3.eight_total"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "eight_total",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.eight_total },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step3,
                            "eight_total",
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
                            value: _vm.errors.has("step3.eight_total"),
                            expression: "errors.has('step3.eight_total')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.eight_total")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.muth_total_1,
                          expression: "step3.muth_total_1"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "muth_total_1",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.muth_total_1 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step3,
                            "muth_total_1",
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
                            value: _vm.errors.has("step3.muth_total_1"),
                            expression: "errors.has('step3.muth_total_1')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.muth_total_1")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("অন্য কৰ্মচাৰী")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.teacher_karmachari_1,
                          expression: "step3.teacher_karmachari_1"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "teacher_karmachari_1",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.teacher_karmachari_1 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step3,
                            "teacher_karmachari_1",
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
                            value: _vm.errors.has("step3.teacher_karmachari_1"),
                            expression:
                              "errors.has('step3.teacher_karmachari_1')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(
                              _vm.errors.first("step3.teacher_karmachari_1")
                            ) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "table",
              { staticClass: "table table-responsive-md table-bordered" },
              [
                _c("tr", [
                  _c(
                    "th",
                    { staticClass: "mx-auto", attrs: { rowspan: "4" } },
                    [
                      _vm._v(
                        "\n            উচ্চ মাধ্যমিক শাখাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা, ২০২০ বৰ্ষ ।\n          "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("th", [_vm._v("শ্ৰেণী")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("৯ম")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("১০ম")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("মুঠ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("আচাৰ্য")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.teacher_male_2,
                          expression: "step3.teacher_male_2"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "teacher_male_2",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.teacher_male_2 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step3,
                            "teacher_male_2",
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
                            value: _vm.errors.has("step3.teacher_male_2"),
                            expression: "errors.has('step3.teacher_male_2')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.teacher_male_2")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("ছাত্র")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.nine_male,
                          expression: "step3.nine_male"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "nine_male",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.nine_male },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step3, "nine_male", $event.target.value)
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
                            value: _vm.errors.has("step3.nine_male"),
                            expression: "errors.has('step3.nine_male')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.nine_male")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.ten_male,
                          expression: "step3.ten_male"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "ten_male",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.ten_male },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step3, "ten_male", $event.target.value)
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
                            value: _vm.errors.has("step3.ten_male"),
                            expression: "errors.has('step3.ten_male')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.ten_male")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.muth_male_2,
                          expression: "step3.muth_male_2"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "muth_male_2",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.muth_male_2 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step3,
                            "muth_male_2",
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
                            value: _vm.errors.has("step3.muth_male_2"),
                            expression: "errors.has('step3.muth_male_2')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.muth_male_2")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("আচাৰ্যা")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.teacher_female_2,
                          expression: "step3.teacher_female_2"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "teacher_female_2",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.teacher_female_2 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step3,
                            "teacher_female_2",
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
                            value: _vm.errors.has("step3.teacher_female_2"),
                            expression: "errors.has('step3.teacher_female_2')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.teacher_female_2")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("ছাত্ৰী")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.nine_female,
                          expression: "step3.nine_female"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "nine_female",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.nine_female },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step3,
                            "nine_female",
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
                            value: _vm.errors.has("step3.nine_female"),
                            expression: "errors.has('step3.nine_female')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.nine_female")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.ten_female,
                          expression: "step3.ten_female"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "ten_female",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.ten_female },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step3, "ten_female", $event.target.value)
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
                            value: _vm.errors.has("step3.ten_female"),
                            expression: "errors.has('step3.ten_female')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.ten_female")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.muth_total_2,
                          expression: "step3.muth_total_2"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "muth_total_2",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.muth_total_2 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step3,
                            "muth_total_2",
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
                            value: _vm.errors.has("step3.muth_total_2"),
                            expression: "errors.has('step3.muth_total_2')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.muth_total_2")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("মুঠ")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.teacher_total_2,
                          expression: "step3.teacher_total_2"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "teacher_total_2",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.teacher_total_2 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step3,
                            "teacher_total_2",
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
                            value: _vm.errors.has("step3.teacher_total_2"),
                            expression: "errors.has('step3.teacher_total_2')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.teacher_total_2")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("মুঠ")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.nine_total,
                          expression: "step3.nine_total"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "nine_total",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.nine_total },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step3, "nine_total", $event.target.value)
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
                            value: _vm.errors.has("step3.nine_total"),
                            expression: "errors.has('step3.nine_total')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.nine_total")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.ten_total,
                          expression: "step3.ten_total"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "ten_total",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.ten_total },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step3, "ten_total", $event.target.value)
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
                            value: _vm.errors.has("step3.ten_total"),
                            expression: "errors.has('step3.ten_total')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.ten_total")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.muth_total_2,
                          expression: "step3.muth_total_2"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "muth_total_2",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.muth_total_2 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step3,
                            "muth_total_2",
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
                            value: _vm.errors.has("step3.muth_total_2"),
                            expression: "errors.has('step3.muth_total_2')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.muth_total_2")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("অন্য কৰ্মচাৰী")]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step3.teacher_total_2,
                          expression: "step3.teacher_total_2"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "teacher_total_2",
                        placeholder: "Teacher"
                      },
                      domProps: { value: _vm.step3.teacher_total_2 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step3,
                            "teacher_total_2",
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
                            value: _vm.errors.has("step3.teacher_total_2"),
                            expression: "errors.has('step3.teacher_total_2')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.errors.first("step3.teacher_total_2")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-row-reverse" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.goPrev()
                    }
                  }
                },
                [_vm._v("\n          Back\n        ")]
              )
            ]),
            _vm._v(" "),
            _vm._m(31)
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.steps === 4
      ? _c(
          "form",
          {
            staticClass: "form-horizontal",
            attrs: { "data-vv-scope": "step4" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.validateStepForm("step4")
              }
            }
          },
          [
            _c("h1", [_vm._v("Step 4")]),
            _vm._v(" "),
            _c("div", { staticClass: "table-bordered" }, [
              _c("div", { staticClass: "row mt-2 ml-2" }, [
                _c("div", { staticClass: "form-group row ml-2" }, [
                  _c("label", { staticClass: "d-flex align-items-end" }, [
                    _vm._v("চাৰিওটা শাখাৰ সৰ্বমুঠ :")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step4.one,
                        expression: "step4.one"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|numeric",
                        expression: "'required|numeric'"
                      }
                    ],
                    staticClass: "form-control col-4 m-1",
                    attrs: {
                      type: "number",
                      name: "one",
                      placeholder: "ছাত্র "
                    },
                    domProps: { value: _vm.step4.one },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step4, "one", $event.target.value)
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
                          value: _vm.errors.has("step4.one"),
                          expression: "errors.has('step4.one')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.errors.first("step4.one")) +
                          "\n              "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step4.two,
                        expression: "step4.two"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|numeric",
                        expression: "'required|numeric'"
                      }
                    ],
                    staticClass: "form-control col-2 m-1",
                    attrs: {
                      type: "number",
                      name: "two",
                      placeholder: "ছাত্ৰী"
                    },
                    domProps: { value: _vm.step4.two },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step4, "two", $event.target.value)
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
                          value: _vm.errors.has("step4.two"),
                          expression: "errors.has('step4.two')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.errors.first("step4.two")) +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step4.three,
                        expression: "step4.three"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|numeric",
                        expression: "'required|numeric'"
                      }
                    ],
                    staticClass: "form-control col-2 m-1",
                    attrs: {
                      type: "number",
                      name: "three",
                      placeholder: "মুঠ"
                    },
                    domProps: { value: _vm.step4.three },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step4, "three", $event.target.value)
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
                          value: _vm.errors.has("step4.three"),
                          expression: "errors.has('step4.three')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.errors.first("step4.three")) +
                          "\n            "
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "d-flex justify-content-end" }, [
                _c("div", { staticClass: "form-group col-md-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step4.four,
                        expression: "step4.four"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|numeric",
                        expression: "'required|numeric'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      name: "four",
                      placeholder: "আচাৰ্য"
                    },
                    domProps: { value: _vm.step4.four },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step4, "four", $event.target.value)
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
                          value: _vm.errors.has("step4.four"),
                          expression: "errors.has('step4.four')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.errors.first("step4.four")) +
                          "\n            "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-md-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step4.five,
                        expression: "step4.five"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|numeric",
                        expression: "'required|numeric'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      name: "five",
                      placeholder: "আচৰ্যা"
                    },
                    domProps: { value: _vm.step4.five },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step4, "five", $event.target.value)
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
                          value: _vm.errors.has("step4.five"),
                          expression: "errors.has('step4.five')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.errors.first("step4.five")) +
                          "\n            "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-md-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step4.six,
                        expression: "step4.six"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|numeric",
                        expression: "'required|numeric'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", name: "six", placeholder: "মুঠ" },
                    domProps: { value: _vm.step4.six },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step4, "six", $event.target.value)
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
                          value: _vm.errors.has("step4.six"),
                          expression: "errors.has('step4.six')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.errors.first("step4.six")) +
                          "\n            "
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-2" }, [
                _c("div", { staticClass: "form-group row col-md-4 ml-2 " }, [
                  _c("label", { staticClass: "d-flex align-items-end" }, [
                    _vm._v("মুঠ অন্য কৰ্মচাৰী :")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step4.seven,
                          expression: "step4.seven"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number", name: "seven", placeholder: "" },
                      domProps: { value: _vm.step4.seven },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step4, "seven", $event.target.value)
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
                            value: _vm.errors.has("step4.seven"),
                            expression: "errors.has('step4.seven')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step4.seven")) +
                            "\n              "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row col-md-4" }, [
                  _c("label", { staticClass: "d-flex align-items-end" }, [
                    _vm._v("প্ৰতিটো শ্ৰেণীত ..:")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step4.eight,
                          expression: "step4.eight"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number", name: "eight", placeholder: "" },
                      domProps: { value: _vm.step4.eight },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step4, "eight", $event.target.value)
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
                            value: _vm.errors.has("step4.eight"),
                            expression: "errors.has('step4.eight')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step4.eight")) +
                            "\n              "
                        )
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-2 row" }, [
                _c("div", { staticClass: "form-group row col-md-8 ml-2" }, [
                  _c("label", { staticClass: "d-flex align-items-end" }, [
                    _vm._v(
                      "প্ৰতিটো শ্ৰেণীত থকা বিশেষভাবে সক্ষম ছাত্র-ছাত্ৰীৰ মুঠ\n              সংখ্যা"
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step4.nine,
                          expression: "step4.nine"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "nine",
                        placeholder: "ছাত্র"
                      },
                      domProps: { value: _vm.step4.nine },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step4, "nine", $event.target.value)
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
                            value: _vm.errors.has("step4.nine"),
                            expression: "errors.has('step4.nine')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step4.nine")) +
                            "\n              "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-md-2" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step4.ten,
                        expression: "step4.ten"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|numeric",
                        expression: "'required|numeric'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      name: "ten",
                      placeholder: "ছাত্ৰী"
                    },
                    domProps: { value: _vm.step4.ten },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step4, "ten", $event.target.value)
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
                          value: _vm.errors.has("step4.ten"),
                          expression: "errors.has('step4.ten')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.errors.first("step4.ten")) +
                          "\n            "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-md-2" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.step4.eleven,
                        expression: "step4.eleven"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|numeric",
                        expression: "'required|numeric'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      name: "eleven",
                      placeholder: "মুঠ"
                    },
                    domProps: { value: _vm.step4.eleven },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.step4, "eleven", $event.target.value)
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
                          value: _vm.errors.has("step4.eleven"),
                          expression: "errors.has('step4.eleven')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.errors.first("step4.eleven")) +
                          "\n            "
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("table", { staticClass: "table table-responsive-md mb0" }, [
                _vm._m(32),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step4.twelve,
                          expression: "step4.twelve"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "twelve",
                        placeholder: "মুঠ"
                      },
                      domProps: { value: _vm.step4.twelve },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step4, "twelve", $event.target.value)
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
                            value: _vm.errors.has("step4.twelve"),
                            expression: "errors.has('step4.twelve')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step4.twelve")) +
                            "\n              "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step4.thirteen,
                          expression: "step4.thirteen"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "thirteen",
                        placeholder: "মুঠ"
                      },
                      domProps: { value: _vm.step4.thirteen },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step4, "thirteen", $event.target.value)
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
                            value: _vm.errors.has("step4.thirteen"),
                            expression: "errors.has('step4.thirteen')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step4.thirteen")) +
                            "\n              "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step4.fourteen,
                          expression: "step4.fourteen"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "fourteen",
                        placeholder: "মুঠ"
                      },
                      domProps: { value: _vm.step4.fourteen },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step4, "fourteen", $event.target.value)
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
                            value: _vm.errors.has("step4.fourteen"),
                            expression: "errors.has('step4.fourteen')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step4.fourteen")) +
                            "\n              "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step4.fiveteen,
                          expression: "step4.fiveteen"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "fiveteen",
                        placeholder: "মুঠ"
                      },
                      domProps: { value: _vm.step4.fiveteen },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step4, "fiveteen", $event.target.value)
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
                            value: _vm.errors.has("step4.fiveteen"),
                            expression: "errors.has('step4.fiveteen')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step4.fiveteen")) +
                            "\n              "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step4.sixteen,
                          expression: "step4.sixteen"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "sixteen",
                        placeholder: "মুঠ"
                      },
                      domProps: { value: _vm.step4.sixteen },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step4, "sixteen", $event.target.value)
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
                            value: _vm.errors.has("step4.sixteen"),
                            expression: "errors.has('step4.sixteen')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step4.sixteen")) +
                            "\n              "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step4.seventeen,
                          expression: "step4.seventeen"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "seventeen",
                        placeholder: "মুঠ"
                      },
                      domProps: { value: _vm.step4.seventeen },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step4, "seventeen", $event.target.value)
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
                            value: _vm.errors.has("step4.seventeen"),
                            expression: "errors.has('step4.seventeen')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step4.seventeen")) +
                            "\n              "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step4.eighteen,
                          expression: "step4.eighteen"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "eighteen",
                        placeholder: "মুঠ"
                      },
                      domProps: { value: _vm.step4.eighteen },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step4, "eighteen", $event.target.value)
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
                            value: _vm.errors.has("step4.eighteen"),
                            expression: "errors.has('step4.eighteen')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step4.eighteen")) +
                            "\n              "
                        )
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-row-reverse" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.goPrev()
                    }
                  }
                },
                [_vm._v("\n          Back\n        ")]
              )
            ]),
            _vm._v(" "),
            _vm._m(33)
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.steps === 5
      ? _c(
          "form",
          {
            staticClass: "form-horizontal",
            attrs: { "data-vv-scope": "step5" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.validateStepForm("step5")
              }
            }
          },
          [
            _c("h1", [_vm._v("Step 5")]),
            _vm._v(" "),
            _c(
              "table",
              { staticClass: "table table-bordered table-responsive" },
              [
                _c("tbody", [
                  _vm._m(34),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("(ক) অনুসূচীত জাতি (SC)")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.step5.sc_male,
                            expression: "step5.sc_male"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric",
                            expression: "'required|numeric'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          name: "sc_male",
                          placeholder: ""
                        },
                        domProps: { value: _vm.step5.sc_male },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.step5, "sc_male", $event.target.value)
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
                              value: _vm.errors.has("step5.sc_male"),
                              expression: "errors.has('step5.sc_male')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.errors.first("step5.sc_male")) +
                              "\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.step5.sc_female,
                            expression: "step5.sc_female"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric",
                            expression: "'required|numeric'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          name: "sc_female",
                          placeholder: ""
                        },
                        domProps: { value: _vm.step5.sc_female },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.step5,
                              "sc_female",
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
                              value: _vm.errors.has("step5.sc_female"),
                              expression: "errors.has('step5.sc_female')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.errors.first("step5.sc_female")) +
                              "\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.step5.sc_total,
                            expression: "step5.sc_total"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric",
                            expression: "'required|numeric'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          name: "sc_total",
                          placeholder: ""
                        },
                        domProps: { value: _vm.step5.sc_total },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.step5, "sc_total", $event.target.value)
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
                              value: _vm.errors.has("step5.sc_total"),
                              expression: "errors.has('step5.sc_total')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.errors.first("step5.sc_total")) +
                              "\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { attrs: { rowspan: "2" } }, [
                      _vm._v("(ক) (মুছলমান)")
                    ]),
                    _vm._v(" "),
                    _vm._m(35),
                    _vm._v(" "),
                    _vm._m(36),
                    _vm._v(" "),
                    _c("td", [_vm._v("মুঠ")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("(খ) অনুসূচীত জনজাতি (ST)")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.step5.st_male,
                            expression: "step5.st_male"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric",
                            expression: "'required|numeric'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          name: "st_male",
                          placeholder: ""
                        },
                        domProps: { value: _vm.step5.st_male },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.step5, "st_male", $event.target.value)
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
                              value: _vm.errors.has("step5.st_male"),
                              expression: "errors.has('step5.st_male')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.errors.first("step5.st_male")) +
                              "\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.step5.st_female,
                            expression: "step5.st_female"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric",
                            expression: "'required|numeric'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          name: "st_female",
                          placeholder: ""
                        },
                        domProps: { value: _vm.step5.st_female },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.step5,
                              "st_female",
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
                              value: _vm.errors.has("step5.st_female"),
                              expression: "errors.has('step5.st_female')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.errors.first("step5.st_female")) +
                              "\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.step5.st_total,
                            expression: "step5.st_total"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric",
                            expression: "'required|numeric'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          name: "st_total",
                          placeholder: ""
                        },
                        domProps: { value: _vm.step5.st_total },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.step5, "st_total", $event.target.value)
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
                              value: _vm.errors.has("step5.st_total"),
                              expression: "errors.has('step5.st_total')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.errors.first("step5.st_total")) +
                              "\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.step5.muslim_male,
                            expression: "step5.muslim_male"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric",
                            expression: "'required|numeric'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          name: "muslim_male",
                          placeholder: ""
                        },
                        domProps: { value: _vm.step5.muslim_male },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.step5,
                              "muslim_male",
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
                              value: _vm.errors.has("step5.muslim_male"),
                              expression: "errors.has('step5.muslim_male')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.errors.first("step5.muslim_male")) +
                              "\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.step5.muslim_female,
                            expression: "step5.muslim_female"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric",
                            expression: "'required|numeric'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          name: "muslim_female",
                          placeholder: ""
                        },
                        domProps: { value: _vm.step5.muslim_female },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.step5,
                              "muslim_female",
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
                              value: _vm.errors.has("step5.muslim_female"),
                              expression: "errors.has('step5.muslim_female')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.errors.first("step5.muslim_female")) +
                              "\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.step5.muslim_total,
                            expression: "step5.muslim_total"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric",
                            expression: "'required|numeric'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          name: "muslim_total",
                          placeholder: ""
                        },
                        domProps: { value: _vm.step5.muslim_total },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.step5,
                              "muslim_total",
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
                              value: _vm.errors.has("step5.muslim_total"),
                              expression: "errors.has('step5.muslim_total')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.errors.first("step5.muslim_total")) +
                              "\n              "
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("(গ) অন্যান্য পিছপৰা জাতি (OBC)")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.step5.obc_male,
                            expression: "step5.obc_male"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric",
                            expression: "'required|numeric'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          name: "obc_male",
                          placeholder: ""
                        },
                        domProps: { value: _vm.step5.obc_male },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.step5, "obc_male", $event.target.value)
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
                              value: _vm.errors.has("step5.obc_male"),
                              expression: "errors.has('step5.obc_male')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.errors.first("step5.obc_male")) +
                              "\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.step5.obc_female,
                            expression: "step5.obc_female"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric",
                            expression: "'required|numeric'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          name: "obc_female",
                          placeholder: ""
                        },
                        domProps: { value: _vm.step5.obc_female },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.step5,
                              "obc_female",
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
                              value: _vm.errors.has("step5.obc_female"),
                              expression: "errors.has('step5.obc_female')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.errors.first("step5.obc_female")) +
                              "\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.step5.obc_total,
                            expression: "step5.obc_total"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric",
                            expression: "'required|numeric'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          name: "obc_total",
                          placeholder: ""
                        },
                        domProps: { value: _vm.step5.obc_total },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.step5,
                              "obc_total",
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
                              value: _vm.errors.has("step5.obc_total"),
                              expression: "errors.has('step5.obc_total')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.errors.first("step5.obc_total")) +
                              "\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("(খ) খ্ৰীষ্টান")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.step5.chritian_male,
                            expression: "step5.chritian_male"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric",
                            expression: "'required|numeric'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          name: "chritian_male",
                          placeholder: ""
                        },
                        domProps: { value: _vm.step5.chritian_male },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.step5,
                              "chritian_male",
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
                              value: _vm.errors.has("step5.chritian_male"),
                              expression: "errors.has('step5.chritian_male')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.errors.first("step5.chritian_male")) +
                              "\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.step5.chritian_female,
                            expression: "step5.chritian_female"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric",
                            expression: "'required|numeric'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          name: "chritian_female",
                          placeholder: ""
                        },
                        domProps: { value: _vm.step5.chritian_female },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.step5,
                              "chritian_female",
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
                              value: _vm.errors.has("step5.chritian_female"),
                              expression: "errors.has('step5.chritian_female')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(
                                _vm.errors.first("step5.chritian_female")
                              ) +
                              "\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.step5.chritian_total,
                            expression: "step5.chritian_total"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric",
                            expression: "'required|numeric'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          name: "chritian_total",
                          placeholder: ""
                        },
                        domProps: { value: _vm.step5.chritian_total },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.step5,
                              "chritian_total",
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
                              value: _vm.errors.has("step5.chritian_total"),
                              expression: "errors.has('step5.chritian_total')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.errors.first("step5.chritian_total")) +
                              "\n              "
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-row-reverse" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.goPrev()
                    }
                  }
                },
                [_vm._v("\n          Back\n        ")]
              )
            ]),
            _vm._v(" "),
            _vm._m(37)
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.steps === 6
      ? _c(
          "form",
          {
            staticClass: "form-horizontal",
            attrs: { "data-vv-scope": "step6" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.validateStepForm("step6")
              }
            }
          },
          [
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("(ক)")]),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n          নিকেতনখন কত অৱস্থিত -- চহৰত/গাঁৱত/বনাঞ্চলত (✓ চিন দিব ) | নিকেতনলৈ\n          ছাত্র-ছাত্ৰী অহা গাঁৱৰ সংখ্যা\n        "
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step6.one,
                    expression: "step6.one"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-1 mr-2",
                attrs: {
                  type: "text",
                  name: "one",
                  placeholder: "নিকেতনখন ....."
                },
                domProps: { value: _vm.step6.one },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step6, "one", $event.target.value)
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
                      value: _vm.errors.has("step6.one"),
                      expression: "errors.has('step6.one')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step6.one")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("নগৰীয়া বস্তিৰ সংখ্যা")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step6.two,
                    expression: "step6.two"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-1 mr-2",
                attrs: {
                  type: "text",
                  name: "two",
                  placeholder: "নগৰীয়া বস্তিৰ সংখ্যা"
                },
                domProps: { value: _vm.step6.two },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step6, "two", $event.target.value)
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
                      value: _vm.errors.has("step6.two"),
                      expression: "errors.has('step6.two')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step6.two")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("ৱাৰ্ডৰ সংখ্যা")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step6.three,
                    expression: "step6.three"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-1 mr-2",
                attrs: {
                  type: "text",
                  name: "three",
                  placeholder: "ৱাৰ্ডৰ সংখ্যা"
                },
                domProps: { value: _vm.step6.three },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step6, "three", $event.target.value)
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
                      value: _vm.errors.has("step6.three"),
                      expression: "errors.has('step6.three')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step6.three")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n          গাঁৱৰ তালিকা বেলেগে সংলগ্ন কৰি গাঁৱৰ পৰা অহা ছাত্র-ছাত্ৰী সংখ্যা দিব |\n        "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col" }, [
                _vm._v("(খ) মাহিলী শিক্ষণ শুল্ক :")
              ]),
              _vm._v(" "),
              _c(
                "table",
                {
                  staticClass: "table col-8 table-responsive table-borderless"
                },
                [
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [_vm._v("অংকুৰ, মুকুল")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.step6.four,
                              expression: "step6.four"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "four",
                            placeholder: ""
                          },
                          domProps: { value: _vm.step6.four },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.step6, "four", $event.target.value)
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
                                value: _vm.errors.has("step6.four"),
                                expression: "errors.has('step6.four')"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [
                            _vm._v(
                              "\n                  " +
                                _vm._s(_vm.errors.first("step6.four")) +
                                "\n                "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v("১মৰ পৰা ৫ ম")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.step6.five,
                              expression: "step6.five"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "five",
                            placeholder: ""
                          },
                          domProps: { value: _vm.step6.five },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.step6, "five", $event.target.value)
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
                                value: _vm.errors.has("step6.five"),
                                expression: "errors.has('step6.five')"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [
                            _vm._v(
                              "\n                  " +
                                _vm._s(_vm.errors.first("step6.five")) +
                                "\n                "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("৬ষ্টৰ পৰা ৮ ম")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.step6.six,
                              expression: "step6.six"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", name: "six", placeholder: "" },
                          domProps: { value: _vm.step6.six },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.step6, "six", $event.target.value)
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
                                value: _vm.errors.has("step6.six"),
                                expression: "errors.has('step6.six')"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [
                            _vm._v(
                              "\n                  " +
                                _vm._s(_vm.errors.first("step6.six")) +
                                "\n                "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v("৯ ম আৰু ১০ ম")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.step6.seven,
                              expression: "step6.seven"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "seven",
                            placeholder: ""
                          },
                          domProps: { value: _vm.step6.seven },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.step6, "seven", $event.target.value)
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
                                value: _vm.errors.has("step6.seven"),
                                expression: "errors.has('step6.seven')"
                              }
                            ],
                            staticClass: "text-danger"
                          },
                          [
                            _vm._v(
                              "\n                  " +
                                _vm._s(_vm.errors.first("step6.seven")) +
                                "\n                "
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("(গ)")]),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("(১) আচাৰ্য/আচাৰ্জাৰ নুন্যতম মানধন")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step6.eight,
                    expression: "step6.eight"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: {
                  type: "text",
                  name: "eight",
                  placeholder: "নুন্যতম মানধন.."
                },
                domProps: { value: _vm.step6.eight },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step6, "eight", $event.target.value)
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
                      value: _vm.errors.has("step6.eight"),
                      expression: "errors.has('step6.eight')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step6.eight")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("(২) আচাৰ্য/আচাৰ্জাৰ অধিকতম মানধন")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step6.nine,
                    expression: "step6.nine"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: {
                  type: "text",
                  name: "nine",
                  placeholder: "অধিকতম মানধন"
                },
                domProps: { value: _vm.step6.nine },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step6, "nine", $event.target.value)
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
                      value: _vm.errors.has("step6.nine"),
                      expression: "errors.has('step6.nine')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step6.nine")) +
                      "\n        "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("(ঘ)")]),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n          নিকেতনৰ হিচাব পৰীক্ষকৰ প্ৰতিবেদন ২০১৯ বৰ্ষৰ ৩১ মাৰ্চলৈ সম্পূৰ্ণ কৰি\n          প্ৰদেশ কাৰ্যালয়লৈ প্ৰেৰণ কৰিছে/কৰা নাই (✓ চিন দিব ) ।\n        "
                )
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("যদি কৰা নাই কোন চনলৈ পঠাইছে লিখিব")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step6.ten,
                    expression: "step6.ten"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: {
                  type: "text",
                  name: "ten",
                  placeholder: "অধিকতম মানধন "
                },
                domProps: { value: _vm.step6.ten },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step6, "ten", $event.target.value)
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
                      value: _vm.errors.has("step6.ten"),
                      expression: "errors.has('step6.ten')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step6.ten")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(
                "\n        নিকেতনৰ তথ্য আৰু হিচাব-নিকাচ চাৰ্টাড অকাউন্টটেণ্টৰ (C/A) দ্বাৰা আৰু\n        কম্পিউটাৰৰ যোগেদি কৰা হয়/নহয় (✓ চিন দিব )\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n          (ঙ) নিকেতনৰ বেংক একাউণ্ট নম্বৰ আৰু বেংকৰ নাম (যিমানটা থাকে)\n        "
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step6.eleven,
                    expression: "step6.eleven"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-1 mr-2",
                attrs: {
                  type: "text",
                  name: "eleven",
                  placeholder: "অধিকতম মানধন "
                },
                domProps: { value: _vm.step6.eleven },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step6, "eleven", $event.target.value)
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
                      value: _vm.errors.has("step6.eleven"),
                      expression: "errors.has('step6.eleven')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step6.eleven")) +
                      "\n        "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n          (চ) ভবিষ্য নিধি - E. P. F. আছে/নাই । যদি আছে নম্বৰ দিব :\n        "
                )
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.step6.twelve,
                      expression: "step6.twelve"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "custom-select col-2",
                  attrs: { name: "twelve" },
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
                        _vm.step6,
                        "twelve",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "আছে", selected: "" } }, [
                    _vm._v("আছে")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "নাই" } }, [_vm._v("নাই")])
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
                      value: _vm.errors.has("step6.twelve"),
                      expression: "errors.has('step6.twelve')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step6.twelve")) +
                      "\n        "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n          (জ) নিকেতনৰ আচাৰ্যসকল প্ৰান্তীয় আচাৰ্য কল্যান নিধিৰ সদস্য হয়নে ?\n        "
                )
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.step6.thirteen,
                      expression: "step6.thirteen"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "custom-select col-2",
                  attrs: { name: "thirteen" },
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
                        _vm.step6,
                        "thirteen",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "হয়", selected: "" } }, [
                    _vm._v("হয়")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "নহয়" } }, [_vm._v("নহয়")])
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
                      value: _vm.errors.has("step6.thirteen"),
                      expression: "errors.has('step6.thirteen')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step6.thirteen")) +
                      "\n        "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _vm._m(38),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-row-reverse" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.goPrev()
                    }
                  }
                },
                [_vm._v("\n          Back\n        ")]
              )
            ]),
            _vm._v(" "),
            _vm._m(39)
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.steps === 7
      ? _c(
          "form",
          {
            staticClass: "form-horizontal",
            attrs: { "data-vv-scope": "step7" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.validateStepForm("step7")
              }
            }
          },
          [
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }),
              _vm._v("\n    ৫। (ক) প্রধানাচাৰ্য/ভাৰপ্ৰাপ্ত প্রধানাচাৰ্যৰ নাম "),
              _c("p"),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step7.one,
                    expression: "step7.one"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "one", placeholder: "" },
                domProps: { value: _vm.step7.one },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step7, "one", $event.target.value)
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
                      value: _vm.errors.has("step7.one"),
                      expression: "errors.has('step7.one')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step7.one")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2 " }, [
                _vm._v("\n        স্থানীয় সমিতিৰ পৰা পোৱা নিযুক্তিৰ তাৰিখ ")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step7.two,
                    expression: "step7.two"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2 mt-1",
                attrs: { type: "text", name: "two", placeholder: "" },
                domProps: { value: _vm.step7.two },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step7, "two", $event.target.value)
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
                      value: _vm.errors.has("step7.two"),
                      expression: "errors.has('step7.two')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step7.two")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n        শিশু শিক্ষা সমিতি, অসমৰ পৰা পোৱা নিযুক্তিৰ তাৰিখ"
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step7.three,
                    expression: "step7.three"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "three", placeholder: "" },
                domProps: { value: _vm.step7.three },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step7, "three", $event.target.value)
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
                      value: _vm.errors.has("step7.three"),
                      expression: "errors.has('step7.three')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step7.three")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "প্রধানাচাৰ্য স্থায়ী/অস্থায়ী/ভাৰপ্ৰাপ্ত (✓ চিন দিব )। উপ-প্ৰধানাচাৰ্যৰ নাম (যদি আছে) : "
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step7.four,
                    expression: "step7.four"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "four", placeholder: "" },
                domProps: { value: _vm.step7.four },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step7, "four", $event.target.value)
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
                      value: _vm.errors.has("step7.four"),
                      expression: "errors.has('step7.four')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step7.four")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("প্রধানাচাৰ্য প্ৰশিক্ষণ লোৱা চন ")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step7.five,
                    expression: "step7.five"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "five", placeholder: "" },
                domProps: { value: _vm.step7.five },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step7, "five", $event.target.value)
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
                      value: _vm.errors.has("step7.five"),
                      expression: "errors.has('step7.five')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step7.five")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("নিযুক্তি স্থায়ী/অস্থায়ী (✓ চিন দিব )।")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("(৬) (ক) নিকেতনৰ মাটিৰ পৰিমাণ")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step7.six,
                    expression: "step7.six"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "six", placeholder: "" },
                domProps: { value: _vm.step7.six },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step7, "six", $event.target.value)
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
                      value: _vm.errors.has("step7.six"),
                      expression: "errors.has('step7.six')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step7.six")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "মাটি নিজৰ হয় / নহয় । (ম্যাদী/চৰকাৰী/দখল) নিকেতনৰ ভৱন পকা/অৰ্দ্ধ পকা/ অস্থায়ী (✓ চিন দিব )।"
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("(খ) নিকেতনখন")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step7.seven,
                    expression: "step7.seven"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "seven", placeholder: "" },
                domProps: { value: _vm.step7.seven },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step7, "seven", $event.target.value)
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
                      value: _vm.errors.has("step7.seven"),
                      expression: "errors.has('step7.seven')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step7.seven")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("পঞ্চায়ত,")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step7.eight,
                    expression: "step7.eight"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "eight", placeholder: "" },
                domProps: { value: _vm.step7.eight },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step7, "eight", $event.target.value)
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
                      value: _vm.errors.has("step7.eight"),
                      expression: "errors.has('step7.eight')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step7.eight")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("উন্নয়ন খণ্ড (ব্লক)ত")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step7.nine,
                    expression: "step7.nine"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "nine", placeholder: "" },
                domProps: { value: _vm.step7.nine },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step7, "nine", $event.target.value)
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
                      value: _vm.errors.has("step7.nine"),
                      expression: "errors.has('step7.nine')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step7.nine")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("মহকুমাত অৱস্থিত ।")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("(গ) পুথিভঁৰাল ব্যৱস্থা : অধ্যয়ন কক্ষ")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step7.ten,
                    expression: "step7.ten"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "ten", placeholder: "" },
                domProps: { value: _vm.step7.ten },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step7, "ten", $event.target.value)
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
                      value: _vm.errors.has("step7.ten"),
                      expression: "errors.has('step7.ten')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step7.ten")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("টা /আলমাৰী সংখ্যা")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step7.eleven,
                    expression: "step7.eleven"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "eleven", placeholder: "" },
                domProps: { value: _vm.step7.eleven },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step7, "eleven", $event.target.value)
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
                      value: _vm.errors.has("step7.eleven"),
                      expression: "errors.has('step7.eleven')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step7.eleven")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("টা/কিতাবৰ সংখ্যা")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step7.twelve,
                    expression: "step7.twelve"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "twelve", placeholder: "" },
                domProps: { value: _vm.step7.twelve },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step7, "twelve", $event.target.value)
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
                      value: _vm.errors.has("step7.twelve"),
                      expression: "errors.has('step7.twelve')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step7.twelve")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "খন । পঞ্জীয়ন বহীত কিতাব কিতাবসমূহ পঞ্জীয়ন কৰা হয়/নহয় । (✓ চিন দিব )"
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(40),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "(ঙ) খেলপথাৰ আছে/নাই । (✓ চিন দিব ) যদি নাই, কি ধৰণৰ ব্যবস্থা আছে"
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step7.thirteen,
                    expression: "step7.thirteen"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "thirteen", placeholder: "" },
                domProps: { value: _vm.step7.thirteen },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step7, "thirteen", $event.target.value)
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
                      value: _vm.errors.has("step7.thirteen"),
                      expression: "errors.has('step7.thirteen')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step7.thirteen")) +
                      "\n        "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "(চ) উপযুক্ত প্ৰাৰ্থনা গৃহ আছে/নাই (✓ চিন দিব ) (যদি নাই সোনকালে ব্যবস্থা কৰিব) । প্ৰথনা বিদ্যা\n        ভাৰতীয় ক্ৰম অনুসৰি হয়/নহয় (✓ চিন দিব )\n        । বহি প্ৰাৰ্থনা হয়নে ?"
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step7.fourteen,
                    expression: "step7.fourteen"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "fourteen", placeholder: "" },
                domProps: { value: _vm.step7.fourteen },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step7, "fourteen", $event.target.value)
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
                      value: _vm.errors.has("step7.fourteen"),
                      expression: "errors.has('step7.fourteen')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step7.fourteen")) +
                      "\n        "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-row-reverse" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.goPrev()
                    }
                  }
                },
                [_vm._v("\n          Back\n        ")]
              )
            ]),
            _vm._v(" "),
            _vm._m(41)
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.steps === 8
      ? _c(
          "form",
          {
            staticClass: "form-horizontal",
            attrs: { "data-vv-scope": "step8" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.validateStepForm("step8")
              }
            }
          },
          [
            _vm._m(42),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("৭ । (ক) পঞ্জীয়নৰ বাবে চৰকাৰৰ সৈতে হোৱা যোগাযোগ")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step8.one,
                    expression: "step8.one"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "one", placeholder: "" },
                domProps: { value: _vm.step8.one },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step8, "one", $event.target.value)
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
                      value: _vm.errors.has("step8.one"),
                      expression: "errors.has('step8.one')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.one")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n          (ক) আবেদন কৰিছে (খ) নিকেতন খোলাৰ অনুমতি হৈছে (গ) যদি চৰকাৰী পঞ্জীভূক্ত\n          হৈছে, পঞ্জীয়ন নম্বৰ দিব\n        "
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step8.two,
                    expression: "step8.two"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "two", placeholder: "" },
                domProps: { value: _vm.step8.two },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step8, "two", $event.target.value)
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
                      value: _vm.errors.has("step8.two"),
                      expression: "errors.has('step8.two')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.two")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n          (ঘ) কোনো ধৰণৰ যোগাযোগ হোৱা নাই । সেৱাৰ কড নম্বৰ দিব\n        "
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step8.three,
                    expression: "step8.three"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "three", placeholder: "3" },
                domProps: { value: _vm.step8.three },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step8, "three", $event.target.value)
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
                      value: _vm.errors.has("step8.three"),
                      expression: "errors.has('step8.three')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.three")) +
                      "\n        "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("৭ । (ক) পঞ্জীয়নৰ বাবে চৰকাৰৰ সৈতে হোৱা যোগাযোগ")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step8.four,
                    expression: "step8.four"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "four", placeholder: "3" },
                domProps: { value: _vm.step8.four },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step8, "four", $event.target.value)
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
                      value: _vm.errors.has("step8.four"),
                      expression: "errors.has('step8.four')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.four")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n          (ক) আবেদন কৰিছে (খ) নিকেতন খোলাৰ অনুমতি হৈছে (গ) যদি চৰকাৰী পঞ্জীভূক্ত\n          হৈছে, পঞ্জীয়ন নম্বৰ দিব\n        "
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step8.five,
                    expression: "step8.five"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "five", placeholder: "3" },
                domProps: { value: _vm.step8.five },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step8, "five", $event.target.value)
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
                      value: _vm.errors.has("step8.five"),
                      expression: "errors.has('step8.five')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.five")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n          (ঘ) কোনো ধৰণৰ যোগাযোগ হোৱা নাই । সেৱাৰ কড নম্বৰ দিব\n        "
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step8.six,
                    expression: "step8.six"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "six", placeholder: "3" },
                domProps: { value: _vm.step8.six },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step8, "six", $event.target.value)
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
                      value: _vm.errors.has("step8.six"),
                      expression: "errors.has('step8.six')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.six")) +
                      "\n        "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n          (খ) শিশু শিক্ষা সমিতি, অসমৰ অন্তৰ্ভুক্তৰ পঞ্জীয়ন নম্বৰ দিব\n        "
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step8.seven,
                    expression: "step8.seven"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "seven", placeholder: "3" },
                domProps: { value: _vm.step8.seven },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step8, "seven", $event.target.value)
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
                      value: _vm.errors.has("step8.seven"),
                      expression: "errors.has('step8.seven')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.seven")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n          (যদি নাই অতি সোনকালে মূল প্ৰমাণ পত্ৰ সহ পঞ্জীয়ন নম্বৰ লব )\n        "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n          (গ) ষষ্ঠ শ্ৰেণীৰ‍ পৰা অষ্টম শ্ৰেণীলৈ সমিতিৰ উচ্চ মাধ্যমিক বিদ্যালয়\n          উপ-সমিতিৰ পৰা অনুমোদন পোৱা চন\n        "
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step8.eight,
                    expression: "step8.eight"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "eight", placeholder: "3" },
                domProps: { value: _vm.step8.eight },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step8, "eight", $event.target.value)
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
                      value: _vm.errors.has("step8.eight"),
                      expression: "errors.has('step8.eight')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.eight")) +
                      "\n        "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n          (ঘ) নৱম আৰু দশম শ্ৰেণীৰ‍ বাবে সমিতিৰ উচ্চ মাধ্যমিক বিদ্যালয় উপ-সমিতিৰ\n          পৰা অনুমোদন পোৱা চন\n        "
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step8.nine,
                    expression: "step8.nine"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "nine", placeholder: "3" },
                domProps: { value: _vm.step8.nine },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step8, "nine", $event.target.value)
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
                      value: _vm.errors.has("step8.nine"),
                      expression: "errors.has('step8.nine')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.nine")) +
                      "\n        "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n          ৮ । (ক) বালিকা শিক্ষাৰ কালাংখ নিমনীয়া ভাবে হৈ আছে/নাই ।\n        "
                )
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.step8.ten,
                      expression: "step8.ten"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "custom-select col-2",
                  attrs: { name: "ten" },
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
                        _vm.step8,
                        "ten",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "আছে", selected: "" } }, [
                    _vm._v("আছে")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "নাই" } }, [_vm._v("নাই")])
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
                      value: _vm.errors.has("step8.ten"),
                      expression: "errors.has('step8.ten')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.ten")) +
                      "\n        "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n          (খ) পঞ্চপদী শিক্ষণ পদ্ধতিৰ আধাৰত সকলো আচাৰ্যই পাঠ যোজনা বনাই পাঠ দান\n          কৰে/নকৰে । যদি নকৰে কিয় নকৰে জনাব :\n        "
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step8.eleven,
                    expression: "step8.eleven"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "eleven", placeholder: "3" },
                domProps: { value: _vm.step8.eleven },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step8, "eleven", $event.target.value)
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
                      value: _vm.errors.has("step8.eleven"),
                      expression: "errors.has('step8.eleven')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.eleven")) +
                      "\n        "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n          (গ) Spoken English অথবা Class ত English to English কোন কোন শ্ৰেণীত\n          কেইটাকৈ Class\n        "
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step8.twelve,
                    expression: "step8.twelve"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "twelve", placeholder: "3" },
                domProps: { value: _vm.step8.twelve },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step8, "twelve", $event.target.value)
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
                      value: _vm.errors.has("step8.twelve"),
                      expression: "errors.has('step8.twelve')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.twelve")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("হয় ।")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("(ঘ) স্মাৰ্ট ক্লাছৰ ব্যবস্থা আছে/নাই ।")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.step8.thirteen,
                      expression: "step8.thirteen"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "custom-select col-2",
                  attrs: { name: "thirteen" },
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
                        _vm.step8,
                        "thirteen",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "আছে", selected: "" } }, [
                    _vm._v("আছে")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "নাই" } }, [_vm._v("নাই")])
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
                      value: _vm.errors.has("step8.thirteen"),
                      expression: "errors.has('step8.thirteen')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.thirteen")) +
                      "\n        "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n          (ঙ) নিকেতনত শিশু বাটিকাৰ সুকীয়া ব্যবস্থা হৈছে/হোৱা নাই ।\n        "
                )
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.step8.fourteen,
                      expression: "step8.fourteen"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "custom-select col-2",
                  attrs: { name: "fourteen" },
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
                        _vm.step8,
                        "fourteen",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { selected: "", value: "হৈছে" } }, [
                    _vm._v("হৈছে")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "হোৱা নাই" } }, [
                    _vm._v("হোৱা নাই")
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
                      value: _vm.errors.has("step8.fourteen"),
                      expression: "errors.has('step8.fourteen')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.fourteen")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("শিশু বাটিকা প্ৰমুখ নিযুক্তি দিছে/দিয়া নাই ।")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.step8.fiveteen,
                      expression: "step8.fiveteen"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "custom-select col-2",
                  attrs: { name: "fiveteen" },
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
                        _vm.step8,
                        "fiveteen",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { selected: "", value: "দিছে" } }, [
                    _vm._v("দিছে")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "দিয়া নাই" } }, [
                    _vm._v("দিয়া নাই")
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
                      value: _vm.errors.has("step8.fiveteen"),
                      expression: "errors.has('step8.fiveteen')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.fiveteen")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v(
                  "\n          নিকেতন শিশু বাটিকা কোনটো ৰূপত আছে --- নমুনা ৰূপ/ প্ৰভাৱীৰূপ/পযত্নশীল\n          ৰূপ\n        "
                )
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.step8.sixteen,
                      expression: "step8.sixteen"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "custom-select col-2",
                  attrs: { name: "sixteen" },
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
                        _vm.step8,
                        "sixteen",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c(
                    "option",
                    { attrs: { selected: "", value: "নমুনা ৰূপ" } },
                    [_vm._v("নমুনা ৰূপ")]
                  ),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "প্ৰভাৱীৰূপ" } }, [
                    _vm._v("প্ৰভাৱীৰূপ")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "পযত্নশীল ৰূপ" } }, [
                    _vm._v("পযত্নশীল ৰূপ")
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
                      value: _vm.errors.has("step8.sixteen"),
                      expression: "errors.has('step8.sixteen')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.sixteen")) +
                      "\n        "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row" }, [
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("(চ) কম্পিউটাৰ শিক্ষা ব্যবস্থা আছে/নাই ।")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.step8.seventeen,
                      expression: "step8.seventeen"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "custom-select col-2",
                  attrs: { name: "seventeen" },
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
                        _vm.step8,
                        "seventeen",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { selected: "", value: "আছে" } }, [
                    _vm._v("আছে")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "নাই" } }, [_vm._v("নাই")])
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
                      value: _vm.errors.has("step8.seventeen"),
                      expression: "errors.has('step8.seventeen')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.seventeen")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("শিশু বাটিকা প্ৰমুখ নিযুক্তি দিছে/দিয়া নাই")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.step8.eighteen,
                      expression: "step8.eighteen"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "custom-select col-2",
                  attrs: { name: "eighteen" },
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
                        _vm.step8,
                        "eighteen",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { selected: "", value: "দিছে ।" } }, [
                    _vm._v("দিছে ।")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "দিয়া নাই ।" } }, [
                    _vm._v("দিয়া নাই ।")
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
                      value: _vm.errors.has("step8.eighteen"),
                      expression: "errors.has('step8.eighteen')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.eighteen")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("যদি আছে কম্পিউটাৰ /লেপটপ (Laptop) কিমানতা")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.step8.nineteen,
                    expression: "step8.nineteen"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control col-2 mr-2",
                attrs: { type: "text", name: "nineteen", placeholder: "3" },
                domProps: { value: _vm.step8.nineteen },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.step8, "nineteen", $event.target.value)
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
                      value: _vm.errors.has("step8.nineteen"),
                      expression: "errors.has('step8.nineteen')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.nineteen")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2 mr-2" }, [
                _vm._v("কম্পিউটাৰ বিষয়ৰ আচাৰ্য আছে/নাই ।")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.step8.twenty,
                      expression: "step8.twenty"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "custom-select col-2",
                  attrs: { name: "twenty" },
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
                        _vm.step8,
                        "twenty",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { selected: "", value: "আছে ।" } }, [
                    _vm._v("আছে ।")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "নাই ।" } }, [_vm._v("নাই ।")])
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
                      value: _vm.errors.has("step8.twenty"),
                      expression: "errors.has('step8.twenty')"
                    }
                  ],
                  staticClass: "text-danger"
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first("step8.twenty")) +
                      "\n        "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _vm._m(43),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-row-reverse" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.goPrev()
                    }
                  }
                },
                [_vm._v("\n          Back\n    ")]
              )
            ]),
            _vm._v(" "),
            _vm._m(44)
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.steps === 9
      ? _c(
          "form",
          {
            staticClass: "form-horizontal",
            attrs: { "data-vv-scope": "step9" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submitForm("step9")
              }
            }
          },
          [
            _vm._m(45),
            _vm._v(" "),
            _vm._m(46),
            _vm._v(" "),
            _vm._m(47),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 row justify-content-between" }, [
              _vm._m(48),
              _vm._v(" "),
              _c("div", { staticClass: "p-2 col-4 row" }, [
                _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("নিকেতনৰ নাম")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.step9.institute_name,
                      expression: "step9.institute_name"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "institute_name",
                    placeholder: ""
                  },
                  domProps: { value: _vm.step9.institute_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.step9, "institute_name", $event.target.value)
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
                        value: _vm.errors.has("step9.institute_name"),
                        expression: "errors.has('step9.institute_name')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.errors.first("step9.institute_name")) +
                        "\n            "
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("table", { staticClass: "table table-bordered" }, [
              _c("tbody", [
                _vm._m(49),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("১")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.one_name,
                          expression: "step9.one_name"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "one_name",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.one_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "one_name", $event.target.value)
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
                            value: _vm.errors.has("step9.one_name"),
                            expression: "errors.has('step9.one_name')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.one_name")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.one_start_date,
                          expression: "step9.one_start_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "one_start_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.one_start_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "one_start_date",
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
                            value: _vm.errors.has("step9.one_start_date"),
                            expression: "errors.has('step9.one_start_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.one_start_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.one_end_date,
                          expression: "step9.one_end_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "one_end_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.one_end_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "one_end_date",
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
                            value: _vm.errors.has("step9.one_end_date"),
                            expression: "errors.has('step9.one_end_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.one_end_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.one_mohila,
                          expression: "step9.one_mohila"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "one_mohila",
                        placeholder: "mohila"
                      },
                      domProps: { value: _vm.step9.one_mohila },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "one_mohila", $event.target.value)
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
                            value: _vm.errors.has("step9.one_mohila"),
                            expression: "errors.has('step9.one_mohila')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.one_mohila")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.one_nondor,
                          expression: "step9.one_nondor"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "one_nondor",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.one_nondor },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "one_nondor", $event.target.value)
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
                            value: _vm.errors.has("step9.one_nondor"),
                            expression: "errors.has('step9.one_nondor')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.one_nondor")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.one_ahota,
                          expression: "step9.one_ahota"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "one_ahota",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.one_ahota },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "one_ahota", $event.target.value)
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
                            value: _vm.errors.has("step9.one_ahota"),
                            expression: "errors.has('step9.one_ahota')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.one_ahota")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.one_pathdam,
                          expression: "step9.one_pathdam"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "one_pathdam",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.one_pathdam },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "one_pathdam",
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
                            value: _vm.errors.has("step9.one_pathdam"),
                            expression: "errors.has('step9.one_pathdam')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.one_pathdam")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.one_7_diniya,
                          expression: "step9.one_7_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "one_7_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.one_7_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "one_7_diniya",
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
                            value: _vm.errors.has("step9.one_7_diniya"),
                            expression: "errors.has('step9.one_7_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.one_7_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.one_15_diniya,
                          expression: "step9.one_15_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "one_15_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.one_15_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "one_15_diniya",
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
                            value: _vm.errors.has("step9.one_15_diniya"),
                            expression: "errors.has('step9.one_15_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.one_15_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("২")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.two_name,
                          expression: "step9.two_name"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "two_name",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.two_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "two_name", $event.target.value)
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
                            value: _vm.errors.has("step9.two_name"),
                            expression: "errors.has('step9.two_name')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.two_name")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.two_start_date,
                          expression: "step9.two_start_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "two_start_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.two_start_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "two_start_date",
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
                            value: _vm.errors.has("step9.two_start_date"),
                            expression: "errors.has('step9.two_start_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.two_start_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.two_end_date,
                          expression: "step9.two_end_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "two_end_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.two_end_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "two_end_date",
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
                            value: _vm.errors.has("step9.two_end_date"),
                            expression: "errors.has('step9.two_end_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.two_end_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.two_mohila,
                          expression: "step9.two_mohila"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "two_mohila",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.two_mohila },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "two_mohila", $event.target.value)
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
                            value: _vm.errors.has("step9.two_mohila"),
                            expression: "errors.has('step9.two_mohila')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.two_mohila")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.two_nondor,
                          expression: "step9.two_nondor"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "two_nondor",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.two_nondor },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "two_nondor", $event.target.value)
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
                            value: _vm.errors.has("step9.two_nondor"),
                            expression: "errors.has('step9.two_nondor')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.two_nondor")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.two_ahota,
                          expression: "step9.two_ahota"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "two_ahota",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.two_ahota },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "two_ahota", $event.target.value)
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
                            value: _vm.errors.has("step9.two_ahota"),
                            expression: "errors.has('step9.two_ahota')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.two_ahota")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.two_pathdam,
                          expression: "step9.two_pathdam"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "two_pathdam",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.two_pathdam },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "two_pathdam",
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
                            value: _vm.errors.has("step9.two_pathdam"),
                            expression: "errors.has('step9.two_pathdam')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.two_pathdam")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.two_7_diniya,
                          expression: "step9.two_7_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "two_7_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.two_7_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "two_7_diniya",
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
                            value: _vm.errors.has("step9.two_7_diniya"),
                            expression: "errors.has('step9.two_7_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.two_7_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.two_15_diniya,
                          expression: "step9.two_15_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "two_15_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.two_15_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "two_15_diniya",
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
                            value: _vm.errors.has("step9.two_15_diniya"),
                            expression: "errors.has('step9.two_15_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.two_15_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("৩")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.three_name,
                          expression: "step9.three_name"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "three_name",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.three_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "three_name", $event.target.value)
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
                            value: _vm.errors.has("step9.three_name"),
                            expression: "errors.has('step9.three_name')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.three_name")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.three_start_date,
                          expression: "step9.three_start_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "three_start_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.three_start_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "three_start_date",
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
                            value: _vm.errors.has("step9.three_start_date"),
                            expression: "errors.has('step9.three_start_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.three_start_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.three_end_date,
                          expression: "step9.three_end_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "three_end_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.three_end_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "three_end_date",
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
                            value: _vm.errors.has("step9.three_end_date"),
                            expression: "errors.has('step9.three_end_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.three_end_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.three_mohila,
                          expression: "step9.three_mohila"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "three_mohila",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.three_mohila },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "three_mohila",
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
                            value: _vm.errors.has("step9.three_mohila"),
                            expression: "errors.has('step9.three_mohila')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.three_mohila")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.three_nondor,
                          expression: "step9.three_nondor"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "three_nondor",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.three_nondor },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "three_nondor",
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
                            value: _vm.errors.has("step9.three_nondor"),
                            expression: "errors.has('step9.three_nondor')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.three_nondor")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.three_ahota,
                          expression: "step9.three_ahota"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "three_ahota",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.three_ahota },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "three_ahota",
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
                            value: _vm.errors.has("step9.three_ahota"),
                            expression: "errors.has('step9.three_ahota')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.three_ahota")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.three_pathdam,
                          expression: "step9.three_pathdam"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "three_pathdam",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.three_pathdam },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "three_pathdam",
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
                            value: _vm.errors.has("step9.three_pathdam"),
                            expression: "errors.has('step9.three_pathdam')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.three_pathdam")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.three_7_diniya,
                          expression: "step9.three_7_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "three_7_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.three_7_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "three_7_diniya",
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
                            value: _vm.errors.has("step9.three_7_diniya"),
                            expression: "errors.has('step9.three_7_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.three_7_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.three_15_diniya,
                          expression: "step9.three_15_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "three_15_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.three_15_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "three_15_diniya",
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
                            value: _vm.errors.has("step9.three_15_diniya"),
                            expression: "errors.has('step9.three_15_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.three_15_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(50),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("৪")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.four_name,
                          expression: "step9.four_name"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "four_name",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.four_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "four_name", $event.target.value)
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
                            value: _vm.errors.has("step9.four_name"),
                            expression: "errors.has('step9.four_name')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.four_name")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.four_start_date,
                          expression: "step9.four_start_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "four_start_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.four_start_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "four_start_date",
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
                            value: _vm.errors.has("step9.four_start_date"),
                            expression: "errors.has('step9.four_start_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.four_start_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.four_end_date,
                          expression: "step9.four_end_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "four_end_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.four_end_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "four_end_date",
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
                            value: _vm.errors.has("step9.four_end_date"),
                            expression: "errors.has('step9.four_end_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.four_end_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.four_mohila,
                          expression: "step9.four_mohila"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "four_mohila",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.four_mohila },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "four_mohila",
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
                            value: _vm.errors.has("step9.four_mohila"),
                            expression: "errors.has('step9.four_mohila')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.four_mohila")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.four_nondor,
                          expression: "step9.four_nondor"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "four_nondor",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.four_nondor },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "four_nondor",
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
                            value: _vm.errors.has("step9.four_nondor"),
                            expression: "errors.has('step9.four_nondor')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.four_nondor")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.four_ahota,
                          expression: "step9.four_ahota"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "four_ahota",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.four_ahota },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "four_ahota", $event.target.value)
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
                            value: _vm.errors.has("step9.four_ahota"),
                            expression: "errors.has('step9.four_ahota')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.four_ahota")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.four_pathdam,
                          expression: "step9.four_pathdam"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "four_pathdam",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.four_pathdam },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "four_pathdam",
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
                            value: _vm.errors.has("step9.four_pathdam"),
                            expression: "errors.has('step9.four_pathdam')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.four_pathdam")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.four_7_diniya,
                          expression: "step9.four_7_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "four_7_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.four_7_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "four_7_diniya",
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
                            value: _vm.errors.has("step9.four_7_diniya"),
                            expression: "errors.has('step9.four_7_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.four_7_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.four_15_diniya,
                          expression: "step9.four_15_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "four_15_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.four_15_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "four_15_diniya",
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
                            value: _vm.errors.has("step9.four_15_diniya"),
                            expression: "errors.has('step9.four_15_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.four_15_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("৫")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.five_name,
                          expression: "step9.five_name"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "five_name",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.five_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "five_name", $event.target.value)
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
                            value: _vm.errors.has("step9.five_name"),
                            expression: "errors.has('step9.five_name')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.five_name")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.five_start_date,
                          expression: "step9.five_start_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "five_start_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.five_start_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "five_start_date",
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
                            value: _vm.errors.has("step9.five_start_date"),
                            expression: "errors.has('step9.five_start_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.five_start_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.five_end_date,
                          expression: "step9.five_end_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "five_end_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.five_end_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "five_end_date",
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
                            value: _vm.errors.has("step9.five_end_date"),
                            expression: "errors.has('step9.five_end_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.five_end_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.five_mohila,
                          expression: "step9.five_mohila"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "five_mohila",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.five_mohila },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "five_mohila",
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
                            value: _vm.errors.has("step9.five_mohila"),
                            expression: "errors.has('step9.five_mohila')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.five_mohila")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.five_nondor,
                          expression: "step9.five_nondor"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "five_nondor",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.five_nondor },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "five_nondor",
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
                            value: _vm.errors.has("step9.five_nondor"),
                            expression: "errors.has('step9.five_nondor')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.five_nondor")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.five_ahota,
                          expression: "step9.five_ahota"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "five_ahota",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.five_ahota },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "five_ahota", $event.target.value)
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
                            value: _vm.errors.has("step9.five_ahota"),
                            expression: "errors.has('step9.five_ahota')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.five_ahota")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.five_pathdam,
                          expression: "step9.five_pathdam"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "five_pathdam",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.five_pathdam },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "five_pathdam",
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
                            value: _vm.errors.has("step9.five_pathdam"),
                            expression: "errors.has('step9.five_pathdam')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.five_pathdam")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.five_7_diniya,
                          expression: "step9.five_7_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "five_7_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.five_7_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "five_7_diniya",
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
                            value: _vm.errors.has("step9.five_7_diniya"),
                            expression: "errors.has('step9.five_7_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.five_7_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.five_15_diniya,
                          expression: "step9.five_15_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "five_15_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.five_15_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "five_15_diniya",
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
                            value: _vm.errors.has("step9.five_15_diniya"),
                            expression: "errors.has('step9.five_15_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.five_15_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("৬")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.six_name,
                          expression: "step9.six_name"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "six_name",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.six_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "six_name", $event.target.value)
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
                            value: _vm.errors.has("step9.six_name"),
                            expression: "errors.has('step9.six_name')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.six_name")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.six_start_date,
                          expression: "step9.six_start_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "six_start_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.six_start_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "six_start_date",
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
                            value: _vm.errors.has("step9.six_start_date"),
                            expression: "errors.has('step9.six_start_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.six_start_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.six_end_date,
                          expression: "step9.six_end_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "six_end_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.six_end_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "six_end_date",
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
                            value: _vm.errors.has("step9.six_end_date"),
                            expression: "errors.has('step9.six_end_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.six_end_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.six_mohila,
                          expression: "step9.six_mohila"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "six_mohila",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.six_mohila },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "six_mohila", $event.target.value)
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
                            value: _vm.errors.has("step9.six_mohila"),
                            expression: "errors.has('step9.six_mohila')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.six_mohila")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.six_nondor,
                          expression: "step9.six_nondor"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "six_nondor",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.six_nondor },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "six_nondor", $event.target.value)
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
                            value: _vm.errors.has("step9.six_nondor"),
                            expression: "errors.has('step9.six_nondor')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.six_nondor")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.six_ahota,
                          expression: "step9.six_ahota"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "six_ahota",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.six_ahota },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "six_ahota", $event.target.value)
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
                            value: _vm.errors.has("step9.six_ahota"),
                            expression: "errors.has('step9.six_ahota')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.six_ahota")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.six_pathdam,
                          expression: "step9.six_pathdam"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "six_pathdam",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.six_pathdam },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "six_pathdam",
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
                            value: _vm.errors.has("step9.six_pathdam"),
                            expression: "errors.has('step9.six_pathdam')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.six_pathdam")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.six_7_diniya,
                          expression: "step9.six_7_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "six_7_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.six_7_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "six_7_diniya",
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
                            value: _vm.errors.has("step9.six_7_diniya"),
                            expression: "errors.has('step9.six_7_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.six_7_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.six_15_diniya,
                          expression: "step9.six_15_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "six_15_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.six_15_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "six_15_diniya",
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
                            value: _vm.errors.has("step9.six_15_diniya"),
                            expression: "errors.has('step9.six_15_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.six_15_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("৭")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.seven_name,
                          expression: "step9.seven_name"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "seven_name",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.seven_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "seven_name", $event.target.value)
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
                            value: _vm.errors.has("step9.seven_name"),
                            expression: "errors.has('step9.seven_name')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.seven_name")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.seven_start_date,
                          expression: "step9.seven_start_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "seven_start_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.seven_start_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "seven_start_date",
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
                            value: _vm.errors.has("step9.seven_start_date"),
                            expression: "errors.has('step9.seven_start_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.seven_start_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.seven_end_date,
                          expression: "step9.seven_end_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "seven_end_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.seven_end_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "seven_end_date",
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
                            value: _vm.errors.has("step9.seven_end_date"),
                            expression: "errors.has('step9.seven_end_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.seven_end_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.seven_mohila,
                          expression: "step9.seven_mohila"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "seven_mohila",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.seven_mohila },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "seven_mohila",
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
                            value: _vm.errors.has("step9.seven_mohila"),
                            expression: "errors.has('step9.seven_mohila')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.seven_mohila")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.seven_nondor,
                          expression: "step9.seven_nondor"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "seven_nondor",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.seven_nondor },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "seven_nondor",
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
                            value: _vm.errors.has("step9.seven_nondor"),
                            expression: "errors.has('step9.seven_nondor')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.seven_nondor")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.seven_ahota,
                          expression: "step9.seven_ahota"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "seven_ahota",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.seven_ahota },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "seven_ahota",
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
                            value: _vm.errors.has("step9.seven_ahota"),
                            expression: "errors.has('step9.seven_ahota')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.seven_ahota")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.seven_pathdam,
                          expression: "step9.seven_pathdam"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "seven_pathdam",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.seven_pathdam },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "seven_pathdam",
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
                            value: _vm.errors.has("step9.seven_pathdam"),
                            expression: "errors.has('step9.seven_pathdam')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.seven_pathdam")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.seven_7_diniya,
                          expression: "step9.seven_7_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "seven_7_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.seven_7_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "seven_7_diniya",
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
                            value: _vm.errors.has("step9.seven_7_diniya"),
                            expression: "errors.has('step9.seven_7_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.seven_7_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.seven_15_diniya,
                          expression: "step9.seven_15_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "seven_15_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.seven_15_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "seven_15_diniya",
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
                            value: _vm.errors.has("step9.seven_15_diniya"),
                            expression: "errors.has('step9.seven_15_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.seven_15_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("৮")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.eight_name,
                          expression: "step9.eight_name"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "eight_name",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.eight_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "eight_name", $event.target.value)
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
                            value: _vm.errors.has("step9.eight_name"),
                            expression: "errors.has('step9.eight_name')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.eight_name")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.eight_start_date,
                          expression: "step9.eight_start_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "eight_start_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.eight_start_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "eight_start_date",
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
                            value: _vm.errors.has("step9.eight_start_date"),
                            expression: "errors.has('step9.eight_start_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.eight_start_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.eight_end_date,
                          expression: "step9.eight_end_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "eight_end_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.eight_end_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "eight_end_date",
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
                            value: _vm.errors.has("step9.eight_end_date"),
                            expression: "errors.has('step9.eight_end_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.eight_end_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.eight_mohila,
                          expression: "step9.eight_mohila"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "eight_mohila",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.eight_mohila },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "eight_mohila",
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
                            value: _vm.errors.has("step9.eight_mohila"),
                            expression: "errors.has('step9.eight_mohila')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.eight_mohila")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.eight_nondor,
                          expression: "step9.eight_nondor"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "eight_nondor",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.eight_nondor },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "eight_nondor",
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
                            value: _vm.errors.has("step9.eight_nondor"),
                            expression: "errors.has('step9.eight_nondor')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.eight_nondor")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.eight_ahota,
                          expression: "step9.eight_ahota"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "eight_ahota",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.eight_ahota },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "eight_ahota",
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
                            value: _vm.errors.has("step9.eight_ahota"),
                            expression: "errors.has('step9.eight_ahota')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.eight_ahota")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.eight_pathdam,
                          expression: "step9.eight_pathdam"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "eight_pathdam",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.eight_pathdam },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "eight_pathdam",
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
                            value: _vm.errors.has("step9.eight_pathdam"),
                            expression: "errors.has('step9.eight_pathdam')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.eight_pathdam")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.eight_7_diniya,
                          expression: "step9.eight_7_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "eight_7_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.eight_7_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "eight_7_diniya",
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
                            value: _vm.errors.has("step9.eight_7_diniya"),
                            expression: "errors.has('step9.eight_7_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.eight_7_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.eight_15_diniya,
                          expression: "step9.eight_15_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "eight_15_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.eight_15_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "eight_15_diniya",
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
                            value: _vm.errors.has("step9.eight_15_diniya"),
                            expression: "errors.has('step9.eight_15_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.eight_15_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(51),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("৯")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.nine_name,
                          expression: "step9.nine_name"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "nine_name",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.nine_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "nine_name", $event.target.value)
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
                            value: _vm.errors.has("step9.nine_name"),
                            expression: "errors.has('step9.nine_name')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.nine_name")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.nine_start_date,
                          expression: "step9.nine_start_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "nine_start_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.nine_start_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "nine_start_date",
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
                            value: _vm.errors.has("step9.nine_start_date"),
                            expression: "errors.has('step9.nine_start_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.nine_start_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.nine_end_date,
                          expression: "step9.nine_end_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "nine_end_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.nine_end_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "nine_end_date",
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
                            value: _vm.errors.has("step9.nine_end_date"),
                            expression: "errors.has('step9.nine_end_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.nine_end_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.nine_mohila,
                          expression: "step9.nine_mohila"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "nine_mohila",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.nine_mohila },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "nine_mohila",
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
                            value: _vm.errors.has("step9.nine_mohila"),
                            expression: "errors.has('step9.nine_mohila')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.nine_mohila")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.nine_nondor,
                          expression: "step9.nine_nondor"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "nine_nondor",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.nine_nondor },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "nine_nondor",
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
                            value: _vm.errors.has("step9.nine_nondor"),
                            expression: "errors.has('step9.nine_nondor')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.nine_nondor")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.nine_ahota,
                          expression: "step9.nine_ahota"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "nine_ahota",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.nine_ahota },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "nine_ahota", $event.target.value)
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
                            value: _vm.errors.has("step9.nine_ahota"),
                            expression: "errors.has('step9.nine_ahota')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.nine_ahota")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.nine_pathdam,
                          expression: "step9.nine_pathdam"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "nine_pathdam",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.nine_pathdam },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "nine_pathdam",
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
                            value: _vm.errors.has("step9.nine_pathdam"),
                            expression: "errors.has('step9.nine_pathdam')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.nine_pathdam")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.nine_7_diniya,
                          expression: "step9.nine_7_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "nine_7_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.nine_7_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "nine_7_diniya",
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
                            value: _vm.errors.has("step9.nine_7_diniya"),
                            expression: "errors.has('step9.nine_7_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.nine_7_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.nine_15_diniya,
                          expression: "step9.nine_15_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "nine_15_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.nine_15_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "nine_15_diniya",
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
                            value: _vm.errors.has("step9.nine_15_diniya"),
                            expression: "errors.has('step9.nine_15_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.nine_15_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("১০")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.ten_name,
                          expression: "step9.ten_name"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "ten_name",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.ten_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "ten_name", $event.target.value)
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
                            value: _vm.errors.has("step9.ten_name"),
                            expression: "errors.has('step9.ten_name')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.ten_name")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.ten_start_date,
                          expression: "step9.ten_start_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "ten_start_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.ten_start_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "ten_start_date",
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
                            value: _vm.errors.has("step9.ten_start_date"),
                            expression: "errors.has('step9.ten_start_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.ten_start_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.ten_end_date,
                          expression: "step9.ten_end_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "ten_end_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.ten_end_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "ten_end_date",
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
                            value: _vm.errors.has("step9.ten_end_date"),
                            expression: "errors.has('step9.ten_end_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.ten_end_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.ten_mohila,
                          expression: "step9.ten_mohila"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "ten_mohila",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.ten_mohila },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "ten_mohila", $event.target.value)
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
                            value: _vm.errors.has("step9.ten_mohila"),
                            expression: "errors.has('step9.ten_mohila')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.ten_mohila")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.ten_nondor,
                          expression: "step9.ten_nondor"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "ten_nondor",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.ten_nondor },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "ten_nondor", $event.target.value)
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
                            value: _vm.errors.has("step9.ten_nondor"),
                            expression: "errors.has('step9.ten_nondor')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.ten_nondor")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.ten_ahota,
                          expression: "step9.ten_ahota"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "ten_ahota",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.ten_ahota },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.step9, "ten_ahota", $event.target.value)
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
                            value: _vm.errors.has("step9.ten_ahota"),
                            expression: "errors.has('step9.ten_ahota')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.ten_ahota")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.ten_pathdam,
                          expression: "step9.ten_pathdam"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "ten_pathdam",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.ten_pathdam },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "ten_pathdam",
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
                            value: _vm.errors.has("step9.ten_pathdam"),
                            expression: "errors.has('step9.ten_pathdam')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.ten_pathdam")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.ten_7_diniya,
                          expression: "step9.ten_7_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "ten_7_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.ten_7_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "ten_7_diniya",
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
                            value: _vm.errors.has("step9.ten_7_diniya"),
                            expression: "errors.has('step9.ten_7_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.ten_7_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.ten_15_diniya,
                          expression: "step9.ten_15_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "ten_15_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.ten_15_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "ten_15_diniya",
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
                            value: _vm.errors.has("step9.ten_15_diniya"),
                            expression: "errors.has('step9.ten_15_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.ten_15_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("১১")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.eleven_name,
                          expression: "step9.eleven_name"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "eleven_name",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.eleven_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "eleven_name",
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
                            value: _vm.errors.has("step9.eleven_name"),
                            expression: "errors.has('step9.eleven_name')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.eleven_name")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.eleven_start_date,
                          expression: "step9.eleven_start_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "eleven_start_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.eleven_start_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "eleven_start_date",
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
                            value: _vm.errors.has("step9.eleven_start_date"),
                            expression: "errors.has('step9.eleven_start_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm.errors.first("step9.eleven_start_date")
                            ) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.eleven_end_date,
                          expression: "step9.eleven_end_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "eleven_end_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.eleven_end_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "eleven_end_date",
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
                            value: _vm.errors.has("step9.eleven_end_date"),
                            expression: "errors.has('step9.eleven_end_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.eleven_end_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.eleven_mohila,
                          expression: "step9.eleven_mohila"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "eleven_mohila",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.eleven_mohila },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "eleven_mohila",
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
                            value: _vm.errors.has("step9.eleven_mohila"),
                            expression: "errors.has('step9.eleven_mohila')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.eleven_mohila")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.eleven_nondor,
                          expression: "step9.eleven_nondor"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "eleven_nondor",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.eleven_nondor },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "eleven_nondor",
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
                            value: _vm.errors.has("step9.eleven_nondor"),
                            expression: "errors.has('step9.eleven_nondor')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.eleven_nondor")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.eleven_ahota,
                          expression: "step9.eleven_ahota"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "eleven_ahota",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.eleven_ahota },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "eleven_ahota",
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
                            value: _vm.errors.has("step9.eleven_ahota"),
                            expression: "errors.has('step9.eleven_ahota')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.eleven_ahota")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.eleven_pathdam,
                          expression: "step9.eleven_pathdam"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "eleven_pathdam",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.eleven_pathdam },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "eleven_pathdam",
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
                            value: _vm.errors.has("step9.eleven_pathdam"),
                            expression: "errors.has('step9.eleven_pathdam')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.eleven_pathdam")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.eleven_7_diniya,
                          expression: "step9.eleven_7_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "eleven_7_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.eleven_7_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "eleven_7_diniya",
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
                            value: _vm.errors.has("step9.eleven_7_diniya"),
                            expression: "errors.has('step9.eleven_7_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.eleven_7_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.eleven_15_diniya,
                          expression: "step9.eleven_15_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "eleven_15_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.eleven_15_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "eleven_15_diniya",
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
                            value: _vm.errors.has("step9.eleven_15_diniya"),
                            expression: "errors.has('step9.eleven_15_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.eleven_15_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("১২")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.twelve_name,
                          expression: "step9.twelve_name"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "twelve_name",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.twelve_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "twelve_name",
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
                            value: _vm.errors.has("step9.twelve_name"),
                            expression: "errors.has('step9.twelve_name')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.twelve_name")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.twelve_start_date,
                          expression: "step9.twelve_start_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "twelve_start_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.twelve_start_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "twelve_start_date",
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
                            value: _vm.errors.has("step9.twelve_start_date"),
                            expression: "errors.has('step9.twelve_start_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm.errors.first("step9.twelve_start_date")
                            ) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.twelve_end_date,
                          expression: "step9.twelve_end_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "twelve_end_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.twelve_end_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "twelve_end_date",
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
                            value: _vm.errors.has("step9.twelve_end_date"),
                            expression: "errors.has('step9.twelve_end_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.twelve_end_date")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.twelve_mohila,
                          expression: "step9.twelve_mohila"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "twelve_mohila",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.twelve_mohila },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "twelve_mohila",
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
                            value: _vm.errors.has("step9.twelve_mohila"),
                            expression: "errors.has('step9.twelve_mohila')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.twelve_mohila")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.twelve_nondor,
                          expression: "step9.twelve_nondor"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "twelve_nondor",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.twelve_nondor },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "twelve_nondor",
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
                            value: _vm.errors.has("step9.twelve_nondor"),
                            expression: "errors.has('step9.twelve_nondor')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.twelve_nondor")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.twelve_ahota,
                          expression: "step9.twelve_ahota"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "twelve_ahota",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.twelve_ahota },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "twelve_ahota",
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
                            value: _vm.errors.has("step9.twelve_ahota"),
                            expression: "errors.has('step9.twelve_ahota')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.twelve_ahota")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.twelve_pathdam,
                          expression: "step9.twelve_pathdam"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "twelve_pathdam",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.twelve_pathdam },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "twelve_pathdam",
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
                            value: _vm.errors.has("step9.twelve_pathdam"),
                            expression: "errors.has('step9.twelve_pathdam')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.twelve_pathdam")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.twelve_7_diniya,
                          expression: "step9.twelve_7_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "twelve_7_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.twelve_7_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "twelve_7_diniya",
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
                            value: _vm.errors.has("step9.twelve_7_diniya"),
                            expression: "errors.has('step9.twelve_7_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.twelve_7_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.twelve_15_diniya,
                          expression: "step9.twelve_15_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "twelve_15_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.twelve_15_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "twelve_15_diniya",
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
                            value: _vm.errors.has("step9.twelve_15_diniya"),
                            expression: "errors.has('step9.twelve_15_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.twelve_15_diniya")) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(52),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("১৩")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.thirteen_name,
                          expression: "step9.thirteen_name"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "thirteen_name",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.thirteen_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "thirteen_name",
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
                            value: _vm.errors.has("step9.thirteen_name"),
                            expression: "errors.has('step9.thirteen_name')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.thirteen_name")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.thirteen_start_date,
                          expression: "step9.thirteen_start_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "thirteen_start_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.thirteen_start_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "thirteen_start_date",
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
                            value: _vm.errors.has("step9.thirteen_start_date"),
                            expression:
                              "errors.has('step9.thirteen_start_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm.errors.first("step9.thirteen_start_date")
                            ) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.thirteen_end_date,
                          expression: "step9.thirteen_end_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "thirteen_end_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.thirteen_end_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "thirteen_end_date",
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
                            value: _vm.errors.has("step9.thirteen_end_date"),
                            expression: "errors.has('step9.thirteen_end_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm.errors.first("step9.thirteen_end_date")
                            ) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.thirteen_mohila,
                          expression: "step9.thirteen_mohila"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "thirteen_mohila",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.thirteen_mohila },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "thirteen_mohila",
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
                            value: _vm.errors.has("step9.thirteen_mohila"),
                            expression: "errors.has('step9.thirteen_mohila')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.thirteen_mohila")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.thirteen_nondor,
                          expression: "step9.thirteen_nondor"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "thirteen_nondor",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.thirteen_nondor },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "thirteen_nondor",
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
                            value: _vm.errors.has("step9.thirteen_nondor"),
                            expression: "errors.has('step9.thirteen_nondor')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.thirteen_nondor")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.thirteen_ahota,
                          expression: "step9.thirteen_ahota"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "thirteen_ahota",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.thirteen_ahota },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "thirteen_ahota",
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
                            value: _vm.errors.has("step9.thirteen_ahota"),
                            expression: "errors.has('step9.thirteen_ahota')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.thirteen_ahota")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.thirteen_pathdam,
                          expression: "step9.thirteen_pathdam"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "thirteen_pathdam",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.thirteen_pathdam },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "thirteen_pathdam",
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
                            value: _vm.errors.has("step9.thirteen_pathdam"),
                            expression: "errors.has('step9.thirteen_pathdam')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.thirteen_pathdam")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.thirteen_7_diniya,
                          expression: "step9.thirteen_7_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "thirteen_7_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.thirteen_7_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "thirteen_7_diniya",
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
                            value: _vm.errors.has("step9.thirteen_7_diniya"),
                            expression: "errors.has('step9.thirteen_7_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm.errors.first("step9.thirteen_7_diniya")
                            ) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.thirteen_15_diniya,
                          expression: "step9.thirteen_15_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "thirteen_15_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.thirteen_15_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "thirteen_15_diniya",
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
                            value: _vm.errors.has("step9.thirteen_15_diniya"),
                            expression: "errors.has('step9.thirteen_15_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm.errors.first("step9.thirteen_15_diniya")
                            ) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("১৪")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.fourteen_name,
                          expression: "step9.fourteen_name"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "fourteen_name",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.fourteen_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "fourteen_name",
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
                            value: _vm.errors.has("step9.fourteen_name"),
                            expression: "errors.has('step9.fourteen_name')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.fourteen_name")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.fourteen_start_date,
                          expression: "step9.fourteen_start_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "fourteen_start_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.fourteen_start_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "fourteen_start_date",
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
                            value: _vm.errors.has("step9.fourteen_start_date"),
                            expression:
                              "errors.has('step9.fourteen_start_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm.errors.first("step9.fourteen_start_date")
                            ) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.fourteen_end_date,
                          expression: "step9.fourteen_end_date"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "fourteen_end_date",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.fourteen_end_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "fourteen_end_date",
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
                            value: _vm.errors.has("step9.fourteen_end_date"),
                            expression: "errors.has('step9.fourteen_end_date')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm.errors.first("step9.fourteen_end_date")
                            ) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.fourteen_mohila,
                          expression: "step9.fourteen_mohila"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "fourteen_mohila",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.fourteen_mohila },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "fourteen_mohila",
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
                            value: _vm.errors.has("step9.fourteen_mohila"),
                            expression: "errors.has('step9.fourteen_mohila')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.fourteen_mohila")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.fourteen_nondor,
                          expression: "step9.fourteen_nondor"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "fourteen_nondor",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.fourteen_nondor },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "fourteen_nondor",
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
                            value: _vm.errors.has("step9.fourteen_nondor"),
                            expression: "errors.has('step9.fourteen_nondor')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.fourteen_nondor")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.fourteen_ahota,
                          expression: "step9.fourteen_ahota"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "fourteen_ahota",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.fourteen_ahota },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "fourteen_ahota",
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
                            value: _vm.errors.has("step9.fourteen_ahota"),
                            expression: "errors.has('step9.fourteen_ahota')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.fourteen_ahota")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.fourteen_pathdam,
                          expression: "step9.fourteen_pathdam"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "fourteen_pathdam",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.fourteen_pathdam },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "fourteen_pathdam",
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
                            value: _vm.errors.has("step9.fourteen_pathdam"),
                            expression: "errors.has('step9.fourteen_pathdam')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.first("step9.fourteen_pathdam")) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.fourteen_7_diniya,
                          expression: "step9.fourteen_7_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "fourteen_7_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.fourteen_7_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "fourteen_7_diniya",
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
                            value: _vm.errors.has("step9.fourteen_7_diniya"),
                            expression: "errors.has('step9.fourteen_7_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm.errors.first("step9.fourteen_7_diniya")
                            ) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.step9.fourteen_15_diniya,
                          expression: "step9.fourteen_15_diniya"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "fourteen_15_diniya",
                        placeholder: ""
                      },
                      domProps: { value: _vm.step9.fourteen_15_diniya },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.step9,
                            "fourteen_15_diniya",
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
                            value: _vm.errors.has("step9.fourteen_15_diniya"),
                            expression: "errors.has('step9.fourteen_15_diniya')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm.errors.first("step9.fourteen_15_diniya")
                            ) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-row-reverse" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.goPrev()
                    }
                  }
                },
                [_vm._v("\n          Back\n    ")]
              )
            ]),
            _vm._v(" "),
            _vm._m(53)
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [_vm._v("+91")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("(ক)")]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "\n        নিকেতনখন কত অৱস্থিত -- চহৰত/গাঁৱত/বনাঞ্চলত (✓ চিন দিব ) | নিকেতনলৈ\n        ছাত্র-ছাত্ৰী অহা গাঁৱৰ সংখ্যা\n    "
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-1 mr-2",
        attrs: { type: "text", placeholder: "নিকেতনখন ....." }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("নগৰীয়া বস্তিৰ সংখ্যা")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-1 mr-2",
        attrs: { type: "text", placeholder: "নগৰীয়া বস্তিৰ সংখ্যা" }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("ৱাৰ্ডৰ সংখ্যা")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-1 mr-2",
        attrs: { type: "text", placeholder: "ৱাৰ্ডৰ সংখ্যা" }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "\n        গাঁৱৰ তালিকা বেলেগে সংলগ্ন কৰি গাঁৱৰ পৰা অহা ছাত্র-ছাত্ৰী সংখ্যা দিব |\n    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col" }, [_vm._v("(খ) মাহিলী শিক্ষণ শুল্ক :")]),
      _vm._v(" "),
      _c(
        "table",
        { staticClass: "table col-8 table-responsive table-borderless" },
        [
          _c("tbody", [
            _c("tr", [
              _c("td", [_vm._v("অংকুৰ, মুকুল")]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "  " }
                })
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("১মৰ পৰা ৫ ম")]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "  " }
                })
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("৬ষ্টৰ পৰা ৮ ম")]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "  " }
                })
              ]),
              _vm._v(" "),
              _c("td", [_vm._v("৯ ম আৰু ১০ ম")]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "  " }
                })
              ])
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("(গ)")]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(১) আচাৰ্য/আচাৰ্জাৰ নুন্যতম মানধন")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: "নুন্যতম মানধন.." }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(২) আচাৰ্য/আচাৰ্জাৰ অধিকতম মানধন")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: "অধিকতম মানধন" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("(ঘ)")]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "\n        নিকেতনৰ হিচাব পৰীক্ষকৰ প্ৰতিবেদন ২০১৯ বৰ্ষৰ ৩১ মাৰ্চলৈ সম্পূৰ্ণ কৰি\n        প্ৰদেশ কাৰ্যালয়লৈ প্ৰেৰণ কৰিছে/কৰা নাই (✓ চিন দিব ) ।\n    "
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("যদি কৰা নাই কোন চনলৈ পঠাইছে লিখিব")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(
        "নিকেতনৰ তথ্য আৰু হিচাব-নিকাচ চাৰ্টাড\n    অকাউন্টটেণ্টৰ (C/A) দ্বাৰা আৰু\n    কম্পিউটাৰৰ যোগেদি কৰা হয়/নহয় (✓ চিন দিব )\n"
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "\n        (ঙ) নিকেতনৰ বেংক একাউণ্ট নম্বৰ আৰু বেংকৰ নাম (যিমানটা থাকে)\n    "
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-1 mr-2",
        attrs: { type: "text", placeholder: " " }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "\n        (চ) ভবিষ্য নিধি - E. P. F. আছে/নাই । যদি আছে নম্বৰ দিব :\n    "
        )
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("আছে")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("নাই")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "\n        (জ) নিকেতনৰ আচাৰ্যসকল প্ৰান্তীয় আচাৰ্য কল্যান নিধিৰ সদস্য হয়নে ?\n    "
        )
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("হয়")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("নহয়")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "\n        (ঝ) নিকেতনৰ আচাৰ্য/ আৰু কৰ্মচাৰীসকল কোনো স্থ্য স্বা বীমা/অটল অমৃত\n        কাৰ্ড / আয়ুষ্মান ভাৰত কাৰ্ড লৈছেনে নাই, যদি লোৱা নাই উপৰোক্ত আঁচনিৰ\n        আওতালৈ আনিব লাগে ।\n    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2 " }),
      _vm._v("\n    ৫। (ক) প্রধানাচাৰ্য/ভাৰপ্ৰাপ্ত প্রধানাচাৰ্যৰ নাম "),
      _c("p"),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2 mb-1",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("\n        স্থানীয় সমিতিৰ পৰা পোৱা নিযুক্তিৰ তাৰিখ ")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("\n        শিশু শিক্ষা সমিতি, অসমৰ পৰা পোৱা নিযুক্তিৰ তাৰিখ")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "প্রধানাচাৰ্য স্থায়ী/অস্থায়ী/ভাৰপ্ৰাপ্ত (✓ চিন দিব )। উপ-প্ৰধানাচাৰ্যৰ নাম (যদি আছে) : "
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("প্রধানাচাৰ্য প্ৰশিক্ষণ লোৱা চন ")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("নিযুক্তি স্থায়ী/অস্থায়ী (✓ চিন দিব )।")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(৬) (ক) নিকেতনৰ মাটিৰ পৰিমাণ")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "মাটি নিজৰ হয় / নহয় । (ম্যাদী/চৰকাৰী/দখল) নিকেতনৰ ভৱন পকা/অৰ্দ্ধ পকা/ অস্থায়ী (✓ চিন দিব )।"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("(খ) নিকেতনখন")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("পঞ্চায়ত,")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("উন্নয়ন খণ্ড (ব্লক)ত")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("মহকুমাত অৱস্থিত ।")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(গ) পুথিভঁৰাল ব্যৱস্থা : অধ্যয়ন কক্ষ")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("টা /আলমাৰী সংখ্যা")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("টা/কিতাবৰ সংখ্যা")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "খন । পঞ্জীয়ন বহীত কিতাব কিতাবসমূহ পঞ্জীয়ন কৰা হয়/নহয় । (✓ চিন দিব )"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(ঘ) বিজ্ঞানাগাৰৰ ব্যবস্থা আছে/নাই আৰু নিয়মিত ব্যৱহাৰ হয়/নহয় । (✓ চিন দিব )"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(ঙ) খেলপথাৰ আছে/নাই । (✓ চিন দিব ) যদি নাই, কি ধৰণৰ ব্যবস্থা আছে"
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(চ) উপযুক্ত প্ৰাৰ্থনা গৃহ আছে/নাই (✓ চিন দিব ) (যদি নাই সোনকালে ব্যবস্থা কৰিব) । প্ৰথনা বিদ্যা\n        ভাৰতীয় ক্ৰম অনুসৰি হয়/নহয় (✓ চিন দিব )\n        । বহি প্ৰাৰ্থনা হয়নে ?"
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: " d-flex justify-content-center " }, [
      _c("h5", { staticClass: "mb-0 h4 titleCentre" }, [
        _vm._v(
          "\n        নিম্নলিখিত কাৰ্যব্যবস্থা সমূহৰ আপোনাৰ নিকেতনৰ\n        ক্ষেত্ৰত যিটো প্ৰযোজ্য হয়\n        তাত (✓) চীন দিব ।\n    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("৭ । (ক) পঞ্জীয়নৰ বাবে চৰকাৰৰ সৈতে হোৱা যোগাযোগ")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(ক) আবেদন কৰিছে (খ) নিকেতন খোলাৰ অনুমতি হৈছে (গ) যদি চৰকাৰী পঞ্জীভূক্ত হৈছে, পঞ্জীয়ন নম্বৰ দিব\n    "
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(ঘ) কোনো ধৰণৰ যোগাযোগ হোৱা নাই । সেৱাৰ কড নম্বৰ দিব")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("৭ । (ক) পঞ্জীয়নৰ বাবে চৰকাৰৰ সৈতে হোৱা যোগাযোগ")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(ক) আবেদন কৰিছে (খ) নিকেতন খোলাৰ অনুমতি হৈছে (গ) যদি চৰকাৰী পঞ্জীভূক্ত হৈছে, পঞ্জীয়ন নম্বৰ দিব\n    "
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(ঘ) কোনো ধৰণৰ যোগাযোগ হোৱা নাই । সেৱাৰ কড নম্বৰ দিব")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(খ) শিশু শিক্ষা সমিতি, অসমৰ অন্তৰ্ভুক্তৰ পঞ্জীয়ন নম্বৰ দিব")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(যদি নাই অতি সোনকালে মূল প্ৰমাণ পত্ৰ সহ পঞ্জীয়ন নম্বৰ লব )")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(গ) ষষ্ঠ শ্ৰেণীৰ‍ পৰা অষ্টম শ্ৰেণীলৈ সমিতিৰ উচ্চ মাধ্যমিক বিদ্যালয় উপ-সমিতিৰ পৰা অনুমোদন পোৱা\n        চন"
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(ঘ) নৱম আৰু দশম শ্ৰেণীৰ‍ বাবে সমিতিৰ উচ্চ মাধ্যমিক বিদ্যালয় উপ-সমিতিৰ পৰা অনুমোদন পোৱা চন"
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("৮ । (ক) বালিকা শিক্ষাৰ কালাংখ নিমনীয়া ভাবে হৈ আছে/নাই ।")
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("আছে")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("নাই")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(খ) পঞ্চপদী শিক্ষণ পদ্ধতিৰ আধাৰত সকলো আচাৰ্যই পাঠ যোজনা\n        বনাই পাঠ দান কৰে/নকৰে । যদি নকৰে কিয় নকৰে জনাব :"
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(গ) Spoken English অথবা Class ত English to English কোন কোন শ্ৰেণীত কেইটাকৈ Class"
        )
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [_vm._v("হয় । ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(ঘ) স্মাৰ্ট ক্লাছৰ ব্যবস্থা আছে/নাই ।")
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("আছে")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("নাই")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(ঙ) নিকেতনত শিশু বাটিকাৰ সুকীয়া ব্যবস্থা হৈছে/হোৱা নাই ।")
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("হৈছে")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("হোৱা নাই")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(" শিশু বাটিকা প্ৰমুখ নিযুক্তি দিছে/দিয়া নাই ।")
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("দিছে")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("দিয়া নাই")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "নিকেতন শিশু বাটিকা কোনটো ৰূপত আছে --- নমুনা ৰূপ/ প্ৰভাৱীৰূপ/পযত্নশীল ৰূপ "
        )
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("নমুনা ৰূপ")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("প্ৰভাৱীৰূপ")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("পযত্নশীল ৰূপ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("(চ) কম্পিউটাৰ শিক্ষা ব্যবস্থা আছে/নাই ।")
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("আছে")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("নাই")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(" শিশু বাটিকা প্ৰমুখ নিযুক্তি দিছে/দিয়া নাই ")
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("দিছে ।")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("দিয়া নাই ।")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("যদি আছে কম্পিউটাৰ /লেপটপ (Laptop) কিমানতা")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control col-2 mr-2",
        attrs: { type: "text", placeholder: " " }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v("কম্পিউটাৰ বিষয়ৰ আচাৰ্য আছে/নাই ।")
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "custom-select col-2" }, [
        _c("option", { attrs: { selected: "" } }, [_vm._v("আছে ।")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("নাই ।")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(ছ) অটল টিংকাৰিং প্ৰয়োগ শালাৰ (Atal Tinkering Labortory)\n        বাবে Atal Inovation Mission, Niti Ayogত আবেদন কৰিছেনে নাই?\n        ( ষষ্ঠ শ্ৰেণীৰ‍ পৰা দশম শ্ৰেণীলৈ মুঠ ৪০০\n        ছাত্ৰ-ছাত্ৰী থকা, ১৫০০বৰ্গ ফুট স্থানৰ নিকেতনৰ ক্ষেত্ৰত প্ৰযোজ্য )"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-row-reverse" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-primary", attrs: { type: "submit" } },
        [_vm._v("Next")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-row-reverse" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-primary", attrs: { type: "submit" } },
        [_vm._v("Next")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-row-reverse" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-primary", attrs: { type: "submit" } },
        [_vm._v("Next")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", { attrs: { colspan: "3", rowspan: "4" } }, [
        _vm._v(
          "\n              নিকেতনৰ দ্বাৰা পৰিচালিত সংস্কাৰ কেন্দ্ৰ\n            "
        )
      ]),
      _vm._v(" "),
      _c("th", [_vm._v("সংখ্যা")]),
      _vm._v(" "),
      _c("th", [_vm._v("ছাত্র")]),
      _vm._v(" "),
      _c("th", [_vm._v("ছাত্ৰী")]),
      _vm._v(" "),
      _c("th", [_vm._v("মুঠ")]),
      _vm._v(" "),
      _c("th", [_vm._v("আচাৰ্য")]),
      _vm._v(" "),
      _c("th", [_vm._v("আচাৰ্যা")]),
      _vm._v(" "),
      _c("th", [_vm._v("মুঠ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-row-reverse" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-primary", attrs: { type: "submit" } },
        [_vm._v("Next")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("মুঠ ছাত্র-ছাত্ৰীৰ ভিতৰত কিমান জন")]),
      _vm._v(" "),
      _c("td", [_vm._v("ছাত্র")]),
      _vm._v(" "),
      _c("td", [_vm._v("ছাত্ৰী")]),
      _vm._v(" "),
      _c("td", [_vm._v("মুঠ")]),
      _vm._v(" "),
      _c("td", { attrs: { colspan: "4" } }, [
        _vm._v("অন্য ধর্মাবলম্বী ছাত্র-ছাত্ৰী কিমান জন")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("p", [_vm._v("ছাত্র")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("p", [_vm._v("ছাত্ৰী")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-row-reverse" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-primary", attrs: { type: "submit" } },
        [_vm._v("Next")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "\n          (ঝ) নিকেতনৰ আচাৰ্য/ আৰু কৰ্মচাৰীসকল কোনো স্থ্য স্বা বীমা/অটল অমৃত\n          কাৰ্ড / আয়ুষ্মান ভাৰত কাৰ্ড লৈছেনে নাই, যদি লোৱা নাই উপৰোক্ত আঁচনিৰ\n          আওতালৈ আনিব লাগে ।\n        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-row-reverse" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-primary", attrs: { type: "submit" } },
        [_vm._v("Next")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "(ঘ) বিজ্ঞানাগাৰৰ ব্যবস্থা আছে/নাই আৰু নিয়মিত ব্যৱহাৰ হয়/নহয় । (✓ চিন দিব )"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-row-reverse" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-primary", attrs: { type: "submit" } },
        [_vm._v("Next")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex justify-content-center" }, [
      _c("h5", { staticClass: "mb-0 h4 titleCentre" }, [
        _vm._v(
          "\n          নিম্নলিখিত কাৰ্যব্যবস্থা সমূহৰ আপোনাৰ নিকেতনৰ ক্ষেত্ৰত যিটো প্ৰযোজ্য\n          হয় তাত (✓) চীন দিব ।\n        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 row" }, [
      _c("p", { staticClass: "mt-2 mr-2" }, [
        _vm._v(
          "\n          (ছ) অটল টিংকাৰিং প্ৰয়োগ শালাৰ (Atal Tinkering Labortory) বাবে Atal\n          Inovation Mission, Niti Ayogত আবেদন কৰিছেনে নাই? ( ষষ্ঠ শ্ৰেণীৰ‍ পৰা\n          দশম শ্ৰেণীলৈ মুঠ ৪০০ ছাত্ৰ-ছাত্ৰী থকা, ১৫০০বৰ্গ ফুট স্থানৰ নিকেতনৰ\n          ক্ষেত্ৰত প্ৰযোজ্য )\n        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-row-reverse" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-primary", attrs: { type: "submit" } },
        [_vm._v("Next")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex justify-content-center" }, [
      _c("h5", { staticClass: "mb-0 h5" }, [
        _vm._v("বিদ্যা ভাৰতী অখিল ভাৰতীয় শিক্ষা সংস্থানৰ সংবদ্ধ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-2 d-flex justify-content-center" }, [
      _c("h2", { staticClass: "mb-0 tit leCentre" }, [
        _vm._v("শিশু শিক্ষা সমিতি, অসম")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "mb-2 mt-2 d-flex justify-content-center" },
      [
        _c("h5", { staticClass: "mb-0 h5" }, [
          _vm._v(
            "\n          ৰাধাগোবিন্দ বৰুৱা পথ, প্ৰশান্ত পথ, গুৱাহাটী - ৭৮১০২৮\n        "
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-4 mt-3" }, [
      _c("p", {}, [_vm._v("আচাৰ্য/আচাৰ্যাৰ বিৱৰণ - ২০২০")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("ক্ৰ: নং.")]),
      _vm._v(" "),
      _c("td", [
        _vm._v(
          "\n              প্ৰধানাচাৰ্য, শিশু বাটিকা প্ৰমুখ আৰু বালিকা শিক্ষা প্ৰমুখৰ নাম\n              ক্ৰমে লিখিব ।\n            "
        )
      ]),
      _vm._v(" "),
      _c("td", [_vm._v("জন্মৰ তাৰিখ আৰু ব্লাড গ্ৰুপ")]),
      _vm._v(" "),
      _c("td", [_vm._v("নিকেতনৰ যোগদানৰ তাৰিখ আৰু মোবাইল নং")]),
      _vm._v(" "),
      _c("td", [_vm._v("ই-মেইল আই ডি")]),
      _vm._v(" "),
      _c("td", [_vm._v("হুৱাটছআপ নম্বৰ")]),
      _vm._v(" "),
      _c("td", [_vm._v("শিক্ষাগত অৰ্হতা")]),
      _vm._v(" "),
      _c("td", [_vm._v("পাঠদান কৰা মূল বিষয়")]),
      _vm._v(" "),
      _c("td", [_vm._v("৭ দিনীয়া")]),
      _vm._v(" "),
      _c("td", [_vm._v("১৫ দিনীয়া")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "2" } }, [
        _vm._v("আধাৰভূত বিষয়ৰ আচৰ্য/আচাৰ্যাৰ নাম লিখিব")
      ]),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "2" } }, [
        _vm._v("বিজ্ঞান বিষয়ৰ আচৰ্য/আচাৰ্যাৰ নাম লিখিব")
      ]),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "2" } }, [
        _vm._v("আচৰ্য/আচাৰ্যাৰ আৰু অন্য কৰ্মচাৰীৰ নাম লিখিব")
      ]),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-row-reverse" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-primary", attrs: { type: "submit" } },
        [_vm._v("Submit")]
      )
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

/***/ "./resources/js/ChannelSupervisor.js":
/*!*******************************************!*\
  !*** ./resources/js/ChannelSupervisor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component("channel-supervisor", __webpack_require__(/*! ./components/ChannelSupervisor.vue */ "./resources/js/components/ChannelSupervisor.vue")["default"]);
var element = document.getElementById("channel-supervisor");

if (typeof element != "undefined" && element != null) {
  var cart = new Vue({
    el: "#channel-supervisor"
  });
}

/***/ }),

/***/ "./resources/js/components/ChannelSupervisor.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/ChannelSupervisor.vue ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelSupervisor_vue_vue_type_template_id_6c60f470___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelSupervisor.vue?vue&type=template&id=6c60f470& */ "./resources/js/components/ChannelSupervisor.vue?vue&type=template&id=6c60f470&");
/* harmony import */ var _ChannelSupervisor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelSupervisor.vue?vue&type=script&lang=js& */ "./resources/js/components/ChannelSupervisor.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ChannelSupervisor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ChannelSupervisor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChannelSupervisor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChannelSupervisor_vue_vue_type_template_id_6c60f470___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChannelSupervisor_vue_vue_type_template_id_6c60f470___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ChannelSupervisor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ChannelSupervisor.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ChannelSupervisor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelSupervisor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelSupervisor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelSupervisor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelSupervisor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ChannelSupervisor.vue?vue&type=template&id=6c60f470&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/ChannelSupervisor.vue?vue&type=template&id=6c60f470& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelSupervisor_vue_vue_type_template_id_6c60f470___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelSupervisor.vue?vue&type=template&id=6c60f470& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChannelSupervisor.vue?vue&type=template&id=6c60f470&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelSupervisor_vue_vue_type_template_id_6c60f470___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelSupervisor_vue_vue_type_template_id_6c60f470___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 20:
/*!*************************************************!*\
  !*** multi ./resources/js/ChannelSupervisor.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\bridyc\resources\js\ChannelSupervisor.js */"./resources/js/ChannelSupervisor.js");


/***/ })

/******/ });