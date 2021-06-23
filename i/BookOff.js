import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M18.68 2.12L12 8.8V2H18C18.24 2 18.46 2.05 18.68 2.12M9.5 7.5L7 9V2H6C4.89 2 4 2.9 4 4V16.8L11.88 8.93L9.5 7.5M21.61 1.73L1.89 21.46L3.16 22.73L4.54 21.35C4.9 21.75 5.42 22 6 22H18C19.11 22 20 21.11 20 20V5.89L22.89 3L21.61 1.73Z'
  }));
});