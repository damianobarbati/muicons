import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M4.15,21.46L5.47,19.58C3.35,17.74 2,15.03 2,12A10,10 0 0,1 12,2C13.78,2 15.44,2.46 16.89,3.27L18.21,1.39L19.85,2.54L18.53,4.42C20.65,6.26 22,8.97 22,12A10,10 0 0,1 12,22C10.22,22 8.56,21.54 7.11,20.73L5.79,22.61L4.15,21.46M12,4A8,8 0 0,0 4,12C4,14.35 5,16.46 6.63,17.93L15.73,4.92C14.62,4.33 13.35,4 12,4M12,20A8,8 0 0,0 20,12C20,9.65 19,7.54 17.37,6.07L8.27,19.08C9.38,19.67 10.65,20 12,20Z'
  }));
});