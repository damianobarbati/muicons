import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M16,9V7L10,11L4,7V9L10,13L16,9M16,5A2,2 0 0,1 18,7V16A2,2 0 0,1 16,18H4C2.89,18 2,17.1 2,16V7A2,2 0 0,1 4,5H16M20,12V7H22V12H20M20,16V14H22V16H20Z'
  }));
});