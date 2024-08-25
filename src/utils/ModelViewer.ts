import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export class ModelViewer {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private mixer: THREE.AnimationMixer | null = null;
  private clock: THREE.Clock;
  private controls: OrbitControls;
  private isPlaying: boolean = true;
  private speed: number = 0.2;

  constructor(container: HTMLElement) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.clock = new THREE.Clock();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.init(container);
  }

  private init(container: HTMLElement): void {
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);

    // Set initial camera position (zoomed out on Z-axis)
    this.camera.position.set(0, 0.75, 2); // Increased Z value
    this.camera.lookAt(0, 0.75, 0);

    // Set up OrbitControls
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.enableZoom = true;
    this.controls.target.set(0, 0.75, 0);
    this.controls.update();

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(2, 4, 3);
    this.scene.add(directionalLight);

    // Create gradient background
    const gradientTexture = this.createGradientTexture();
    this.scene.background = gradientTexture;

    // Add floor
    const floorGeometry = new THREE.PlaneGeometry(3, 3); // Increased floor size
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: "beige",
      roughness: 0.6,
      metalness: 0.2,
    });
    const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
    floorMesh.rotation.x = -Math.PI / 2; // Rotate to lay flat
    floorMesh.receiveShadow = true;
    this.scene.add(floorMesh);

    // Add grid to the floor
    const gridHelper = new THREE.GridHelper(3, 10, 0x000000, 0x000000); // Increased grid size and density
    gridHelper.position.y = 0.01; // Slightly above the floor to prevent z-fighting
    this.scene.add(gridHelper);

    this.loadModel();
    this.animate();

    window.addEventListener("resize", () => this.onWindowResize(container));
  }

  private createGradientTexture(): THREE.Texture {
    const canvas = document.createElement("canvas");
    canvas.width = 2;
    canvas.height = 2;

    const context = canvas.getContext("2d");
    if (!context) return new THREE.Texture();

    // Create gradient
    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#87CEEB"); // Sky blue
    gradient.addColorStop(1, "#E6E6FA"); // Lavender

    // Fill with gradient
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    return texture;
  }

  private loadModel(): void {
    const loader = new GLTFLoader();
    loader.load(
      "/1990.glb",
      (gltf) => {
        this.scene.add(gltf.scene);

        // Center and scale the model
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        gltf.scene.position.sub(center);
        gltf.scene.position.y = 0; // Place on the floor

        // Scale the model if needed
        const height = box.max.y - box.min.y;
        const desiredHeight = 1.5; // Adjust this value to change model size
        const scale = desiredHeight / height;
        gltf.scene.scale.set(scale, scale, scale);

        this.mixer = new THREE.AnimationMixer(gltf.scene);
        if (gltf.animations.length > 0) {
          const action = this.mixer.clipAction(gltf.animations[0]);
          action.play();
        }

        // Set final camera position after a short delay
        setTimeout(() => {
          this.camera.position.set(0, desiredHeight / 2, desiredHeight * 2); // Increased Z multiplier
          this.controls.target.set(0, desiredHeight / 2, 0);
          this.controls.update();
        }, 100);
      },
      undefined,
      (error) => {
        console.error("An error happened", error);
      }
    );
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());

    if (this.isPlaying && this.mixer) {
      const delta = this.clock.getDelta();
      this.mixer.update(delta * this.speed);
    }

    this.controls.update(); // Update controls in animation loop
    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize(container: HTMLElement): void {
    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  }

  public togglePlayPause(): void {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.clock.start();
    } else {
      this.clock.stop();
    }
  }

  public setSpeed(speed: number): void {
    this.speed = speed;
  }
}
