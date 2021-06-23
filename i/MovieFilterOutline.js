import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M10 11L9.06 13.06L7 14L9.06 14.94L10 17L10.94 14.94L13 14L10.94 13.06M18 4L20 8H17L15 4H13L15 8H12L10 4H8L10 8H7L5 4H4C2.91 4 2 4.9 2 6L2 18C2 19.1 2.91 20 4 20H20C21.11 20 22 19.1 22 18V4H18M20 18H4V6.47L5.77 10H16L15.37 11.37L14 12L15.37 12.63L16 14L16.63 12.63L18 12L16.63 11.37L16 10H20V18Z'
  }));
});