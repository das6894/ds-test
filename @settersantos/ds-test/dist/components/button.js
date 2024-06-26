"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "dribbble-button",
    style: {
      backgroundColor: '#292929',
      color: 'white',
      fontSize: '16px',
      borderRadius: '8px',
      padding: '4px 8px'
    }
  }, props.text);
};
var _default = exports.default = Button;