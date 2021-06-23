import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M18 4L20 7H17L15 4H13L15 7H12L10 4H8L10 7H7L5 4H4C2.9 4 2 4.9 2 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V4H18M11.25 15.25L10 18L8.75 15.25L6 14L8.75 12.75L10 10L11.25 12.75L14 14L11.25 15.25M16.94 11.94L16 14L15.06 11.94L13 11L15.06 10.06L16 8L16.94 10.06L19 11L16.94 11.94Z'
  }));
});