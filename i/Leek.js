import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M10 2V5.55L12 7.55L14 5.55V2H10M6.34 4L3.87 6.5L15 17.62V12.67L6.34 4M17.66 4L13.06 8.61L15.54 11.09L20.13 6.5L17.66 4M9 13.74V20A2 2 0 0 0 11 22H13A2 2 0 0 0 15 20V19.74L13 17.74V20H11V15.74L9 13.74Z'
  }));
});