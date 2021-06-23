import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M18 7C18 9.21 14.42 11 10 11S2 9.21 2 7 5.58 3 10 3 18 4.79 18 7M10 18C5.58 18 2 16.21 2 14V17C2 19.21 5.58 21 10 21S18 19.21 18 17V14C18 16.21 14.42 18 10 18M10 13C5.58 13 2 11.21 2 9V12C2 14.21 5.58 16 10 16S18 14.21 18 12V9C18 11.21 14.42 13 10 13M20 17H22V15H20V17M20 7V13H22V7H20Z'
  }));
});