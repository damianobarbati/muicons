import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M16,5C15.44,5 15,5.44 15,6C15,6.56 15.44,7 16,7C16.56,7 17,6.56 17,6C17,5.44 16.56,5 16,5M16,2C13.27,2 10.94,3.66 10,6C10.94,8.34 13.27,10 16,10C18.73,10 21.06,8.34 22,6C21.06,3.66 18.73,2 16,2M16,3.5A2.5,2.5 0 0,1 18.5,6A2.5,2.5 0 0,1 16,8.5A2.5,2.5 0 0,1 13.5,6A2.5,2.5 0 0,1 16,3.5M3,2V14H6V23L13,11H9L10.12,8.5C9.44,7.76 8.88,6.93 8.5,6C9.19,4.29 10.5,2.88 12.11,2H3Z'
  }));
});