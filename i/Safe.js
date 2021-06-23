import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M4,4A2,2 0 0,0 2,6V17A2,2 0 0,0 4,19V20H6V19H17V20H19V19A2,2 0 0,0 21,17V16H22V14H21V9H22V7H21V6A2,2 0 0,0 19,4H4M4,6H19V17H4V6M13.5,7.5A4,4 0 0,0 9.5,11.5A4,4 0 0,0 13.5,15.5A4,4 0 0,0 17.5,11.5A4,4 0 0,0 13.5,7.5M5,9V14H7V9H5M13.5,9.5A2,2 0 0,1 15.5,11.5A2,2 0 0,1 13.5,13.5A2,2 0 0,1 11.5,11.5A2,2 0 0,1 13.5,9.5Z'
  }));
});