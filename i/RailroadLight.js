import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17.67,10.5C16.4,10.5 15.27,11.3 14.85,12.5H13.17V7.77L16.66,9.86L17.66,8.14L14.11,6L17.68,3.86L16.68,2.14L13.17,4.23V2H11.17V4.23L7.68,2.14L6.68,3.86L10.23,6L6.66,8.14L7.66,9.86L11.17,7.77V12.5H9.5C8.36,9.32 3.66,10.13 3.66,13.5C3.66,16.87 8.36,17.68 9.5,14.5H11.17V20A2,2 0 0,0 9.17,22H15.17A2,2 0 0,0 13.17,20V14.5H14.85C15.66,16.8 18.73,17.22 20.13,15.23C21.53,13.24 20.1,10.5 17.67,10.5M6.67,14.5C5.78,14.5 5.33,13.42 5.96,12.79C6.59,12.16 7.67,12.61 7.67,13.5A1,1 0 0,1 6.67,14.5M17.67,14.5C16.78,14.5 16.33,13.42 16.96,12.79C17.59,12.16 18.67,12.61 18.67,13.5A1,1 0 0,1 17.67,14.5Z'
  }));
});