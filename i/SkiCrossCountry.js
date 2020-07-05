import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15 1.2C16 1.2 16.8 2 16.8 3S16 4.8 15 4.8 13.2 4 13.2 3 14 1.2 15 1.2M11 23V21.7H9.3L11.7 14.9L14 18V21.7H13V23H20V21.7H15.8V16.5L13.3 12L14 9.2L15.1 11H20V9.1H16.4L14.4 5.8C14.1 5.3 13.5 5 12.9 5C12.7 5 12.6 5.1 12.4 5.1L7 6.8V12H8.8V8.3L11 7.7L7.4 21.7H4V23'
  }));
});