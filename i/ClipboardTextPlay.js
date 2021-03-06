import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M19,3A2,2 0 0,1 21,5V13.34C20.36,13.11 19.68,13 19,13C15.68,13 13,15.69 13,19C13,19.68 13.11,20.36 13.34,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H9.18C9.5,2.16 10.14,1.5 11,1.2C12.53,0.64 14.25,1.44 14.82,3H19M12,3A1,1 0 0,0 11,4A1,1 0 0,0 12,5A1,1 0 0,0 13,4A1,1 0 0,0 12,3M11,17V15H7V17H11M13,13V11H7V13H13M17,9V7H7V9H17M17,16L22,19L17,22V16Z'
  }));
});