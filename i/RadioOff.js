import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M1 4.27L3 6.27C2.4 6.61 2 7.26 2 8V20C2 21.11 2.9 22 4 22H18.73L20.73 24L22 22.72L2.28 3L1 4.27M20 6H8.83L16.47 2.83L15.71 1L6.59 4.76L9.82 8H20V12H18V10H16V12H13.82L22 20.18V8C22 6.9 21.11 6 20 6M4 8H4.73L8.73 12H4V8M7 14C8.66 14 10 15.34 10 17C10 18.66 8.66 20 7 20C5.34 20 4 18.66 4 17C4 15.34 5.34 14 7 14Z'
  }));
});