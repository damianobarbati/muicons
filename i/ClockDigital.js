import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2,6A2,2 0 0,0 0,8V16A2,2 0 0,0 2,18H22A2,2 0 0,0 24,16V8A2,2 0 0,0 22,6M2,8H22V16H2M3,9V10.5H6.25L3,15H4.75L8,10.5V9M9.25,9V10.5H10.75V9M12,9V10.5H13.5V15H15V9M17,9A1,1 0 0,0 16,10V14A1,1 0 0,0 17,15H20A1,1 0 0,0 21,14V10A1,1 0 0,0 20,9M17.5,10.5H19.5V13.5H17.5M9.25,13.5V15H10.75V13.5'
  }));
});