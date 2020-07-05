import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15.4 5.4C15.4 4.3 16.3 3.4 17.4 3.4C18.5 3.4 19.4 4.3 19.4 5.4C19.4 6.5 18.5 7.4 17.4 7.4C16.3 7.4 15.4 6.5 15.4 5.4M22 19.2C21.4 19.8 20.8 20.2 20.1 20.5C19.4 20.8 18.6 21 17.8 21H6.2C5.4 21 4.6 20.8 3.9 20.5C3.2 20.2 2.6 19.8 2 19.2L2.9 18.3C3.3 18.7 3.8 19.1 4.4 19.3C4.9 19.6 5.4 19.7 5.9 19.7L9.7 16L8.5 12.5C8.3 11.9 8.6 11.4 9.1 11L11 9H6V7H14C14.5 7 14.7 7.1 15 7.3L17.3 9.5C18.3 10.5 19.5 11 20.9 11L21 13.1C19.1 13.1 17.4 12.4 15.9 11L15.2 10.3L12.9 12.7L15 15V19.7H17.8C18.4 19.7 19 19.6 19.6 19.3C20.2 19.1 20.7 18.7 21.1 18.3L22 19.2M8.8 19.7H13V15.8L11.7 14.6V16.8L8.8 19.7Z'
  }));
});