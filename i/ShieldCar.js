import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M14.42 7.5L16 11H8L9.42 7.5H14.42M9 12C8.45 12 8 12.45 8 13S8.45 14 9 14 10 13.55 10 13 9.55 12 9 12M15 12C14.45 12 14 12.45 14 13S14.45 14 15 14 16 13.55 16 13 15.55 12 15 12M21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1L21 5M18 12L15.84 7C15.64 6.42 15.08 6 14.42 6H9.42C8.76 6 8.2 6.42 8 7L6 12V16C6 16.55 6.45 17 7 17H8C8.55 17 9 16.55 9 16V15H15V16C15 16.55 15.45 17 16 17H17C17.55 17 18 16.55 18 16V12Z'
  }));
});