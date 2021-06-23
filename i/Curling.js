import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M10,3V5C12.5,5 13.9,5.05 14.72,5.41C15.26,5.65 15.73,6.21 16.25,7H5V9H19.62L18.89,7.55C17.86,5.5 16.96,4.22 15.53,3.59C14.1,2.95 12.5,3 10,3M6,11C3.78,11 2,12.78 2,15V18C2,20.22 3.78,22 6,22H18C20.22,22 22,20.22 22,18V15C22,12.78 20.22,11 18,11H6Z'
  }));
});