import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M8 3.67C6.78 4.53 5.39 4.93 4 5H2V7H4C5.37 7 6.74 6.65 8 6C10.5 7.3 13.5 7.3 16 6C17.26 6.65 18.62 6.94 20 7H22V5H20C18.61 5 17.22 4.53 16 3.67C13.56 5.38 10.44 5.38 8 3.67M16 8.67L15 10V12H14L12 14H9L6 16L5 14H4V16L2 17L4 18V20H5.14L6 18L9 20H20A2 2 0 0 0 22 18V16A2 2 0 0 0 20 14H18L17 13V12H16V10H17V8.67Z'
  }));
});