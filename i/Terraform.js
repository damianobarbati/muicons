import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21 5.4V11.8L15.4 15V8.7L21 5.4M14.8 8.7V15L9.2 11.8V5.4L14.8 8.7M14.8 15.7V22.1L9.2 18.9V12.5L14.8 15.7M8.6 5.1V11.5L3 8.3V1.9L8.6 5.1Z'
  }));
});