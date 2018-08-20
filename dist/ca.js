(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CA", [], factory);
	else if(typeof exports === 'object')
		exports["CA"] = factory();
	else
		root["CA"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Application.js":
/*!****************************!*\
  !*** ./src/Application.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _CanvasRenderer = __webpack_require__(/*! ./renderers/CanvasRenderer */ \"./src/renderers/CanvasRenderer.js\");\n\nvar _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);\n\nvar _Container = __webpack_require__(/*! ./display/Container */ \"./src/display/Container.js\");\n\nvar _Container2 = _interopRequireDefault(_Container);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Application = function () {\n  function Application(options, arg2, arg3, argr, arg5) {\n    _classCallCheck(this, Application);\n\n    /**\r\n     *\r\n     */\n    if (typeof options === \"number\") {\n      options = Object.assign({\n        width: options,\n        height: arg2 || settings.RENDER_OPTIONS.height,\n        forceCanvas: !!arg4,\n        sharedTicker: !!arg5\n      }, arg3);\n    }\n\n    this._options = options = Object.assign({\n      autoStart: true,\n      sharedTicker: false,\n      forceCanvas: false,\n      sharedLoader: false\n    }, options);\n\n    this.renderer = new _CanvasRenderer2.default(options);\n    this.stage = new _Container2.default();\n\n    // start th rendering\n    if (options.autoStart) {\n      this.start();\n    }\n  }\n\n  _createClass(Application, [{\n    key: \"render\",\n    value: function render() {\n      this.renderer.render(this.stage);\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      console.log(\"stop\");\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      console.log(\"start\");\n    }\n  }, {\n    key: \"destory\",\n    value: function destory() {\n      console.log(\"destory\");\n    }\n  }, {\n    key: \"view\",\n    get: function get() {\n      return this.renderer.view;\n    }\n  }]);\n\n  return Application;\n}();\n\nexports.default = Application;\n\n//# sourceURL=webpack://CA/./src/Application.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Container = __webpack_require__(/*! ./display/Container */ \"./src/display/Container.js\");\n\nObject.defineProperty(exports, 'ContainerContainer', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Container).default;\n  }\n});\n\nvar _Application = __webpack_require__(/*! ./Application */ \"./src/Application.js\");\n\nObject.defineProperty(exports, 'Application', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Application).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://CA/./src/app.js?");

/***/ }),

/***/ "./src/display/Container.js":
/*!**********************************!*\
  !*** ./src/display/Container.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _DisplayObject2 = __webpack_require__(/*! ./DisplayObject */ \"./src/display/DisplayObject.js\");\n\nvar _DisplayObject3 = _interopRequireDefault(_DisplayObject2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Container = function (_DisplayObject) {\n  _inherits(Container, _DisplayObject);\n\n  function Container() {\n    _classCallCheck(this, Container);\n\n    var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this));\n\n    _this.children = [];\n    return _this;\n  }\n\n  _createClass(Container, [{\n    key: \"addChild\",\n    value: function addChild(child) {\n      if (arguments.length > 1) {\n        for (var i = 0; i < length; i++) {\n          this.addChild(arguments[i]);\n        }\n      } else {\n        this.children.push(child);\n      }\n      return child;\n    }\n  }, {\n    key: \"_renderCanvas\",\n    value: function _renderCanvas(renderer) {}\n  }, {\n    key: \"renderCanvas\",\n    value: function renderCanvas(renderer) {\n      this._renderCanvas(renderer);\n      for (var i = 0, j = this.children.length; i < j; ++i) {\n        this.children[i].renderCanvas(renderer);\n      }\n    }\n  }]);\n\n  return Container;\n}(_DisplayObject3.default);\n\nexports.default = Container;\n\n//# sourceURL=webpack://CA/./src/display/Container.js?");

/***/ }),

/***/ "./src/display/DisplayObject.js":
/*!**************************************!*\
  !*** ./src/display/DisplayObject.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar DisplayObject = function () {\n  function DisplayObject() {\n    _classCallCheck(this, DisplayObject);\n  }\n\n  _createClass(DisplayObject, [{\n    key: \"renderCanvas\",\n    value: function renderCanvas(renderer) {}\n  }, {\n    key: \"setTransform\",\n    value: function setTransform() {}\n  }, {\n    key: \"destroy\",\n    value: function destroy() {}\n  }]);\n\n  return DisplayObject;\n}();\n\nexports.default = DisplayObject;\n\n//# sourceURL=webpack://CA/./src/display/DisplayObject.js?");

/***/ }),

/***/ "./src/renderers/CanvasRenderer.js":
/*!*****************************************!*\
  !*** ./src/renderers/CanvasRenderer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _SystemRenderer2 = __webpack_require__(/*! ./SystemRenderer */ \"./src/renderers/SystemRenderer.js\");\n\nvar _SystemRenderer3 = _interopRequireDefault(_SystemRenderer2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CanvasRenderer = function (_SystemRenderer) {\n    _inherits(CanvasRenderer, _SystemRenderer);\n\n    function CanvasRenderer(options, arg2, arg3) {\n        _classCallCheck(this, CanvasRenderer);\n\n        var _this = _possibleConstructorReturn(this, (CanvasRenderer.__proto__ || Object.getPrototypeOf(CanvasRenderer)).call(this, \"canvas\", options, arg2, arg3));\n\n        _this.rootContext = _this.view.getContext(\"2d\");\n\n        _this.context = _this.rootContext;\n\n        console.log(options);\n        _this.resize(_this.options.width, _this.options.height);\n        return _this;\n    }\n\n    _createClass(CanvasRenderer, [{\n        key: \"render\",\n        value: function render(displayObject) {\n            if (!this.view) return;\n\n            var ctx = this.context;\n\n            this.lastObjectRendered = displayObject;\n\n            ctx.save();\n            ctx.setTransform(1, 0, 0, 1, 0, 0);\n\n            if (this.transparent) {\n                ctx.clearRect(0, 0, this.width, this.height);\n            } else {\n                ctx.fillStyle = this._backgroundColorString;\n                ctx.fillRect(0, 0, this.width, this.height);\n            }\n\n            displayObject.renderCanvas(this);\n            ctx.restore();\n        }\n    }, {\n        key: \"clear\",\n        value: function clear() {}\n    }]);\n\n    return CanvasRenderer;\n}(_SystemRenderer3.default);\n\nexports.default = CanvasRenderer;\n\n//# sourceURL=webpack://CA/./src/renderers/CanvasRenderer.js?");

/***/ }),

/***/ "./src/renderers/SystemRenderer.js":
/*!*****************************************!*\
  !*** ./src/renderers/SystemRenderer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar DEFAULT_OPTIONS = {\n  view: null,\n  antialias: false,\n  forceFXAA: false,\n  autoResize: false,\n  transparent: false,\n  backgroundColor: 0x000000,\n  clearBeforeRender: true,\n  preserveDrawingBuffer: false,\n  roundPixels: false,\n  width: 800,\n  height: 600,\n  legacy: false\n};\n\nvar SystemRenderer = function () {\n  function SystemRenderer(system, options, arg2, arg3) {\n    _classCallCheck(this, SystemRenderer);\n\n    // 支持 (system,screenWidth,screenHeight,options)\n    if (typeof options === \"number\") {\n      options = Object.assign({\n        width: options,\n        height: arg2 || DEFAULT_OPTIONS.height\n      }, arg3);\n    }\n    // 合并默认设置\n    this.options = options = Object.assign({}, DEFAULT_OPTIONS, options);\n\n    this.view = document.createElement(\"canvas\");\n\n    this.transparent = options.transparent;\n\n    this._backgroundColorString = \"#000000\";\n  }\n\n  _createClass(SystemRenderer, [{\n    key: \"resize\",\n    value: function resize(w, h) {\n      this.view.width = w;\n      this.view.height = h;\n    }\n  }, {\n    key: \"width\",\n    get: function get() {\n      return this.view.width;\n    }\n  }, {\n    key: \"height\",\n    get: function get() {\n      return this.view.height;\n    }\n  }]);\n\n  return SystemRenderer;\n}();\n\nexports.default = SystemRenderer;\n\n//# sourceURL=webpack://CA/./src/renderers/SystemRenderer.js?");

/***/ })

/******/ });
});