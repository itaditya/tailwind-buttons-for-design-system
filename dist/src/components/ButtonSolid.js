"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ButtonBase = _interopRequireDefault(require("./ButtonBase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var mapSolidVariant = {
  primary: "text-white bg-primary disabled:bg-primary\n    hover:bg-primary-600 active:bg-primary-700\n    focus:bg-primary-700 focus:shadow-outline-primary",
  danger: "text-white bg-danger disabled:bg-danger\n    hover:bg-danger-600 active:bg-danger-700\n    focus:bg-danger-700 focus:shadow-outline-danger",
  plain: "bg-white focus:shadow-outline"
};

function ButtonSolid(props) {
  var _props$variant = props.variant,
      variant = _props$variant === void 0 ? "primary" : _props$variant,
      restProps = _objectWithoutProperties(props, ["variant"]);

  return /*#__PURE__*/_react["default"].createElement(_ButtonBase["default"], _extends({}, restProps, {
    className: (0, _classnames["default"])("shadow-md disabled:shadow-md hover:shadow-lg", mapSolidVariant[variant])
  }));
}

var _default = ButtonSolid;
exports["default"] = _default;

//# sourceMappingURL=ButtonSolid.js.map