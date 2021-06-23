import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20,5H15A2,2 0 0,0 13,7V12A2,2 0 0,0 15,14H20A2,2 0 0,0 22,12V7A2,2 0 0,0 20,5M17.5,12.5A3,3 0 0,1 14.5,9.5A3,3 0 0,1 17.5,6.5A3,3 0 0,1 20.5,9.5A3,3 0 0,1 17.5,12.5M17.5,11A1.5,1.5 0 0,1 16,9.5A1.5,1.5 0 0,1 17.5,8A1.5,1.5 0 0,1 19,9.5A1.5,1.5 0 0,1 17.5,11M12,15V5H4A2,2 0 0,0 2,7V17A2,2 0 0,0 4,19H20A2,2 0 0,0 22,17V15H12M10,12H4V7H10V12Z'
  }));
});