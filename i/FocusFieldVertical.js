import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M19 19H15V21H19C20.1 21 21 20.1 21 19V15H19M19 3H15V5H19V9H21V5C21 3.9 20.1 3 19 3M5 5H9V3H5C3.9 3 3 3.9 3 5V9H5M5 15H3V19C3 20.1 3.9 21 5 21H9V19H5V15M11 11H13V13H11V11M11 7H13V9H11V7M11 15H13V17H11V15Z'
  }));
});