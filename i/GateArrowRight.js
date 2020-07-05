import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15 5V10H13V6H11V10H9V8H7V20H9V18H11V20H12.09A6 6 0 0 1 12 19A6 6 0 0 1 13 15.69V12H15V13.81A6 6 0 0 1 17 13.09V12H19V13.09A6 6 0 0 1 21 13.81V12H22V10H21V5H19V10H17V5H15M9 12H11V16H9V12M19 16V18H15V20H19V22L22 19L19 16Z'
  }));
});