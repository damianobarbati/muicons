import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M10.5 17.05L9.43 16L22.07 3.35L20.66 1.93L8 14.58L6.95 13.5C6.17 12.73 4.9 12.73 4.12 13.5L2 15.64L2.71 16.34L4.83 14.22L5.54 14.93L3.41 17.05L4.12 17.76L6.24 15.64L6.95 16.34L4.83 18.46L5.54 19.17L7.66 17.05L8.36 17.76L6.24 19.88L6.95 20.59L9.07 18.46L9.78 19.17L7.66 21.29L8.36 22L10.5 19.88C11.27 19.1 11.27 17.83 10.5 17.05Z'
  }));
});