import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M4,12H20C20,8.27 17.44,5.13 14,4.25C13.86,5.24 13,6 12,6C11,6 10.14,5.24 10,4.25C6.56,5.13 4,8.27 4,12M12,2A10,10 0 0,1 22,12A2,2 0 0,1 20,14H4A2,2 0 0,1 2,12A10,10 0 0,1 12,2M13.5,17H10.5L9.92,19L9.65,20H14.35L14.08,19L13.5,17M15,15L16,18.5L16.27,19.45L16.35,20C16.35,21.1 15.45,22 14.35,22H9.65L9.17,21.94C8.1,21.66 7.45,20.57 7.73,19.5L8,18.5L9,15H15M16,7A2,2 0 0,1 18,9A2,2 0 0,1 16,11A2,2 0 0,1 14,9A2,2 0 0,1 16,7M8,7A2,2 0 0,1 10,9A2,2 0 0,1 8,11A2,2 0 0,1 6,9A2,2 0 0,1 8,7Z'
  }));
});