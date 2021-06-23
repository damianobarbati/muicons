import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12 5V8.8L15.2 12H19V15.8L21 17.8V9L15 3H6.2L8.2 5H12M14 4.5L19.5 10H14V4.5M20.7 20.05L20.7 20.04L19 18.34V18.35L12.66 12H12.66L12 11.34V11.35L6.14 5.5L2.39 1.73L1.11 3L3 4.9C3 4.93 3 4.97 3 5V19C3 20.1 3.89 21 5 21H19C19.03 21 19.07 21 19.1 21L20.84 22.73L22.11 21.46L20.7 20.05M5 19V6.89L17.11 19H5Z'
  }));
});