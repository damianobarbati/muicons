import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20 12C20 8.69 16.42 6 12 6C11.15 6 10.34 6.1 9.57 6.28L7 5V7.32C5.5 8.22 4.45 9.5 4.12 11H2V15H5.08C5.58 15.65 6.23 16.22 7 16.68V20H9V17.56C9.93 17.84 10.94 18 12 18S14.07 17.84 15 17.56V20H17V16.68C18.15 16 19.03 15.06 19.54 14H22V12H20M7 11C6.45 11 6 10.55 6 10S6.45 9 7 9 8 9.45 8 10 7.55 11 7 11Z'
  }));
});