import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20.84 22.73L18.73 20.62C18.32 21.43 17.5 22 16.5 22C15.12 22 14 20.88 14 19.5C14 18.5 14.57 17.68 15.38 17.27L14.11 16H4V5.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M19 15C19 10 14 10 14 10H13.2L18.72 15.5C19 15.27 19 15 19 15M11.64 7.5L11.43 6H9.24V4.5H11.21L11 3H6.2L10.7 7.5H11.64M6.5 17C5.12 17 4 18.12 4 19.5S5.12 22 6.5 22 9 20.88 9 19.5 7.88 17 6.5 17Z'
  }));
});