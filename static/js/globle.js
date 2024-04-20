// Set up Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create stars
const numStars = 1000;
const starGeometry = new THREE.SphereGeometry(0.01, 8, 8);
const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
for (let i = 0; i < numStars; i++) {
    const star = new THREE.Mesh(starGeometry, starMaterial);
    star.position.set(Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 1000 - 500);
    scene.add(star);
}

// Create globe
const globeGeometry = new THREE.SphereGeometry(1, 32, 32);
const globeTexture = new THREE.TextureLoader().load('globe.png');
const globeMaterial = new THREE.MeshBasicMaterial({ map: globeTexture });
const globe = new THREE.Mesh(globeGeometry, globeMaterial);
scene.add(globe);

// Position the camera
camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.005; // Rotate the globe
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
