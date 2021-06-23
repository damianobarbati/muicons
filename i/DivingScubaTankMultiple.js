import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22,18.5A2.5,2.5 0 0,1 19.5,21A2.5,2.5 0 0,1 17,18.5C17,17.47 17.62,16.59 18.5,16.21V6H14V7.35C15.22,7.93 16,9.15 16,10.5V22H2V10.5C2,9.15 2.78,7.93 4,7.35V6H2V4H4V3.5A1.5,1.5 0 0,1 5.5,2A1.5,1.5 0 0,1 7,3.5V4H11V3.5A1.5,1.5 0 0,1 12.5,2A1.5,1.5 0 0,1 14,3.5V4H18.5A2,2 0 0,1 20.5,6V16.21C21.38,16.59 22,17.47 22,18.5M11,7.35V6H7V7.35C8.22,7.93 9,9.15 9,10.5C9,9.15 9.78,7.93 11,7.35Z'
  }));
});