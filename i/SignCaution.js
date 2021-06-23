import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2,3H22V13H18V21H16V13H8V21H6V13H2V3M18.97,11L20,9.97V7.15L16.15,11H18.97M13.32,11L19.32,5H16.5L10.5,11H13.32M7.66,11L13.66,5H10.83L4.83,11H7.66M5.18,5L4,6.18V9L8,5H5.18Z'
  }));
});