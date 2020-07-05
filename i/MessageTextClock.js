import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22 12.41V4C22 2.9 21.11 2 20 2H4C2.9 2 2 2.9 2 4V22L6 18H9.29C10.15 20.89 12.83 23 16 23C19.86 23 23 19.87 23 16C23 14.69 22.63 13.46 22 12.41M6 6H18V8H6V6M16 9C14.1 9 12.37 9.77 11.11 11H6V9H16M6 12H10.26C9.84 12.6 9.5 13.28 9.3 14H6V12M16 20.85C13.32 20.85 11.15 18.68 11.15 16S13.32 11.15 16 11.15C18.67 11.15 20.85 13.32 20.85 16S18.67 20.85 16 20.85M16.5 15.82L18.94 17.23L18.19 18.53L15 16.69V13H16.5V15.82Z'
  }));
});