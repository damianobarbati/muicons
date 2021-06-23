import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3M16.29 13.19L15.29 12.45C15.3 12.3 15.3 12.15 15.29 12C15.31 11.85 15.31 11.7 15.29 11.55L16.29 10.81C16.37 10.74 16.4 10.62 16.35 10.5L15.44 9C15.39 8.89 15.26 8.84 15.15 8.88L14 9.3C13.77 9.12 13.5 8.97 13.24 8.85L13.07 7.67C13.05 7.57 12.96 7.5 12.86 7.5H11.1C11 7.5 10.89 7.58 10.87 7.69L10.7 8.88C10.43 9 10.17 9.13 9.93 9.3L8.81 8.85C8.71 8.81 8.59 8.85 8.53 8.95L7.63 10.5C7.58 10.61 7.6 10.72 7.69 10.79L8.69 11.55C8.66 11.85 8.66 12.15 8.69 12.45L7.69 13.19C7.61 13.26 7.58 13.38 7.63 13.5L8.53 15C8.58 15.11 8.7 15.16 8.81 15.12L9.93 14.67C10.16 14.85 10.42 15 10.69 15.12L10.87 16.3C10.89 16.41 11 16.5 11.1 16.47H12.9C13 16.47 13.11 16.39 13.12 16.28L13.3 15.09C13.56 14.97 13.81 14.83 14.05 14.67L15.18 15.12C15.28 15.12 15.4 15.12 15.46 15L16.36 13.45C16.41 13.35 16.38 13.23 16.29 13.16M12 13.5C11.17 13.5 10.5 12.83 10.5 12S11.17 10.5 12 10.5 13.5 11.17 13.5 12C13.5 12.82 12.84 13.5 12 13.5H12'
  }));
});