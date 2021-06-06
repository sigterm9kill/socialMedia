/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ \"./components/Common/WelcomeMessage.js\");\nvar _jsxFileName = \"/Users/sigterm9kill/gitRepos/socialMedia/pages/signup.js\";\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction Signup() {\n  const [user, setUser] = useState({\n    name: \"\",\n    email: \"\",\n    password: \"\",\n    bio: \"\",\n    facebook: \"\",\n    youtube: \"\",\n    twitter: \"\",\n    instagram: \"\"\n  });\n  const {\n    name,\n    email,\n    password,\n    bio\n  } = user;\n\n  const handleChange = e => {\n    const {\n      name,\n      value\n    } = e.target;\n    setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {\n      [name]: value\n    }));\n  };\n\n  const [showSocialLinks, setShowSocialLinks] = useState(false);\n  const [errorMsg, setErrorMsg] = useState(null);\n  const [formLoading, setFormLoading] = useState(false);\n  const [username, setUsername] = useState('');\n  const [usernameLoading, setUsernameLoading] = useState(false);\n  const [usernameAvailable, setUsernameAvailable] = useState(false);\n\n  const handleSubmit = e => e.preventDefault();\n\n  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.HeaderMessage, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {\n    loading: formLoading,\n    error: errorMsg !== null,\n    onSubmit: handleSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {\n    error: true,\n    header: \"Oops\",\n    content: errorMsg,\n    onDismiss: () => setErrorMsg(null),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Imput, {\n    lable: \"Name\",\n    placeholder: \"Name\",\n    name: \"name\",\n    value: name,\n    onChange: handleChange,\n    fluid: true,\n    icon: \"user\",\n    iconPosition: \"left\",\n    required: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 21\n    }\n  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Imput, {\n    lable: \"Email\",\n    placeholder: \"Email\",\n    name: \"email\",\n    value: email,\n    onChange: handleChange,\n    fluid: true,\n    icon: \"envelope\",\n    iconPosition: \"left\",\n    type: \"email\",\n    required: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 21\n    }\n  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Imput, {\n    lable: \"Password\",\n    placeholder: \"Password\",\n    name: \"password\",\n    value: password,\n    onChange: handleChange,\n    fluid: true,\n    icon: {\n      name: \"eye\",\n      circular: \"true\",\n      link: true,\n      onClick: () => setShowPassword(!showPassword)\n    },\n    iconPosition: \"left\",\n    type: showPassword ? 'text' : \"password\",\n    required: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 21\n    }\n  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.FooterMessage, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9zaWdudXAuanM/YmNiZiJdLCJuYW1lcyI6WyJTaWdudXAiLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJiaW8iLCJmYWNlYm9vayIsInlvdXR1YmUiLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldiIsInNob3dTb2NpYWxMaW5rcyIsInNldFNob3dTb2NpYWxMaW5rcyIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJmb3JtTG9hZGluZyIsInNldEZvcm1Mb2FkaW5nIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZXJuYW1lTG9hZGluZyIsInNldFVzZXJuYW1lTG9hZGluZyIsInVzZXJuYW1lQXZhaWxhYmxlIiwic2V0VXNlcm5hbWVBdmFpbGFibGUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNpcmN1bGFyIiwibGluayIsIm9uQ2xpY2siLCJzZXRTaG93UGFzc3dvcmQiLCJzaG93UGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQ2QsUUFBTSxDQUFDQyxJQUFELEVBQU9DLE9BQVAsSUFBa0JDLFFBQVEsQ0FBQztBQUM3QkMsUUFBSSxFQUFFLEVBRHVCO0FBRTdCQyxTQUFLLEVBQUUsRUFGc0I7QUFHN0JDLFlBQVEsRUFBRSxFQUhtQjtBQUk3QkMsT0FBRyxFQUFFLEVBSndCO0FBSzdCQyxZQUFRLEVBQUUsRUFMbUI7QUFNN0JDLFdBQU8sRUFBRSxFQU5vQjtBQU83QkMsV0FBTyxFQUFFLEVBUG9CO0FBUTdCQyxhQUFTLEVBQUU7QUFSa0IsR0FBRCxDQUFoQztBQVdBLFFBQU07QUFBRVAsUUFBRjtBQUFRQyxTQUFSO0FBQWVDLFlBQWY7QUFBeUJDO0FB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O0FBY0ksUUFBSSxFQUFFQSxZQUFZLEdBQUcsTUFBSCxHQUFZLFVBZGxDO0FBZUksWUFBUSxNQWZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQkosQ0FWSixDQUZKLEVBNERJLE1BQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVESixDQURKO0FBZ0VIOztBQUVELCtEQUFlbkMsTUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NpZ251cC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIE1lc3NhZ2UsIFNlZ21lbnQsIFRleHRBcmVhLCBEaXZpZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cbmltcG9ydCB7IEhlYWRlck1lc3NhZ2UsIEZvb3Rlck1lc3NhZ2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tb24vV2VsY29tZU1lc3NhZ2VcIjtcblxuZnVuY3Rpb24gU2lnbnVwKCkge1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgICBiaW86IFwiXCIsXG4gICAgICAgIGZhY2Vib29rOiBcIlwiLFxuICAgICAgICB5b3V0dWJlOiBcIlwiLFxuICAgICAgICB0d2l0dGVyOiBcIlwiLFxuICAgICAgICBpbnN0YWdyYW06IFwiXCJcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBiaW8gfSA9IHVzZXI7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcblxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICAgICAgc2V0VXNlcihwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xuICAgIH1cblxuICAgIGNvbnN0IFtzaG93U29jaWFsTGlua3MsIHNldFNob3dTb2NpYWxMaW5rc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZm9ybUxvYWRpbmcsIHNldEZvcm1Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt1c2VybmFtZUxvYWRpbmcsIHNldFVzZXJuYW1lTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJuYW1lQXZhaWxhYmxlLCBzZXRVc2VybmFtZUF2YWlsYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRlck1lc3NhZ2UgLz5cbiAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgICAgbG9hZGluZz17Zm9ybUxvYWRpbmd9XG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yTXNnICE9PSBudWxsfVxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIk9vcHNcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtlcnJvck1zZ31cbiAgICAgICAgICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRFcnJvck1zZyhudWxsKX0gLz5cblxuICAgICAgICAgICAgICAgIDxTZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbXB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFibGU9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkltcHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJsZT1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImVudmVsb3BlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW1wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmxlPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJleWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjdWxhcjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/ICd0ZXh0JyA6IFwicGFzc3dvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cblxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgIDwvRm9ybT5cblxuICAgICAgICAgICAgPEZvb3Rlck1lc3NhZ2UgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signup.js\n");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Common_WelcomeMessage_js"], function() { return __webpack_exec__("./pages/signup.js"); });
module.exports = __webpack_exports__;

})();