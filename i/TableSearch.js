import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M19.3,17.89C20.62,15.79 20,13 17.89,11.68C15.79,10.36 13,11 11.68,13.09C10.36,15.2 11,18 13.09,19.3C14.56,20.22 16.42,20.22 17.89,19.3L21,22.39L22.39,21L19.3,17.89M17.3,17.27C16.32,18.25 14.74,18.24 13.76,17.27C12.79,16.29 12.79,14.71 13.77,13.73C14.74,12.76 16.32,12.76 17.3,13.73C18.26,14.72 18.25,16.3 17.27,17.27H17.3M19,4H5A2,2 0 0,0 3,6V18A2,2 0 0,0 5,20H10.81C10.25,19.42 9.8,18.74 9.5,18H5V14H9.18C9.34,13.29 9.61,12.61 10,12H5V8H11V10.81C11.58,10.25 12.26,9.8 13,9.5V8H19V10C19.4,10.25 19.77,10.55 20.1,10.88C20.44,11.22 20.74,11.59 21,12V6A2,2 0 0,0 19,4Z'
  }));
});