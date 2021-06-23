import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15.25 4H13.75L9 15H11.1L12 12.8H17L17.9 15H20L15.25 4M12.63 11L14.5 6L16.37 11H12.63M5 17.5L8 14.5H6V2H4V14.5H2L5 17.5M22 20L19 17V19H6.5V21H19V23L22 20Z'
  }));
});