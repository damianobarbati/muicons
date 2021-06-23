import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M1 1V8L8 1H1M18 16H17.42L16.61 15.19C17.5 14 18 12.5 18 11C18 7.13 14.87 4 11 4C9.5 4 8 4.5 6.79 5.4C3.7 7.72 3.07 12.11 5.39 15.2C7.71 18.29 12.1 18.92 15.19 16.6L16 17.41V18L21 23L23 21L18 16M14.6 13.16L13.18 14.58L11.06 12.45L8.94 14.58L7.5 13.16L9.65 11.04L7.5 8.92L8.94 7.5L11.06 9.63L13.18 7.5L14.6 8.92L12.47 11.04L14.6 13.16Z'
  }));
});