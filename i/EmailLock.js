import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20.5,0A2.5,2.5 0 0,1 23,2.5V3A1,1 0 0,1 24,4V8A1,1 0 0,1 23,9H18A1,1 0 0,1 17,8V4A1,1 0 0,1 18,3V2.5A2.5,2.5 0 0,1 20.5,0M12,11L4,6V8L12,13L16.18,10.39C16.69,10.77 17.32,11 18,11H22V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H15V8C15,8.36 15.06,8.7 15.18,9L12,11M20.5,1A1.5,1.5 0 0,0 19,2.5V3H22V2.5A1.5,1.5 0 0,0 20.5,1Z'
  }));
});