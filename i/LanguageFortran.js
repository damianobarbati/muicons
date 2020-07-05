import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M5 4V6H6C6.55 6 7 6.45 7 7V17C7 17.55 6.55 18 6 18H5V20H14V18H12C11.45 18 11 17.55 11 17V13H13C13.55 13 14 13.45 14 14V16H16V8H14V10C14 10.55 13.55 11 13 11H11V6H16C17.11 6 18 7.34 18 9V10H20V4Z'
  }));
});