import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20.95 17C20.7 18.69 19.26 20 17.5 20H16V18H19C18.93 16.72 19.26 14.04 18.53 12.95C17.56 10.9 14.83 10.56 12.93 10.05C12 10 11 9 10.84 8H8C7.72 8 7.5 7.78 7.5 7.5C7.5 7.22 7.72 7 8 7H10.5V6H8C7.72 6 7.5 5.78 7.5 5.5C7.5 5.22 7.72 5 8 5H10.5V2H2.03V18H5V20H1V22H17.5C20.36 22 22.72 19.8 23 17H20.95M14 20H7V18H14V20Z'
  }));
});