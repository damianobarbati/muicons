import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12,2A9,9 0 0,0 3,11V22L6,19L9,22L12,19L15,22L18,19L21,22V11A9,9 0 0,0 12,2M9,8A2,2 0 0,1 11,10A2,2 0 0,1 9,12A2,2 0 0,1 7,10A2,2 0 0,1 9,8M15,8A2,2 0 0,1 17,10A2,2 0 0,1 15,12A2,2 0 0,1 13,10A2,2 0 0,1 15,8Z'
  }));
});