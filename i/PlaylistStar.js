import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17,19.09L19.45,20.58L18.8,17.77L21,15.89L18.11,15.64L17,13L15.87,15.64L13,15.89L15.18,17.77L14.5,20.58L17,19.09M4,14H12V16H4V14M4,6H16V8H4V6M4,10H16V12H4V10Z'
  }));
});