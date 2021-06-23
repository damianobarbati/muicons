import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M18.25,22L15.5,19L16.66,17.82L18.25,19.41L21.84,15.82L23,17.23L18.25,22M20.5,3A0.5,0.5 0 0,1 21,3.5V13.34C20.37,13.12 19.7,13 19,13V5.7L16,6.86V13.8C15.2,14.27 14.5,14.91 14,15.68V6.87L10,5.47V17.13L13.05,18.2L13,19C13,19.46 13.05,19.92 13.15,20.35L9,18.9L3.66,20.97L3.5,21A0.5,0.5 0 0,1 3,20.5V5.38C3,5.15 3.15,4.97 3.36,4.9L9,3L15,5.1L20.34,3.03L20.5,3M5,6.46V18.31L8,17.15V5.45L5,6.46Z'
  }));
});