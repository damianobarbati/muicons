import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2 14H4V17H9V14L13 18L9 22V19H4V22H2V14M19 19V8H5V12H3L3 5C3 3.89 3.89 3 5 3H6V.998H8V3H16V.998H18V3H19C20.1 3 21 3.89 21 5V19C21 20.1 20.1 21 19 21L12.83 21L14.83 19L19 19Z'
  }));
});