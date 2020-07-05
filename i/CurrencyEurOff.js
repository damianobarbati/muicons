import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M22.11 21.46L2.39 1.73L1.11 3L6 7.89C5.81 8.25 5.64 8.62 5.5 9H3L2 11H5.05L5 12L5.05 13H3L2 15H5.5C6.75 18.5 10.08 21 14 21C15.5 21 16.89 20.65 18.12 20L20.84 22.73L22.11 21.46M7 12L7.07 11H9.12L11.12 13H7.07L7 12M14 19C11.21 19 8.8 17.37 7.67 15H13.12L16.6 18.5C15.79 18.81 14.92 19 14 19M17 13.81L16.21 13H17.35L17 13.81M18.19 11H14.21L12.21 9H19.04L18.19 11M9.7 6.5L8.27 5.07C9.83 3.78 11.82 3 14 3C16.5 3 18.8 4.05 20.43 5.72L19.57 7.76C18.29 6.09 16.27 5 14 5C12.38 5 10.89 5.58 9.7 6.5Z'
  }));
});