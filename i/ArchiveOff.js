import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M10.2 7L6.2 3H21V7H10.2M20 8H11.2L20 16.8V8M20 19.35V19.34L8.66 8H8.66L7.66 7H7.66L2.39 1.73L1.11 3L3 4.89V7H5.11L6.11 8H4V21H19.11L20.84 22.73L22.11 21.46L20 19.35Z'
  }));
});