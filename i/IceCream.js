import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17.5 6.05C17.25 3.22 14.89 1 12 1S6.75 3.22 6.5 6.05C5.09 6.28 4 7.5 4 9C4 10.66 5.34 12 7 12L12 22L17 12C18.66 12 20 10.66 20 9C20 7.5 18.91 6.28 17.5 6.05M12 17.53L8.89 11.31C8.95 11.26 9 11.21 9.08 11.16C9.93 11.69 10.93 12 12 12S14.07 11.69 14.92 11.16C15 11.21 15.05 11.26 15.11 11.31L12 17.53Z'
  }));
});