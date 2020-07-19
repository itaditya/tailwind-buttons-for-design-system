"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var mapIconBaseSize = {
  sm: "text-xl",
  base: "text-2xl",
  lg: "text-4xl"
};

function IconButton(props) {
  var _props$size = props.size,
      size = _props$size === void 0 ? "base" : _props$size,
      _props$as = props.as,
      as = _props$as === void 0 ? "button" : _props$as,
      restProps = _objectWithoutProperties(props, ["size", "as"]);

  var Element = as;
  return /*#__PURE__*/_react["default"].createElement(Element, _extends({}, restProps, {
    className: (0, _classnames["default"])("flex items-center justify-center p-3 rounded-full\n        disabled:bg-transparent hover:bg-gray-300 active:bg-gray-400 focus:bg-gray-400 \n        disabled:opacity-50 disabled:cursor-not-allowed \n        focus:outline-none focus:shadow-outline", mapIconBaseSize[size])
  }));
}

var _default = IconButton;
exports["default"] = _default;

//# sourceMappingURL=IconButton.js.map