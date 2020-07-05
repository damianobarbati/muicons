import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22 7H20V13H22V7M22 15H20V17H22V15M3 15V14H2V12H3V11H5V15H3M17 12V11H15V15H17V14H18V12H17M16 6H13.86C13.5 4.6 12.4 3.5 11 3.14V2H9V3.14C7.6 3.5 6.5 4.6 6.14 6H4V8H16V6M16 22H4C4 20.9 4.89 20 6 20V9H14V20C15.11 20 16 20.9 16 22M8 13C8 14.11 8.9 15 10 15S12 14.11 12 13 11.11 11 10 11 8 11.9 8 13Z'
  }));
});