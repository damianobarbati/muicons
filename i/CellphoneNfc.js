import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2,16V18A5,5 0 0,1 7,23H9A7,7 0 0,0 2,16M2,20V23H5A3,3 0 0,0 2,20M2,12V14A9,9 0 0,1 11,23H13C13,16.92 8.08,12 2,12M17,1H7A2,2 0 0,0 5,3V10.37C5.69,10.53 6.36,10.74 7,11V5H17V18H13.97C14.5,19.25 14.81,20.59 14.92,22H17A2,2 0 0,0 19,20V3A2,2 0 0,0 17,1Z'
  }));
});