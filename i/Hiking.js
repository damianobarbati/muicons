import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M9.8,8.9L7,23H9.1L10.9,15L13,17V23H15V15.5L12.9,13.5L13.5,10.5C14.63,11.81 16.29,12.73 18.15,12.95L16,23H17L20,9L19.04,8.8L18.58,11C16.86,10.85 15.44,9.89 14.7,8.6L13.7,7C13.5,6.65 13.2,6.37 12.84,6.2C12.5,6 12.08,5.96 11.68,6C11.28,6.09 10.92,6.27 10.63,6.55C10.34,6.83 10.14,7.19 10.06,7.58L9.8,8.9M7.08,6.92L9.4,7.38L8.4,12.46L6.08,12L7.08,6.92M13.5,5.5A2,2 0 0,0 15.5,3.5A2,2 0 0,0 13.5,1.5A2,2 0 0,0 11.5,3.5A2,2 0 0,0 13.5,5.5Z'
  }));
});