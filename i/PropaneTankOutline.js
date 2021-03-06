import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M16 6V4C16 2.9 15.11 2 14 2H10C8.9 2 8 2.9 8 4V6C5.79 6 4 7.79 4 10V17C4 18.86 5.28 20.41 7 20.86V22H17V20.86C18.72 20.42 20 18.86 20 17V10C20 7.79 18.21 6 16 6M10 4H14V6H10V4M18 17C18 18.1 17.1 19 16 19H8C6.9 19 6 18.1 6 17V10C6 8.9 6.9 8 8 8H16C17.1 8 18 8.9 18 10V17Z'
  }));
});