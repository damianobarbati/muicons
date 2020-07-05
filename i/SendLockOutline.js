import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M23 18V17.5C23 16.12 21.88 15 20.5 15S18 16.12 18 17.5V18C17.45 18 17 18.45 17 19V23C17 23.55 17.45 24 18 24H23C23.55 24 24 23.55 24 23V19C24 18.45 23.55 18 23 18M22 18H19V17.5C19 16.67 19.67 16 20.5 16S22 16.67 22 17.5V18M4 6.03L11.5 9.25L4 8.25L4 6.03M11.5 14.75L4 17.97V15.75L11.5 14.75M2 3L2 10L17 12L2 14L2 21L23 12L2 3Z'
  }));
});