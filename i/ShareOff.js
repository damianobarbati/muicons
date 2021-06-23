import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20.8 22.7L15.6 17.5L14 19V15.9L13.1 14.9C8.6 15.2 5.4 16.8 3 20.1C3.58 16.31 5.72 12.94 8.9 10.8L1.1 3L2.4 1.7L22.1 21.5M18.1 14.9L21 12L14 5V9L12.5 9.3'
  }));
});