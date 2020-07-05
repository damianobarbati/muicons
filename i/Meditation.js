import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12 2C10.9 2 10 2.9 10 4C10 5.11 10.9 6 12 6C13.11 6 14 5.11 14 4C14 2.9 13.11 2 12 2M11 7L7.4 10.59L5.29 8.47L3.87 9.89L6.7 12.72C7.09 13.11 7.72 13.11 8.11 12.72L10 10.83V15H8C7.45 15 7 15.45 7 16V17L10.04 18.8L8 20L9 21.73L12 19.96L15 21.73L16 20L13.97 18.8L17 17V16C17 15.45 16.55 15 16 15H14V10.83L15.89 12.72C16.27 13.11 16.91 13.11 17.3 12.72L20.13 9.89L18.71 8.47L16.59 10.59L13 7H11V7Z'
  }));
});