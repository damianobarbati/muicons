import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M8,14A3,3 0 0,1 5,17A3,3 0 0,1 2,14C2,13.23 2.29,12.53 2.76,12C2.29,11.47 2,10.77 2,10A3,3 0 0,1 5,7A3,3 0 0,1 8,10C9.33,10.08 10.67,10.17 12,10.17C13.33,10.17 14.67,10.08 16,10A3,3 0 0,1 19,7A3,3 0 0,1 22,10C22,10.77 21.71,11.47 21.24,12C21.71,12.53 22,13.23 22,14A3,3 0 0,1 19,17A3,3 0 0,1 16,14C14.67,13.92 13.33,13.83 12,13.83C10.67,13.83 9.33,13.92 8,14Z'
  }));
});