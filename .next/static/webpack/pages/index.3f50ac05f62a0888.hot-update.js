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

/***/ "./utils/app.js":
/*!**********************!*\
  !*** ./utils/app.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeThreeJS: function() { return /* binding */ initializeThreeJS; },\n/* harmony export */   loadModel: function() { return /* binding */ loadModel; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass.js */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var three_stdlib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three-stdlib */ \"./node_modules/three-stdlib/index.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\n\n\n\n\n\n\nlet scene; // Make scene a global variable so it can be accessed by both functions\nfunction initializeThreeJS(mountPoint) {\n    if (!mountPoint) {\n        console.error(\"Mount point is null. Cannot initialize ThreeJS.\");\n        return;\n    }\n    const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();\n    let mouse = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n    // Set up the scene, camera, and renderer\n    scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.z = 5;\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n        alpha: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setClearColor(0xF5F5DC, 1); // Beige color as default\n    mountPoint.appendChild(renderer.domElement);\n    const controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__.OrbitControls(camera, renderer.domElement);\n    // Create a red square (cube)\n    const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1, 1, 1); // 1x1x1 cube\n    const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n        color: 0xff0000\n    }); // Red color\n    const cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);\n    // Position the cube at the center of the scene\n    cube.position.set(0, 0, 0);\n    // Add the cube to the scene\n    //scene.add(cube);\n    // Load the GLTF model\n    let mixer1; // Animation mixer\n    const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();\n    loader.load(\"oncology/scene.gltf\", function(gltf) {\n        gltf.scene.scale.set(10, 10, 10); // Scale down the model\n        scene.add(gltf.scene);\n        gltf.scene.position.set(0, 0, 0); // Move the model to the right\n        if (gltf.animations && gltf.animations.length) {\n            mixer1 = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationMixer(gltf.scene);\n            const action = mixer1.clipAction(gltf.animations[0]);\n            action.play();\n        }\n        gltf.scene.traverse(function(node) {\n            if (node.isMesh) {\n            //  node.material.color.set(0x000000); // Set color to black\n            }\n        });\n    }, undefined, function(error) {\n        console.error(error);\n    });\n    // Create lights\n    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 0.1);\n    scene.add(ambientLight);\n    const directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 1);\n    directionalLight.position.set(1, 1, 1);\n    scene.add(directionalLight);\n    // Post-processing\n    const renderScene = new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_3__.RenderPass(scene, camera);\n    const bloomPass = new three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_4__.UnrealBloomPass(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);\n    bloomPass.threshold = 0.1;\n    bloomPass.strength = 0.4;\n    bloomPass.radius = 0.1;\n    const composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_5__.EffectComposer(renderer);\n    composer.addPass(renderScene);\n    // composer.addPass(bloomPass);\n    // Handle window resize\n    function onWindowResize() {\n        camera.aspect = window.innerWidth / window.innerHeight;\n        camera.updateProjectionMatrix();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        composer.setSize(window.innerWidth, window.innerHeight);\n    }\n    window.addEventListener(\"resize\", onWindowResize, false);\n    // Device orientation controls for mobile\n    let deviceOrientationControls;\n    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {\n        deviceOrientationControls = new three_stdlib__WEBPACK_IMPORTED_MODULE_6__.DeviceOrientationControls(camera);\n    }\n    // Animation loop\n    function animate() {\n        requestAnimationFrame(animate);\n        const delta = clock.getDelta();\n        if (mixer1) {\n            mixer1.update(delta);\n        }\n        if (deviceOrientationControls) {\n            deviceOrientationControls.update();\n        }\n        composer.render();\n    }\n    animate();\n    // Mouse and zoom controls\n    window.addEventListener(\"mousemove\", (event)=>{\n        mouse.x = event.clientX / window.innerWidth * 2 - 1;\n        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;\n    });\n    function zoom(direction) {\n        camera.position.z += direction;\n    }\n    window.addEventListener(\"wheel\", (event)=>{\n        zoom(event.deltaY > 0 ? 1 : -1);\n    });\n}\nfunction loadModel(modelPath) {\n    const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();\n    loader.load(modelPath, function(gltf) {\n        console.log(\"Model loaded:\", modelPath); // Log for debugging\n        gltf.scene.scale.set(10, 10, 10); // Scale down the model\n        scene.add(gltf.scene);\n        gltf.scene.position.set(0, 0, 0); // Position the model at the origin\n        if (gltf.animations && gltf.animations.length) {\n            mixer = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationMixer(gltf.scene);\n            const action = mixer.clipAction(gltf.animations[0]);\n            action.play();\n        }\n    }, undefined, function(error) {\n        console.error(error);\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RE4sTUFBTXNFLENBQUMsR0FBRyxDQUFFSCxDQUFBQSxNQUFNSSxPQUFPLEdBQUdsRSxPQUFPRSxXQUFXLElBQUksSUFBSTtJQUMxRDtJQUVBLFNBQVNpRSxLQUFLQyxTQUFTO1FBQ25CdEUsT0FBT0ssUUFBUSxDQUFDQyxDQUFDLElBQUlnRTtJQUN6QjtJQUNBcEUsT0FBT21ELGdCQUFnQixDQUFDLFNBQVMsQ0FBQ1c7UUFDOUJLLEtBQUtMLE1BQU1PLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQztJQUNqQztBQUVKO0FBRU8sU0FBU0MsVUFBVUMsU0FBUztJQUMvQixNQUFNakQsU0FBUyxJQUFJckMsZ0ZBQVVBO0lBQzdCcUMsT0FBT0MsSUFBSSxDQUFDZ0QsV0FBVyxTQUFVL0MsSUFBSTtRQUNqQ2pDLFFBQVFpRixHQUFHLENBQUMsaUJBQWlCRCxZQUFZLG9CQUFvQjtRQUU3RC9DLEtBQUtwQyxLQUFLLENBQUNxQyxLQUFLLENBQUNMLEdBQUcsQ0FBQyxJQUFJLElBQUksS0FBSyx1QkFBdUI7UUFDekRoQyxNQUFNc0MsR0FBRyxDQUFDRixLQUFLcEMsS0FBSztRQUNwQm9DLEtBQUtwQyxLQUFLLENBQUNlLFFBQVEsQ0FBQ2lCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxtQ0FBbUM7UUFFckUsSUFBSUksS0FBS0csVUFBVSxJQUFJSCxLQUFLRyxVQUFVLENBQUNDLE1BQU0sRUFBRTtZQUMzQ1AsUUFBUSxJQUFJeEMsaURBQW9CLENBQUMyQyxLQUFLcEMsS0FBSztZQUMzQyxNQUFNMEMsU0FBU1QsTUFBTVUsVUFBVSxDQUFDUCxLQUFLRyxVQUFVLENBQUMsRUFBRTtZQUNsREcsT0FBT0UsSUFBSTtRQUNmO0lBQ0osR0FBR0ksV0FBVyxTQUFVNUMsS0FBSztRQUN6QkQsUUFBUUMsS0FBSyxDQUFDQTtJQUNsQjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2FwcC5qcz9jMjQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgRWZmZWN0Q29tcG9zZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL0VmZmVjdENvbXBvc2VyLmpzXCI7XG5pbXBvcnQgeyBSZW5kZXJQYXNzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9SZW5kZXJQYXNzLmpzXCI7XG5pbXBvcnQgeyBVbnJlYWxCbG9vbVBhc3MgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL1VucmVhbEJsb29tUGFzcy5qc1wiO1xuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHsgRGV2aWNlT3JpZW50YXRpb25Db250cm9scyB9IGZyb20gJ3RocmVlLXN0ZGxpYic7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMuanMnO1xuXG5sZXQgc2NlbmU7IC8vIE1ha2Ugc2NlbmUgYSBnbG9iYWwgdmFyaWFibGUgc28gaXQgY2FuIGJlIGFjY2Vzc2VkIGJ5IGJvdGggZnVuY3Rpb25zXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVUaHJlZUpTKG1vdW50UG9pbnQpIHtcbiAgICBpZiAoIW1vdW50UG9pbnQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1vdW50IHBvaW50IGlzIG51bGwuIENhbm5vdCBpbml0aWFsaXplIFRocmVlSlMuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XG4gICAgbGV0IG1vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuICAgIC8vIFNldCB1cCB0aGUgc2NlbmUsIGNhbWVyYSwgYW5kIHJlbmRlcmVyXG4gICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gNTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbHBoYTogdHJ1ZSB9KTtcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhGNUY1REMsIDEpOyAvLyBCZWlnZSBjb2xvciBhcyBkZWZhdWx0XG5cbiAgICBtb3VudFBvaW50LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgIC8vIENyZWF0ZSBhIHJlZCBzcXVhcmUgKGN1YmUpXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMSwgMSk7IC8vIDF4MXgxIGN1YmVcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweGZmMDAwMCB9KTsgLy8gUmVkIGNvbG9yXG4gICAgY29uc3QgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG5cbiAgICAvLyBQb3NpdGlvbiB0aGUgY3ViZSBhdCB0aGUgY2VudGVyIG9mIHRoZSBzY2VuZVxuICAgIGN1YmUucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuXG4gICAgLy8gQWRkIHRoZSBjdWJlIHRvIHRoZSBzY2VuZVxuICAgIC8vc2NlbmUuYWRkKGN1YmUpO1xuICAgIC8vIExvYWQgdGhlIEdMVEYgbW9kZWxcbiAgICBsZXQgbWl4ZXI7IC8vIEFuaW1hdGlvbiBtaXhlclxuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XG4gICAgbG9hZGVyLmxvYWQoJ29uY29sb2d5L3NjZW5lLmdsdGYnLCBmdW5jdGlvbiAoZ2x0Zikge1xuICAgICAgICBnbHRmLnNjZW5lLnNjYWxlLnNldCgxMCwgMTAsIDEwKTsgLy8gU2NhbGUgZG93biB0aGUgbW9kZWxcbiAgICAgICAgc2NlbmUuYWRkKGdsdGYuc2NlbmUpO1xuICAgICAgICBnbHRmLnNjZW5lLnBvc2l0aW9uLnNldCgwLCAwLCAwKTsgLy8gTW92ZSB0aGUgbW9kZWwgdG8gdGhlIHJpZ2h0XG5cbiAgICAgICAgaWYgKGdsdGYuYW5pbWF0aW9ucyAmJiBnbHRmLmFuaW1hdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBtaXhlciA9IG5ldyBUSFJFRS5BbmltYXRpb25NaXhlcihnbHRmLnNjZW5lKTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IG1peGVyLmNsaXBBY3Rpb24oZ2x0Zi5hbmltYXRpb25zWzBdKTtcbiAgICAgICAgICAgIGFjdGlvbi5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2x0Zi5zY2VuZS50cmF2ZXJzZShmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgaWYgKG5vZGUuaXNNZXNoKSB7XG4gICAgICAgICAgICAgICAgLy8gIG5vZGUubWF0ZXJpYWwuY29sb3Iuc2V0KDB4MDAwMDAwKTsgLy8gU2V0IGNvbG9yIHRvIGJsYWNrXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIHVuZGVmaW5lZCwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGxpZ2h0c1xuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYsIDAuMSk7XG4gICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XG5cbiAgICBjb25zdCBkaXJlY3Rpb25hbExpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIDEpO1xuICAgIGRpcmVjdGlvbmFsTGlnaHQucG9zaXRpb24uc2V0KDEsIDEsIDEpO1xuICAgIHNjZW5lLmFkZChkaXJlY3Rpb25hbExpZ2h0KTtcblxuICAgIC8vIFBvc3QtcHJvY2Vzc2luZ1xuICAgIGNvbnN0IHJlbmRlclNjZW5lID0gbmV3IFJlbmRlclBhc3Moc2NlbmUsIGNhbWVyYSk7XG5cbiAgICBjb25zdCBibG9vbVBhc3MgPSBuZXcgVW5yZWFsQmxvb21QYXNzKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KSxcbiAgICAgICAgMS41LCAwLjQsIDAuODVcbiAgICApO1xuICAgIGJsb29tUGFzcy50aHJlc2hvbGQgPSAwLjE7XG4gICAgYmxvb21QYXNzLnN0cmVuZ3RoID0gMC40O1xuICAgIGJsb29tUGFzcy5yYWRpdXMgPSAwLjE7XG5cbiAgICBjb25zdCBjb21wb3NlciA9IG5ldyBFZmZlY3RDb21wb3NlcihyZW5kZXJlcik7XG4gICAgY29tcG9zZXIuYWRkUGFzcyhyZW5kZXJTY2VuZSk7XG4gICAgLy8gY29tcG9zZXIuYWRkUGFzcyhibG9vbVBhc3MpO1xuXG4gICAgLy8gSGFuZGxlIHdpbmRvdyByZXNpemVcbiAgICBmdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICBjb21wb3Nlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25XaW5kb3dSZXNpemUsIGZhbHNlKTtcblxuICAgIC8vIERldmljZSBvcmllbnRhdGlvbiBjb250cm9scyBmb3IgbW9iaWxlXG4gICAgbGV0IGRldmljZU9yaWVudGF0aW9uQ29udHJvbHM7XG4gICAgaWYgKC9Nb2JpfEFuZHJvaWR8aVBob25lL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICBkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzID0gbmV3IERldmljZU9yaWVudGF0aW9uQ29udHJvbHMoY2FtZXJhKTtcbiAgICB9XG5cbiAgICAvLyBBbmltYXRpb24gbG9vcFxuICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBjbG9jay5nZXREZWx0YSgpO1xuICAgICAgICBpZiAobWl4ZXIpIHtcbiAgICAgICAgICAgIG1peGVyLnVwZGF0ZShkZWx0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRldmljZU9yaWVudGF0aW9uQ29udHJvbHMpIHtcbiAgICAgICAgICAgIGRldmljZU9yaWVudGF0aW9uQ29udHJvbHMudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9zZXIucmVuZGVyKCk7XG4gICAgfVxuICAgIGFuaW1hdGUoKTtcblxuICAgIC8vIE1vdXNlIGFuZCB6b29tIGNvbnRyb2xzXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICBtb3VzZS54ID0gKGV2ZW50LmNsaWVudFggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiAyIC0gMTtcbiAgICAgICAgbW91c2UueSA9IC0oZXZlbnQuY2xpZW50WSAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiAyICsgMTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHpvb20oZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ICs9IGRpcmVjdGlvbjtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHpvb20oZXZlbnQuZGVsdGFZID4gMCA/IDEgOiAtMSk7XG4gICAgfSk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNb2RlbChtb2RlbFBhdGgpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xuICAgIGxvYWRlci5sb2FkKG1vZGVsUGF0aCwgZnVuY3Rpb24gKGdsdGYpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNb2RlbCBsb2FkZWQ6XCIsIG1vZGVsUGF0aCk7IC8vIExvZyBmb3IgZGVidWdnaW5nXG5cbiAgICAgICAgZ2x0Zi5zY2VuZS5zY2FsZS5zZXQoMTAsIDEwLCAxMCk7IC8vIFNjYWxlIGRvd24gdGhlIG1vZGVsXG4gICAgICAgIHNjZW5lLmFkZChnbHRmLnNjZW5lKTtcbiAgICAgICAgZ2x0Zi5zY2VuZS5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7IC8vIFBvc2l0aW9uIHRoZSBtb2RlbCBhdCB0aGUgb3JpZ2luXG5cbiAgICAgICAgaWYgKGdsdGYuYW5pbWF0aW9ucyAmJiBnbHRmLmFuaW1hdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBtaXhlciA9IG5ldyBUSFJFRS5BbmltYXRpb25NaXhlcihnbHRmLnNjZW5lKTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IG1peGVyLmNsaXBBY3Rpb24oZ2x0Zi5hbmltYXRpb25zWzBdKTtcbiAgICAgICAgICAgIGFjdGlvbi5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9LCB1bmRlZmluZWQsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9KTtcbn0iXSwibmFtZXMiOlsiVEhSRUUiLCJFZmZlY3RDb21wb3NlciIsIlJlbmRlclBhc3MiLCJVbnJlYWxCbG9vbVBhc3MiLCJHTFRGTG9hZGVyIiwiRGV2aWNlT3JpZW50YXRpb25Db250cm9scyIsIk9yYml0Q29udHJvbHMiLCJzY2VuZSIsImluaXRpYWxpemVUaHJlZUpTIiwibW91bnRQb2ludCIsImNvbnNvbGUiLCJlcnJvciIsImNsb2NrIiwiQ2xvY2siLCJtb3VzZSIsIlZlY3RvcjIiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJzZXRTaXplIiwic2V0Q2xlYXJDb2xvciIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsImNvbnRyb2xzIiwiZ2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsIm1hdGVyaWFsIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJjb2xvciIsImN1YmUiLCJNZXNoIiwic2V0IiwibWl4ZXIiLCJsb2FkZXIiLCJsb2FkIiwiZ2x0ZiIsInNjYWxlIiwiYWRkIiwiYW5pbWF0aW9ucyIsImxlbmd0aCIsIkFuaW1hdGlvbk1peGVyIiwiYWN0aW9uIiwiY2xpcEFjdGlvbiIsInBsYXkiLCJ0cmF2ZXJzZSIsIm5vZGUiLCJpc01lc2giLCJ1bmRlZmluZWQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJkaXJlY3Rpb25hbExpZ2h0IiwiRGlyZWN0aW9uYWxMaWdodCIsInJlbmRlclNjZW5lIiwiYmxvb21QYXNzIiwidGhyZXNob2xkIiwic3RyZW5ndGgiLCJyYWRpdXMiLCJjb21wb3NlciIsImFkZFBhc3MiLCJvbldpbmRvd1Jlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJhZGRFdmVudExpc3RlbmVyIiwiZGV2aWNlT3JpZW50YXRpb25Db250cm9scyIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGVsdGEiLCJnZXREZWx0YSIsInVwZGF0ZSIsInJlbmRlciIsImV2ZW50IiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsInpvb20iLCJkaXJlY3Rpb24iLCJkZWx0YVkiLCJsb2FkTW9kZWwiLCJtb2RlbFBhdGgiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/app.js\n"));

/***/ })

});