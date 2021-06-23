import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M8 5C8.8 5 9.5 5.7 9.5 6.5S8.8 8 8 8 6.5 7.3 6.5 6.5 7.2 5 8 5M11 14H9.5V19H6.5V14H5V11C5 9.9 5.9 9 7 9H9C10.1 9 11 9.9 11 11V14M15.9 19L13 14.2H18.8L15.9 19M13 10L16 5L19 10H13Z'
  }));
});