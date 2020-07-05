import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21 11.11V7A2 2 0 0 0 20.42 5.59A1.87 1.87 0 0 0 19 5H15V3A1.9 1.9 0 0 0 14.42 1.58A1.9 1.9 0 0 0 13 1H9A1.9 1.9 0 0 0 7.58 1.58A1.9 1.9 0 0 0 7 3V5H3A1.87 1.87 0 0 0 1.58 5.59A2 2 0 0 0 1 7V18A2 2 0 0 0 1.58 19.41A1.87 1.87 0 0 0 3 20H10.26A7 7 0 1 0 21 11.11M9 3H13V5H9M3 18V7H19V9.68A6.84 6.84 0 0 0 16 9A7 7 0 0 0 9 16A6.91 6.91 0 0 0 9.29 18M19 20A5 5 0 0 1 13 20A4.94 4.94 0 0 1 11 16A5 5 0 0 1 16 11A4.94 4.94 0 0 1 19 12A5 5 0 0 1 19 20M15 13H16.5V15.82L18.94 17.23L18.19 18.53L15 16.69V13'
  }));
});