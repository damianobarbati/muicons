import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M11.8 5.9L11 5.1C12.4 3.7 14.2 3 16 3S19.6 3.7 21 5.1L20.2 5.9C19 4.8 17.5 4.2 16 4.2S13 4.8 11.8 5.9M21 15C21 13.9 20.1 13 19 13H17V9H15V11.8L21 17.8V15M18.5 7.5L19.3 6.7C18.4 5.8 17.2 5.3 16 5.3S13.6 5.8 12.7 6.7L13.5 7.5C14.2 6.8 15.1 6.5 16 6.5C16.9 6.5 17.8 6.8 18.5 7.5M22.1 21.5L20.8 22.8L19.1 21H5C3.9 21 3 20.1 3 19V15C3 13.9 3.9 13 5 13H11.1L1.1 3L2.4 1.7L22.1 21.5M8 16H6V18H8V16M11.5 16H9.5V18H11.5V16M15 16.9L14.1 16H13V18H15V16.9Z'
  }));
});