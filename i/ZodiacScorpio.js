import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17.71,15.29L16.29,16.71L17.59,18H16A2,2 0 0,1 14,16V6A3,3 0 0,0 11,3C10.25,3 9.55,3.29 9,3.78C7.86,2.76 6.14,2.76 5,3.78C4.45,3.28 3.74,3 3,3V5A1,1 0 0,1 4,6V16H6V6A1,1 0 0,1 7,5A1,1 0 0,1 8,6V16H10V6A1,1 0 0,1 11,5A1,1 0 0,1 12,6V16A4,4 0 0,0 16,20H17.59L16.29,21.29L17.71,22.71L21.41,19L17.71,15.29Z'
  }));
});