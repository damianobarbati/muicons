import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M3.76 3.7L2.14 4.88L4.43 8A8.23 8.23 0 0 1 6.35 7.28M11 9V11H18V11.29L13 12.71V15.5A4.5 4.5 0 1 1 8.5 11H9V9H8.5A6.5 6.5 0 1 0 15 15.5V13.91L22 12V9M16.24 3.7L13.85 7H16.32L17.86 4.88M9 2V7H11V2Z'
  }));
});