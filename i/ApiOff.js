import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M7 11H5V9H7M14 7H11.38L13.29 9H14V9.75L15.87 11.71C15.95 11.5 16 11.25 16 11V9C16 7.9 15.11 7 14 7M4.45 2.62L3 4L5.86 7H5C3.9 7 3 7.9 3 9V17H5V13H7V17H9V10.3L10 11.34V17H12V13.45L19.55 21.38L21 20M20.9 17H21V15H20V9H21V7H17V9H18V13.95Z'
  }));
});