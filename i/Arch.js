import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12,2C11.11,4.18 10.57,5.61 9.58,7.73C10.19,8.37 10.93,9.12 12.14,9.97C10.84,9.43 9.95,8.9 9.29,8.34C8,11 6.03,14.75 2,22C5.17,20.17 7.63,19.04 9.92,18.61C9.82,18.19 9.76,17.73 9.77,17.25V17.15C9.82,15.12 10.88,13.56 12.13,13.67C13.38,13.77 14.35,15.5 14.3,17.54C14.29,17.92 14.25,18.29 14.18,18.63C16.44,19.07 18.87,20.19 22,22C21.38,20.86 20.83,19.84 20.31,18.87C19.5,18.23 18.61,17.39 16.85,16.5C18.06,16.8 18.93,17.16 19.61,17.57C14.26,7.62 13.83,6.3 12,2Z'
  }));
});