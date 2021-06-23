import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M10,21H8L6,19V16H10V21M18,16H14V21H16L18,19V16M3,3V4A1,1 0 0,0 4,5V14A1,1 0 0,0 5,15H19A1,1 0 0,0 20,14V5H20A1,1 0 0,0 21,4V3H3M11.83,13V9.73H10L12.61,4.66V7.93H14.36L11.83,13Z'
  }));
});