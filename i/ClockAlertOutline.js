import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22C14.25,22 16.33,21.24 18,20V17.28C16.53,18.94 14.39,20 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C15.36,4 18.23,6.07 19.41,9H21.54C20.27,4.94 16.5,2 12,2M11,7V13L16.25,16.15L17,14.92L12.5,12.25V7H11M20,11V18H22V11H20M20,20V22H22V20H20Z'
  }));
});