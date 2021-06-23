import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M3 4H17C18.11 4 19 4.89 19 6V18C19 19.11 18.11 20 17 20H3C1.9 20 1 19.11 1 18V6C1 4.89 1.9 4 3 4M3 8V12H9V8H3M11 8V12H17V8H11M3 14V18H9V14H3M11 14V18H17V14H11M23 7H21V13H23V7M23 15H21V17H23V15Z'
  }));
});