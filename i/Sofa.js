import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M7,6H9A2,2 0 0,1 11,8V12H5V8A2,2 0 0,1 7,6M15,6H17A2,2 0 0,1 19,8V12H13V8A2,2 0 0,1 15,6M1,9H2A1,1 0 0,1 3,10V12A2,2 0 0,0 5,14H19A2,2 0 0,0 21,12V11L21,10A1,1 0 0,1 22,9H23A1,1 0 0,1 24,10V19H21V17H3V19H0V10A1,1 0 0,1 1,9Z'
  }));
});