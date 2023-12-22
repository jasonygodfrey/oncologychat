import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DeviceOrientationControls } from 'three-stdlib';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


export function initializeThreeJS(mountPoint) {
    if (!mountPoint) {
        console.error("Mount point is null. Cannot initialize ThreeJS.");
        return;
    }
    const clock = new THREE.Clock();
    let mouse = new THREE.Vector2();

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xF5F5DC, 1); // Beige color as default

    mountPoint.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
// Create a red square (cube)
const geometry = new THREE.BoxGeometry(1, 1, 1); // 1x1x1 cube
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red color
const cube = new THREE.Mesh(geometry, material);

// Position the cube at the center of the scene
cube.position.set(0, 0, 0);

// Add the cube to the scene
//scene.add(cube);
    // Load the GLTF model
    let mixer; // Animation mixer
    const loader = new GLTFLoader();
    loader.load('oncology/scene.gltf', function (gltf) {
        gltf.scene.scale.set(10, 10, 10); // Scale down the model
        scene.add(gltf.scene);
        gltf.scene.position.set(0, 0, 0); // Move the model to the right

        if (gltf.animations && gltf.animations.length) {
            mixer = new THREE.AnimationMixer(gltf.scene);
            const action = mixer.clipAction(gltf.animations[0]);
            action.play();
        }
        gltf.scene.traverse(function (node) {
            if (node.isMesh) {
              //  node.material.color.set(0x000000); // Set color to black
            }
        });
    }, undefined, function (error) {
        console.error(error);
    });

    // Create lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Post-processing
    const renderScene = new RenderPass(scene, camera);

    const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5, 0.4, 0.85
    );
    bloomPass.threshold = 0.1;
    bloomPass.strength = 0.4;
    bloomPass.radius = 0.1;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
   // composer.addPass(bloomPass);

    // Handle window resize
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize, false);

    // Device orientation controls for mobile
    let deviceOrientationControls;
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        deviceOrientationControls = new DeviceOrientationControls(camera);
    }

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        if (mixer) {
            mixer.update(delta);
        }
        if (deviceOrientationControls) {
            deviceOrientationControls.update();
        }
        composer.render();
    }
    animate();

    // Mouse and zoom controls
    window.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    function zoom(direction) {
        camera.position.z += direction;
    }
    window.addEventListener('wheel', (event) => {
        zoom(event.deltaY > 0 ? 1 : -1);
    });


}

