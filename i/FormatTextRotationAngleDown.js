import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M14.25 21H10.03L11.44 19.59L2.58 10.73L4.03 9.33L12.84 18.19L14.25 16.78M12.61 8L15.23 10.64L17.43 5.77M19.41 4.92L14.95 16.03L13.5 14.58L14.39 12.38L10.88 8.81L8.68 9.75L7.22 8.25L18.33 3.84Z'
  }));
});