import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M9 13.33C9.81 14.9 11.1 16.19 12.67 17L13.89 15.77C14.05 15.61 14.27 15.57 14.46 15.63C15.08 15.83 15.75 15.95 16.44 15.95C16.75 15.95 17 16.19 17 16.5V18.45C17 18.75 16.75 19 16.44 19C11.23 19 7 14.77 7 9.56C7 9.25 7.25 9 7.56 9H9.5C9.81 9 10.06 9.25 10.06 9.56C10.06 10.25 10.17 10.92 10.37 11.54C10.43 11.73 10.39 11.95 10.23 12.11L9 13.33Z'
  }));
});