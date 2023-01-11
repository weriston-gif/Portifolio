"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Contact)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/style-contact.js

const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-10ce584e-0"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;
const Content = external_styled_components_default().div.withConfig({
    componentId: "sc-10ce584e-1"
})`
  width: 1120px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(290);
;// CONCATENATED MODULE: ./components/ItemContact/style.js

const Item = external_styled_components_default().div.withConfig({
    componentId: "sc-b0551549-0"
})`
  margin-top: 40px;
  width: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  word-break: break-word;

  
  @media (max-width: 760px) {
   font-size: 12px;
  }
`;
const Icon = external_styled_components_default().div.withConfig({
    componentId: "sc-b0551549-1"
})`
  margin-right: 10px;
  display: flex;

  svg {
    width: 30px;
    height: 30px;
  }
`;
const Text = external_styled_components_default().div.withConfig({
    componentId: "sc-b0551549-2"
})`
  color: white;
  text-align: start;
`;

;// CONCATENATED MODULE: ./components/ItemContact/index.jsx



function ItemContact({ IconFa , LinkContact  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Item, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(IconFa, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                children: LinkContact
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/pages/contact/index.jsx





function Contact() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Container, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Content, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ItemContact, {
                    IconFa: fa_.FaLinkedin,
                    LinkContact: "https://www.linkedin.com/in/weriston-carlos-p-alves-960327172/"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ItemContact, {
                    IconFa: fa_.FaGithub,
                    LinkContact: "https://github.com/weriston-gif"
                })
            ]
        })
    }));
};


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
var __webpack_exports__ = (__webpack_exec__(939));
module.exports = __webpack_exports__;

})();