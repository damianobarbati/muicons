import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M7,3A4,4 0 0,1 11,7C11,8.86 9.73,10.43 8,10.87V13.13C8.37,13.22 8.72,13.37 9.04,13.56L13.56,9.04C13.2,8.44 13,7.75 13,7A4,4 0 0,1 17,3A4,4 0 0,1 21,7A4,4 0 0,1 17,11C16.26,11 15.57,10.8 15,10.45L10.45,15C10.8,15.57 11,16.26 11,17A4,4 0 0,1 7,21A4,4 0 0,1 3,17C3,15.14 4.27,13.57 6,13.13V10.87C4.27,10.43 3,8.86 3,7A4,4 0 0,1 7,3M17,13A4,4 0 0,1 21,17A4,4 0 0,1 17,21A4,4 0 0,1 13,17A4,4 0 0,1 17,13M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15Z'
  }));
});