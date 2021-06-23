import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M19.76 2H4.24C3 2 2 3 2 4.24V19.76C2 21 3 22 4.24 22H19.76C21 22 22 21 22 19.76V4.24C22 3 21 2 19.76 2M17.73 14.69C17.73 14.88 17.57 14.96 17.38 15.04C16.64 15.36 15.84 15.65 15 15.65C13.78 15.65 13.22 14.91 11.78 14.91C10.74 14.91 9.65 15.28 8.77 15.68C8.71 15.71 8.66 15.71 8.61 15.73V17.76C8.61 17.84 8.61 17.92 8.58 17.97V18.03C8.47 18.4 8.13 18.67 7.73 18.67C7.22 18.67 6.82 18.26 6.82 17.76V8C6.47 7.73 6.24 7.31 6.24 6.83C6.24 6 6.9 5.33 7.73 5.33C8.56 5.33 9.23 6 9.23 6.83C9.23 7.31 9 7.73 8.64 8V8.83C8.72 8.8 8.8 8.77 8.88 8.72C9.71 8.37 10.7 8.08 11.63 8.08C12.64 8.08 13.44 8.35 14.35 8.69C14.54 8.77 14.72 8.8 14.93 8.8C15.95 8.8 17.07 8.08 17.34 8.08C17.55 8.08 17.74 8.24 17.74 8.43V14.69H17.73Z'
  }));
});