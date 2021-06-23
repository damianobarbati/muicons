import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M16.62 13.42L14.5 11.32C16.84 8.94 19.83 8.11 19.83 8.11C18.87 10.6 17.73 12.27 16.62 13.42M12 2C12 2 10.86 4.3 10.41 7.21L13.72 10.5C13.92 8.45 13.61 5.63 12 2M20.84 22.73L22.11 21.46L2.39 1.73L1.11 3L8.62 10.5C6.5 8.75 4.17 8.11 4.17 8.11C5.7 12.08 7.69 14 9.28 14.97C6.47 14.59 4 16 4 16C6.68 17.19 8.64 17.23 9.94 16.95C8.53 18.1 8.03 19.81 8.03 19.81C10 19.09 11 18.13 11.5 17.35V22H12.5V17.35C13 18.13 14 19.09 15.97 19.81C15.97 19.81 15.47 18.1 14.06 16.95C14.39 17 14.77 17.07 15.2 17.09L20.84 22.73Z'
  }));
});