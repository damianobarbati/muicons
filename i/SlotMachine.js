import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M5 12L7 8V7H4V8H6L4 12M9 12L11 8V7H8V8H10L8 12M13 12L15 8V7H12V8H14L12 12M21 2C19.9 2 19 2.9 19 4C19 4.7 19.4 5.4 20 5.7V17H17V15C17.6 15 18 14.6 18 14V5C18 4.4 17.6 4 17 4H13.2C12.4 2.8 11 2 9.5 2S6.6 2.8 5.8 4H2C1.4 4 1 4.4 1 5V14C1 14.6 1.4 15 2 15V22H17V19H20C21.1 19 22 18.1 22 17V5.7C22.6 5.4 23 4.7 23 4C23 2.9 22.1 2 21 2M13 19H6V17H13V19M16 13H3V6H16V13Z'
  }));
});