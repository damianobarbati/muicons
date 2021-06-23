import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M8.6,8.6L7.17,8.38C6.5,11.67 6.46,14.24 7.61,15.5C8.6,16.61 11.89,16.61 11.89,16.61C11.89,16.61 15.29,16.61 16.28,15.5C17.43,14.24 17.38,11.67 16.72,8.38L15.29,8.6C15.29,8.6 16.54,13.88 14.69,14.69C13.81,15.07 11.89,15.07 11.89,15.07C11.89,15.07 10.08,15.07 9.2,14.69C7.35,13.88 8.6,8.6 8.6,8.6M12,3A9,9 0 0,1 21,12A9,9 0 0,1 12,21A9,9 0 0,1 3,12A9,9 0 0,1 12,3Z'
  }));
});