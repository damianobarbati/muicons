import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M7 7C5.9 7 5 7.9 5 9V15C5 16.11 5.9 17 7 17H9C10.11 17 11 16.11 11 15V9C11 7.9 10.11 7 9 7H7M7 9H9V15H7V9M17.6 17L15.5 14.9L13.4 17L12 15.6L14.1 13.5L12 11.4L13.4 10L15.5 12.1L17.6 10L19 11.4L16.9 13.5L19 15.6L17.6 17Z'
  }));
});