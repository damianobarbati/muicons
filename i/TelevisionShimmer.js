import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21 17H3V5H21M21 3H3C1.9 3 1 3.9 1 5V17C1 18.11 1.9 19 3 19H8V21H16V19H21C22.11 19 23 18.11 23 17V5C23 3.9 22.11 3 21 3M15 6.5L14.38 7.87L13 8.5L14.38 9.13L15 10.5L15.63 9.13L17 8.5L15.63 7.87L15 6.5M10.5 8.5L9.41 10.91L7 12L9.41 13.09L10.5 15.5L11.6 13.09L14 12L11.6 10.91L10.5 8.5'
  }));
});