import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M8,2H16C15.67,5 15.33,8 14.75,9.83C14.17,11.67 13.33,12.33 12.92,14.08C12.5,15.83 12.5,18.67 13.08,20C13.67,21.33 14.83,21.17 15.42,21.25C16,21.33 16,21.67 16,22H8C8,21.67 8,21.33 8.58,21.25C9.17,21.17 10.33,21.33 10.92,20C11.5,18.67 11.5,15.83 11.08,14.08C10.67,12.33 9.83,11.67 9.25,9.83C8.67,8 8.33,5 8,2M10,4C10.07,5.03 10.15,6.07 10.24,7H13.76C13.85,6.07 13.93,5.03 14,4H10Z'
  }));
});