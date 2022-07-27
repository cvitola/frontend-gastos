"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyPad = exports.Loader = exports.ContainerFirst = exports.Container = exports.H2 = exports.Button = exports.P = exports.H1 = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Constants = require("../../assets/Constants/Constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center\n    padding: 10px;\n    margin: 10px;\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    width: 70px;\n    height: 70px;\n    padding: 30px;\n    margin: 30px;\n    border: 10px solid #eee;\n    border-top: 10px solid #666;\n    border-radius: 50%;\n    animation-name: ", ";\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items:center;\n    background-color: ", ";\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    max-width: 1200px;\n    /*height: 430px;*/\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin: auto;\n    list-style: none;\n\n    & li {\n        padding: 10px;\n    }\n\n    & h3{\n        padding: 20px;\n        margin: 20px;\n        font-size: 28px;\n        color: ", "\n    }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    padding: 10px;\n    margin: 10px;\n    font-weight: 600;\n    font-size: 36px;\n    color: ", ";\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    margin: 10px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    width: 80%;\n    background: ", ";\n    border-radius: 10px;\n    \n    &:hover{\n        color: ", ";\n        background: white;\n    }"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: 5px;\n    margin: 5px;\n    font-size: 16px;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 10px;\n    margin: 10px;\n    font-weight: 900;\n    font-size: 48px;\n    text-shadow: 1px 1px 1px white;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H1 = _styledComponents["default"].h1(_templateObject());

exports.H1 = H1;

var P = _styledComponents["default"].p(_templateObject2());

exports.P = P;

var Button = _styledComponents["default"].button(_templateObject3(), function (props) {
  return props.warning ? _Constants.colorsTheme.red1 : _Constants.colorsTheme.green1;
}, _Constants.colorsTheme.green1);

exports.Button = Button;

var H2 = _styledComponents["default"].h2(_templateObject4(), _Constants.colorsTheme.blue);

exports.H2 = H2;

var Container = _styledComponents["default"].ul(_templateObject5(), _Constants.colorsTheme.red3);

exports.Container = Container;

var ContainerFirst = _styledComponents["default"].div(_templateObject6(), _Constants.colorsTheme.yellow);

exports.ContainerFirst = ContainerFirst;
var girar = (0, _styledComponents.keyframes)(_templateObject7());

var Loader = _styledComponents["default"].div(_templateObject8(), girar);

exports.Loader = Loader;

var KeyPad = _styledComponents["default"].div(_templateObject9());

exports.KeyPad = KeyPad;