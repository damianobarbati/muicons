import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M11 7.8L9 5.8V5C9 3.34 10.34 2 12 2S15 3.34 15 5V11.8L11.2 8H13V5C13 4.45 12.55 4 12 4S11 4.45 11 5V7.8M22.11 21.46L2.39 1.73L1.11 3L9 10.89V13C6.79 14.66 6.34 17.79 8 20C9.66 22.21 12.79 22.66 15 21C15.84 20.37 16.4 19.5 16.71 18.6L20.84 22.73L22.11 21.46Z'
  }));
});