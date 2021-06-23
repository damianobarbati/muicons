import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M19,4H20V1H16V4C16,4 18,8 18,12C18,16 16,19 12,19C8,19 6,16 6,12C6,8 8,4 8,4V1H4V4H5C5,4 2,8 2,14C2,19 7,23 12,23C17,23 22,19 22,14C22,8 19,4 19,4M4,13C3.4,13 3,12.6 3,12C3,11.4 3.4,11 4,11C4.6,11 5,11.4 5,12C5,12.6 4.6,13 4,13M6,19C5.4,19 5,18.6 5,18C5,17.4 5.4,17 6,17C6.6,17 7,17.4 7,18C7,18.6 6.6,19 6,19M12,22C11.4,22 11,21.6 11,21C11,20.4 11.4,20 12,20C12.6,20 13,20.4 13,21C13,21.6 12.6,22 12,22M18,19C17.4,19 17,18.6 17,18C17,17.4 17.4,17 18,17C18.6,17 19,17.4 19,18C19,18.6 18.6,19 18,19M20,13C19.4,13 19,12.6 19,12C19,11.4 19.4,11 20,11C20.6,11 21,11.4 21,12C21,12.6 20.6,13 20,13Z'
  }));
});