import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M6,3H3V6A3,3 0 0,0 6,3M14,3H12A9,9 0 0,1 3,12V14C9.08,14 14,9.07 14,3M10,3H8A5,5 0 0,1 3,8V10A7,7 0 0,0 10,3M10,21H12A9,9 0 0,1 21,12V10A11,11 0 0,0 10,21M18,21H21V18A3,3 0 0,0 18,21M14,21H16A5,5 0 0,1 21,16V14A7,7 0 0,0 14,21Z'
  }));
});