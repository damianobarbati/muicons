import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22.1 21.5L2.4 1.7L1.1 3L8.9 10.8C5.4 12.9 3.7 16.4 3 20C5.3 16.7 8.6 15.1 13 14.9L14 15.9V19L15.6 17.4L20.8 22.7M8.3 13.8C8.94 13.22 9.65 12.71 10.4 12.3L11.3 13.1M14.2 11L12.5 9.3L14 9V5L21 12L18.1 14.9L16.7 13.5L18.2 12L16 9.8V10.7'
  }));
});