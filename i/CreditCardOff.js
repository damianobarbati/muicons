import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M11.2 8L7.2 4H20A2 2 0 0 1 22 6V18A1.91 1.91 0 0 1 21.88 18.68L14.2 11H20V8M20.84 22.73L18.11 20H4A2 2 0 0 1 2 18V6A2 2 0 0 1 2.65 4.54L1.11 3L2.39 1.73L22.11 21.46M9.11 11L6.11 8H4V11Z'
  }));
});