import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17.06 13C15.2 13 13.64 14.33 13.24 16.1C12.29 15.69 11.42 15.8 10.76 16.09C10.35 14.31 8.79 13 6.94 13C4.77 13 3 14.79 3 17C3 19.21 4.77 21 6.94 21C9 21 10.68 19.38 10.84 17.32C11.18 17.08 12.07 16.63 13.16 17.34C13.34 19.39 15 21 17.06 21C19.23 21 21 19.21 21 17C21 14.79 19.23 13 17.06 13M6.94 19.86C5.38 19.86 4.13 18.58 4.13 17S5.39 14.14 6.94 14.14C8.5 14.14 9.75 15.42 9.75 17S8.5 19.86 6.94 19.86M17.06 19.86C15.5 19.86 14.25 18.58 14.25 17S15.5 14.14 17.06 14.14C18.62 14.14 19.88 15.42 19.88 17S18.61 19.86 17.06 19.86M22 10.5H2V12H22V10.5M15.53 2.63C15.31 2.14 14.75 1.88 14.22 2.05L12 2.79L9.77 2.05L9.72 2.04C9.19 1.89 8.63 2.17 8.43 2.68L6 9H18L15.56 2.68L15.53 2.63Z'
  }));
});