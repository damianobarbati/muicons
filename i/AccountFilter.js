import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M10 4C12.2 4 14 5.8 14 8S12.2 12 10 12 6 10.2 6 8 7.8 4 10 4M17 21L18.8 22.8C19.3 23.3 20 22.9 20 22.3V18L22.8 14.6C23.3 13.9 22.8 13 22 13H15C14.2 13 13.7 14 14.2 14.6L17 18V21M15 18.7L12.7 15.9C12.3 15.4 12.1 14.8 12.1 14.2C11.4 14 10.7 14 10 14C5.6 14 2 15.8 2 18V20H15V18.7Z'
  }));
});