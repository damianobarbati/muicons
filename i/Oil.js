import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22,12.5C22,12.5 24,14.67 24,16A2,2 0 0,1 22,18A2,2 0 0,1 20,16C20,14.67 22,12.5 22,12.5M6,6H10A1,1 0 0,1 11,7A1,1 0 0,1 10,8H9V10H11C11.74,10 12.39,10.4 12.73,11L19.24,7.24L22.5,9.13C23,9.4 23.14,10 22.87,10.5C22.59,10.97 22,11.14 21.5,10.86L19.4,9.65L15.75,15.97C15.41,16.58 14.75,17 14,17H5A2,2 0 0,1 3,15V12A2,2 0 0,1 5,10H7V8H6A1,1 0 0,1 5,7A1,1 0 0,1 6,6M5,12V15H14L16.06,11.43L12.6,13.43L11.69,12H5M0.38,9.21L2.09,7.5C2.5,7.11 3.11,7.11 3.5,7.5C3.89,7.89 3.89,8.5 3.5,8.91L1.79,10.62C1.4,11 0.77,11 0.38,10.62C0,10.23 0,9.6 0.38,9.21Z'
  }));
});