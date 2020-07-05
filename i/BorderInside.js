import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M19,17H21V15H19M19,21H21V19H19M13,3H11V11H3V13H11V21H13V13H21V11H13M15,21H17V19H15M19,5H21V3H19M19,9H21V7H19M17,3H15V5H17M5,3H3V5H5M9,3H7V5H9M3,17H5V15H3M5,7H3V9H5M7,21H9V19H7M3,21H5V19H3V21Z'
  }));
});