import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22.1 21.5L2.4 1.7L1.1 3L4.1 6C2.8 7.6 2 9.7 2 12C2 17.5 6.5 22 12 22C14.3 22 16.4 21.2 18 19.9L20.8 22.7L22.1 21.5M7 13V11H9.1L11.1 13H7M14.2 11L6.7 3.5C8.3 2.6 10.1 2 12 2C17.5 2 22 6.5 22 12C22 13.9 21.4 15.7 20.5 17.3L16.2 13H17V11H14.2Z'
  }));
});