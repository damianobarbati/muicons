import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2M18 20H6V4H13L18 9V20M17 13.24C17 15.86 14.87 18 12.24 18C10.29 18 8.61 16.82 7.88 15.14H9.5C10.11 16 11.11 16.57 12.24 16.57C14.08 16.57 15.57 15.07 15.57 13.24S14.08 9.9 12.24 9.9C10.95 9.9 9.86 10.65 9.29 11.71L10.81 13.24H7V9.43L8.24 10.67C9.09 9.35 10.55 8.5 12.24 8.5C14.87 8.47 17 10.61 17 13.24Z'
  }));
});