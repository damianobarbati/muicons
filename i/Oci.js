import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M2 2V22H22V2M19.12 19.03H4.87V5H19.13V19.03M14.83 10.71H17.69V17.59H14.83M14.83 6.41H17.69V9.27H14.83M6.3 6.41V17.59H13.4V14.72H9.17V9.28H13.4V6.41Z'
  }));
});