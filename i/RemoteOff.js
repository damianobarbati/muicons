import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2,5.27L3.28,4L21,21.72L19.73,23L16,19.27V22A1,1 0 0,1 15,23H9C8.46,23 8,22.55 8,22V11.27L2,5.27M12,0C15.05,0 17.8,1.23 19.77,3.23L18.36,4.64C16.75,3 14.5,2 12,2C9.72,2 7.64,2.85 6.06,4.24L4.64,2.82C6.59,1.07 9.17,0 12,0M12,4C13.94,4 15.69,4.78 16.95,6.05L15.55,7.46C14.64,6.56 13.39,6 12,6C10.83,6 9.76,6.4 8.9,7.08L7.5,5.66C8.7,4.62 10.28,4 12,4M15,9C15.56,9 16,9.45 16,10V14.18L13.5,11.69L13.31,11.5L10.82,9H15M10.03,13.3C10.16,14.16 10.84,14.85 11.71,15L10.03,13.3Z'
  }));
});