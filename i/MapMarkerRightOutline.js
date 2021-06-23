import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M9 6.5C10.38 6.5 11.5 7.62 11.5 9S10.38 11.5 9 11.5 6.5 10.38 6.5 9 7.62 6.5 9 6.5M9 2C12.87 2 16 5.13 16 9C16 14.25 9 22 9 22S2 14.25 2 9C2 5.13 5.13 2 9 2M9 4C6.24 4 4 6.24 4 9C4 10 4 12 9 18.71C14 12 14 10 14 9C14 6.24 11.76 4 9 4M18 17L23 12L18 7V17Z'
  }));
});