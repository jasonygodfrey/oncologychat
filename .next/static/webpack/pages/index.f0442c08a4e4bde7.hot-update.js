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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeThreeJS: function() { return /* binding */ initializeThreeJS; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass.js */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var three_stdlib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three-stdlib */ \"./node_modules/three-stdlib/index.js\");\n\n\n\n\n\n\nfunction initializeThreeJS(mountPoint) {\n    const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();\n    let mouse = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n    // Set up the scene, camera, and renderer\n    const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.z = 5;\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n        alpha: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setClearColor(0xF5F5DC, 1); // Beige color as default\n    mountPoint.appendChild(renderer.domElement);\n    // Create a red square (cube)\n    const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1, 1, 1); // 1x1x1 cube\n    const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n        color: 0xff0000\n    }); // Red color\n    const cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);\n    // Position the cube at the center of the scene\n    cube.position.set(0, 0, 0);\n    // Add the cube to the scene\n    scene.add(cube);\n    // Load the GLTF model\n    let mixer; // Animation mixer\n    const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader();\n    loader.load(\"oncology/scene.gltf\", function(gltf) {\n        gltf.scene.scale.set(0.5, 0.5, 0.5); // Scale down the model\n        scene.add(gltf.scene);\n        gltf.scene.position.set(2, 0, 0); // Move the model to the right\n        if (gltf.animations && gltf.animations.length) {\n            mixer = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationMixer(gltf.scene);\n            const action = mixer.clipAction(gltf.animations[0]);\n            action.play();\n        }\n        gltf.scene.traverse(function(node) {\n            if (node.isMesh) {\n                node.material.color.set(0x000000); // Set color to black\n            }\n        });\n    }, undefined, function(error) {\n        console.error(error);\n    });\n    // Create lights\n    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 1);\n    scene.add(ambientLight);\n    const directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 1);\n    directionalLight.position.set(1, 1, 1);\n    scene.add(directionalLight);\n    // Post-processing\n    const renderScene = new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_2__.RenderPass(scene, camera);\n    const bloomPass = new three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_3__.UnrealBloomPass(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);\n    bloomPass.threshold = 0.1;\n    bloomPass.strength = 0.4;\n    bloomPass.radius = 0.1;\n    const composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__.EffectComposer(renderer);\n    composer.addPass(renderScene);\n    composer.addPass(bloomPass);\n    // Handle window resize\n    function onWindowResize() {\n        camera.aspect = window.innerWidth / window.innerHeight;\n        camera.updateProjectionMatrix();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        composer.setSize(window.innerWidth, window.innerHeight);\n    }\n    window.addEventListener(\"resize\", onWindowResize, false);\n    // Device orientation controls for mobile\n    let deviceOrientationControls;\n    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {\n        deviceOrientationControls = new three_stdlib__WEBPACK_IMPORTED_MODULE_5__.DeviceOrientationControls(camera);\n    }\n    // Animation loop\n    function animate() {\n        requestAnimationFrame(animate);\n        const delta = clock.getDelta();\n        if (mixer) {\n            mixer.update(delta);\n        }\n        if (deviceOrientationControls) {\n            deviceOrientationControls.update();\n        }\n        composer.render();\n    }\n    animate();\n    // Mouse and zoom controls\n    window.addEventListener(\"mousemove\", (event)=>{\n        mouse.x = event.clientX / window.innerWidth * 2 - 1;\n        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;\n    });\n    function zoom(direction) {\n        camera.position.z += direction;\n    }\n    window.addEventListener(\"wheel\", (event)=>{\n        zoom(event.deltaY > 0 ? 1 : -1);\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSTtJQUMxRDtJQUVBLFNBQVNrRSxLQUFLQyxTQUFTO1FBQ25CdkUsT0FBT0ssUUFBUSxDQUFDQyxDQUFDLElBQUlpRTtJQUN6QjtJQUNBckUsT0FBT29ELGdCQUFnQixDQUFDLFNBQVMsQ0FBQ1c7UUFDOUJLLEtBQUtMLE1BQU1PLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQztJQUNqQztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2FwcC5qcz9jMjQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgRWZmZWN0Q29tcG9zZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL0VmZmVjdENvbXBvc2VyLmpzXCI7XG5pbXBvcnQgeyBSZW5kZXJQYXNzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9SZW5kZXJQYXNzLmpzXCI7XG5pbXBvcnQgeyBVbnJlYWxCbG9vbVBhc3MgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL1VucmVhbEJsb29tUGFzcy5qc1wiO1xuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHsgRGV2aWNlT3JpZW50YXRpb25Db250cm9scyB9IGZyb20gJ3RocmVlLXN0ZGxpYic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplVGhyZWVKUyhtb3VudFBvaW50KSB7XG4gICAgY29uc3QgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcbiAgICBsZXQgbW91c2UgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG4gICAgLy8gU2V0IHVwIHRoZSBzY2VuZSwgY2FtZXJhLCBhbmQgcmVuZGVyZXJcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSA1O1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFscGhhOiB0cnVlIH0pO1xuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweEY1RjVEQywgMSk7IC8vIEJlaWdlIGNvbG9yIGFzIGRlZmF1bHRcblxuICAgIG1vdW50UG9pbnQuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG4vLyBDcmVhdGUgYSByZWQgc3F1YXJlIChjdWJlKVxuY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMSwgMSk7IC8vIDF4MXgxIGN1YmVcbmNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4ZmYwMDAwIH0pOyAvLyBSZWQgY29sb3JcbmNvbnN0IGN1YmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuXG4vLyBQb3NpdGlvbiB0aGUgY3ViZSBhdCB0aGUgY2VudGVyIG9mIHRoZSBzY2VuZVxuY3ViZS5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG5cbi8vIEFkZCB0aGUgY3ViZSB0byB0aGUgc2NlbmVcbnNjZW5lLmFkZChjdWJlKTtcbiAgICAvLyBMb2FkIHRoZSBHTFRGIG1vZGVsXG4gICAgbGV0IG1peGVyOyAvLyBBbmltYXRpb24gbWl4ZXJcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xuICAgIGxvYWRlci5sb2FkKCdvbmNvbG9neS9zY2VuZS5nbHRmJywgZnVuY3Rpb24gKGdsdGYpIHtcbiAgICAgICAgZ2x0Zi5zY2VuZS5zY2FsZS5zZXQoMC41LCAwLjUsIDAuNSk7IC8vIFNjYWxlIGRvd24gdGhlIG1vZGVsXG4gICAgICAgIHNjZW5lLmFkZChnbHRmLnNjZW5lKTtcbiAgICAgICAgZ2x0Zi5zY2VuZS5wb3NpdGlvbi5zZXQoMiwgMCwgMCk7IC8vIE1vdmUgdGhlIG1vZGVsIHRvIHRoZSByaWdodFxuXG4gICAgICAgIGlmIChnbHRmLmFuaW1hdGlvbnMgJiYgZ2x0Zi5hbmltYXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgbWl4ZXIgPSBuZXcgVEhSRUUuQW5pbWF0aW9uTWl4ZXIoZ2x0Zi5zY2VuZSk7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBtaXhlci5jbGlwQWN0aW9uKGdsdGYuYW5pbWF0aW9uc1swXSk7XG4gICAgICAgICAgICBhY3Rpb24ucGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIGdsdGYuc2NlbmUudHJhdmVyc2UoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmlzTWVzaCkge1xuICAgICAgICAgICAgICAgIG5vZGUubWF0ZXJpYWwuY29sb3Iuc2V0KDB4MDAwMDAwKTsgLy8gU2V0IGNvbG9yIHRvIGJsYWNrXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIHVuZGVmaW5lZCwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGxpZ2h0c1xuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYsIDEpO1xuICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuXG4gICAgY29uc3QgZGlyZWN0aW9uYWxMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAxKTtcbiAgICBkaXJlY3Rpb25hbExpZ2h0LnBvc2l0aW9uLnNldCgxLCAxLCAxKTtcbiAgICBzY2VuZS5hZGQoZGlyZWN0aW9uYWxMaWdodCk7XG5cbiAgICAvLyBQb3N0LXByb2Nlc3NpbmdcbiAgICBjb25zdCByZW5kZXJTY2VuZSA9IG5ldyBSZW5kZXJQYXNzKHNjZW5lLCBjYW1lcmEpO1xuXG4gICAgY29uc3QgYmxvb21QYXNzID0gbmV3IFVucmVhbEJsb29tUGFzcyhcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCksXG4gICAgICAgIDEuNSwgMC40LCAwLjg1XG4gICAgKTtcbiAgICBibG9vbVBhc3MudGhyZXNob2xkID0gMC4xO1xuICAgIGJsb29tUGFzcy5zdHJlbmd0aCA9IDAuNDtcbiAgICBibG9vbVBhc3MucmFkaXVzID0gMC4xO1xuXG4gICAgY29uc3QgY29tcG9zZXIgPSBuZXcgRWZmZWN0Q29tcG9zZXIocmVuZGVyZXIpO1xuICAgIGNvbXBvc2VyLmFkZFBhc3MocmVuZGVyU2NlbmUpO1xuICAgIGNvbXBvc2VyLmFkZFBhc3MoYmxvb21QYXNzKTtcblxuICAgIC8vIEhhbmRsZSB3aW5kb3cgcmVzaXplXG4gICAgZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XG4gICAgICAgIGNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgY29tcG9zZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplLCBmYWxzZSk7XG5cbiAgICAvLyBEZXZpY2Ugb3JpZW50YXRpb24gY29udHJvbHMgZm9yIG1vYmlsZVxuICAgIGxldCBkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzO1xuICAgIGlmICgvTW9iaXxBbmRyb2lkfGlQaG9uZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgZGV2aWNlT3JpZW50YXRpb25Db250cm9scyA9IG5ldyBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzKGNhbWVyYSk7XG4gICAgfVxuXG4gICAgLy8gQW5pbWF0aW9uIGxvb3BcbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcbiAgICAgICAgaWYgKG1peGVyKSB7XG4gICAgICAgICAgICBtaXhlci51cGRhdGUoZGVsdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzKSB7XG4gICAgICAgICAgICBkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvc2VyLnJlbmRlcigpO1xuICAgIH1cbiAgICBhbmltYXRlKCk7XG5cbiAgICAvLyBNb3VzZSBhbmQgem9vbSBjb250cm9sc1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbW91c2UueCA9IChldmVudC5jbGllbnRYIC8gd2luZG93LmlubmVyV2lkdGgpICogMiAtIDE7XG4gICAgICAgIG1vdXNlLnkgPSAtKGV2ZW50LmNsaWVudFkgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogMiArIDE7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiB6b29tKGRpcmVjdGlvbikge1xuICAgICAgICBjYW1lcmEucG9zaXRpb24ueiArPSBkaXJlY3Rpb247XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChldmVudCkgPT4ge1xuICAgICAgICB6b29tKGV2ZW50LmRlbHRhWSA+IDAgPyAxIDogLTEpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbIlRIUkVFIiwiRWZmZWN0Q29tcG9zZXIiLCJSZW5kZXJQYXNzIiwiVW5yZWFsQmxvb21QYXNzIiwiR0xURkxvYWRlciIsIkRldmljZU9yaWVudGF0aW9uQ29udHJvbHMiLCJpbml0aWFsaXplVGhyZWVKUyIsIm1vdW50UG9pbnQiLCJjbG9jayIsIkNsb2NrIiwibW91c2UiLCJWZWN0b3IyIiwic2NlbmUiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJzZXRTaXplIiwic2V0Q2xlYXJDb2xvciIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsImdlb21ldHJ5IiwiQm94R2VvbWV0cnkiLCJtYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwiY29sb3IiLCJjdWJlIiwiTWVzaCIsInNldCIsImFkZCIsIm1peGVyIiwibG9hZGVyIiwibG9hZCIsImdsdGYiLCJzY2FsZSIsImFuaW1hdGlvbnMiLCJsZW5ndGgiLCJBbmltYXRpb25NaXhlciIsImFjdGlvbiIsImNsaXBBY3Rpb24iLCJwbGF5IiwidHJhdmVyc2UiLCJub2RlIiwiaXNNZXNoIiwidW5kZWZpbmVkIiwiZXJyb3IiLCJjb25zb2xlIiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiZGlyZWN0aW9uYWxMaWdodCIsIkRpcmVjdGlvbmFsTGlnaHQiLCJyZW5kZXJTY2VuZSIsImJsb29tUGFzcyIsInRocmVzaG9sZCIsInN0cmVuZ3RoIiwicmFkaXVzIiwiY29tcG9zZXIiLCJhZGRQYXNzIiwib25XaW5kb3dSZXNpemUiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRldmljZU9yaWVudGF0aW9uQ29udHJvbHMiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRlbHRhIiwiZ2V0RGVsdGEiLCJ1cGRhdGUiLCJyZW5kZXIiLCJldmVudCIsIngiLCJjbGllbnRYIiwieSIsImNsaWVudFkiLCJ6b29tIiwiZGlyZWN0aW9uIiwiZGVsdGFZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/app.js\n"));

/***/ })

});