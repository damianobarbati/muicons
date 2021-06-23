import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M4 19H13L11 21H4C3.5 21 2.97 20.79 2.59 20.41C2.21 20.03 2 19.5 2 19V9H4V19M17.63 5.84C17.27 5.33 16.67 5 16 5H8C6.9 5 6 5.9 6 7V15C6 16.1 6.9 17 8 17H16C16.67 17 17.27 16.66 17.63 16.15L22 11L17.63 5.84Z'
  }));
});