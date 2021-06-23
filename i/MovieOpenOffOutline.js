import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M19.7 6.5L16.9 3L20.8 2.2L21.6 6.1L19.7 6.5M22.1 21.5L20.8 22.8L20.1 22H4C2.9 22 2 21.1 2 20V10H8.1L7.1 9L2 10L1.6 8C1.4 7 2.1 5.9 3.2 5.7L3.7 5.6L1.1 3L2.4 1.7L22.1 21.5M18.1 20L10.1 12H4V20H18.1M22 18.8V10H13.2L15.2 12H20V16.8L22 18.8M16.7 7.1L14 3.5L12 3.9L14.8 7.4L16.7 7.1M11.8 8L9.1 4.5L7.9 4.7L11.3 8.1L11.8 8Z'
  }));
});