import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M9 18C7.34 18 6 16.66 6 15C6 13 9 9.63 9 9.63S12 13 12 15C12 16.66 10.66 18 9 18M14 4V20H4V4H2V20C2 21.11 2.89 22 4 22H14C15.11 22 16 21.11 16 20V4H14M10 6V2H8V6H5V8H13V6H10M21 17.5V5.5C21 4.67 20.33 4 19.5 4S18 4.67 18 5.5V17.5C17.37 17.97 17 18.71 17 19.5C17 20.88 18.12 22 19.5 22S22 20.88 22 19.5C22 18.71 21.63 18 21 17.5M20 13H19V6H20V13Z'
  }));
});