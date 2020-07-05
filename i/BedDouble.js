import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M18 10V7A2 2 0 0 0 16 5H8A2 2 0 0 0 6 7V10A2 2 0 0 0 4 12V17H5.33L6 19H7L7.67 17H16.33L17 19H18L18.67 17H20V12A2 2 0 0 0 18 10M11 10H8V7H11M16 10H13V7H16Z'
  }));
});