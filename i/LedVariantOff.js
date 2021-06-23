import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12,3C10.05,3 8.43,4.4 8.08,6.25L16.82,15H18V13H16V7A4,4 0 0,0 12,3M3.28,4L2,5.27L8,11.27V13H6V15H9V21H11V15H11.73L13,16.27V21H15V18.27L18.73,22L20,20.72L15,15.72L8,8.72L3.28,4Z'
  }));
});