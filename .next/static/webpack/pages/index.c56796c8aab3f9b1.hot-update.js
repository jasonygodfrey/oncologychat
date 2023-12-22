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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home.module.css */ \"./pages/Home.module.css\");\n/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/app.js */ \"./utils/app.js\");\n// pages/index.js\n\nvar _s = $RefreshSig$();\n\n\n\n // Import the new function\nfunction Home() {\n    _s();\n    const mount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const chatHistoryRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Ref for the chat history container\n    const [chatHistory, setChatHistory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (mount.current) {\n            (0,_utils_app_js__WEBPACK_IMPORTED_MODULE_3__.initializeThreeJS)(mount.current);\n            const previewButton = document.getElementById(\"preview-button\");\n            if (previewButton) {\n                previewButton.addEventListener(\"click\", function() {\n                    (0,_utils_app_js__WEBPACK_IMPORTED_MODULE_3__.loadModel)(\"prostatecancercells/scene.gltf\"); // Ensure this path is correct\n                });\n            }\n        }\n    }, []);\n    // Load chat history from localStorage and initialize ThreeJS\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedChatHistory = localStorage.getItem(\"chatHistory\");\n        if (savedChatHistory) {\n            setChatHistory(JSON.parse(savedChatHistory));\n        }\n        if (mount.current) {\n            const mountPoint = mount.current;\n            (0,_utils_app_js__WEBPACK_IMPORTED_MODULE_3__.initializeThreeJS)(mountPoint);\n        }\n    }, []);\n    // Save chatHistory to localStorage and scroll to bottom\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"chatHistory\", JSON.stringify(chatHistory));\n        if (chatHistoryRef.current) {\n            const scrollHeight = chatHistoryRef.current.scrollHeight;\n            chatHistoryRef.current.scrollTo(0, scrollHeight);\n        }\n    }, [\n        chatHistory\n    ]);\n    // Handle input change\n    const handleInputChange = (event)=>{\n        setUserInput(event.target.value);\n    };\n    // Handle key press\n    const handleKeyPress = (event)=>{\n        if (event.key === \"Enter\") {\n            handleSubmit();\n        }\n    };\n    // Handle submit\n    const handleSubmit = async ()=>{\n        console.log(\"handleSubmit called\");\n        let userMessage = userInput;\n        if (!userMessage || userMessage.trim() === \"\") {\n            userMessage = \"Ask an oncology question\";\n        }\n        setUserInput(\"\");\n        // Send message to backend for GPT-3 processing\n        const response = await fetch(\"/api/chat\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                message: userMessage\n            })\n        });\n        const data = await response.json();\n        // Add user message and GPT-3 response to chat history\n        setChatHistory((prevChatHistory)=>[\n                ...prevChatHistory,\n                {\n                    sender: \"User\",\n                    message: userMessage\n                },\n                {\n                    sender: \"Bot\",\n                    message: data.reply\n                }\n            ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: mount,\n                className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().threeContainer)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().chatContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: chatHistoryRef,\n                        className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().chatHistory),\n                        children: chatHistory.map((chat, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: [\n                                            chat.sender,\n                                            \":\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 29\n                                    }, this),\n                                    \" \",\n                                    chat.message\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                                lineNumber: 98,\n                                columnNumber: 25\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                        lineNumber: 96,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),\n                        value: userInput,\n                        onChange: handleInputChange,\n                        onKeyPress: handleKeyPress,\n                        placeholder: \"Message OncologyChat\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().sendButton),\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"preview-button\",\n                        children: \"Preview 3D Models\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                        lineNumber: 117,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jason\\\\Desktop\\\\oncology\\\\oncologychat\\\\pages\\\\index.js\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"mR2G065e+6GItGj0TCSQrqXvBgE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNwQiw4REFBQ0M7O2tEQUNHLDhEQUFDQzs7NENBQVFILEtBQUtSLE1BQU07NENBQUM7Ozs7Ozs7b0NBQVU7b0NBQUVRLEtBQUtaLE9BQU87OytCQUR6Q2E7Ozs7Ozs7Ozs7a0NBS2hCLDhEQUFDRzt3QkFDR0MsTUFBSzt3QkFDTFQsV0FBV2pELG9FQUFpQjt3QkFDNUI0QixPQUFPcEI7d0JBQ1BvRCxVQUFVbkM7d0JBQ1ZvQyxZQUFZaEM7d0JBQ1ppQyxhQUFZOzs7Ozs7a0NBRWhCLDhEQUFDQzt3QkFDR0MsU0FBU2pDO3dCQUNUa0IsV0FBV2pELG9FQUFpQjtrQ0FDL0I7Ozs7OztrQ0FHRCw4REFBQytEO3dCQUFPRyxJQUFHO2tDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVDO0dBcEh3Qi9EO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvaW5kZXguanNcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBpbml0aWFsaXplVGhyZWVKUywgbG9hZE1vZGVsIH0gZnJvbSAnLi4vdXRpbHMvYXBwLmpzJzsgLy8gSW1wb3J0IHRoZSBuZXcgZnVuY3Rpb25cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBtb3VudCA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBjaGF0SGlzdG9yeVJlZiA9IHVzZVJlZihudWxsKTsgLy8gUmVmIGZvciB0aGUgY2hhdCBoaXN0b3J5IGNvbnRhaW5lclxuICAgIGNvbnN0IFtjaGF0SGlzdG9yeSwgc2V0Q2hhdEhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAobW91bnQuY3VycmVudCkge1xuICAgICAgICAgICAgaW5pdGlhbGl6ZVRocmVlSlMobW91bnQuY3VycmVudCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByZXZpZXdCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldy1idXR0b24nKTtcbiAgICAgICAgICAgIGlmIChwcmV2aWV3QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgcHJldmlld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBsb2FkTW9kZWwoJ3Byb3N0YXRlY2FuY2VyY2VsbHMvc2NlbmUuZ2x0ZicpOyAvLyBFbnN1cmUgdGhpcyBwYXRoIGlzIGNvcnJlY3RcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuXG4gICAgLy8gTG9hZCBjaGF0IGhpc3RvcnkgZnJvbSBsb2NhbFN0b3JhZ2UgYW5kIGluaXRpYWxpemUgVGhyZWVKU1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNhdmVkQ2hhdEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2hhdEhpc3RvcnknKTtcbiAgICAgICAgaWYgKHNhdmVkQ2hhdEhpc3RvcnkpIHtcbiAgICAgICAgICAgIHNldENoYXRIaXN0b3J5KEpTT04ucGFyc2Uoc2F2ZWRDaGF0SGlzdG9yeSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vdW50LmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vdW50UG9pbnQgPSBtb3VudC5jdXJyZW50O1xuICAgICAgICAgICAgaW5pdGlhbGl6ZVRocmVlSlMobW91bnRQb2ludCk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICAvLyBTYXZlIGNoYXRIaXN0b3J5IHRvIGxvY2FsU3RvcmFnZSBhbmQgc2Nyb2xsIHRvIGJvdHRvbVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaGF0SGlzdG9yeScsIEpTT04uc3RyaW5naWZ5KGNoYXRIaXN0b3J5KSk7XG4gICAgICAgIGlmIChjaGF0SGlzdG9yeVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBjaGF0SGlzdG9yeVJlZi5jdXJyZW50LnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgIGNoYXRIaXN0b3J5UmVmLmN1cnJlbnQuc2Nyb2xsVG8oMCwgc2Nyb2xsSGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH0sIFtjaGF0SGlzdG9yeV0pO1xuXG4gICAgXG5cbiAgICAvLyBIYW5kbGUgaW5wdXQgY2hhbmdlXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0VXNlcklucHV0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBrZXkgcHJlc3NcbiAgICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgc3VibWl0XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZVN1Ym1pdCBjYWxsZWRcIik7XG4gICAgICAgIGxldCB1c2VyTWVzc2FnZSA9IHVzZXJJbnB1dDtcbiAgICAgICAgaWYgKCF1c2VyTWVzc2FnZSB8fCB1c2VyTWVzc2FnZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICB1c2VyTWVzc2FnZSA9IFwiQXNrIGFuIG9uY29sb2d5IHF1ZXN0aW9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VXNlcklucHV0KCcnKTtcblxuICAgICAgICAvLyBTZW5kIG1lc3NhZ2UgdG8gYmFja2VuZCBmb3IgR1BULTMgcHJvY2Vzc2luZ1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2NoYXQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiB1c2VyTWVzc2FnZSB9KVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAvLyBBZGQgdXNlciBtZXNzYWdlIGFuZCBHUFQtMyByZXNwb25zZSB0byBjaGF0IGhpc3RvcnlcbiAgICAgICAgc2V0Q2hhdEhpc3RvcnkocHJldkNoYXRIaXN0b3J5ID0+IFtcbiAgICAgICAgICAgIC4uLnByZXZDaGF0SGlzdG9yeSxcbiAgICAgICAgICAgIHsgc2VuZGVyOiAnVXNlcicsIG1lc3NhZ2U6IHVzZXJNZXNzYWdlIH0sXG4gICAgICAgICAgICB7IHNlbmRlcjogJ0JvdCcsIG1lc3NhZ2U6IGRhdGEucmVwbHkgfVxuICAgICAgICBdKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIHsvKiAuLi4gSGVhZCBjb250ZW50IC4uLiAqL31cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IHJlZj17bW91bnR9IGNsYXNzTmFtZT17c3R5bGVzLnRocmVlQ29udGFpbmVyfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17Y2hhdEhpc3RvcnlSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRIaXN0b3J5fT5cbiAgICAgICAgICAgICAgICAgICAge2NoYXRIaXN0b3J5Lm1hcCgoY2hhdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2NoYXQuc2VuZGVyfTo8L3N0cm9uZz4ge2NoYXQubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRGaWVsZH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc31cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlIE9uY29sb2d5Q2hhdFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VuZEJ1dHRvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicHJldmlldy1idXR0b25cIj5QcmV2aWV3IDNEIE1vZGVsczwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwic3R5bGVzIiwiaW5pdGlhbGl6ZVRocmVlSlMiLCJsb2FkTW9kZWwiLCJIb21lIiwibW91bnQiLCJjaGF0SGlzdG9yeVJlZiIsImNoYXRIaXN0b3J5Iiwic2V0Q2hhdEhpc3RvcnkiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJjdXJyZW50IiwicHJldmlld0J1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic2F2ZWRDaGF0SGlzdG9yeSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJtb3VudFBvaW50Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNjcm9sbEhlaWdodCIsInNjcm9sbFRvIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlS2V5UHJlc3MiLCJrZXkiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwidXNlck1lc3NhZ2UiLCJ0cmltIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwibWVzc2FnZSIsImRhdGEiLCJqc29uIiwicHJldkNoYXRIaXN0b3J5Iiwic2VuZGVyIiwicmVwbHkiLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJ0aHJlZUNvbnRhaW5lciIsImNoYXRDb250YWluZXIiLCJtYXAiLCJjaGF0IiwiaW5kZXgiLCJwIiwic3Ryb25nIiwiaW5wdXQiLCJ0eXBlIiwiaW5wdXRGaWVsZCIsIm9uQ2hhbmdlIiwib25LZXlQcmVzcyIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsInNlbmRCdXR0b24iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});