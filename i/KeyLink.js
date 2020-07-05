import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M6.5 3C4 3 2 5 2 7.5S4 12 6.5 12C8.46 12 10.13 10.75 10.74 9H15V12H18V9H22V6H10.74C10.13 4.25 8.46 3 6.5 3M6.5 6C7.33 6 8 6.67 8 7.5S7.33 9 6.5 9 5 8.33 5 7.5 5.67 6 6.5 6M10 14C8.39 14 6 15.07 6 18C6 20.94 8.39 22 10 22H11V20H10C9.67 20 8 19.9 8 18C8 16.17 9.54 16 10 16H11V14M13 14V16H14C14.33 16 16 16.1 16 18C16 19.83 14.46 20 14 20H13V22H14C15.61 22 18 20.94 18 18C18 15.07 15.61 14 14 14M9 17V19H15V17Z'
  }));
});