import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M9 14.5C9 15.33 8.33 16 7.5 16S6 15.33 6 14.5 6.67 13 7.5 13 9 13.67 9 14.5M16.5 13C15.67 13 15 13.67 15 14.5S15.67 16 16.5 16C17.33 16 18 15.33 18 14.5S17.33 13 16.5 13M21.59 9.19C21.14 8.87 20.5 8.97 20.19 9.41L20.06 9.59C19.88 9.85 19.57 10 19.26 10L4.74 10C4.43 10 4.13 9.85 3.94 9.59L3.81 9.41C3.5 8.97 2.86 8.87 2.41 9.19C1.96 9.5 1.87 10.15 2.19 10.59L2.32 10.77C2.88 11.54 3.79 12 4.74 12H19.26C20.21 12 21.12 11.54 21.68 10.77L21.81 10.59C22.13 10.15 22.04 9.5 21.59 9.19Z'
  }));
});