import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M5,2V6H3V8H5V10H3V12H5V22H7V16H13C15.7,16 18.16,14.44 19.32,12H22V10H19.92C20.03,9.34 20.03,8.66 19.92,8H22V6H19.32C18.16,3.56 15.7,2 13,2M7,4H13C14.57,4 16.06,4.74 17,6H7V4M13,14H7V12H17C16.06,13.26 14.57,14 13,14M18,9C18,9.34 17.96,9.67 17.9,10H7V8H17.9C17.96,8.33 18,8.66 18,9Z'
  }));
});