import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12,6A11,11 0 0,0 1,17H3C3,12.04 7.04,8 12,8C16.96,8 21,12.04 21,17H23A11,11 0 0,0 12,6M12,10C8.14,10 5,13.14 5,17H7A5,5 0 0,1 12,12A5,5 0 0,1 17,17H19C19,13.14 15.86,10 12,10Z'
  }));
});