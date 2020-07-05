import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2,4V20H10C13.43,20 16.5,17.84 17.6,14.6C18,14.8 18.5,15 19,15A3,3 0 0,0 22,12A3,3 0 0,0 19,9C18.5,9 18.03,9.15 17.6,9.4C16.5,6.16 13.43,4 10,4H2M4,6H10A6,6 0 0,1 16,12A6,6 0 0,1 10,18H4V6M19,11C19.5,11 20,11.5 20,12C20,12.5 19.5,13 19,13A1,1 0 0,1 18,12C18,11.5 18.5,11 19,11Z'
  }));
});