import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M6,8L14,13L22,8V8L14,3L6,8V8M24,8V18A2,2 0 0,1 22,20H6A2,2 0 0,1 4,18V8C4,7.27 4.39,6.64 4.97,6.29L14,0.64L23.03,6.29C23.61,6.64 24,7.27 24,8M2,8V22H20V24H2A2,2 0 0,1 0,22V8H2Z'
  }));
});