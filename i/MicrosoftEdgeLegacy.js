import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M 2.73675,10.8077C 3.8293,-1.36109 22.5157,-1.36109 21.1971,13.5579L 8.61392,13.5579C 8.61392,17.8527 14.4157,19.209 19.5394,16.3081L 19.5394,20.5276C 13.2478,23.8806 4.9972,21.4318 4.9972,14.0853C 4.9972,8.58476 9.97019,6.8142 9.97019,6.8142C 9.97019,6.8142 8.57624,8.58489 8.53857,10.0542L 15.6967,10.0542C 15.6967,2.93376 5.90137,5.57095 2.73675,10.8077 Z'
  }));
});