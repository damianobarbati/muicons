import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2 6V20H20V22H2C.895 22 0 21.11 0 20V6H2M12.78 10.05L15.81 9.79L17 7L18.19 9.79L21.22 10.05L18.92 12.04L19.61 15L17 13.47L14.39 15L15.08 12.04L12.78 10.05M24 6V16C24 17.11 23.11 18 22 18H6C4.9 18 4 17.11 4 16V4C4 2.89 4.9 2 6 2H12L14 4H22C23.11 4 24 4.9 24 6M22 6H6V16H22V6Z'
  }));
});