import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M4.94,6.35C4.55,5.96 4.55,5.32 4.94,4.93C5.33,4.54 5.96,4.54 6.35,4.93L13.07,10.31L13.42,10.59C14.2,11.37 14.2,12.64 13.42,13.42C12.64,14.2 11.37,14.2 10.59,13.42L10.31,13.07L4.94,6.35M12,20A8,8 0 0,0 20,12C20,9.79 19.1,7.79 17.66,6.34L19.07,4.93C20.88,6.74 22,9.24 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12H4A8,8 0 0,0 12,20M12,1A2,2 0 0,1 14,3A2,2 0 0,1 12,5A2,2 0 0,1 10,3A2,2 0 0,1 12,1Z'
  }));
});