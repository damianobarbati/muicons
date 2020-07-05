import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12,3C7.79,3 3.7,4.41 0.38,7H0.36C4.24,11.83 8.13,16.66 12,21.5C14.34,18.59 16.67,15.68 19,12.78V9.59L12,18.3L3.27,7.44C5.9,5.85 8.92,5 12,5C15.07,5 18.09,5.86 20.71,7.45L20.27,8H22.84C23.11,7.67 23.37,7.33 23.64,7H23.65C20.32,4.41 16.22,3 12,3M21,10V18H23V10M21,20V22H23V20'
  }));
});