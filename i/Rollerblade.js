import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M4.5 18C3.12 18 2 19.12 2 20.5S3.12 23 4.5 23 7 21.88 7 20.5 5.88 18 4.5 18M18.5 18C17.12 18 16 19.12 16 20.5S17.12 23 18.5 23 21 21.88 21 20.5 19.88 18 18.5 18M20 17C20 15.63 20.09 13.81 19.5 12.95C18.55 10.9 15.82 10.56 13.91 10.05C13 10 12 9 11.82 8H9C8.71 8 8.5 7.78 8.5 7.5C8.5 7.22 8.71 7 9 7H11.5V6H9C8.71 6 8.5 5.78 8.5 5.5C8.5 5.22 8.71 5 9 5H11.5V2H3V17H20M11.5 18C10.12 18 9 19.12 9 20.5S10.12 23 11.5 23 14 21.88 14 20.5 12.88 18 11.5 18Z'
  }));
});