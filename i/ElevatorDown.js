import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M7 10L11 6H8V2H6V6H3L7 10M17 10L13 6H16V2H18V6H21L17 10M7 12H17C18.11 12 19 12.9 19 14V20C19 21.11 18.11 22 17 22H7C5.9 22 5 21.11 5 20V14C5 12.9 5.9 12 7 12M7 14V20H17V14H7Z'
  }));
});