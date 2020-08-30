import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M8.21 17C8.65 16.15 9.06 15.16 9.44 14H9V12H10C10.61 9.4 11 6.13 11 2H13C13 6.13 13.4 9.4 14 12H15V14H14.56C14.94 15.16 15.35 16.15 15.79 17H17L17 19L19 22H16.58C15.81 20.24 14.05 19 12 19C9.95 19 8.19 20.24 7.42 22H5L7 19L6.97 17H8.21M12.59 14H11.41C11.07 15.13 10.69 16.13 10.28 17H13.72C13.32 16.13 12.93 15.13 12.59 14Z'
  }));
});