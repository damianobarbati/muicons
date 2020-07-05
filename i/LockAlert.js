import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M6 7C6 4.79 7.79 3 10 3C12.21 3 14 4.79 14 7V9H15C16.11 9 17 9.9 17 11V19C17 20.11 16.11 21 15 21H5C3.9 21 3 20.11 3 19V11C3 9.9 3.9 9 5 9H6V7M12 9V7C12 5.9 11.11 5 10 5C8.9 5 8 5.9 8 7V9H12M19 9H21V14H19V9M19 16H21V18H19V16M10 13C8.9 13 8 13.9 8 15C8 16.11 8.9 17 10 17C11.11 17 12 16.11 12 15C12 13.9 11.11 13 10 13Z'
  }));
});