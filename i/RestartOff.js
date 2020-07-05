import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20.8,22.7L16.6,18.5C14.9,19.7 12.9,20.2 10.9,19.9L11.4,17.9C12.7,18 14,17.7 15.1,17L1.1,3L2.4,1.7L16.5,15.8L17.9,17.2L22.1,21.4L20.8,22.7M12,6C13.5,6 15.1,6.6 16.2,7.8C18,9.6 18.4,12.2 17.5,14.4L19,15.9C20.7,12.9 20.2,9 17.6,6.4C16.1,4.8 14,4 12,4V0.7L7.9,4.7L12,8.8V6M6.6,9.4L5.1,7.9C3.3,11 3.7,15 6.3,17.7C7.1,18.4 8,19 9,19.4L9.5,17.4C8.9,17.1 8.3,16.7 7.7,16.2C5.9,14.4 5.5,11.6 6.6,9.4Z'
  }));
});