import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M17.2,5V5C17.8,5 18.4,5 18.9,5.1C19.1,7.4 19.1,12 16.4,15.2C14.4,17.7 11,19 6.4,19C6,19 5.5,19 5.1,19C4.9,14.4 5.8,10.8 7.9,8.5C10.4,5.6 14.4,5 17.2,5M17.2,3C11.7,3 1.6,5.1 3.2,20.8C4.3,20.9 5.4,21 6.4,21C24.3,21 20.7,3.3 20.7,3.3C20.7,3.3 19.3,3 17.2,3M17,7C7,7 7,17 7,17C11,9 17,7 17,7Z'
  }));
});