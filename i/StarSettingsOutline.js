import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M11 22H13V24H11V22M7 24H9V22H7V24M15 24H17V22H15V24M16.54 13.97L18.18 21L12 17.27L5.82 21L7.45 13.97L2 9.24L9.19 8.63L12 2L14.81 8.63L22 9.24L16.54 13.97M15.76 17.66L14.77 13.38L18.09 10.5L13.71 10.13L12 6.09L10.29 10.13L5.91 10.5L9.23 13.38L8.24 17.66L12 15.39L15.76 17.66Z'
  }));
});