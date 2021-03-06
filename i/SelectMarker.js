import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M4 3H5V5H3V4C3 3.45 3.45 3 4 3M20 3C20.55 3 21 3.45 21 4V5H19V3H20M15 5V3H17V5H15M11 5V3H13V5H11M7 5V3H9V5H7M11 21V19H13V21H11M7 21V19H9V21H7M4 21C3.45 21 3 20.55 3 20V19H5V21H4M3 15H5V17H3V15M3 11H5V13H3V11M3 7H5V9H3V7M21 7V9H19V7H21M19.5 13C21.4 13 23 14.6 23 16.5C23 19.1 19.5 23 19.5 23C19.5 23 16 19.1 16 16.5C16 14.6 17.6 13 19.5 13M19.5 17.8C20.2 17.8 20.8 17.2 20.7 16.6C20.7 16 20.1 15.4 19.5 15.4C18.9 15.4 18.3 15.9 18.3 16.6C18.3 17.2 18.8 17.8 19.5 17.8Z'
  }));
});