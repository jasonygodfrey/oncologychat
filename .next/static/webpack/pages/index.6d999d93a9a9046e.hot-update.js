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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home.module.css */ \"./pages/Home.module.css\");\n/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/app.js */ \"./utils/app.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const mount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [chatHistory, setChatHistory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Load chat history from localStorage when the component mounts\n        const savedChatHistory = localStorage.getItem(\"chatHistory\");\n        if (savedChatHistory) {\n            setChatHistory(JSON.parse(savedChatHistory));\n        }\n        if (mount.current) {\n            const mountPoint = mount.current;\n            (0,_utils_app_js__WEBPACK_IMPORTED_MODULE_3__.initializeThreeJS)(mountPoint);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Save chatHistory to localStorage whenever it changes\n        localStorage.setItem(\"chatHistory\", JSON.stringify(chatHistory));\n    }, [\n        chatHistory\n    ]);\n    const handleInputChange = (event)=>{\n        setUserInput(event.target.value);\n    };\n    const handleKeyPress = (event)=>{\n        // Check if the Enter key is pressed\n        if (event.key === \"Enter\") {\n            handleSubmit();\n        }\n    };\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async ()=>{\n        console.log(\"handleSubmit called\");\n        let userMessage = userInput;\n        if (!userMessage || userMessage.trim() === \"\") {\n            userMessage = \"Ask an oncology question\";\n        }\n        setUserInput(\"\");\n        // Send message to backend for GPT-3 processing\n        const response = await fetch(\"/api/chat\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                message: userMessage\n            })\n        });\n        const data = await response.json();\n        // Add user message and GPT-3 response to chat history\n        setChatHistory((prevChatHistory)=>[\n                ...prevChatHistory,\n                {\n                    sender: \"user\",\n                    message: userMessage\n                },\n                {\n                    sender: \"bot\",\n                    message: data.reply\n                }\n            ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().chatContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().chatHistory),\n                        children: chatHistory.map((chat, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: [\n                                            chat.sender,\n                                            \":\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 29\n                                    }, this),\n                                    \" \",\n                                    chat.message\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                                lineNumber: 74,\n                                columnNumber: 25\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),\n                        value: userInput,\n                        onChange: handleInputChange,\n                        onKeyPress: handleKeyPress\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().sendButton),\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"xDK7vw8nEIei11RJQfd9DBk6k3w=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDOUI7QUFDVTtBQUNhO0FBRXJDLFNBQVNPOztJQUNwQixNQUFNQyxRQUFRUCw2Q0FBTUEsQ0FBQztJQUNyQixNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUVqREQsZ0RBQVNBLENBQUM7UUFDTixnRUFBZ0U7UUFDaEUsTUFBTVMsbUJBQW1CQyxhQUFhQyxPQUFPLENBQUM7UUFDOUMsSUFBSUYsa0JBQWtCO1lBQ2xCRCxlQUFlSSxLQUFLQyxLQUFLLENBQUNKO1FBQzlCO1FBRUEsSUFBSUgsTUFBTVEsT0FBTyxFQUFFO1lBQ2YsTUFBTUMsYUFBYVQsTUFBTVEsT0FBTztZQUNoQ1YsZ0VBQWlCQSxDQUFDVztRQUN0QjtJQUNKLEdBQUcsRUFBRTtJQUVMZixnREFBU0EsQ0FBQztRQUNOLHVEQUF1RDtRQUN2RFUsYUFBYU0sT0FBTyxDQUFDLGVBQWVKLEtBQUtLLFNBQVMsQ0FBQ1Y7SUFDdkQsR0FBRztRQUFDQTtLQUFZO0lBRWhCLE1BQU1XLG9CQUFvQixDQUFDQztRQUN2QkMsYUFBYUQsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO0lBQ25DO0lBRUEsTUFBTUMsaUJBQWlCLENBQUNKO1FBQ3BCLG9DQUFvQztRQUNwQyxJQUFJQSxNQUFNSyxHQUFHLEtBQUssU0FBUztZQUN2QkM7UUFDSjtJQUNKO0lBRUEsTUFBTSxDQUFDQyxXQUFXTixhQUFhLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNd0IsZUFBZTtRQUNqQkUsUUFBUUMsR0FBRyxDQUFDO1FBQ1osSUFBSUMsY0FBY0g7UUFDbEIsSUFBSSxDQUFDRyxlQUFlQSxZQUFZQyxJQUFJLE9BQU8sSUFBSTtZQUMzQ0QsY0FBYztRQUNsQjtRQUNBVCxhQUFhO1FBRWIsK0NBQStDO1FBQy9DLE1BQU1XLFdBQVcsTUFBTUMsTUFBTSxhQUFhO1lBQ3RDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDQyxNQUFNdkIsS0FBS0ssU0FBUyxDQUFDO2dCQUFFbUIsU0FBU1A7WUFBWTtRQUNoRDtRQUNBLE1BQU1RLE9BQU8sTUFBTU4sU0FBU08sSUFBSTtRQUVoQyxzREFBc0Q7UUFDdEQ5QixlQUFlK0IsQ0FBQUEsa0JBQW1CO21CQUMzQkE7Z0JBQ0g7b0JBQUVDLFFBQVE7b0JBQVFKLFNBQVNQO2dCQUFZO2dCQUN2QztvQkFBRVcsUUFBUTtvQkFBT0osU0FBU0MsS0FBS0ksS0FBSztnQkFBQzthQUN4QztJQUNMO0lBRUEscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ3hDLGtEQUFJQTs7Ozs7MEJBSUwsOERBQUN3QztnQkFBSUMsV0FBV3hDLHVFQUFvQjs7a0NBQ2hDLDhEQUFDdUM7d0JBQUlDLFdBQVd4QyxxRUFBa0I7a0NBQzdCSSxZQUFZc0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNwQiw4REFBQ0M7O2tEQUNHLDhEQUFDQzs7NENBQVFILEtBQUtOLE1BQU07NENBQUM7Ozs7Ozs7b0NBQVU7b0NBQUVNLEtBQUtWLE9BQU87OytCQUR6Q1c7Ozs7Ozs7Ozs7a0NBS2hCLDhEQUFDRzt3QkFDR0MsTUFBSzt3QkFDTFIsV0FBV3hDLG9FQUFpQjt3QkFDNUJtQixPQUFPSTt3QkFDUDJCLFVBQVVuQzt3QkFDVm9DLFlBQVkvQjs7Ozs7O2tDQUVoQiw4REFBQ2dDO3dCQUNHQyxTQUFTL0I7d0JBQ1RrQixXQUFXeEMsb0VBQWlCO2tDQUMvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpCO0dBekZ3QkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVRocmVlSlMgfSBmcm9tICcuLi91dGlscy9hcHAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IG1vdW50ID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IFtjaGF0SGlzdG9yeSwgc2V0Q2hhdEhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gTG9hZCBjaGF0IGhpc3RvcnkgZnJvbSBsb2NhbFN0b3JhZ2Ugd2hlbiB0aGUgY29tcG9uZW50IG1vdW50c1xuICAgICAgICBjb25zdCBzYXZlZENoYXRIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NoYXRIaXN0b3J5Jyk7XG4gICAgICAgIGlmIChzYXZlZENoYXRIaXN0b3J5KSB7XG4gICAgICAgICAgICBzZXRDaGF0SGlzdG9yeShKU09OLnBhcnNlKHNhdmVkQ2hhdEhpc3RvcnkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb3VudC5jdXJyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBtb3VudFBvaW50ID0gbW91bnQuY3VycmVudDtcbiAgICAgICAgICAgIGluaXRpYWxpemVUaHJlZUpTKG1vdW50UG9pbnQpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gU2F2ZSBjaGF0SGlzdG9yeSB0byBsb2NhbFN0b3JhZ2Ugd2hlbmV2ZXIgaXQgY2hhbmdlc1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2hhdEhpc3RvcnknLCBKU09OLnN0cmluZ2lmeShjaGF0SGlzdG9yeSkpO1xuICAgIH0sIFtjaGF0SGlzdG9yeV0pO1xuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0VXNlcklucHV0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBFbnRlciBrZXkgaXMgcHJlc3NlZFxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZVN1Ym1pdCBjYWxsZWRcIik7XG4gICAgICAgIGxldCB1c2VyTWVzc2FnZSA9IHVzZXJJbnB1dDtcbiAgICAgICAgaWYgKCF1c2VyTWVzc2FnZSB8fCB1c2VyTWVzc2FnZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICB1c2VyTWVzc2FnZSA9IFwiQXNrIGFuIG9uY29sb2d5IHF1ZXN0aW9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VXNlcklucHV0KCcnKTtcblxuICAgICAgICAvLyBTZW5kIG1lc3NhZ2UgdG8gYmFja2VuZCBmb3IgR1BULTMgcHJvY2Vzc2luZ1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2NoYXQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiB1c2VyTWVzc2FnZSB9KVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAvLyBBZGQgdXNlciBtZXNzYWdlIGFuZCBHUFQtMyByZXNwb25zZSB0byBjaGF0IGhpc3RvcnlcbiAgICAgICAgc2V0Q2hhdEhpc3RvcnkocHJldkNoYXRIaXN0b3J5ID0+IFtcbiAgICAgICAgICAgIC4uLnByZXZDaGF0SGlzdG9yeSwgXG4gICAgICAgICAgICB7IHNlbmRlcjogJ3VzZXInLCBtZXNzYWdlOiB1c2VyTWVzc2FnZSB9LFxuICAgICAgICAgICAgeyBzZW5kZXI6ICdib3QnLCBtZXNzYWdlOiBkYXRhLnJlcGx5IH1cbiAgICAgICAgXSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICB7LyogLi4uIEhlYWQgY29udGVudCAuLi4gKi99XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0SGlzdG9yeX0+XG4gICAgICAgICAgICAgICAgICAgIHtjaGF0SGlzdG9yeS5tYXAoKGNoYXQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntjaGF0LnNlbmRlcn06PC9zdHJvbmc+IHtjaGF0Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0RmllbGR9IFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcklucHV0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfSAvLyBBZGRlZCBrZXkgcHJlc3MgZXZlbnRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZW5kQnV0dG9ufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2VuZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJzdHlsZXMiLCJpbml0aWFsaXplVGhyZWVKUyIsIkhvbWUiLCJtb3VudCIsImNoYXRIaXN0b3J5Iiwic2V0Q2hhdEhpc3RvcnkiLCJzYXZlZENoYXRIaXN0b3J5IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImN1cnJlbnQiLCJtb3VudFBvaW50Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJzZXRVc2VySW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUtleVByZXNzIiwia2V5IiwiaGFuZGxlU3VibWl0IiwidXNlcklucHV0IiwiY29uc29sZSIsImxvZyIsInVzZXJNZXNzYWdlIiwidHJpbSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIm1lc3NhZ2UiLCJkYXRhIiwianNvbiIsInByZXZDaGF0SGlzdG9yeSIsInNlbmRlciIsInJlcGx5IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2hhdENvbnRhaW5lciIsIm1hcCIsImNoYXQiLCJpbmRleCIsInAiLCJzdHJvbmciLCJpbnB1dCIsInR5cGUiLCJpbnB1dEZpZWxkIiwib25DaGFuZ2UiLCJvbktleVByZXNzIiwiYnV0dG9uIiwib25DbGljayIsInNlbmRCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});