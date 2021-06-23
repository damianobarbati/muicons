import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17 9H16.5 17M7 15H10C10.08 14.32 10.23 13.64 10.5 13H7V15M11.9 10.9C13.17 9.64 14.84 9 16.5 9H7V11H11.82C11.85 10.97 11.87 10.94 11.9 10.9M11.9 20.1C12.26 20.45 12.65 20.74 13.06 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H9.18C9.5 2.16 10.14 1.5 11 1.2C12.53 .64 14.25 1.44 14.82 3H19C20.11 3 21 3.9 21 5V10.82C20.4 10.24 19.72 9.8 19 9.5V5H17V7H7V5H5V19H11.03C11.27 19.39 11.57 19.76 11.9 20.1M11 4C11 4.55 11.45 5 12 5S13 4.55 13 4 12.55 3 12 3 11 3.45 11 4M23.39 21L22 22.39L18.88 19.32C18.19 19.75 17.37 20 16.5 20C14 20 12 18 12 15.5S14 11 16.5 11 21 13 21 15.5C21 16.38 20.75 17.21 20.31 17.9L23.39 21M19 15.5C19 14.12 17.88 13 16.5 13S14 14.12 14 15.5 15.12 18 16.5 18 19 16.88 19 15.5Z'
  }));
});