import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M13,4.8C9,4.8 9,19.2 13,19.2C17,19.2 22,16.5 22,12C22,7.5 17,4.8 13,4.8M13.1,17.2C12.7,16.8 12,15 12,12C12,9 12.7,7.2 13.1,6.8C16,6.9 20,8.7 20,12C20,15.3 15.9,17.1 13.1,17.2M8,10.5C8,11 7.9,11.5 7.9,12C7.9,12.2 7.9,12.4 7.9,12.6L2.4,14L1.9,12.1L8,10.5M2,7L9.4,5.1C9.2,5.4 9,5.8 8.9,6.3C8.8,6.6 8.7,7 8.6,7.4L2.5,8.9L2,7M8.2,15.5C8.3,16.2 8.5,16.9 8.7,17.4L2.4,19L1.9,17.1L8.2,15.5Z'
  }));
});