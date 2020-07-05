import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12,2C9.5,2 7.25,2.9 5.5,4.4C6,4.81 6.41,5.27 6.8,5.76L7.89,5.13L8.89,6.87L7.89,7.44C8.45,8.53 8.82,9.73 8.95,11H10V12L10,13H8.95C8.82,14.27 8.45,15.47 7.89,16.56L8.89,17.13L7.89,18.87L6.8,18.24C6.41,18.73 6,19.19 5.5,19.6C7.25,21.1 9.5,22 12,22C14.5,22 16.75,21.1 18.5,19.6C18,19.19 17.59,18.73 17.19,18.24L16.11,18.87L15.11,17.13L16.11,16.55C15.55,15.47 15.18,14.27 15.05,13H14V11H15.05C15.18,9.73 15.55,8.53 16.11,7.45L15.11,6.87L16.11,5.13L17.19,5.76C17.59,5.27 18,4.81 18.5,4.4C16.75,2.9 14.5,2 12,2M4.12,5.85C2.79,7.55 2,9.68 2,12C2,14.32 2.79,16.45 4.12,18.15C4.46,17.87 4.76,17.55 5.05,17.22L4.43,16.87L5.43,15.13L6.16,15.56C6.55,14.77 6.82,13.91 6.93,13H6V12L6,11H6.93C6.82,10.09 6.55,9.23 6.16,8.44L5.43,8.87L4.43,7.13L5.05,6.78C4.76,6.45 4.46,6.13 4.12,5.85M19.88,5.85C19.54,6.13 19.24,6.45 18.95,6.78L19.57,7.13L18.57,8.87L17.84,8.44C17.45,9.23 17.18,10.09 17.07,11H18V13H17.07C17.18,13.91 17.45,14.77 17.84,15.56L18.57,15.13L19.57,16.87L18.95,17.22C19.24,17.55 19.54,17.87 19.88,18.15C21.21,16.45 22,14.32 22,12C22,9.68 21.21,7.55 19.88,5.85Z'
  }));
});