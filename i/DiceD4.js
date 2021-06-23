import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M10.25 15.15L11.92 12.47V15.15H10.25M21.92 21H2.08C1.24 21 .72 20.08 1.16 19.36L11.08 3.13C11.5 2.44 12.5 2.44 12.92 3.13L22.84 19.36C23.28 20.08 22.76 21 21.92 21M14.29 15.15H13.43V10.42H11.91L8.75 15.41L8.82 16.36H11.92V18H13.43V16.36H14.29V15.15Z'
  }));
});