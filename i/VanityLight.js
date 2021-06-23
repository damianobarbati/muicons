import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22 20H16C16 18.34 17.34 13 19 13S22 18.34 22 20M12 13C10.34 13 9 18.34 9 20H15C15 18.34 13.66 13 12 13M5 13C3.34 13 2 18.34 2 20H8C8 18.34 6.66 13 5 13M14.82 6C14.26 4.44 12.53 3.64 11 4.2C10.14 4.5 9.5 5.17 9.18 6H2V8H4V12H6V8H9.18C9.5 8.85 10.15 9.5 11 9.82V12H13V9.82C13.85 9.5 14.5 8.85 14.82 8H18V12H20V8H22V6H14.82Z'
  }));
});