import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M16 2V4H14V2H16M12 2H10V6H12V2M10 14H8V16H10V14M16 4V6H14V8H18V4H16M8 2H6V6H8V2M20 2H18V4H20V2M13.8 22H2V2H4V6H6V12H4V14H6V16H8V18H10V20H12V18H10V16H12V12H8V8H12V10H14V12H16V10H18V12H22V13.8C21.1 13.3 20.1 13 19 13C17.8 13 16.6 13.4 15.7 14H14V15.7C13.4 16.6 13 17.8 13 19C13 20.1 13.3 21.1 13.8 22M6 18H4V20H6V18M22 8H18V10H22V8M22 6V4H20V6H22M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z'
  }));
});