import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20.7,3.3C20.7,3.3 19.3,3 17.2,3C11.7,3 1.6,5.1 3.2,20.8C4.3,20.9 5.4,21 6.4,21C24.3,21 20.7,3.3 20.7,3.3M7,17C7,17 7,7 17,7C17,7 11,9 7,17Z'
  }));
});