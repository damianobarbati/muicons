import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20,4A2,2 0 0,0 18,2H10L4,8V20A2,2 0 0,0 6,22H18C19.11,22 20,21.1 20,20V4M9,19H7V17H9V19M17,19H15V17H17V19M9,15H7V11H9V15M13,19H11V15H13V19M13,13H11V11H13V13M17,15H15V11H17V15Z'
  }));
});