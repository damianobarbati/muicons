import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M13.2 10H22V18.8L13.2 10M21.6 6.1L20.8 2.2L16.9 3L19.6 6.5L21.6 6.1M11.8 8L9.1 4.5L7.9 4.7L11.3 8.1L11.8 8M2.4 1.7L1.1 3L3.7 5.6L3.2 5.7C2.1 5.9 1.4 7 1.6 8L2 10L7.1 9L8.1 10H2V20C2 21.1 2.9 22 4 22H20.1L20.8 22.7L22.1 21.4L2.4 1.7M16.7 7.1L14 3.5L12 3.9L14.8 7.4L16.7 7.1Z'
  }));
});