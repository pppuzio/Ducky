
//SETUP

var scene = new THREE.Scene(); // nowa scena
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); //nowa kamera

var renderer = new THREE.WebGLRenderer(); //nowy renderer
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener('resize', function() {  // ustawianie Viewport on resize

    var width = window.innerWidth;
    var height = window.innerHeight;

    renderer.setSize(width,height);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

controls = new THREE.OrbitControls( camera, renderer.domElement );


// BUILDING A SCENE & OBJECTS





camera.position.z = 10;   // oddalamy kamere, żeby widzieć obiekt
camera.position.y = 4;

var ambientLight = new THREE.AmbientLight( 0xff890a, 1.0);
scene.add( ambientLight );

var secondaryAmbientLight = new THREE.DirectionalLight( 0x0a23ff,0.2);
scene.add (secondaryAmbientLight);

var light1 = new THREE.DirectionalLight(0xFFFFFF, 0.5,);
scene.add( light1 );


var loader = new THREE.OBJLoader();

loader.load(

    'obj/ducky.obj',

    function(object){


        scene.add (object);

    }
);




function animate() {         // renderowanie
    requestAnimationFrame( animate );  //odświeża obraz, typowo 60 klatek/s




    renderer.render( scene, camera );  // metoda renderuje render ( parametrami jest scena i kamera
}
animate();  // wywołujemy renderowanie