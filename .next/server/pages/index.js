"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(290);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/indexStyle.js

const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-d99ece3e-0"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;
const Content = external_styled_components_default().div.withConfig({
    componentId: "sc-d99ece3e-1"
})`
  width: 1120px;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 5px;
  }
  
  @media (max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;
const Infos = external_styled_components_default().div.withConfig({
    componentId: "sc-d99ece3e-2"
})`
  text-align: start;
  width: 50%;
  display: grid;

  @media (max-width: 760px) {
    width: 80%;
  }
`;
const StyledIntro = external_styled_components_default().div.withConfig({
    componentId: "sc-d99ece3e-3"
})`
  /* Estilos para o componente Intro */

  ul {
    list-style-type: none; /* Remover o ponto padrão da lista */
    padding-left: 0; /* Remover o recuo padrão da lista */
  }

  li {
    margin-top: 0.5em; /* Aumentar o espaçamento superior entre os itens da lista */
    margin-bottom: 0.5em; /* Aumentar o espaçamento inferior entre os itens da lista */
  }

  li:before {
    content: '>'; /* Utilizar um ponto personalizado como marcador */
    display: inline-block;
    width: 1em;
    margin-left: -1em; /* Alinhar o marcador à esquerda */
  }
`;
const Name = external_styled_components_default().span.withConfig({
    componentId: "sc-d99ece3e-4"
})`
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 760px) {
    font-size: 15px;
  }
`;
const Function = external_styled_components_default().span.withConfig({
    componentId: "sc-d99ece3e-5"
})`
  color:  rgb(156, 225, 234);
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Intro = external_styled_components_default().span.withConfig({
    componentId: "sc-d99ece3e-6"
})`
  color:  rgb(156, 225, 234);
  text-align: justify;
  margin-top: 10px;


  @media (max-width: 760px) {
    font-size: 15px;
  }
`;
const LinkProjects = external_styled_components_default().button.withConfig({
    componentId: "sc-d99ece3e-7"
})`
width: 100%;
padding: 10px;
display: flex;
align-items: center;
justify-content: space-around;
margin-top: 20px;
font-weight: bold;

svg {
  font-size: 20px;
}

@media (max-width: 760px) {
  font-size: 14px;
  padding: 8px;
}
`;
const Logo = external_styled_components_default().div.withConfig({
    componentId: "sc-d99ece3e-8"
})`
display: flex;
align-items: center;
justify-content: center;

img {
  max-width: 100%;
  height: auto;
  width: auto\9; /* Adicione essa regra para oferecer suporte a navegadores antigos do Internet Explorer */
  max-height: 400px; /* Defina a altura máxima desejada */
}

@media (max-width: 760px) {
  img {
    max-height: 200px; /* Ajuste a altura máxima para dispositivos móveis */
  }
}

`;
const Img = external_styled_components_default().img.withConfig({
    componentId: "sc-d99ece3e-9"
})``;

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/style-project.js
var style_project = __webpack_require__(995);
;// CONCATENATED MODULE: external "react-bootstrap/ProgressBar"
const ProgressBar_namespaceObject = require("react-bootstrap/ProgressBar");
;// CONCATENATED MODULE: ./components/Softskill/index.jsx




function Softskill() {
    const progressBar = {
        height: '30px'
    };
    const containerStyles = {
        height: 20,
        width: '80%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
    };
    const fillerStyles = {
        height: '100%',
        width: '90%',
        backgroundColor: "#13E4F9",
        borderRadius: 'inherit',
        textAlign: 'right'
    };
    const fillerStyles2 = {
        height: '100%',
        width: '80%',
        backgroundColor: "#13E4F9",
        borderRadius: 'inherit',
        textAlign: 'right'
    };
    const fillerStyles3 = {
        height: '100%',
        width: '60%',
        backgroundColor: "#13E4F9",
        borderRadius: 'inherit',
        textAlign: 'right'
    };
    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Rubik'
    };
    return(/*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("h1", {
                className: "title-skills",
                children: "SKILLS"
            }),
            /*#__PURE__*/ _jsxs(Ul, {
                children: [
                    /*#__PURE__*/ _jsxs(Li, {
                        children: [
                            "Front-end :",
                            /*#__PURE__*/ _jsx("div", {
                                style: containerStyles,
                                children: /*#__PURE__*/ _jsx("div", {
                                    style: fillerStyles,
                                    children: /*#__PURE__*/ _jsx("span", {
                                        style: labelStyles,
                                        children: 90
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(Li, {
                        children: [
                            "Back-end :",
                            /*#__PURE__*/ _jsx("div", {
                                style: containerStyles,
                                children: /*#__PURE__*/ _jsx("div", {
                                    style: fillerStyles,
                                    children: /*#__PURE__*/ _jsx("span", {
                                        style: labelStyles,
                                        children: 90
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(Li, {
                        children: [
                            "Web :",
                            /*#__PURE__*/ _jsx("div", {
                                style: containerStyles,
                                children: /*#__PURE__*/ _jsx("div", {
                                    style: fillerStyles2,
                                    children: /*#__PURE__*/ _jsx("span", {
                                        style: labelStyles,
                                        children: 80
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(Li, {
                        children: [
                            "AWS :",
                            /*#__PURE__*/ _jsx("div", {
                                style: containerStyles,
                                children: /*#__PURE__*/ _jsx("div", {
                                    style: fillerStyles3,
                                    children: /*#__PURE__*/ _jsx("span", {
                                        style: labelStyles,
                                        children: 60
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/pages/index.jsx





function Home() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Content, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Infos, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Name, {
                                children: "Desenvolvedor Web Full Stack | PHP | JavaScript | BDD"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Intro, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Desenvolvedor Web Full Stack com mais de 3 anos de experi\xeancia, especializado em frameworks como YII2, LARAVEL e Next.js. Expertise em desenvolvimento de aplica\xe7\xf5es web e tecnologias AWS."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Principais compet\xeancias:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledIntro, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Desenvolvimento e manuten\xe7\xe3o de aplica\xe7\xf5es web com YII2 e LARAVEL."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Cria\xe7\xe3o de APIs RESTful para integra\xe7\xe3o de sistemas."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Implementa\xe7\xe3o de funcionalidades front-end com HTML, CSS e JavaScript."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Utiliza\xe7\xe3o de bancos de dados MySQL e MongoDB."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Implanta\xe7\xe3o e gerenciamento de aplica\xe7\xf5es na AWS."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Colabora\xe7\xe3o em equipes \xe1geis com Scrum."
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "projects",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LinkProjects, {
                                    children: [
                                        "PROJETOS ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaArrowRight, {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "timeline",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LinkProjects, {
                                    children: [
                                        "TimeLine Profissional ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaArrowRight, {})
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Img, {
                            className: "image-container",
                            src: "https://avatars.githubusercontent.com/u/64429216?v=4",
                            alt: "logo"
                        })
                    })
                ]
            })
        })
    }));
};


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,995], () => (__webpack_exec__(348)));
module.exports = __webpack_exports__;

})();