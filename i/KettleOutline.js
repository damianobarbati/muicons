import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12.5 3C7.8 3 4 5.7 4 9C4 10.2 4.5 11.3 5.4 12.3A6.8 6.8 0 0 0 4 16.5V20C4 21.1 4.9 22 6 22H19A2 2 0 0 0 21 20V16.5C21 15.3 20.7 14.1 20 13L22 11L19 8L16.9 10.1A9.2 9.2 0 0 0 7.6 10.4A2 2 0 0 1 7 9C7 7.2 9.5 5.7 12.5 5.7C13.9 5.7 15.3 6.1 16.3 6.7L18.3 4.7A10 10 0 0 0 12.5 3M12.5 11C16 11 19 14 19 16.5V20H6V16.5C6 14 9 11 12.5 11M13 12.5C10 12.5 8 14 8 17V18H10V17C10 16 10 13.5 13 12.5Z'
  }));
});