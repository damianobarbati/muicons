import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M19 20H6C2.7 20 0 17.3 0 14C0 10.9 2.3 8.4 5.3 8C6.6 5.6 9.1 4 12 4C15.6 4 18.7 6.6 19.4 10C22 10.2 24 12.3 24 15C24 17.7 21.7 20 19 20M11 15V17H13V15H11M11 13H13V7H11V13Z'
  }));
});