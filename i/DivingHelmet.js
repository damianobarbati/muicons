import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8A4,4 0 0,1 16,12M19.45,7.89L18.07,8.58L18.32,9H20V15H18.33C17.84,16.03 17.11,16.92 16.21,17.6C17.85,18.11 19.1,18.91 19.67,19.86C18.69,21.1 15.62,22 12,22C8.38,22 5.31,21.1 4.33,19.86C4.9,18.91 6.15,18.11 7.79,17.6C6.89,16.92 6.16,16.03 5.67,15H4V9H5.68C6.37,7.54 7.54,6.37 9,5.68V4H15V5.68C15.68,6 16.29,6.46 16.82,7L18.55,6.14C19.93,5.42 20,4.1 20,2H22C22,4.06 22,6.62 19.45,7.89M17,12A5,5 0 0,0 12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12Z'
  }));
});