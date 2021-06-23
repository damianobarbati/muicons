import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2M18.59 4L12 10.59L5.41 4H18.59M13.41 12L16.5 8.91L19.59 12L16.5 15.09L13.41 12M14.59 16H9.41L12 13.41L14.59 16M4 5.41L10.59 12L4 18.59V5.41M11.59 20H5.41L7.41 18H13.59L11.59 20M20 20H14.41L20 14.41V20M20 9.59L17.91 7.5L20 5.41V9.59Z'
  }));
});