import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21,3H3A2,2 0 0,0 1,5V8H3V5H21V19H14V21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M1,18V21H4A3,3 0 0,0 1,18M1,14V16A5,5 0 0,1 6,21H8A7,7 0 0,0 1,14M1,10V12A9,9 0 0,1 10,21H12C12,14.92 7.07,10 1,10M11,11.09V13.09L14.5,15L18,13.09V11.09L14.5,13L11,11.09M14.5,6L9,9L14.5,12L20,9L14.5,6Z'
  }));
});