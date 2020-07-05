import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M10,14C8.89,14 8,13.1 8,12C8,10.89 8.89,10 10,10A2,2 0 0,1 12,12A2,2 0 0,1 10,14M10,4A8,8 0 0,0 2,12A8,8 0 0,0 10,20A8,8 0 0,0 18,12A8,8 0 0,0 10,4M20,12H22V7H20M20,16H22V14H20V16Z'
  }));
});