"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,976];
exports.modules = {

/***/ 299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Header/style.js

const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-92e106e4-0"
})`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
`;
const Content = external_styled_components_default().div.withConfig({
    componentId: "sc-92e106e4-1"
})`
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
const Title = external_styled_components_default().div.withConfig({
    componentId: "sc-92e106e4-2"
})`
  font-size: 30px;
`;
const NavLinks = external_styled_components_default().nav.withConfig({
    componentId: "sc-92e106e4-3"
})`
  display: flex;
  gap: 20px;

  @media (max-width: 560px) {
    flex-direction: column;
    background-color: #161616;
    position: fixed;
    height: 100%;

    gap: 0px;
    top: 0px;
    right: 0px;
    width: 60%;
    right: ${(props)=>props.sidebar ? '0' : '-100%'
};
    transition: 0.5s;

    a {
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;
const Ancora = external_styled_components_default().a.withConfig({
    componentId: "sc-92e106e4-4"
})`
  font-size: 20px;
  height: 100px;
  transition: 0.3s;
  
  &.active {
    background-color: black;
  }

  @media (min-width: 560px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
`;
const Menu = external_styled_components_default().div.withConfig({
    componentId: "sc-92e106e4-5"
})`
  font-size: 30px;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;
const CloseSidebar = external_styled_components_default().div.withConfig({
    componentId: "sc-92e106e4-6"
})`
  font-size: 30px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;
const ContentTitle = external_styled_components_default().div.withConfig({
    componentId: "sc-92e106e4-7"
})`
  text-align: end;
`;
const SubTitle = external_styled_components_default().span.withConfig({
    componentId: "sc-92e106e4-8"
})``;

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(290);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/Header/index.jsx






function Header() {
    const { 0: sidebar , 1: setSidebar  } = (0,external_react_.useState)(false);
    const { asPath  } = (0,router_namespaceObject.useRouter)();
    const showSiderbar = ()=>setSidebar(!sidebar)
    ;
    function activeLink(path) {
        return asPath === `/${path}` ? 'active' : '';
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(Container, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Content, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentTitle, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                            children: "Weriston Carlos"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SubTitle, {
                            children: "Portfolio Pessoal"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaBars, {
                        onClick: showSiderbar
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavLinks, {
                    sidebar: sidebar,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(CloseSidebar, {
                            onClick: showSiderbar,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTimes, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Ancora, {
                                className: activeLink(''),
                                onClick: showSiderbar,
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "projects",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Ancora, {
                                className: activeLink('projects'),
                                onClick: showSiderbar,
                                children: "Projetos"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "contact",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Ancora, {
                                className: activeLink('contact'),
                                onClick: showSiderbar,
                                children: "Contato"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/pages/_app.jsx




function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Weris | Dev"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(299)));
module.exports = __webpack_exports__;

})();