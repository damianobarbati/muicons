import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M10,10.2L14,6.2L17.8,10L13.8,14L12.4,12.6L15,9.9L14.1,9L11.5,11.6L10,10.2M20.7,5.6L18.4,3.3C18.2,3.1 17.9,3 17.7,3C17.5,3 17.2,3.1 17,3.3L15.2,5.1L19,8.9L20.7,7C21.1,6.7 21.1,6 20.7,5.6M19,21.7L17.7,23L11.2,16.5L6.8,21H3V17.2L7.5,12.7L1,6.3L2.3,5L19,21.7M9.8,15.1L8.9,14.2L5,18.1V19H5.9L9.8,15.1Z'
  }));
});