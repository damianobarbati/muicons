import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M1,4.27L2.28,3L20,20.72L18.73,22L15.18,18.44L13.45,20.03L12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,7.55 2.23,6.67 2.63,5.9L1,4.27M7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,11.07 20.42,13.32 17.79,15.97L5.27,3.45C5.95,3.16 6.7,3 7.5,3Z'
  }));
});