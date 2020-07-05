import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M14,4V8H6V4H14M15,13A1,1 0 0,0 16,12A1,1 0 0,0 15,11A1,1 0 0,0 14,12A1,1 0 0,0 15,13M13,19V15H7V19H13M15,9A3,3 0 0,1 18,12V17H15V21H5V17H2V12A3,3 0 0,1 5,9H15M22,7V12H20V7H22M22,14V16H20V14H22Z'
  }));
});