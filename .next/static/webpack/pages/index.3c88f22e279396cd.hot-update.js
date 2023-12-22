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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeThreeJS: function() { return /* binding */ initializeThreeJS; },\n/* harmony export */   loadModel: function() { return /* binding */ loadModel; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass.js */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var three_stdlib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three-stdlib */ \"./node_modules/three-stdlib/index.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\n\n\n\n\n\n\nlet scene; // Make scene a global variable so it can be accessed by both functions\nfunction initializeThreeJS(mountPoint) {\n    if (!mountPoint) {\n        console.error(\"Mount point is null. Cannot initialize ThreeJS.\");\n        return;\n    }\n    const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();\n    let mouse = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n    // Set up the scene, camera, and renderer\n    scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.z = 5;\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n        alpha: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setClearColor(0xF5F5DC, 1); // Beige color as default\n    mountPoint.appendChild(renderer.domElement);\n    const controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__.OrbitControls(camera, renderer.domElement);\n    // Create a red square (cube)\n    const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1, 1, 1); // 1x1x1 cube\n    const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n        color: 0xff0000\n    }); // Red color\n    const cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);\n    // Position the cube at the center of the scene\n    cube.position.set(0, 0, 0);\n    // Add the cube to the scene\n    //scene.add(cube);\n    // Load the GLTF model\n    let mixer1; // Animation mixer\n    const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();\n    loader.load(\"oncology/scene.gltf\", function(gltf) {\n        gltf.scene.scale.set(10, 10, 10); // Scale down the model\n        scene.add(gltf.scene);\n        gltf.scene.position.set(0, 0, 0); // Move the model to the right\n        if (gltf.animations && gltf.animations.length) {\n            mixer1 = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationMixer(gltf.scene);\n            const action = mixer1.clipAction(gltf.animations[0]);\n            action.play();\n        }\n        gltf.scene.traverse(function(node) {\n            if (node.isMesh) {\n            //  node.material.color.set(0x000000); // Set color to black\n            }\n        });\n    }, undefined, function(error) {\n        console.error(error);\n    });\n    // Create lights\n    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 0.1);\n    scene.add(ambientLight);\n    const directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 1);\n    directionalLight.position.set(1, 1, 1);\n    scene.add(directionalLight);\n    // Post-processing\n    const renderScene = new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_3__.RenderPass(scene, camera);\n    const bloomPass = new three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_4__.UnrealBloomPass(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);\n    bloomPass.threshold = 0.1;\n    bloomPass.strength = 0.4;\n    bloomPass.radius = 0.1;\n    const composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_5__.EffectComposer(renderer);\n    composer.addPass(renderScene);\n    // composer.addPass(bloomPass);\n    // Handle window resize\n    function onWindowResize() {\n        camera.aspect = window.innerWidth / window.innerHeight;\n        camera.updateProjectionMatrix();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        composer.setSize(window.innerWidth, window.innerHeight);\n    }\n    window.addEventListener(\"resize\", onWindowResize, false);\n    // Device orientation controls for mobile\n    let deviceOrientationControls;\n    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {\n        deviceOrientationControls = new three_stdlib__WEBPACK_IMPORTED_MODULE_6__.DeviceOrientationControls(camera);\n    }\n    // Animation loop\n    function animate() {\n        requestAnimationFrame(animate);\n        const delta = clock.getDelta();\n        if (mixer1) {\n            mixer1.update(delta);\n        }\n        if (deviceOrientationControls) {\n            deviceOrientationControls.update();\n        }\n        composer.render();\n    }\n    animate();\n    // Mouse and zoom controls\n    window.addEventListener(\"mousemove\", (event)=>{\n        mouse.x = event.clientX / window.innerWidth * 2 - 1;\n        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;\n    });\n    function zoom(direction) {\n        camera.position.z += direction;\n    }\n    window.addEventListener(\"wheel\", (event)=>{\n        zoom(event.deltaY > 0 ? 1 : -1);\n    });\n}\nfunction loadModel(modelPath) {\n    const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();\n    loader.load(modelPath, function(gltf) {\n        console.log(\"Model loaded:\", modelPath); // Log for debugging\n        gltf.scene.scale.set(10, 10, 10); // Scale down the model\n        scene.add(gltf.scene);\n        gltf.scene.position.set(0, 0, 0); // Position the model at the origin\n        if (gltf.animations && gltf.animations.length) {\n            mixer = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationMixer(gltf.scene);\n            const action = mixer.clipAction(gltf.animations[0]);\n            action.play();\n        }\n    }, undefined, function(error) {\n        console.error(\"Error loading model:\", error);\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RE4sTUFBTXNFLENBQUMsR0FBRyxDQUFFSCxDQUFBQSxNQUFNSSxPQUFPLEdBQUdsRSxPQUFPRSxXQUFXLElBQUksSUFBSTtJQUMxRDtJQUVBLFNBQVNpRSxLQUFLQyxTQUFTO1FBQ25CdEUsT0FBT0ssUUFBUSxDQUFDQyxDQUFDLElBQUlnRTtJQUN6QjtJQUNBcEUsT0FBT21ELGdCQUFnQixDQUFDLFNBQVMsQ0FBQ1c7UUFDOUJLLEtBQUtMLE1BQU1PLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQztJQUNqQztBQUVKO0FBRU8sU0FBU0MsVUFBVUMsU0FBUztJQUMvQixNQUFNakQsU0FBUyxJQUFJckMsZ0ZBQVVBO0lBQzdCcUMsT0FBT0MsSUFBSSxDQUFDZ0QsV0FBVyxTQUFVL0MsSUFBSTtRQUNqQ2pDLFFBQVFpRixHQUFHLENBQUMsaUJBQWlCRCxZQUFZLG9CQUFvQjtRQUU3RC9DLEtBQUtwQyxLQUFLLENBQUNxQyxLQUFLLENBQUNMLEdBQUcsQ0FBQyxJQUFJLElBQUksS0FBSyx1QkFBdUI7UUFDekRoQyxNQUFNc0MsR0FBRyxDQUFDRixLQUFLcEMsS0FBSztRQUNwQm9DLEtBQUtwQyxLQUFLLENBQUNlLFFBQVEsQ0FBQ2lCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxtQ0FBbUM7UUFFckUsSUFBSUksS0FBS0csVUFBVSxJQUFJSCxLQUFLRyxVQUFVLENBQUNDLE1BQU0sRUFBRTtZQUMzQ1AsUUFBUSxJQUFJeEMsaURBQW9CLENBQUMyQyxLQUFLcEMsS0FBSztZQUMzQyxNQUFNMEMsU0FBU1QsTUFBTVUsVUFBVSxDQUFDUCxLQUFLRyxVQUFVLENBQUMsRUFBRTtZQUNsREcsT0FBT0UsSUFBSTtRQUNmO0lBQ0osR0FBR0ksV0FBVyxTQUFVNUMsS0FBSztRQUN6QkQsUUFBUUMsS0FBSyxDQUFDLHdCQUF3QkE7SUFDMUM7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9hcHAuanM/YzI0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IEVmZmVjdENvbXBvc2VyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9FZmZlY3RDb21wb3Nlci5qc1wiO1xuaW1wb3J0IHsgUmVuZGVyUGFzcyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvUmVuZGVyUGFzcy5qc1wiO1xuaW1wb3J0IHsgVW5yZWFsQmxvb21QYXNzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9VbnJlYWxCbG9vbVBhc3MuanNcIjtcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJztcbmltcG9ydCB7IERldmljZU9yaWVudGF0aW9uQ29udHJvbHMgfSBmcm9tICd0aHJlZS1zdGRsaWInO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzLmpzJztcblxubGV0IHNjZW5lOyAvLyBNYWtlIHNjZW5lIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIGl0IGNhbiBiZSBhY2Nlc3NlZCBieSBib3RoIGZ1bmN0aW9uc1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplVGhyZWVKUyhtb3VudFBvaW50KSB7XG4gICAgaWYgKCFtb3VudFBvaW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNb3VudCBwb2ludCBpcyBudWxsLiBDYW5ub3QgaW5pdGlhbGl6ZSBUaHJlZUpTLlwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xuICAgIGxldCBtb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbiAgICAvLyBTZXQgdXAgdGhlIHNjZW5lLCBjYW1lcmEsIGFuZCByZW5kZXJlclxuICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDU7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYWxwaGE6IHRydWUgfSk7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4RjVGNURDLCAxKTsgLy8gQmVpZ2UgY29sb3IgYXMgZGVmYXVsdFxuXG4gICAgbW91bnRQb2ludC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICAvLyBDcmVhdGUgYSByZWQgc3F1YXJlIChjdWJlKVxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpOyAvLyAxeDF4MSBjdWJlXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZjAwMDAgfSk7IC8vIFJlZCBjb2xvclxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuXG4gICAgLy8gUG9zaXRpb24gdGhlIGN1YmUgYXQgdGhlIGNlbnRlciBvZiB0aGUgc2NlbmVcbiAgICBjdWJlLnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcblxuICAgIC8vIEFkZCB0aGUgY3ViZSB0byB0aGUgc2NlbmVcbiAgICAvL3NjZW5lLmFkZChjdWJlKTtcbiAgICAvLyBMb2FkIHRoZSBHTFRGIG1vZGVsXG4gICAgbGV0IG1peGVyOyAvLyBBbmltYXRpb24gbWl4ZXJcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xuICAgIGxvYWRlci5sb2FkKCdvbmNvbG9neS9zY2VuZS5nbHRmJywgZnVuY3Rpb24gKGdsdGYpIHtcbiAgICAgICAgZ2x0Zi5zY2VuZS5zY2FsZS5zZXQoMTAsIDEwLCAxMCk7IC8vIFNjYWxlIGRvd24gdGhlIG1vZGVsXG4gICAgICAgIHNjZW5lLmFkZChnbHRmLnNjZW5lKTtcbiAgICAgICAgZ2x0Zi5zY2VuZS5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7IC8vIE1vdmUgdGhlIG1vZGVsIHRvIHRoZSByaWdodFxuXG4gICAgICAgIGlmIChnbHRmLmFuaW1hdGlvbnMgJiYgZ2x0Zi5hbmltYXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgbWl4ZXIgPSBuZXcgVEhSRUUuQW5pbWF0aW9uTWl4ZXIoZ2x0Zi5zY2VuZSk7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBtaXhlci5jbGlwQWN0aW9uKGdsdGYuYW5pbWF0aW9uc1swXSk7XG4gICAgICAgICAgICBhY3Rpb24ucGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIGdsdGYuc2NlbmUudHJhdmVyc2UoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmlzTWVzaCkge1xuICAgICAgICAgICAgICAgIC8vICBub2RlLm1hdGVyaWFsLmNvbG9yLnNldCgweDAwMDAwMCk7IC8vIFNldCBjb2xvciB0byBibGFja1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCB1bmRlZmluZWQsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBsaWdodHNcbiAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAwLjEpO1xuICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuXG4gICAgY29uc3QgZGlyZWN0aW9uYWxMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAxKTtcbiAgICBkaXJlY3Rpb25hbExpZ2h0LnBvc2l0aW9uLnNldCgxLCAxLCAxKTtcbiAgICBzY2VuZS5hZGQoZGlyZWN0aW9uYWxMaWdodCk7XG5cbiAgICAvLyBQb3N0LXByb2Nlc3NpbmdcbiAgICBjb25zdCByZW5kZXJTY2VuZSA9IG5ldyBSZW5kZXJQYXNzKHNjZW5lLCBjYW1lcmEpO1xuXG4gICAgY29uc3QgYmxvb21QYXNzID0gbmV3IFVucmVhbEJsb29tUGFzcyhcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCksXG4gICAgICAgIDEuNSwgMC40LCAwLjg1XG4gICAgKTtcbiAgICBibG9vbVBhc3MudGhyZXNob2xkID0gMC4xO1xuICAgIGJsb29tUGFzcy5zdHJlbmd0aCA9IDAuNDtcbiAgICBibG9vbVBhc3MucmFkaXVzID0gMC4xO1xuXG4gICAgY29uc3QgY29tcG9zZXIgPSBuZXcgRWZmZWN0Q29tcG9zZXIocmVuZGVyZXIpO1xuICAgIGNvbXBvc2VyLmFkZFBhc3MocmVuZGVyU2NlbmUpO1xuICAgIC8vIGNvbXBvc2VyLmFkZFBhc3MoYmxvb21QYXNzKTtcblxuICAgIC8vIEhhbmRsZSB3aW5kb3cgcmVzaXplXG4gICAgZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XG4gICAgICAgIGNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgY29tcG9zZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplLCBmYWxzZSk7XG5cbiAgICAvLyBEZXZpY2Ugb3JpZW50YXRpb24gY29udHJvbHMgZm9yIG1vYmlsZVxuICAgIGxldCBkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzO1xuICAgIGlmICgvTW9iaXxBbmRyb2lkfGlQaG9uZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgZGV2aWNlT3JpZW50YXRpb25Db250cm9scyA9IG5ldyBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzKGNhbWVyYSk7XG4gICAgfVxuXG4gICAgLy8gQW5pbWF0aW9uIGxvb3BcbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcbiAgICAgICAgaWYgKG1peGVyKSB7XG4gICAgICAgICAgICBtaXhlci51cGRhdGUoZGVsdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzKSB7XG4gICAgICAgICAgICBkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvc2VyLnJlbmRlcigpO1xuICAgIH1cbiAgICBhbmltYXRlKCk7XG5cbiAgICAvLyBNb3VzZSBhbmQgem9vbSBjb250cm9sc1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbW91c2UueCA9IChldmVudC5jbGllbnRYIC8gd2luZG93LmlubmVyV2lkdGgpICogMiAtIDE7XG4gICAgICAgIG1vdXNlLnkgPSAtKGV2ZW50LmNsaWVudFkgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogMiArIDE7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiB6b29tKGRpcmVjdGlvbikge1xuICAgICAgICBjYW1lcmEucG9zaXRpb24ueiArPSBkaXJlY3Rpb247XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChldmVudCkgPT4ge1xuICAgICAgICB6b29tKGV2ZW50LmRlbHRhWSA+IDAgPyAxIDogLTEpO1xuICAgIH0pO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTW9kZWwobW9kZWxQYXRoKSB7XG4gICAgY29uc3QgbG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKTtcbiAgICBsb2FkZXIubG9hZChtb2RlbFBhdGgsIGZ1bmN0aW9uIChnbHRmKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW9kZWwgbG9hZGVkOlwiLCBtb2RlbFBhdGgpOyAvLyBMb2cgZm9yIGRlYnVnZ2luZ1xuXG4gICAgICAgIGdsdGYuc2NlbmUuc2NhbGUuc2V0KDEwLCAxMCwgMTApOyAvLyBTY2FsZSBkb3duIHRoZSBtb2RlbFxuICAgICAgICBzY2VuZS5hZGQoZ2x0Zi5zY2VuZSk7XG4gICAgICAgIGdsdGYuc2NlbmUucG9zaXRpb24uc2V0KDAsIDAsIDApOyAvLyBQb3NpdGlvbiB0aGUgbW9kZWwgYXQgdGhlIG9yaWdpblxuXG4gICAgICAgIGlmIChnbHRmLmFuaW1hdGlvbnMgJiYgZ2x0Zi5hbmltYXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgbWl4ZXIgPSBuZXcgVEhSRUUuQW5pbWF0aW9uTWl4ZXIoZ2x0Zi5zY2VuZSk7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBtaXhlci5jbGlwQWN0aW9uKGdsdGYuYW5pbWF0aW9uc1swXSk7XG4gICAgICAgICAgICBhY3Rpb24ucGxheSgpO1xuICAgICAgICB9XG4gICAgfSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgbW9kZWw6XCIsIGVycm9yKTtcbiAgICB9KTtcbn0iXSwibmFtZXMiOlsiVEhSRUUiLCJFZmZlY3RDb21wb3NlciIsIlJlbmRlclBhc3MiLCJVbnJlYWxCbG9vbVBhc3MiLCJHTFRGTG9hZGVyIiwiRGV2aWNlT3JpZW50YXRpb25Db250cm9scyIsIk9yYml0Q29udHJvbHMiLCJzY2VuZSIsImluaXRpYWxpemVUaHJlZUpTIiwibW91bnRQb2ludCIsImNvbnNvbGUiLCJlcnJvciIsImNsb2NrIiwiQ2xvY2siLCJtb3VzZSIsIlZlY3RvcjIiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJzZXRTaXplIiwic2V0Q2xlYXJDb2xvciIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsImNvbnRyb2xzIiwiZ2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsIm1hdGVyaWFsIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJjb2xvciIsImN1YmUiLCJNZXNoIiwic2V0IiwibWl4ZXIiLCJsb2FkZXIiLCJsb2FkIiwiZ2x0ZiIsInNjYWxlIiwiYWRkIiwiYW5pbWF0aW9ucyIsImxlbmd0aCIsIkFuaW1hdGlvbk1peGVyIiwiYWN0aW9uIiwiY2xpcEFjdGlvbiIsInBsYXkiLCJ0cmF2ZXJzZSIsIm5vZGUiLCJpc01lc2giLCJ1bmRlZmluZWQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJkaXJlY3Rpb25hbExpZ2h0IiwiRGlyZWN0aW9uYWxMaWdodCIsInJlbmRlclNjZW5lIiwiYmxvb21QYXNzIiwidGhyZXNob2xkIiwic3RyZW5ndGgiLCJyYWRpdXMiLCJjb21wb3NlciIsImFkZFBhc3MiLCJvbldpbmRvd1Jlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJhZGRFdmVudExpc3RlbmVyIiwiZGV2aWNlT3JpZW50YXRpb25Db250cm9scyIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGVsdGEiLCJnZXREZWx0YSIsInVwZGF0ZSIsInJlbmRlciIsImV2ZW50IiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsInpvb20iLCJkaXJlY3Rpb24iLCJkZWx0YVkiLCJsb2FkTW9kZWwiLCJtb2RlbFBhdGgiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/app.js\n"));

/***/ })

});