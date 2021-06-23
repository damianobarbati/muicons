import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M1,3.5L2.28,2.25L21.75,21.72L20.5,23L17.7,20.22C16.08,21.34 14.12,22 12,22A10,10 0 0,1 2,12C2,9.88 2.66,7.92 3.78,6.3L1,3.5M6,18L12.47,15L9,11.53L6,18M18,6L11.56,9L6.33,3.76C7.94,2.65 9.9,2 12,2A10,10 0 0,1 22,12C22,14.1 21.35,16.06 20.24,17.67L15,12.44L18,6Z'
  }));
});