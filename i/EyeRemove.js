import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22.54 16.88L20.41 19L22.54 21.12L21.12 22.54L19 20.41L16.88 22.54L15.47 21.12L17.59 19L15.47 16.88L16.88 15.47L19 17.59L21.12 15.47L22.54 16.88M12 9C10.34 9 9 10.34 9 12S10.34 15 12 15 15 13.66 15 12 13.66 9 12 9M12 17C9.24 17 7 14.76 7 12S9.24 7 12 7 17 9.24 17 12C17 12.5 16.9 13 16.77 13.43C17.46 13.16 18.21 13 19 13C20.12 13 21.17 13.32 22.07 13.85C22.43 13.27 22.74 12.65 23 12C21.27 7.61 17 4.5 12 4.5S2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C12.35 19.5 12.69 19.5 13.03 19.45C13 19.3 13 19.15 13 19C13 18.21 13.16 17.46 13.43 16.77C13 16.9 12.5 17 12 17Z'
  }));
});