import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M1.41 1.6L22.36 22.55L20.95 23.96L18 21H6V17H2V11C2 9.34 3.34 8 5 8L0 3L1.41 1.6M6 15V13H10L7 10H5C4.45 10 4 10.45 4 11V15H6M8 19H16L12 15H8V19M8 5V5.36L6 3.36V3H18V8H19C20.66 8 22 9.34 22 11V17H19.66L15.66 13H18V15L20 15V11C20 10.45 19.55 10 19 10H12.66L10.66 8H16V5H8M19 11.5C19 12.06 18.55 12.5 18 12.5C17.45 12.5 17 12.06 17 11.5C17 10.96 17.45 10.5 18 10.5C18.55 10.5 19 10.96 19 11.5Z'
  }));
});