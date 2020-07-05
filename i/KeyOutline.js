import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22,19H16V15H13.32C12.18,17.42 9.72,19 7,19C3.14,19 0,15.86 0,12C0,8.14 3.14,5 7,5C9.72,5 12.17,6.58 13.32,9H24V15H22V19M18,17H20V13H22V11H11.94L11.71,10.33C11,8.34 9.11,7 7,7A5,5 0 0,0 2,12A5,5 0 0,0 7,17C9.11,17 11,15.66 11.71,13.67L11.94,13H18V17M7,15A3,3 0 0,1 4,12A3,3 0 0,1 7,9A3,3 0 0,1 10,12A3,3 0 0,1 7,15M7,11A1,1 0 0,0 6,12A1,1 0 0,0 7,13A1,1 0 0,0 8,12A1,1 0 0,0 7,11Z'
  }));
});