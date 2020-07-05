import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M18 9H20V4H22V9A2 2 0 0 1 20 11H18V13L15 10L18 7M14 10A2 2 0 1 0 12 12A2 2 0 0 0 14 10M2 11V16H4V11H6V13L9 10L6 7V9H4A2 2 0 0 0 2 11M15 16L12 13L9 16H11V18A2 2 0 0 0 13 20H18V18H13V16'
  }));
});