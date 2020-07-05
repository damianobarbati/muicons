import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M5,7A2,2 0 0,0 3,9V15A2,2 0 0,0 5,17H7A3,3 0 0,0 10,20A3,3 0 0,0 13,17H21V15H19V9A2,2 0 0,0 17,7H5M5,9H10V12H5V9M13,9H17V12H13V9M10,16A1,1 0 0,1 11,17A1,1 0 0,1 10,18A1,1 0 0,1 9,17A1,1 0 0,1 10,16Z'
  }));
});