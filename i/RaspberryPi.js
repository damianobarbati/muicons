import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20,8H22V10H20V8M4,5H20A2,2 0 0,1 22,7H19V9H5V13H8V16H19V17H22A2,2 0 0,1 20,19H16V20H14V19H11V20H7V19H4A2,2 0 0,1 2,17V7A2,2 0 0,1 4,5M19,15H9V10H19V11H22V13H19V15M13,12V14H15V12H13M5,6V8H6V6H5M7,6V8H8V6H7M9,6V8H10V6H9M11,6V8H12V6H11M13,6V8H14V6H13M15,6V8H16V6H15M20,14H22V16H20V14Z'
  }));
});