import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21 4.5V10.5C21 11.2 20.5 11.9 19.8 12V17.3C19.8 18.6 19 21.1 16 21.1H14.5C14.9 20.7 15.3 20.2 15.5 19.6H16C18.1 19.6 18.2 17.7 18.2 17.4V12C17.5 11.9 17 11.3 17 10.5V4.5C17 3.7 17.7 3 18.5 3H19.5C20.3 3 21 3.7 21 4.5M14.8 18.2C14.8 19.7 13.6 21 12 21H8C5 21 4.2 18.5 4.2 17.2V12C3.5 11.9 3 11.2 3 10.5V4.5C3 3.7 3.7 3 4.5 3H5.5C6.3 3 7 3.7 7 4.5V10.5C7 11.2 6.5 11.9 5.8 12V17.3C5.8 17.7 5.9 19.5 8 19.5H9.6C9.4 19.1 9.3 18.7 9.3 18.3V8.3C9.3 6.8 10.5 5.5 12.1 5.5S14.8 6.7 14.8 8.3M13.2 8.2C13.2 7.6 12.7 7 12 7S10.8 7.6 10.8 8.2V18.2C10.8 18.9 11.4 19.4 12 19.4S13.2 18.8 13.2 18.2V8.2Z'
  }));
});