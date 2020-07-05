import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M14,2L11,3.5V19.94C7,19.5 4,17.46 4,15C4,12.75 6.5,10.85 10,10.22V8.19C4.86,8.88 1,11.66 1,15C1,18.56 5.36,21.5 11,21.94C11.03,21.94 11.06,21.94 11.09,21.94L14,20.5V2M15,8.19V10.22C16.15,10.43 17.18,10.77 18.06,11.22L16.5,12L23,13.5L22.5,9L20.5,10C19,9.12 17.12,8.47 15,8.19Z'
  }));
});