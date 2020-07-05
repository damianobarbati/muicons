import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M11.28 2.8L10.78 3.3A5.5 5.5 0 0 0 6.41 2.87L6.33 2.8A2.5 2.5 0 0 0 2.8 6.33L2.87 6.41A5.5 5.5 0 0 0 3.3 10.78L2.8 11.28A1.5 1.5 0 0 0 2.8 13.4L4.21 14.82A1.5 1.5 0 0 0 6.33 14.82L6.68 14.46L13.76 21.53A1.5 1.5 0 0 0 15.88 21.53L21.53 15.88A1.5 1.5 0 0 0 21.53 13.76L14.46 6.68L14.82 6.33A1.5 1.5 0 0 0 14.82 4.21L13.4 2.8A1.5 1.5 0 0 0 11.28 2.8M13.76 5.27L5.27 13.76L3.86 12.34L12.34 3.86M14.82 11.63L11.63 14.82L10.57 13.76L13.76 10.57M16.94 13.76L13.76 16.94L12.69 15.88L15.88 12.69Z'
  }));
});