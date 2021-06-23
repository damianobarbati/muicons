import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22 23V21C20.58 21.05 19.21 20.9 18 20C16.23 21.25 13.77 21.25 12 20C10.23 21.25 7.77 21.25 6 20C4.79 20.9 3.42 21.05 2 21V23C3.38 23.05 4.79 22.94 6 22.25C7.84 23.25 10.16 23.25 12 22.25C13.84 23.25 16.16 23.25 18 22.25C19.21 22.94 20.62 23.05 22 23M23.39 17.21C21.13 16.29 18.3 15.56 15.66 15.22L19.36 6.88L20.67 6.41L22 3.41L18.8 2L17.5 4.95L18 6.27L16.31 9.97L13.5 11.47L11 10.2C10.95 10.14 10.86 10.09 10.74 10.06C9.82 9.73 8.77 10.32 8.5 11.23L7.13 15.41C6.59 15.18 1.25 16.97 .915 17.12L0 17.47C1.33 18.04 2.2 18.39 3.94 18.88C4.75 18.63 5.44 18.09 6 17.47C7.5 19.42 10.5 19.42 12 17.47C13.5 19.42 16.5 19.42 18 17.47C18.56 18.09 19.25 18.63 20.06 18.88L22.95 17.91L24 17.47L23.39 17.21M14.06 15.08C13.07 15 12.06 15 11.06 15L11.77 12.83L13.5 13.77L15 12.92L14.06 15.08M14 7.5C14 8.61 13.11 9.5 12 9.5S10 8.61 10 7.5 10.9 5.5 12 5.5 14 6.4 14 7.5Z'
  }));
});