import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M7 2H17V7H19V13H16.5L13 17H11L7.5 13H5V7H7V2M10 22H2V20H10C10.55 20 11 19.55 11 19V18H13V19C13 20.66 11.66 22 10 22M7 9V11H8.5L12 15L15.5 11H17V9H15V4H9V9H7M21 12V7H23V12H21M21 16V14H23V16H21Z'
  }));
});