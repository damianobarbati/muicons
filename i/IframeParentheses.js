import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2M10 19.4L8.4 20C6.9 18.6 6 16.6 6 14.5S6.9 10.4 8.4 9L10 9.6C8.7 10.7 8 12.6 8 14.5S8.7 18.2 10 19.4M15.6 20L14 19.4C15.3 18.2 16 16.4 16 14.5S15.3 10.8 14 9.6L15.6 9C17.1 10.4 18 12.4 18 14.5C18 16.6 17.1 18.6 15.6 20M21 7H3V4H21V7Z'
  }));
});