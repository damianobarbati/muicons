import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22 5L21.11 6.34C21.65 6.7 22 7.31 22 8V11.5L20.5 12L18.96 9.54C18.83 9.33 18.5 9.42 18.5 9.67V13.25C18.5 14.23 18.11 15.11 17.5 15.78V22H15V17C14.92 17 14.84 17 14.75 17C14.54 17 14.33 16.97 14.13 16.94L9.45 16.16L8.57 18.12L9.54 22H6.96L6.04 18.3C5.97 18.03 6 17.74 6.11 17.5L7 15.5C6.12 14.92 5.53 13.94 5.5 12.81C5.46 12.96 5.44 13.18 5.47 13.5C5.5 13.94 5.61 14.59 5.54 15.31C5.5 16.03 5.18 16.77 4.76 17.26C4.32 17.75 3.85 18.09 3.35 18.35L2.65 17.65C2.84 17.18 3.03 16.76 3.07 16.37C3.13 16 3.06 15.7 2.95 15.43L2.42 14.3C2.21 13.79 1.95 13.05 2 12.18C2.03 11.33 2.5 10.22 3.39 9.61C4.29 9 5.26 8.91 6.05 9.08C6.55 9.18 7.06 9.42 7.5 9.76C7.87 9.59 8.3 9.5 8.75 9.5H14.5V9C14.5 6.79 16.29 5 18.5 5L22 2L21 5H22Z'
  }));
});