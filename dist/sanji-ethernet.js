(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(6);
	
	__webpack_require__(5);
	
	__webpack_require__(4);
	
	var _sanjiEthernetService = __webpack_require__(3);
	
	var _sanjiEthernetService2 = _interopRequireDefault(_sanjiEthernetService);
	
	var _sanjiEthernetController = __webpack_require__(1);
	
	var _sanjiEthernetController2 = _interopRequireDefault(_sanjiEthernetController);
	
	var _sanjiEthernetDirective = __webpack_require__(2);
	
	var _sanjiEthernetDirective2 = _interopRequireDefault(_sanjiEthernetDirective);
	
	angular.module('sanji.ethernet', ['sanji.window']).service('ethernetService', _sanjiEthernetService2['default']).controller('EthernetController', _sanjiEthernetController2['default']).directive('sanjiEthernet', _sanjiEthernetDirective2['default'].directiveFactory);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var $inject = ['$log', '$scope'];
	
	var EthernetController = function EthernetController() {
	  var _this = this;
	
	  for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	    injects[_key] = arguments[_key];
	  }
	
	  _classCallCheck(this, EthernetController);
	
	  EthernetController.$inject.forEach(function (item, index) {
	    return _this[item] = injects[index];
	  });
	  var sanjiWindowMgr = this.$scope.sanjiWindowMgr;
	  this.ethernet = {
	    ip: '192.168.31.204',
	    netmask: '255.255.255.0',
	    gateway: '192.168.31.254'
	  };
	  sanjiWindowMgr.goToInfoState();
	};
	
	EthernetController.$inject = $inject;
	exports['default'] = EthernetController;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var injectMap = new WeakMap();
	var $inject = ['$log'];
	
	var EthernetDirective = (function () {
	  function EthernetDirective(injects) {
	    _classCallCheck(this, EthernetDirective);
	
	    EthernetDirective.directiveFactory.$inject.forEach(function (item, index) {
	      EthernetDirective[item] = injects[index];
	      injectMap.set(EthernetDirective[item], injects[index]);
	    });
	    this.template = '<sanji-window title="Ethernet"\n                      content-url="sanji-ethernet-main.tpl.html">\n                      </sanji-window>';
	    this.restrict = 'EA';
	  }
	
	  _createClass(EthernetDirective, null, [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	        injects[_key] = arguments[_key];
	      }
	
	      EthernetDirective.instance = new EthernetDirective(injects);
	      return EthernetDirective.instance;
	    }
	  }]);
	
	  return EthernetDirective;
	})();
	
	EthernetDirective.directiveFactory.$inject = $inject;
	exports['default'] = EthernetDirective;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var $inject = ['$log'];
	
	var EthernetService = function EthernetService() {
	  var _this = this;
	
	  _classCallCheck(this, EthernetService);
	
	  EthernetService.$inject.forEach(function (item, index) {
	    return _this[item] = injects[index];
	  });
	};
	
	EthernetService.$inject = $inject;
	exports['default'] = EthernetService;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	var v1="<form class=\"form-horizontal\"\n    role=\"form\"\n    name=\"form\"\n    ng-submit=\"\"\n    novalidate>\n\n    <div class=\"form-group\">\n      <label for=\"ip{{::$index +1}}\" class=\"col-sm-4 control-label\">\n        IP:\n      </label>\n      <div class=\"col-sm-6\">\n        <input id=\"ip\"\n          ng-model=\"vm.ethernet.ip\"\n          name=\"ip\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"0.0.0.0\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"netmask\" class=\"col-sm-4 control-label\">\n        Netmask:\n      </label>\n      <div class=\"col-sm-6\">\n        <input id=\"netmask\"\n          ng-model=\"vm.ethernet.netmask\"\n          name=\"netmask\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"0.0.0.0\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"gateway\" class=\"col-sm-4 control-label\">\n        Gateway:\n      </label>\n      <div class=\"col-sm-6\">\n        <input id=\"gateway\"\n          ng-model=\"vm.ethernet.gateway\"\n          name=\"gateway\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"0.0.0.0\"\n          >\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-xs-2 col-xs-offset-8 text-right\">\n        <button class=\"btn btn-primary\">\n          <span>Save</span>\n        </button>\n      </div>\n    </div>\n  </form>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("sanji-ethernet-edit.tpl.html", v1)}]);
	module.exports=v1;

/***/ },
/* 5 */
/***/ function(module, exports) {

	var v1="<div class=\"col-sm-3 text-right pull-right clearfix\">\n    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"sanjiWindowMgr.goToEditState()\">\n      <i class=\"fa fa-edit\"></i>\n      <span>Edit</span>\n    </button>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-sm-offset-3\">\n      <dl class=\"dl-horizontal\">\n        <dt>IP:</dt>\n        <dd ng-bind=\"::vm.ethernet.ip\"></dd>\n        <dt>Netmask:</dt>\n        <dd ng-bind=\"::vm.ethernet.netmask\"></dd>\n        <dt>Gateway:</dt>\n        <dd ng-bind=\"::vm.ethernet.gateway\"></dd>\n      </dl>\n    </div>\n  </div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("sanji-ethernet-info.tpl.html", v1)}]);
	module.exports=v1;

/***/ },
/* 6 */
/***/ function(module, exports) {

	var v1="<div ng-controller=\"EthernetController as vm\"\n    ng-switch=\"sanjiWindowMgr.getWindowStatus()\">\n    <div ng-class=\"sanjiWindowMgr.animateClass\" ng-switch-when=\"sanji-info\">\n      <div ng-include=\"'sanji-ethernet-info.tpl.html'\"></div>\n    </div>\n    <div ng-class=\"sanjiWindowMgr.animateClass\" ng-switch-when=\"sanji-edit\">\n      <div ng-include=\"'sanji-ethernet-edit.tpl.html'\"></div>\n    </div>\n  </div>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("sanji-ethernet-main.tpl.html", v1)}]);
	module.exports=v1;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=sanji-ethernet.js.map