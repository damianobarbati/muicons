import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17,4V8H18V10H17.64L21,23H18.93L18.37,20.83L12,17.15L5.63,20.83L5.07,23H3L6.36,10H6V8H7V4H6V3L12,1L18,3V4H17M7.28,14.43L6.33,18.12L10,16L7.28,14.43M15.57,10H8.43L7.8,12.42L12,14.85L16.2,12.42L15.57,10M17.67,18.12L16.72,14.43L14,16L17.67,18.12Z'
  }));
});