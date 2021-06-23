import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M16 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H16C17.11 22 18 21.11 18 20V4C18 2.9 17.11 2 16 2M8 4C8.55 4 9 4.45 9 5S8.55 6 8 6 7 5.55 7 5 7.45 4 8 4M5 4C5.55 4 6 4.45 6 5S5.55 6 5 6 4 5.55 4 5 4.45 4 5 4M16 20H4V8H16V20M12.67 15.33C12.69 16.03 12.41 16.71 11.91 17.21C10.86 18.26 9.15 18.27 8.09 17.21C7.59 16.71 7.31 16.03 7.33 15.33C7.4 14.62 7.63 13.94 8 13.33C8.37 12.5 8.81 11.73 9.33 11L10 10C11.79 12.59 12.67 14.36 12.67 15.33M20 15H22V17H20V15M20 7H22V13H20V7Z'
  }));
});