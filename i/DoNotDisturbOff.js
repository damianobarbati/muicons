import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17,11V13H15.54L20.22,17.68C21.34,16.07 22,14.11 22,12A10,10 0 0,0 12,2C9.89,2 7.93,2.66 6.32,3.78L13.54,11H17M2.27,2.27L1,3.54L3.78,6.32C2.66,7.93 2,9.89 2,12A10,10 0 0,0 12,22C14.11,22 16.07,21.34 17.68,20.22L20.46,23L21.73,21.73L2.27,2.27M7,13V11H8.46L10.46,13H7Z'
  }));
});