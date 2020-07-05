import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M7.95,9.55L11.84,7.3C11.94,7.25 12.06,7.25 12.16,7.3L16.05,9.55C16.15,9.61 16.21,9.71 16.21,9.82V14.32C16.21,14.43 16.15,14.53 16.05,14.59L12.16,16.84C12.06,16.89 11.94,16.89 11.84,16.84L7.95,14.59C7.85,14.53 7.79,14.43 7.79,14.32V9.82C7.79,9.71 7.85,9.61 7.95,9.55M22.12,11.6C22.29,11.89 22.29,12.23 22.12,12.53L17.47,20.56C17.3,20.86 17,21 16.65,21H7.35C7,21 6.7,20.85 6.53,20.56L1.88,12.53C1.71,12.24 1.71,11.87 1.88,11.58L6.53,3.5C6.7,3.22 7,3 7.35,3H16.65C17,3 17.3,3.22 17.47,3.5L22.12,11.6M18.27,15.5V8.65C18.27,8.53 18.2,8.42 18.09,8.36L12.16,4.95C12.06,4.89 11.93,4.89 11.83,4.95L5.91,8.36C5.8,8.42 5.73,8.53 5.73,8.65V15.5C5.73,15.61 5.8,15.72 5.91,15.78L11.84,19.19C11.94,19.25 12.07,19.25 12.17,19.19L18.09,15.78C18.2,15.72 18.27,15.61 18.27,15.5Z'
  }));
});