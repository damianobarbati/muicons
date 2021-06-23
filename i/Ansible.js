import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2M16.1 17C15.91 17 15.76 16.9 15.55 16.73L10.39 12.56L8.66 16.9H7.17L11.54 6.39C11.65 6.11 11.89 5.97 12.17 5.97C12.45 5.97 12.67 6.11 12.79 6.39L16.77 15.97C16.81 16.08 16.84 16.19 16.84 16.26C16.83 16.68 16.5 17 16.1 17M12.17 8.11L14.76 14.5L10.85 11.42L12.17 8.11Z'
  }));
});