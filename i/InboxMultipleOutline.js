import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M19,3A2,2 0 0,1 21,5V12A2,2 0 0,1 19,14H5A2,2 0 0,1 3,12V5A2,2 0 0,1 5,3H19M5,10V12H9.4C8.8,11.47 8.34,10.78 8.13,10H5M19,12V10H15.87C15.66,10.78 15.2,11.47 14.6,12H19M19,8V5H5V8H10V9C10,10.07 10.93,11 12,11C13.07,11 14,10.07 14,9V8H19M21,19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V15H10V16C10,17.07 10.93,18 12,18C13.07,18 14,17.07 14,16V15H21V19M5,17V19H9.4C8.8,18.47 8.34,17.78 8.13,17H5M19,19V17H15.87C15.66,17.78 15.2,18.47 14.6,19H19Z'
  }));
});