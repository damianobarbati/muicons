import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M12 8.89C13.6 8.89 14.89 10.18 14.89 11.78S13.6 14.67 12 14.67 9.11 13.37 9.11 11.78 10.41 8.89 12 8.89M12 6L13.38 8C12.96 7.82 12.5 7.73 12 7.73S11.05 7.82 10.62 8L12 6M7 8.89L9.4 8.69C9.06 9 8.74 9.34 8.5 9.76C8.25 10.18 8.1 10.62 8 11.08L7 8.89M7 14.67L8.03 12.5C8.11 12.93 8.27 13.38 8.5 13.8C8.75 14.23 9.06 14.59 9.4 14.88L7 14.67M17 8.89L16 11.08C15.9 10.62 15.74 10.18 15.5 9.76C15.26 9.34 14.95 9 14.6 8.68L17 8.89M17 14.67L14.6 14.87C14.94 14.58 15.25 14.22 15.5 13.8C15.74 13.38 15.89 12.93 15.97 12.5L17 14.67M12 17.55L10.61 15.57C11.04 15.72 11.5 15.82 12 15.82C12.5 15.82 12.95 15.72 13.37 15.57L12 17.55Z'
  }));
});