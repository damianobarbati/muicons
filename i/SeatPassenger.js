import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M9 19H15V21H9C6.24 21 4 18.76 4 16V7H6V16C6 17.66 7.34 19 9 19M10.42 5.41C11.2 4.63 11.2 3.36 10.42 2.58C9.64 1.8 8.37 1.8 7.59 2.58C6.81 3.36 6.81 4.63 7.59 5.41C8.37 6.2 9.63 6.2 10.42 5.41M11.5 9C11.5 7.9 10.6 7 9.5 7H9C7.9 7 7 7.9 7 9V15C7 16.66 8.34 18 10 18H15.07L18.57 21.5L20 20.07L14.93 15H11.5L11.5 9Z'
  }));
});