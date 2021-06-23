import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21 13H3A1 1 0 0 0 2 14V20A1 1 0 0 0 3 21H21A1 1 0 0 0 22 20V14A1 1 0 0 0 21 13M20 19H4V15H20M21 3H3A1 1 0 0 0 2 4V10A1 1 0 0 0 3 11H21A1 1 0 0 0 22 10V4A1 1 0 0 0 21 3M20 9H4V5H20Z'
  }));
});