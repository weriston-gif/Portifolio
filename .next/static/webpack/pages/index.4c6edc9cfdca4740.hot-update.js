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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Content\": function() { return /* binding */ Content; },\n/* harmony export */   \"Infos\": function() { return /* binding */ Infos; },\n/* harmony export */   \"StyledIntro\": function() { return /* binding */ StyledIntro; },\n/* harmony export */   \"Name\": function() { return /* binding */ Name; },\n/* harmony export */   \"Function\": function() { return /* binding */ Function; },\n/* harmony export */   \"Intro\": function() { return /* binding */ Intro; },\n/* harmony export */   \"LinkProjects\": function() { return /* binding */ LinkProjects; },\n/* harmony export */   \"Logo\": function() { return /* binding */ Logo; },\n/* harmony export */   \"Img\": function() { return /* binding */ Img; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  height: calc(100vh - 100px);\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 1120px;\\n  height: 100%;\\n  justify-content: space-around;\\n  display: flex;\\n  align-items: center;\\n  padding: 20px;\\n\\n  @media (max-width: 600px) {\\n    padding: 5px;\\n  }\\n  \\n  @media (max-width: 760px) {\\n    flex-direction: column-reverse;\\n    justify-content: space-around;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  text-align: start;\\n  width: 50%;\\n  display: grid;\\n\\n  @media (max-width: 760px) {\\n    width: 90%;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  /* Estilos para o componente Intro */\\n\\n  ul {\\n    list-style-type: none; /* Remover o ponto padr\\xe3o da lista */\\n    padding-left: 0; /* Remover o recuo padr\\xe3o da lista */\\n  }\\n\\n  li {\\n    margin-top: 0.5em; /* Aumentar o espa\\xe7amento superior entre os itens da lista */\\n    margin-bottom: 0.5em; /* Aumentar o espa\\xe7amento inferior entre os itens da lista */\\n  }\\n\\n  li:before {\\n    content: '>'; /* Utilizar um ponto personalizado como marcador */\\n    display: inline-block;\\n    width: 1em;\\n    margin-left: -1em; /* Alinhar o marcador \\xe0 esquerda */\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 20px;\\n  font-weight: 500;\\n\\n  @media (max-width: 760px) {\\n    font-size: 15px;\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color:  rgb(156, 225, 234);\\n  margin-top: 10px;\\n  margin-bottom: 10px;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color:  rgb(156, 225, 234);\\n  text-align: justify;\\n  margin-top: 10px;\\n\\n\\n  @media (max-width: 760px) {\\n    font-size: 15px;\\n  }\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 10rem;\\n  padding: 10px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  margin-top: 20px;\\n  font-weight: bold;\\n\\n  svg {\\n    font-size: 20px;\\n  }\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 50%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  img {\\n    width: 300px !important;\\n      height: 400px !important;\\n  }\\n\\n  @media (max-width: 760px) {\\n    width: 60px;\\n  }\\n\\n\"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    var data = _taggedTemplateLiteral([\n        \"\"\n    ]);\n    _templateObject9 = function _templateObject9() {\n        return data;\n    };\n    return data;\n}\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"indexStyle__Container\",\n    componentId: \"sc-42452b99-0\"\n})(_templateObject());\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"indexStyle__Content\",\n    componentId: \"sc-42452b99-1\"\n})(_templateObject1());\nvar Infos = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"indexStyle__Infos\",\n    componentId: \"sc-42452b99-2\"\n})(_templateObject2());\nvar StyledIntro = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"indexStyle__StyledIntro\",\n    componentId: \"sc-42452b99-3\"\n})(_templateObject3());\nvar Name = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n    displayName: \"indexStyle__Name\",\n    componentId: \"sc-42452b99-4\"\n})(_templateObject4());\nvar Function = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n    displayName: \"indexStyle__Function\",\n    componentId: \"sc-42452b99-5\"\n})(_templateObject5());\nvar Intro = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n    displayName: \"indexStyle__Intro\",\n    componentId: \"sc-42452b99-6\"\n})(_templateObject6());\nvar LinkProjects = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n    displayName: \"indexStyle__LinkProjects\",\n    componentId: \"sc-42452b99-7\"\n})(_templateObject7());\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"indexStyle__Logo\",\n    componentId: \"sc-42452b99-8\"\n})(_templateObject8());\nvar Img = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img.withConfig({\n    displayName: \"indexStyle__Img\",\n    componentId: \"sc-42452b99-9\"\n})(_templateObject9());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvaW5kZXhTdHlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQzs7Ozs7Ozs7Ozs7OztRQUVGLENBS3BDOzs7Ozs7Ozs7UUFFa0MsQ0FnQmxDOzs7Ozs7Ozs7UUFFZ0MsQ0FRaEM7Ozs7Ozs7OztRQUVzQyxDQW1CdEM7Ozs7Ozs7OztRQUVnQyxDQU9oQzs7Ozs7Ozs7O1FBRW9DLENBSXBDOzs7Ozs7Ozs7UUFFaUMsQ0FTakM7Ozs7Ozs7OztRQUUwQyxDQVkxQzs7Ozs7Ozs7O1FBRStCLENBZS9COzs7Ozs7Ozs7UUFFOEI7Ozs7Ozs7QUFqSHZCLEdBQUssQ0FBQ0MsU0FBUyxHQUFHRCx3RUFBVTs7OztBQU81QixHQUFLLENBQUNHLE9BQU8sR0FBR0gsd0VBQVU7Ozs7QUFrQjFCLEdBQUssQ0FBQ0ksS0FBSyxHQUFHSix3RUFBVTs7OztBQVV4QixHQUFLLENBQUNLLFdBQVcsR0FBR0wsd0VBQVU7Ozs7QUFxQjlCLEdBQUssQ0FBQ00sSUFBSSxHQUFHTix5RUFBVzs7OztBQVN4QixHQUFLLENBQUNRLFFBQVEsR0FBR1IseUVBQVc7Ozs7QUFNNUIsR0FBSyxDQUFDUyxLQUFLLEdBQUdULHlFQUFXOzs7O0FBV3pCLEdBQUssQ0FBQ1UsWUFBWSxHQUFHViwyRUFBYTs7OztBQWNsQyxHQUFLLENBQUNZLElBQUksR0FBR1osd0VBQVU7Ozs7QUFpQnZCLEdBQUssQ0FBQ2EsR0FBRyxHQUFHYix3RUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvaW5kZXhTdHlsZS5qcz9lMzVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTEyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5mb3MgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZ3JpZDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkSW50cm8gPSBzdHlsZWQuZGl2YFxuICAvKiBFc3RpbG9zIHBhcmEgbyBjb21wb25lbnRlIEludHJvICovXG5cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgLyogUmVtb3ZlciBvIHBvbnRvIHBhZHLDo28gZGEgbGlzdGEgKi9cbiAgICBwYWRkaW5nLWxlZnQ6IDA7IC8qIFJlbW92ZXIgbyByZWN1byBwYWRyw6NvIGRhIGxpc3RhICovXG4gIH1cblxuICBsaSB7XG4gICAgbWFyZ2luLXRvcDogMC41ZW07IC8qIEF1bWVudGFyIG8gZXNwYcOnYW1lbnRvIHN1cGVyaW9yIGVudHJlIG9zIGl0ZW5zIGRhIGxpc3RhICovXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07IC8qIEF1bWVudGFyIG8gZXNwYcOnYW1lbnRvIGluZmVyaW9yIGVudHJlIG9zIGl0ZW5zIGRhIGxpc3RhICovXG4gIH1cblxuICBsaTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICc+JzsgLyogVXRpbGl6YXIgdW0gcG9udG8gcGVyc29uYWxpemFkbyBjb21vIG1hcmNhZG9yICovXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IC0xZW07IC8qIEFsaW5oYXIgbyBtYXJjYWRvciDDoCBlc3F1ZXJkYSAqL1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTmFtZSA9IHN0eWxlZC5zcGFuYFxuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRnVuY3Rpb24gPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICByZ2IoMTU2LCAyMjUsIDIzNCk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgSW50cm8gPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICByZ2IoMTU2LCAyMjUsIDIzNCk7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5rUHJvamVjdHMgPSBzdHlsZWQuYnV0dG9uYFxuICB3aWR0aDogMTByZW07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcblxuICBzdmcge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBpbWcge1xuICAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gICAgd2lkdGg6IDYwcHg7XG4gIH1cblxuYDtcblxuZXhwb3J0IGNvbnN0IEltZyA9IHN0eWxlZC5pbWdgYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb250YWluZXIiLCJkaXYiLCJDb250ZW50IiwiSW5mb3MiLCJTdHlsZWRJbnRybyIsIk5hbWUiLCJzcGFuIiwiRnVuY3Rpb24iLCJJbnRybyIsIkxpbmtQcm9qZWN0cyIsImJ1dHRvbiIsIkxvZ28iLCJJbWciLCJpbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/indexStyle.js\n");

/***/ })

});