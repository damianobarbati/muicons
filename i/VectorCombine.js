import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M3,1C1.89,1 1,1.89 1,3V14C1,15.11 1.89,16 3,16C4.33,16 7,16 7,16C7,16 7,18.67 7,20C7,21.11 7.89,22 9,22H20C21.11,22 22,21.11 22,20V9C22,7.89 21.11,7 20,7C18.67,7 16,7 16,7C16,7 16,4.33 16,3C16,1.89 15.11,1 14,1H3M3,3H14C14,4.33 14,7 14,7H9C7.89,7 7,7.89 7,9V14C7,14 4.33,14 3,14V3M9,9H14V14H9V9M16,9C16,9 18.67,9 20,9V20H9C9,18.67 9,16 9,16H14C15.11,16 16,15.11 16,14V9Z'
  }));
});