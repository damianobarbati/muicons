import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22 7V12H20V7H22M20 16H22V14H20V16M18 8V18C18 19.11 17.11 20 16 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.9 4 4 4H14L18 8M16 8.83L13.17 6H4V18H16V8.83M12 7H5V10H12V7M9.75 12.25C8.5 12.25 7.5 13.26 7.5 14.5S8.5 16.76 9.75 16.76 12 15.75 12 14.5 11 12.25 9.75 12.25Z'
  }));
});