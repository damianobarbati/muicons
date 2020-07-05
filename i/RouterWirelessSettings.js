import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20.2,4.9C19,3.8 17.5,3.2 16,3.2C14.5,3.2 13,3.8 11.8,4.9L11,4.1C12.4,2.7 14.2,2 16,2C17.8,2 19.6,2.7 21,4.1L20.2,4.9M19.3,5.7L18.5,6.5C17.8,5.8 16.9,5.5 16,5.5C15.1,5.5 14.2,5.8 13.5,6.5L12.7,5.7C13.6,4.8 14.8,4.3 16,4.3C17.2,4.3 18.4,4.8 19.3,5.7M19,12A2,2 0 0,1 21,14V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V14A2,2 0 0,1 5,12H15V8H17V12H19M8,17V15H6V17H8M11.5,17V15H9.5V17H11.5M15,17V15H13V17H15M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22Z'
  }));
});