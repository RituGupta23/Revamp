import React, { useEffect } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { LoadingManager } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Vertex and Fragment shaders (as text in JSX)
const vertexShader = `
  attribute float size;
  attribute vec3 customColor;
  varying vec3 vColor;

  void main() {
    vColor = customColor;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_PointSize = size * ( 300.0 / -mvPosition.z );
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform vec3 color;
  uniform sampler2D pointTexture;
  varying vec3 vColor;

  void main() {
    gl_FragColor = vec4( color * vColor, 1.0 );
    gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );
  }
`;

const Particle = () => {
  useEffect(() => {
    // Preload function setup
    const preload = () => {
      const manager = new THREE.LoadingManager();
      manager.onLoad = function () {
        const environment = new Environment(typo, particle);
      };

      let typo = null;
      const loader = new FontLoader(manager);
      loader.load('https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json', (font) => {
        typo = font;
      });

      const particle = new THREE.TextureLoader(manager).load(
        'https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png'
      );
    };

    if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll))
      preload();
    else document.addEventListener('DOMContentLoaded', preload);

    class Environment {
      constructor(font, particle) {
        this.font = font;
        this.particle = particle;
        this.container = document.querySelector('#magic');
        this.scene = new THREE.Scene();
        this.createCamera();
        this.createRenderer();
        this.setup();
        this.bindEvents();
      }

      bindEvents() {
        window.addEventListener('resize', this.onWindowResize.bind(this));
      }

      setup() {
        this.createParticles = new CreateParticles(this.scene, this.font, this.particle, this.camera, this.renderer);
      }

      render() {
        this.createParticles.render();
        this.renderer.render(this.scene, this.camera);
      }

      createCamera() {
        this.camera = new THREE.PerspectiveCamera(65, this.container.clientWidth / this.container.clientHeight, 1, 10000);
        this.camera.position.set(0, 0, 100);
      }

      createRenderer() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.container.appendChild(this.renderer.domElement);
        this.renderer.setAnimationLoop(() => {
          this.render();
        });
      }

      onWindowResize() {
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
      }
    }

    class CreateParticles {
      constructor(scene, font, particleImg, camera, renderer) {
        this.scene = scene;
        this.font = font;
        this.particleImg = particleImg;
        this.camera = camera;
        this.renderer = renderer;

        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2(-200, 200);
        this.colorChange = new THREE.Color();
        this.buttom = false;

        this.data = {
          text: 'FUTURE\nIS NOW',
          amount: 1500,
          particleSize: 1,
          particleColor: 0xffffff,
          textSize: 16,
          area: 250,
          ease: 0.05,
        };

        this.setup();
        this.bindEvents();
      }

      setup() {
        const geometry = new THREE.PlaneGeometry(
          this.visibleWidthAtZDepth(100, this.camera),
          this.visibleHeightAtZDepth(100, this.camera)
        );
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true });
        this.planeArea = new THREE.Mesh(geometry, material);
        this.planeArea.visible = false;
        this.createText();
      }

      bindEvents() {
        document.addEventListener('mousedown', this.onMouseDown.bind(this));
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
        document.addEventListener('mouseup', this.onMouseUp.bind(this));
      }

      onMouseDown() {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        const vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 0.5);
        vector.unproject(this.camera);
        const dir = vector.sub(this.camera.position).normalize();
        const distance = -this.camera.position.z / dir.z;
        this.currenPosition = this.camera.position.clone().add(dir.multiplyScalar(distance));

        this.buttom = true;
        this.data.ease = 0.01;
      }

      onMouseUp() {
        this.buttom = false;
        this.data.ease = 0.05;
      }

      onMouseMove() {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      }

      render() {
        this.renderer.render(this.scene, this.camera);
      }

      createText() {
        // Text generation using font data
        const shapes = this.font.generateShapes(this.data.text, this.data.textSize);
        const geometry = new THREE.ShapeGeometry(shapes);
        geometry.computeBoundingBox();

        const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
        const yMid = (geometry.boundingBox.max.y - geometry.boundingBox.min.y) / 2.85;

        geometry.center();

        let geoParticles = new THREE.BufferGeometry().setFromPoints(shapes.map((shape) => shape.getPoint(1000)));
        geoParticles.translate(xMid, yMid, 0);

        const material = new THREE.ShaderMaterial({
          uniforms: {
            color: { value: new THREE.Color(0xffffff) },
            pointTexture: { value: this.particleImg },
          },
          vertexShader,
          fragmentShader,
          blending: THREE.AdditiveBlending,
          depthTest: false,
          transparent: true,
        });

        this.particles = new THREE.Points(geoParticles, material);
        this.scene.add(this.particles);
      }

      visibleHeightAtZDepth(depth, camera) {
        const cameraOffset = camera.position.z;
        const vFOV = (camera.fov * Math.PI) / 180;
        return 2 * Math.tan(vFOV / 2) * Math.abs(depth - cameraOffset);
      }

      visibleWidthAtZDepth(depth, camera) {
        const height = this.visibleHeightAtZDepth(depth, camera);
        return height * camera.aspect;
      }
    }
  }, []);

  return (
    <div className="h-screen w-full bg-black text-white font-roboto">
      <div id="magic" className="fixed top-0 left-0 w-full h-full z-[-9999]" />
      <div className="playground fixed top-0 left-0 flex flex-col justify-end items-center h-screen w-full">
        <div className="bottomPosition text-center mb-12">
          <svg
            className="logo w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 278.8 278.8"
          >
            <circle fill="#000205" cx="139.4" cy="139.4" r="139.4" />
            <g fill="none" stroke="#FFF" strokeWidth="6.062" strokeMiterlimit="10">
              <path d="M214 183.4l-74.6 43.1-75.5-43.6V95.8l75.5-43.5 75.4 43.5v59.8l-11.3 6.5z" />
              <path d="M139.4 226.5l-18.8-38.2 18.8 10.8 75.4-43.5M63.9 95.8l75.3 43.6 75.6-43.6M139.2 139.4v59.7" />
            </g>
          </svg>
          
        </div>
      </div>
    </div>
  );
};

export default Particle;