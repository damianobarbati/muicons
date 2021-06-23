import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20,20A2,2 0 0,1 18,22H4A2,2 0 0,1 2,20V6A2,2 0 0,1 4,4H9.5C9.2,4.8 9,5.6 9,6.5C9,10.1 11.9,13 15.5,13C16.3,13 17,12.9 17.6,12.6L20,15V20M19.3,8.9C19.7,8.2 20,7.4 20,6.5C20,4 18,2 15.5,2C13,2 11,4 11,6.5C11,9 13,11 15.5,11C16.4,11 17.2,10.7 17.9,10.3L21,13.4L22.4,12L19.3,8.9M15.5,9C14.1,9 13,7.9 13,6.5C13,5.1 14.1,4 15.5,4C16.9,4 18,5.1 18,6.5C18,7.9 16.9,9 15.5,9Z'
  }));
});