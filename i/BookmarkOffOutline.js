import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M3.28,4L2,5.27L5,8.27V21L12,18L16.78,20.05L18.73,22L20,20.72L3.28,4M7,18V10.27L13,16.25L12,15.82L7,18M7,5.16L5.5,3.67C5.88,3.26 6.41,3 7,3H17A2,2 0 0,1 19,5V17.16L17,15.16V5H7V5.16Z'
  }));
});