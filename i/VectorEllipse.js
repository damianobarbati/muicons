import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M23,9V15H20.35C19.38,17.12 17.43,18.78 15,19.54V22H9V19.54C5.5,18.45 3,15.5 3,12C3,7.58 7.03,4 12,4C15.78,4 19,6.07 20.35,9H23M17,15V9H18.06C16.85,7.21 14.59,6 12,6C8.13,6 5,8.69 5,12C5,14.39 6.64,16.46 9,17.42V16H15V17.42C16.29,16.9 17.35,16.05 18.06,15H17M19,13H21V11H19V13M11,20H13V18H11V20Z'
  }));
});