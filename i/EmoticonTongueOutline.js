import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M9,10C8.26,10 7.61,10.4 7.27,11C7.1,10.71 7,10.36 7,10A2,2 0 0,1 9,8C10.11,8 11,8.9 11,10C11,10.36 10.9,10.71 10.73,11C10.39,10.4 9.74,10 9,10M17,10C17,10.36 16.9,10.71 16.73,11C16.39,10.4 15.74,10 15,10C14.26,10 13.61,10.4 13.27,11C13.1,10.71 13,10.36 13,10A2,2 0 0,1 15,8C16.11,8 17,8.9 17,10M16,13V15H15C15,17 14.1,18 13,18C11.9,18 11,17 11,15H8V13H16Z'
  }));
});