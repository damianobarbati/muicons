import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22.5,2.09C21.6,3 20.13,3.73 18.31,4.25C16.59,2.84 14.39,2 12,2C9.61,2 7.41,2.84 5.69,4.25C3.87,3.73 2.4,3 1.5,2.09C1.53,3.72 2.35,5.21 3.72,6.4C2.63,8 2,9.92 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,9.92 21.37,8 20.28,6.4C21.65,5.21 22.47,3.72 22.5,2.09M7.5,8.5L10.5,10C10.5,10.8 9.8,11.5 9,11.5C8.2,11.5 7.5,10.8 7.5,10V8.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23M16.5,10C16.5,10.8 15.8,11.5 15,11.5C14.2,11.5 13.5,10.8 13.5,10L16.5,8.5V10Z'
  }));
});