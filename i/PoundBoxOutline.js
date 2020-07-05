import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M19 19H5V5H19M19 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V5A2 2 0 0 0 19 3M7 9H9.31L9.63 6H11.63L11.31 9H13.31L13.63 6H15.63L15.31 9H17V11H15.1L14.9 13H17V15H14.69L14.37 18H12.37L12.69 15H10.69L10.37 18H8.37L8.69 15H7V13H8.9L9.1 11H7V9M11.1 11L10.9 13H12.9L13.1 11Z'
  }));
});