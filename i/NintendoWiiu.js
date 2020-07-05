import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2,15.96C2,18.19 3.54,19.5 5.79,19.5H18.57C20.47,19.5 22,18.2 22,16.32V6.97C22,5.83 21.15,4.6 20.11,4.6H17.15V12.3C17.15,18.14 6.97,18.09 6.97,12.41V4.5H4.72C3.26,4.5 2,5.41 2,6.85V15.96M9.34,11.23C9.34,15.74 14.66,15.09 14.66,11.94V4.5H9.34V11.23Z'
  }));
});