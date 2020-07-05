import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2,5.27L3.28,4L20,20.72L18.73,22L17.25,20.5C15.7,21.5 13.95,22 12,22C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,10.05 2.5,8.3 3.5,6.75L2,5.27M13,19.92C14,19.8 14.93,19.5 15.78,19.05L13.5,16.78C13.34,16.84 13.16,16.88 13,16.92V19.92M4.08,11H7L7.37,10.63L4.96,8.23C4.5,9.08 4.21,10 4.08,11M19.92,13H16.92C16.8,13.54 16.6,14.05 16.33,14.5L9.91,8.09L10,8H14L17,11H19.92C19.67,9.05 18.79,7.38 17.27,6C15.76,4.66 14,4 12,4C10.26,4 8.71,4.5 7.34,5.5L5.91,4.09C7.66,2.71 9.69,2 12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12C22,14.31 21.29,16.34 19.91,18.09L18.5,16.67C19.28,15.59 19.76,14.36 19.92,13M11,19.92V16.92C10,16.7 9.16,16.24 8.46,15.54C7.76,14.84 7.3,14 7.08,13H4.08C4.3,14.77 5.05,16.3 6.35,17.6C7.65,18.9 9.2,19.67 11,19.92Z'
  }));
});