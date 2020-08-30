import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21.7 20.26L20.29 21.67L17.06 18.5L16 20.97L14 14L21 16L18.47 17.03L21.7 20.26M19 8H5V19H13.41L13.97 21H5C3.89 21 3 20.1 3 19L3 5C3 3.9 3.89 3 5 3H6V1H8V3H16V1H18V3H19C20.1 3 21 3.9 21 5V13.95L19 13.35V8M12 10V15H7V10H12Z'
  }));
});