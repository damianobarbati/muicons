import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2,3H4L5.33,9H9.33L10.67,3H13.33L14.67,9H18.67L20,3H22L20.67,9H22V11H20.22L19.78,13H22V15H19.33L18,21H15.33L14,15H10L8.67,21H6L4.67,15H2V13H4.22L3.78,11H2V9H3.33L2,3M13.11,11H10.89L10.44,13H13.56L13.11,11M7.33,18L8,15H6.67L7.33,18M8.89,11H5.78L6.22,13H8.44L8.89,11M16.67,18L17.33,15H16L16.67,18M18.22,11H15.11L15.56,13H17.78L18.22,11M12,6L11.33,9H12.67L12,6Z'
  }));
});