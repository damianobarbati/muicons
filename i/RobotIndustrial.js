import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M18.41,4L16,6.41V6.59L18.41,9H22V11H17.59L16,9.41V12H15A2,2 0 0,1 13,10V7.5H9.86C9.77,7.87 9.62,8.22 9.42,8.55L15.18,19H20A2,2 0 0,1 22,21V22H2V21A2,2 0 0,1 4,19H10.61L5.92,10.5C4.12,10.47 2.56,9.24 2.11,7.5C1.56,5.36 2.85,3.18 5,2.63C7.13,2.08 9.31,3.36 9.86,5.5H13V3A2,2 0 0,1 15,1H16V3.59L17.59,2H22V4H18.41M6,4.5A2,2 0 0,0 4,6.5A2,2 0 0,0 6,8.5A2,2 0 0,0 8,6.5A2,2 0 0,0 6,4.5Z'
  }));
});