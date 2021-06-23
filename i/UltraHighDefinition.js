import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M9,7H11V11H13V7H15V17H13V13H11V17H9V7M17,7H20A3,3 0 0,1 23,10V14A3,3 0 0,1 20,17H17V7M20,15A1,1 0 0,0 21,14V10A1,1 0 0,0 20,9H19V15H20M7,14A3,3 0 0,1 4,17A3,3 0 0,1 1,14V7H3V14A1,1 0 0,0 4,15A1,1 0 0,0 5,14V7H7V14Z'
  }));
});