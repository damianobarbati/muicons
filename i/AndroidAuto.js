import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22.78,17.91C22.94,18.16 23,18.42 23,18.7C23,19.08 22.87,19.39 22.57,19.64C22.27,19.89 21.94,20 21.56,20H19.08L12.42,8H11.58L4.92,20H2.39C1.92,20 1.53,19.8 1.22,19.38C0.91,18.96 0.89,18.5 1.17,18L10.78,1.69C11.09,1.22 11.5,1 12,1C12.53,1 12.92,1.22 13.17,1.69L22.78,17.91M4.78,22.31L12,9.38L19.22,22.31L18.5,23L12,20.34L5.44,23L4.78,22.31Z'
  }));
});