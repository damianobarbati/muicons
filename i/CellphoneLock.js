import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17,1H7A2,2 0 0,0 5,3V6H7V4H17V20H7V18H5V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M8.8,11V9.5C8.8,8.1 7.4,7 6,7C4.6,7 3.2,8.1 3.2,9.5V11C2.6,11 2,11.6 2,12.2V15.7C2,16.4 2.6,17 3.2,17H8.7C9.4,17 10,16.4 10,15.8V12.3C10,11.6 9.4,11 8.8,11M7.5,11H4.5V9.5C4.5,8.7 5.2,8.2 6,8.2C6.8,8.2 7.5,8.7 7.5,9.5V11Z'
  }));
});