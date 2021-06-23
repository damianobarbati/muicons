import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M5,9H9V11H5V9M22,9V18A2,2 0 0,1 20,20H2V9A5,5 0 0,1 7,4H17A5,5 0 0,1 22,9M10,9A3,3 0 0,0 7,6A3,3 0 0,0 4,9V18H10V9M16,7H12V13H14V9H16V7Z'
  }));
});