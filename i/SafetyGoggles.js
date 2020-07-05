import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M18,9C19.11,9 20,9.89 20,11V14C20,15.11 19.11,16 18,16H15.77L14.53,14.77C13.78,14 12.77,13.6 11.7,13.6C10.63,13.6 9.63,14 8.87,14.77L7.64,16H6C4.89,16 4,15.11 4,14V11C4,9.89 4.89,9 6,9H18M18,7H6A4,4 0 0,0 2,11H2L1,11V14H2V14A4,4 0 0,0 6,18H8.5C8.54,17.94 8.59,17.88 10.29,16.18C10.68,15.79 11.19,15.6 11.7,15.6C12.22,15.6 12.73,15.79 13.12,16.18L14.91,18H18A4,4 0 0,0 22,14H22L23,14V11H22V11A4,4 0 0,0 18,7Z'
  }));
});