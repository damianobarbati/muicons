import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15.1,1.81L12.27,4.65C11.5,5.43 11.5,6.69 12.27,7.47L13.68,8.89L13,9.62L14.44,11.06L15.17,10.33L16.56,11.72C17.34,12.5 18.61,12.5 19.39,11.72L22.22,8.88L15.1,1.81M17.93,10.28L13.7,6.06L15.11,4.65L19.34,8.88L17.93,10.28M20.7,20.24L19.29,21.65L11.5,13.88L10.5,14.88L13.33,17.69L12,19.09C7,24 3.5,20.5 3.5,20.5C3.5,20.5 -0.06,17 4.89,12L6.31,10.6L9.13,13.43L10.13,12.43L2.35,4.68L3.77,3.26L20.7,20.24Z'
  }));
});