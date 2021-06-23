import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M11,2A1,1 0 0,0 10,3V5L10,9A0.5,0.5 0 0,0 10.5,9.5H12A0.5,0.5 0 0,1 12.5,10A0.5,0.5 0 0,1 12,10.5H10.5C9.73,10.5 9,9.77 9,9V5.16C7.27,5.6 6,7.13 6,9V10.5A2.5,2.5 0 0,1 8.5,13A2.5,2.5 0 0,1 6,15.5V17C6,19.77 8.23,22 11,22H13C15.77,22 18,19.77 18,17V15.5A2.5,2.5 0 0,1 15.5,13A2.5,2.5 0 0,1 18,10.5V9C18,6.78 16.22,5 14,5V3A1,1 0 0,0 13,2H11M10.75,16.5H13.25L12.75,20H11.25L10.75,16.5Z'
  }));
});