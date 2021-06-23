import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M0 3H18V5C16.9 5 16 5.9 16 7V19C16 20.11 15.11 21 14 21H4C2.9 21 2 20.11 2 19V7C2 5.9 1.11 5 0 5V3M4 5V7H9V8H4V9H7V10H4V11H7V12H4V13H9V14H4V15H7V16H4V19H14V5H4M21.5 15.5V17H20V15.5H21.5M19.5 10.5H18V10C18 8.34 19.34 7 21 7C22.66 7 24 8.34 24 10C24 10.97 23.5 11.88 22.71 12.41L22.41 12.6C21.84 13 21.5 13.62 21.5 14.3V14.5H20V14.3C20 13.11 20.6 12 21.59 11.35L21.88 11.16C22.27 10.9 22.5 10.47 22.5 10C22.5 9.18 21.83 8.5 21 8.5C20.17 8.5 19.5 9.17 19.5 10V10.5Z'
  }));
});