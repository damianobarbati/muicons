import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12.5,11A1.5,1.5 0 0,0 11,12.5A1.5,1.5 0 0,0 12.5,14A1.5,1.5 0 0,0 14,12.5A1.5,1.5 0 0,0 12.5,11M12,5A2,2 0 0,0 10,7A2,2 0 0,0 12,9A2,2 0 0,0 14,7A2,2 0 0,0 12,5M5.93,8.5C5.38,9.45 5.71,10.67 6.66,11.22C7.62,11.78 8.84,11.45 9.4,10.5C9.95,9.53 9.62,8.31 8.66,7.76C7.71,7.21 6.5,7.53 5.93,8.5Z'
  }));
});