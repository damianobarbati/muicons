import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22.25,14.29L21.56,16.18L9.2,11.71L11.28,6.05L19.84,9.14C21.94,9.9 23,12.2 22.25,14.29M1.5,12.14L8,14.5V19H16V17.37L20.5,19L21.21,17.11L2.19,10.25M7.3,10.2C8.79,9.5 9.42,7.69 8.71,6.2C8,4.71 6.2,4.08 4.7,4.8C3.21,5.5 2.58,7.3 3.3,8.8C4,10.29 5.8,10.92 7.3,10.2Z'
  }));
});