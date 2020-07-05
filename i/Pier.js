import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20,18C18.6,18 17.2,17.5 16,16.7C13.6,18.4 10.4,18.4 8,16.7C6.8,17.5 5.4,18 4,18H2V20H4C5.4,20 6.7,19.6 8,19C10.5,20.3 13.5,20.3 16,19C17.3,19.6 18.6,20 20,20H22V18H20M20,13H19V16.9C18.3,16.8 17.6,16.6 17,16.2V13H12V17C11.3,17 10.7,16.9 10,16.7V13H5V16.9C4.7,17 4.3,17 4,17H3V13H2V11H3V9H5V11H10V9H12V11H17V9H19V11H20V13Z'
  }));
});