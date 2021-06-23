import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12,3A3,3 0 0,0 9,6H15A3,3 0 0,0 12,3M19,6A2,2 0 0,1 21,8V20A2,2 0 0,1 19,22H5C3.89,22 3,21.1 3,20V8C3,6.89 3.89,6 5,6H7A5,5 0 0,1 12,1A5,5 0 0,1 17,6H19M9,19L16.5,14L9,10V19Z'
  }));
});