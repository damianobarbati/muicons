import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17.42 8L13.41 4H9V6H12.59L14.59 8H6.5C4 8 2 10 2 12.5S4 17 6.5 17C8.72 17 10.56 15.38 10.92 13.27L13.04 12C13 12.17 13 12.33 13 12.5C13 15 15 17 17.5 17S22 15 22 12.5 20 8 17.5 8M8.84 13.26C8.5 14.27 7.58 15 6.47 15C5.09 15 3.97 13.88 3.97 12.5S5.09 10 6.47 10C7.59 10 8.5 10.74 8.84 11.75H6V13.25L8.84 13.26M17.47 15C16.09 15 14.97 13.88 14.97 12.5S16.09 10 17.47 10C18.85 10 19.97 11.12 19.97 12.5S18.85 15 17.47 15M11 20H7L13 23V21H17L11 18V20Z'
  }));
});