import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21.5 5H19.5C19.5 9.14 16.14 12.5 12 12.5C7.86 12.5 4.5 9.14 4.5 5H2.5C2.55 10.11 6.59 14.29 11.7 14.5C11.1 15.4 10 17.2 10 18C10 20.67 14 20.67 14 18C14 17.2 12.9 15.4 12.3 14.5C17.41 14.29 21.45 10.11 21.5 5Z'
  }));
});