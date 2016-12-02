(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _snappy = require('../../lib/snappy');

var _snappy2 = _interopRequireDefault(_snappy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_snappy2.default.Component.Title = function (_Snappy$BaseComponent) {
    _inherits(Title, _Snappy$BaseComponent);

    _createClass(Title, null, [{
        key: 'tagName',
        get: function get() {
            return 'snappy-title';
        }
    }]);

    function Title(element) {
        _classCallCheck(this, Title);

        return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this, element));
    }

    _createClass(Title, [{
        key: 'render',
        value: function render() {
            this.element.innerHTML += '<br>Snappy Element';
        }
    }]);

    return Title;
}(_snappy2.default.BaseComponent);

},{"../../lib/snappy":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snappy = {

  init: function init() {
    document.addEventListener('DOMContentLoaded', this.onDOMLoaded.bind(this));
  },

  onDOMLoaded: function onDOMLoaded(event) {
    this.renderComponents();
  },

  renderComponents: function renderComponents() {
    var _this = this;

    var _loop = function _loop(key) {
      var elements = document.querySelectorAll(_this.Component[key].tagName + ':not([data-defer-snappy])');

      elements = Array.prototype.slice.call(elements);

      elements.forEach(function (element) {
        var component = new this.Component[key](element);

        element.component = component;
        component.render();
      }.bind(_this));
    };

    for (var key in this.Component) {
      _loop(key);
    }
  },

  Component: {},

  BaseComponent: function BaseComponent(element) {
    _classCallCheck(this, BaseComponent);

    this.element = element;

    if (window.$) {
      this.$element = $(element);
      this.$window = $(window);
      this.$body = $('body');
    }
  }

};

exports.default = Snappy;

},{}],3:[function(require,module,exports){
"use strict";

var _snappy = require("./lib/snappy");

var _snappy2 = _interopRequireDefault(_snappy);

var _title = require("./component/title/title");

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = {
  init: function init() {
    _snappy2.default.init();
    document.addEventListener('DOMContentLoaded', this.onLoaded.bind(this));
  },
  onLoaded: function onLoaded() {}
};

Main.init();

},{"./component/title/title":1,"./lib/snappy":2}]},{},[3]);
