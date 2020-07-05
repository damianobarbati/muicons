import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17,7H19A2,2 0 0,1 21,9V15A2,2 0 0,1 19,17H17A2,2 0 0,1 15,15V9A2,2 0 0,1 17,7M17,9V15H19V9H17M9,17H3V15L7,9H3V7H7A2,2 0 0,1 9,9C9,9.42 8.87,9.81 8.65,10.13L5.41,15H9V17M12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17Z'
  }));
});