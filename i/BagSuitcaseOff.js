import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2 4.77L3.28 3.5L21 21.22L19.73 22.5L18 20.76C17.71 20.93 17.38 21 17.03 21C17.03 21.58 16.56 22 16 22C15.5 22 15 21.58 15 21H9C9 21.58 8.5 22 8 22C7.44 22 6.97 21.58 6.97 21C5.89 21 5 20.13 5 19V7.77L2 4.77M17.03 6C18.11 6 19 6.88 19 8V16.68L16 13.68V9H14.5V12.18L12.75 10.43V9H11.32L8.31 6H9V3C9 2.42 9.46 2 10 2H14C14.54 2 15 2.42 15 3V6H17.03M8 18H9.5V12.27L8 10.77V18M11.25 18H12.75V15.5L11.25 14V18M14.5 18H15.23L14.5 17.27V18M13.5 6V3.5H10.5V6H13.5Z'
  }));
});