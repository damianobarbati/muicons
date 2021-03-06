import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M23 18V20H15V18H23M13 19C13 19.7 13.13 20.37 13.35 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H15L21 9V13.35C20.37 13.13 19.7 13 19 13V12H12V5H5V19H13M14 10H19.5L14 4.5V10Z'
  }));
});