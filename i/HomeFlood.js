import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M5,11H2L12,2L22,11H19V15.92C17.95,15.75 16.93,15.32 16,14.67C15.37,15.11 14.7,15.43 14,15.65V13H10V15.65C9.3,15.43 8.63,15.11 8,14.67C7.07,15.32 6.05,15.75 5,15.92M20,18C18.61,18 17.22,17.53 16,16.67C13.56,18.38 10.44,18.38 8,16.67C6.78,17.53 5.39,18 4,18H2V22H22V18'
  }));
});