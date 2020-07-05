import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M4,4H11A2,2 0 0,1 13,6V9H11V6H4V11H6V9L9,12L6,15V13H4A2,2 0 0,1 2,11V6A2,2 0 0,1 4,4M20,20H13A2,2 0 0,1 11,18V15H13V18H20V13H18V15L15,12L18,9V11H20A2,2 0 0,1 22,13V18A2,2 0 0,1 20,20Z'
  }));
});