import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M8 4V6H4V8H6.39C5.55 8.74 5 9.8 5 11C5 13.2 6.8 15 9 15C11.2 15 13 13.2 13 11C13 9.8 12.45 8.74 11.61 8H14V6H10V4M15 4V16H17V11H20V9H17V4M9 9C10.12 9 11 9.88 11 11C11 12.12 10.12 13 9 13C7.88 13 7 12.12 7 11C7 9.88 7.88 9 9 9M7 16V20H17V18H9V16Z'
  }));
});