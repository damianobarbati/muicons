import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M16,5C16,5 15,2 12,2C9,2 8,5 8,5C6,5 4,7 4,9C1.3,9 1.3,13 4,13H20C22.7,13 22.7,9 20,9C20,7 18,5 16,5M5,15L7,22H9L8,15H5M10,15L11,22H13L14,15H10M16,15L15,22H17L19,15H16Z'
  }));
});