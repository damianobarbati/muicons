import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2,5.27L3.28,4L20,20.72L18.73,22L17.29,20.56C16.42,22 14.82,23 13,23A5,5 0 0,1 8,18V16.9C5.72,16.44 4,14.42 4,12V9H5.73L2,5.27M14,7H10V2.1C12.28,2.56 14,4.58 14,7M8,2.1V6.18L5.38,3.55C6.07,2.83 7,2.31 8,2.1M14,12V12.17L10.82,9H14V12M10,16.9V18A3,3 0 0,0 13,21C14.28,21 15.37,20.2 15.8,19.07L12.4,15.67C11.74,16.28 10.92,16.71 10,16.9M16,13A4,4 0 0,1 20,9H22L21,10L22,11H20A2,2 0 0,0 18,13V16.18L16,14.18V13Z'
  }));
});