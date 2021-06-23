import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M10 6.8L8.1 4.9L10 3H14L16 5V7H20C21.1 7 22 7.9 22 9V12C22 13.1 21.1 14 20 14H17.2L10.2 7H14V5H10V6.8M2.39 1.73L1.11 3L5.11 7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H10.11L14 15.89V16H10V15H3V19C3 20.11 3.89 21 5 21H19C19.03 21 19.07 21 19.1 21L20.84 22.73L22.11 21.46L2.39 1.73M21 17.8V15H18.2L21 17.8Z'
  }));
});