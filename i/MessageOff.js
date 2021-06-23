import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20.95 17.75L5.2 2H20C21.1 2 22 2.89 22 4V16C22 16.76 21.57 17.41 20.95 17.75M2.39 1.73L1.11 3L2 3.9C2 3.93 2 3.97 2 4V22L6 18H16.11L20.84 22.73L22.11 21.46L2.39 1.73Z'
  }));
});