import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17,4A5,5 0 0,1 22,9C22,10.38 21.44,11.63 20.54,12.54L12,21.07L3.46,12.54C2.56,11.63 2,10.38 2,9A5,5 0 0,1 7,4C8.38,4 9.63,4.56 10.54,5.46L12,6.93L13.46,5.46C14.37,4.56 15.62,4 17,4M15.59,7.59L9.17,14L12,16.83L18.41,10.41C18.78,10.05 19,9.55 19,9A2,2 0 0,0 17,7C16.45,7 15.95,7.22 15.59,7.59M8.41,7.59C8.05,7.22 7.55,7 7,7A2,2 0 0,0 5,9C5,9.55 5.22,10.05 5.59,10.41L7.05,11.88L9.88,9.05L8.41,7.59Z'
  }));
});