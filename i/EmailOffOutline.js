import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22.1 21.5L2.4 1.7L1.1 3L2.6 4.5C2.3 4.9 2 5.4 2 6V18C2 19.1 2.9 20 4 20H18.1L20.8 22.7L22.1 21.5M4 18V8L9.6 11.5L16.1 18H4M9.2 6L7.2 4H20C21.1 4 22 4.9 22 6V18C22 18.2 22 18.5 21.9 18.7L20 16.8V8L14.6 11.4L13.4 10.2L20 6H9.2Z'
  }));
});