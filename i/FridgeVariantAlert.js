import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17 4V19C17 20.11 16.11 21 15 21V22H13V21H10.5V2H15C16.11 2 17 2.9 17 4M5 2H9.5V21H7V22H5V21C3.9 21 3 20.11 3 19V4C3 2.9 3.9 2 5 2M8 10H5V14H8V10M19 7V13H21V7H19M19 17H21V15H19V17Z'
  }));
});