import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20.84 22.73L22.11 21.46L2.39 1.73L1.11 3L8 9.89V20C6.9 20 6 20.9 6 22H18C18 20.9 17.11 20 16 20V17.89L20.84 22.73M10.22 12.11L12.89 14.78C12.62 14.92 12.32 15 12 15C10.9 15 10 14.11 10 13C10 12.68 10.08 12.38 10.22 12.11M11.2 8L8.44 5.24C8.94 4.21 9.87 3.43 11 3.14V2H13V3.14C14.4 3.5 15.5 4.6 15.86 6H18V8H11.2M19 11V12H20V14H19V15H18.2L17 13.8V11H19M5 15V14H4V12H5V11H7V15H5M16 12.8L12.2 9H16V12.8Z'
  }));
});