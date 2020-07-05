import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 24 24'
  }, props), /*#__PURE__*/React.createElement("path", {
    d: 'M18.25 17C18.25 17.88 18.07 18.74 17.71 19.53H16.31C17.71 17.15 16.91 14.09 14.53 12.69C13.76 12.24 12.89 12 12 12C9.24 12 7 9.76 7 7C7 4.24 9.24 2 12 2C14.76 2 17 4.24 17 7H15.75C15.75 4.93 14.07 3.25 12 3.25C9.93 3.25 8.25 4.93 8.25 7C8.25 9.07 9.93 10.75 12 10.75C15.45 10.75 18.25 13.56 18.25 17M6.29 19.53C5.93 18.74 5.75 17.87 5.75 17H7C7 17.93 7.25 18.79 7.69 19.53H6.29M18.25 20.75V22H5.75V20.75H9.5V15.75H8.25V14.5H15.75V15.75H14.5V20.75H18.25M13.25 15.75H10.75V20.75H13.25V15.75M14.44 7.07C14.4 8.4 13.33 9.47 12 9.5C10.62 9.46 9.53 8.32 9.57 6.94C9.6 5.61 10.67 4.53 12 4.5C13.38 4.54 14.47 5.68 14.44 7.07M13.25 7C13.25 6.31 12.69 5.75 12 5.75C11.31 5.75 10.75 6.31 10.75 7C10.75 7.69 11.31 8.25 12 8.25C12.69 8.25 13.25 7.69 13.25 7Z'
  }));
});