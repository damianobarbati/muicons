import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21 6H17.83C17.94 5.69 18 5.35 18 5C18 3.34 16.66 2 15 2C14 2 13.12 2.5 12.57 3.24V3.23L12 4L11.43 3.23V3.24C10.88 2.5 10 2 9 2C7.97 2 7.06 2.5 6.5 3.32L8.03 4.83C8.12 4.36 8.5 4 9 4C9.55 4 10 4.45 10 5C10 5.5 9.64 5.88 9.17 5.97L13 9.8V8H21V10H13.2L15.2 12H20V16.8L22 18.8V12C22.55 12 23 11.55 23 11V8C23 6.9 22.11 6 21 6M15 6C14.45 6 14 5.55 14 5S14.45 4 15 4 16 4.45 16 5 15.55 6 15 6M1.11 3L4.11 6H3C1.9 6 1 6.9 1 8V11C1 11.55 1.45 12 2 12V20C2 21.11 2.9 22 4 22H20C20.03 22 20.07 22 20.1 22L21.56 23.45L22.83 22.18L2.39 1.73L1.11 3M13 14.89L18.11 20H13V14.89M11 12.89V20H4V12H10.11L11 12.89M8.11 10H3V8H6.11L8.11 10Z'
  }));
});