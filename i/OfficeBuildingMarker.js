import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15.19 21C14.12 19.43 13 17.36 13 15.5C13 13.67 13.96 12 15.4 11H15V9H17V10.23C17.5 10.09 18 10 18.5 10C18.67 10 18.84 10 19 10.03V3H5V21H11V17.5H13V21H15.19M15 5H17V7H15V5M9 19H7V17H9V19M9 15H7V13H9V15M9 11H7V9H9V11M9 7H7V5H9V7M11 5H13V7H11V5M11 9H13V11H11V9M11 15V13H13V15H11M18.5 12C16.6 12 15 13.61 15 15.5C15 18.11 18.5 22 18.5 22S22 18.11 22 15.5C22 13.61 20.4 12 18.5 12M18.5 16.81C17.8 16.81 17.3 16.21 17.3 15.61C17.3 14.91 17.9 14.41 18.5 14.41S19.7 15 19.7 15.61C19.8 16.21 19.2 16.81 18.5 16.81Z'
  }));
});