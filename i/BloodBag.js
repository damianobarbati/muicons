import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21,7C20,7 20,6 20,6V5H18V7H16V6C16,4.27 14.75,1 10,1C5.25,1 4,4.27 4,6V19C4,19.33 3.9,21 2,21V23C4.93,23 6,20.61 6,19V6C6,5.88 6.05,3 10,3C13.83,3 14,5.7 14,6V7H12V5H10V6C10,6 10,7 9,7C8,7 8,8 8,8V20C8,20 8,22 13,22C13.24,22 14.13,22 17,22C22,22 22,20 22,20V8C22,8 22,7 21,7M15,19.4A3,3 0 0,1 12,16.4C12,14.4 15,11 15,11C15,11 18,14.4 18,16.4A3,3 0 0,1 15,19.4Z'
  }));
});