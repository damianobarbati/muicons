import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M16 11.5C16 10.12 17.12 9 18.5 9S21 10.12 21 11.5 19.88 14 18.5 14 16 12.88 16 11.5M13 3V20H24V3H13M22 16C20.9 16 20 16.9 20 18H17C17 16.9 16.11 16 15 16V7C16.11 7 17 6.11 17 5H20C20 6.11 20.9 7 22 7V16M7 6C8.1 6 9 6.9 9 8S8.1 10 7 10 5 9.1 5 8 5.9 6 7 6M7 4C4.79 4 3 5.79 3 8S4.79 12 7 12 11 10.21 11 8 9.21 4 7 4M7 14C3.13 14 0 15.79 0 18V20H11V18H2C2 17.42 3.75 16 7 16C8.83 16 10.17 16.45 11 16.95V14.72C9.87 14.27 8.5 14 7 14Z'
  }));
});