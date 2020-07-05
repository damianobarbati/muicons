import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17.75,22.16L15,19.16L16.16,18L17.75,19.59L21.34,16L22.5,17.41L17.75,22.16M12,3C16.42,3 20,4.79 20,7C20,9.21 16.42,11 12,11C7.58,11 4,9.21 4,7C4,4.79 7.58,3 12,3M4,9C4,11.21 7.58,13 12,13C16.42,13 20,11.21 20,9V12C20,12.43 19.87,12.84 19.62,13.22C19.1,13.08 18.56,13 18,13C15.79,13 13.85,14.2 12.81,16H12C7.58,16 4,14.21 4,12V9M4,14C4,16.21 7.58,18 12.08,18L12,19C12,19.7 12.12,20.37 12.34,21H12C7.58,21 4,19.21 4,17V14Z'
  }));
});