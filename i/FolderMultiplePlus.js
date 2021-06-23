import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2 20V6H0V20C0 21.1 .9 22 2 22H20V20H2M22 4H14L12 2H6C5.6 2 5.2 2.1 4.9 2.3L4.3 2.9C4.1 3.2 4 3.6 4 4V16C4 16.4 4.1 16.8 4.3 17.1C4.4 17.2 4.5 17.3 4.5 17.4C5 17.8 5.5 18 6 18H22C23.1 18 24 17.1 24 16V6C24 4.9 23.1 4 22 4M22 12H19V15H17V12H14V10H17V7H19V10H22V12Z'
  }));
});