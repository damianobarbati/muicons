import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2 8V13H5V14H2V16H5C6.11 16 7 15.11 7 14V13C7 11.9 6.11 11 5 11H4V10H7V8H2M10 8V10H11V16H13V8H10M17 8V10H20V11H19C17.9 11 17 11.9 17 13V16H22V14H19V13H20C21.11 13 22 12.11 22 11V10C22 8.9 21.11 8 20 8H17M8 14V16H10V14H8M14 14V16H16V14H14Z'
  }));
});