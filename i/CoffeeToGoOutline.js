import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M3 3V11A4 4 0 0 0 7 15H11A4 4 0 0 0 15 11V10H17C18.11 10 19 9.11 19 8V5C19 3.9 18.11 3 17 3H3M5 5H13V11A2 2 0 0 1 11 13H7A2 2 0 0 1 5 11V5M15 5H17V8H15V5M16.67 13.83L15.26 15.24L17 17H3V19H17L15.26 20.76L16.67 22.17L20.84 18L16.67 13.83Z'
  }));
});