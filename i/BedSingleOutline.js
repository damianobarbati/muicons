import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17 10V7C17 5.9 16.11 5 15 5H9C7.9 5 7 5.9 7 7V10C5.9 10 5 10.9 5 12V17H6.33L7 19H8L8.67 17H15.33L16 19H17L17.67 17H19V12C19 10.9 18.11 10 17 10M9 7H15V10H9M17 15H7V12H17Z'
  }));
});