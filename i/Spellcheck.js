import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21.59,11.59L13.5,19.68L9.83,16L8.42,17.41L13.5,22.5L23,13M6.43,11L8.5,5.5L10.57,11M12.45,16H14.54L9.43,3H7.57L2.46,16H4.55L5.67,13H11.31L12.45,16Z'
  }));
});