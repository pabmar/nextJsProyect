"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/users.js":
/*!****************************!*\
  !*** ./component/users.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Users = function(props) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"list-group\",\n        children: props.users.users.map(function(user) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"list-group-item list-group-item-action d-flex\",\n                onClick: function(e) {\n                    return next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"users/[id]\", \"/users/\".concat(user.id));\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: [\n                                user.first_name,\n                                \" \",\n                                user.last_name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\nextProyect\\\\component\\\\users.js\",\n                            lineNumber: 14,\n                            columnNumber: 15\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: user.email\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nextProyect\\\\component\\\\users.js\",\n                            lineNumber: 17,\n                            columnNumber: 15\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: user.avatar,\n                            alt: user.first_name + user.last_name,\n                            style: {\n                                borderRadius: \"50%\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nextProyect\\\\component\\\\users.js\",\n                            lineNumber: 18,\n                            columnNumber: 15\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\nextProyect\\\\component\\\\users.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, _this1)\n            }, user.id, false, {\n                fileName: \"D:\\\\nextProyect\\\\component\\\\users.js\",\n                lineNumber: 8,\n                columnNumber: 11\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\nextProyect\\\\component\\\\users.js\",\n        lineNumber: 6,\n        columnNumber: 7\n    }, _this);\n};\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvdXNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBa0M7QUFFbEMsSUFBTUMsS0FBSyxHQUFHLFNBQUNDLEtBQUssRUFBSTs7SUFFcEIscUJBQ0UsOERBQUNDLElBQUU7UUFBQ0MsU0FBUyxFQUFDLFlBQVk7a0JBQ3ZCRixLQUFLLENBQUNHLEtBQUssQ0FBQ0EsS0FBSyxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsSUFBSTtpQ0FDMUIsOERBQUNDLElBQUU7Z0JBQ0RKLFNBQVMsRUFBQywrQ0FBK0M7Z0JBRXpESyxPQUFPLEVBQUUsU0FBQ0MsQ0FBQzsyQkFBS1YsdURBQVcsQ0FBQyxZQUFZLEVBQUUsU0FBUSxDQUFVLE9BQVJPLElBQUksQ0FBQ0ssRUFBRSxDQUFFLENBQUM7aUJBQUE7MEJBRTlELDRFQUFDQyxLQUFHOztzQ0FDRiw4REFBQ0MsSUFBRTs7Z0NBQ0FQLElBQUksQ0FBQ1EsVUFBVTtnQ0FBQyxHQUFDO2dDQUFDUixJQUFJLENBQUNTLFNBQVM7Ozs7OztrQ0FDOUI7c0NBQ0wsOERBQUNDLEdBQUM7c0NBQUVWLElBQUksQ0FBQ1csS0FBSzs7Ozs7a0NBQUs7c0NBQ25CLDhEQUFDQyxLQUFHOzRCQUNGQyxHQUFHLEVBQUViLElBQUksQ0FBQ2MsTUFBTTs0QkFDaEJDLEdBQUcsRUFBRWYsSUFBSSxDQUFDUSxVQUFVLEdBQUdSLElBQUksQ0FBQ1MsU0FBUzs0QkFDckNPLEtBQUssRUFBRTtnQ0FBRUMsWUFBWSxFQUFFLEtBQUs7NkJBQUU7Ozs7O2tDQUM5Qjs7Ozs7OzBCQUNFO2VBYkRqQixJQUFJLENBQUNLLEVBQUU7Ozs7c0JBY1Q7U0FDTixDQUFDOzs7OzthQUNDLENBQ0w7Q0FDTDtBQXpCS1gsS0FBQUEsS0FBSztBQTJCWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvdXNlcnMuanM/Y2ZhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIFJvdXRlciAgZnJvbSBcIm5leHQvcm91dGVyXCJcclxuXHJcbmNvbnN0IFVzZXJzID0gKHByb3BzKSA9PntcclxuIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICB7cHJvcHMudXNlcnMudXNlcnMubWFwKCh1c2VyKSA9PiAoXHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZC1mbGV4XCJcclxuICAgICAgICAgICAga2V5PXt1c2VyLmlkfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gUm91dGVyLnB1c2goXCJ1c2Vycy9baWRdXCIsIGAvdXNlcnMvJHt1c2VyLmlkfWApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgIHt1c2VyLmZpcnN0X25hbWV9IHt1c2VyLmxhc3RfbmFtZX1cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDxwPnt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e3VzZXIuYXZhdGFyfVxyXG4gICAgICAgICAgICAgICAgYWx0PXt1c2VyLmZpcnN0X25hbWUgKyB1c2VyLmxhc3RfbmFtZX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1MCVcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzIl0sIm5hbWVzIjpbIlJvdXRlciIsIlVzZXJzIiwicHJvcHMiLCJ1bCIsImNsYXNzTmFtZSIsInVzZXJzIiwibWFwIiwidXNlciIsImxpIiwib25DbGljayIsImUiLCJwdXNoIiwiaWQiLCJkaXYiLCJoNSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJwIiwiZW1haWwiLCJpbWciLCJzcmMiLCJhdmF0YXIiLCJhbHQiLCJzdHlsZSIsImJvcmRlclJhZGl1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/users.js\n");

/***/ })

});