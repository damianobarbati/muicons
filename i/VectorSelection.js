import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M3,1H5V3H3V5H1V3A2,2 0 0,1 3,1M14,1A2,2 0 0,1 16,3V5H14V3H12V1H14M20,7A2,2 0 0,1 22,9V11H20V9H18V7H20M22,20A2,2 0 0,1 20,22H18V20H20V18H22V20M20,13H22V16H20V13M13,9V7H16V10H14V9H13M13,22V20H16V22H13M9,22A2,2 0 0,1 7,20V18H9V20H11V22H9M7,16V13H9V14H10V16H7M7,3V1H10V3H7M3,16A2,2 0 0,1 1,14V12H3V14H5V16H3M1,7H3V10H1V7M9,7H11V9H9V11H7V9A2,2 0 0,1 9,7M16,14A2,2 0 0,1 14,16H12V14H14V12H16V14Z'
  }));
});