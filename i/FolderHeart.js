import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20 6H12L10 4H4C2.89 4 2 4.89 2 6V18C2 19.1 2.89 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6M18.42 13.5L15 17L11.59 13.5C11.22 13.12 11 12.62 11 12.05C11 10.92 11.9 10 13 10C13.54 10 14.05 10.23 14.42 10.61L15 11.2L15.59 10.6C15.95 10.23 16.46 10 17 10C18.1 10 19 10.92 19 12.05C19 12.61 18.78 13.13 18.42 13.5Z'
  }));
});