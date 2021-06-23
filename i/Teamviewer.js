import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M10.04 9.2L9.3 11H14.75L14 9.2L19.55 12L14 14.8L14.75 13H9.3L10.04 14.8L4.5 12L10.04 9.2M20.83 22H3.17C2.53 22 2 21.5 2 20.83V3.17C2 2.53 2.53 2 3.17 2H20.83C21.5 2 22 2.53 22 3.17V20.83C22 21.47 21.5 22 20.83 22M11.93 3.76C7.41 3.82 3.78 7.5 3.76 12C3.72 16.5 7.35 20.2 11.86 20.24H12C16.53 20.18 20.18 16.53 20.24 12C20.31 7.5 16.74 3.83 12.26 3.76C12.15 3.75 12.04 3.76 11.93 3.76Z'
  }));
});