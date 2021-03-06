import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2.28 3L1 4.27L3.31 6.58C2.91 8.7 2.55 10.8 2.33 12.83C2 16 2 19 2 22H9C9 19 9 16 8.67 12.83C8.63 12.5 8.58 12.15 8.54 11.81L12.73 16H11V18C11 20.21 12.79 22 15 22H18C18.23 22 18.45 22 18.67 21.94L19.73 23L21 21.72M4.82 3L7.53 5.71C7.5 5.47 7.45 5.24 7.4 5H8V3H7M20.55 11.23L17.8 16L21.59 19.76C21.86 19.21 22 18.61 22 18V16H19.87L22.11 12.13Z'
  }));
});