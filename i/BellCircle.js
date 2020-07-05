import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M17,16V15L16,14V11.39C16,10.3 15.73,9.34 15.21,8.53C14.7,7.72 13.96,7.21 13,7V6.5A1,1 0 0,0 12,5.5A1,1 0 0,0 11,6.5V7C10.04,7.21 9.3,7.72 8.79,8.53C8.27,9.34 8,10.3 8,11.39V14L7,15V16H17M13.5,17H10.5A1.5,1.5 0 0,0 12,18.5A1.5,1.5 0 0,0 13.5,17Z'
  }));
});