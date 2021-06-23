import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15 2H5C3.9 2 3 2.9 3 4V19C3 20.11 3.9 21 5 21V22H7V21H13V22H15V21C16.11 21 17 20.11 17 19V4C17 2.9 16.11 2 15 2M8 15H6V10H8V15M21 7V13H19V7H21M19 15H21V17H19V15Z'
  }));
});