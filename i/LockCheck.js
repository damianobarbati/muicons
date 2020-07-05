import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M18 8C19.1 8 20 8.89 20 10V20C20 21.1 19.1 22 18 22H6C4.89 22 4 21.1 4 20V10C4 8.89 4.89 8 6 8H7V6C7 3.24 9.24 .998 12 .998C14.76 .998 17 3.24 17 6V8H18M12 3C10.34 3 9 4.34 9 6V8H15V6C15 4.34 13.66 3 12 3M11 19L17.25 12.76L15.84 11.35L11 16.18L8.41 13.6L7 15L11 19Z'
  }));
});