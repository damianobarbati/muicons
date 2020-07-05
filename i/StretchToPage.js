import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20,2H4C2.89,2 2,2.89 2,4V20C2,21.11 2.89,22 4,22H20C21.11,22 22,21.11 22,20V4C22,2.89 21.11,2 20,2M9,19H5V15L6.29,16.29L7.83,14.75L9.25,16.17L7.71,17.71M7.83,9.25L6.29,7.71L5,9V5H9L7.71,6.29L9.25,7.83M19,19H15L16.29,17.71L14.75,16.17L16.17,14.75L17.71,16.29L19,15M19,9L17.71,7.71L16.17,9.25L14.75,7.83L16.29,6.29L15,5H19'
  }));
});