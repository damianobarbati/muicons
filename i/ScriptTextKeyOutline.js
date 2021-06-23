import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M11.4 22H5C3.3 22 2 20.7 2 19V18H11.4C11.1 18.6 11 19.3 11 20S11.2 21.4 11.4 22M19 2H8C6.3 2 5 3.3 5 5V16H7V5C7 4.4 7.4 4 8 4H16V15C16.7 15 17.4 15.2 18 15.4V5C18 4.4 18.4 4 19 4S20 4.4 20 5V6H22V5C22 3.3 20.7 2 19 2M9 8H14V6H9V8M9 16H13C13.3 15.8 13.6 15.6 14 15.4V14H9V16M9 12H14V10H9V12M23 19V21H22V23H20V21H18.8C18.4 22.2 17.3 23 16 23C14.3 23 13 21.7 13 20S14.3 17 16 17C17.3 17 18.4 17.8 18.8 19H23M17.3 20C17.3 19.3 16.7 18.7 16 18.7S14.7 19.3 14.7 20 15.3 21.3 16 21.3 17.3 20.7 17.3 20Z'
  }));
});