import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2M21 20H3V6H21V20M16.6 8C18.1 9.3 19 11.1 19 13C19 14.9 18.1 16.7 16.6 18L15 17.4C16.3 16.4 17 14.7 17 13S16.3 9.6 15 8.6L16.6 8M7.4 8L9 8.6C7.7 9.6 7 11.3 7 13S7.7 16.4 9 17.4L7.4 18C5.9 16.7 5 14.9 5 13S5.9 9.3 7.4 8M12.1 12L13.5 10H15L12.8 13L14.1 16H12.8L12 14L10.6 16H9L11.3 12.9L10 10H11.3L12.1 12Z'
  }));
});