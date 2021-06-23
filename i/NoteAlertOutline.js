import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M3 3C1.89 3 1 3.89 1 5V19C1 20.1 1.89 21 3 21H17C18.11 21 19 20.11 19 19V9L13 3H3M17 19H3V5H10V12H17V19M12 10V4.5L17.5 10H12M23 7V13H21V7H23M21 15H23V17H21V15Z'
  }));
});