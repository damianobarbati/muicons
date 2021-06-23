import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M18 11H6A2 2 0 0 0 4 13V21A2 2 0 0 0 6 23H18A2 2 0 0 0 20 21V13A2 2 0 0 0 18 11M18 17H6V14H18M17 5V10H15.5V6.5H9.88L12.3 8.93L11.24 10L7 5.75L11.24 1.5L12.3 2.57L9.88 5Z'
  }));
});