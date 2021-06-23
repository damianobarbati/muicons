import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M9 4V6H6V8H9V10C6.25 10 4 12.27 4 15.03C4 17.8 6.26 20.06 9.03 20.06C9.89 20.06 10.72 19.77 11.4 19.26C11.63 19.54 11.88 19.82 12.15 20.09L13.56 18.67C13.3 18.42 13.07 18.15 12.86 17.89L13.86 16.89C14.93 15.82 15.78 14.23 16.42 12.59C17.31 13.11 18 13.9 18 15C18 16.32 17.47 17.6 16.54 18.54L17.95 19.95C19.26 18.64 20 16.86 20 15C20 13.04 18.82 11.36 17.15 10.55L17.5 9.29L15.55 8.78L15.21 10.05C15.13 10.05 15.06 10 14.97 10H11V8H16V6H11V4M11 12H14.5C13.94 13.37 13.19 14.72 12.44 15.47L11.79 16.13C11.25 14.93 11 13.59 11 12M9 12C9 14.07 9.41 15.94 10.3 17.59C9.94 17.89 9.5 18.06 9.03 18.06C7.33 18.06 6 16.73 6 15.03C6 13.34 7.32 12 9 12Z'
  }));
});