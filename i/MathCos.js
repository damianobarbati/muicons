import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M4,7A2,2 0 0,0 2,9V15A2,2 0 0,0 4,17H6A2,2 0 0,0 8,15V14H6V15H4V9H6V10H8V9A2,2 0 0,0 6,7H4M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11M11,9H13V15H11V9M18,7A2,2 0 0,0 16,9V11A2,2 0 0,0 18,13H20V15H16V17H20A2,2 0 0,0 22,15V13A2,2 0 0,0 20,11H18V9H22V7H18Z'
  }));
});