import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20 19.35V19.34L6.66 6L6.07 5.41L2.39 1.73L1.11 3L4.26 6.15C3.5 6.44 3 7.16 3 8V15C3 15.82 3.5 16.5 4.2 16.83L8 18.6V20L7 21V22H20.11L20.84 22.73L22.11 21.46L20 19.35M8 16.39L5 15V8H6.11L8 9.89V16.39M8 4L7 3V2H21V3L20 4V16.8L10.2 7H18V4H10V6.8L8 4.8V4Z'
  }));
});