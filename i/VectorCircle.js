import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M9,2V4.06C6.72,4.92 4.92,6.72 4.05,9H2V15H4.06C4.92,17.28 6.72,19.09 9,19.95V22H15V19.94C17.28,19.08 19.09,17.28 19.95,15H22V9H19.94C19.08,6.72 17.28,4.92 15,4.05V2M11,4H13V6H11M9,6.25V8H15V6.25C16.18,6.86 17.14,7.82 17.75,9H16V15H17.75C17.14,16.18 16.18,17.14 15,17.75V16H9V17.75C7.82,17.14 6.86,16.18 6.25,15H8V9H6.25C6.86,7.82 7.82,6.86 9,6.25M4,11H6V13H4M18,11H20V13H18M11,18H13V20H11'
  }));
});