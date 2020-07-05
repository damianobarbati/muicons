import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M3.14,1A2.14,2.14 0 0,0 1,3.14V5H3V3H5V1H3.14M7,1V3H10V1H7M12,1V3H14V5H16V3.14C16,1.96 15.04,1 13.86,1H12M1,7V10H3V7H1M9,7C7.89,7 7,7.89 7,9C7,11.33 7,16 7,16C7,16 11.57,16 13.86,16A2.14,2.14 0 0,0 16,13.86C16,11.57 16,7 16,7C16,7 11.33,7 9,7M18,7V9H20V11H22V9C22,7.89 21.11,7 20,7H18M9,9H14V14H9V9M1,12V13.86C1,15.04 1.96,16 3.14,16H5V14H3V12H1M20,13V16H22V13H20M7,18V20C7,21.11 7.89,22 9,22H11V20H9V18H7M20,18V20H18V22H20C21.11,22 22,21.11 22,20V18H20M13,20V22H16V20H13Z'
  }));
});