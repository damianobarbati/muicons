import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M6 7V17H13V7H6M9.16 16V12.87H7.41L9.91 8V11.14H11.59L9.16 16M14 2V6H5V2C5 1.45 5.45 1 6 1H13C13.55 1 14 1.45 14 2M14 18V22C14 22.55 13.55 23 13 23H6C5.45 23 5 22.55 5 22V18H14M19 13H17V7H19V13M19 17H17V15H19V17Z'
  }));
});