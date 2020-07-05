import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2,18H9V6.13C7.27,6.57 6,8.14 6,10V11H8V17H6A2,2 0 0,1 4,15V10A6,6 0 0,1 10,4H11A6,6 0 0,1 17,10V12H18V9H20V12A2,2 0 0,1 18,14H17V15A2,2 0 0,1 15,17H13V11H15V10C15,8.14 13.73,6.57 12,6.13V18H22V20H2V18Z'
  }));
});