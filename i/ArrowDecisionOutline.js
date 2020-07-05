import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M9.64,13.4C8.63,12.5 7.34,12.03 6,12V15L2,11L6,7V10C7.67,10 9.3,10.57 10.63,11.59C10.22,12.15 9.89,12.76 9.64,13.4M18,15V12C17.5,12 13.5,12.16 13.05,16.2C14.61,16.75 15.43,18.47 14.88,20.03C14.33,21.59 12.61,22.41 11.05,21.86C9.5,21.3 8.67,19.59 9.22,18.03C9.5,17.17 10.2,16.5 11.05,16.2C11.34,12.61 14.4,9.88 18,10V7L22,11L18,15M13,19A1,1 0 0,0 12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19M11,11.12C11.58,10.46 12.25,9.89 13,9.43V5H16L12,1L8,5H11V11.12Z'
  }));
});