import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M3 2V8H21V2H3M19 6H5V4H19V6M18 9H20V20H4V9H6V18H18V9M15 10.5V12H9V10.5C9 10.22 9.22 10 9.5 10H14.5C14.78 10 15 10.22 15 10.5M7 22H9V24H7V22M11 22H13V24H11V22M15 22H17V24H15V22Z'
  }));
});