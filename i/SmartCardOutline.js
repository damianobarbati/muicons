import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22 3H2A2.07 2.07 0 0 0 0 5V19A2.07 2.07 0 0 0 2 21H22A2.07 2.07 0 0 0 24 19V5A2.07 2.07 0 0 0 22 3M22 19H2V5H22M14 17V15.75C14 14.09 10.66 13.25 9 13.25S4 14.09 4 15.75V17H14M9 7A2.5 2.5 0 1 0 11.5 9.5A2.5 2.5 0 0 0 9 7M15 10V13H19V10H15'
  }));
});