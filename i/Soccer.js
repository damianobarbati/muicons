import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,3C13.76,3 15.4,3.53 16.78,4.41L16.5,5H13L12,5L10.28,4.16L10.63,3.13C11.08,3.05 11.53,3 12,3M9.53,3.38L9.19,4.41L6.63,5.69L5.38,5.94C6.5,4.73 7.92,3.84 9.53,3.38M13,6H16L18.69,9.59L17.44,12.16L14.81,12.78L11.53,8.94L13,6M6.16,6.66L7,10L5.78,13.06L3.22,13.94C3.08,13.31 3,12.67 3,12C3,10.1 3.59,8.36 4.59,6.91L6.16,6.66M20.56,9.22C20.85,10.09 21,11.03 21,12C21,13.44 20.63,14.79 20.03,16H19L18.16,12.66L19.66,9.66L20.56,9.22M8,10H11L13.81,13.28L12,16L8.84,16.78L6.53,13.69L8,10M12,17L15,19L14.13,20.72C13.44,20.88 12.73,21 12,21C10.25,21 8.63,20.5 7.25,19.63L8.41,17.91L12,17M19,17H19.5C18.5,18.5 17,19.67 15.31,20.34L16,19L19,17Z'
  }));
});