import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M18,1.83C17.5,1.83 17,2 16.59,2.41C13.72,5.28 8,11 8,11L9.5,12.5L6,16H4L2,20L4,22L8,20V18L11.5,14.5L13,16C13,16 18.72,10.28 21.59,7.41C22.21,6.5 22.37,5.37 21.59,4.59L19.41,2.41C19,2 18.5,1.83 18,1.83M18,4L20,6L13,13L11,11L18,4Z'
  }));
});