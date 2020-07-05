import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M19 5H16C16 3.34 14.21 2 12 2C9.79 2 8 3.34 8 5H5C4.45 5 4 5.45 4 6S4.45 7 5 7V14C5 15.11 5.9 16 7 16H17C18.11 16 19 15.11 19 14V7C19.55 7 20 6.55 20 6S19.55 5 19 5M17 14H7V7H17V14M15.86 8C15.94 8.32 16 8.65 16 9C16 11.21 14.21 13 12 13S8 11.21 8 9C8 8.65 8.06 8.32 8.14 8H10.28C10.11 8.3 10 8.63 10 9C10 10.1 10.9 11 12 11S14 10.1 14 9C14 8.63 13.89 8.3 13.72 8H15.86M20 19V22H4V19C4 18.22 4.47 17.55 5.18 17H12C9.28 17 6.19 18.29 6 19V20H18V19C17.81 18.29 14.72 17 12 17H18.82C19.53 17.55 20 18.22 20 19Z'
  }));
});