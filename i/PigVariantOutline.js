import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M9 12C8.4 12 8 11.6 8 11S8.4 10 9 10 10 10.4 10 11 9.6 12 9 12M22 12H20C20 8.7 16.4 6 12 6C11.2 6 10.3 6.1 9.6 6.3L7 5V7.3C5.5 8.2 4.5 9.5 4.1 11H2V15H5.1C5.6 15.6 6.2 16.2 7 16.7V20H9V17.6C9.9 17.9 10.9 18 12 18S14.1 17.8 15 17.6V20H17V16.7C18.1 16 19 15.1 19.5 14H22V12M12 16C8.7 16 6 14.2 6 12S8.7 8 12 8 18 9.8 18 12 15.3 16 12 16Z'
  }));
});