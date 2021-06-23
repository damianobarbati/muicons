import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2.75,7L4.03,5.75L13.26,15L20,21.72L18.73,23L15.73,20H4V17C4,15.14 6.61,13.92 9.09,13.36L2.75,7M20,17V19.18L18.1,17.28V17C18.1,16.74 17.6,16.35 16.8,16L14,13.18C16.71,13.63 20,14.91 20,17M5.9,17V18.1H13.83L10.72,15C8.19,15.3 5.9,16.45 5.9,17M12,4A4,4 0 0,1 16,8C16,9.95 14.6,11.58 12.75,11.93L8.07,7.25C8.42,5.4 10.05,4 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6Z'
  }));
});