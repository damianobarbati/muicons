import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M5 3C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3H5M5 5H19V19H5V5M15.1 7.88C14.45 7.29 13.83 7 12.3 7H8V17H9.8V13.4H12.3C13.8 13.4 14.46 13.12 15.1 12.58C15.74 12.03 16 11.25 16 10.23C16 9.26 15.75 8.5 15.1 7.88M13.6 11.5C13.28 11.81 12.9 12 12.22 12H9.8V8.4H12.1C12.76 8.4 13.27 8.65 13.6 9C13.93 9.35 14.1 9.72 14.1 10.24C14.1 10.8 13.92 11.19 13.6 11.5Z'
  }));
});