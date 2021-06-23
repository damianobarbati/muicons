import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22,22H2V20H22V22M6.2,17.3L4.8,15.9L6.2,14.5L5.5,13.8L4.1,15.2L2.7,13.8L2,14.5L3.4,15.9L2,17.3L2.7,18L4.1,16.6L5.5,18L6.2,17.3M20,5H10A2,2 0 0,0 8,7V16A2,2 0 0,0 10,18H20A2,2 0 0,0 22,16V7A2,2 0 0,0 20,5M10,16L12.6,12.7L14.4,14.9L16.8,11.6L20,16H10Z'
  }));
});