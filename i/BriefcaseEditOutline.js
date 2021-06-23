import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21.04,12.13C21.18,12.13 21.31,12.19 21.42,12.3L22.7,13.58C22.92,13.79 22.92,14.14 22.7,14.35L21.7,15.35L19.65,13.3L20.65,12.3C20.76,12.19 20.9,12.13 21.04,12.13M19.07,13.88L21.12,15.93L15.06,22H13V19.94L19.07,13.88M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8L20,10V8H4V19H11V21H4A2,2 0 0,1 2,19V8A2,2 0 0,1 4,6H8V4A2,2 0 0,1 10,2M14,6V4H10V6H14Z'
  }));
});