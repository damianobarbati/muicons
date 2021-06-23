import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15.9 .9L13.1 3.7C12.3 4.5 12.3 5.7 13.1 6.5L14.5 8L9.2 13.4L7.8 12C7 11.2 5.8 11.2 5 12L1 16L2.4 17.4L6.4 13.4L7.8 14.8L3.8 18.8L5.2 20.2L9.2 16.2L10.6 17.6L9.9 18.4L6.7 21.6L8 23L12 19C12.8 18.2 12.8 17 12 16.2L10.6 14.8L15.9 9.4L17.3 10.8C18.1 11.6 19.3 11.6 20.1 10.8L23 8L15.9 .9M18.7 9.4L14.5 5.2L15.9 3.8L20.1 8L18.7 9.4Z'
  }));
});