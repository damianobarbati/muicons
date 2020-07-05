import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21 7.24L19.08 9.16L14.84 4.92L16.76 3C17.93 1.83 19.83 1.83 21 3S22.17 6.07 21 7.24M10.94 8.82L12.36 10.24L13 9.6L14.4 11L13.76 11.64L15.18 13.06L15.81 12.43L17.22 13.85L19.35 11.72L12.28 4.65L10.15 6.78L11.57 8.19L10.94 8.82M19.86 20.29L18.58 21.57L12.63 15.61L8.1 20.14L3.5 22L2 20.5L3.86 15.9L8.39 11.37L1.86 4.85L3.14 3.57L19.86 20.29M11.21 14.2L9.81 12.79L5.56 17.03L4.5 19.5L6.97 18.44L11.21 14.2Z'
  }));
});