"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleFoot = exports.MenuItem = exports.Menu = exports.Container = exports.FooterPage = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    padding: 10px;\n    margin: 10px;\n    text-align: center;\n    color: #FAFAFA;\n    font-size: 12px;\n    font-style: italic;\n    font-weight: 200;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["    \n    display:flex;\n    justify-content: center;\n    align-items:center;\n    color: #FAFAFA;\n    height: 100%;\n    padding: 0.5rem 2.5rem;\n    font-size: 1rem;\n    font-weight: 300;\n    cursor: pointer;\n    transition: 0.5s all ease;\n\n    svg{\n        margin:10px;\n        font-size: 1.5rem;\n    }\n\n    &:hover{\n        color:#E0792A;\n        transition: 0.5s all ease;\n    }\n\n    @media screen and (max-width: 960px){\n        padding: 10px;\n        marging: 10px;\n    }\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    padding: 10px;\n    margin:10px;\n    height: 100%;\n    display:flex;\n    justify-content: center;\n    list-style: none;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n    background-color: rgb(12 77 162);\n    color: darkblue;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterPage = _styledComponents["default"].footer(_templateObject());

exports.FooterPage = FooterPage;

var Container = _styledComponents["default"].div(_templateObject2());

exports.Container = Container;

var Menu = _styledComponents["default"].ul(_templateObject3());

exports.Menu = Menu;

var MenuItem = _styledComponents["default"].li(_templateObject4());

exports.MenuItem = MenuItem;

var TitleFoot = _styledComponents["default"].h2(_templateObject5());

exports.TitleFoot = TitleFoot;