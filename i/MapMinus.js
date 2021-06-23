import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15 18V20H23V18H15M13.16 20.36L9 18.9L3.66 20.97C3.6 21 3.55 21 3.5 21C3.22 21 3 20.78 3 20.5V5.38C3 5.15 3.16 4.97 3.36 4.9L9 3L15 5.1L20.34 3H20.5C20.78 3 21 3.22 21 3.5V13.35C20.37 13.13 19.7 13 19 13C17.46 13 16.06 13.58 15 14.54V7.1L9 5V16.9L13.04 18.32C13 18.54 13 18.77 13 19C13 19.47 13.06 19.92 13.16 20.36Z'
  }));
});