import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M14.5 8.5A2.5 2.5 0 1 0 17 11A2.5 2.5 0 0 0 14.5 8.5M8.25 6H7V16H8.25C9.91 16 10.75 12.66 10.75 11S9.91 6 8.25 6M19 2H5A2.07 2.07 0 0 0 3 4V18H5V4H19V18H21V4A2.07 2.07 0 0 0 19 2M23 22H1V21A2 2 0 0 1 3 19H21A2 2 0 0 1 23 21Z'
  }));
});