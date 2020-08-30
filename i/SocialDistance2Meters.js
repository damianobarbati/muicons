import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M6 6C7.1 6 8 5.1 8 4S7.1 2 6 2 4 2.9 4 4 4.9 6 6 6M10 9.43C10 8.62 9.5 7.9 8.78 7.58C7.93 7.21 7 7 6 7S4.07 7.21 3.22 7.58C2.5 7.9 2 8.62 2 9.43V10H10V9.43M18 6C19.1 6 20 5.1 20 4S19.1 2 18 2 16 2.9 16 4 16.9 6 18 6M22 9.43C22 8.62 21.5 7.9 20.78 7.58C19.93 7.21 19 7 18 7S16.07 7.21 15.22 7.58C14.5 7.9 14 8.62 14 9.43V10H22V9.43M19 17V15L5 15V17L2 14L5 11V13L19 13V11L22 14L19 17M9 20.5V21H11V22H8V20.5C8 19.95 8.45 19.5 9 19.5H10V19H8V18H10C10.55 18 11 18.45 11 19V19.5C11 20.05 10.55 20.5 10 20.5H9M16 19V22H15V19H14.5V21H13.5V19H13V22H12V19C12 18.45 12.45 18 13 18H15C15.55 18 16 18.45 16 19Z'
  }));
});