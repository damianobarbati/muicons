import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M7,19H15V22H7V19M16.94,1C16.4,0.91 15.87,1.25 15.76,1.8L14.75,7.57C14.53,7.54 14.29,7.5 14,7.47L13.57,7.5L12.41,1.8C12.31,1.26 11.78,0.91 11.24,1C10.7,1.13 10.35,1.66 10.45,2.2L11.65,8.11L7.85,9.8C7.35,10 7,10.53 7,11.14V15.5C7,16.3 7.73,17 8.5,17H15C15.39,17 15.74,16.84 16,16.57L16.5,16.16C16.5,16.16 17,15.78 17,15.36V13C17,13 17,11.86 16.13,11.3L17.71,2.2C17.83,1.66 17.5,1.13 16.94,1Z'
  }));
});