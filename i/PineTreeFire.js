import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22.14 14.84L22.12 14.85C22.35 15.13 22.55 15.44 22.7 15.77L22.79 15.96C23.5 17.65 23 19.6 21.69 20.82C20.5 21.91 18.84 22.2 17.3 22C15.84 21.82 14.5 20.9 13.73 19.63C13.5 19.24 13.3 18.8 13.2 18.35C13.07 18 13.03 17.62 13 17.25C12.91 15.65 13.55 13.95 14.76 12.95C14.21 14.16 14.34 15.67 15.15 16.72L15.26 16.85C15.4 16.97 15.57 17 15.73 16.94C15.88 16.88 16 16.73 16 16.57L15.93 16.33C15.05 14 15.79 11.3 17.66 9.77C18.17 9.35 18.8 8.97 19.46 8.8C18.78 10.16 19 11.94 20.09 13C20.55 13.5 21.11 13.79 21.58 14.23L22.14 14.84M19.86 19.5L19.85 19.47C20.3 19.08 20.55 18.41 20.53 17.81L20.5 17.5C20.3 16.5 19.43 16.16 18.87 15.43C18.7 15.21 18.55 14.93 18.44 14.65C18.22 15.15 18.2 15.62 18.29 16.16C18.39 16.73 18.61 17.22 18.5 17.81C18.34 18.46 17.83 19.11 16.94 19.32C17.44 19.81 18.25 20.2 19.06 19.92C19.32 19.85 19.65 19.66 19.86 19.5M9 21V18H2L7 13H4L9 8H6L11 3L16 8H13L14.82 9.82C12.55 11.06 11 13.59 11 16.5C11 18.19 11.5 19.75 12.4 21H9Z'
  }));
});