import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20 3H7V2H6A1.78 1.78 0 0 0 4.59 3H2V5H3.73C2 10.58 2 22 2 22H7V5H20M22 8.5A2.5 2.5 0 1 0 19 11V22H20V11A2.5 2.5 0 0 0 22 8.5M15 11.5V16H14V22H12.5V17H11.5V22H10V16H9V11.5A1.5 1.5 0 0 1 10.5 10H13.5A1.5 1.5 0 0 1 15 11.5M12 6.5A1.5 1.5 0 1 0 13.5 8A1.5 1.5 0 0 0 12 6.5Z'
  }));
});