import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22 4L20 2C18.85 2.64 17.4 3 16 3C14.6 3 13.14 2.63 12 2C10.86 2.63 9.4 3 8 3C6.6 3 5.15 2.64 4 2L2 4C2 4 4 6 4 8S2 14 2 16C2 20 12 22 12 22S22 20 22 16C22 14 20 10 20 8S22 4 22 4M15.05 16.45L11.97 14.59L8.9 16.45L9.72 12.95L7 10.61L10.58 10.3L11.97 7L13.37 10.29L16.95 10.6L14.23 12.94L15.05 16.45Z'
  }));
});