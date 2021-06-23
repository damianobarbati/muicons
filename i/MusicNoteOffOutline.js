import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M14 7H18V3H12V7.61L14 9.61M12 10.44L4.41 2.86L3 4.27L12 13.27V13.55A3.94 3.94 0 0 0 8.67 13.23A4 4 0 0 0 10.65 20.95A4.1 4.1 0 0 0 14 16.85V15.27L19.73 21L21.14 19.59M10 19A2 2 0 1 1 12 17A2 2 0 0 1 10 19Z'
  }));
});