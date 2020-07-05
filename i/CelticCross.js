import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17.8,8C17.26,5.89 15.61,4.24 13.5,3.7V2H10.5V3.7C8.39,4.24 6.74,5.89 6.2,8H4V11H6.2C6.74,13.11 8.39,14.76 10.5,15.3V22H13.5V15.3C15.61,14.76 17.26,13.11 17.8,11H19.97V8H17.8M12.04,9.53L14.5,11H15.76C15.35,12.03 14.53,12.84 13.5,13.26V12L12.06,9.56L12,9.5L11.94,9.56L10.5,12V13.26C9.47,12.84 8.66,12.03 8.24,11H9.5L11.96,9.53L12,9.5H11.96L9.5,8H8.24C8.65,6.97 9.47,6.16 10.5,5.74V7L11.94,9.44L12,9.5L12.06,9.44L13.5,7V5.74C14.53,6.16 15.35,6.97 15.76,8H14.5L12.04,9.5H12L12.04,9.53Z'
  }));
});