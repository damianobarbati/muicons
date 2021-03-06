import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20.8 22.7L16 17.9V21.8C16 21.8 8 20 8 11V10 9.9L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M13.8 9L12 8L11.5 8.3L16 12.8V10C16 9.2 15.6 8.6 15 8.2L13.8 9M12 6.5L13.8 7.5L15.3 6.6C14.9 5.6 14.1 4.9 13.1 4.6C12.8 3.2 11.5 2 10 2V4C10.4 4 10.8 4.3 10.9 4.7C10.2 4.9 9.6 5.4 9.2 6L10.6 7.4L12 6.5Z'
  }));
});