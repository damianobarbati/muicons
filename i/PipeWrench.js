import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M16.17 5.63L14.06 7.78L11.91 5.63L16.17 1.41L19.69 4.92C20.86 6.09 20.86 8 19.69 9.19L16.17 5.63M4.83 12.7L7 14.81L10.5 11.3L8.39 9.19L4.83 12.7M15.47 7.78L19 11.3L17.58 12.7L16.88 12L6.23 22.59L3.42 19.78L11.91 11.3L7.69 7.03L9.8 4.92L14.06 9.19L15.47 7.78Z'
  }));
});