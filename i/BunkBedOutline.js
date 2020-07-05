import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M1 2H3V9H10V3H19C21.2 3 23 4.8 23 7V23H21V21H3V23H1V2M12 5V9H21V7C21 5.9 20.1 5 19 5H12M3 11V19H10V13H19C19.7 13 20.4 13.2 21 13.6V11H3M6.5 13C7.9 13 9 14.1 9 15.5S7.9 18 6.5 18 4 16.9 4 15.5 5.1 13 6.5 13M6.5 14.6C6 14.6 5.6 15 5.6 15.5S6 16.4 6.5 16.4 7.4 16 7.4 15.5 7 14.6 6.5 14.6M12 15V19H21V17C21 15.9 20.1 15 19 15H12M6.5 3C7.9 3 9 4.1 9 5.5S7.9 8 6.5 8 4 6.9 4 5.5 5.1 3 6.5 3M6.5 4.6C6 4.6 5.6 5 5.6 5.5S6 6.4 6.5 6.4 7.4 6 7.4 5.5 7 4.6 6.5 4.6Z'
  }));
});