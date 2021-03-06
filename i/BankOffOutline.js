import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17 13.8V10H19V15.8L17 13.8M12 3.26L17.21 6H9.2L11.2 8H21.5V6L12 1L6.89 3.69L8.37 5.17L12 3.26M5 10V17H7V10H5M21.5 20.85V20.84L19.66 19H19.65L17.65 17H17.66L17 16.34V16.35L13 12.35V12.34L11 10.34V10.35L8.66 8H8.66L2.39 1.73L1.11 3L3.56 5.45L2.5 6V8H6.11L11 12.89V17H13V14.89L17.11 19H2.5V21H19.11L20.84 22.73L22.11 21.46L21.5 20.85Z'
  }));
});