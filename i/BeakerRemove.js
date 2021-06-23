import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15.46 15.88L16.88 14.46L19 16.59L21.12 14.47L22.53 15.88L20.41 18L22.54 20.12L21.12 21.54L19 19.41L16.88 21.53L15.47 20.12L17.59 18L15.46 15.88M3 3H21V5C19.9 5 19 5.9 19 7V12C15.69 12 13 14.69 13 18C13 19.09 13.29 20.12 13.8 21H7C5.9 21 5 20.1 5 19V7C5 5.9 4.1 5 3 5V3M7 9V10H10V9H7M7 11V12H10V11H7M10 16V15H7V16H10M12 14V13H7V14H12M12 8V7H7V8H12Z'
  }));
});