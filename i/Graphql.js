import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12,5.37L11.56,5.31L6,14.9C6.24,15.11 6.4,15.38 6.47,15.68H17.53C17.6,15.38 17.76,15.11 18,14.9L12.44,5.31L12,5.37M6.6,16.53L10.88,19.06C11.17,18.79 11.57,18.63 12,18.63C12.43,18.63 12.83,18.79 13.12,19.06L17.4,16.53H6.6M12,22A1.68,1.68 0 0,1 10.32,20.32L10.41,19.76L6.11,17.21C5.8,17.57 5.35,17.79 4.84,17.79A1.68,1.68 0 0,1 3.16,16.11C3.16,15.32 3.69,14.66 4.42,14.47V9.36C3.59,9.25 2.95,8.54 2.95,7.68A1.68,1.68 0 0,1 4.63,6C5.18,6 5.66,6.26 5.97,6.66L10.38,4.13L10.32,3.68C10.32,2.75 11.07,2 12,2C12.93,2 13.68,2.75 13.68,3.68L13.62,4.13L18.03,6.66C18.34,6.26 18.82,6 19.37,6A1.68,1.68 0 0,1 21.05,7.68C21.05,8.54 20.41,9.25 19.58,9.36V14.47C20.31,14.66 20.84,15.32 20.84,16.11A1.68,1.68 0 0,1 19.16,17.79C18.65,17.79 18.2,17.57 17.89,17.21L13.59,19.76L13.68,20.32A1.68,1.68 0 0,1 12,22M10.8,4.86L6.3,7.44L6.32,7.68C6.32,8.39 5.88,9 5.26,9.25L5.29,14.5L10.8,4.86M13.2,4.86L18.71,14.5L18.74,9.25C18.12,9 17.68,8.39 17.68,7.68L17.7,7.44L13.2,4.86Z'
  }));
});