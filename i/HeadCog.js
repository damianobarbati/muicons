import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M13 8.58C13.78 8.58 14.44 9.19 14.44 10S13.78 11.44 13 11.44 11.58 10.78 11.58 10 12.19 8.58 13 8.58M13 3C16.88 3 20 6.14 20 10C20 12.8 18.37 15.19 16 16.31V21H9V18H8C6.89 18 6 17.11 6 16V13H4.5C4.08 13 3.84 12.5 4.08 12.19L6 9.66C6.19 5.95 9.23 3 13 3M16 10C16 9.84 16 9.75 15.94 9.61L16.83 8.95C16.88 8.91 16.92 8.77 16.88 8.67L16.08 7.31C16.03 7.22 15.89 7.17 15.8 7.22L14.81 7.64C14.63 7.45 14.39 7.31 14.16 7.22L14 6.19C13.97 6.05 13.92 6 13.78 6H12.19C12.09 6 12 6.05 12 6.19L11.86 7.22C11.63 7.31 11.39 7.45 11.2 7.64L10.17 7.22C10.08 7.17 10 7.22 9.94 7.31L9.14 8.67C9.09 8.81 9.09 8.91 9.19 8.95L10.03 9.61C10.03 9.75 10 9.89 10 10C10 10.13 10.03 10.27 10.03 10.41L9.19 11.06C9.09 11.11 9.09 11.2 9.14 11.3L9.94 12.7C10 12.8 10.08 12.8 10.17 12.8L11.16 12.37C11.39 12.56 11.58 12.66 11.86 12.75L12 13.83C12 13.92 12.09 14 12.19 14H13.78C13.92 14 13.97 13.92 14 13.83L14.16 12.75C14.39 12.66 14.63 12.56 14.81 12.38L15.8 12.8C15.89 12.8 16.03 12.8 16.08 12.7L16.88 11.3C16.92 11.2 16.88 11.11 16.83 11.06L16 10.41V10Z'
  }));
});