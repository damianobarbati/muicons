import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M13 3C16.88 3 20 6.14 20 10C20 12.8 18.37 15.19 16 16.31V21H9V18H8C6.89 18 6 17.11 6 16V13H4.5C4.08 13 3.84 12.5 4.08 12.19L6 9.66C6.19 5.95 9.23 3 13 3M13 1C8.41 1 4.61 4.42 4.06 8.9L2.5 11L2.47 11L2.45 11.03C1.9 11.79 1.83 12.79 2.26 13.62C2.62 14.31 3.26 14.79 4 14.94V16C4 17.85 5.28 19.42 7 19.87V23H18V17.5C20.5 15.83 22 13.06 22 10C22 5.03 17.96 1 13 1M14 15V13.5C11.79 13.5 10 11.71 10 9.5C10 8.68 10.25 7.92 10.67 7.29L11.76 8.38C11.59 8.72 11.5 9.1 11.5 9.5C11.5 10.88 12.62 12 14 12V10.5L16.25 12.75L14 15M17.33 11.71L16.24 10.62C16.41 10.28 16.5 9.9 16.5 9.5C16.5 8.12 15.38 7 14 7V8.5L11.75 6.25L14 4V5.5C16.21 5.5 18 7.29 18 9.5C18 10.32 17.75 11.08 17.33 11.71Z'
  }));
});