import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M9.5,11H10.5C10.8,11 11,10.8 11,10.5V9H19V10.5C19,10.8 19.2,11 19.5,11H20.5C20.8,11 21,10.8 21,10.5V9L21,8.5V6L19.6,1.7C19.5,1.3 19.1,1 18.7,1H11.4C11,1 10.6,1.3 10.5,1.7L9,6V8.5L9,9V10.5C9,10.8 9.2,11 9.5,11M11.3,2H18.6L19.5,5H10.4L11.3,2M12,23H10C10,22.2 8.1,21.5 6.6,20.9C4.5,20.1 2,19.2 2,17C2,14.7 4.3,14.1 6.2,13.5C7.9,13.1 9,12.7 9,12H11C11,14.3 8.7,14.9 6.8,15.5C5.1,15.9 4,16.3 4,17C4,17.8 5.9,18.5 7.4,19.1C9.5,19.9 12,20.8 12,23M22,23H20C20,22.2 18.1,21.5 16.6,20.9C14.5,20.1 12,19.2 12,17C12,14.7 14.3,14.1 16.2,13.5C17.8,13 19,12.7 19,12H21C21,14.3 18.7,14.9 16.8,15.5C15.2,15.9 14,16.3 14,17C14,17.8 15.9,18.5 17.4,19.1C19.5,19.9 22,20.8 22,23Z'
  }));
});