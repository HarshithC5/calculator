(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(_,e,t){},4:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Harshith_C_Shetty_Dropbox_PC_Desktop_CG_Study_WEB_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_dom_client__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react_dom_client__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_2__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(C_Users_Harshith_C_Shetty_Dropbox_PC_Desktop_CG_Study_WEB_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),calc=_useState2[0],setCalc=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(C_Users_Harshith_C_Shetty_Dropbox_PC_Desktop_CG_Study_WEB_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),result=_useState4[0],setResult=_useState4[1],ops=["/","*","+","-","."],updateCalc=function updateCalc(value){ops.includes(value)&&""===calc||ops.includes(value)&&ops.includes(calc.slice(-1))||(setCalc(calc+value),ops.includes(value)||setResult(eval(calc+value).toString()))},createDigits=function(){for(var _=[],e=function(e){_.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return updateCalc(e.toString())},key:e},e))},t=1;t<10;t++)e(t);return _},calculate=function calculate(){setCalc(eval(calc.toString()))},deleteLast=function(){if(""!=calc){var _=calc.slice(0,-1);setCalc(_)}};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"App"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"display"},result?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,"(",result,")"):"","\xa0",calc||"0"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"operators"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return updateCalc("/")}},"/"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return updateCalc("*")}},"*"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return updateCalc("+")}},"+"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return updateCalc("-")}},"-"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:deleteLast},"DEL")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"digits"},createDigits(),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return updateCalc("0")}},"0"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return updateCalc(".")}},"."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:calculate},"="))))}__webpack_exports__.a=App},5:function(_,e,t){_.exports=t(6)},6:function(_,e,t){"use strict";t.r(e);var a=t(0),c=t.n(a),l=t(1),r=t.n(l),u=(t(15),t(4));r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u.a,null)))}},[[5,2,1]]]);
//# sourceMappingURL=main.f6a003fe.chunk.js.map