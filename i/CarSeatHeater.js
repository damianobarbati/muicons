import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M5 18C5 18 2 10 2 6S4 2 4 2H5C5 2 6 2 6 3S5 4 5 6 8 10 8 13 5 18 5 18M15 17C16.1 17 17 17.9 17 19V20C17 21.1 16.1 22 15 22H9C7 22 6 20.2 6 20.2C5.8 20 5.7 19.6 6 19.4C6 19.4 9 16.9 10 16.9H15M13.7 3.4L12.3 6.8L13.7 10.2L11.7 15L10 13.6L11.4 10.2L10 6.8L12 2L13.7 3.4M17.9 3.4L16.5 6.8L17.9 10.2L15.9 15L14.2 13.6L15.6 10.2L14.2 6.8L16.2 2L17.9 3.4M22 3.4L20.6 6.8L22 10.2L20 15L18.3 13.6L19.7 10.2L18.3 6.8L20.3 2L22 3.4'
  }));
});