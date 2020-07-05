import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M10.5 2C11.88 2 13 3.12 13 4.5V14H14V4.47C14 3.56 13.63 2.7 13 2.05C13.17 2 13.33 2 13.5 2C14.88 2 16 3.12 16 4.5V14H17V17C17 17.55 16.55 18 16 18H8C7.45 18 7 17.55 7 17V14H8V4.5C8 3.12 9.12 2 10.5 2M10.5 4C10.22 4 10 4.22 10 4.5V14H11V4.5C11 4.22 10.78 4 10.5 4M9 20H15V21C15 21.55 14.55 22 14 22H10C9.45 22 9 21.55 9 21V20Z'
  }));
});