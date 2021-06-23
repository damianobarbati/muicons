import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12 2C11.6 2 11.3 2.2 11.1 2.6L6.5 15H11V19C11 19.6 10.6 20 10 20C9.4 20 9 19.6 9 19V18H7V19C7 20.7 8.3 22 10 22S13 20.7 13 19V15H17.5L12.9 2.6C12.7 2.2 12.4 2 12 2Z'
  }));
});