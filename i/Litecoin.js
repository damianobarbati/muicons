import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12.55,15.92L13.16,13.78L14.81,13.19L16.25,7.63L14.56,8.31L16.25,2H8L5.38,11.77L3.72,12.34L2.22,17.91L4,17.27L2.66,22H20.16L21.78,15.92H12.55M19.39,21H4L5.46,15.65L3.72,16.3L4.58,13.11L6.24,12.54L8.74,3H15L13.13,10L14.83,9.3L14,12.42L12.33,13L11.22,16.91H20.5L19.39,21Z'
  }));
});