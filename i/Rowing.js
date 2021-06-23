import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M8.5,14.5L4,19L5.5,20.5L9,17H11L8.5,14.5M15,1A2,2 0 0,0 13,3A2,2 0 0,0 15,5A2,2 0 0,0 17,3A2,2 0 0,0 15,1M21,21L18,24L15,21V19.5L7.91,12.41C7.6,12.46 7.3,12.5 7,12.5V10.32C8.66,10.35 10.61,9.45 11.67,8.28L13.07,6.73C13.26,6.5 13.5,6.35 13.76,6.23C14.05,6.09 14.38,6 14.72,6H14.75C16,6 17,7 17,8.26V14C17,14.85 16.65,15.62 16.08,16.17L12.5,12.59V10.32C11.87,10.84 11.07,11.34 10.21,11.71L16.5,18H18L21,21Z'
  }));
});