import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17.36,2.64L15.95,4.06C17.26,5.37 18,7.14 18,9A7,7 0 0,1 11,16C9.15,16 7.37,15.26 6.06,13.95L4.64,15.36C6.08,16.8 7.97,17.71 10,17.93V20H6V22H16V20H12V17.94C16.55,17.43 20,13.58 20,9C20,6.62 19.05,4.33 17.36,2.64M11,3.5A5.5,5.5 0 0,0 5.5,9A5.5,5.5 0 0,0 11,14.5A5.5,5.5 0 0,0 16.5,9A5.5,5.5 0 0,0 11,3.5M11,5.5C12.94,5.5 14.5,7.07 14.5,9A3.5,3.5 0 0,1 11,12.5A3.5,3.5 0 0,1 7.5,9A3.5,3.5 0 0,1 11,5.5Z'
  }));
});