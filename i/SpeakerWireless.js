import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20.07,19.07L18.66,17.66C20.11,16.22 21,14.21 21,12C21,9.78 20.11,7.78 18.66,6.34L20.07,4.93C21.88,6.74 23,9.24 23,12C23,14.76 21.88,17.26 20.07,19.07M17.24,16.24L15.83,14.83C16.55,14.11 17,13.11 17,12C17,10.89 16.55,9.89 15.83,9.17L17.24,7.76C18.33,8.85 19,10.35 19,12C19,13.65 18.33,15.15 17.24,16.24M4,3H12A2,2 0 0,1 14,5V19A2,2 0 0,1 12,21H4A2,2 0 0,1 2,19V5A2,2 0 0,1 4,3M8,5A2,2 0 0,0 6,7A2,2 0 0,0 8,9A2,2 0 0,0 10,7A2,2 0 0,0 8,5M8,11A4,4 0 0,0 4,15A4,4 0 0,0 8,19A4,4 0 0,0 12,15A4,4 0 0,0 8,11M8,13A2,2 0 0,1 10,15A2,2 0 0,1 8,17A2,2 0 0,1 6,15A2,2 0 0,1 8,13Z'
  }));
});