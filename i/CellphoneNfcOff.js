import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20.84 22.73L18.85 20.74C18.56 21.5 17.84 22 17 22H14.92C14.81 20.59 14.5 19.25 13.97 18H16.11L7 8.89V11C6.36 10.74 5.69 10.53 5 10.37V6.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M17 5V13.8L19 15.8V3C19 1.9 18.11 1 17 1H7C6.24 1 5.59 1.43 5.25 2.05L8.2 5H17M2 20V23H5C5 21.34 3.66 20 2 20M2 16V18C4.76 18 7 20.24 7 23H9C9 19.13 5.87 16 2 16M2 12V14C6.97 14 11 18.03 11 23H13C13 16.92 8.08 12 2 12Z'
  }));
});