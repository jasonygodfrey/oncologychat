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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home.module.css */ \"./pages/Home.module.css\");\n/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/app.js */ \"./utils/app.js\");\n// pages/index.js\n\nvar _s = $RefreshSig$();\n\n\n\n // Import the new function\nfunction Home() {\n    _s();\n    const mount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const chatHistoryRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Ref for the chat history container\n    const [chatHistory, setChatHistory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Load chat history from localStorage and initialize ThreeJS\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedChatHistory = localStorage.getItem(\"chatHistory\");\n        if (savedChatHistory) {\n            setChatHistory(JSON.parse(savedChatHistory));\n        }\n        if (mount.current) {\n            const mountPoint = mount.current;\n            (0,_utils_app_js__WEBPACK_IMPORTED_MODULE_3__.initializeThreeJS)(mountPoint);\n        }\n    }, []);\n    // Save chatHistory to localStorage and scroll to bottom\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"chatHistory\", JSON.stringify(chatHistory));\n        if (chatHistoryRef.current) {\n            const scrollHeight = chatHistoryRef.current.scrollHeight;\n            chatHistoryRef.current.scrollTo(0, scrollHeight);\n        }\n    }, [\n        chatHistory\n    ]);\n    // Handle input change\n    const handleInputChange = (event)=>{\n        setUserInput(event.target.value);\n    };\n    // Handle key press\n    const handleKeyPress = (event)=>{\n        if (event.key === \"Enter\") {\n            handleSubmit();\n        }\n    };\n    // Handle submit\n    const handleSubmit = async ()=>{\n        console.log(\"handleSubmit called\");\n        let userMessage = userInput;\n        if (!userMessage || userMessage.trim() === \"\") {\n            userMessage = \"Ask an oncology question\";\n        }\n        setUserInput(\"\");\n        // Send message to backend for GPT-3 processing\n        const response = await fetch(\"/api/chat\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                message: userMessage\n            })\n        });\n        const data = await response.json();\n        // Add user message and GPT-3 response to chat history\n        setChatHistory((prevChatHistory)=>[\n                ...prevChatHistory,\n                {\n                    sender: \"User\",\n                    message: userMessage\n                },\n                {\n                    sender: \"Bot\",\n                    message: data.reply\n                }\n            ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: mount,\n                className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().threeContainer)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().chatContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: chatHistoryRef,\n                        className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().chatHistory),\n                        children: chatHistory.map((chat, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: [\n                                            chat.sender,\n                                            \":\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 29\n                                    }, this),\n                                    \" \",\n                                    chat.message\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                                lineNumber: 87,\n                                columnNumber: 25\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),\n                        value: userInput,\n                        onChange: handleInputChange,\n                        onKeyPress: handleKeyPress,\n                        placeholder: \"Message OncologyChat\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().sendButton),\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"preview-button\",\n                        children: \"Preview 3D Models\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n        lineNumber: 78,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"NE9rnROmbeV5pMIxIgW3JtfUdI0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVoQiw4REFBQ0M7d0JBQ0dDLFNBQVNqQzt3QkFDVGtCLFdBQVc3QyxvRUFBaUI7a0NBQy9COzs7Ozs7a0NBR0QsOERBQUMyRDt3QkFBT0csSUFBRztrQ0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01QztHQXpHd0IzRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2luZGV4LmpzXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVRocmVlSlMsIGxvYWRNb2RlbCB9IGZyb20gJy4uL3V0aWxzL2FwcC5qcyc7IC8vIEltcG9ydCB0aGUgbmV3IGZ1bmN0aW9uXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgbW91bnQgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgY2hhdEhpc3RvcnlSZWYgPSB1c2VSZWYobnVsbCk7IC8vIFJlZiBmb3IgdGhlIGNoYXQgaGlzdG9yeSBjb250YWluZXJcbiAgICBjb25zdCBbY2hhdEhpc3RvcnksIHNldENoYXRIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoJycpO1xuXG5cblxuXG4gICAgLy8gTG9hZCBjaGF0IGhpc3RvcnkgZnJvbSBsb2NhbFN0b3JhZ2UgYW5kIGluaXRpYWxpemUgVGhyZWVKU1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNhdmVkQ2hhdEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2hhdEhpc3RvcnknKTtcbiAgICAgICAgaWYgKHNhdmVkQ2hhdEhpc3RvcnkpIHtcbiAgICAgICAgICAgIHNldENoYXRIaXN0b3J5KEpTT04ucGFyc2Uoc2F2ZWRDaGF0SGlzdG9yeSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vdW50LmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vdW50UG9pbnQgPSBtb3VudC5jdXJyZW50O1xuICAgICAgICAgICAgaW5pdGlhbGl6ZVRocmVlSlMobW91bnRQb2ludCk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICAvLyBTYXZlIGNoYXRIaXN0b3J5IHRvIGxvY2FsU3RvcmFnZSBhbmQgc2Nyb2xsIHRvIGJvdHRvbVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaGF0SGlzdG9yeScsIEpTT04uc3RyaW5naWZ5KGNoYXRIaXN0b3J5KSk7XG4gICAgICAgIGlmIChjaGF0SGlzdG9yeVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBjaGF0SGlzdG9yeVJlZi5jdXJyZW50LnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgIGNoYXRIaXN0b3J5UmVmLmN1cnJlbnQuc2Nyb2xsVG8oMCwgc2Nyb2xsSGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH0sIFtjaGF0SGlzdG9yeV0pO1xuXG4gICAgXG5cbiAgICAvLyBIYW5kbGUgaW5wdXQgY2hhbmdlXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0VXNlcklucHV0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBrZXkgcHJlc3NcbiAgICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgc3VibWl0XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZVN1Ym1pdCBjYWxsZWRcIik7XG4gICAgICAgIGxldCB1c2VyTWVzc2FnZSA9IHVzZXJJbnB1dDtcbiAgICAgICAgaWYgKCF1c2VyTWVzc2FnZSB8fCB1c2VyTWVzc2FnZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICB1c2VyTWVzc2FnZSA9IFwiQXNrIGFuIG9uY29sb2d5IHF1ZXN0aW9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VXNlcklucHV0KCcnKTtcblxuICAgICAgICAvLyBTZW5kIG1lc3NhZ2UgdG8gYmFja2VuZCBmb3IgR1BULTMgcHJvY2Vzc2luZ1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2NoYXQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiB1c2VyTWVzc2FnZSB9KVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAvLyBBZGQgdXNlciBtZXNzYWdlIGFuZCBHUFQtMyByZXNwb25zZSB0byBjaGF0IGhpc3RvcnlcbiAgICAgICAgc2V0Q2hhdEhpc3RvcnkocHJldkNoYXRIaXN0b3J5ID0+IFtcbiAgICAgICAgICAgIC4uLnByZXZDaGF0SGlzdG9yeSxcbiAgICAgICAgICAgIHsgc2VuZGVyOiAnVXNlcicsIG1lc3NhZ2U6IHVzZXJNZXNzYWdlIH0sXG4gICAgICAgICAgICB7IHNlbmRlcjogJ0JvdCcsIG1lc3NhZ2U6IGRhdGEucmVwbHkgfVxuICAgICAgICBdKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIHsvKiAuLi4gSGVhZCBjb250ZW50IC4uLiAqL31cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IHJlZj17bW91bnR9IGNsYXNzTmFtZT17c3R5bGVzLnRocmVlQ29udGFpbmVyfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17Y2hhdEhpc3RvcnlSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRIaXN0b3J5fT5cbiAgICAgICAgICAgICAgICAgICAge2NoYXRIaXN0b3J5Lm1hcCgoY2hhdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2NoYXQuc2VuZGVyfTo8L3N0cm9uZz4ge2NoYXQubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRGaWVsZH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc31cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlIE9uY29sb2d5Q2hhdFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VuZEJ1dHRvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicHJldmlldy1idXR0b25cIj5QcmV2aWV3IDNEIE1vZGVsczwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwic3R5bGVzIiwiaW5pdGlhbGl6ZVRocmVlSlMiLCJsb2FkTW9kZWwiLCJIb21lIiwibW91bnQiLCJjaGF0SGlzdG9yeVJlZiIsImNoYXRIaXN0b3J5Iiwic2V0Q2hhdEhpc3RvcnkiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJzYXZlZENoYXRIaXN0b3J5IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImN1cnJlbnQiLCJtb3VudFBvaW50Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNjcm9sbEhlaWdodCIsInNjcm9sbFRvIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlS2V5UHJlc3MiLCJrZXkiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwidXNlck1lc3NhZ2UiLCJ0cmltIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwibWVzc2FnZSIsImRhdGEiLCJqc29uIiwicHJldkNoYXRIaXN0b3J5Iiwic2VuZGVyIiwicmVwbHkiLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJ0aHJlZUNvbnRhaW5lciIsImNoYXRDb250YWluZXIiLCJtYXAiLCJjaGF0IiwiaW5kZXgiLCJwIiwic3Ryb25nIiwiaW5wdXQiLCJ0eXBlIiwiaW5wdXRGaWVsZCIsIm9uQ2hhbmdlIiwib25LZXlQcmVzcyIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsInNlbmRCdXR0b24iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});