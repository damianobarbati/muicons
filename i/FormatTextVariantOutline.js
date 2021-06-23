import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M11 3C10.18 3 9.44 3.5 9.14 4.27L3.64 18.27C3.12 19.58 4.09 21 5.5 21H7.75C8.59 21 9.33 20.5 9.62 19.7L10.26 18H13.74L14.38 19.7C14.67 20.5 15.42 21 16.25 21H18.5C19.91 21 20.88 19.58 20.36 18.27L14.86 4.27C14.56 3.5 13.82 3 13 3M11 5H13L18.5 19H16.25L15.12 16H8.87L7.75 19H5.5M12 7.67L9.62 14H14.37Z'
  }));
});