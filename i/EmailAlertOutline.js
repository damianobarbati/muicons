import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20 12V7H22V12H20M20 16V14H22V16H20M18 7C18 5.9 17.1 5 16 5H4C2.9 5 2 5.9 2 7V16C2 17.1 2.9 18 4 18H16C17.1 18 18 17.1 18 16V7M16 7L10 11L4 7H16M16 16H4V9L10 13L16 9V16Z'
  }));
});