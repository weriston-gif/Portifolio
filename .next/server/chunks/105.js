"use strict";
exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Content": () => (/* binding */ Content),
/* harmony export */   "Ul": () => (/* binding */ Ul),
/* harmony export */   "Li": () => (/* binding */ Li),
/* harmony export */   "TitleProject": () => (/* binding */ TitleProject),
/* harmony export */   "Url": () => (/* binding */ Url),
/* harmony export */   "Created_at": () => (/* binding */ Created_at)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-5087da8a-0"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-5087da8a-1"
})`
  width: 1120px;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 5px;
  }
`;
const Ul = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
    componentId: "sc-5087da8a-2"
})`
  overflow-x: auto;
  height: inherit;

  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
    background-color: whitesmoke; 
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: darkgray; 
  }
`;
const Li = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
    componentId: "sc-5087da8a-3"
})`
  display: flex;
  flex-direction: column;
  text-align: start;
  word-break: break-word;
  margin: 10px 10px 20px;
  box-shadow: 1px 1px 1px 2px gray;
  gap: 5px;
  border-radius: 10px;
  padding: 10px;

  @media (max-width: 760px) {
   font-size: 13px;
  }
`;
const TitleProject = styled_components__WEBPACK_IMPORTED_MODULE_0___default().strong.withConfig({
    componentId: "sc-5087da8a-4"
})``;
const Url = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-5087da8a-5"
})``;
const Created_at = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-5087da8a-6"
})``;


/***/ })

};
;