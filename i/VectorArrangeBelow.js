import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20,22C21.11,22 22,21.11 22,20V9C22,7.89 21.11,7 20,7C16.33,7 12.67,7 9,7C7.89,7 7,7.89 7,9C7,12.67 7,16.33 7,20C7,21.11 7.89,22 9,22H20M20,20H9V9H20V20M5,16V14H3V3H14V5H16V3C16,1.89 15.11,1 14,1H3C1.89,1 1,1.89 1,3V14C1,15.11 1.89,16 3,16H5Z'
  }));
});