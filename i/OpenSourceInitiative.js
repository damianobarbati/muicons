import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15.41,22C15.35,22 15.28,22 15.22,22C15.1,21.95 15,21.85 14.96,21.73L12.74,15.93C12.65,15.69 12.77,15.42 13,15.32C13.71,15.06 14.28,14.5 14.58,13.83C15.22,12.4 14.58,10.73 13.15,10.09C11.72,9.45 10.05,10.09 9.41,11.5C9.11,12.21 9.09,13 9.36,13.69C9.66,14.43 10.25,15 11,15.28C11.24,15.37 11.37,15.64 11.28,15.89L9,21.69C8.96,21.81 8.87,21.91 8.75,21.96C8.63,22 8.5,22 8.39,21.96C3.24,19.97 0.67,14.18 2.66,9.03C4.65,3.88 10.44,1.31 15.59,3.3C18.06,4.26 20.05,6.15 21.13,8.57C22.22,11 22.29,13.75 21.33,16.22C20.32,18.88 18.23,21 15.58,22C15.5,22 15.47,22 15.41,22M12,3.59C7.03,3.46 2.9,7.39 2.77,12.36C2.68,16.08 4.88,19.47 8.32,20.9L10.21,16C8.38,15 7.69,12.72 8.68,10.89C9.67,9.06 11.96,8.38 13.79,9.36C15.62,10.35 16.31,12.64 15.32,14.47C14.97,15.12 14.44,15.65 13.79,16L15.68,20.93C17.86,19.95 19.57,18.16 20.44,15.93C22.28,11.31 20.04,6.08 15.42,4.23C14.33,3.8 13.17,3.58 12,3.59Z'
  }));
});