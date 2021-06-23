import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M10.5 17V10H13.5V16.61C13.44 16.73 13.4 16.87 13.35 17H10.5M19 13C19.17 13 19.33 13 19.5 13.03V10H16.5V13.55C17.26 13.2 18.11 13 19 13M7.5 17V10H4.5V17H7.5M21.5 6L12 1L2.5 6V8H21.5V6M2.5 19V22H13.81C13.3 21.12 13 20.09 13 19H2.5M21.34 16L17.75 19.59L16.16 18L15 19.16L17.75 22.16L22.5 17.41L21.34 16Z'
  }));
});