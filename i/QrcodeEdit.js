import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M5,5H7V7H5V5M1,1H11V11H1V1M3,3V9H9V3H3M5,17H7V19H5V17M1,13H11V23H1V13M3,15V21H9V15H3M13,13H17V15H19V13H23V15H19V17H23V23H19V21H15V23H13V21H15V19H13V13M21,21V19H19V21H21M19,17H17V15H15V19H19V17M22.7,3.35L21.7,4.35L19.65,2.35L20.65,1.35C20.85,1.14 21.19,1.13 21.42,1.35L22.7,2.58C22.91,2.78 22.92,3.12 22.7,3.35M13,8.94L19.07,2.88L21.12,4.93L15.06,11H13V8.94Z'
  }));
});