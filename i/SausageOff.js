import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20.8 22.7L16.3 18.2C14.2 19.9 11.4 21 8.5 21C7.1 21 5.9 20.2 5.3 19L3 20.5V14.5L5.3 16C5.8 14.8 7.1 14 8.5 14C9.5 14 10.5 13.7 11.3 13.2L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M21 8.5C21 7.1 20.2 5.9 19 5.3L20.5 3H14.5L16 5.3C14.8 5.8 14 7.1 14 8.5C14 9.2 13.9 9.8 13.6 10.4L18.7 15.6C20.2 13.6 21 11.1 21 8.5Z'
  }));
});