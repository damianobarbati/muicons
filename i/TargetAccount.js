import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M20.95,11H22.5V13H20.95C20.5,17.17 17.17,20.5 13,20.95V22.5H11V20.95C6.83,20.5 3.5,17.17 3.05,13H1.5V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1.5H13V3.05C17.17,3.5 20.5,6.83 20.95,11M5.07,11H6.5V13H5.07C5.5,16.07 7.93,18.5 11,18.93V17.5H13V18.93C16.07,18.5 18.5,16.07 18.93,13H17.5V11H18.93C18.5,7.93 16.07,5.5 13,5.07V6.5H11V5.07C7.93,5.5 5.5,7.93 5.07,11M16,16H8V15C8,13.67 10.67,13 12,13C13.33,13 16,13.67 16,15V16M12,8A2,2 0 0,1 14,10A2,2 0 0,1 12,12A2,2 0 0,1 10,10A2,2 0 0,1 12,8Z'
  }));
});