import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M8.5 4A2 2 0 0 1 6.5 6A2 2 0 0 1 4.5 4A2 2 0 0 1 6.5 2A2 2 0 0 1 8.5 4M5 7C3.89 7 3 7.89 3 9V15H5V22H8.61A7 7 0 0 1 6.5 17A7 7 0 0 1 10 10.95V9C10 7.89 9.11 7 8 7M13 8V16H18.5L21.2 19.6L22.8 18.4L19.5 14H15V8M12 12.23A5 5 0 0 0 8.5 17A5 5 0 0 0 13.5 22A5 5 0 0 0 18.5 17H16.5A3 3 0 0 1 13.5 20A3 3 0 0 1 10.5 17A3 3 0 0 1 12 14.41Z'
  }));
});