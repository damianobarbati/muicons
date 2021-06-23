import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2.39 1.73L1.11 3L9.5 11.37L9.97 12H10V17.87C9.96 18.16 10.06 18.47 10.29 18.7L12.3 20.71C12.69 21.1 13.32 21.1 13.71 20.71C13.94 20.5 14.04 20.18 14 19.88V15.89L20.84 22.73L22.11 21.46L14 13.35L9.41 8.76L4.15 3.5L2.39 1.73M6.21 3L14.54 11.34L19.79 4.62C20.13 4.19 20.05 3.56 19.62 3.22C19.43 3.08 19.22 3 19 3H6.21Z'
  }));
});