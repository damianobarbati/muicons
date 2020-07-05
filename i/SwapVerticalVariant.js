import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M18,4L14,8H17V16A2,2 0 0,1 15,18A2,2 0 0,1 13,16V8A4,4 0 0,0 9,4A4,4 0 0,0 5,8V16H2L6,20L10,16H7V8A2,2 0 0,1 9,6A2,2 0 0,1 11,8V16A4,4 0 0,0 15,20A4,4 0 0,0 19,16V8H22L18,4Z'
  }));
});