"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ImageChangeOnMouseScroll",{

/***/ "./pages/ImageChangeOnMouseScroll.js":
/*!*******************************************!*\
  !*** ./pages/ImageChangeOnMouseScroll.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst ImageChangeOnMouseScroll = ()=>{\n    _s();\n    const [currentImageId, setCurrentImageId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [mouseEventCount, setMouseEventCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.document.title = \"speaker: \".concat(currentImageId);\n        console.log(\"useEffect: setting the title to \".concat(currentImageId));\n    }, [\n        currentImageId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"Mouse Envent Count: \",\n                    mouseEventCount\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dukelester/Documents/React Course 2023/week2/pages/ImageChangeOnMouseScroll.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined),\n            [\n                1,\n                2,\n                3,\n                4,\n                5,\n                6\n            ].map((imageId)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onMouseOver: ()=>{\n                        setCurrentImageId(imageId);\n                        setMouseEventCount(mouseEventCount + 1);\n                        console.log(\"on mouseOver \".concat(imageId));\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        primaryImage: \"/static/images/bw/image\".concat(imageId, \".jpeg\"),\n                        secondaryImage: \"/static/images/bw/image\".concat(imageId, \".jpeg\"),\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/dukelester/Documents/React Course 2023/week2/pages/ImageChangeOnMouseScroll.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, undefined)\n                }, imageId, false, {\n                    fileName: \"/home/dukelester/Documents/React Course 2023/week2/pages/ImageChangeOnMouseScroll.js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dukelester/Documents/React Course 2023/week2/pages/ImageChangeOnMouseScroll.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ImageChangeOnMouseScroll, \"ja0qaM+75mQv6MbwqBG4Q2vaX9c=\");\n_c = ImageChangeOnMouseScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnMouseScroll);\nvar _c;\n$RefreshReg$(_c, \"ImageChangeOnMouseScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbWFnZUNoYW5nZU9uTW91c2VTY3JvbGwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDVTtBQUc3RCxNQUFNSSwyQkFBMkI7O0lBQzdCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR0osK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDSyxpQkFBaUJDLG1CQUFtQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUN2REQsZ0RBQVNBLENBQUM7UUFDTlEsT0FBT0MsUUFBUSxDQUFDQyxLQUFLLEdBQUcsWUFBMkIsT0FBZk47UUFDcENPLFFBQVFDLEdBQUcsQ0FBQyxtQ0FBa0QsT0FBZlI7SUFDbkQsR0FBRTtRQUFDQTtLQUFlO0lBQ2xCLHFCQUNJLDhEQUFDUzs7MEJBQ0QsOERBQUNDOztvQkFBSztvQkFBcUJSOzs7Ozs7O1lBQ3pCO2dCQUFDO2dCQUFHO2dCQUFHO2dCQUFHO2dCQUFHO2dCQUFHO2FBQUUsQ0FBQ1MsR0FBRyxDQUFDLENBQUNDO2dCQUN0QixxQkFDSSw4REFBQ0g7b0JBQWtCSSxhQUFhO3dCQUM1Qlosa0JBQWtCVzt3QkFDbEJULG1CQUFtQkQsa0JBQWtCO3dCQUNyQ0ssUUFBUUMsR0FBRyxDQUFDLGdCQUF3QixPQUFSSTtvQkFDaEM7OEJBQ0EsNEVBQUNkLGdFQUFtQkE7d0JBQ3BCZ0IsY0FBYywwQkFBa0MsT0FBUkYsU0FBUTt3QkFDaERHLGdCQUFnQiwwQkFBa0MsT0FBUkgsU0FBUTt3QkFDbERJLEtBQUk7Ozs7OzttQkFSTUo7Ozs7O1lBV2xCOzs7Ozs7O0FBR1I7R0ExQk1iO0tBQUFBO0FBNEJOLCtEQUFlQSx3QkFBd0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSW1hZ2VDaGFuZ2VPbk1vdXNlU2Nyb2xsLmpzPzM2MGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2VUb2dnbGVPblNjcm9sbCBmcm9tICcuLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbCc7XG5cblxuY29uc3QgSW1hZ2VDaGFuZ2VPbk1vdXNlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjdXJyZW50SW1hZ2VJZCwgc2V0Q3VycmVudEltYWdlSWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW21vdXNlRXZlbnRDb3VudCwgc2V0TW91c2VFdmVudENvdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC50aXRsZSA9IGBzcGVha2VyOiAke2N1cnJlbnRJbWFnZUlkfWA7XG4gICAgICAgIGNvbnNvbGUubG9nKGB1c2VFZmZlY3Q6IHNldHRpbmcgdGhlIHRpdGxlIHRvICR7Y3VycmVudEltYWdlSWR9YCk7XG4gICAgfSxbY3VycmVudEltYWdlSWRdKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8c3Bhbj5Nb3VzZSBFbnZlbnQgQ291bnQ6IHttb3VzZUV2ZW50Q291bnR9PC9zcGFuPlxuICAgICAgICB7IFsxLCAyLCAzLCA0LCA1LCA2XS5tYXAoKGltYWdlSWQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ltYWdlSWR9IG9uTW91c2VPdmVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRJbWFnZUlkKGltYWdlSWQpO1xuICAgICAgICAgICAgICAgICAgICBzZXRNb3VzZUV2ZW50Q291bnQobW91c2VFdmVudENvdW50ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBvbiBtb3VzZU92ZXIgJHtpbWFnZUlkfWApO1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsXG4gICAgICAgICAgICAgICAgcHJpbWFyeUltYWdlPXtgL3N0YXRpYy9pbWFnZXMvYncvaW1hZ2Uke2ltYWdlSWR9LmpwZWdgfVxuICAgICAgICAgICAgICAgIHNlY29uZGFyeUltYWdlPXtgL3N0YXRpYy9pbWFnZXMvYncvaW1hZ2Uke2ltYWdlSWR9LmpwZWdgfVxuICAgICAgICAgICAgICAgIGFsdD0nJyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuICAgICAgICBcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2hhbmdlT25Nb3VzZVNjcm9sbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2VUb2dnbGVPblNjcm9sbCIsIkltYWdlQ2hhbmdlT25Nb3VzZVNjcm9sbCIsImN1cnJlbnRJbWFnZUlkIiwic2V0Q3VycmVudEltYWdlSWQiLCJtb3VzZUV2ZW50Q291bnQiLCJzZXRNb3VzZUV2ZW50Q291bnQiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsImRpdiIsInNwYW4iLCJtYXAiLCJpbWFnZUlkIiwib25Nb3VzZU92ZXIiLCJwcmltYXJ5SW1hZ2UiLCJzZWNvbmRhcnlJbWFnZSIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnMouseScroll.js\n"));

/***/ })

});