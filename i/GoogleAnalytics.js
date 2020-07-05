import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15.86 4.39V19.39C15.86 21.06 17 22 18.25 22C19.39 22 20.64 21.21 20.64 19.39V4.5C20.64 2.96 19.5 2 18.25 2S15.86 3.06 15.86 4.39M9.61 12V19.39C9.61 21.07 10.77 22 12 22C13.14 22 14.39 21.21 14.39 19.39V12.11C14.39 10.57 13.25 9.61 12 9.61S9.61 10.67 9.61 12M5.75 17.23C7.07 17.23 8.14 18.3 8.14 19.61C8.14 20.93 7.07 22 5.75 22S3.36 20.93 3.36 19.61C3.36 18.3 4.43 17.23 5.75 17.23Z'
  }));
});