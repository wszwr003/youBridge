import { Component, AfterViewInit, ViewChild, Input, ElementRef, HostListener } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
@Component({
  selector: "app-overview-d3",
  templateUrl: "./overview-d3.component.html",
  styleUrls: ["./overview-d3.component.scss"]
})
export class OverviewD3Component implements AfterViewInit {
  @Input() name: string;

  @ViewChild('someCanvas', {static: false}) canvasRef: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event){
   this.resizeCanvasToDisplaySize(true);
  }

  scene = null;
  camera = null;
  renderer = null;
  controls = null;
  mesh = null;
  light = null;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  constructor() {
    this.scene = new THREE.Scene();
    //this.camera = new THREE.PerspectiveCamera(35, 1, 0.1, 1000)
  }

  ngAfterViewInit(): void {
    //this.configScene();
    //this.configCamera();
    //this.configRenderer();
    //this.configControls();

    //this.createLight();
    //this.createMesh();

    //this.animate();
  }

  configScene(): void {
    this.scene.background = new THREE.Color( 0xdddddd );
  }

  private calculateAspectRatio(): number {
    const height = this.canvas.clientHeight;
    if (height === 0) {
      return 0;
    }
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  configCamera(): void {
    this.camera.aspect = this.calculateAspectRatio();
    this.camera.updateProjectionMatrix();
	  this.camera.position.set( -15, 10, 15 );
	  this.camera.lookAt( this.scene.position );
  }

  resizeCanvasToDisplaySize(force): void {
    // See: https://stackoverflow.com/questions/29884485/threejs-canvas-size-based-on-container
    //https://stackblitz.com/edit/angular-three-flexbox
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    if (force || this.canvas.width !== width || this.canvas.height !== height) {
      // you must pass false here or three.js sadly fights the browser
      this.renderer.setSize(width, height, false);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }
  }

  configRenderer(): void {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true
    });
    this.renderer.setPixelRatio(1);
    this.renderer.setClearColor( 0x000000, 0 );
    this.resizeCanvasToDisplaySize(true);
  }

  configControls(): void {
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.autoRotate = false;
    this.controls.enableZoom = true;
    this.controls.enablePan = true;
    this.controls.update();
  }

  createLight(): void {
    this.light = new THREE.PointLight( 0xffffff );
	  this.light.position.set( -10, 10, 10 );
	  this.scene.add( this.light );
  }

  createMesh(): void {
    const geometry = new THREE.BoxGeometry(5, 5, 5);
    const material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);
  }

  animate(): void {
    window.requestAnimationFrame(() => this.animate());
    // this.mesh.rotation.x += 0.01;
    // this.mesh.rotation.y += 0.01;

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    this.controls
  }
}
