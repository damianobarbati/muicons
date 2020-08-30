import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M13 4H11V2H5V4H3C2.4 4 2 4.4 2 5V21C2 21.6 2.4 22 3 22H13C13.6 22 14 21.6 14 21V5C14 4.4 13.6 4 13 4M9 18H7V16H9V18M9 14H7V8H9V14M20.1 4.9L18.7 6.3C21.8 9.4 21.8 14.5 18.7 17.6L20.1 19C24 15.2 24 8.8 20.1 4.9M17.2 7.8L15.8 9.2C17.4 10.8 17.4 13.3 15.8 14.9L17.2 16.3C19.6 13.9 19.6 10.1 17.2 7.8Z'
  }));
});