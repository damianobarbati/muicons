import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22.11 21.46L2.39 1.73L1.11 3L3.22 5.11C3.08 5.38 3 5.68 3 6V18C3 19.11 3.9 20 5 20H18.11L20.84 22.73L22.11 21.46M10.11 12H5V8H6.11L10.11 12M11 18H5V14H11V18M13 18V14.89L16.11 18H13M13 9.8L7.2 4H19C20.11 4 21 4.89 21 6V17.8L19 15.8V14H17.2L15.2 12H19V8H13V9.8Z'
  }));
});