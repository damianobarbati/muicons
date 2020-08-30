import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M23 20H15V18H23V20M13 19C13 15.69 15.69 13 19 13C19.7 13 20.37 13.13 21 13.35V6H19V5C19 3.9 18.11 3 17 3H15C13.9 3 13 3.9 13 5V6H11V5C11 3.9 10.11 3 9 3H7C5.9 3 5 3.9 5 5V6H3V20H13.09C13.04 19.67 13 19.34 13 19Z'
  }));
});