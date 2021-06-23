import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M1,4.27L2.47,5.74C2.18,6.08 2,6.5 2,7V17A2,2 0 0,0 4,19H15.73L18.73,22L20,20.72L2.28,3L1,4.27M4,17V7.27L5,8.27V10H6.73L8,11.27V13H9.73L10.73,14H8V16H12.73L13.73,17H4M5,11H7V13H5V11M17,11H19V13H17V11M19,10H17V8H19V10M14,11H16V13H14.83L14,12.17V11M13,10H11.83L11,9.17V8H13V10M22,7V17C22,17.86 21.45,18.58 20.7,18.87L18.83,17H20V7H8.83L6.83,5H20A2,2 0 0,1 22,7M16,10H14V8H16V10Z'
  }));
});