import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M7.2 4L5.7 2.5C6.05 2.19 6.5 2 7 2H17C18.11 2 19 2.9 19 4V15.8L17 13.8V4H13V9.8L11 7.8V4H7.2M22.11 21.46L20.84 22.73L18.46 20.35C18.1 20.75 17.58 21 17 21V22H15V21H9V22H7V21C5.9 21 5 20.11 5 19V6.89L1.11 3L2.39 1.73L22.11 21.46M7 10H8.11L7 8.89V10M11 12.89L10 11.89V14H7V19H11V12.89M17 18.89L13 14.89V19H17V18.89Z'
  }));
});