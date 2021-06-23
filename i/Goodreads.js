import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17,12.77C15.96,14.42 14.22,15.5 12.25,15.5C9.07,15.5 6.5,12.7 6.5,9.25C6.5,5.8 9.07,3 12.25,3C14.22,3 15.96,4.08 17,5.73V3H18V15.25C18,20.71 14.54,21 11.5,21C9,21 7.55,19.31 7.13,17H8.14C8.5,18.75 9.54,20 11.5,20C13.72,20 17,20.05 17,15.25V15.25L17,12.77M12.25,4C9.63,4 7.5,6.35 7.5,9.25C7.5,12.15 9.63,14.5 12.25,14.5C14.87,14.5 17,12.15 17,9.25C17,6.35 14.87,4 12.25,4Z'
  }));
});