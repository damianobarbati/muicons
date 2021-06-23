import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20.84 22.73L16.74 18.63C16.55 18.85 16.29 19 16 19H12C11.42 19 11 18.55 11 18V16C9.37 14.8 8.71 12.82 9.1 11L7.5 9.39C7.17 10.2 6.97 11.08 7 12C6.97 12.68 7.07 13.35 7.28 14H7C6.42 14 6 13.55 6 13V11C5.3 10.5 4.77 9.81 4.43 9.04C4 8.05 3.91 7 4.12 6L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M13.58 5C12.46 2.47 9.5 1.33 7 2.45C6.68 2.58 6.39 2.75 6.13 2.93L9.67 6.47C10.76 5.63 12.1 5.08 13.58 5M18.06 14.86C19.6 12.66 19.14 9.62 17 8C15.2 6.67 12.84 6.72 11.12 7.92L18.06 14.86M12 21C12 21.55 12.42 22 13 22H15C15.53 22 16 21.55 16 21V20H12V21M7 15V16C7 16.55 7.42 17 8 17H9V16.88C8.43 16.33 8 15.7 7.66 15H7Z'
  }));
});