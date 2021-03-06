import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15.5 9C14.8 9 14.11 9.28 13.5 9.67V5H11.5V9.62C11.04 9.24 10.39 9 9.5 9C8.8 9 8.11 9.28 7.5 9.67V5H5.5V19C8.5 17.32 10.43 15.79 11.5 14.41V19C16.36 16.26 18.5 13.91 18.5 12C18.5 10.59 17.79 9 15.5 9M7.5 15.38V12.26C8.12 11.59 8.95 11 9.5 11C10.09 11 10.5 11.07 10.5 12C10.5 12.15 10.4 13.3 7.5 15.38M13.5 15.38V12.26C14.12 11.59 14.95 11 15.5 11C16.09 11 16.5 11.07 16.5 12C16.5 12.15 16.4 13.3 13.5 15.38Z'
  }));
});