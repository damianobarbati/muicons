import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17.5,15V13H18.6L19.5,15H21L20.1,12.9C20.6,12.7 21,12.1 21,11.5V10.5C21,9.7 20.3,9 19.5,9H16V13.9L17.1,15H17.5M17.5,10.5H19.5V11.5H17.5V10.5M13,10.5V10.9L14.5,12.4V10.5C14.5,9.7 13.8,9 13,9H11.1L12.6,10.5H13M9.5,9.5L2.5,2.5L1.4,3.5L6.9,9H6.5V11H4.5V9H3V15H4.5V12.5H6.5V15H8V10.1L9.5,11.6V15H12.9L20.5,22.6L21.6,21.5L9.5,9.5Z'
  }));
});