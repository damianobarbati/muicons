import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M6.58,19H14.58V22H6.58V19M19.74,11.6C19.55,11.4 19.29,11.28 19,11.28L18.78,11.31L15.58,13V11.83L16.09,2.9C16.12,2.35 15.7,1.87 15.15,1.84C14.6,1.81 14.12,2.23 14.09,2.78L13.82,7.47H13.58L12.54,7.58V2A1,1 0 0,0 11.54,1C11,1 10.54,1.45 10.54,2V8.41L9.72,8.78L9.03,3.32C8.96,2.77 8.46,2.38 7.91,2.45C7.36,2.5 6.97,3 7.04,3.57L7.81,9.63L7.43,9.8C7.3,9.85 7.18,9.93 7.07,10L5.97,6.11C5.81,5.54 5.25,5.2 4.71,5.34C4.18,5.5 3.88,6.08 4.04,6.65L6.61,15.77C6.61,15.8 6.63,15.84 6.64,15.87L6.67,16H6.68C6.9,16.57 7.47,17 8.08,17H14.58C14.97,17 15.32,16.84 15.58,16.57L20.5,12.37L19.74,11.6Z'
  }));
});