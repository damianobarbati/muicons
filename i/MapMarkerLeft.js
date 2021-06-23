import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15 11.5C13.62 11.5 12.5 10.38 12.5 9S13.62 6.5 15 6.5 17.5 7.62 17.5 9 16.38 11.5 15 11.5M8 9C8 14.25 15 22 15 22S22 14.25 22 9C22 5.13 18.87 2 15 2S8 5.13 8 9M6 7L1 12L6 17V7Z'
  }));
});