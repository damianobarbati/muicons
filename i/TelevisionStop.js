import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M3 3H21C22.1 3 23 3.89 23 5V17C23 18.1 22.1 19 21 19H16V21H8V19H3C1.9 19 1 18.1 1 17V5C1 3.89 1.89 3 3 3M3 5V17H21V5H3M9 8H15V14H9V8Z'
  }));
});