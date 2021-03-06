import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5M13.76,6H15.39L16.5,8.6L17.59,6H19.24C19.24,6 17.5,10.57 16.46,12.32C16.08,12.89 15.35,13.27 14.5,13.25V11.75C14.96,11.76 15.25,11.5 15.5,11.13C15.61,11 15.68,10.8 15.74,10.64L13.76,6M6.41,9.59L9.21,12.38L12,9.59L13.41,11L10.62,13.79L13.41,16.59L12,18L9.21,15.21L6.41,18L5,16.59L7.79,13.79L5,11L6.41,9.59Z'
  }));
});