import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22 14.87V22H14V16H10V22H2V14.87C2 14.33 2.29 13.83 2.76 13.57L8.66 10.2C8.88 10.07 9.14 10 9.4 10H12.5V9H14V10H14.59C14.85 10 15.11 10.07 15.33 10.2L21.23 13.57C21.71 13.84 22 14.33 22 14.87M7.86 6.25H9.4C10.73 6.25 11.92 6.95 12.5 8H14C13.6 6.2 12 4.85 10.1 4.85V3.35C11.1 3.35 11.95 2.5 11.95 1.5V1H7.86V2.5C6.86 2.5 6 3.23 6 4.25S6.86 6.25 7.86 6.25Z'
  }));
});