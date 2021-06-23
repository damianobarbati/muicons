import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M23 10L22.96 10.29L20.9 17.7L12.2 9H15L12 4.74L10.32 7.12L8.89 5.69L11.18 2.43C11.36 2.17 11.66 2 12 2S12.65 2.17 12.83 2.44L17.42 9H22C22.55 9 23 9.45 23 10M22.11 21.46L20.84 22.73L19.03 20.92C18.86 20.97 18.68 21 18.5 21H5.5C4.72 21 4.04 20.55 3.71 19.9L1.1 10.44L1 10C1 9.45 1.45 9 2 9H6.58L6.8 8.69L1.11 3L2.39 1.73L22.11 21.46M13.85 15.74L11.26 13.15C10.5 13.44 10 14.16 10 15C10 16.11 10.9 17 12 17C12.84 17 13.56 16.5 13.85 15.74Z'
  }));
});