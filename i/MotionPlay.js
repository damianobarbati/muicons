import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22 12C22 6.46 17.54 2 12 2C10.83 2 9.7 2.19 8.62 2.56L9.32 4.5C10.17 4.16 11.06 3.97 12 3.97C16.41 3.97 20.03 7.59 20.03 12C20.03 16.41 16.41 20.03 12 20.03C7.59 20.03 3.97 16.41 3.97 12C3.97 11.06 4.16 10.12 4.5 9.28L2.56 8.62C2.19 9.7 2 10.83 2 12C2 17.54 6.46 22 12 22C17.54 22 22 17.54 22 12M5.47 3.97C6.32 3.97 7 4.68 7 5.47C7 6.32 6.32 7 5.47 7C4.68 7 3.97 6.32 3.97 5.47C3.97 4.68 4.68 3.97 5.47 3.97M18 12C18 8.67 15.33 6 12 6C8.67 6 6 8.67 6 12C6 15.33 8.67 18 12 18C15.33 18 18 15.33 18 12M15 12L10 15V9'
  }));
});