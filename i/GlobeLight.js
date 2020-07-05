import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M13 8.08V2H11V8.08C7.61 8.57 5 11.47 5 15C5 18.87 8.13 22 12 22S19 18.87 19 15C19 11.47 16.39 8.57 13 8.08M12 20C9.24 20 7 17.76 7 15C7 13.87 7.39 12.84 8.03 12H15.97C16.61 12.84 17 13.87 17 15C17 17.76 14.76 20 12 20Z'
  }));
});