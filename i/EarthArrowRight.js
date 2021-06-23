import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M19 21V19H15V17H19V15L22 18L19 21M12 18C12 15.8 13.2 13.9 15 12.8C14.9 12.3 14.5 12 14 12H8V10H10C10.6 10 11 9.6 11 9V7H13C14.1 7 15 6.1 15 5V4.6C17.9 5.8 20 8.6 20 12V12.3C20.7 12.5 21.3 12.9 21.9 13.4C22 13 22 12.5 22 12C22 6.5 17.5 2 12 2S2 6.5 2 12 6.5 22 12 22C12.5 22 13 22 13.4 21.9C12.5 20.8 12 19.5 12 18M11 19.9C7 19.4 4 16.1 4 12C4 11.4 4.1 10.8 4.2 10.2L9 15V16C9 17.1 9.9 18 11 18V19.9Z'
  }));
});