"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileIcon = exports.CantidadItem = exports.MenuItemLink = exports.MenuItem = exports.Menu = exports.LogoContainer = exports.Wrapper = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n    \n    @media screen and (max-width: 768px){\n        display: flex;\n        align-items: center;\n        cursor: pointer;\n\n        svg {\n            fill: #E07924;\n            margin-right: 0.5rem;\n            font-size: 2em; \n        }\n\n    }"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    margin-top: -20px;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    font-size: 14px;\n    background: rgb(255, 0, 0);\n    color: rgb(255, 255, 255);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 8px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    justify-content: center;\n    align-items:center;\n    height: 100%;\n    padding: 2rem;\n    /*color: #64B2FF;*/\n    font-size: 1rem;\n    font-weight: 300;\n    cursor: pointer;\n    transition: 0.5s all ease;\n\n    &:hover{\n        color:#FAFAFA;\n        background-color: #E0792A;\n        transition: 0.5s all ease;\n    }\n\n    @media screen and (max-width: 768px){\n        width: 100%;\n    }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    height: 100%;\n\n    @media screen and (max-width: 768px){\n        width: 100%;\n        height: 70px;\n        display: flex;\n        align-items: center;\n    }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    height: 100%;\n    display:flex;\n    justify-content: space-between;\n    list-style: none;\n\n    @media screen and (max-width: 768px){\n        background-color: #FAFAFA;\n        position: absolute;\n        top: 70px;\n        left: ", ";\n        width: 100%;\n        height: 90vh;\n        justify-content: center;\n        flex-direction: column;\n        align-items: center;\n        transition: 0.5s all ease;\n    }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 0.5rem;\n    display:flex;\n    align-items: center;\n    font-size: 1.2rem;\n       \n    svg{\n        /*fill:#FAFAFA;*/\n        margin-right: 0.5rem;\n        font-size: 4em; \n        }\n    }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin-bottom: 3rem;\n    position: fixed;\n    background-color: #fafafa;\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index:10;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n    height: 70px;\n    background-color: #FAFAFA;\n    color: darkblue;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var Wrapper = _styledComponents["default"].div(_templateObject2());

exports.Wrapper = Wrapper;

var LogoContainer = _styledComponents["default"].div(_templateObject3());

exports.LogoContainer = LogoContainer;

var Menu = _styledComponents["default"].ul(_templateObject4(), function (_ref) {
  var open = _ref.open;
  return open ? "0" : "-100%";
});

exports.Menu = Menu;

var MenuItem = _styledComponents["default"].li(_templateObject5());

exports.MenuItem = MenuItem;

var MenuItemLink = _styledComponents["default"].a(_templateObject6());

exports.MenuItemLink = MenuItemLink;

var CantidadItem = _styledComponents["default"].div(_templateObject7());

exports.CantidadItem = CantidadItem;

var MobileIcon = _styledComponents["default"].div(_templateObject8());

exports.MobileIcon = MobileIcon;