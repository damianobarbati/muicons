import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M4,3A2,2 0 0,0 2,5V19A2,2 0 0,0 4,21H12A2,2 0 0,0 14,19V5A2,2 0 0,0 12,3H4M8,5A2,2 0 0,1 10,7A2,2 0 0,1 8,9A2,2 0 0,1 6,7A2,2 0 0,1 8,5M19,7V10.79L16.71,8.5L16,9.21L18.79,12L16,14.79L16.71,15.5L19,13.21V17H19.5L22.35,14.14L20.21,12L22.35,9.85L19.5,7H19M20,8.91L20.94,9.85L20,10.79V8.91M8,11A4,4 0 0,1 12,15A4,4 0 0,1 8,19A4,4 0 0,1 4,15A4,4 0 0,1 8,11M8,13A2,2 0 0,0 6,15A2,2 0 0,0 8,17A2,2 0 0,0 10,15A2,2 0 0,0 8,13M20,13.21L20.94,14.14L20,15.08V13.21Z'
  }));
});