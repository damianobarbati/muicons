import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M16.67,4C17.4,4 18,4.6 18,5.33V20.67A1.33,1.33 0 0,1 16.67,22H7.33C6.6,22 6,21.4 6,20.67V5.33A1.33,1.33 0 0,1 7.33,4H9V2H15V4H16.67M16,14V12H13V9H11V12H8V14H11V17H13V14H16Z'
  }));
});