import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21.7 14.4L20.7 15.4L18.6 13.3L19.6 12.3C19.8 12.1 20.2 12.1 20.4 12.3L21.7 13.6C21.9 13.8 21.9 14.1 21.7 14.4M12 19.9L18.1 13.8L20.2 15.9L14.1 22H12V19.9M10 19.1L21 8.1V5L12 1L3 5V11C3 15.8 5.9 20.3 10 22.3V19.1Z'
  }));
});