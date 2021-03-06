import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22 16H2V18H4V22H20V18H22V16M10.44 15C10.19 15 10 14.81 9.95 14.56L9.57 11.56C9.57 11.54 9.57 11.5 9.57 11.5C9.57 11.22 9.79 11 10.07 11H13.93C13.95 11 13.97 11 14 11C14.27 11.04 14.46 11.29 14.43 11.56L14.05 14.56C14 14.81 13.81 15 13.56 15H10.44M19 2L21.56 6.68C21.6 6.78 21.61 6.89 21.61 7C21.61 7.56 21.16 8 20.61 8H19V15H17V8H13V10H11V8H7V15H5V8H3.62C3.46 8 3.31 7.96 3.16 7.89C2.67 7.64 2.47 7.04 2.72 6.55L5 2H19Z'
  }));
});