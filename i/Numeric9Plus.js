import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M19 11H17V9H15V11H13V13H15V15H17V13H19V11M10 7H8C6.9 7 6 7.9 6 9V11C6 12.11 6.9 13 8 13H10V15H6V17H10C11.11 17 12 16.11 12 15V9C12 7.89 11.1 7 10 7M10 11H8V9H10V11Z'
  }));
});