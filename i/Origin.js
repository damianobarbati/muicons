import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12,2.13C12,2.23 11.95,2.33 11.89,2.41C11.5,3 11.16,3.64 11.04,4.33L11,4.56L12,4.5A7.5,7.5 0 0,1 19.5,12C19.5,13.62 19,15.11 18.12,16.34C16.73,18.68 14.72,20.65 12.34,21.97C12.25,22 12.12,22 12.06,21.93C12,21.83 12,21.7 12.09,21.61C12.47,21.09 12.73,20.5 12.87,19.85L12.93,19.44L12,19.5A7.5,7.5 0 0,1 4.5,12C4.5,10.39 5,8.89 5.88,7.67C7.26,5.32 9.28,3.34 11.67,2C11.78,1.95 11.94,2 12,2.13M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z'
  }));
});