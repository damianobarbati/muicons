import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M19.5,12.8V22H14.7V13.9C14.7,13.2 14.1,12.6 13.4,12.6H10.5C9.8,12.6 9.2,13.2 9.2,13.9V22H4.5V2H9.3V8.4C9.6,8.3 9.9,8.2 10.2,8.2H15C17.5,8.2 19.5,10.3 19.5,12.8Z'
  }));
});