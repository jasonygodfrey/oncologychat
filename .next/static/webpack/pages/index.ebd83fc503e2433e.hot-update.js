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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Home_container__sNFgY {\\n    position: absolute; /* Positions the container absolutely */\\n    top: 50%; /* Positions the container at the vertical center */\\n    left: 50%; /* Positions the container at the horizontal center */\\n    transform: translate(-50%, -50%); /* Centers the container */\\n    text-align: center;\\n    padding: 50px;\\n    z-index: 1; /* Ensures the container is above the app */\\n}\\n\\n.Home_link__Che7E {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    height: calc(100px - 16px); \\n    padding: 8px; \\n    background-color: transparent;\\n    text-decoration: none;\\n    font-size: 20px;\\n    transition: border 0.3s, -webkit-text-decoration 0.3s;\\n    transition: text-decoration 0.3s, border 0.3s;\\n    transition: text-decoration 0.3s, border 0.3s, -webkit-text-decoration 0.3s; \\n    border: 3.5px solid white; \\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);  /* Adding text shadow */\\n    font-family: \\\"Nimbus Sans\\\", sans-serif; /* Use the Nimbus Sans font */\\n    font-weight: 900;\\n    letter-spacing: -0.1255813953488372vw;\\n}\\n\\n.Home_link__Che7E[href=\\\"/rlt\\\"] {\\n    color: #fc4526;\\n    border-color: #fc4526; /* Red border color for RED LETTER TITLE link */\\n}\\n\\n.Home_link__Che7E[href=\\\"/br\\\"] {\\n    color: limegreen;\\n    border-color: limegreen; /* Green border color for BLOOD RAVE link */\\n}\\n\\n.Home_link__Che7E:hover {\\n    text-decoration: none;\\n    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.0);  /* Adding text shadow */\\n\\n    \\n}\\n\\n.Home_link__Che7E:hover[href=\\\"/rlt\\\"] {\\n    color: black;\\n    background-color: #fc4526;\\n\\n}\\n\\n.Home_link__Che7E:hover[href=\\\"/br\\\"] {\\n    color: black;\\n    background-color: limegreen;\\n}\\n\\n#Home_app__DVuXV {\\n    position: absolute; /* Positions the app absolutely */\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    z-index: 0; /* Ensures the app is behind the container */\\n}\\n/* General styling for the chat container */\\n.Home_chatContainer__zT2eu {\\n    position: absolute; \\n    top: 50%; \\n    left: 50%; \\n    transform: translate(-50%, -50%); /* Centers the container */\\n    z-index: 1000; /* High z-index to bring it to the front */\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    width: 100%;\\n    max-width: 600px;\\n    padding: 20px;\\n    border: 1px solid #dddddd0b;\\n    border-radius: 10px;\\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\\n    background-color: #f9f9f902;\\n}\\n\\n/* Styling for the chat history area */\\n.Home_chatHistory__5Zkoz {\\n    width: 100%;\\n    height: 300px;\\n    overflow-y: auto;\\n    margin-bottom: 20px;\\n    padding: 10px;\\n    border: 1px solid #ccc;\\n    border-radius: 5px;\\n    background-color: white;\\n}\\n\\n/* Individual chat message styling */\\n.Home_userMessage__8Sl1E, .Home_botMessage__8nx2L {\\n    margin-bottom: 10px;\\n    padding: 8px 12px;\\n    border-radius: 20px;\\n    color: white;\\n    max-width: 80%;\\n}\\n\\n.Home_userMessage__8Sl1E {\\n    align-self: flex-end;\\n    background-color: #007bff;\\n}\\n\\n.Home_botMessage__8nx2L {\\n    align-self: flex-start;\\n    background-color: #4caf50;\\n}\\n\\n\\n\\n\\n\\n/* Updated Input field and button styling */\\n/* Input field styling */\\n.Home_inputField__HMEJZ {\\n    width: calc(100% - 100px);\\n    padding: 10px;\\n    margin-right: 10px;\\n    border: 1px solid #ddd;\\n    border-radius: 5px;\\n    box-sizing: border-box;\\n}\\n.Home_sendButton__B3dte {\\n    width: 80px;\\n    padding: 10px;\\n    border: none;\\n    border-radius: 5px;\\n    background-color: #007bff;\\n    color: white;\\n    cursor: pointer;\\n    transition: background-color 0.3s;\\n}\\n\\n.Home_sendButton__B3dte:hover {\\n    background-color: #0056b3;\\n}\\n\\n.Home_threeContainer__8GK3v {\\n    position: relative;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    z-index: 1;\\n\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://pages/Home.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,kBAAkB,EAAE,uCAAuC;IAC3D,QAAQ,EAAE,mDAAmD;IAC7D,SAAS,EAAE,qDAAqD;IAChE,gCAAgC,EAAE,0BAA0B;IAC5D,kBAAkB;IAClB,aAAa;IACb,UAAU,EAAE,2CAA2C;AAC3D;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,0BAA0B;IAC1B,YAAY;IACZ,6BAA6B;IAC7B,qBAAqB;IACrB,eAAe;IACf,qDAA6C;IAA7C,6CAA6C;IAA7C,2EAA6C;IAC7C,yBAAyB;IACzB,2CAA2C,GAAG,uBAAuB;IACrE,sCAAsC,EAAE,6BAA6B;IACrE,gBAAgB;IAChB,qCAAqC;AACzC;;AAEA;IACI,cAAc;IACd,qBAAqB,EAAE,+CAA+C;AAC1E;;AAEA;IACI,gBAAgB;IAChB,uBAAuB,EAAE,2CAA2C;AACxE;;AAEA;IACI,qBAAqB;IACrB,2CAA2C,GAAG,uBAAuB;;;AAGzE;;AAEA;IACI,YAAY;IACZ,yBAAyB;;AAE7B;;AAEA;IACI,YAAY;IACZ,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB,EAAE,iCAAiC;IACrD,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,UAAU,EAAE,4CAA4C;AAC5D;AACA,2CAA2C;AAC3C;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC,EAAE,0BAA0B;IAC5D,aAAa,EAAE,0CAA0C;IACzD,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,wCAAwC;IACxC,2BAA2B;AAC/B;;AAEA,sCAAsC;AACtC;IACI,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA,oCAAoC;AACpC;IACI,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;AAC7B;;;;;;AAMA,2CAA2C;AAC3C,wBAAwB;AACxB;IACI,yBAAyB;IACzB,aAAa;IACb,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,sBAAsB;AAC1B;AACA;IACI,WAAW;IACX,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,UAAU;;AAEd\",\"sourcesContent\":[\".container {\\n    position: absolute; /* Positions the container absolutely */\\n    top: 50%; /* Positions the container at the vertical center */\\n    left: 50%; /* Positions the container at the horizontal center */\\n    transform: translate(-50%, -50%); /* Centers the container */\\n    text-align: center;\\n    padding: 50px;\\n    z-index: 1; /* Ensures the container is above the app */\\n}\\n\\n.link {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    height: calc(100px - 16px); \\n    padding: 8px; \\n    background-color: transparent;\\n    text-decoration: none;\\n    font-size: 20px;\\n    transition: text-decoration 0.3s, border 0.3s; \\n    border: 3.5px solid white; \\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);  /* Adding text shadow */\\n    font-family: \\\"Nimbus Sans\\\", sans-serif; /* Use the Nimbus Sans font */\\n    font-weight: 900;\\n    letter-spacing: -0.1255813953488372vw;\\n}\\n\\n.link[href=\\\"/rlt\\\"] {\\n    color: #fc4526;\\n    border-color: #fc4526; /* Red border color for RED LETTER TITLE link */\\n}\\n\\n.link[href=\\\"/br\\\"] {\\n    color: limegreen;\\n    border-color: limegreen; /* Green border color for BLOOD RAVE link */\\n}\\n\\n.link:hover {\\n    text-decoration: none;\\n    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.0);  /* Adding text shadow */\\n\\n    \\n}\\n\\n.link:hover[href=\\\"/rlt\\\"] {\\n    color: black;\\n    background-color: #fc4526;\\n\\n}\\n\\n.link:hover[href=\\\"/br\\\"] {\\n    color: black;\\n    background-color: limegreen;\\n}\\n\\n#app {\\n    position: absolute; /* Positions the app absolutely */\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    z-index: 0; /* Ensures the app is behind the container */\\n}\\n/* General styling for the chat container */\\n.chatContainer {\\n    position: absolute; \\n    top: 50%; \\n    left: 50%; \\n    transform: translate(-50%, -50%); /* Centers the container */\\n    z-index: 1000; /* High z-index to bring it to the front */\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    width: 100%;\\n    max-width: 600px;\\n    padding: 20px;\\n    border: 1px solid #dddddd0b;\\n    border-radius: 10px;\\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\\n    background-color: #f9f9f902;\\n}\\n\\n/* Styling for the chat history area */\\n.chatHistory {\\n    width: 100%;\\n    height: 300px;\\n    overflow-y: auto;\\n    margin-bottom: 20px;\\n    padding: 10px;\\n    border: 1px solid #ccc;\\n    border-radius: 5px;\\n    background-color: white;\\n}\\n\\n/* Individual chat message styling */\\n.userMessage, .botMessage {\\n    margin-bottom: 10px;\\n    padding: 8px 12px;\\n    border-radius: 20px;\\n    color: white;\\n    max-width: 80%;\\n}\\n\\n.userMessage {\\n    align-self: flex-end;\\n    background-color: #007bff;\\n}\\n\\n.botMessage {\\n    align-self: flex-start;\\n    background-color: #4caf50;\\n}\\n\\n\\n\\n\\n\\n/* Updated Input field and button styling */\\n/* Input field styling */\\n.inputField {\\n    width: calc(100% - 100px);\\n    padding: 10px;\\n    margin-right: 10px;\\n    border: 1px solid #ddd;\\n    border-radius: 5px;\\n    box-sizing: border-box;\\n}\\n.sendButton {\\n    width: 80px;\\n    padding: 10px;\\n    border: none;\\n    border-radius: 5px;\\n    background-color: #007bff;\\n    color: white;\\n    cursor: pointer;\\n    transition: background-color 0.3s;\\n}\\n\\n.sendButton:hover {\\n    background-color: #0056b3;\\n}\\n\\n.threeContainer {\\n    position: relative;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    z-index: 1;\\n\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"Home_container__sNFgY\",\n\t\"link\": \"Home_link__Che7E\",\n\t\"app\": \"Home_app__DVuXV\",\n\t\"chatContainer\": \"Home_chatContainer__zT2eu\",\n\t\"chatHistory\": \"Home_chatHistory__5Zkoz\",\n\t\"userMessage\": \"Home_userMessage__8Sl1E\",\n\t\"botMessage\": \"Home_botMessage__8nx2L\",\n\t\"inputField\": \"Home_inputField__HMEJZ\",\n\t\"sendButton\": \"Home_sendButton__B3dte\",\n\t\"threeContainer\": \"Home_threeContainer__8GK3v\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10ub25lT2ZbOF0udXNlWzJdIS4vcGFnZXMvSG9tZS5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSxrRUFBa0UsMEJBQTBCLHdEQUF3RCxxRUFBcUUsOEZBQThGLG9EQUFvRCxvQkFBb0Isa0JBQWtCLCtDQUErQyx1QkFBdUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsa0NBQWtDLG9CQUFvQixvQ0FBb0MsNEJBQTRCLHNCQUFzQiw0REFBNEQsb0RBQW9ELG1GQUFtRixpQ0FBaUMsb0RBQW9ELHdFQUF3RSxxREFBcUQsNENBQTRDLEdBQUcsc0NBQXNDLHFCQUFxQiw2QkFBNkIsbURBQW1ELHFDQUFxQyx1QkFBdUIsK0JBQStCLCtDQUErQyw2QkFBNkIsNEJBQTRCLG9EQUFvRCxtQ0FBbUMsNENBQTRDLG1CQUFtQixnQ0FBZ0MsS0FBSywyQ0FBMkMsbUJBQW1CLGtDQUFrQyxHQUFHLHNCQUFzQiwwQkFBMEIsK0NBQStDLGNBQWMsa0JBQWtCLG1CQUFtQixrQkFBa0IsZ0RBQWdELDRFQUE0RSwwQkFBMEIsZ0JBQWdCLGlCQUFpQix3Q0FBd0MsZ0RBQWdELHdFQUF3RSwwQkFBMEIsOEJBQThCLGtCQUFrQix1QkFBdUIsb0JBQW9CLGtDQUFrQywwQkFBMEIsK0NBQStDLGtDQUFrQyxHQUFHLHVFQUF1RSxrQkFBa0Isb0JBQW9CLHVCQUF1QiwwQkFBMEIsb0JBQW9CLDZCQUE2Qix5QkFBeUIsOEJBQThCLEdBQUcsOEZBQThGLDBC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QUFtQjtBQUMxMVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Ib21lLm1vZHVsZS5jc3M/Nzk1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkhvbWVfY29udGFpbmVyX19zTkZnWSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogUG9zaXRpb25zIHRoZSBjb250YWluZXIgYWJzb2x1dGVseSAqL1xcbiAgICB0b3A6IDUwJTsgLyogUG9zaXRpb25zIHRoZSBjb250YWluZXIgYXQgdGhlIHZlcnRpY2FsIGNlbnRlciAqL1xcbiAgICBsZWZ0OiA1MCU7IC8qIFBvc2l0aW9ucyB0aGUgY29udGFpbmVyIGF0IHRoZSBob3Jpem9udGFsIGNlbnRlciAqL1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgLyogQ2VudGVycyB0aGUgY29udGFpbmVyICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgei1pbmRleDogMTsgLyogRW5zdXJlcyB0aGUgY29udGFpbmVyIGlzIGFib3ZlIHRoZSBhcHAgKi9cXG59XFxuXFxuLkhvbWVfbGlua19fQ2hlN0Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHB4IC0gMTZweCk7IFxcbiAgICBwYWRkaW5nOiA4cHg7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjNzLCAtd2Via2l0LXRleHQtZGVjb3JhdGlvbiAwLjNzO1xcbiAgICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4zcywgYm9yZGVyIDAuM3M7XFxuICAgIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAwLjNzLCBib3JkZXIgMC4zcywgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24gMC4zczsgXFxuICAgIGJvcmRlcjogMy41cHggc29saWQgd2hpdGU7IFxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpOyAgLyogQWRkaW5nIHRleHQgc2hhZG93ICovXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTmltYnVzIFNhbnNcXFwiLCBzYW5zLXNlcmlmOyAvKiBVc2UgdGhlIE5pbWJ1cyBTYW5zIGZvbnQgKi9cXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjEyNTU4MTM5NTM0ODgzNzJ2dztcXG59XFxuXFxuLkhvbWVfbGlua19fQ2hlN0VbaHJlZj1cXFwiL3JsdFxcXCJdIHtcXG4gICAgY29sb3I6ICNmYzQ1MjY7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZjNDUyNjsgLyogUmVkIGJvcmRlciBjb2xvciBmb3IgUkVEIExFVFRFUiBUSVRMRSBsaW5rICovXFxufVxcblxcbi5Ib21lX2xpbmtfX0NoZTdFW2hyZWY9XFxcIi9iclxcXCJdIHtcXG4gICAgY29sb3I6IGxpbWVncmVlbjtcXG4gICAgYm9yZGVyLWNvbG9yOiBsaW1lZ3JlZW47IC8qIEdyZWVuIGJvcmRlciBjb2xvciBmb3IgQkxPT0QgUkFWRSBsaW5rICovXFxufVxcblxcbi5Ib21lX2xpbmtfX0NoZTdFOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjApOyAgLyogQWRkaW5nIHRleHQgc2hhZG93ICovXFxuXFxuICAgIFxcbn1cXG5cXG4uSG9tZV9saW5rX19DaGU3RTpob3ZlcltocmVmPVxcXCIvcmx0XFxcIl0ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYzQ1MjY7XFxuXFxufVxcblxcbi5Ib21lX2xpbmtfX0NoZTdFOmhvdmVyW2hyZWY9XFxcIi9iclxcXCJdIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XFxufVxcblxcbiNIb21lX2FwcF9fRFZ1WFYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIFBvc2l0aW9ucyB0aGUgYXBwIGFic29sdXRlbHkgKi9cXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAwOyAvKiBFbnN1cmVzIHRoZSBhcHAgaXMgYmVoaW5kIHRoZSBjb250YWluZXIgKi9cXG59XFxuLyogR2VuZXJhbCBzdHlsaW5nIGZvciB0aGUgY2hhdCBjb250YWluZXIgKi9cXG4uSG9tZV9jaGF0Q29udGFpbmVyX196VDJldSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuICAgIHRvcDogNTAlOyBcXG4gICAgbGVmdDogNTAlOyBcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC8qIENlbnRlcnMgdGhlIGNvbnRhaW5lciAqL1xcbiAgICB6LWluZGV4OiAxMDAwOyAvKiBIaWdoIHotaW5kZXggdG8gYnJpbmcgaXQgdG8gdGhlIGZyb250ICovXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDBiO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5MDI7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHRoZSBjaGF0IGhpc3RvcnkgYXJlYSAqL1xcbi5Ib21lX2NoYXRIaXN0b3J5X181WmtveiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBJbmRpdmlkdWFsIGNoYXQgbWVzc2FnZSBzdHlsaW5nICovXFxuLkhvbWVfdXNlck1lc3NhZ2VfXzhTbDFFLCAuSG9tZV9ib3RNZXNzYWdlX184bngyTCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1heC13aWR0aDogODAlO1xcbn1cXG5cXG4uSG9tZV91c2VyTWVzc2FnZV9fOFNsMUUge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG59XFxuXFxuLkhvbWVfYm90TWVzc2FnZV9fOG54Mkwge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBVcGRhdGVkIElucHV0IGZpZWxkIGFuZCBidXR0b24gc3R5bGluZyAqL1xcbi8qIElucHV0IGZpZWxkIHN0eWxpbmcgKi9cXG4uSG9tZV9pbnB1dEZpZWxkX19ITUVKWiB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uSG9tZV9zZW5kQnV0dG9uX19CM2R0ZSB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuXFxuLkhvbWVfc2VuZEJ1dHRvbl9fQjNkdGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbn1cXG5cXG4uSG9tZV90aHJlZUNvbnRhaW5lcl9fOEdLM3Yge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMTtcXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3BhZ2VzL0hvbWUubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQixFQUFFLHVDQUF1QztJQUMzRCxRQUFRLEVBQUUsbURBQW1EO0lBQzdELFNBQVMsRUFBRSxxREFBcUQ7SUFDaEUsZ0NBQWdDLEVBQUUsMEJBQTBCO0lBQzVELGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVSxFQUFFLDJDQUEyQztBQUMzRDs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YscURBQTZDO0lBQTdDLDZDQUE2QztJQUE3QywyRUFBNkM7SUFDN0MseUJBQXlCO0lBQ3pCLDJDQUEyQyxHQUFHLHVCQUF1QjtJQUNyRSxzQ0FBc0MsRUFBRSw2QkFBNkI7SUFDckUsZ0JBQWdCO0lBQ2hCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUIsRUFBRSwrQ0FBK0M7QUFDMUU7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCLEVBQUUsMkNBQTJDO0FBQ3hFOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDJDQUEyQyxHQUFHLHVCQUF1Qjs7O0FBR3pFOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCLEVBQUUsaUNBQWlDO0lBQ3JELE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVLEVBQUUsNENBQTRDO0FBQzVEO0FBQ0EsMkNBQTJDO0FBQzNDO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDLEVBQUUsMEJBQTBCO0lBQzVELGFBQWEsRUFBRSwwQ0FBMEM7SUFDekQsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsMkJBQTJCO0FBQy9COztBQUVBLHNDQUFzQztBQUN0QztJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUEsb0NBQW9DO0FBQ3BDO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUF5QjtBQUM3Qjs7Ozs7O0FBTUEsMkNBQTJDO0FBQzNDLHdCQUF3QjtBQUN4QjtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVOztBQUVkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIFBvc2l0aW9ucyB0aGUgY29udGFpbmVyIGFic29sdXRlbHkgKi9cXG4gICAgdG9wOiA1MCU7IC8qIFBvc2l0aW9ucyB0aGUgY29udGFpbmVyIGF0IHRoZSB2ZXJ0aWNhbCBjZW50ZXIgKi9cXG4gICAgbGVmdDogNTAlOyAvKiBQb3NpdGlvbnMgdGhlIGNvbnRhaW5lciBhdCB0aGUgaG9yaXpvbnRhbCBjZW50ZXIgKi9cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC8qIENlbnRlcnMgdGhlIGNvbnRhaW5lciAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIHotaW5kZXg6IDE7IC8qIEVuc3VyZXMgdGhlIGNvbnRhaW5lciBpcyBhYm92ZSB0aGUgYXBwICovXFxufVxcblxcbi5saW5rIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogY2FsYygxMDBweCAtIDE2cHgpOyBcXG4gICAgcGFkZGluZzogOHB4OyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4zcywgYm9yZGVyIDAuM3M7IFxcbiAgICBib3JkZXI6IDMuNXB4IHNvbGlkIHdoaXRlOyBcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTsgIC8qIEFkZGluZyB0ZXh0IHNoYWRvdyAqL1xcbiAgICBmb250LWZhbWlseTogXFxcIk5pbWJ1cyBTYW5zXFxcIiwgc2Fucy1zZXJpZjsgLyogVXNlIHRoZSBOaW1idXMgU2FucyBmb250ICovXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xMjU1ODEzOTUzNDg4Mzcydnc7XFxufVxcblxcbi5saW5rW2hyZWY9XFxcIi9ybHRcXFwiXSB7XFxuICAgIGNvbG9yOiAjZmM0NTI2O1xcbiAgICBib3JkZXItY29sb3I6ICNmYzQ1MjY7IC8qIFJlZCBib3JkZXIgY29sb3IgZm9yIFJFRCBMRVRURVIgVElUTEUgbGluayAqL1xcbn1cXG5cXG4ubGlua1tocmVmPVxcXCIvYnJcXFwiXSB7XFxuICAgIGNvbG9yOiBsaW1lZ3JlZW47XFxuICAgIGJvcmRlci1jb2xvcjogbGltZWdyZWVuOyAvKiBHcmVlbiBib3JkZXIgY29sb3IgZm9yIEJMT09EIFJBVkUgbGluayAqL1xcbn1cXG5cXG4ubGluazpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wKTsgIC8qIEFkZGluZyB0ZXh0IHNoYWRvdyAqL1xcblxcbiAgICBcXG59XFxuXFxuLmxpbms6aG92ZXJbaHJlZj1cXFwiL3JsdFxcXCJdIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmM0NTI2O1xcblxcbn1cXG5cXG4ubGluazpob3ZlcltocmVmPVxcXCIvYnJcXFwiXSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAvKiBQb3NpdGlvbnMgdGhlIGFwcCBhYnNvbHV0ZWx5ICovXFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMDsgLyogRW5zdXJlcyB0aGUgYXBwIGlzIGJlaGluZCB0aGUgY29udGFpbmVyICovXFxufVxcbi8qIEdlbmVyYWwgc3R5bGluZyBmb3IgdGhlIGNoYXQgY29udGFpbmVyICovXFxuLmNoYXRDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICB0b3A6IDUwJTsgXFxuICAgIGxlZnQ6IDUwJTsgXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAvKiBDZW50ZXJzIHRoZSBjb250YWluZXIgKi9cXG4gICAgei1pbmRleDogMTAwMDsgLyogSGlnaCB6LWluZGV4IHRvIGJyaW5nIGl0IHRvIHRoZSBmcm9udCAqL1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQwYjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTAyO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB0aGUgY2hhdCBoaXN0b3J5IGFyZWEgKi9cXG4uY2hhdEhpc3Rvcnkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogSW5kaXZpZHVhbCBjaGF0IG1lc3NhZ2Ugc3R5bGluZyAqL1xcbi51c2VyTWVzc2FnZSwgLmJvdE1lc3NhZ2Uge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuLnVzZXJNZXNzYWdlIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxufVxcblxcbi5ib3RNZXNzYWdlIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogVXBkYXRlZCBJbnB1dCBmaWVsZCBhbmQgYnV0dG9uIHN0eWxpbmcgKi9cXG4vKiBJbnB1dCBmaWVsZCBzdHlsaW5nICovXFxuLmlucHV0RmllbGQge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLnNlbmRCdXR0b24ge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcblxcbi5zZW5kQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXG59XFxuXFxuLnRocmVlQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19zTkZnWVwiLFxuXHRcImxpbmtcIjogXCJIb21lX2xpbmtfX0NoZTdFXCIsXG5cdFwiYXBwXCI6IFwiSG9tZV9hcHBfX0RWdVhWXCIsXG5cdFwiY2hhdENvbnRhaW5lclwiOiBcIkhvbWVfY2hhdENvbnRhaW5lcl9felQyZXVcIixcblx0XCJjaGF0SGlzdG9yeVwiOiBcIkhvbWVfY2hhdEhpc3RvcnlfXzVaa296XCIsXG5cdFwidXNlck1lc3NhZ2VcIjogXCJIb21lX3VzZXJNZXNzYWdlX184U2wxRVwiLFxuXHRcImJvdE1lc3NhZ2VcIjogXCJIb21lX2JvdE1lc3NhZ2VfXzhueDJMXCIsXG5cdFwiaW5wdXRGaWVsZFwiOiBcIkhvbWVfaW5wdXRGaWVsZF9fSE1FSlpcIixcblx0XCJzZW5kQnV0dG9uXCI6IFwiSG9tZV9zZW5kQnV0dG9uX19CM2R0ZVwiLFxuXHRcInRocmVlQ29udGFpbmVyXCI6IFwiSG9tZV90aHJlZUNvbnRhaW5lcl9fOEdLM3ZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[2]!./pages/Home.module.css\n"));

/***/ })

});