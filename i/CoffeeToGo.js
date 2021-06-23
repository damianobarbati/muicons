import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M3,19V17H17L15.26,15.24L16.67,13.83L20.84,18L16.67,22.17L15.26,20.76L17,19H3M17,8V5H15V8H17M17,3C18.11,3 19,3.9 19,5V8C19,9.11 18.11,10 17,10H15V11A4,4 0 0,1 11,15H7A4,4 0 0,1 3,11V3H17Z'
  }));
});