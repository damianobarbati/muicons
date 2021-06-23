import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12.83 11.17C14.39 12.73 14.39 15.27 12.83 16.83S8.73 18.39 7.17 16.83L12.83 11.17M4 2H16C17.11 2 18 2.9 18 4V20C18 21.11 17.11 22 16 22H4C2.9 22 2 21.11 2 20V4C2 2.9 2.9 2 4 2M5 4C4.45 4 4 4.45 4 5S4.45 6 5 6 6 5.55 6 5 5.55 4 5 4M8 4C7.45 4 7 4.45 7 5S7.45 6 8 6 9 5.55 9 5 8.55 4 8 4M10 8C6.69 8 4 10.69 4 14S6.69 20 10 20 16 17.31 16 14 13.31 8 10 8M20 15H22V17H20V15M20 7H22V13H20V7Z'
  }));
});