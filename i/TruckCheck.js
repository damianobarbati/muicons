import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M3,4H17V8H20L23,12V17H21A3,3 0 0,1 18,20A3,3 0 0,1 15,17H9A3,3 0 0,1 6,20A3,3 0 0,1 3,17H1V6C1,4.89 1.9,4 3,4M17,9.5V12H21.47L19.5,9.5H17M6,15.5A1.5,1.5 0 0,0 4.5,17A1.5,1.5 0 0,0 6,18.5A1.5,1.5 0 0,0 7.5,17A1.5,1.5 0 0,0 6,15.5M18,15.5A1.5,1.5 0 0,0 16.5,17A1.5,1.5 0 0,0 18,18.5A1.5,1.5 0 0,0 19.5,17A1.5,1.5 0 0,0 18,15.5M8,14L14,8L12.59,6.58L8,11.17L5.91,9.08L4.5,10.5L8,14Z'
  }));
});