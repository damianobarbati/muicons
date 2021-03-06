import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20 14.05V12.73C20 12.26 19.84 11.8 19.54 11.44L15.6 6.72C15.22 6.26 14.66 6 14.06 6H4C2.9 6 2 6.9 2 8V15C2 16.1 2.9 17 4 17H4.05C4.28 18.14 5.29 19 6.5 19S8.72 18.14 8.95 17H17.05C17.28 18.14 18.29 19 19.5 19C20.88 19 22 17.88 22 16.5C22 15.29 21.14 14.28 20 14.05M3.5 8C3.5 7.73 3.73 7.5 4 7.5H7V12H3.5V8M6.5 17.5C5.95 17.5 5.5 17.05 5.5 16.5S5.95 15.5 6.5 15.5 7.5 15.95 7.5 16.5 7.05 17.5 6.5 17.5M13 15.5H9V14H11V12H9V7.5H13V15.5M15 8.34L18.05 12H15V8.34M19.5 17.5C18.95 17.5 18.5 17.05 18.5 16.5S18.95 15.5 19.5 15.5 20.5 15.95 20.5 16.5 20.05 17.5 19.5 17.5Z'
  }));
});