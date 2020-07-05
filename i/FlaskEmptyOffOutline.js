import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22.1 21.5L2.4 1.7L1.1 3L7.9 9.8L3.5 17.4C3.2 17.8 3 18.4 3 19C3 20.7 4.3 22 6 22H18C18.6 22 19.2 21.8 19.6 21.5L20.8 22.7L22.1 21.5M18 20H6C5.4 20 5 19.6 5 19C5 18.8 5.1 18.6 5.2 18.4L9.4 11.2L18 20C18.1 20 18 20 18 20M11 7.8L8 4.8V4C8 2.9 8.9 2 10 2H14C15.1 2 16 2.9 16 4V5C16 5.6 15.6 6 15 6V7.8L20.4 17.2L15 11.8L13 8.4V4H11V7.8Z'
  }));
});