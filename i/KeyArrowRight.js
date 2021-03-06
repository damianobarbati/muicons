import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M10.7 6C10.1 4.2 8.4 3 6.5 3C4 3 2 5 2 7.5S4 12 6.5 12C8.5 12 10.1 10.8 10.7 9H15V12H18V9H22V6H10.7M6.5 9C5.7 9 5 8.3 5 7.5S5.7 6 6.5 6 8 6.7 8 7.5 7.3 9 6.5 9M13 21V19H8V17H13V15L16 18L13 21'
  }));
});