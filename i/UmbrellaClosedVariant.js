import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15 7L13 6V3.5C13 3.2 13.2 3 13.5 3S14 3.2 14 3.5V4H16V3.5C16 2.1 14.9 1 13.5 1S11 2.1 11 3.5V6L9 7L6 6L11.1 21.3C11.4 22.2 12.7 22.2 13 21.3C14.6 16.2 18 6 18 6L15 7M11 15L9 8.9L9.7 9.1L11 8.1V15M13 8.1L14.3 9.1L15 8.9L13 15V8.1Z'
  }));
});