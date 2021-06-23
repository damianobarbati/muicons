import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21 6.5C21 8.43 19.43 10 17.5 10S14 8.43 14 6.5 15.57 3 17.5 3 21 4.57 21 6.5M11.5 22C12.61 22 13.5 21.11 13.5 20H9.5C9.5 21.11 10.4 22 11.5 22M18 12C17.84 12 17.67 12 17.5 12C17 12 16.5 11.92 16 11.79V17H7V10.5C7 8 9 6 11.5 6C11.68 6 11.85 6.03 12 6.05C12.1 5.06 12.45 4.14 13 3.37C12.92 2.6 12.28 2 11.5 2C10.67 2 10 2.67 10 3.5V4.18C7.13 4.86 5 7.43 5 10.5V16L3 18V19H20V18L18 16V12Z'
  }));
});