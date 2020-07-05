import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M3,1H19A1,1 0 0,1 20,2V6A1,1 0 0,1 19,7H3A1,1 0 0,1 2,6V2A1,1 0 0,1 3,1M3,9H19A1,1 0 0,1 20,10V10.67L17.5,9.56L11,12.44V15H3A1,1 0 0,1 2,14V10A1,1 0 0,1 3,9M3,17H11C11.06,19.25 12,21.4 13.46,23H3A1,1 0 0,1 2,22V18A1,1 0 0,1 3,17M8,5H9V3H8V5M8,13H9V11H8V13M8,21H9V19H8V21M4,3V5H6V3H4M4,11V13H6V11H4M4,19V21H6V19H4M17.5,12L22,14V17C22,19.78 20.08,22.37 17.5,23C14.92,22.37 13,19.78 13,17V14L17.5,12M17.5,13.94L15,15.06V17.72C15,19.26 16.07,20.7 17.5,21.06V13.94Z'
  }));
});