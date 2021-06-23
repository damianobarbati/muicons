import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M9 13L5 16C4 16.88 3.86 18.12 4 19C4.13 20 4.91 21.22 6 21.68C7.57 22.35 9.09 21.9 10.04 20.92L19 13C20.86 11.62 20 9 18 9H12L19.46 4.61C19.9 4.29 20.08 3.82 20.06 3.37C20 2.67 19.46 2 18.6 2H18.54C18.19 2 17.86 2.11 17.56 2.29L5 9C4.19 9.46 3.94 10.24 4 11C4.05 12.03 4.74 13 6 13M5 18.5C5 17.12 6.12 16 7.5 16S10 17.12 10 18.5 8.88 21 7.5 21 5 19.88 5 18.5Z'
  }));
});