let renderer, scene, camera, cameraCtrl;
let width, height, cx, cy, wWidth, wHeight;
const TMath = THREE.Math;

let conf = {
    color: 0xffffff,
    objectWidth: 12,
    objectThickness: 3,
    ambientColor: 0x808080,
    light1Color: 0xffffff,
    shadow: false,
    perspective: 75,
    cameraZ: 75,
};

let objects = [];
let geometry, material;
let hMap, hMap0, nx, ny;

init();

function init() {
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('reveal-effect'), antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(conf.perspective, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = conf.cameraZ;

    scene = new THREE.Scene();
    geometry = new THREE.BoxGeometry(conf.objectWidth, conf.objectWidth, conf.objectThickness);

    // $(window).on('load', initScene);
    window.addEventListener('load', initScene);

    animate();
};

function initScene() {
    onResize();
    scene = new THREE.Scene();
    initLights();
    initObjects();
}

function initLights() {
    scene.add(new THREE.AmbientLight(conf.ambientColor));
    let light = new THREE.PointLight(0xffffff);
    light.position.z = 100;
    scene.add(light);
}

function initObjects() {
    objects = [];
    nx = Math.round(wWidth / conf.objectWidth) + 1;
    ny = Math.round(wHeight / conf.objectWidth) + 1;
    let mesh, x, y;
    for (let i = 0; i < nx; i++) {
        for (let j = 0; j < ny; j++) {
            material = new THREE.MeshLambertMaterial({ color: conf.color, transparent: true, opacity: 1 });
            mesh = new THREE.Mesh(geometry, material);
            x = -wWidth / 2 + i * conf.objectWidth;
            y = -wHeight / 2 + j * conf.objectWidth;
            mesh.position.set(x, y, 0);
            objects.push(mesh);
            scene.add(mesh);
        }
    }
    document.body.classList.add('loaded');
    startAnim();
}

function startAnim() {
    document.body.classList.remove('revealed');
    objects.forEach(mesh => {
        mesh.rotation.set(0, 0, 0);
        mesh.material.opacity = 1;
        mesh.position.z = 0;
        let delay = TMath.randFloat(1, 2);
        let rx = TMath.randFloatSpread(2 * Math.PI);
        let ry = TMath.randFloatSpread(2 * Math.PI);
        let rz = TMath.randFloatSpread(2 * Math.PI);
        TweenMax.to(mesh.rotation, 2, { x: rx, y: ry, z: rz, delay: delay });
        TweenMax.to(mesh.position, 2, { z: 80, delay: delay + 0.5, ease: Power1.easeOut });
        TweenMax.to(mesh.material, 2, { opacity: 0, delay: delay + 0.5 });
    });
    setTimeout(() => {
        document.body.classList.add('revealed');
    }, 4500);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

function onResize() {
    width = window.innerWidth; cx = width / 2;
    height = window.innerHeight; cy = height / 2;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);

    size = getRendererSize();
    wWidth = size[0];
    wHeight = size[1];
}

function getRendererSize() {
    const cam = new THREE.PerspectiveCamera(conf.perspective, camera.aspect);
    const vFOV = cam.fov * Math.PI / 180;
    const height = 2 * Math.tan(vFOV / 2) * Math.abs(conf.cameraZ);
    const width = height * cam.aspect;
    return [width, height];
}