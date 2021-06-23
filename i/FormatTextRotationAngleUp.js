import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20.58 9.33V13.55L19.17 12.14L10.31 21L8.91 19.59L17.72 10.73L16.31 9.33M7.59 11L10.22 8.39L5.34 6.14M4.5 4.22L15.61 8.63L14.16 10.13L11.96 9.19L8.39 12.75L9.33 14.91L7.83 16.41L3.42 5.25Z'
  }));
});