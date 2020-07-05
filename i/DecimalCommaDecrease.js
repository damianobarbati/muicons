import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M5 13V16H4L3 13A1 1 0 0 1 5 13M15 16V14L12 17L15 20V18H21V16M12 11A3 3 0 0 1 6 11V8A3 3 0 0 1 12 8M10 8A1 1 0 0 0 8 8V11A1 1 0 0 0 10 11Z'
  }));
});