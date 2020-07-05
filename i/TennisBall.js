import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12,2C14.5,2 16.75,2.9 18.5,4.4C16.36,6.23 15,8.96 15,12C15,15.04 16.36,17.77 18.5,19.6C16.75,21.1 14.5,22 12,22C9.5,22 7.25,21.1 5.5,19.6C7.64,17.77 9,15.04 9,12C9,8.96 7.64,6.23 5.5,4.4C7.25,2.9 9.5,2 12,2M22,12C22,14.32 21.21,16.45 19.88,18.15C18.12,16.68 17,14.47 17,12C17,9.53 18.12,7.32 19.88,5.85C21.21,7.55 22,9.68 22,12M2,12C2,9.68 2.79,7.55 4.12,5.85C5.88,7.32 7,9.53 7,12C7,14.47 5.88,16.68 4.12,18.15C2.79,16.45 2,14.32 2,12Z'
  }));
});