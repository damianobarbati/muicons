import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15,13H17V11H15M15,21H17V19H15M15,5H17V3H15M19,9H21V7H19M19,5H21V3H19M19,13H21V11H19M19,21H21V19H19M11,21H13V3H11M19,17H21V15H19M7,5H9V3H7M3,17H5V15H3M3,21H5V19H3M3,13H5V11H3M7,13H9V11H7M7,21H9V19H7M3,5H5V3H3M3,9H5V7H3V9Z'
  }));
});