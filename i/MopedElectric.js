import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M19 5C19 3.9 18.1 3 17 3H14V5H17V7.65L13.5 12H10V7H6C3.79 7 2 8.79 2 11V14H4C4 15.66 5.34 17 7 17S10 15.66 10 14H14.5L19 8.35V5M7 15C6.45 15 6 14.55 6 14H8C8 14.55 7.55 15 7 15M5 4H10V6H5V4M19 11C17.34 11 16 12.34 16 14S17.34 17 19 17 22 15.66 22 14 20.66 11 19 11M19 15C18.45 15 18 14.55 18 14S18.45 13 19 13 20 13.45 20 14 19.55 15 19 15M7 20H11V18L17 21H13V23L7 20Z'
  }));
});