import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M3.62 8H5V15H7V8H11V10H13V8H17V15H19V8H20.61C21.16 8 21.61 7.56 21.61 7C21.61 6.89 21.6 6.78 21.56 6.68L19 2H5L2.72 6.55C2.47 7.04 2.67 7.64 3.16 7.89C3.31 7.96 3.46 8 3.62 8M6.24 4H17.76L18.76 6H5.24L6.24 4M2 16V18H4V22H20V18H22V16H2M18 20H6V18H18V20M13.93 11C14.21 11 14.43 11.22 14.43 11.5C14.43 11.5 14.43 11.54 14.43 11.56L14.05 14.56C14 14.81 13.81 15 13.56 15H10.44C10.19 15 10 14.81 9.95 14.56L9.57 11.56C9.54 11.29 9.73 11.04 10 11C10.03 11 10.05 11 10.07 11H13.93Z'
  }));
});