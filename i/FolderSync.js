import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M10,4L12,6H20A2,2 0 0,1 22,8V11.5C21.23,11.18 20.39,11 19.5,11A6.5,6.5 0 0,0 13,17.5C13,18.39 13.18,19.23 13.5,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10M19,12V13.5A4,4 0 0,1 23,17.5C23,18.32 22.75,19.08 22.33,19.71L21.24,18.62C21.41,18.28 21.5,17.9 21.5,17.5A2.5,2.5 0 0,0 19,15V16.5L16.75,14.25L19,12M19,23V21.5A4,4 0 0,1 15,17.5C15,16.68 15.25,15.92 15.67,15.29L16.76,16.38C16.59,16.72 16.5,17.1 16.5,17.5A2.5,2.5 0 0,0 19,20V18.5L21.25,20.75L19,23Z'
  }));
});