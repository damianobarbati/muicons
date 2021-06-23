import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M8,8V6H10V8H8M7,2H17A2,2 0 0,1 19,4V19A2,2 0 0,1 17,21V22H15V21H9V22H7V21A2,2 0 0,1 5,19V4A2,2 0 0,1 7,2M7,4V9H17V4H7M8,12V15H10V12H8Z'
  }));
});