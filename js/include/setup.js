// requestAnim shim layer by Paul Irish
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function(
              /* function */ callback,
              /* DOMElement */ element){
              window.setTimeout(callback, 1000 / 60);
            };
  })();


//set the scene size
var WIDTH = window.innerWidth / 2,
  HEIGHT = window.innerWidth / 2;
//set some camera attributes
var VIEW_ANGLE = 45,
  ASPECT = WIDTH / HEIGHT,
  NEAR = 0.1,
  FAR = 10000;
//get the DOM element to attach to
//assume we've got jQuery to hand
var $container = $('#container');
//create a WebGL renderer, camera
//and a scene
var renderer = new THREE.WebGLRenderer();
camera =
  new THREE.PerspectiveCamera(
    VIEW_ANGLE,
    ASPECT,
    NEAR,
    FAR);
var scene = new THREE.Scene();
//the camera starts at 0,0,0
//so pull it back
camera.position.z = 3;
camera.position.y = 1.5;
scene.add(camera);
//start the renderer
//attach the render-supplied DOM element
$container.append(renderer.domElement);
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);



function loadMesh(){
  //--------- MY MATERIAL --------//
  var vShader = $('vertexshader');
  var fShader = $('fragmentshader');
  shaderMaterial = new THREE.ShaderMaterial( {

    uniforms: uniforms,
    vertexShader: document.getElementById( 'vertexShader' ).textContent,
    fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
    wireframe: true

  } );
  //---------MAKING A MESH---------//
  //set up the sphere vars

  var radius = 50,
    segments = 16,
    rings = 16;
  //create a new mesh with
  //sphere geometry
  mesh = new THREE.Mesh(
    new THREE.PlaneGeometry( 2, 2, 32, 32 ),
    shaderMaterial
  );

  mesh.rotation.x = (Math.PI / 2.0);
  //add the sphere to the scene
  scene.add(mesh);
}
