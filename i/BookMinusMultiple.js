import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M13.09 20H5V6H3V20C3 21.11 3.9 22 5 22H13.81C13.44 21.39 13.2 20.71 13.09 20M19 2H14V7L12 5.5L10 7V2H9C7.9 2 7 2.9 7 4V16C7 17.11 7.9 18 9 18H13.09C13.64 14.73 16.74 12.53 20 13.08C20.34 13.14 20.68 13.23 21 13.34V4C21 2.9 20.11 2 19 2M23 18V20H15V18H23Z'
  }));
});