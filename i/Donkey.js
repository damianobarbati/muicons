import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21.34,10.35L21.27,10.28L21.18,10.19L18,7V6A0.5,0.5 0 0,0 17.5,5.5C17.36,5.5 17.22,5.56 17.13,5.66L13.46,9H7C6.32,9 5.69,9.35 5.32,9.92L2.62,12.59C2.29,13.04 2.39,13.66 2.84,14C3.18,14.24 3.65,14.25 4,14L5,13.07V19H8V15H13V19H16V13.83C16,13.3 16.21,12.79 16.59,12.42L18,11L20,12V12C20.15,12.08 20.32,12.13 20.5,12.13C21.1,12.11 21.59,11.61 21.58,11C21.57,10.76 21.5,10.53 21.34,10.35Z'
  }));
});