/******/ (function(modules) { // webpackBootstrap
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
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _sanjiCoreUi = __webpack_require__(13);
	
	var _sanjiCoreUi2 = _interopRequireDefault(_sanjiCoreUi);
	
	__webpack_require__(12);
	
	__webpack_require__(1);
	
	var _componentI18n = __webpack_require__(10);
	
	var _componentI18n2 = _interopRequireDefault(_componentI18n);
	
	var _componentService = __webpack_require__(11);
	
	var _componentService2 = _interopRequireDefault(_componentService);
	
	var _componentContainerController = __webpack_require__(5);
	
	var _componentContainerController2 = _interopRequireDefault(_componentContainerController);
	
	var _componentController = __webpack_require__(8);
	
	var _componentController2 = _interopRequireDefault(_componentController);
	
	var _componentContainerDirective = __webpack_require__(6);
	
	var _componentContainerDirective2 = _interopRequireDefault(_componentContainerDirective);
	
	var _componentDirective = __webpack_require__(9);
	
	var _componentDirective2 = _interopRequireDefault(_componentDirective);
	
	var _componentWindowDirective = __webpack_require__(7);
	
	var _componentWindowDirective2 = _interopRequireDefault(_componentWindowDirective);
	
	var app = angular.module('sanji.ethernet', [_sanjiCoreUi2['default']]);
	app.config(_componentI18n2['default']);
	app.service('ethernetService', _componentService2['default']);
	app.controller('EthernetContainerController', _componentContainerController2['default']);
	app.controller('EthernetController', _componentController2['default']);
	app.directive('sanjiEthernetContainer', _componentContainerDirective2['default'].directiveFactory);
	app.directive('sanjiEthernet', _componentDirective2['default'].directiveFactory);
	app.directive('sanjiEthernetWindow', _componentWindowDirective2['default'].directiveFactory);
	exports['default'] = app = app.name;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"get": {
			"url": "/network/ethernets",
			"type": "collection",
			"titlePrefix": "eth"
		},
		"put": {
			"url": "/network/ethernets/:id",
			"type": "model"
		},
		"fields": [
			{
				"key": "enableDhcp",
				"type": "radio",
				"templateOptions": {
					"required": true,
					"options": [
						{
							"label": "ETHERNET_FORM_LABEL_DHCP",
							"value": 1
						},
						{
							"label": "ETHERNET_FORM_LABEL_STATIC",
							"value": 0
						}
					]
				}
			},
			{
				"key": "ip",
				"type": "input",
				"optionsTypes": "ip",
				"templateOptions": {
					"label": "ETHERNET_FORM_LABEL_IP",
					"required": true
				},
				"hideExpression": "!!model.enableDhcp"
			},
			{
				"key": "netmask",
				"type": "input",
				"optionsTypes": "ip",
				"templateOptions": {
					"label": "ETHERNET_FORM_LABEL_NETMASK",
					"required": true
				},
				"hideExpression": "!!model.enableDhcp"
			},
			{
				"key": "gateway",
				"type": "input",
				"optionsTypes": "ip",
				"templateOptions": {
					"label": "ETHERNET_FORM_LABEL_GATEWAY",
					"required": true
				},
				"hideExpression": "!!model.enableDhcp"
			},
			{
				"key": "dns[0]",
				"type": "input",
				"optionsTypes": "ip",
				"templateOptions": {
					"label": "ETHERNET_FORM_LABEL_DNS1",
					"required": true
				},
				"hideExpression": "!!model.enableDhcp"
			},
			{
				"key": "dns[1]",
				"type": "input",
				"optionsTypes": "ip",
				"templateOptions": {
					"label": "ETHERNET_FORM_LABEL_DNS2",
					"required": true
				},
				"hideExpression": "!!model.enableDhcp"
			}
		]
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
		"ETHERNET_WINDOW_NAME": "Ethernet",
		"ETHERNET_WINDOW_SETTING": "Settings",
		"ETHERNET_FORM_LABEL_DHCP": "DHCP",
		"ETHERNET_FORM_LABEL_STATIC": "Static IP",
		"ETHERNET_FORM_LABEL_IP": "IP",
		"ETHERNET_FORM_LABEL_NETMASK": "Netmask",
		"ETHERNET_FORM_LABEL_GATEWAY": "Gateway",
		"ETHERNET_FORM_LABEL_DNS1": "DNS 1",
		"ETHERNET_FORM_LABEL_DNS2": "DNS 2",
		"ETHERNET_FORM_SAVE": "Save"
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
		"ETHERNET_WINDOW_NAME": "乙太網路",
		"ETHERNET_WINDOW_SETTING": "設定",
		"ETHERNET_FORM_LABEL_DHCP": "DHCP",
		"ETHERNET_FORM_LABEL_STATIC": "固定 IP",
		"ETHERNET_FORM_LABEL_IP": "IP",
		"ETHERNET_FORM_LABEL_NETMASK": "網路遮罩",
		"ETHERNET_FORM_LABEL_GATEWAY": "閘道器",
		"ETHERNET_FORM_LABEL_DNS1": "DNS 1",
		"ETHERNET_FORM_LABEL_DNS2": "DNS 2",
		"ETHERNET_FORM_SAVE": "儲存"
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var $inject = ['$scope', 'sanjiWindowService', 'ethernetService'];
	var WINDOW_ID = 'sanji-ethernet-ui';
	
	var EthernetContainerController = (function () {
	  function EthernetContainerController() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, EthernetContainerController);
	
	    EthernetContainerController.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	
	    this.sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);
	    this.data = this.ethernetService.data;
	
	    this.activate();
	
	    this.$scope.$on('sj:window:refresh', this.onRefresh.bind(this));
	  }
	
	  _createClass(EthernetContainerController, [{
	    key: 'activate',
	    value: function activate() {
	      var _this2 = this;
	
	      this.sanjiWindowMgr.promise = this.ethernetService.get().then(function () {
	        _this2.data = _this2.ethernetService.data;
	      });
	    }
	  }, {
	    key: 'onRefresh',
	    value: function onRefresh(event, args) {
	      if (args.id === WINDOW_ID) {
	        this.activate();
	      }
	    }
	  }, {
	    key: 'onSave',
	    value: function onSave(data) {
	      this.sanjiWindowMgr.promise = this.ethernetService.update(data);
	    }
	  }]);
	
	  return EthernetContainerController;
	})();
	
	EthernetContainerController.$inject = $inject;
	exports['default'] = EthernetContainerController;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var injectMap = new WeakMap();
	var $inject = [];
	
	var EthernetContainerDirective = (function () {
	  function EthernetContainerDirective(injects) {
	    _classCallCheck(this, EthernetContainerDirective);
	
	    EthernetContainerDirective.directiveFactory.$inject.forEach(function (item, index) {
	      EthernetContainerDirective[item] = injects[index];
	      injectMap.set(EthernetContainerDirective[item], injects[index]);
	    });
	    this.restrict = 'EA';
	    this.controller = 'EthernetContainerController';
	    this.controllerAs = 'vm';
	    this.scope = {};
	    this.bindToController = true;
	    this.template = '<sanji-ethernet data="vm.data" on-submit="vm.onSave(data)"></sanji-ethernet>';
	  }
	
	  _createClass(EthernetContainerDirective, null, [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	        injects[_key] = arguments[_key];
	      }
	
	      EthernetContainerDirective.instance = new EthernetContainerDirective(injects);
	      return EthernetContainerDirective.instance;
	    }
	  }]);
	
	  return EthernetContainerDirective;
	})();
	
	EthernetContainerDirective.directiveFactory.$inject = $inject;
	exports['default'] = EthernetContainerDirective;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var injectMap = new WeakMap();
	var $inject = [];
	
	var EthernetWindowDirective = (function () {
	  function EthernetWindowDirective(injects) {
	    _classCallCheck(this, EthernetWindowDirective);
	
	    EthernetWindowDirective.directiveFactory.$inject.forEach(function (item, index) {
	      EthernetWindowDirective[item] = injects[index];
	      injectMap.set(EthernetWindowDirective[item], injects[index]);
	    });
	    this.restrict = 'E';
	    this.template = '<sanji-window window-id="sanji-ethernet-ui"\n                      window-name="{{\'ETHERNET_WINDOW_NAME\' | translate}}" show-loading-btn>\n                      <sanji-window-state default-state\n                        state-name="sanji-form"\n                        link-name="{{\'ETHERNET_WINDOW_SETTING\' | translate}}"\n                        icon="settings">\n                        <sanji-ethernet-container></sanji-ethernet-container>\n                      </sanji-window-state>\n                    </sanji-window>';
	  }
	
	  _createClass(EthernetWindowDirective, null, [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	        injects[_key] = arguments[_key];
	      }
	
	      EthernetWindowDirective.instance = new EthernetWindowDirective(injects);
	      return EthernetWindowDirective.instance;
	    }
	  }]);
	
	  return EthernetWindowDirective;
	})();
	
	EthernetWindowDirective.directiveFactory.$inject = $inject;
	exports['default'] = EthernetWindowDirective;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var $inject = [];
	
	var EthernetController = (function () {
	  function EthernetController() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, EthernetController);
	
	    EthernetController.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	  }
	
	  _createClass(EthernetController, [{
	    key: "save",
	    value: function save(data) {
	      this.submitCallback({ data: data });
	    }
	  }]);
	
	  return EthernetController;
	})();
	
	EthernetController.$inject = $inject;
	exports["default"] = EthernetController;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var injectMap = new WeakMap();
	var $inject = [];
	
	var EthernetDirective = (function () {
	  function EthernetDirective(injects) {
	    _classCallCheck(this, EthernetDirective);
	
	    EthernetDirective.directiveFactory.$inject.forEach(function (item, index) {
	      EthernetDirective[item] = injects[index];
	      injectMap.set(EthernetDirective[item], injects[index]);
	    });
	    this.templateUrl = 'sanji-ethernet-edit.tpl.html';
	    this.restrict = 'EA';
	    this.controller = 'EthernetController';
	    this.controllerAs = 'vm';
	    this.scope = {};
	    this.bindToController = {
	      tabs: '=data',
	      submitCallback: '&onSubmit'
	    };
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function ($translateProvider) {
	  $translateProvider.translations('en', __webpack_require__(3));
	  $translateProvider.translations('zh-tw', __webpack_require__(4));
	};
	
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var $inject = ['$q', 'rest', 'exception', '_', 'pathToRegexp'];
	var config = __webpack_require__(2);
	
	var EthernetService = (function () {
	  function EthernetService() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, EthernetService);
	
	    EthernetService.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	    switch (config.get.type) {
	      case 'collection':
	        this.data = [];
	        break;
	      case 'model':
	        this.data = {};
	        break;
	      default:
	        this.data = [];
	    }
	  }
	
	  _createClass(EthernetService, [{
	    key: '_transform',
	    value: function _transform(data) {
	      switch (config.get.type) {
	        case 'collection':
	          return this._.map(data, function (item, index) {
	            return {
	              title: (config.get.titlePrefix || 'tab') + index,
	              content: item,
	              formOptions: {},
	              fields: config.fields
	            };
	          });
	        case 'model':
	          return {
	            content: data,
	            formOptions: {},
	            fields: config.fields
	          };
	        default:
	          return this._.map(data, function (item, index) {
	            return {
	              title: (config.get.titlePrefix || 'tab') + index,
	              content: item,
	              formOptions: {},
	              fields: config.fields
	            };
	          });
	      }
	    }
	  }, {
	    key: 'get',
	    value: function get() {
	      var _this2 = this;
	
	      var toPath = this.pathToRegexp.compile(config.get.url);
	      return this.rest.get(toPath(),  false ? 'http://private-d8e84-sanjigeneric.apiary-mock.com' : undefined).then(function (res) {
	        _this2.data = _this2._transform(res.data);
	      })['catch'](function (err) {
	        _this2.exception.catcher('[EthernetService] Get data error.')(err);
	        return _this2.$q.reject();
	      });
	    }
	  }, {
	    key: 'update',
	    value: function update(data) {
	      var _this3 = this;
	
	      var toPath = this.pathToRegexp.compile(config.put.url);
	      var path = undefined !== data.content.id ? toPath({ id: data.content.id }) : toPath();
	      return this.rest.put(path, data.content, data.formOptions.files,  false ? 'http://private-d8e84-sanjigeneric.apiary-mock.com' : undefined)['catch'](function (err) {
	        _this3.exception.catcher('[EthernetService] Update data error.')(err);
	        return _this3.$q.reject();
	      });
	    }
	  }]);
	
	  return EthernetService;
	})();
	
	EthernetService.$inject = $inject;
	exports['default'] = EthernetService;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<md-content>\n    <md-tabs md-dynamic-height md-border-bottom>\n      <md-tab ng-repeat=\"tab in vm.tabs track by $index\" label=\"{{::tab.title}}\">\n        <form ng-submit=\"vm.save(tab)\"\n        role=\"form\" layout=\"column\" layout-padding novalidate>\n          <md-content>\n            <formly-form\n            model=\"tab.content\" options=\"tab.formOptions\" fields=\"tab.fields\" form=\"tab.form\">\n              <div layout layout-align=\"end center\">\n                <md-button type=\"submit\" class=\"md-raised md-primary\"\n                ng-disabled=\"tab.form.$invalid\">\n                  <sapn translate=\"ETHERNET_FORM_SAVE\"></span>\n                </md-button>\n              </div>\n            </formly-form>\n          </md-content>\n        </form>\n      </md-tab>\n    </md-tabs>\n  </md-content>";
	ngModule.run(["$templateCache",function(c){c.put("sanji-ethernet-edit.tpl.html",v1)}]);
	module.exports=v1;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = sanji-core-ui;

/***/ }
/******/ ]);
//# sourceMappingURL=sanji-ethernet-ui.js.map