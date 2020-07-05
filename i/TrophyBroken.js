import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M6.2 13C6.6 14.8 7.6 16.3 10 16.8V19.34C8 20.12 8 22 8 22H13.2L10.2 15L14.2 10L10.7 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2M6 11H4V4H6V11M17.8 13H20C21 13 22 12 22 11V2H18C17.1 2 16 3 16 4H13.9L16.7 10L12.2 15L13.2 22H16C16 22 16 20.12 14 19.34L14 16.85C16.39 16.35 17.5 14.7 17.8 13M20 11H18V4H20V11Z'
  }));
});