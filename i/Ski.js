import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15.3 18.3L17 12.9L18.4 13.3L16.7 18.7L15.3 18.3M17.3 5.2C18.2 5.2 19 4.4 19 3.5S18.3 1.8 17.3 1.8C16.4 1.8 15.6 2.6 15.6 3.5S16.4 5.2 17.3 5.2M21.3 19.8C20.7 20.1 20.1 20.4 19.4 20.5C18.7 20.6 18 20.6 17.3 20.4L11 18.5L13.4 11.7L10.9 8.7L13.8 7.1C13.8 7.1 14.9 10 15 10.3S15.3 10.8 15.6 10.9L19.7 12.1L20.2 10.3L19.3 9.9L19.9 7.8L18.5 7.4L18 9.4L16.8 8.9L15.4 5C15 4.2 14 3.8 13.1 4.2L8.5 6.7C7.6 7.2 7.3 8.3 7.8 9.1C7.9 9.3 10.8 12.3 10.8 12.3L9.1 18L2.3 16L2 17.3L16.9 21.7C18.6 22.2 20.4 22 22 21.1L21.3 19.8Z'
  }));
});