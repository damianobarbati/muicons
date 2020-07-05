import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M13 3C9.23 3 6.19 5.95 6 9.66L4.08 12.19C3.84 12.5 4.08 13 4.5 13H6V16C6 17.11 6.89 18 8 18H9V21H16V16.31C18.37 15.19 20 12.8 20 10C20 6.14 16.88 3 13 3M17.06 9.57L15.1 10.09L16.54 11.54C16.89 11.88 16.89 12.46 16.54 12.81C16.19 13.16 15.61 13.16 15.27 12.81L13.81 11.37L13.3 13.33C13.18 13.82 12.68 14.1 12.21 13.97C11.72 13.84 11.44 13.35 11.57 12.87L12.1 10.9L10.13 11.43C9.65 11.56 9.15 11.28 9.03 10.79C8.9 10.32 9.18 9.82 9.67 9.7L11.63 9.19L10.19 7.73C9.84 7.39 9.84 6.82 10.19 6.46C10.54 6.11 11.12 6.11 11.46 6.46L12.91 7.9L13.43 5.94C13.55 5.46 14.04 5.18 14.5 5.3C15 5.43 15.28 5.92 15.16 6.41L14.63 8.37L16.59 7.84C17.08 7.72 17.57 8 17.7 8.5C17.82 8.96 17.54 9.45 17.06 9.57Z'
  }));
});