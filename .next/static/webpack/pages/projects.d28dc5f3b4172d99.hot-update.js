"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./src/pages/projects/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/projects/index.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var _home_weriston_Portifolio_JS_websibe_personal_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_weriston_Portifolio_JS_websibe_personal_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_weriston_Portifolio_JS_websibe_personal_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./src/pages/projects/style.js\");\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Projects() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), itemsApi = ref[0], setItemsApi = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getGitHubAPI = function getGitHubAPI() {\n            fetch('https://api.github.com/users/weriston-gif/repos').then(function() {\n                var _ref = _asyncToGenerator(_home_weriston_Portifolio_JS_websibe_personal_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(res) {\n                    var data;\n                    return _home_weriston_Portifolio_JS_websibe_personal_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                if (res.ok) {\n                                    _ctx.next = 2;\n                                    break;\n                                }\n                                throw new Error(res.status);\n                            case 2:\n                                _ctx.next = 4;\n                                return res.json();\n                            case 4:\n                                data = _ctx.sent;\n                                setItemsApi(data);\n                            case 6:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return function(res) {\n                    return _ref.apply(this, arguments);\n                };\n            }()).catch(function(e) {\n                return console.log(e);\n            });\n        };\n        var abortController = new AbortController();\n        getGitHubAPI();\n        return function() {\n            return abortController.abort();\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Content, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Ul, {\n                children: itemsApi.map(function(item) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Li, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.TitleProject, {\n                                children: item.name.toUpperCase()\n                            }, void 0, false, {\n                                fileName: \"/home/weriston/Portifolio JS/websibe-personal/src/pages/projects/index.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                                href: \"{\",\n                                children: [\n                                    \"link: \",\n                                    item.url\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/weriston/Portifolio JS/websibe-personal/src/pages/projects/index.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Created_at, {\n                                children: [\n                                    \"Data Cria\\xe7\\xe3o: \",\n                                    Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/weriston/Portifolio JS/websibe-personal/src/pages/projects/index.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"/home/weriston/Portifolio JS/websibe-personal/src/pages/projects/index.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/weriston/Portifolio JS/websibe-personal/src/pages/projects/index.jsx\",\n                lineNumber: 30,\n                columnNumber: 8\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/weriston/Portifolio JS/websibe-personal/src/pages/projects/index.jsx\",\n            lineNumber: 29,\n            columnNumber: 6\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/weriston/Portifolio JS/websibe-personal/src/pages/projects/index.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this));\n};\n_s(Projects, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdHMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEUsUUFBUSxDQUFDVSxRQUFRLEdBQUcsQ0FBQzs7O0lBQ2xDLEdBQUssQ0FBMkJSLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBcENTLFFBQVEsR0FBaUJULEdBQVksS0FBM0JVLFdBQVcsR0FBSVYsR0FBWTtJQUU1Q0QsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7WUFHTlksWUFBWSxHQUFyQixRQUFRLENBQUNBLFlBQVksR0FBRyxDQUFDO1lBQ3ZCQyxLQUFLLENBQUMsQ0FBaUQsa0RBQ3REQyxJQUFJO3NNQUFDLFFBQVEsU0FBRkMsR0FBRyxFQUFJLENBQUM7d0JBSWRDLElBQUk7Ozs7b0NBSEhELEdBQUcsQ0FBQ0UsRUFBRTs7OztnQ0FDVCxLQUFLLENBQUMsR0FBRyxDQUFDQyxLQUFLLENBQUNILEdBQUcsQ0FBQ0ksTUFBTTs7O3VDQUVYSixHQUFHLENBQUNLLElBQUk7O2dDQUFyQkosSUFBSTtnQ0FDUkwsV0FBVyxDQUFDSyxJQUFJOzs7Ozs7Z0JBQ2xCLENBQUM7Z0NBTldELEdBQUc7OztpQkFPZE0sS0FBSyxDQUFDQyxRQUFRLENBQVJBLENBQUM7Z0JBQUlDLE1BQU0sQ0FBTkEsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUM7O1FBQzNCLENBQUM7UUFaRCxHQUFHLENBQUNHLGVBQWUsR0FBRyxHQUFHLENBQUNDLGVBQWU7UUFjekNkLFlBQVk7UUFFWixNQUFNLENBQUMsUUFBUTtZQUFGYSxNQUFNLENBQU5BLGVBQWUsQ0FBQ0UsS0FBSzs7SUFDcEMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sNkVBQ0h6Qiw2Q0FBUzs4RkFDUkMsMkNBQU87a0dBQ0xDLHNDQUFFOzBCQUNETSxRQUFRLENBQUNrQixHQUFHLENBQUNDLFFBQVEsQ0FBUkEsSUFBSTtrQ0FDaEIsTUFBTSwrREFBTHhCLHNDQUFFOzt3R0FDQUMsZ0RBQVk7MENBQUV1QixJQUFJLENBQUNDLElBQUksQ0FBQ0MsV0FBVzs7Ozs7O3dHQUNuQ0MsQ0FBSTtnQ0FBQ0MsSUFBSSxFQUFDLENBQUc7O29DQUFDLENBQU07b0NBQUNKLElBQUksQ0FBQ0ssR0FBRzs7Ozs7Ozt3R0FDN0IxQiw4Q0FBVTs7b0NBQUMsQ0FBYztvQ0FBRTJCLElBQUksQ0FBQ0MsY0FBYyxDQUFDLENBQU8sUUFDcERDLE1BQU0sQ0FBQyxHQUFHLENBQUNDLElBQUksQ0FBQ1QsSUFBSSxDQUFDVSxVQUFVOzs7Ozs7Ozt1QkFKM0JWLElBQUksQ0FBQ1csRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTFCLENBQUM7R0F4Q3VCL0IsUUFBUTtLQUFSQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9qZWN0cy9pbmRleC5qc3g/M2EwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGFpbmVyLCBDb250ZW50LCBVbCwgTGksIFRpdGxlUHJvamVjdCwgVXJsLCBDcmVhdGVkX2F0IH0gZnJvbSAnLi9zdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XG4gIGNvbnN0IFtpdGVtc0FwaSwgc2V0SXRlbXNBcGldID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpOyBcblxuICAgIGZ1bmN0aW9uIGdldEdpdEh1YkFQSSgpIHtcbiAgICAgIGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL3dlcmlzdG9uLWdpZi9yZXBvcycpXG4gICAgICAudGhlbihhc3luYyByZXMgPT4ge1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXMuc3RhdHVzKVxuICAgICAgICB9XG4gICAgICAgIHZhciBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgICBzZXRJdGVtc0FwaShkYXRhKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKVxuICAgIH1cblxuICAgIGdldEdpdEh1YkFQSSgpXG5cbiAgICByZXR1cm4gKCkgPT4gYWJvcnRDb250cm9sbGVyLmFib3J0KCk7ICBcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICA8Q29udGVudD5cbiAgICAgICA8VWw+XG4gICAgICAgIHtpdGVtc0FwaS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgPExpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICA8VGl0bGVQcm9qZWN0PntpdGVtLm5hbWUudG9VcHBlckNhc2UoKX08L1RpdGxlUHJvamVjdD5cbiAgICAgICAgICAgIDxsaW5rIGhyZWY9J3snPmxpbms6IHtpdGVtLnVybH08L2xpbms+XG4gICAgICAgICAgICA8Q3JlYXRlZF9hdD5EYXRhIENyaWHDp8OjbzogeyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdwdC1CUicpXG4gICAgICAgICAgICAgIC5mb3JtYXQobmV3IERhdGUoaXRlbS5jcmVhdGVkX2F0KSl9XG4gICAgICAgICAgICA8L0NyZWF0ZWRfYXQ+XG4gICAgICAgICAgPC9MaT5cbiAgICAgICAgKSl9XG4gICAgICAgPC9VbD5cbiAgICAgPC9Db250ZW50PlxuICAgPC9Db250YWluZXI+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIkNvbnRlbnQiLCJVbCIsIkxpIiwiVGl0bGVQcm9qZWN0IiwiVXJsIiwiQ3JlYXRlZF9hdCIsIlByb2plY3RzIiwiaXRlbXNBcGkiLCJzZXRJdGVtc0FwaSIsImdldEdpdEh1YkFQSSIsImZldGNoIiwidGhlbiIsInJlcyIsImRhdGEiLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsImNhdGNoIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJhYm9ydENvbnRyb2xsZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJhYm9ydCIsIm1hcCIsIml0ZW0iLCJuYW1lIiwidG9VcHBlckNhc2UiLCJsaW5rIiwiaHJlZiIsInVybCIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsImZvcm1hdCIsIkRhdGUiLCJjcmVhdGVkX2F0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/projects/index.jsx\n");

/***/ })

});