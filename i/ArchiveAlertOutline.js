import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2 4H18V7H2V4M7.5 11H12.5C12.78 11 13 11.22 13 11.5V13H7V11.5C7 11.22 7.22 11 7.5 11M20 13V7H22V13H20M20 17V15H22V17H20M3 8H5V18H15V8H17V20H3V8Z'
  }));
});