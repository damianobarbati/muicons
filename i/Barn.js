import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M12,3L3,8.2V21H9L11.9,18L15,21H21V8.2L12,3M7.9,20V14L10.9,17L7.9,20M8.9,13H14.9L11.9,16L8.9,13M15.9,20L12.9,17L15.9,14V20M15,11H8.8V9H15V11Z'
  }));
});