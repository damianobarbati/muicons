import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M13 1C14.66 1 16 2.34 16 4S14.66 7 13 7 10 5.66 10 4 11.34 1 13 1M20 14C20 11.64 18.17 9.6 15.5 8.62C15 9.45 14.06 10 13 10C11.76 10 10.69 9.24 10.24 8.17C10 8.2 9.78 8.23 9.57 8.29L7 7V9.32C5.5 10.22 4.45 11.5 4.12 13H2V17H5.08C5.58 17.65 6.23 18.22 7 18.68V22H9V19.56C9.93 19.84 10.94 20 12 20S14.07 19.84 15 19.56V22H17V18.68C18.15 18 19.03 17.06 19.54 16H22V14H20M7 13C6.45 13 6 12.55 6 12S6.45 11 7 11 8 11.45 8 12 7.55 13 7 13Z'
  }));
});