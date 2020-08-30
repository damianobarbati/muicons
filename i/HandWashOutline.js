import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17 5L17.62 6.37L19 7L17.62 7.63L17 9L16.36 7.63L15 7L16.36 6.37L17 5M20 14C21.1 14 22 13.1 22 12S20 8 20 8 18 10.9 18 12 18.9 14 20 14M11 6.1V4H13C13.57 4 14.1 4.17 14.55 4.45L16 3C15.15 2.39 14.13 2 13 2H7.5V4H9V6.11C7.22 6.5 5.8 7.79 5.25 9.5H7.41C7.94 8.61 8.89 8 10 8C11.62 8 12.94 9.29 13 10.9L15 11.65V11C15 8.58 13.28 6.56 11 6.1M22 19V20L14 22.5L7 20.56V22H1V11H8.97L15.13 13.3C16.25 13.72 17 14.8 17 16H19C20.66 16 22 17.34 22 19M5 20V13H3V20H5M19.9 18.57C19.74 18.24 19.39 18 19 18H13.65C13.11 18 12.58 17.92 12.07 17.75L9.69 16.96L10.32 15.06L12.7 15.85C13 15.95 15 16 15 16C15 15.63 14.77 15.3 14.43 15.17L8.61 13H7V18.5L13.97 20.41L19.9 18.57Z'
  }));
});