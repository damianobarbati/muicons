import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M7.59,5.41C6.81,4.63 6.81,3.36 7.59,2.58C8.37,1.8 9.64,1.8 10.42,2.58C11.2,3.36 11.2,4.63 10.42,5.41C9.63,6.2 8.37,6.2 7.59,5.41M6,16V7H4V16A5,5 0 0,0 9,21H15V19H9A3,3 0 0,1 6,16M20,20.07L14.93,15H11.5V11.32C12.9,12.47 15.1,13.5 17,13.5V11.32C15.34,11.34 13.39,10.45 12.33,9.28L10.93,7.73C10.74,7.5 10.5,7.35 10.24,7.23C9.95,7.09 9.62,7 9.28,7H9.25C8,7 7,8 7,9.25V15A3,3 0 0,0 10,18H15.07L18.57,21.5'
  }));
});