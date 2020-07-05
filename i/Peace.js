import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,14.41V19.93C9.58,19.75 8.23,19.19 7.1,18.31L11,14.41M13,14.41L16.9,18.31C15.77,19.19 14.42,19.75 13,19.93V14.41M4,12C4,7.97 7,4.57 11,4.07V11.59L5.69,16.9C4.59,15.5 4,13.78 4,12M18.31,16.9L13,11.59V4.07C17,4.57 20,7.97 20,12C20,13.78 19.41,15.5 18.31,16.9Z'
  }));
});