import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M9,2A7,7 0 0,1 16,9C16,10.5 15.5,12 14.61,13.19L15.41,14H16L22,20L20,22L14,16V15.41L13.19,14.61C12,15.5 10.5,16 9,16A7,7 0 0,1 2,9A7,7 0 0,1 9,2M11.12,5.46L9,7.59L6.88,5.46L5.46,6.88L7.59,9L5.46,11.12L6.88,12.54L9,10.41L11.12,12.54L12.54,11.12L10.41,9L12.54,6.88L11.12,5.46Z'
  }));
});