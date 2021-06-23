import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15.71,1.22L12.88,4.05C12.1,4.83 12.1,6.09 12.88,6.87L14.3,8.29L10.06,12.53L7.58,10.06L1.22,16.42L7.58,22.78L13.94,16.42L11.47,13.94L15.71,9.7L17.13,11.12C17.91,11.9 19.17,11.9 19.95,11.12L22.78,8.29L15.71,1.22M15.71,4.05L19.95,8.29L18.54,9.7L14.3,5.46L15.71,4.05Z'
  }));
});