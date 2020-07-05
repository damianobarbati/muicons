import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12,10L16,14L20,10H16.9C16.44,5.44 14.42,2 12,2C10.12,2 8.47,4.08 7.62,7.16L9.37,8.17C9.87,5.69 10.86,4 12,4C13.4,4 14.57,6.55 14.91,10H12M1.11,6.87L13.89,14.25L13.96,13.46L10.5,10H10.54L2.11,5.13L1.11,6.87M21.89,18.87L22.89,17.13L17.88,14.24C17.79,14.97 17.67,15.67 17.5,16.34L21.89,18.87M12,22C14.3,22 16.23,18.9 16.82,14.68L16,15.5L14.87,14.37C14.5,17.63 13.35,20 12,20C10.42,20 9.12,16.73 9,12.58L7,11.43V12C7,17.5 9.24,22 12,22Z'
  }));
});