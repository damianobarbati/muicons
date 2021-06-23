import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M10 4C9.4 4 9 4.4 9 5V6H14V5C14 4.4 13.6 4 13 4H10M3 7L4.1 14.1C4.2 14.8 4.5 15.5 5.1 16.1C5.5 16.6 6.2 16.9 7 17C7 17.6 7.4 18 8 18H16C16.6 18 17 17.6 17 17L15 11H17L20.3 16L22 15L18.7 10L20 9.2L19 7.5L16.4 9H15V7H8V11L7.2 16C6.5 15.9 6.1 15.7 5.8 15.4C5.4 15 5.2 14.5 5.1 13.9L4 7H3M4 19V21H20V19H4Z'
  }));
});