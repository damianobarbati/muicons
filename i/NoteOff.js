import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22.11 21.46L20.84 22.73L19.1 21C19.07 21 19.03 21 19 21H5C3.9 21 3 20.11 3 19V5C3 4.97 3 4.93 3 4.9L1.11 3L2.39 1.73L20.7 20.04L20.7 20.05L22.11 21.46M21 17.8L6.2 3H15L21 9V17.8M19.5 10L14 4.5V10H19.5Z'
  }));
});