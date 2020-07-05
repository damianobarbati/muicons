import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M6.35,20.25L7.56,18.66C8.42,19.23 9.39,19.64 10.43,19.85L10.16,21.83C8.77,21.57 7.5,21 6.35,20.25M16.43,18.66L17.64,20.26C16.5,21.03 15.23,21.57 13.84,21.83L13.57,19.85C14.61,19.64 15.57,19.23 16.43,18.66M19.84,13.59L21.83,13.86C21.57,15.25 21,16.54 20.24,17.66L18.65,16.45C19.22,15.6 19.63,14.63 19.84,13.59M2.17,13.84L4.15,13.57C4.36,14.61 4.77,15.58 5.34,16.44L3.75,17.65C3,16.5 2.43,15.23 2.17,13.84M18.66,7.56L20.25,6.35C21.03,7.5 21.58,8.78 21.83,10.18L19.85,10.45C19.64,9.4 19.23,8.42 18.66,7.56M13.57,4.15L13.84,2.17C15.23,2.43 16.5,3 17.65,3.75L16.44,5.34C15.58,4.77 14.61,4.36 13.57,4.15M7.56,5.34L6.35,3.75C7.5,3 8.77,2.43 10.16,2.17L10.43,4.15C9.39,4.36 8.42,4.77 7.56,5.34M4.15,10.43L2.17,10.16C2.43,8.77 3,7.5 3.75,6.35L5.34,7.56C4.77,8.42 4.36,9.39 4.15,10.43Z'
  }));
});