import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21 9H3C3 9 3 3 12 3S21 9 21 9M13.35 17H3V18C3 19.66 4.34 21 6 21H13.35C13.13 20.37 13 19.7 13 19C13 18.3 13.13 17.63 13.35 17M21.86 13.73C21.95 13.5 22 13.26 22 13C22 11.9 21.11 11 20 11H11L8.5 13L6 11H4C2.9 11 2 11.9 2 13S2.9 15 4 15H14.54C15.64 13.78 17.23 13 19 13C20.04 13 21 13.26 21.86 13.73M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z'
  }));
});