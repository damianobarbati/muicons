import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M6,3V7H8V5H16V7H18V3H6M5,8A3,3 0 0,0 2,11V17H5V14H19V17H22V11A3,3 0 0,0 19,8H5M18,10A1,1 0 0,1 19,11A1,1 0 0,1 18,12A1,1 0 0,1 17,11A1,1 0 0,1 18,10M7,16V21H9V16H7M11,16V20H13V16H11M15,16V21H17V16H15Z'
  }));
});