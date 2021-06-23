import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M8 17.5C8 18.33 7.33 19 6.5 19S5 18.33 5 17.5 5.67 16 6.5 16 8 16.67 8 17.5M18 5.59C17.79 3.54 16.18 2 14.24 2H8.88C6.95 2 5.36 3.5 5.15 5.53L5 6.59C4.92 7.34 5.5 8 6.24 8C6.87 8 7.39 7.53 7.47 6.91L7.61 5.82C7.68 5.07 8.23 4.5 8.88 4.5H14.24C14.89 4.5 15.44 5.07 15.5 5.82L16.5 16.88C16.59 17.74 16 18.5 15.25 18.5L10.04 17.82C9.95 18.77 9.5 19.6 8.8 20.18L14.93 21L15.09 21H15.25C16.27 21 17.26 20.56 17.96 19.78C18.71 18.94 19.09 17.8 19 16.65L18 5.59M11.66 7.94C11.08 7.57 10.31 7.75 9.94 8.34L6.39 14C6.43 14 6.46 14 6.5 14C7.38 14 8.18 14.34 8.8 14.88L12.06 9.66C12.43 9.08 12.25 8.31 11.66 7.94Z'
  }));
});