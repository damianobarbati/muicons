import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M9 7H11L12 9.5L13 7H15L13 12L15 17H13L12 14.5L11 17H9L11 12L9 7M16 7H18V15H22V17H16V7M8 15C8 16.11 7.11 17 6 17H2V15H6V13H4V11H6V9H2V7H6C7.1 7 8 7.89 8 9V10.5C8 11.33 7.33 12 6.5 12C7.33 12 8 12.67 8 13.5V15Z'
  }));
});