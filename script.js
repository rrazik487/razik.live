// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

camera.position.z = 5;

// Cube geometry
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = [
    new THREE.MeshBasicMaterial({ color: 0x1e3c72 }), // About
    new THREE.MeshBasicMaterial({ color: 0x2a5298 }), // Projects
    new THREE.MeshBasicMaterial({ color: 0x4ecdc4 }), // Contact
    new THREE.MeshBasicMaterial({ color: 0x45b7d1 }), // LinkedIn
    new THREE.MeshBasicMaterial({ color: 0x96ceb4 }), // Projects 2
    new THREE.MeshBasicMaterial({ color: 0xffe66d })  // Resume
];
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Interaction
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let rotationSpeed = 0.005;

document.addEventListener('mousedown', () => isDragging = true);
document.addEventListener('mouseup', () => isDragging = false);
document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const deltaMove = {
            x: event.clientX - previousMousePosition.x,
            y: event.clientY - previousMousePosition.y
        };
        cube.rotation.y += deltaMove.x * rotationSpeed;
        cube.rotation.x += deltaMove.y * rotationSpeed;
        previousMousePosition = { x: event.clientX, y: event.clientY };
    }
});
document.addEventListener('mousemove', (event) => {
    previousMousePosition = { x: event.clientX, y: event.clientY };
});
document.addEventListener('wheel', (event) => {
    camera.position.z += event.deltaY * 0.01;
    camera.position.z = Math.max(2, Math.min(10, camera.position.z));
});

// Panels
const panels = {
    'about': `<h2>About Me</h2><p>Hi, I’m Razikur Rahman, an Electronics and Communications enthusiast from Jain University. Passionate about innovative projects and technology.</p>`,
    'projects': `<h2>Projects</h2>
        <ul>
            <li><a href="https://set.jainuniversity.ac.in/academics/electronics-and-communications/pdf/development-activities/razik-navic.pdf" target="_blank">NAViC Project</a></li>
            <li><a href="https://set.jainuniversity.ac.in/academics/electronics-and-communications/pdf/development-activities/navic-sentinel-report-sunil-sir.pdf" target="_blank">NAViC Sentinel Report</a></li>
            <li><a href="https://set.jainuniversity.ac.in/academics/electronics-and-communications/pdf/development-activities/smart-yoga-mat-abstract.pdf" target="_blank">Smart Yoga Mat Abstract</a></li>
            <li><a href="https://set.jainuniversity.ac.in/academics/electronics-and-communications/pdf/development-activities/smart-yoga-mat.pdf" target="_blank">Smart Yoga Mat</a></li>
        </ul>`,
    'contact': `<h2>Contact</h2><p>Email: <a href="mailto:rrazik487@gmail.com">rrazik487@gmail.com</a><br>Contact: 6382208661</p>`,
    'linkedin': `<h2>LinkedIn</h2><p>Connect with me on <a href="https://www.linkedin.com/in/s-razikur-rahman-304415235" target="_blank">LinkedIn</a></p>`
};

function showPanel(face) {
    const panel = document.createElement('div');
    panel.className = 'panel';
    panel.innerHTML = panels[face];
    document.body.appendChild(panel);
    setTimeout(() => panel.classList.add('active'), 10);
    setTimeout(() => {
        panel.remove();
        showPanel(Object.keys(panels)[Math.floor(Math.random() * Object.keys(panels).length)]);
    }, 5000);
}

// Raycaster for interaction
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(cube);
    if (intersects.length > 0) {
        const faceIndex = intersects[0].faceIndex;
        const faceMap = { 0: 'about', 1: 'projects', 2: 'contact', 3: 'linkedin', 4: 'projects', 5: 'resume' };
        showPanel(faceMap[faceIndex]);
    }
}

document.addEventListener('click', onMouseClick);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Resize handler
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
