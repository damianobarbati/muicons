import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M15,2C16.94,2 18.59,2.7 19.95,4.05C21.3,5.41 22,7.06 22,9C22,10.56 21.5,11.96 20.58,13.2C19.64,14.43 18.44,15.27 16.97,15.7L17,15.38V15C17,12.81 16.23,10.93 14.65,9.35C13.07,7.77 11.19,7 9,7H8.63L8.3,7.03C8.73,5.56 9.57,4.36 10.8,3.42C12.04,2.5 13.44,2 15,2M9,8A7,7 0 0,1 16,15A7,7 0 0,1 9,22A7,7 0 0,1 2,15A7,7 0 0,1 9,8M9,10A5,5 0 0,0 4,15A5,5 0 0,0 9,20A5,5 0 0,0 14,15A5,5 0 0,0 9,10Z'
  }));
});