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

/***/ "./styles/indexStyle.js":
/*!******************************!*\
  !*** ./styles/indexStyle.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Content\": function() { return /* binding */ Content; },\n/* harmony export */   \"Infos\": function() { return /* binding */ Infos; },\n/* harmony export */   \"StyledIntro\": function() { return /* binding */ StyledIntro; },\n/* harmony export */   \"Name\": function() { return /* binding */ Name; },\n/* harmony export */   \"Function\": function() { return /* binding */ Function; },\n/* harmony export */   \"Intro\": function() { return /* binding */ Intro; },\n/* harmony export */   \"LinkProjects\": function() { return /* binding */ LinkProjects; },\n/* harmony export */   \"Logo\": function() { return /* binding */ Logo; },\n/* harmony export */   \"Img\": function() { return /* binding */ Img; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  height: calc(100vh - 100px);\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 1120px;\\n  height: 100%;\\n  justify-content: space-around;\\n  display: flex;\\n  align-items: center;\\n  padding: 20px;\\n\\n  @media (max-width: 600px) {\\n    padding: 5px;\\n  }\\n  \\n  @media (max-width: 760px) {\\n    flex-direction: column-reverse;\\n    justify-content: space-around;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  text-align: start;\\n  width: 50%;\\n  display: grid;\\n\\n  @media (max-width: 760px) {\\n    width: 90%;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  /* Estilos para o componente Intro */\\n\\n  ul {\\n    list-style-type: none; /* Remover o ponto padr\\xe3o da lista */\\n    padding-left: 0; /* Remover o recuo padr\\xe3o da lista */\\n  }\\n\\n  li {\\n    margin-top: 0.5em; /* Aumentar o espa\\xe7amento superior entre os itens da lista */\\n    margin-bottom: 0.5em; /* Aumentar o espa\\xe7amento inferior entre os itens da lista */\\n  }\\n\\n  li:before {\\n    content: '>'; /* Utilizar um ponto personalizado como marcador */\\n    display: inline-block;\\n    width: 1em;\\n    margin-left: -1em; /* Alinhar o marcador \\xe0 esquerda */\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 20px;\\n  font-weight: 500;\\n\\n  @media (max-width: 760px) {\\n    font-size: 15px;\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color:  rgb(156, 225, 234);\\n  margin-top: 10px;\\n  margin-bottom: 10px;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color:  rgb(156, 225, 234);\\n  text-align: justify;\\n  margin-top: 10px;\\n\\n\\n  @media (max-width: 760px) {\\n    font-size: 15px;\\n  }\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 10rem;\\n  padding: 10px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  margin-top: 20px;\\n  font-weight: bold;\\n\\n  svg {\\n    font-size: 20px;\\n  }\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 50%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  img {\\n    width: 300px !important;\\n      height: 400px !important;\\n  }\\n\\n  @media (max-width: 760px) {\\n    width: 60px;\\n  }\\n\\n  @media (max-width: 600px) {\\n\\n    img {\\n      width: 100% !important;\\n      height: 100% !important;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    var data = _taggedTemplateLiteral([\n        \"\"\n    ]);\n    _templateObject9 = function _templateObject9() {\n        return data;\n    };\n    return data;\n}\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"indexStyle__Container\",\n    componentId: \"sc-e3e8f8ca-0\"\n})(_templateObject());\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"indexStyle__Content\",\n    componentId: \"sc-e3e8f8ca-1\"\n})(_templateObject1());\nvar Infos = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"indexStyle__Infos\",\n    componentId: \"sc-e3e8f8ca-2\"\n})(_templateObject2());\nvar StyledIntro = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"indexStyle__StyledIntro\",\n    componentId: \"sc-e3e8f8ca-3\"\n})(_templateObject3());\nvar Name = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n    displayName: \"indexStyle__Name\",\n    componentId: \"sc-e3e8f8ca-4\"\n})(_templateObject4());\nvar Function = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n    displayName: \"indexStyle__Function\",\n    componentId: \"sc-e3e8f8ca-5\"\n})(_templateObject5());\nvar Intro = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n    displayName: \"indexStyle__Intro\",\n    componentId: \"sc-e3e8f8ca-6\"\n})(_templateObject6());\nvar LinkProjects = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n    displayName: \"indexStyle__LinkProjects\",\n    componentId: \"sc-e3e8f8ca-7\"\n})(_templateObject7());\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"indexStyle__Logo\",\n    componentId: \"sc-e3e8f8ca-8\"\n})(_templateObject8());\nvar Img = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img.withConfig({\n    displayName: \"indexStyle__Img\",\n    componentId: \"sc-e3e8f8ca-9\"\n})(_templateObject9());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvaW5kZXhTdHlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQzs7Ozs7Ozs7Ozs7OztRQUVGLENBS3BDOzs7Ozs7Ozs7UUFFa0MsQ0FnQmxDOzs7Ozs7Ozs7UUFFZ0MsQ0FRaEM7Ozs7Ozs7OztRQUVzQyxDQW1CdEM7Ozs7Ozs7OztRQUVnQyxDQU9oQzs7Ozs7Ozs7O1FBRW9DLENBSXBDOzs7Ozs7Ozs7UUFFaUMsQ0FTakM7Ozs7Ozs7OztRQUUwQyxDQVkxQzs7Ozs7Ozs7O1FBRStCLENBc0IvQjs7Ozs7Ozs7O1FBRThCOzs7Ozs7O0FBeEh2QixHQUFLLENBQUNDLFNBQVMsR0FBR0Qsd0VBQVU7Ozs7QUFPNUIsR0FBSyxDQUFDRyxPQUFPLEdBQUdILHdFQUFVOzs7O0FBa0IxQixHQUFLLENBQUNJLEtBQUssR0FBR0osd0VBQVU7Ozs7QUFVeEIsR0FBSyxDQUFDSyxXQUFXLEdBQUdMLHdFQUFVOzs7O0FBcUI5QixHQUFLLENBQUNNLElBQUksR0FBR04seUVBQVc7Ozs7QUFTeEIsR0FBSyxDQUFDUSxRQUFRLEdBQUdSLHlFQUFXOzs7O0FBTTVCLEdBQUssQ0FBQ1MsS0FBSyxHQUFHVCx5RUFBVzs7OztBQVd6QixHQUFLLENBQUNVLFlBQVksR0FBR1YsMkVBQWE7Ozs7QUFjbEMsR0FBSyxDQUFDWSxJQUFJLEdBQUdaLHdFQUFVOzs7O0FBd0J2QixHQUFLLENBQUNhLEdBQUcsR0FBR2Isd0VBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2luZGV4U3R5bGUuanM/ZTM1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDExMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEluZm9zID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEludHJvID0gc3R5bGVkLmRpdmBcbiAgLyogRXN0aWxvcyBwYXJhIG8gY29tcG9uZW50ZSBJbnRybyAqL1xuXG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IC8qIFJlbW92ZXIgbyBwb250byBwYWRyw6NvIGRhIGxpc3RhICovXG4gICAgcGFkZGluZy1sZWZ0OiAwOyAvKiBSZW1vdmVyIG8gcmVjdW8gcGFkcsOjbyBkYSBsaXN0YSAqL1xuICB9XG5cbiAgbGkge1xuICAgIG1hcmdpbi10b3A6IDAuNWVtOyAvKiBBdW1lbnRhciBvIGVzcGHDp2FtZW50byBzdXBlcmlvciBlbnRyZSBvcyBpdGVucyBkYSBsaXN0YSAqL1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtOyAvKiBBdW1lbnRhciBvIGVzcGHDp2FtZW50byBpbmZlcmlvciBlbnRyZSBvcyBpdGVucyBkYSBsaXN0YSAqL1xuICB9XG5cbiAgbGk6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnPic7IC8qIFV0aWxpemFyIHVtIHBvbnRvIHBlcnNvbmFsaXphZG8gY29tbyBtYXJjYWRvciAqL1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAtMWVtOyAvKiBBbGluaGFyIG8gbWFyY2Fkb3Igw6AgZXNxdWVyZGEgKi9cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE5hbWUgPSBzdHlsZWQuc3BhbmBcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZ1bmN0aW9uID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAgcmdiKDE1NiwgMjI1LCAyMzQpO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEludHJvID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAgcmdiKDE1NiwgMjI1LCAyMzQpO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuXG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTGlua1Byb2plY3RzID0gc3R5bGVkLmJ1dHRvbmBcbiAgd2lkdGg6IDEwcmVtO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgc3ZnIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogNDAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAgIHdpZHRoOiA2MHB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEltZyA9IHN0eWxlZC5pbWdgYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb250YWluZXIiLCJkaXYiLCJDb250ZW50IiwiSW5mb3MiLCJTdHlsZWRJbnRybyIsIk5hbWUiLCJzcGFuIiwiRnVuY3Rpb24iLCJJbnRybyIsIkxpbmtQcm9qZWN0cyIsImJ1dHRvbiIsIkxvZ28iLCJJbWciLCJpbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/indexStyle.js\n");

/***/ })

});