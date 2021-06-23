import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15 9H17V11H15V9M17 5H15V7H17V5M11 15H13V13H11V15M13 5H11V7H13V5M11 11H13V9H11V11M9 5H7V7H9V5M9 9H7V11H9V9M14.55 21H13V17.5H11V21H5V3H19V11.03C19.71 11.09 20.39 11.31 21 11.63V1H3V23H15.91C15.5 22.44 15 21.76 14.55 21M7 19H9V17H7V19M9 13H7V15H9V13M22 16.5C22 19.1 18.5 23 18.5 23S15 19.1 15 16.5C15 14.6 16.6 13 18.5 13S22 14.6 22 16.5M19.7 16.6C19.7 16 19.1 15.4 18.5 15.4S17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8S19.8 17.2 19.7 16.6Z'
  }));
});