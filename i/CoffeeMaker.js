import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21 1V4H7V21H21V23H2V3C2 1.89 2.89 1 4 1H21M22 13V15C22 16.11 21.11 17 20 17H18C18 20 15 20 14 20S10 20 10 17V11H20C21.11 11 22 11.9 22 13M20 13H18V15H20V13M17 9L19 5H9L11 9H17Z'
  }));
});