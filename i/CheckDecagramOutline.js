import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M23 12L20.6 9.2L20.9 5.5L17.3 4.7L15.4 1.5L12 3L8.6 1.5L6.7 4.7L3.1 5.5L3.4 9.2L1 12L3.4 14.8L3.1 18.5L6.7 19.3L8.6 22.5L12 21L15.4 22.5L17.3 19.3L20.9 18.5L20.6 14.8L23 12M18.7 16.9L16 17.5L14.6 19.9L12 18.8L9.4 19.9L8 17.5L5.3 16.9L5.5 14.1L3.7 12L5.5 9.9L5.3 7.1L8 6.5L9.4 4.1L12 5.2L14.6 4.1L16 6.5L18.7 7.1L18.5 9.9L20.3 12L18.5 14.1L18.7 16.9M16.6 7.6L18 9L10 17L6 13L7.4 11.6L10 14.2L16.6 7.6Z'
  }));
});