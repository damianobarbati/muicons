import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2,3.27L3.28,2L22,20.72L20.73,22L17.87,19.13L15,22L12,19L9,22L6,19L3,22V11C3,9.09 3.59,7.33 4.6,5.87L2,3.27M12,2A9,9 0 0,1 21,11V17.18L15.7,11.88C16.46,11.59 17,10.86 17,10A2,2 0 0,0 15,8C14.14,8 13.41,8.54 13.13,9.3L7.2,3.38C8.59,2.5 10.24,2 12,2M7,10A2,2 0 0,0 9,12C9.5,12 9.93,11.83 10.27,11.54L7.46,8.73C7.17,9.07 7,9.5 7,10Z'
  }));
});