import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20 2H2V8H20V2M18 6H4V4H18V6M16 9C14.69 9 13.46 9.37 12.41 10H8.5C8.22 10 8 10.22 8 10.5V12H10.26C9.47 13.13 9 14.5 9 16C9 16.7 9.11 17.37 9.29 18H5V9H3V20H10.26C11.53 21.81 13.62 23 16 23C19.87 23 23 19.87 23 16C23 12.13 19.87 9 16 9M16 21C13.24 21 11 18.76 11 16S13.24 11 16 11 21 13.24 21 16 18.76 21 16 21M16.5 16.25L19.36 17.94L18.61 19.16L15 17V12H16.5V16.25Z'
  }));
});