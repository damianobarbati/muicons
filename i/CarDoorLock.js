import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21 3H11L3 11V12H4.5C7.5 12 10 14.91 10 18.5V21H22V4A1 1 0 0 0 21 3M19 16H16V14H19M20 11H5.83L11.83 5H20M7 17V16.5A2.5 2.5 0 0 0 2 16.5V17A1 1 0 0 0 1 18V22A1 1 0 0 0 2 23H7A1 1 0 0 0 8 22V18A1 1 0 0 0 7 17M6.2 17H2.8V16.5A1.7 1.7 0 0 1 6.2 16.5Z'
  }));
});