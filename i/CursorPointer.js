import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M13.75,10.19L14.38,10.32L18.55,12.4C19.25,12.63 19.71,13.32 19.65,14.06V14.19L19.65,14.32L18.75,20.44C18.69,20.87 18.5,21.27 18.15,21.55C17.84,21.85 17.43,22 17,22H10.12C9.63,22 9.18,21.82 8.85,21.47L2.86,15.5L3.76,14.5C4,14.25 4.38,14.11 4.74,14.13H5.03L9,15V4.5A2,2 0 0,1 11,2.5A2,2 0 0,1 13,4.5V10.19H13.75Z'
  }));
});