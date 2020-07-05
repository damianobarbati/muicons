import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M8 11C7.45 11 7 10.55 7 10V8C7 7.45 7.45 7 8 7C8.55 7 9 7.45 9 8V10C9 10.55 8.55 11 8 11M17 10V8C17 7.45 16.55 7 16 7C15.45 7 15 7.45 15 8V10C15 10.55 15.45 11 16 11C16.55 11 17 10.55 17 10M22 5V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V5C2 3.9 2.9 3 4 3H20C21.1 3 22 3.9 22 5M4 20L13.06 20C12.96 19.35 12.89 18.64 12.83 17.94C12.56 17.96 12.3 18 12 18C8.24 18 6.31 15.73 6.23 15.63C5.88 15.21 5.94 14.58 6.36 14.22C6.78 13.87 7.41 13.93 7.77 14.35C7.83 14.43 9.23 16 12 16C12.27 16 12.5 15.97 12.74 15.95C12.71 14.75 12.73 13.74 12.74 13.26H10.93C10.28 13.26 9.75 12.7 9.75 12C9.77 11.75 10.07 7.82 11 5H4L4 20M20 20L20 5H12.6C11.74 7.19 11.37 10.73 11.27 11.76H13.08C13.72 11.76 14.25 12.32 14.25 13C14.25 13.04 14.21 14.15 14.24 15.6C15.54 15.11 16.22 14.35 16.23 14.34C16.58 13.92 17.21 13.85 17.63 14.2C18.06 14.55 18.12 15.18 17.77 15.61C17.71 15.68 16.55 17.05 14.32 17.68C14.38 18.5 14.46 19.29 14.58 20H20Z'
  }));
});