import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M7.58,3L5.05,4.61L9.04,10.87L10.82,8.08L7.58,3M16.43,3L7.5,17H2V21H8.5L18.96,4.61L16.43,3M14.97,14.59L13.19,17.38L15.5,21H22V17H16.5L14.97,14.59Z'
  }));
});