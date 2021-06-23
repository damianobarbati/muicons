import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M14.8 7V5.5C14.8 4.1 13.4 3 12 3S9.2 4.1 9.2 5.5V7C8.6 7 8 7.6 8 8.2V11.7C8 12.4 8.6 13 9.2 13H14.7C15.4 13 16 12.4 16 11.8V8.3C16 7.6 15.4 7 14.8 7M13.5 7H10.5V5.5C10.5 4.7 11.2 4.2 12 4.2S13.5 4.7 13.5 5.5V7M6 17V20L2 16L6 12V15H18V12L22 16L18 20V17H6Z'
  }));
});