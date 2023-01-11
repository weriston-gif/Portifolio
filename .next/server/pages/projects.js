"use strict";
(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Projects)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_style_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(995);



function Projects() {
    const { 0: itemsApi , 1: setItemsApi  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let abortController = new AbortController();
        function getGitHubAPI() {
            fetch('https://api.github.com/users/weriston-gif/repos').then(async (res)=>{
                if (!res.ok) {
                    throw new Error(res.status);
                }
                var data = await res.json();
                setItemsApi(data);
            }).catch((e)=>console.log(e)
            );
        }
        getGitHubAPI();
        return ()=>abortController.abort()
        ;
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_style_project__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_style_project__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_style_project__WEBPACK_IMPORTED_MODULE_2__.Ul, {
                children: itemsApi.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_style_project__WEBPACK_IMPORTED_MODULE_2__.Li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_style_project__WEBPACK_IMPORTED_MODULE_2__/* .TitleProject */ .c0, {
                                children: item.name.toUpperCase()
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_style_project__WEBPACK_IMPORTED_MODULE_2__/* .Url */ .R9, {
                                children: [
                                    "URL: ",
                                    item.url
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_style_project__WEBPACK_IMPORTED_MODULE_2__/* .Created_at */ .hu, {
                                children: [
                                    "Data Cria\xe7\xe3o: ",
                                    Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))
                                ]
                            })
                        ]
                    }, item.id)
                )
            })
        })
    }));
};


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [995], () => (__webpack_exec__(604)));
module.exports = __webpack_exports__;

})();