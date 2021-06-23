import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M3 5V21H19V23H3C1.9 23 1 22.1 1 21V5H3M21 1H7C5.89 1 5 1.89 5 3V17C5 18.1 5.9 19 7 19H21C22.11 19 23 18.11 23 17V3C23 1.9 22.1 1 21 1M21 17H7V3H21V17M11 14H8V16H11V14M15 14H12V16H15V14M11 11H8V13H11V11M15 11H12V13H15V11M11 8H8V10H11V8M15 8H12V10H15V8Z'
  }));
});