import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17.12,17.12L12.5,12.5L5.27,5.27L4,6.55L7.32,9.87C6.55,11.32 6,12.79 6,14A6,6 0 0,0 12,20C13.5,20 14.9,19.43 15.96,18.5L18.59,21.13L19.86,19.86L17.12,17.12M18,14C18,10 12,3.2 12,3.2C12,3.2 10.67,4.71 9.27,6.72L17.86,15.31C17.95,14.89 18,14.45 18,14Z'
  }));
});