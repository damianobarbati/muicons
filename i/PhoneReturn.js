import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21,6V11H19.5V7.5H13.87L16.3,9.93L15.24,11L11,6.75L15.24,2.5L16.3,3.57L13.87,6H21M8.82,8.58C9.08,8.32 9.17,7.93 9.06,7.58C8.69,6.42 8.5,5.22 8.5,4A1,1 0 0,0 7.5,3H4A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5C18.79,15.5 17.58,15.31 16.43,14.93C16.08,14.82 15.69,14.91 15.43,15.17L13.23,17.37C10.39,15.92 8.09,13.62 6.64,10.78L8.82,8.58Z'
  }));
});