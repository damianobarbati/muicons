import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M16,14H17.5V16.82L19.94,18.23L19.19,19.53L16,17.69V14M24,17A7,7 0 0,1 17,24C14.21,24 11.8,22.36 10.67,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H20A2,2 0 0,1 22,6V12.1C23.24,13.36 24,15.09 24,17M10,17C10,15.04 10.81,13.27 12.1,12H4V18H10.07C10,17.67 10,17.34 10,17M17,12A5,5 0 0,0 12,17A5,5 0 0,0 17,22A5,5 0 0,0 22,17A5,5 0 0,0 17,12M20,8V6H4V8H20Z'
  }));
});