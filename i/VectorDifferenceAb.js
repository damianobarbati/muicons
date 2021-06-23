import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M3,1C1.89,1 1,1.89 1,3V5H3V3H5V1H3M7,1V3H10V1H7M12,1V3H14V5H16V3C16,1.89 15.11,1 14,1H12M1,7V10H3V7H1M14,7C14,7 14,11.67 14,14C11.67,14 7,14 7,14C7,14 7,18 7,20C7,21.11 7.89,22 9,22H20C21.11,22 22,21.11 22,20V9C22,7.89 21.11,7 20,7C18,7 14,7 14,7M16,9H20V20H9V16H14C15.11,16 16,15.11 16,14V9M1,12V14C1,15.11 1.89,16 3,16H5V14H3V12H1Z'
  }));
});