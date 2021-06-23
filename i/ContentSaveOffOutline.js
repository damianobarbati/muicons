import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M8.2 5L6.2 3H17L21 7V17.8L19 15.8V7.83L16.17 5H8.2M15 10V6H9.2L13.2 10H15M22.11 21.46L20.84 22.73L19.1 21C19.07 21 19.03 21 19 21H5C3.89 21 3 20.1 3 19V5C3 4.97 3 4.93 3 4.9L1.11 3L2.39 1.73L22.11 21.46M17.11 19L14.59 16.5C14.08 17.39 13.12 18 12 18C10.34 18 9 16.66 9 15C9 13.88 9.61 12.92 10.5 12.41L8.11 10H6V7.89L5 6.89V19H17.11Z'
  }));
});