import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M8.11,1.75C9.3,1.25 10.62,1 12,1C18.08,1 23,5.92 23,12C23,18.08 18.08,23 12,23C5.92,23 1,18.08 1,12C1,10.62 1.25,9.3 1.72,8.08C2.24,8.61 2.83,8.96 3.45,9.18C3.16,10.07 3,11 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3C11,3 10.07,3.16 9.18,3.45C8.96,2.83 8.61,2.24 8.11,1.75M4.93,2.93C6.03,2.93 6.93,3.82 6.93,4.93A2,2 0 0,1 4.93,6.93C3.82,6.93 2.93,6.03 2.93,4.93C2.93,3.82 3.82,2.93 4.93,2.93M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7Z'
  }));
});