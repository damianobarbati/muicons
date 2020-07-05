import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12.08,22C9.63,22 7.39,21.11 5.66,19.63L1.41,20.21L3.05,16.15C2.5,14.88 2.16,13.5 2.16,12C2.16,6.5 6.6,2 12.08,2C17.56,2 22,6.5 22,12C22,17.5 17.56,22 12.08,22M17.5,11.97V11.94C17.5,9.06 15.46,7 11.95,7H8.16V17H11.9C15.43,17 17.5,14.86 17.5,11.97M12,14.54H10.89V9.46H12C13.62,9.46 14.7,10.39 14.7,12V12C14.7,13.63 13.62,14.54 12,14.54Z'
  }));
});