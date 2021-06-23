import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M19 5.3C20.2 5.8 21 7.1 21 8.5C21 15.4 15.4 21 8.5 21C7.1 21 5.9 20.2 5.3 19L3 20.5V14.5L5.3 16C5.9 14.8 7.1 14 8.5 14C11.5 14 14 11.5 14 8.5C14 7.1 14.8 5.9 16 5.3L14.5 3H20.5L19 5.3Z'
  }));
});