import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20.8 22.7L12.4 14.3L11.8 15L9 12.2L9.7 11.5L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M7 14C5.3 14 4 15.3 4 17C4 18.3 2.8 19 2 19C2.9 20.2 4.5 21 6 21C8.2 21 10 19.2 10 17C10 15.3 8.7 14 7 14M20.7 6C21.1 5.6 21.1 5 20.7 4.6L19.4 3.3C19 2.9 18.4 2.9 18 3.3L12.2 9L15 11.8L20.7 6Z'
  }));
});