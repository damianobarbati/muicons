import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17.75 21.16L15 18.16L16.16 17L17.75 18.59L21.34 15L22.5 16.41L17.75 21.16M3 3H21V5C19.9 5 19 5.9 19 7V12C18.3 12 17.63 12.12 17 12.34V5H7V7H12V8H7V9H10V10H7V11H10V12H7V13H12V14H7V15H10V16H7V19H13.08C13.2 19.72 13.45 20.39 13.8 21H7C5.9 21 5 20.11 5 19V7C5 5.9 4.11 5 3 5V3Z'
  }));
});