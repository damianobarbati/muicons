import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17,12H20A2,2 0 0,1 22,14V17A2,2 0 0,1 20,19H17A2,2 0 0,1 15,17V14A2,2 0 0,1 17,12M17,14V17H20V14H17M2,7H7A2,2 0 0,1 9,9V11A2,2 0 0,1 7,13A2,2 0 0,1 9,15V17A2,2 0 0,1 7,19H2V13L2,7M4,9V12H7V9H4M4,17H7V14H4V17M11,13H13V19H11V13M11,9H13V11H11V9Z'
  }));
});