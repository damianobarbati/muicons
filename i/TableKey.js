import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M16.83 17C16.42 15.83 15.31 15 14 15C12.34 15 11 16.34 11 18S12.34 21 14 21C15.31 21 16.42 20.17 16.83 19H19V21H21V19H22V17H16.83M14 19C13.45 19 13 18.55 13 18S13.45 17 14 17 15 17.45 15 18 14.55 19 14 19M9 18H4V14H10V15.03C10.91 13.81 12.36 13 14 13C15.1 13 16.14 13.37 17 14H18V15L18 15H20V6C20 4.89 19.11 4 18 4H4C2.9 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H9.42C9.15 19.39 9 18.71 9 18M12 8H18V12H12V8M4 8H10V12H4V8Z'
  }));
});