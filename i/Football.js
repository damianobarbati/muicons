import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M7.5,7.5C9.17,5.87 11.29,4.69 13.37,4.18C15.46,3.67 17.5,3.83 18.6,4C19.71,4.15 19.87,4.31 20.03,5.41C20.18,6.5 20.33,8.55 19.82,10.63C19.31,12.71 18.13,14.83 16.5,16.5C14.83,18.13 12.71,19.31 10.63,19.82C8.55,20.33 6.5,20.18 5.41,20.03C4.31,19.87 4.15,19.71 4,18.6C3.83,17.5 3.67,15.46 4.18,13.37C4.69,11.29 5.87,9.17 7.5,7.5M7.3,15.79L8.21,16.7L9.42,15.5L10.63,16.7L11.54,15.79L10.34,14.58L12,12.91L13.21,14.12L14.12,13.21L12.91,12L14.58,10.34L15.79,11.54L16.7,10.63L15.5,9.42L16.7,8.21L15.79,7.3L14.58,8.5L13.37,7.3L12.46,8.21L13.66,9.42L12,11.09L10.79,9.88L9.88,10.79L11.09,12L9.42,13.66L8.21,12.46L7.3,13.37L8.5,14.58L7.3,15.79Z'
  }));
});