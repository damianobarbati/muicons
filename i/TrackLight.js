import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M6,1V3H9V6.4L4.11,4.38L1.43,10.84L6.97,13.14L11.94,16.82L13.79,17.59L17.62,8.35L15.77,7.58L11,6.87V3H14V1H6M21.81,6.29L19.5,7.25L20.26,9.1L22.57,8.14L21.81,6.29M19.78,13.57L19,15.42L21.79,16.57L22.55,14.72L19.78,13.57M16.19,18.93L14.34,19.69L15.3,22L17.15,21.23L16.19,18.93Z'
  }));
});