import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M18.11 14.91L8.2 5H10L12 2L14 5H16L14.37 9.9L17.79 6L18.79 7.73L22.39 7.96L20.79 11.19L21.79 13L18.11 14.91M2.39 1.73L1.11 3L5.45 7.34L5.21 7.77L1.61 8L3.21 11.27L2.21 13L8 16L7 18L11 17.25V21H13V17.25L15.91 17.8L20.84 22.73L22.11 21.46L2.39 1.73Z'
  }));
});