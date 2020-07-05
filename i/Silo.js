import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M8.5,2C11.85,2 14.6,4.53 14.96,7.78L22,12V14L20,12.8V22H18V11.6L15,9.8V22H13V9H4V22H2V8.5A6.5,6.5 0 0,1 8.5,2M8.5,4C6.54,4 4.87,5.25 4.26,7H12.74C12.13,5.25 10.46,4 8.5,4M6,11H11V13H6V11M6,15H11V17H6V15M6,19H11V21H6V19Z'
  }));
});