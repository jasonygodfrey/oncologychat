/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[2]!./pages/Home.module.css":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[2]!./pages/Home.module.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Home_container__sNFgY {\\n    position: absolute; /* Positions the container absolutely */\\n    top: 50%; /* Positions the container at the vertical center */\\n    left: 50%; /* Positions the container at the horizontal center */\\n    transform: translate(-50%, -50%); /* Centers the container */\\n    text-align: center;\\n    padding: 50px;\\n    z-index: 1; /* Ensures the container is above the app */\\n}\\n\\n.Home_link__Che7E {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    height: calc(100px - 16px); \\n    padding: 8px; \\n    background-color: transparent;\\n    text-decoration: none;\\n    font-size: 20px;\\n    transition: border 0.3s, -webkit-text-decoration 0.3s;\\n    transition: text-decoration 0.3s, border 0.3s;\\n    transition: text-decoration 0.3s, border 0.3s, -webkit-text-decoration 0.3s; \\n    border: 3.5px solid white; \\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);  /* Adding text shadow */\\n    font-family: \\\"Nimbus Sans\\\", sans-serif; /* Use the Nimbus Sans font */\\n    font-weight: 900;\\n    letter-spacing: -0.1255813953488372vw;\\n}\\n\\n.Home_link__Che7E[href=\\\"/rlt\\\"] {\\n    color: #fc4526;\\n    border-color: #fc4526; /* Red border color for RED LETTER TITLE link */\\n}\\n\\n.Home_link__Che7E[href=\\\"/br\\\"] {\\n    color: limegreen;\\n    border-color: limegreen; /* Green border color for BLOOD RAVE link */\\n}\\n\\n.Home_link__Che7E:hover {\\n    text-decoration: none;\\n    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.0);  /* Adding text shadow */\\n\\n    \\n}\\n\\n.Home_link__Che7E:hover[href=\\\"/rlt\\\"] {\\n    color: black;\\n    background-color: #fc4526;\\n\\n}\\n\\n.Home_link__Che7E:hover[href=\\\"/br\\\"] {\\n    color: black;\\n    background-color: limegreen;\\n}\\n\\n#Home_app__DVuXV {\\n    position: absolute; /* Positions the app absolutely */\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    z-index: 0; /* Ensures the app is behind the container */\\n}\\n/* General styling for the chat container */\\n.Home_chatContainer__zT2eu {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    width: 100%;\\n    max-width: 600px;\\n    margin: 20px auto;\\n    padding: 20px;\\n    border: 1px solid #ddd;\\n    border-radius: 10px;\\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\\n    background-color: #f9f9f9;\\n}\\n\\n/* Styling for the chat history area */\\n.Home_chatHistory__5Zkoz {\\n    width: 100%;\\n    height: 300px;\\n    overflow-y: auto;\\n    margin-bottom: 20px;\\n    padding: 10px;\\n    border: 1px solid #ccc;\\n    border-radius: 5px;\\n    background-color: white;\\n}\\n\\n/* Individual chat message styling */\\n.Home_userMessage__8Sl1E, .Home_botMessage__8nx2L {\\n    margin-bottom: 10px;\\n    padding: 8px 12px;\\n    border-radius: 20px;\\n    color: white;\\n    max-width: 80%;\\n}\\n\\n.Home_userMessage__8Sl1E {\\n    align-self: flex-end;\\n    background-color: #007bff;\\n}\\n\\n.Home_botMessage__8nx2L {\\n    align-self: flex-start;\\n    background-color: #4caf50;\\n}\\n\\n\\n\\n\\n\\n/* Updated Input field and button styling */\\n/* Input field styling */\\n.Home_inputField__HMEJZ {\\n    width: calc(100% - 100px);\\n    padding: 10px;\\n    margin-right: 10px;\\n    border: 1px solid #ddd;\\n    border-radius: 5px;\\n    box-sizing: border-box;\\n}\\n.Home_sendButton__B3dte {\\n    width: 80px;\\n    padding: 10px;\\n    border: none;\\n    border-radius: 5px;\\n    background-color: #007bff;\\n    color: white;\\n    cursor: pointer;\\n    transition: background-color 0.3s;\\n}\\n\\n.Home_sendButton__B3dte:hover {\\n    background-color: #0056b3;\\n}\\n\\n.Home_threeContainer__8GK3v {\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    z-index: 1;\\n\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://pages/Home.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,kBAAkB,EAAE,uCAAuC;IAC3D,QAAQ,EAAE,mDAAmD;IAC7D,SAAS,EAAE,qDAAqD;IAChE,gCAAgC,EAAE,0BAA0B;IAC5D,kBAAkB;IAClB,aAAa;IACb,UAAU,EAAE,2CAA2C;AAC3D;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,0BAA0B;IAC1B,YAAY;IACZ,6BAA6B;IAC7B,qBAAqB;IACrB,eAAe;IACf,qDAA6C;IAA7C,6CAA6C;IAA7C,2EAA6C;IAC7C,yBAAyB;IACzB,2CAA2C,GAAG,uBAAuB;IACrE,sCAAsC,EAAE,6BAA6B;IACrE,gBAAgB;IAChB,qCAAqC;AACzC;;AAEA;IACI,cAAc;IACd,qBAAqB,EAAE,+CAA+C;AAC1E;;AAEA;IACI,gBAAgB;IAChB,uBAAuB,EAAE,2CAA2C;AACxE;;AAEA;IACI,qBAAqB;IACrB,2CAA2C,GAAG,uBAAuB;;;AAGzE;;AAEA;IACI,YAAY;IACZ,yBAAyB;;AAE7B;;AAEA;IACI,YAAY;IACZ,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB,EAAE,iCAAiC;IACrD,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,UAAU,EAAE,4CAA4C;AAC5D;AACA,2CAA2C;AAC3C;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,wCAAwC;IACxC,yBAAyB;AAC7B;;AAEA,sCAAsC;AACtC;IACI,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA,oCAAoC;AACpC;IACI,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;AAC7B;;;;;;AAMA,2CAA2C;AAC3C,wBAAwB;AACxB;IACI,yBAAyB;IACzB,aAAa;IACb,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,sBAAsB;AAC1B;AACA;IACI,WAAW;IACX,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,UAAU;;AAEd\",\"sourcesContent\":[\".container {\\n    position: absolute; /* Positions the container absolutely */\\n    top: 50%; /* Positions the container at the vertical center */\\n    left: 50%; /* Positions the container at the horizontal center */\\n    transform: translate(-50%, -50%); /* Centers the container */\\n    text-align: center;\\n    padding: 50px;\\n    z-index: 1; /* Ensures the container is above the app */\\n}\\n\\n.link {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    height: calc(100px - 16px); \\n    padding: 8px; \\n    background-color: transparent;\\n    text-decoration: none;\\n    font-size: 20px;\\n    transition: text-decoration 0.3s, border 0.3s; \\n    border: 3.5px solid white; \\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);  /* Adding text shadow */\\n    font-family: \\\"Nimbus Sans\\\", sans-serif; /* Use the Nimbus Sans font */\\n    font-weight: 900;\\n    letter-spacing: -0.1255813953488372vw;\\n}\\n\\n.link[href=\\\"/rlt\\\"] {\\n    color: #fc4526;\\n    border-color: #fc4526; /* Red border color for RED LETTER TITLE link */\\n}\\n\\n.link[href=\\\"/br\\\"] {\\n    color: limegreen;\\n    border-color: limegreen; /* Green border color for BLOOD RAVE link */\\n}\\n\\n.link:hover {\\n    text-decoration: none;\\n    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.0);  /* Adding text shadow */\\n\\n    \\n}\\n\\n.link:hover[href=\\\"/rlt\\\"] {\\n    color: black;\\n    background-color: #fc4526;\\n\\n}\\n\\n.link:hover[href=\\\"/br\\\"] {\\n    color: black;\\n    background-color: limegreen;\\n}\\n\\n#app {\\n    position: absolute; /* Positions the app absolutely */\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    z-index: 0; /* Ensures the app is behind the container */\\n}\\n/* General styling for the chat container */\\n.chatContainer {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    width: 100%;\\n    max-width: 600px;\\n    margin: 20px auto;\\n    padding: 20px;\\n    border: 1px solid #ddd;\\n    border-radius: 10px;\\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\\n    background-color: #f9f9f9;\\n}\\n\\n/* Styling for the chat history area */\\n.chatHistory {\\n    width: 100%;\\n    height: 300px;\\n    overflow-y: auto;\\n    margin-bottom: 20px;\\n    padding: 10px;\\n    border: 1px solid #ccc;\\n    border-radius: 5px;\\n    background-color: white;\\n}\\n\\n/* Individual chat message styling */\\n.userMessage, .botMessage {\\n    margin-bottom: 10px;\\n    padding: 8px 12px;\\n    border-radius: 20px;\\n    color: white;\\n    max-width: 80%;\\n}\\n\\n.userMessage {\\n    align-self: flex-end;\\n    background-color: #007bff;\\n}\\n\\n.botMessage {\\n    align-self: flex-start;\\n    background-color: #4caf50;\\n}\\n\\n\\n\\n\\n\\n/* Updated Input field and button styling */\\n/* Input field styling */\\n.inputField {\\n    width: calc(100% - 100px);\\n    padding: 10px;\\n    margin-right: 10px;\\n    border: 1px solid #ddd;\\n    border-radius: 5px;\\n    box-sizing: border-box;\\n}\\n.sendButton {\\n    width: 80px;\\n    padding: 10px;\\n    border: none;\\n    border-radius: 5px;\\n    background-color: #007bff;\\n    color: white;\\n    cursor: pointer;\\n    transition: background-color 0.3s;\\n}\\n\\n.sendButton:hover {\\n    background-color: #0056b3;\\n}\\n\\n.threeContainer {\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    z-index: 1;\\n\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"Home_container__sNFgY\",\n\t\"link\": \"Home_link__Che7E\",\n\t\"app\": \"Home_app__DVuXV\",\n\t\"chatContainer\": \"Home_chatContainer__zT2eu\",\n\t\"chatHistory\": \"Home_chatHistory__5Zkoz\",\n\t\"userMessage\": \"Home_userMessage__8Sl1E\",\n\t\"botMessage\": \"Home_botMessage__8nx2L\",\n\t\"inputField\": \"Home_inputField__HMEJZ\",\n\t\"sendButton\": \"Home_sendButton__B3dte\",\n\t\"threeContainer\": \"Home_threeContainer__8GK3v\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10ub25lT2ZbOF0udXNlWzJdIS4vcGFnZXMvSG9tZS5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSxrRUFBa0UsMEJBQTBCLHdEQUF3RCxxRUFBcUUsOEZBQThGLG9EQUFvRCxvQkFBb0Isa0JBQWtCLCtDQUErQyx1QkFBdUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsa0NBQWtDLG9CQUFvQixvQ0FBb0MsNEJBQTRCLHNCQUFzQiw0REFBNEQsb0RBQW9ELG1GQUFtRixpQ0FBaUMsb0RBQW9ELHdFQUF3RSxxREFBcUQsNENBQTRDLEdBQUcsc0NBQXNDLHFCQUFxQiw2QkFBNkIsbURBQW1ELHFDQUFxQyx1QkFBdUIsK0JBQStCLCtDQUErQyw2QkFBNkIsNEJBQTRCLG9EQUFvRCxtQ0FBbUMsNENBQTRDLG1CQUFtQixnQ0FBZ0MsS0FBSywyQ0FBMkMsbUJBQW1CLGtDQUFrQyxHQUFHLHNCQUFzQiwwQkFBMEIsK0NBQStDLGNBQWMsa0JBQWtCLG1CQUFtQixrQkFBa0IsZ0RBQWdELDRFQUE0RSxvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsa0JBQWtCLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsK0NBQStDLGdDQUFnQyxHQUFHLHVFQUF1RSxrQkFBa0Isb0JBQW9CLHVCQUF1QiwwQkFBMEIsb0JBQW9CLDZCQUE2Qix5QkFBeUIsOEJBQThCLEdBQUcsOEZBQThGLDBCQUEwQix3QkFBd0IsMEJBQTBCLG1C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O0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0hvbWUubW9kdWxlLmNzcz83OTViIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuSG9tZV9jb250YWluZXJfX3NORmdZIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAvKiBQb3NpdGlvbnMgdGhlIGNvbnRhaW5lciBhYnNvbHV0ZWx5ICovXFxuICAgIHRvcDogNTAlOyAvKiBQb3NpdGlvbnMgdGhlIGNvbnRhaW5lciBhdCB0aGUgdmVydGljYWwgY2VudGVyICovXFxuICAgIGxlZnQ6IDUwJTsgLyogUG9zaXRpb25zIHRoZSBjb250YWluZXIgYXQgdGhlIGhvcml6b250YWwgY2VudGVyICovXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAvKiBDZW50ZXJzIHRoZSBjb250YWluZXIgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICB6LWluZGV4OiAxOyAvKiBFbnN1cmVzIHRoZSBjb250YWluZXIgaXMgYWJvdmUgdGhlIGFwcCAqL1xcbn1cXG5cXG4uSG9tZV9saW5rX19DaGU3RSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwcHggLSAxNnB4KTsgXFxuICAgIHBhZGRpbmc6IDhweDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuM3MsIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uIDAuM3M7XFxuICAgIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAwLjNzLCBib3JkZXIgMC4zcztcXG4gICAgdHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDAuM3MsIGJvcmRlciAwLjNzLCAtd2Via2l0LXRleHQtZGVjb3JhdGlvbiAwLjNzOyBcXG4gICAgYm9yZGVyOiAzLjVweCBzb2xpZCB3aGl0ZTsgXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7ICAvKiBBZGRpbmcgdGV4dCBzaGFkb3cgKi9cXG4gICAgZm9udC1mYW1pbHk6IFxcXCJOaW1idXMgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7IC8qIFVzZSB0aGUgTmltYnVzIFNhbnMgZm9udCAqL1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTI1NTgxMzk1MzQ4ODM3MnZ3O1xcbn1cXG5cXG4uSG9tZV9saW5rX19DaGU3RVtocmVmPVxcXCIvcmx0XFxcIl0ge1xcbiAgICBjb2xvcjogI2ZjNDUyNjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmM0NTI2OyAvKiBSZWQgYm9yZGVyIGNvbG9yIGZvciBSRUQgTEVUVEVSIFRJVExFIGxpbmsgKi9cXG59XFxuXFxuLkhvbWVfbGlua19fQ2hlN0VbaHJlZj1cXFwiL2JyXFxcIl0ge1xcbiAgICBjb2xvcjogbGltZWdyZWVuO1xcbiAgICBib3JkZXItY29sb3I6IGxpbWVncmVlbjsgLyogR3JlZW4gYm9yZGVyIGNvbG9yIGZvciBCTE9PRCBSQVZFIGxpbmsgKi9cXG59XFxuXFxuLkhvbWVfbGlua19fQ2hlN0U6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMCk7ICAvKiBBZGRpbmcgdGV4dCBzaGFkb3cgKi9cXG5cXG4gICAgXFxufVxcblxcbi5Ib21lX2xpbmtfX0NoZTdFOmhvdmVyW2hyZWY9XFxcIi9ybHRcXFwiXSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjNDUyNjtcXG5cXG59XFxuXFxuLkhvbWVfbGlua19fQ2hlN0U6aG92ZXJbaHJlZj1cXFwiL2JyXFxcIl0ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcXG59XFxuXFxuI0hvbWVfYXBwX19EVnVYViB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogUG9zaXRpb25zIHRoZSBhcHAgYWJzb2x1dGVseSAqL1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IDA7IC8qIEVuc3VyZXMgdGhlIGFwcCBpcyBiZWhpbmQgdGhlIGNvbnRhaW5lciAqL1xcbn1cXG4vKiBHZW5lcmFsIHN0eWxpbmcgZm9yIHRoZSBjaGF0IGNvbnRhaW5lciAqL1xcbi5Ib21lX2NoYXRDb250YWluZXJfX3pUMmV1IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBtYXJnaW46IDIwcHggYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIGNoYXQgaGlzdG9yeSBhcmVhICovXFxuLkhvbWVfY2hhdEhpc3RvcnlfXzVaa296IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIEluZGl2aWR1YWwgY2hhdCBtZXNzYWdlIHN0eWxpbmcgKi9cXG4uSG9tZV91c2VyTWVzc2FnZV9fOFNsMUUsIC5Ib21lX2JvdE1lc3NhZ2VfXzhueDJMIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi5Ib21lX3VzZXJNZXNzYWdlX184U2wxRSB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbn1cXG5cXG4uSG9tZV9ib3RNZXNzYWdlX184bngyTCB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XFxufVxcblxcblxcblxcblxcblxcbi8qIFVwZGF0ZWQgSW5wdXQgZmllbGQgYW5kIGJ1dHRvbiBzdHlsaW5nICovXFxuLyogSW5wdXQgZmllbGQgc3R5bGluZyAqL1xcbi5Ib21lX2lucHV0RmllbGRfX0hNRUpaIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5Ib21lX3NlbmRCdXR0b25fX0IzZHRlIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG5cXG4uSG9tZV9zZW5kQnV0dG9uX19CM2R0ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxufVxcblxcbi5Ib21lX3RocmVlQ29udGFpbmVyX184R0szdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vcGFnZXMvSG9tZS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCLEVBQUUsdUNBQXVDO0lBQzNELFFBQVEsRUFBRSxtREFBbUQ7SUFDN0QsU0FBUyxFQUFFLHFEQUFxRDtJQUNoRSxnQ0FBZ0MsRUFBRSwwQkFBMEI7SUFDNUQsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVLEVBQUUsMkNBQTJDO0FBQzNEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixxREFBNkM7SUFBN0MsNkNBQTZDO0lBQTdDLDJFQUE2QztJQUM3Qyx5QkFBeUI7SUFDekIsMkNBQTJDLEdBQUcsdUJBQXVCO0lBQ3JFLHNDQUFzQyxFQUFFLDZCQUE2QjtJQUNyRSxnQkFBZ0I7SUFDaEIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQixFQUFFLCtDQUErQztBQUMxRTs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUIsRUFBRSwyQ0FBMkM7QUFDeEU7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMkNBQTJDLEdBQUcsdUJBQXVCOzs7QUFHekU7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0IsRUFBRSxpQ0FBaUM7SUFDckQsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVUsRUFBRSw0Q0FBNEM7QUFDNUQ7QUFDQSwyQ0FBMkM7QUFDM0M7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLHlCQUF5QjtBQUM3Qjs7QUFFQSxzQ0FBc0M7QUFDdEM7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBLG9DQUFvQztBQUNwQztJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7Ozs7OztBQU1BLDJDQUEyQztBQUMzQyx3QkFBd0I7QUFDeEI7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTs7QUFFZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAvKiBQb3NpdGlvbnMgdGhlIGNvbnRhaW5lciBhYnNvbHV0ZWx5ICovXFxuICAgIHRvcDogNTAlOyAvKiBQb3NpdGlvbnMgdGhlIGNvbnRhaW5lciBhdCB0aGUgdmVydGljYWwgY2VudGVyICovXFxuICAgIGxlZnQ6IDUwJTsgLyogUG9zaXRpb25zIHRoZSBjb250YWluZXIgYXQgdGhlIGhvcml6b250YWwgY2VudGVyICovXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAvKiBDZW50ZXJzIHRoZSBjb250YWluZXIgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICB6LWluZGV4OiAxOyAvKiBFbnN1cmVzIHRoZSBjb250YWluZXIgaXMgYWJvdmUgdGhlIGFwcCAqL1xcbn1cXG5cXG4ubGluayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwcHggLSAxNnB4KTsgXFxuICAgIHBhZGRpbmc6IDhweDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDAuM3MsIGJvcmRlciAwLjNzOyBcXG4gICAgYm9yZGVyOiAzLjVweCBzb2xpZCB3aGl0ZTsgXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7ICAvKiBBZGRpbmcgdGV4dCBzaGFkb3cgKi9cXG4gICAgZm9udC1mYW1pbHk6IFxcXCJOaW1idXMgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7IC8qIFVzZSB0aGUgTmltYnVzIFNhbnMgZm9udCAqL1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTI1NTgxMzk1MzQ4ODM3MnZ3O1xcbn1cXG5cXG4ubGlua1tocmVmPVxcXCIvcmx0XFxcIl0ge1xcbiAgICBjb2xvcjogI2ZjNDUyNjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmM0NTI2OyAvKiBSZWQgYm9yZGVyIGNvbG9yIGZvciBSRUQgTEVUVEVSIFRJVExFIGxpbmsgKi9cXG59XFxuXFxuLmxpbmtbaHJlZj1cXFwiL2JyXFxcIl0ge1xcbiAgICBjb2xvcjogbGltZWdyZWVuO1xcbiAgICBib3JkZXItY29sb3I6IGxpbWVncmVlbjsgLyogR3JlZW4gYm9yZGVyIGNvbG9yIGZvciBCTE9PRCBSQVZFIGxpbmsgKi9cXG59XFxuXFxuLmxpbms6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMCk7ICAvKiBBZGRpbmcgdGV4dCBzaGFkb3cgKi9cXG5cXG4gICAgXFxufVxcblxcbi5saW5rOmhvdmVyW2hyZWY9XFxcIi9ybHRcXFwiXSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjNDUyNjtcXG5cXG59XFxuXFxuLmxpbms6aG92ZXJbaHJlZj1cXFwiL2JyXFxcIl0ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcXG59XFxuXFxuI2FwcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogUG9zaXRpb25zIHRoZSBhcHAgYWJzb2x1dGVseSAqL1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IDA7IC8qIEVuc3VyZXMgdGhlIGFwcCBpcyBiZWhpbmQgdGhlIGNvbnRhaW5lciAqL1xcbn1cXG4vKiBHZW5lcmFsIHN0eWxpbmcgZm9yIHRoZSBjaGF0IGNvbnRhaW5lciAqL1xcbi5jaGF0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBtYXJnaW46IDIwcHggYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIGNoYXQgaGlzdG9yeSBhcmVhICovXFxuLmNoYXRIaXN0b3J5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIEluZGl2aWR1YWwgY2hhdCBtZXNzYWdlIHN0eWxpbmcgKi9cXG4udXNlck1lc3NhZ2UsIC5ib3RNZXNzYWdlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi51c2VyTWVzc2FnZSB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbn1cXG5cXG4uYm90TWVzc2FnZSB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XFxufVxcblxcblxcblxcblxcblxcbi8qIFVwZGF0ZWQgSW5wdXQgZmllbGQgYW5kIGJ1dHRvbiBzdHlsaW5nICovXFxuLyogSW5wdXQgZmllbGQgc3R5bGluZyAqL1xcbi5pbnB1dEZpZWxkIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5zZW5kQnV0dG9uIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG5cXG4uc2VuZEJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxufVxcblxcbi50aHJlZUNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fc05GZ1lcIixcblx0XCJsaW5rXCI6IFwiSG9tZV9saW5rX19DaGU3RVwiLFxuXHRcImFwcFwiOiBcIkhvbWVfYXBwX19EVnVYVlwiLFxuXHRcImNoYXRDb250YWluZXJcIjogXCJIb21lX2NoYXRDb250YWluZXJfX3pUMmV1XCIsXG5cdFwiY2hhdEhpc3RvcnlcIjogXCJIb21lX2NoYXRIaXN0b3J5X181WmtvelwiLFxuXHRcInVzZXJNZXNzYWdlXCI6IFwiSG9tZV91c2VyTWVzc2FnZV9fOFNsMUVcIixcblx0XCJib3RNZXNzYWdlXCI6IFwiSG9tZV9ib3RNZXNzYWdlX184bngyTFwiLFxuXHRcImlucHV0RmllbGRcIjogXCJIb21lX2lucHV0RmllbGRfX0hNRUpaXCIsXG5cdFwic2VuZEJ1dHRvblwiOiBcIkhvbWVfc2VuZEJ1dHRvbl9fQjNkdGVcIixcblx0XCJ0aHJlZUNvbnRhaW5lclwiOiBcIkhvbWVfdGhyZWVDb250YWluZXJfXzhHSzN2XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[2]!./pages/Home.module.css\n"));

/***/ })

});