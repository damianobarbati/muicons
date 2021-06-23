import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20 2H4C2.89 2 2 2.89 2 4V20C2 21.11 2.89 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.89 21.11 2 20 2M11 4C13.21 4 15 5.79 15 8C15 9.5 14.2 10.77 13 11.46V10.24C13.61 9.69 14 8.89 14 8C14 6.34 12.66 5 11 5S8 6.34 8 8C8 8.89 8.39 9.69 9 10.24V11.46C7.8 10.77 7 9.5 7 8C7 5.79 8.79 4 11 4M18 18.5C17.97 19.32 17.32 19.97 16.5 20H11C10.62 20 10.26 19.85 10 19.57L6 15.37L6.74 14.6C6.93 14.39 7.2 14.28 7.5 14.28H7.7L10 16V8C10 7.45 10.45 7 11 7S12 7.45 12 8V12.47L13.21 12.6L17.15 14.79C17.68 15.03 18 15.56 18 16.14V18.5Z'
  }));
});