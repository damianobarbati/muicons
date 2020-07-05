import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17M20.5 11C21.88 11 23 12.12 23 13.5C23 13.81 22.94 14.11 22.84 14.39C21.8 13.5 20.46 13 19 13C15.69 13 13 15.69 13 19V19.54C12.64 18.5 11.65 17.8 10.5 17.8C9 17.8 7.8 19 7.8 20.5V22H4C2.9 22 2 21.1 2 20V16.2H3.5C5 16.2 6.2 15 6.2 13.5S5 10.8 3.5 10.8H2V7C2 5.89 2.9 5 4 5H8V3.5C8 2.12 9.12 .998 10.5 .998S13 2.12 13 3.5V5H17C18.1 5 19 5.89 19 7V11H20.5'
  }));
});