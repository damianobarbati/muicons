import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12.03,16.53C9.37,16.53 8.18,15.22 8.18,14.24C8.18,13.74 8.55,13.38 9.06,13.38C10.2,13.38 9.91,15 12.03,15C13.12,15 13.73,14.43 13.73,13.82C13.73,13.46 13.55,13.06 12.83,12.88L10.46,12.29C8.55,11.81 8.2,10.78 8.2,9.81C8.2,7.79 10.1,7.03 11.88,7.03C13.5,7.03 15.46,7.94 15.46,9.15C15.46,9.67 15,9.97 14.5,9.97C13.5,9.97 13.7,8.62 11.74,8.62C10.77,8.62 10.23,9.06 10.23,9.69C10.23,10.32 11,10.5 11.66,10.68L13.42,11.07C15.34,11.5 15.83,12.62 15.83,13.67C15.83,15.31 14.57,16.53 12.03,16.53M18,6C20.07,8.04 20.85,10.89 20.36,13.55C20.77,14.27 21,15.11 21,16A5,5 0 0,1 16,21C15.11,21 14.27,20.77 13.55,20.36C10.89,20.85 8.04,20.07 6,18C3.93,15.96 3.15,13.11 3.64,10.45C3.23,9.73 3,8.89 3,8A5,5 0 0,1 8,3C8.89,3 9.73,3.23 10.45,3.64C13.11,3.15 15.96,3.93 18,6M8,5A3,3 0 0,0 5,8C5,8.79 5.3,9.5 5.8,10.04C5.1,12.28 5.63,14.82 7.4,16.6C9.18,18.37 11.72,18.9 13.96,18.2C14.5,18.7 15.21,19 16,19A3,3 0 0,0 19,16C19,15.21 18.7,14.5 18.2,13.96C18.9,11.72 18.37,9.18 16.6,7.4C14.82,5.63 12.28,5.1 10.04,5.8C9.5,5.3 8.79,5 8,5Z'
  }));
});