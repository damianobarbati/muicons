import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M5 12C5 13.11 4.11 14 3 14C1.9 14 1 13.11 1 12C1 10.9 1.9 10 3 10C4.11 10 5 10.9 5 12M4 2V8H2V2H4M2 22V16H4V22H2M24 6V18C24 19.11 23.11 20 22 20H10C8.9 20 8 19.11 8 18V14L6 12L8 10V6C8 4.89 8.9 4 10 4H22C23.11 4 24 4.89 24 6M22 6H10V10.83L8.83 12L10 13.17V18H22V6M16.5 15.5V17H15V15.5H16.5M14.5 10.5H13V10C13 8.34 14.34 7 16 7C17.66 7 19 8.34 19 10C19 10.97 18.5 11.88 17.71 12.41L17.41 12.6C16.84 13 16.5 13.62 16.5 14.3V14.5H15V14.3C15 13.11 15.6 12 16.59 11.35L16.88 11.16C17.27 10.9 17.5 10.47 17.5 10C17.5 9.18 16.83 8.5 16 8.5C15.17 8.5 14.5 9.17 14.5 10V10.5Z'
  }));
});